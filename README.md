# a11y-benchmark-results

Public, reproducible result bundles for
[`cogniumhq/a11y-benchmark`](https://github.com/cogniumhq/a11y-benchmark).

This repository publishes measurements separately from the corpus and its
ground truth. A listed result is format-validated evidence, not an endorsement,
certification, legal opinion, accessibility score for every product, or a
guarantee about production websites.

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
