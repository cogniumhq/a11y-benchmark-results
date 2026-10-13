# Contributing benchmark results

Contributions are welcome from product vendors, auditors, researchers and
community projects. Keep measurements separate from corpus truth and submit
each new or corrected bundle through a pull request.

## Required bundle

Create `results/<local-date>-<corpus-version>-<scope>/` with:

- `publication.json` identifying the authorship classification, immutable
  corpus revision, manifest digest, harness revision and product revisions;
- `comparison.json` containing only normalized public-synthetic measurements;
- one `<tool-id>/result.json` file per product, conforming to the pinned public
  benchmark-result schema;
- `method.md` describing commands, enabled rules, mappings, sampling, state
  drivers, environment differences and manual decisions;
- `native-output/README.md` plus redistributable native outputs, or SHA-256
  digests with a reason the native output is not published;
- `tool-surfaces.json` declaring every measured product plus any inventoried
  browser surface, its engine lineage, execution status and metric treatment;
- generated `metrics.json`, `REPORT.md` and `SHA256SUMS`; and
- a correction link when a bundle supersedes an earlier result.

Use exactly one classification: `vendor-authored`, `independently-reproduced`,
`academic`, or `maintainer-authored`. Interfaces backed by another engine must
declare `wrapper_of`; they are not independent votes.

An installed extension is a product surface, not automatically a distinct
rules engine. Record the extension edition and version, embedded engine version
when verifiable, enabled paid or guided features, browser profile and telemetry
setting. If an assisted or manual workflow was not performed, publish a run
plan with `not-executed` status and no outcomes; never synthesize a score.

## Result semantics

- Report every completed, errored, blocked and unsupported execution.
- Never convert no finding, a zero examined count, an unobserved target, an
  unsupported state or an execution error into a pass.
- Keep automated, human, assistive-technology and user-task outcomes in
  separate lanes.
- Report denominators and counts, not only percentages.
- A corrected control with no mapped finding is `cannot-tell`; aggregate
  “target-clean” means only that the declared criterion was not reported.

## Privacy and licensing

Use only public synthetic corpus inputs. Do not publish credentials, license
keys, customer targets, production captures, private selectors, personal
information, cookies, authorization headers or internal paths. The repository
is Apache-2.0; contributors must have the right to redistribute everything they
add. If native product output cannot be redistributed, publish its digest and
the transformation code instead.

## Pull-request checklist

- [ ] Corpus tag or 40-character commit and manifest SHA-256 are pinned.
- [ ] Product build, engine lineage, interface, OS, runtime, browser, viewport
      and repetitions are disclosed.
- [ ] Engine-backed extensions are not double-counted as independent votes,
      and unexecuted manual work contains no inferred results.
- [ ] State reach, target observability and all execution errors are preserved.
- [ ] Raw-output evidence is published or replaced by a digest and explanation.
- [ ] `npm run generate`, `git diff --exit-code` and `npm test` pass.
- [ ] The report states that validation is not certification or endorsement.
- [ ] Superseded results remain available and link to the correction.

Maintainer acknowledgement means only that the disclosure is complete and the
files validate. It does not certify either the product or the result.
