import fs from 'node:fs';
import path from 'node:path';

import {
  ROOT,
  bundleDirectories,
  calculateMetrics,
  readJson,
  resultFiles,
  sha256,
  writeJson,
} from './publication-lib.mjs';

const pct = (part, whole) => whole ? `${Math.round((part / whole) * 100)}%` : 'n/a';
const mark = (row) => {
  if (row.status === 'error') return 'E';
  if (row.matched_expected_criteria.length) return 'T';
  if (row.automated_findings > 0) return 'o';
  return '.';
};

function renderReport(bundle, metrics) {
  const comparison = readJson(path.join(bundle, 'comparison.json'));
  const publication = readJson(path.join(bundle, 'publication.json'));
  const inventory = readJson(path.join(bundle, 'tool-surfaces.json'));
  const results = resultFiles(bundle).map(readJson);
  const toolIds = comparison.tool_order;
  const criterionToolIds = toolIds.filter((id) =>
    metrics.tools[id].metric_family !== 'specialized markup signal');
  const specialistToolIds = toolIds.filter((id) =>
    metrics.tools[id].metric_family === 'specialized markup signal');
  const toolNames = toolIds.map((id) => metrics.tools[id].name);
  const commonMisses = metrics.union.common_misses.map((id) => `\`${id}\``).join(', ');
  const unionLabel = criterionToolIds.length === 5
    ? 'five-product'
    : `${criterionToolIds.length}-product criterion-mapped`;
  const competitorCount = toolIds.length - 1;
  const competitorLabel = competitorCount === 4 ? 'four' : competitorCount;
  const latestBrowserServed = comparison.suite.name === 'latest-browser-served';
  const expectedAssertions = comparison.cases
    .filter(({ mode }) => mode === 'tp')
    .flatMap(({ id }) => {
      const row = comparison.tools[criterionToolIds[0]].cases.find(({ id: caseId }) => caseId === id);
      return row.expected_criteria.map((criterion) => `${id}\0${criterion}`);
    });
  const assertionUnion = new Set();
  for (const id of criterionToolIds) {
    for (const row of comparison.tools[id].cases.filter(({ mode }) => mode === 'tp')) {
      for (const criterion of row.matched_expected_criteria) assertionUnion.add(`${row.id}\0${criterion}`);
    }
  }
  const expectedDistinctCriteria = new Set(expectedAssertions.map((item) => item.split('\0')[1]));
  const detectedDistinctCriteria = new Set([...assertionUnion].map((item) => item.split('\0')[1]));
  const cogniumAssertionSet = new Set(
    comparison.tools.cognium.cases
      .filter(({ mode }) => mode === 'tp')
      .flatMap((row) => row.matched_expected_criteria.map((criterion) => `${row.id}\0${criterion}`)),
  );
  const otherToolAssertionSet = new Set(
    criterionToolIds
      .filter((id) => id !== 'cognium')
      .flatMap((id) => comparison.tools[id].cases
        .filter(({ mode }) => mode === 'tp')
        .flatMap((row) => row.matched_expected_criteria.map((criterion) => `${row.id}\0${criterion}`))),
  );
  const cogniumUniqueAssertions = [...cogniumAssertionSet]
    .filter((assertion) => !otherToolAssertionSet.has(assertion)).length;
  const cogniumDistinctCriteria = new Set(
    [...cogniumAssertionSet].map((item) => item.split('\0')[1]),
  );
  const priorCoreBundle = latestBrowserServed
    ? path.join(ROOT, 'results/2026-10-13-v0.1.0-functional-scenarios-wave1')
    : null;
  const priorCoreMetrics = priorCoreBundle ? calculateMetrics(priorCoreBundle) : null;
  const priorCoreComparison = priorCoreBundle
    ? readJson(path.join(priorCoreBundle, 'comparison.json'))
    : null;
  const priorCoreDefectIds = new Set(
    priorCoreComparison?.cases.filter(({ mode }) => mode === 'tp').map(({ id }) => id) ?? [],
  );
  const expandedCoreProjection = comparison.tools.cognium.cases
    .filter(({ mode, id }) => mode === 'tp' && priorCoreDefectIds.has(id))
    .reduce((total, row) => total + row.matched_expected_criteria.length, 0);
  const cogniumMetrics = metrics.tools.cognium;
  const lines = [
    latestBrowserServed
      ? '# Accessibility benchmark comparison: latest browser-served corpus'
      : '# Accessibility benchmark comparison: v0.1.0 functional scenarios',
    '',
    `Published run date: ${publication.run_local_date} (${publication.timezone}).`,
    '',
    `Classification: **${publication.classification}**. This bundle was produced by the corpus maintainers and is not an independent reproduction.`,
    '',
    'This is a single-run, finite-corpus detection comparison. It is not WCAG certification, legal advice, a universal product ranking, a performance benchmark or a guarantee about production websites.',
    '',
    '## Identity and scope',
    '',
    `- Corpus: \`${comparison.corpus.repository}@${comparison.corpus.version}\` (\`${comparison.corpus.revision}\`).`,
    `- Corpus manifest: \`${comparison.corpus.manifest_sha256}\`.`,
    `- Comparison harness: \`${publication.harness.repository}@${publication.harness.revision}\` ([review PR](${publication.harness.pull_request})).`,
    `- Cognium Conformis run source: \`${publication.cognium_conformis.repository}@${publication.cognium_conformis.revision}\`.`,
    `- Latest upstream \`main\` verified: \`${publication.cognium_conformis.latest_main_verified}\`; ${publication.cognium_conformis.latest_main_difference}.`,
    `- Executed automated lane: ${comparison.coverage.selected_cases}/${comparison.coverage.corpus_cases} corpus cases (${comparison.coverage.not_selected_cases} not executed).`,
    `- Human and assistive-technology protocols executed: 0/${comparison.coverage.human_protocols}.`,
    '',
    'The unexecuted cases and protocols are neither passes nor failures. JAWS, NVDA, VoiceOver, TalkBack, keyboard, switch, voice, media-equivalence, display-adaptation, comprehension and user-task work remains in separate lanes.',
    '',
    ...(latestBrowserServed ? [
      '## Executive interpretation',
      '',
      `In the expanded entry-page lane, Cognium Conformis detected ${cogniumMetrics.expected_criteria_matched}/${cogniumMetrics.expected_criteria} declared target assertions (${pct(cogniumMetrics.expected_criteria_matched, cogniumMetrics.expected_criteria)}), reached ${cogniumMetrics.defect_cases_target_detected}/${cogniumMetrics.defect_cases} known-defect pages (${pct(cogniumMetrics.defect_cases_target_detected, cogniumMetrics.defect_cases)}), and left ${cogniumMetrics.controls_target_clean}/${cogniumMetrics.control_cases} corrected controls target-clean. It detected ${cogniumUniqueAssertions} target assertions that no other criterion-mapped configuration detected in this run.`,
      '',
      '| What this number answers | Result | Interpretation |',
      '|---|---:|---|',
      `| Expanded target-assertion recall | ${cogniumMetrics.expected_criteria_matched}/${cogniumMetrics.expected_criteria} (${pct(cogniumMetrics.expected_criteria_matched, cogniumMetrics.expected_criteria)}) | Broad entry-page coverage across multi-criterion fixtures |`,
      `| Known-defect page reach | ${cogniumMetrics.defect_cases_target_detected}/${cogniumMetrics.defect_cases} (${pct(cogniumMetrics.defect_cases_target_detected, cogniumMetrics.defect_cases)}) | Pages with at least one declared criterion detected |`,
      `| Corrected-control guardrail | ${cogniumMetrics.controls_target_clean}/${cogniumMetrics.control_cases} | No corrected control was reported for its declared target criterion |`,
      `| Distinct WCAG criteria detected | ${cogniumDistinctCriteria.size}/${expectedDistinctCriteria.size} | Breadth across the declared criterion set |`,
      `| Conformis-only target assertions | ${cogniumUniqueAssertions} | Incremental detection beyond the other measured configurations |`,
      '| Dynamic-state execution | 0 declared flows | This run measured loaded entry pages, not interaction-state coverage |',
      '',
      '### Scope change, not a trend line',
      '',
      '| Published lane | State model | Defect pages | Target assertions | Cognium Conformis |',
      '|---|---|---:|---:|---:|',
      `| Prior functional core | Subject-declared page and flow states | ${priorCoreMetrics.tools.cognium.defect_cases} | ${priorCoreMetrics.tools.cognium.expected_criteria} | ${priorCoreMetrics.tools.cognium.expected_criteria_matched}/${priorCoreMetrics.tools.cognium.expected_criteria} (${pct(priorCoreMetrics.tools.cognium.expected_criteria_matched, priorCoreMetrics.tools.cognium.expected_criteria)}) |`,
      `| Expanded browser-served | Loaded entry pages; zero declared flows | ${cogniumMetrics.defect_cases} | ${cogniumMetrics.expected_criteria} | ${cogniumMetrics.expected_criteria_matched}/${cogniumMetrics.expected_criteria} (${pct(cogniumMetrics.expected_criteria_matched, cogniumMetrics.expected_criteria)}) |`,
      '',
      `The prior 50% result and the expanded ${pct(cogniumMetrics.expected_criteria_matched, cogniumMetrics.expected_criteria)} result are not a before/after product comparison. The core lane was criterion-isolated and included declared page or flow states; the expanded lane is much broader and declared no flows. Projecting the expanded entry-page evidence onto the prior core IDs yields ${expandedCoreProjection}/${priorCoreMetrics.tools.cognium.expected_criteria}, but that diagnostic is not a release-regression score: the WCAG 2.4.11 focus-obscured state was not exercised, although another focus finding was present on that page.`,
      '',
      'Future release reporting should keep three independent trend lines: a pinned flow-enabled core regression lane, this expanded entry-page lane, and a human/assistive-technology lane. Do not average them into one score.',
      '',
      '## Expanded entry-page lane results',
    ] : ['## Results']),
    '',
    '| Tool | Known-defect criteria detected | Corrected controls target-clean | Completed | Errors |',
    '|---|---:|---:|---:|---:|',
    ...criterionToolIds.map((id) => {
      const item = metrics.tools[id];
      return `| ${item.name} | ${item.expected_criteria_matched}/${item.expected_criteria} (${pct(item.expected_criteria_matched, item.expected_criteria)}) | ${item.controls_target_clean}/${item.control_cases} | ${item.completed}/${item.cases} | ${item.errors} |`;
    }),
    '',
    `The ${unionLabel} union detected the declared target criterion on ${metrics.union.defect_cases_target_detected}/${metrics.union.defect_cases} known-defect cases (${pct(metrics.union.defect_cases_target_detected, metrics.union.defect_cases)}). “Target-clean” means only that a tool did not report the corrected control's declared criterion; it does not establish conformance or a pass.`,
    ...(latestBrowserServed ? [
      '',
      `Across multi-criterion cases, the product union detected ${assertionUnion.size}/${expectedAssertions.length} target assertions and ${detectedDistinctCriteria.size}/${expectedDistinctCriteria.size} distinct WCAG criteria. The detected-criteria count happens to be 18; unlike the earlier fixed 18-scenario denominator, it is computed from this run's mapped findings against a 54-criterion denominator.`,
      '',
      `Cognium Conformis had the highest target-assertion count in this lane with ${cogniumMetrics.expected_criteria_matched}/${cogniumMetrics.expected_criteria}; QualWeb was next at ${metrics.tools.qualweb.expected_criteria_matched}/${metrics.tools.qualweb.expected_criteria}. This finite-corpus result does not establish conformance, a universal ranking or a product trend.`,
    ] : []),
    ...(specialistToolIds.length ? [
      '',
      '## Specialized signal lane',
      '',
      '| Tool | Metric family | Pages with findings | Native findings | Completed | Errors |',
      '|---|---|---:|---:|---:|---:|',
      ...specialistToolIds.map((id) => {
        const item = metrics.tools[id];
        return `| ${item.name} | ${item.metric_family} | ${item.signal_pages_with_findings}/${item.cases} | ${item.signal_findings} | ${item.completed}/${item.cases} | ${item.errors} |`;
      }),
      '',
      'Specialized signals are not WCAG criterion-recall results and do not contribute to the criterion-mapped union. They are published to compare the tool’s actual signal family without inventing WCAG mappings.',
    ] : []),
    '',
    '## Tool lineage',
    '',
    '| Tool | Version/build | Engine family | Independence | Interface |',
    '|---|---|---|---|---|',
    ...results.map((result) => {
      const tool = result.run.tool;
      return `| ${tool.name} | ${tool.version} | ${tool.engine_family} | ${tool.independence}${tool.wrapper_of ? ` of ${tool.wrapper_of}` : ''} | ${tool.tool_surface} |`;
    }),
    '',
    'Lighthouse uses axe-derived accessibility audits. It is included as a product configuration comparison, not as an independent engine vote.',
    '',
    '## Product surface inventory',
    '',
    'The measured engines and the requested browser extensions are tracked together here, while their evidence lanes and engine lineage remain separate.',
    '',
    '| Product surface | Version | Lane | Engine lineage | Status in this bundle | Metric treatment |',
    '|---|---|---|---|---|---|',
    ...inventory.surfaces.map((surface) => {
      const lineage = surface.lineage;
      const engine = `${lineage.engine_family}${lineage.engine_version ? ` ${lineage.engine_version}` : ' (version not established)'}`;
      const relationship = lineage.wrapper_of ? `${lineage.independence} of ${lineage.wrapper_of}` : lineage.independence;
      return `| ${surface.name} | ${surface.version} | ${surface.measurement_lane} | ${engine}; ${relationship} | ${surface.execution_status} | ${surface.metric_treatment} |`;
    }),
    '',
    'axe DevTools is inventoried but was not separately executed because its free automated checks run on axe-core; counting that surface as another independent engine result would duplicate the axe family. Accessibility Insights for Web is protocol-ready but not executed: its FastPass automated checks are axe-derived, while Needs Review, Tab Stops and Assessment require separate human-guided evidence. See [the Accessibility Insights protocol](manual/accessibility-insights-for-web/PROTOCOL.md) and [run plan](manual/accessibility-insights-for-web/run-plan.json).',
    '',
    '## Execution environments',
    '',
    '| Tool | OS | Runtime | Browser | Viewport | Run window (UTC) |',
    '|---|---|---|---|---|---|',
    ...results.map((result) => {
      const run = result.run;
      const environment = run.environment;
      return `| ${run.tool.name} | ${environment.os} | ${environment.runtime} | ${environment.browser} ${environment.browser_version} | ${environment.viewport.width}×${environment.viewport.height} | ${run.started_at} – ${run.completed_at} |`;
    }),
    '',
    `Cognium Conformis ran in Linux/arm64 while the ${competitorLabel} directly executed competitor adapters ran in macOS/arm64, and the Chromium patch versions differ. The corpus, viewport and criterion mapping were pinned, but this is not a perfectly environment-controlled head-to-head trial. Treat the counts as a reproducible product snapshot, not a claim that OS and browser-build effects are zero.`,
    '',
    '## Case matrix',
    '',
    'Legend: `T` declared target criterion detected; `o` another automated finding only; `.` no automated finding; `E` execution error.',
    '',
    `| Case | Expected | ${toolNames.join(' | ')} |`,
    `|---|---|${toolNames.map(() => '---:').join('|')}|`,
    ...comparison.cases.map((item) => {
      const cells = toolIds.map((id) => {
        const row = comparison.tools[id].cases.find(({ id: caseId }) => caseId === item.id);
        return mark(row);
      });
      return `| \`${item.id}\` | ${item.mode === 'tp' ? 'known defect' : 'corrected control'} | ${cells.join(' | ')} |`;
    }),
    '',
    '## Shared gaps',
    '',
    `No tool mapped the declared criterion on ${metrics.union.common_misses.length} known-defect cases: ${commonMisses}.`,
    '',
    'These misses identify automation and scenario-driver backlog. They are not evidence that the fixtures pass. Some require interaction, state transitions, visual judgment, comprehension or a person using assistive technology.',
    ...(latestBrowserServed ? [
      '',
      'Three corrected-control-clean Conformis gaps were logged before publication: [#288](https://github.com/cogniumhq/conformis/issues/288) for visible-label association mapping, [#289](https://github.com/cogniumhq/conformis/issues/289) for the draggable custom slider, and [#290](https://github.com/cogniumhq/conformis/issues/290) for the unnamed SVG chart.',
      '',
      'An Alfa-only WCAG 2.5.5 signal was not treated as a Conformis defect because Alfa also reports that criterion on the corrected control. Conformis reports WCAG 2.5.8 on the defect and leaves that corrected control target-clean.',
      '',
      '## Defect and backlog ledger',
      '',
      'A missed target is not automatically a product defect. The benchmark routes findings to the product, corpus, state driver, validation harness or adjudication owner according to the evidence. The 60 shared misses above are therefore covered by consolidated issues rather than 60 duplicate tickets.',
      '',
      '### Open actionable work',
      '',
      '| Owner | Issue | Evidence routed there |',
      '|---|---|---|',
      '| Cognium Conformis | [#288](https://github.com/cogniumhq/conformis/issues/288) | Visible-label association mapping |',
      '| Cognium Conformis | [#289](https://github.com/cogniumhq/conformis/issues/289) | Draggable custom slider keyboard and role coverage |',
      '| Cognium Conformis | [#290](https://github.com/cogniumhq/conformis/issues/290) | Bare SVG chart alternative coverage |',
      '| Cognium Conformis | [#307](https://github.com/cogniumhq/conformis/issues/307) | Four flashing-content cases; five target assertions |',
      '| Cognium Conformis | [#308](https://github.com/cogniumhq/conformis/issues/308) | Five media-equivalence cases; six target assertions |',
      '| Cognium Conformis | [#271](https://github.com/cogniumhq/conformis/issues/271) | Broader missing-control coverage, including machine-decidable criteria |',
      '| a11y-benchmark corpus | [#44](https://github.com/cogniumhq/a11y-benchmark/issues/44) | 38 fixtures not served by the corpus server |',
      '| a11y-benchmark corpus | [#46](https://github.com/cogniumhq/a11y-benchmark/issues/46) | Declarative drivers for 38 non-default-state cases |',
      '| a11y-benchmark corpus | [#47](https://github.com/cogniumhq/a11y-benchmark/issues/47) | Adjudication of 13 static-parse assertions missed by six engines |',
      '| a11y-benchmark corpus | [#48](https://github.com/cogniumhq/a11y-benchmark/issues/48) | Twenty-three pairs with possible undeclared confounds |',
      '| a11y-validation harness | [#12](https://github.com/cogniumhq/a11y-validation/issues/12) | Three adapters treated HTTP error pages as benchmark evidence |',
      '',
      '### Resolved or investigated findings',
      '',
      '| Owner | Issues | Outcome |',
      '|---|---|---|',
      '| a11y-benchmark corpus | [#37](https://github.com/cogniumhq/a11y-benchmark/issues/37), [#38](https://github.com/cogniumhq/a11y-benchmark/issues/38), [#39](https://github.com/cogniumhq/a11y-benchmark/issues/39) | Corrected-control scoring, AAA pooling and evidence-ledger defects were resolved before this publication. |',
      '| Cognium Conformis | [#283](https://github.com/cogniumhq/conformis/issues/283), [#284](https://github.com/cogniumhq/conformis/issues/284) | Benchmark-discovered keyboard-trap false positives were fixed and closed. |',
      '| Cognium Conformis | [#295](https://github.com/cogniumhq/conformis/issues/295) | A later 1.3.0 record-count anomaly was logged, did not change benchmark detection counts, was not reproduced in isolated reruns and was closed. |',
      '',
      'Issue status was reconciled on 2026-10-14. Links are authoritative if status changes after this report revision.',
    ] : []),
    '',
    '## Evidence and interpretation limits',
    '',
    '- Every product has one repetition; this bundle does not estimate run-to-run variance.',
    '- Native product outputs are represented by per-case SHA-256 digests. Raw Cognium Conformis proofgraph evidence and raw third-party outputs are not redistributed.',
    '- Criterion credit is conservative and requires an explicit native-rule-to-WCAG mapping. A tool can report another issue and receive no target credit.',
    '- `cannot-tell` is preserved when no mapped finding exists. It is never converted into pass.',
    '- Durations are diagnostic only and are not used as a product speed ranking.',
    latestBrowserServed
      ? '- Thirty-eight automated candidates were outside this lane: 26 AAA and eight pipeline pages were not exposed by the merged server, while four PDF/DOCX cases require native document adapters. They are excluded, not counted as scanner errors.'
      : '- The eight pipeline-integrity cases were outside this lane; the v0.1.0 HTTP server omission is tracked in [a11y-benchmark issue #19](https://github.com/cogniumhq/a11y-benchmark/issues/19).',
    '- Corrections must publish a new immutable revision and retain this bundle with a supersession link.',
    '',
    'See [method.md](method.md), [metrics.json](metrics.json), [comparison.json](comparison.json) and each product’s schema-valid `result.json` for the reproducible evidence.',
    '',
  ];
  return lines.join('\n');
}

