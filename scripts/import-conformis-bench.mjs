// Turn a Conformis `bench:a11y-benchmark` JSON file into one publication bundle.
//
//   node scripts/import-conformis-bench.mjs \
//     --bench bench.json \
//     --corpus /path/to/a11y-benchmark \
//     --conformis-revision <40-hex> \
//     --tool-version 'a11y/html@1.6.0 + tech/html-aria@1.3.0' \
//     --runtime 'Node.js v25.9.0' \
//     --id 2026-10-19-v0.1.0-conformis-labelled-html
//
// The bench file is native output. This script does not run Conformis. It maps
// labelled HTML pages onto corpus cases and refuses to call a missing finding
// a pass. Pages the bench classifies as cannot-tell or journey-level stay out
// of the recall denominator.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

import { ROOT, sha256 } from './publication-lib.mjs';

function option(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : null;
}

const benchFile = option('bench');
const corpusRoot = option('corpus');
const conformisRevision = option('conformis-revision');
const toolVersion = option('tool-version');
const runtime = option('runtime');
const bundleId = option('id');

if (!benchFile || !corpusRoot || !conformisRevision || !toolVersion || !runtime || !bundleId) {
  console.error('usage: node scripts/import-conformis-bench.mjs --bench FILE --corpus DIR --conformis-revision SHA --tool-version TEXT --runtime TEXT --id BUNDLE');
  process.exit(2);
}

if (!/^[a-f0-9]{40}$/.test(conformisRevision)) {
  throw new Error('--conformis-revision must be a 40-character SHA');
}

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);

const bench = readJson(benchFile);
if (!Array.isArray(bench.rows)) throw new Error(`${benchFile} has no rows array`);
if (!/^[a-f0-9]{40}$/.test(bench.pin)) throw new Error('bench.pin must be a 40-character corpus SHA');
if (!bench['conformis-head'] || !conformisRevision.startsWith(bench['conformis-head'])) {
  throw new Error(`bench conformis-head ${bench['conformis-head']} is not a prefix of ${conformisRevision}`);
}

const head = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: corpusRoot, encoding: 'utf8' }).trim();
if (head !== bench.pin) {
  throw new Error(`corpus checkout is ${head}, bench pin is ${bench.pin}`);
}
const dirty = execFileSync('git', ['status', '--porcelain'], { cwd: corpusRoot, encoding: 'utf8' }).trim();
if (dirty) throw new Error('corpus checkout is dirty; pin a clean revision');

const manifestPath = path.join(corpusRoot, 'corpus-manifest.json');
const manifestBytes = fs.readFileSync(manifestPath);
const manifest = JSON.parse(manifestBytes.toString('utf8'));
const manifestSha = sha256(manifestBytes);

const cases = [];
for (const family of manifest.families) {
  for (const fixture of readJson(path.join(corpusRoot, family.file)).cases) {
    cases.push({ ...fixture, family: family.id });
  }
}
const byPath = new Map();
for (const fixture of cases) {
  if (byPath.has(fixture.path)) throw new Error(`duplicate corpus path ${fixture.path}`);
  byPath.set(fixture.path, fixture);
}

const protocols = readJson(path.join(corpusRoot, 'protocols/protocols.json'));
const humanProtocols = Array.isArray(protocols.protocols) ? protocols.protocols.length : 8;

function digestOf(value) {
  return sha256(Buffer.from(JSON.stringify(value)));
}

function publicMessage(value) {
  return String(value)
    .replace(/\/Users\/\S+/g, '[local-path]')
    .replace(/\/home\/\S+/g, '[local-path]')
    .replace(/[A-Z]:\\Users\\\S+/g, '[local-path]')
    .slice(0, 200);
}

function findingsFor(row, criterion) {
  return (row.underDeclared ?? [])
    .filter((item) => (item.criteria ?? []).includes(criterion))
    .reduce((sum, item) => sum + (item.deviations || 0), 0);
}

function rulesFor(row, criterion) {
  const ids = (row.by ?? []).filter((id) => String(id).includes(criterion));
  return ids.length ? ids.join(' | ') : 'no-mapped-native-rule';
}

