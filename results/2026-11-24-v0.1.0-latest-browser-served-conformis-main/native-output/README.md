# Native-output disclosure

Raw native outputs are not redistributed in this bundle.

- Cognium Conformis is imported from a sanitized all-pages proofgraph
  projection (`comparison/import-cognium.mjs` in the runner); the private
  proofgraph and runtime are not published. Every row carries the digest of
  the source proofgraph.
- No other product was executed in this bundle.
- A digest lets a party holding the native artifact verify its identity. It
  does not reconstruct the omitted evidence.

The normalized criterion lane keeps native control IDs, mapped WCAG criteria,
finding counts, execution state and the explicit `cannot-tell` boundary.
Corrections must create a new immutable bundle rather than replacing these
digests silently.
