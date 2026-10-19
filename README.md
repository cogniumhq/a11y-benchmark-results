# a11y-benchmark-results

Public, reproducible result bundles for
[`cogniumhq/a11y-benchmark`](https://github.com/cogniumhq/a11y-benchmark).

This repository publishes measurements separately from the corpus and its
ground truth. A listed result is format-validated evidence, not an endorsement,
certification, legal opinion, accessibility score for every product, or a
guarantee about production websites.

## Comparison roadmap

The generated [tool catalog](TOOL_CATALOG.md) tracks automated engines,
browser-assisted products, enterprise platforms, native mobile and desktop
checkers, document validators, specialized analyzers and assistive-technology
pairings. Its machine-readable source is [`tool-catalog.json`](tool-catalog.json).

Catalog inclusion means **represented**, not tested. Only immutable result
bundles can move a product to `executed`, and only an independent reproduction
can move it to `verified`. Engine wrappers and product surfaces retain their
lineage and never inflate independent-engine agreement.

## Published bundles

See the generated [public result index](INDEX.md). It distinguishes
vendor-authored, independently reproduced, academic and maintainer-authored
results and keeps superseded bundles discoverable.

Each bundle contains one schema-valid `result.json` per product, a method note,
the normalized comparison data, mapping code, metrics, a human-readable report,
native-output digest disclosure, a product-surface inventory and checksums.
Human and assistive-technology evaluations are separate lanes and are never
averaged into automated results.

The inventory distinguishes an engine from interfaces built on that engine.
For example, the current bundle measures axe-core directly, inventories the axe
DevTools browser extension without double-counting it, and provides a separate
assisted/manual execution protocol for Accessibility Insights for Web.

The latest browser-served bundle expands the comparable automated lane from the
original 36-page functional slice to 214 of 270 corpus cases: 110 known-defect
pages, 104 corrected controls, 189 target assertions and 54 distinct WCAG
criteria. The product union detects 18 of those 54 criteria; that measured
result must not be confused with the earlier fixed 18-scenario denominator.
Siteimprove Alfa and QualWeb remain in the criterion-mapped lane. Nu Html
Checker runs against the same pages, but its markup findings stay in a separate
specialized-signal lane and do not contribute to WCAG criterion recall.

The generated report now separates the prior flow-enabled functional core from
the expanded entry-page lane. The core's 9/18 (50%) and the expanded lane's
71/189 (38%) are different-scope measurements, not a product trend. Future
release comparisons must keep the corpus, target assertions, state/flow
contract, tool configuration and scoring rules fixed.

The latest report also contains a cross-repository defect ledger. It separates
confirmed product gaps from corpus, scenario-driver, validation-harness and
ground-truth-adjudication work, and retains resolved benchmark findings for
traceability.

`2026-10-19-v0.1.0-conformis-labelled-html` is a later Conformis-only run:
`a11y/html@1.6.0` and `tech/html-aria@1.3.0` against corpus `94ef3f91`,
234 of 282 cases. It does not replace the 2026-10-13 multi-product bundles.
Its report also scores this run and those October products on the 196 cases
whose assertion did not change.

## Validate

```sh
npm ci --ignore-scripts
npm run generate
git diff --exit-code
npm test
```

See [CONTRIBUTING.md](CONTRIBUTING.md) to publish a vendor-authored,
independently reproduced, academic or maintainer-authored result.