const rowsByPath = new Map(bench.rows.map((row) => [row.path, row]));
const lane = [];
const excluded = { not_run: 0, not_corpus: 0, no_criteria: 0, held_out: 0 };

for (const row of bench.rows) {
  if (!byPath.has(row.path)) excluded.not_corpus += 1;
}
for (const fixture of cases) {
  const row = rowsByPath.get(fixture.path);
  if (!row) {
    excluded.not_run += 1;
    continue;
  }
  if (row.expectation !== 'should-report' && row.expectation !== 'must-not-report') {
    excluded.held_out += 1;
    continue;
  }
  const criteria = [...new Set([
    ...Object.keys(fixture.min_criteria ?? {}),
    ...(fixture.must_not_report ?? []),
  ])].filter((criterion) => /^[0-9]+\.[0-9]+\.[0-9]+$/.test(criterion)).sort();
  if (criteria.length === 0) {
    excluded.no_criteria += 1;
    continue;
  }
  lane.push({ fixture, row, criteria, mode: row.expectation === 'should-report' ? 'tp' : 'safe' });
}
lane.sort((a, b) => a.fixture.id.localeCompare(b.fixture.id));

if (lane.length === 0) throw new Error('no corpus cases matched the bench lane');
if (excluded.not_run + excluded.held_out + excluded.no_criteria + lane.length !== cases.length) {
  throw new Error('exclusion counts do not add up to the corpus');
}

const environment = bench.environment ?? {};
if (!environment.platform || !environment.chromium || !environment.viewport) {
  throw new Error('bench.environment is missing platform, chromium or viewport');
}

const startedAt = bench.checkpoint?.started;
const completedAt = bench.made;
if (!startedAt || !completedAt || !Number.isFinite(Date.parse(startedAt)) || !Number.isFinite(Date.parse(completedAt))) {
  throw new Error('bench is missing checkpoint.started or made timestamps');
}

const bundle = path.join(ROOT, 'results', bundleId);
fs.mkdirSync(path.join(bundle, 'cognium-conformis'), { recursive: true });
fs.mkdirSync(path.join(bundle, 'schema'), { recursive: true });
fs.mkdirSync(path.join(bundle, 'native-output'), { recursive: true });
fs.mkdirSync(path.join(bundle, 'manual/accessibility-insights-for-web'), { recursive: true });

const caseRows = lane.map(({ fixture, row, criteria, mode }) => {
  const errored = (row.errors ?? []).length > 0;
  const matched = errored ? [] : criteria.filter((criterion) => (row.hitCriteria ?? []).includes(criterion));
  const otherFindings = (row.underOther ?? []).reduce((sum, item) => sum + (item.deviations || 0), 0);
  const declaredFindings = (row.underDeclared ?? []).reduce((sum, item) => sum + (item.deviations || 0), 0);
  return {
    id: fixture.id,
    mode,
    path: fixture.path,
    expected_criteria: criteria,
    status: errored ? 'error' : 'ok',
    automated_findings: declaredFindings + otherFindings,
    manual_review_items: (row.abstainedUnderDeclared ?? []).length,
    found_criteria: matched,
    matched_expected_criteria: matched,
    findings: errored ? [] : criteria.filter((criterion) => matched.includes(criterion)).map((criterion) => ({
      rule: rulesFor(row, criterion),
      count: findingsFor(row, criterion),
      criteria: [criterion],
    })),
    duration_ms: Number.isFinite(row.seconds) ? Math.round(row.seconds * 1000) : null,
    imported: true,
    source_output_sha256: digestOf(row),
    error: errored ? publicMessage(row.errors[0]?.error ?? row.errors[0]) : null,
  };
});

const summary = {
  cases: caseRows.length,
  errors: caseRows.filter((row) => row.status === 'error').length,
  tp_cases: caseRows.filter((row) => row.mode === 'tp').length,
  tp_pages_with_target_findings: caseRows.filter((row) => row.mode === 'tp' && row.matched_expected_criteria.length > 0).length,
  safe_cases: caseRows.filter((row) => row.mode === 'safe').length,
  safe_pages_without_target_findings: caseRows.filter((row) => row.mode === 'safe' && row.matched_expected_criteria.length === 0 && row.status === 'ok').length,
  safe_pages_with_target_findings: caseRows.filter((row) => row.mode === 'safe' && row.matched_expected_criteria.length > 0).length,
  expected_criteria: caseRows.filter((row) => row.mode === 'tp').reduce((sum, row) => sum + row.expected_criteria.length, 0),
  expected_criteria_matched: caseRows.filter((row) => row.mode === 'tp').reduce((sum, row) => sum + row.matched_expected_criteria.length, 0),
};