function filesRecursively(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return filesRecursively(file);
    return entry.name === 'SHA256SUMS' ? [] : [file];
  }).sort();
}

const indexEntries = [];
for (const bundle of bundleDirectories()) {
  const metrics = calculateMetrics(bundle);
  const publication = readJson(path.join(bundle, 'publication.json'));
  writeJson(path.join(bundle, 'metrics.json'), metrics);
  fs.writeFileSync(path.join(bundle, 'REPORT.md'), renderReport(bundle, metrics));
  const sums = filesRecursively(bundle).map((file) => {
    const relative = path.relative(bundle, file).split(path.sep).join('/');
    return `${sha256(fs.readFileSync(file)).slice('sha256:'.length)}  ${relative}`;
  });
  fs.writeFileSync(path.join(bundle, 'SHA256SUMS'), `${sums.join('\n')}\n`);
  indexEntries.push({
    id: publication.id,
    classification: publication.classification,
    corpus: publication.corpus,
    suite: metrics.suite,
    selected_cases: metrics.coverage.selected_cases,
    corpus_cases: metrics.coverage.corpus_cases,
    tools: Object.values(metrics.tools).map(({ name, version }) => ({ name, version })),
    supersedes: publication.supersedes,
    bundle: `results/${path.basename(bundle)}`,
    report: `results/${path.basename(bundle)}/REPORT.md`,
  });
  console.log(`Generated metrics, report and checksums for ${path.basename(bundle)}`);
}

