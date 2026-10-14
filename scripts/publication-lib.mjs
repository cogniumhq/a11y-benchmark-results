import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
export const RESULTS = path.join(ROOT, 'results');

export const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
export const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
export const sha256 = (bytes) => `sha256:${crypto.createHash('sha256').update(bytes).digest('hex')}`;

export function bundleDirectories() {
  if (!fs.existsSync(RESULTS)) return [];
  return fs.readdirSync(RESULTS, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(RESULTS, entry.name))
    .sort();
}

export function resultFiles(bundle) {
  const comparison = readJson(path.join(bundle, 'comparison.json'));
  return comparison.tool_order.map((id) => path.join(
    bundle,
    id === 'cognium' ? 'cognium-conformis' : id,
    'result.json',
  ));
}

export function calculateMetrics(bundle) {
  const comparison = readJson(path.join(bundle, 'comparison.json'));
  const caseById = new Map(comparison.cases.map((item) => [item.id, item]));
  const tools = {};
  const union = new Set();

  for (const file of resultFiles(bundle)) {
    const result = readJson(file);
    const toolId = comparison.tool_order.find((id) =>
      (id === 'cognium' ? 'cognium-conformis' : id) === path.basename(path.dirname(file)));
    const sourceTool = comparison.tools[toolId];
    const metricFamily = sourceTool.lineage.metric_family
      || 'criterion-isolated automated detection';
    const isCriterionDetection = [
      'criterion-isolated automated detection',
      'criterion-mapped automated detection',
    ].includes(metricFamily);
    const defect = result.executions.filter((item) => caseById.get(item.case_id)?.mode === 'tp');
    const controls = result.executions.filter((item) => caseById.get(item.case_id)?.mode === 'safe');
    const hasFail = (execution) => execution.outcomes.some(({ verdict }) => verdict === 'fail');
    const detected = defect.filter(hasFail);
    if (isCriterionDetection) {
      for (const execution of detected) union.add(execution.case_id);
    }
    const signalCases = sourceTool.cases.filter(({ automated_findings: findings }) => findings > 0);
    tools[toolId] = {
      name: result.run.tool.name,
      version: result.run.tool.version,
      ...(sourceTool.lineage.metric_family ? { metric_family: metricFamily } : {}),
      cases: result.executions.length,
      completed: result.executions.filter(({ status }) => status === 'completed').length,
      errors: result.executions.filter(({ status }) => status === 'error').length,
      ...(isCriterionDetection ? {
        defect_cases: defect.length,
        defect_cases_target_detected: detected.length,
        expected_criteria: defect.reduce((sum, item) => sum + item.outcomes.length, 0),
        expected_criteria_matched: defect.reduce((sum, item) =>
          sum + item.outcomes.filter(({ verdict }) => verdict === 'fail').length, 0),
        control_cases: controls.length,
        controls_target_clean: controls.filter((item) => !hasFail(item)).length,
        missed_defect_cases: defect.filter((item) => !hasFail(item)).map(({ case_id }) => case_id),
      } : {
        signal_pages_with_findings: signalCases.length,
        signal_findings: signalCases.reduce((sum, item) => sum + item.automated_findings, 0),
      }),
    };
  }

  assert.equal(new Set(Object.values(tools).map(({ cases }) => cases)).size, 1);
  const defectIds = comparison.cases.filter(({ mode }) => mode === 'tp').map(({ id }) => id);
  return {
    format: 'cognium-a11y-benchmark-metrics',
    format_version: '1.0.0',
    corpus: comparison.corpus,
    suite: comparison.suite.name,
    coverage: comparison.coverage,
    tools,
    union: {
      defect_cases: defectIds.length,
      defect_cases_target_detected: union.size,
      common_misses: defectIds.filter((id) => !union.has(id)),
    },
  };
}