const comparison = {
  schema_version: 1,
  generated: bench.date,
  suite: {
    name: 'conformis-labelled-html',
    description: 'Corpus cases whose Conformis bench label is should-report or must-not-report. Cannot-tell and journey-level pages were run and are excluded from this denominator.',
    has_scenario_traceability: false,
  },
  corpus: {
    repository: 'cogniumhq/a11y-benchmark',
    version: 'v0.1.0',
    revision: bench.pin,
    manifest_sha256: manifestSha,
  },
  coverage: {
    corpus_cases: cases.length,
    corpus_families: manifest.families.length,
    selected_cases: lane.length,
    not_selected_cases: cases.length - lane.length,
    human_protocols: humanProtocols,
  },
  excluded,
  bench_overall: bench.overall ?? {},
  environment: {
    node: runtime,
    platform: environment.platform,
    architecture: environment.platform.split('/')[1] ?? 'unknown',
    browser: `Chromium ${environment.chromium}`,
  },
  privacy: {
    target: 'ephemeral localhost server only',
    hosted_services: false,
    repository_content_uploaded: false,
    raw_bench_rows_published: false,
  },
  tool_order: ['cognium'],
  cases: caseRows.map(({ id, mode, path: casePath, expected_criteria }) => ({
    id, mode, path: casePath, expected_criteria,
  })),
  tools: {
    cognium: {
      label: 'Cognium Conformis',
      version: toolVersion,
      source: {
        kind: 'conformis-bench-import',
        generated: bench.date,
        view: 'one labelled HTML page per run, static-site kit, declared flows empty',
        explore: bench.explore ?? false,
        bench_file_sha256: sha256(fs.readFileSync(benchFile)),
        labels: bench.labels ?? {},
        environment: {
          browser: `Chromium ${environment.chromium}`,
          platform: environment.platform,
          viewport: environment.viewport,
        },
      },
      run: { started_at: startedAt, completed_at: completedAt, repeat: 1 },
      lineage: {
        name: 'Cognium Conformis',
        engine_family: 'Conformis a11y/html and tech/html-aria',
        tool_surface: 'one corpus page per run, no declared flows',
        independence: 'independent-engine',
        metric_family: 'criterion-mapped automated detection',
      },
      summary,
      traceability: null,
      cases: caseRows,
    },
  },
};

const result = {
  format: 'cognium-a11y-benchmark-result',
  format_version: '1.0.0',
  corpus: {
    repository: comparison.corpus.repository,
    revision: comparison.corpus.revision,
    manifest_sha256: comparison.corpus.manifest_sha256,
  },
  run: {
    id: `${bundleId}-cognium`,
    started_at: startedAt,
    completed_at: completedAt,
    repeat: 1,
    tool: {
      name: 'Cognium Conformis',
      version: `git:${conformisRevision}; ${toolVersion}`,
      engine_family: 'Conformis a11y/html and tech/html-aria',
      tool_surface: 'one corpus page per run, no declared flows',
      independence: 'independent-engine',
    },
    environment: {
      os: environment.platform,
      runtime,
      browser: 'Chromium',
      browser_version: environment.chromium,
      viewport: {
        width: environment.viewport.width,
        height: environment.viewport.height,
      },
      preferences: {
        ...(environment.reducedMotion ? { reduced_motion: String(environment.reducedMotion) } : {}),
        ...(environment.colorScheme ? { color_scheme: String(environment.colorScheme) } : {}),
      },
    },
    privacy: {
      fixture_data: 'public-synthetic',
      raw_evidence_published: false,
    },
  },
  executions: caseRows.map((row) => {
    if (row.status === 'error') {
      return {
        case_id: row.id,
        case_path: row.path,
        status: 'error',
        declared_state: 'default page load',
        state_reached: false,
        target_observability: 'not-observed',
        outcomes: [],
        error: { code: 'bench-run-error', message: row.error || 'Bench run error.' },
      };
    }
    return {
      case_id: row.id,
      case_path: row.path,
      status: 'completed',
      declared_state: 'default page load',
      state_reached: true,
      target_observability: row.matched_expected_criteria.length ? 'observed' : 'unknown',
      outcomes: row.expected_criteria.map((criterion) => {
        const matched = row.matched_expected_criteria.includes(criterion);
        return {
          criterion,
          native_rule_id: matched
            ? (row.findings.find((finding) => finding.criteria.includes(criterion))?.rule ?? rulesFor(
              bench.rows.find((item) => item.path === row.path),
              criterion,
            ))
            : 'no-mapped-native-rule',
          verdict: matched ? 'fail' : 'cannot-tell',
          findings: matched
            ? (row.findings.find((finding) => finding.criteria.includes(criterion))?.count ?? 0)
            : 0,
          examined_count: null,
          evidence: [{
            type: 'digest',
            digest: row.source_output_sha256,
            note: matched
              ? 'SHA-256 digest of the Conformis bench row used for this mapped finding.'
              : 'No finding mapped to this declared criterion; cannot-tell is preserved instead of claiming pass.',
          }],
        };
      }),
    };
  }),
};

