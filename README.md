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

## Validate

```sh
npm ci --ignore-scripts
npm run generate
git diff --exit-code
npm test
```

See [CONTRIBUTING.md](CONTRIBUTING.md) to publish a vendor-authored,
independently reproduced, academic or maintainer-authored result.