const supersededBy = new Map(indexEntries
  .filter(({ supersedes }) => supersedes)
  .map(({ id, supersedes }) => [supersedes, id]));
const index = {
  format: 'cognium-a11y-benchmark-result-index',
  format_version: '1.0.0',
  entries: indexEntries.map((entry) => ({
    ...entry,
    status: supersededBy.has(entry.id) ? 'superseded' : 'current',
    ...(supersededBy.has(entry.id) ? { superseded_by: supersededBy.get(entry.id) } : {}),
  })),
};
writeJson(path.join(ROOT, 'index.json'), index);
const indexLines = [
  '# Public benchmark result index',
  '',
  'A listing means the bundle passes format and disclosure validation. It is not certification, endorsement or a conformance claim.',
  '',
  '| Bundle | Classification | Corpus | Suite | Scope | Products | Status |',
  '|---|---|---|---|---:|---:|---|',
  ...index.entries.map((entry) =>
    `| [\`${entry.id}\`](${entry.report}) | ${entry.classification} | \`${entry.corpus.version}\` | \`${entry.suite}\` | ${entry.selected_cases}/${entry.corpus_cases} | ${entry.tools.length} | ${entry.status}${entry.superseded_by ? ` by \`${entry.superseded_by}\`` : ''} |`),
  '',
  'Classifications are declared by the publisher. Corrections add a new immutable bundle and retain the superseded entry.',
  '',
];
fs.writeFileSync(path.join(ROOT, 'INDEX.md'), indexLines.join('\n'));
console.log(`Generated public index with ${index.entries.length} bundle(s)`);