const publication = {
  format: 'cognium-a11y-benchmark-publication',
  format_version: '1.0.0',
  id: bundleId,
  classification: 'maintainer-authored',
  run_local_date: bench.date,
  timezone: 'America/Los_Angeles',
  supersedes: null,
  corpus: comparison.corpus,
  harness: {
    repository: 'cogniumhq/conformis',
    revision: conformisRevision,
    path: 'packs/a11y-html/bench/a11y-benchmark-2026-10',
  },
  cognium_conformis: {
    repository: 'cogniumhq/conformis',
    revision: conformisRevision,
    latest_main_verified: null,
    latest_main_difference: 'The executed commit is detached and is not claimed to equal origin/main. The bench label pin was updated locally to this corpus revision; that pin is recorded in this bundle rather than as a Conformis commit.',
  },
  contact: {
    issues: 'https://github.com/cogniumhq/a11y-benchmark-results/issues',
  },
};

writeJson(path.join(bundle, 'comparison.json'), comparison);
writeJson(path.join(bundle, 'cognium-conformis/result.json'), result);
writeJson(path.join(bundle, 'publication.json'), publication);
fs.copyFileSync(
  path.join(corpusRoot, 'schemas/benchmark-result.schema.json'),
  path.join(bundle, 'schema/benchmark-result.schema.json'),
);

const toolVersionFull = `git:${conformisRevision}; ${toolVersion}`;
writeJson(path.join(bundle, 'tool-surfaces.json'), {
  format: 'cognium-a11y-tool-surface-inventory',
  format_version: '1.0.0',
  observed_on: bench.date,
  surfaces: [
    {
      id: 'cognium-conformis',
      name: 'Cognium Conformis',
      vendor: 'Cognium',
      version: toolVersionFull,
      surface_type: 'site-scanner',
      measurement_lane: 'automated',
      execution_status: 'executed',
      included_in_automated_metrics: true,
      result_path: 'cognium-conformis/result.json',
      lineage: {
        engine_family: 'Conformis a11y/html and tech/html-aria',
        engine_version: toolVersion,
        independence: 'independent-engine',
        wrapper_of: null,
      },
      metric_treatment: 'Measured as one labelled HTML page per run. No declared flows and no corpus state-driver execution.',
      sources: ['https://github.com/cogniumhq/conformis'],
    },
    {
      id: 'axe-devtools-browser-extension',
      name: 'axe DevTools - Web Accessibility Testing',
      vendor: 'Deque Systems',
      version: '4.138.0',
      surface_type: 'browser-extension',
      measurement_lane: 'automated-and-guided',
      execution_status: 'not-executed',
      included_in_automated_metrics: false,
      lineage: {
        engine_family: 'axe-core',
        engine_version: null,
        independence: 'derived-surface',
        wrapper_of: 'axe-core',
      },
      metric_treatment: 'Inventoried from the 2026-10-13 bundle and not re-executed. Not an independent engine vote.',
      sources: [
        'https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd',
        'https://www.deque.com/axe/devtools/extension/',
      ],
    },
    {
      id: 'accessibility-insights-for-web',
      name: 'Accessibility Insights for Web',
      vendor: 'Microsoft',
      version: '2.49.0',
      surface_type: 'browser-extension',
      measurement_lane: 'automated-assisted-and-manual',
      execution_status: 'not-executed',
      included_in_automated_metrics: false,
      protocol_path: 'manual/accessibility-insights-for-web/PROTOCOL.md',
      run_plan_path: 'manual/accessibility-insights-for-web/run-plan.json',
      lineage: {
        engine_family: 'axe-core',
        engine_version: '4.11.3',
        independence: 'derived-surface',
        wrapper_of: 'axe-core',
      },
      metric_treatment: 'Protocol-ready and not executed. FastPass automated checks would be an axe-derived surface, not a new engine.',
      sources: [
        'https://github.com/microsoft/accessibility-insights-web',
        'https://accessibilityinsights.io/docs/web/overview/',
      ],
    },
  ],
});

