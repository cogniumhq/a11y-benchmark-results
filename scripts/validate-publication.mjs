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

const bundles = bundleDirectories();
assert.ok(bundles.length > 0, 'no result bundles found');

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

  assert.equal(canonical(readJson(path.join(bundle, 'metrics.json'))), canonical(calculateMetrics(bundle)),
    `${path.basename(bundle)} metrics are stale`);
  assert.match(fs.readFileSync(path.join(bundle, 'REPORT.md'), 'utf8'), /not WCAG certification/i);
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
