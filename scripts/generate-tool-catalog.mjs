import fs from 'node:fs';
import path from 'node:path';

import { ROOT, readJson } from './publication-lib.mjs';

const catalog = readJson(path.join(ROOT, 'tool-catalog.json'));
const label = (value) => value.split('-').map((part) =>
  part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
const counts = (field) => Object.entries(Object.groupBy(catalog.entries,
  (entry) => entry[field])).sort(([a], [b]) => a.localeCompare(b));

const lines = [
  '# Accessibility benchmark tool catalog',
  '',
  `Research review date: ${catalog.reviewed_on}.`,
  '',
  `This catalog represents ${catalog.entries.length} product surfaces across ${new Set(catalog.entries.map(({ category }) => category)).size} categories. It is a comparison roadmap, not a claim that every product has been run. The immutable result bundles remain the only source of executed measurements.`,
  '',
  '## Evidence maturity',
  '',
  '| State | Meaning | Catalog count |',
  '|---|---|---:|',
  ...Object.entries(catalog.coverage_states).map(([state, meaning]) =>
    `| ${state} | ${meaning} | ${catalog.entries.filter(({ maturity }) => maturity === state).length} |`),
  '',
  'A represented tool has inventory coverage only. It has no inferred detection score, pass rate or conformance outcome. Wrappers, browser extensions and ensembles remain useful product comparisons, but they do not add an independent engine vote.',
  '',
  '## Implementation order',
  '',
  '1. Add local adapters for Siteimprove Alfa, QualWeb and Nu Html Checker; preserve each native outcome vocabulary and criterion mapping.',
  '2. Run Testaro as an orchestration cross-check while reporting its underlying engines separately.',
  '3. Define repeatable browser protocols for axe DevTools, WAVE, ARC Toolkit and ANDI; execute the existing Accessibility Insights protocol.',
  '4. Execute the existing screen-reader protocol independently with JAWS, NVDA, VoiceOver and TalkBack.',
  '5. Add native mobile, desktop, PDF, office-document and EPUB fixtures before claiming results for those surfaces.',
  '6. Invite commercial vendors to submit version-pinned exports using the public result contract; do not upload the corpus to hosted services without an approved privacy review.',
  '',
  '## Inventory summary',
  '',
  '| Dimension | Value | Count |',
  '|---|---|---:|',
  ...counts('category').map(([value, entries]) => `| Category | ${label(value)} | ${entries.length} |`),
  ...counts('priority').map(([value, entries]) => `| Priority | ${value} | ${entries.length} |`),
  '',
];

for (const category of [...new Set(catalog.entries.map(({ category }) => category))].sort()) {
  lines.push(`## ${label(category)}`, '');
  lines.push('| Product surface | Surface | Access | Engine lineage | Metric family | Maturity | Readiness | Priority |');
  lines.push('|---|---|---|---|---|---|---|---:|');
  for (const entry of catalog.entries.filter((item) => item.category === category)) {
    const lineage = `${entry.engine_family}; ${entry.independence}${entry.wrapper_of ? ` of ${entry.wrapper_of}` : ''}`;
    const result = entry.current_result ? ` ([result](${entry.current_result}))` : '';
    lines.push(`| [${entry.name}](${entry.source})${result} | ${entry.surface} | ${entry.access} | ${lineage} | ${entry.metric_family} | ${entry.maturity} | ${entry.readiness} | ${entry.priority} |`);
  }
  lines.push('');
}

lines.push(
  '## Research anchors',
  '',
  ...catalog.research_anchors.map(({ title, url }) => `- [${title}](${url})`),
  '',
  '## Interpretation rules',
  '',
  `- ${catalog.policy.versions}`,
  `- ${catalog.policy.lineage}`,
  `- ${catalog.policy.lanes}`,
  `- ${catalog.policy.no_result}`,
  '',
);

fs.writeFileSync(path.join(ROOT, 'TOOL_CATALOG.md'), lines.join('\n'));
console.log(`Generated tool catalog with ${catalog.entries.length} surfaces`);