writeJson(path.join(bundle, 'manual/accessibility-insights-for-web/run-plan.json'), {
  format: 'cognium-a11y-manual-tool-run-plan',
  format_version: '1.0.0',
  execution_status: 'not-executed',
  tool: {
    id: 'accessibility-insights-for-web',
    name: 'Accessibility Insights for Web',
    version: '2.49.0',
    engine_family: 'axe-core',
    engine_version: '4.11.3',
  },
  corpus: comparison.corpus,
  selection: {
    source: '../../comparison.json',
    selected_cases: lane.length,
  },
  lanes: [
    { id: 'fastpass-automated', type: 'automated-derived', status: 'not-executed', metric_policy: 'Report as an axe-derived product configuration; exclude from the independent-engine union.' },
    { id: 'fastpass-needs-review', type: 'human-guided', status: 'not-executed', metric_policy: 'Report reviewer decisions separately from automated findings.' },
    { id: 'fastpass-tab-stops', type: 'human-guided', status: 'not-executed', corpus_protocol: 'keyboard-task@1.0.0', metric_policy: 'Report step outcomes with the corpus human-result vocabulary.' },
    { id: 'assessment', type: 'human-guided', status: 'not-executed', metric_policy: 'Report applicable requirement outcomes without averaging them into automated recall.' },
  ],
  required_environment: [
    'extension_version', 'embedded_engine_version', 'browser', 'browser_version',
    'platform', 'platform_version', 'viewport', 'zoom', 'display_settings', 'locale',
    'input_method', 'telemetry_enabled', 'started_at', 'completed_at',
  ],
  privacy: {
    fixture_data: 'public-synthetic',
    participant_data_included: false,
    production_evidence_included: false,
    credentials_allowed: false,
  },
  results: [],
});

fs.writeFileSync(path.join(bundle, 'manual/accessibility-insights-for-web/PROTOCOL.md'), `# Accessibility Insights for Web execution protocol

Status: **protocol-ready; not executed in this bundle**.

This file keeps the Microsoft browser extension visible without turning an
unrun review into a score. FastPass automated checks are an axe-derived
surface. Needs Review, Tab Stops and Assessment are human-guided lanes.

- Extension recorded from the 2026-10-13 inventory: Accessibility Insights for Web \`2.49.0\`
- Embedded axe-core recorded with that inventory: \`4.11.3\`
- Corpus: \`cogniumhq/a11y-benchmark@v0.1.0\`
- Corpus commit: \`${bench.pin}\`
- Manifest: \`${manifestSha}\`
- Selection: the ${lane.length} cases in \`comparison.json\`

Re-verify the store version and the embedded engine immediately before any
execution. Do not sign in, and do not point the extension at anything other
than the pinned public synthetic corpus.
`);

fs.writeFileSync(path.join(bundle, 'native-output/README.md'), `# Native-output disclosure

Raw Conformis bench rows are not redistributed.

- The source is the JSON written by \`npm run bench:a11y-benchmark\` in
  \`cogniumhq/conformis\` at \`${conformisRevision}\`.
- Each execution's \`evidence.digest\` is the SHA-256 of that page's bench row,
  JSON-serialised as parsed. A party who has the same file can recompute it.
- The digest does not reconstruct selectors, anchors or deviation prose, and
  it is not an independent reproduction.
- The whole bench file digest is \`${sha256(fs.readFileSync(benchFile))}\`.
- Corrections publish a new bundle. They do not replace these digests.
`);

