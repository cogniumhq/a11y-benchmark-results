import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

function option(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : null;
}

const sourceFile = option('source');
const outputDirectory = option('out');
const schemaFile = option('schema');
const conformisRevision = option('conformis-revision');

if (!sourceFile || !outputDirectory || !schemaFile || !conformisRevision) {
  console.error('usage: node scripts/import-comparison.mjs --source SNAPSHOT --out BUNDLE --schema SCHEMA --conformis-revision SHA');
  process.exit(2);
}

assert.match(conformisRevision, /^[a-f0-9]{40}$/, 'Conformis revision must be a 40-character commit SHA');

const readJson = (file) => JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
const source = readJson(sourceFile);
const sourceText = JSON.stringify(source);

for (const pattern of [
  /(?:\/Users\/|\/home\/|[A-Z]:\\Users\\)/,
  /(?:marketplace=|pageUID=|set-cookie|authorization:|bearer\s+)/i,
  /(?:-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16})/,
]) {
  assert.doesNotMatch(sourceText, pattern, `source comparison violates the public-data boundary: ${pattern}`);
}

assert.equal(source.corpus.repository, 'cogniumhq/a11y-benchmark');
assert.match(source.corpus.revision, /^[a-f0-9]{40}$/);
assert.match(source.corpus.manifest_sha256, /^sha256:[a-f0-9]{64}$/);
assert.ok(Array.isArray(source.tool_order) && source.tool_order.length > 0);
assert.ok(Array.isArray(source.cases) && source.cases.length > 0);

if (source.tools.cognium) {
  source.tools.cognium.label = 'Cognium Conformis';
  source.tools.cognium.lineage.name = 'Cognium Conformis';
}

const output = path.resolve(outputDirectory);
fs.mkdirSync(output, { recursive: true });
fs.mkdirSync(path.join(output, 'schema'), { recursive: true });
writeJson(path.join(output, 'comparison.json'), source);
fs.copyFileSync(path.resolve(schemaFile), path.join(output, 'schema', 'benchmark-result.schema.json'));

function directEnvironment() {
  const match = /^Chromium\s+(.+)$/.exec(source.environment.browser);
  assert.ok(match, 'comparison browser must include a Chromium version');
  return {
    os: `${source.environment.platform}/${source.environment.architecture}`,
    runtime: `Node.js ${source.environment.node}`,
    browser: 'Chromium',
    browser_version: match[1],
    viewport: { width: 1280, height: 900 },
  };
}

function conformisEnvironment(tool) {
  const environment = tool.source.environment;
  const match = /^Chromium\s+(.+)$/.exec(environment.browser);
  assert.ok(match, 'Cognium Conformis browser must include a Chromium version');
  const drivers = tool.source.versions.drivers;
  return {
    os: environment.platform,
    runtime: `Cognium Conformis browser driver ${drivers.browser}; static-html driver ${drivers['static-html']}`,
    browser: 'Chromium',
    browser_version: match[1],
    viewport: environment.viewport,
  };
}

function mappedRules(row, criterion) {
  return [...new Set(row.findings
    .filter((finding) => finding.criteria.includes(criterion))
    .map((finding) => finding.rule))].sort();
}

function execution(row, toolId) {
  if (row.status === 'error') {
    return {
      case_id: row.id,
      case_path: row.path,
      status: 'error',
      declared_state: toolId === 'cognium' ? 'suite-declared page or flow state' : 'default page load',
      state_reached: false,
      target_observability: 'unknown',
      outcomes: [],
      error: { code: 'tool-execution-error', message: row.error || 'Tool execution failed.' },
    };
  }

  assert.equal(row.status, 'ok', `${toolId}/${row.id} has an unsupported source status`);
  assert.match(row.source_output_sha256, /^sha256:[a-f0-9]{64}$/,
    `${toolId}/${row.id} is missing a native-output digest`);
  const outcomes = row.expected_criteria.map((criterion) => {
    const rules = mappedRules(row, criterion);
    const matched = row.matched_expected_criteria.includes(criterion);
    const findings = row.findings
      .filter((finding) => finding.criteria.includes(criterion))
      .reduce((sum, finding) => sum + finding.count, 0);
    return {
      criterion,
      native_rule_id: rules.join(' | ') || 'no-mapped-native-rule',
      verdict: matched ? 'fail' : 'cannot-tell',
      findings: matched ? findings : 0,
      examined_count: null,
      evidence: [{
        type: 'digest',
        digest: row.source_output_sha256,
        note: matched
          ? 'SHA-256 digest of the native per-case output used for this mapped finding.'
          : 'No finding mapped to this declared criterion; cannot-tell is preserved instead of claiming pass.',
      }],
    };
  });

  return {
    case_id: row.id,
    case_path: row.path,
    status: 'completed',
    declared_state: toolId === 'cognium' ? 'suite-declared page or flow state' : 'default page load',
    state_reached: true,
    target_observability: outcomes.some(({ verdict }) => verdict === 'fail') ? 'observed' : 'unknown',
    outcomes,
  };
}

for (const toolId of source.tool_order) {
  const tool = source.tools[toolId];
  assert.ok(tool, `missing tool ${toolId}`);
  const lineage = tool.lineage;
  const result = {
    format: 'cognium-a11y-benchmark-result',
    format_version: '1.0.0',
    corpus: {
      repository: source.corpus.repository,
      revision: source.corpus.revision,
      manifest_sha256: source.corpus.manifest_sha256,
    },
    run: {
      id: `${path.basename(output)}-${toolId}`,
      started_at: tool.run.started_at,
      completed_at: tool.run.completed_at,
      repeat: tool.run.repeat,
      tool: {
        name: toolId === 'cognium' ? 'Cognium Conformis' : tool.label,
        version: toolId === 'cognium' ? `git:${conformisRevision}; ${tool.version}` : tool.version,
        engine_family: lineage.engine_family,
        tool_surface: lineage.tool_surface,
        independence: lineage.independence,
        ...(lineage.wrapper_of ? { wrapper_of: lineage.wrapper_of } : {}),
      },
      environment: toolId === 'cognium' ? conformisEnvironment(tool) : directEnvironment(),
      privacy: {
        fixture_data: 'public-synthetic',
        raw_evidence_published: false,
      },
    },
    executions: tool.cases.map((row) => execution(row, toolId)),
  };
  const toolDirectory = path.join(output, toolId === 'cognium' ? 'cognium-conformis' : toolId);
  fs.mkdirSync(toolDirectory, { recursive: true });
  writeJson(path.join(toolDirectory, 'result.json'), result);
}

console.log(`Imported ${source.tool_order.length} tool results into ${output}`);
