import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import Ajv2020 from 'ajv/dist/2020.js';

import {
  bundleDirectories,
  calculateMetrics,
  readJson,
  resultFiles,
} from './publication-lib.mjs';

function canonical(value) {
  return JSON.stringify(value);
}

function verifyChecksums(bundle) {
  const checksumFile = path.join(bundle, 'SHA256SUMS');
  const rows = fs.readFileSync(checksumFile, 'utf8').trim().split('\n');
  assert.ok(rows.length > 0, 'SHA256SUMS is empty');
  for (const row of rows) {
    const match = /^([a-f0-9]{64})  (.+)$/.exec(row);
    assert.ok(match, `invalid checksum row: ${row}`);
    const file = path.resolve(bundle, match[2]);
    assert.ok(file.startsWith(`${path.resolve(bundle)}${path.sep}`), `checksum path escapes bundle: ${match[2]}`);
    assert.ok(fs.existsSync(file), `checksummed file is missing: ${match[2]}`);
    const actual = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
    assert.equal(actual, match[1], `checksum mismatch: ${match[2]}`);
  }
}

function validateToolSurfaceInventory(bundle, resultNames) {
  const inventoryFile = path.join(bundle, 'tool-surfaces.json');
  assert.ok(fs.existsSync(inventoryFile), 'tool-surfaces.json is required');
  const inventory = readJson(inventoryFile);
  assert.equal(inventory.format, 'cognium-a11y-tool-surface-inventory');
  assert.equal(inventory.format_version, '1.0.0');
  assert.match(inventory.observed_on, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(inventory.surfaces.length > 0, 'tool surface inventory is empty');

  const ids = new Set();
  const executedNames = new Set();
  for (const surface of inventory.surfaces) {
    assert.equal(ids.has(surface.id), false, `duplicate tool surface ID: ${surface.id}`);
    ids.add(surface.id);
    assert.ok(['automated', 'automated-and-guided', 'automated-assisted-and-manual']
      .includes(surface.measurement_lane), `${surface.id} has an invalid lane`);
    assert.ok(['executed', 'not-executed'].includes(surface.execution_status),
      `${surface.id} has an invalid execution status`);
    assert.ok(['independent-engine', 'wrapper', 'derived-configuration', 'derived-surface']
      .includes(surface.lineage.independence), `${surface.id} has invalid lineage`);
    if (surface.lineage.independence !== 'independent-engine') {
      assert.ok(surface.lineage.wrapper_of, `${surface.id} must declare wrapper_of`);
    }
    assert.ok(surface.sources.length > 0, `${surface.id} has no authoritative source`);
    assert.equal(surface.sources.every((source) => /^https:\/\//.test(source)), true,
      `${surface.id} contains a non-HTTPS source`);

    if (surface.execution_status === 'executed') {
      assert.equal(surface.included_in_automated_metrics, true,
        `${surface.id} executed automated surface must be represented in metrics`);
      assert.ok(surface.result_path, `${surface.id} is missing result_path`);
      const resultPath = path.resolve(bundle, surface.result_path);
      assert.ok(resultPath.startsWith(`${path.resolve(bundle)}${path.sep}`),
        `${surface.id} result path escapes bundle`);
      assert.ok(fs.existsSync(resultPath), `${surface.id} result file is missing`);
      assert.equal(readJson(resultPath).run.tool.name, surface.name,
        `${surface.id} name does not match its result`);
      executedNames.add(surface.name);
    } else {
      assert.equal(surface.included_in_automated_metrics, false,
        `${surface.id} cannot be included without an execution`);
      assert.equal('result_path' in surface, false,
        `${surface.id} must not point to a result when it was not executed`);
    }

    for (const key of ['protocol_path', 'run_plan_path']) {
      if (!surface[key]) continue;
      const supportingPath = path.resolve(bundle, surface[key]);
      assert.ok(supportingPath.startsWith(`${path.resolve(bundle)}${path.sep}`),
        `${surface.id} ${key} escapes bundle`);
      assert.ok(fs.existsSync(supportingPath), `${surface.id} ${key} is missing`);
    }
  }

  assert.deepEqual([...executedNames].sort(), [...resultNames].sort(),
    'executed tool surfaces must match the published result files exactly');

  const plan = readJson(path.join(bundle,
    'manual/accessibility-insights-for-web/run-plan.json'));
  assert.equal(plan.format, 'cognium-a11y-manual-tool-run-plan');
  assert.equal(plan.format_version, '1.0.0');
  assert.equal(plan.execution_status, 'not-executed');
  assert.equal(plan.results.length, 0, 'an unexecuted plan cannot contain results');
  assert.equal(plan.selection.selected_cases,
    readJson(path.join(bundle, 'comparison.json')).coverage.selected_cases);
  assert.equal(plan.lanes.every(({ status }) => status === 'not-executed'), true);
  assert.equal(plan.privacy.fixture_data, 'public-synthetic');
  assert.equal(plan.privacy.participant_data_included, false);
  assert.equal(plan.privacy.production_evidence_included, false);
  assert.equal(plan.privacy.credentials_allowed, false);
}

const bundles = bundleDirectories();
assert.ok(bundles.length > 0, 'no result bundles found');
const bundleIds = new Set(bundles.map((bundle) => path.basename(bundle)));

for (const bundle of bundles) {
  const publication = readJson(path.join(bundle, 'publication.json'));
  const comparison = readJson(path.join(bundle, 'comparison.json'));
  const schema = readJson(path.join(bundle, 'schema/benchmark-result.schema.json'));
  const ajv = new Ajv2020({ allErrors: true, strict: true });
  ajv.addFormat('date-time', (value) => Number.isFinite(Date.parse(value)));
  const validate = ajv.compile(schema);
  const expectedCases = comparison.cases.map(({ id, path: casePath }) => `${id}\0${casePath}`).sort();

  assert.ok(['vendor-authored', 'independently-reproduced', 'academic', 'maintainer-authored']
    .includes(publication.classification));
  assert.equal(publication.id, path.basename(bundle));
  if (publication.supersedes !== null) {
    assert.ok(bundleIds.has(publication.supersedes), `${publication.id} supersedes an unknown bundle`);
    assert.notEqual(publication.supersedes, publication.id, 'a bundle cannot supersede itself');
  }
  assert.equal(publication.corpus.revision, comparison.corpus.revision);
  assert.equal(publication.corpus.manifest_sha256, comparison.corpus.manifest_sha256);
  assert.equal(comparison.coverage.selected_cases, comparison.cases.length);
  assert.equal(comparison.coverage.selected_cases + comparison.coverage.not_selected_cases,
    comparison.coverage.corpus_cases);

  const names = new Set();
  for (const file of resultFiles(bundle)) {
    const result = readJson(file);
    assert.equal(validate(result), true,
      `${path.relative(bundle, file)} is invalid: ${ajv.errorsText(validate.errors)}`);
    assert.equal(result.corpus.revision, comparison.corpus.revision);
    assert.equal(result.corpus.manifest_sha256, comparison.corpus.manifest_sha256);
    assert.equal(result.run.repeat, 1);
    assert.equal(result.run.privacy.fixture_data, 'public-synthetic');
    assert.equal(result.run.privacy.raw_evidence_published, false);
    assert.equal(names.has(result.run.tool.name), false, `duplicate tool name: ${result.run.tool.name}`);
    names.add(result.run.tool.name);
    const actualCases = result.executions.map(({ case_id, case_path }) => `${case_id}\0${case_path}`).sort();
    assert.deepEqual(actualCases, expectedCases, `${result.run.tool.name} does not cover the declared lane`);
    for (const execution of result.executions) {
      if (execution.status !== 'completed') continue;
      assert.ok(execution.outcomes.length > 0, `${result.run.tool.name}/${execution.case_id} has no outcome`);
      for (const outcome of execution.outcomes) {
        assert.notEqual(outcome.verdict, 'pass', 'this automated lane must not infer pass from no finding');
        assert.equal(outcome.examined_count, null, 'unknown examined counts must remain null');
        assert.ok(outcome.evidence.some(({ digest }) => /^sha256:[a-f0-9]{64}$/.test(digest || '')),
          `${result.run.tool.name}/${execution.case_id} lacks a native-output digest`);
      }
    }
  }

  validateToolSurfaceInventory(bundle, names);

  assert.equal(canonical(readJson(path.join(bundle, 'metrics.json'))), canonical(calculateMetrics(bundle)),
    `${path.basename(bundle)} metrics are stale`);
  assert.match(fs.readFileSync(path.join(bundle, 'REPORT.md'), 'utf8'), /not WCAG certification/i);
  assert.match(fs.readFileSync(path.join(bundle, 'REPORT.md'), 'utf8'),
    /Accessibility Insights for Web is protocol-ready but not executed/i);
  verifyChecksums(bundle);

  const publicText = fs.readdirSync(bundle, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => fs.readFileSync(path.join(entry.parentPath, entry.name), 'utf8'))
    .join('\n');
  assert.doesNotMatch(publicText, /(?:\/Users\/|\/home\/|[A-Z]:\\Users\\)/);
  assert.doesNotMatch(publicText, /(?:marketplace=|pageUID=|set-cookie|authorization:|bearer\s+)/i);
  assert.doesNotMatch(publicText,
    /(?:-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16})/);
  console.log(`valid publication bundle: ${path.relative(process.cwd(), bundle)}`);
}

const publicIndex = readJson(path.join(process.cwd(), 'index.json'));
assert.equal(publicIndex.format, 'cognium-a11y-benchmark-result-index');
assert.deepEqual(publicIndex.entries.map(({ id }) => id).sort(), [...bundleIds].sort());
assert.match(fs.readFileSync(path.join(process.cwd(), 'INDEX.md'), 'utf8'), /not certification, endorsement/i);