fs.writeFileSync(path.join(bundle, 'method.md'), `# Method: Conformis labelled HTML pages

## Purpose and classification

Maintainer-authored measurement of Cognium Conformis against the public
synthetic corpus. Cognium maintains the corpus and makes the product. This is
not an independent reproduction, a WCAG conformance claim, a legal opinion or
a certification.

Only public synthetic pages were used. No customer target, credential, cookie,
authorization header or production capture is in this bundle.

## Pinned inputs

- Corpus commit: \`${bench.pin}\`
- Corpus manifest: \`${manifestSha}\`
- Conformis commit: \`${conformisRevision}\` (short head recorded by the bench: \`${bench['conformis-head']}\`)
- Packs: \`${toolVersion}\`
- Harness: \`packs/a11y-html/bench/a11y-benchmark-2026-10\` in that Conformis commit
- Explore setting recorded by the bench: \`${JSON.stringify(bench.explore ?? false)}\`

The bench label file in the working tree was regenerated for this corpus pin.
That pin is the \`pin\` field of the bench JSON. Checking out the Conformis
commit alone still has the previous pin until that label update is committed
there.

The executed commit is detached. This bundle does not claim it equals
\`origin/main\`.

## Command

\`\`\`sh
npm run bench:a11y-benchmark -- --fresh
\`\`\`

Each labelled page is its own run of \`a11y/html\` and \`tech/html-aria\`, with
the static-site kit and an empty declared-flow list. Egress is denied by that
harness. Relative stylesheets and frames resolve inside the corpus checkout.

## Mapping

- A \`should-report\` page is a known defect. A declared criterion is detected
  only when the bench's \`hitCriteria\` includes it. The native id is the
  control id (\`AX-…\`), not the criterion.
- A \`must-not-report\` page is a corrected control. A hit on its declared
  criterion is a target finding. A hit on any other criterion is kept as an
  other finding and is not a false positive on the declared criterion.
- No mapped finding is \`cannot-tell\`. It is not a pass.
- \`examined_count\` is null. The product counts controls, not elements.
- A bench row with \`errors\` is \`error\`. It is not a miss and not a pass.
- \`cannot-tell\` and journey-level \`other\` rows were run. They are omitted
  from this denominator because the bench's own labels say they are not
  definite defect or control pages.
- Corpus cases the bench did not run (pipeline accounting pages, native
  documents, pages with no header) are not selected. They are not passes.

## Environment

- Platform recorded by the bench: \`${environment.platform}\`
- Runtime: \`${runtime}\`
- Browser: Chromium \`${environment.chromium}\`
- Viewport: ${environment.viewport.width}×${environment.viewport.height}
- Reduced motion: \`${environment.reducedMotion ?? 'not recorded'}\`
- Colour scheme: \`${environment.colorScheme ?? 'not recorded'}\`
- One repetition.

## Limits

The corpus state-driver contract was not executed. Loaded-page results do not
measure defects that appear only after the declared interaction. Human and
assistive-technology protocols were not run. No other product was refreshed.
`);

const catalogPath = path.join(ROOT, 'tool-catalog.json');
const catalog = readJson(catalogPath);
const entry = catalog.entries.find((item) => item.id === 'cognium-conformis');
if (!entry) throw new Error('tool catalog has no cognium-conformis entry');
entry.version = toolVersionFull;
entry.current_result = `results/${bundleId}/cognium-conformis/result.json`;
catalog.reviewed_on = bench.date;
writeJson(catalogPath, catalog);

console.log(`Imported ${lane.length} cases into ${path.relative(ROOT, bundle)}`);
console.log(`Excluded not_run=${excluded.not_run} held_out=${excluded.held_out} no_criteria=${excluded.no_criteria} not_corpus=${excluded.not_corpus}`);
console.log(`Recall ${summary.expected_criteria_matched}/${summary.expected_criteria}; errors ${summary.errors}`);
