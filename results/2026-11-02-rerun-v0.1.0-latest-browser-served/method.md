# Method: re-run of the latest browser-served lane from committed inputs

## Purpose and classification

This maintainer-authored bundle re-runs the lane published as
`2026-10-13-v0.1.0-latest-browser-served` (seven criterion-mapped product
configurations over 214 corpus pages) with every input taken from a commit. Its
question is whether that result can be repeated by someone holding only the
committed inputs. Cognium maintains the corpus and makes Cognium Conformis, and
the same maintainers made this run, so it is not an independent reproduction.
It is not a WCAG conformance assessment, legal opinion, product certification
or universal ranking.

Only public synthetic inputs were used. No customer target, production capture,
credential, cookie, authorization header, private selector, personal
information or local path is published.

## Pinned inputs

- Corpus commit: `469486a4811c5055de9d2524ede1ca520c2774c8`, the 2026-10-13
  revision. The runner refuses another checkout, or one with local changes.
- Corpus manifest: `sha256:a4e01bcd1281bfb1c1951657a815ad2da053e5e233c1d937dd7ed7227c03c9f0`
- Runner: `cogniumhq/a11y-benchmark` `comparison/` at
  `101112de2a3ba81af328c562363aac74181ea324`. Its `package-lock.json` pins
  every tool and dependency; the runner refuses an install that differs.
- Case list: `comparison/suites/latest-browser-served.json`, the 214 cases of
  the 2026-10-13 bundle in its order: 110 known defects and 104 corrected
  controls, 189 declared target assertions over 54 WCAG criteria.
- Cognium Conformis: `cogniumhq/conformis@28f9e14db3a095f3d5983a947f233c99772a2b25`,
  the 2026-10-13 run's revision: `a11y/html@1.2.1`, `tech/html-aria@1.2.1`,
  browser driver `0.9.13`, static-html driver `0.2.3`. The repository is
  private; the subject declaration, command and importer are in the runner.

## Commands

```sh
git -C <corpus> checkout --detach 469486a4811c5055de9d2524ede1ca520c2774c8
npm ci --prefix comparison

# six directly executed tools
node comparison/run.mjs --fixture-root <corpus> --out out/direct --chromium <chrome>

# Cognium Conformis, from a checkout of cogniumhq/conformis at 28f9e14d
node <corpus>/serve.mjs --host 127.0.0.1 --port 4173
npm run a11y:site -- --subject <a11y-benchmark>/comparison/cognium/latest-browser-served-subject.yaml \
  --live --out out/cognium-report
node comparison/import-cognium.mjs --source out/cognium-report --fixture-root <corpus> \
  --out out/cognium-export.json --conformis-revision 28f9e14db3a095f3d5983a947f233c99772a2b25
node comparison/run.mjs --fixture-root <corpus> --out out/cognium --tools cognium \
  --cognium-export out/cognium-export.json

node comparison/merge.mjs --out out/comparison.json out/cognium/comparison.json out/direct/comparison.json
node scripts/import-comparison.mjs --source out/comparison.json \
  --out results/2026-11-02-rerun-v0.1.0-latest-browser-served \
  --schema results/2026-10-13-v0.1.0-latest-browser-served/schema/benchmark-result.schema.json \
  --conformis-revision 28f9e14db3a095f3d5983a947f233c99772a2b25
node comparison/diff.mjs results/2026-10-13-v0.1.0-latest-browser-served/comparison.json \
  results/2026-11-02-rerun-v0.1.0-latest-browser-served/comparison.json
```

## Product configurations

Unchanged from 2026-10-13. The adapters, configurations and native-rule-to-WCAG
mappings in `comparison/run.mjs` restate the 2026-10-13 harness. The one
addition records a Lighthouse `runtimeError` as an execution error instead of
an empty audit list; it did not occur in this run.

- Cognium Conformis: one deployed-site subject declaring the 214 pages as entry
  points, no flows, `--live` against the corpus server on 127.0.0.1:4173.
- axe-core `4.14.0`, WCAG 2.0/2.1/2.2 A and AA tags, through Playwright 1.61.1.
- Pa11y `10.0.0`, HTML_CodeSniffer runner, `WCAG2AA`.
- IBM Equal Access Accessibility Checker `4.0.34`, `WCAG_2_2` policy,
  `ruleArchive: versioned`. The checker reads an archive list and loads the
  rule engine the list names for its version. On 2026-10-13 both came from a
  CDN: the list of `accessibility-checker-engine@next` (4.0.29) and engine
  `4.0.27` (archive `13July2026`). Here both are packages in the lock, served on
  127.0.0.1. The archive label recorded on every page is the same as on
  2026-10-13.
- Lighthouse `13.5.0`, accessibility category; axe-derived.
- Siteimprove Alfa rules `0.119.0`, Puppeteer integration `0.84.2`.
- QualWeb core `0.9.5`, ACT `0.8.6`, WCAG techniques `0.4.9`, best practices `0.7.13`.
- Nu Html Checker was not executed. Its pinned container image could not be
  pulled on this host. It is a markup-signal lane and was never part of the
  WCAG criterion metrics.

## Environment

- Linux x86_64 virtual machine, 2 vCPUs, Node.js `v22.23.4`, viewport
  1280×900, one repetition per product.
- Every tool used Chromium `153.0.8010.12` (Chrome for Testing), the build
  installed on the host. The 2026-10-13 builds, Chromium `149.0.7827.55` for the
  direct tools (Playwright 1.61.1) and `149.0.7827.0` for Cognium Conformis,
  could not be installed: browser downloads and the image registry were not
  reachable from this host.
- Cognium Conformis at `28f9e14d` runs each browser pass with `docker run` in
  `mcr.microsoft.com/playwright:v1.61.1-noble@sha256:5b8f294aff9041b7191c34a4bab3ac270157a28774d4b0660e9743297b697e48`.
  No Docker daemon was available, so each pass ran in place through a local
  stand-in for the `docker` command that accepts only that digest and only
  `node <script on a mount>`. It reproduces the pass's bind mounts (read-only
  where declared) in a private mount namespace, passes only the declared
  environment variables, and gives a pass declared with no network a private
  network namespace with loopback only. The image's own Chromium and fonts were
  replaced by the host's. Every pass exited 0 and the report has zero run errors.
- Fonts were the host's. Conformis records `sans-serif` as Inter, `serif` as
  DejaVu Serif and `monospace` as DejaVu Sans Mono. The 2026-10-13 runs used
  the macOS font set (direct tools) and the pinned image's (Conformis).
- The six direct tools and the Conformis scan ran at the same time on the same
  two vCPUs.
- Chromium's own background requests to public hosts were refused by the
  host's egress proxy. No lane page loads an external resource.

## Scoring and interpretation

As published on 2026-10-13. A known defect is detected only when a native
finding maps to one of its declared `min_criteria`. A corrected control is
target-clean only when none of its `must_not_report` criteria is reported;
that is `cannot-tell`, not pass. A finding on another criterion earns nothing
and is not a false positive on the declared criterion. Errors are errors.

The report also applies the reference scorer of the pinned corpus revision
(`check/score.mjs`, policy `cognium-a11y-scoring/1.0.0`) to each `result.json`,
with `--strict`.

## Native-output boundary

Normalized rule IDs, mapped criteria, counts, status and SHA-256 digests are
published. Raw proofgraphs, HTML fragments, selectors, screenshots and complete
third-party reports are not. See `native-output/README.md`.
