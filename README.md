# a11y-benchmark-results

Public, reproducible result bundles for
[`cogniumhq/a11y-benchmark`](https://github.com/cogniumhq/a11y-benchmark).

This repository publishes measurements separately from the corpus and its
ground truth. A listed result is format-validated evidence, not an endorsement,
certification, legal opinion, accessibility score for every product, or a
guarantee about production websites.

## Published bundles

| Bundle | Classification | Corpus | Scope |
|---|---|---|---:|
| [`2026-10-12-v0.1.0-functional-scenarios`](results/2026-10-12-v0.1.0-functional-scenarios/) | maintainer-authored | `v0.1.0` | 36/234 automated cases |

Each bundle contains one schema-valid `result.json` per product, a method note,
the normalized comparison data, mapping code, metrics, a human-readable report,
native-output digest disclosure and checksums. Human and assistive-technology
evaluations are separate lanes and are never averaged into automated results.

## Validate

```sh
npm ci --ignore-scripts
npm run generate
git diff --exit-code
npm test
```

See [CONTRIBUTING.md](CONTRIBUTING.md) to publish a vendor-authored,
independently reproduced, academic or maintainer-authored result.
