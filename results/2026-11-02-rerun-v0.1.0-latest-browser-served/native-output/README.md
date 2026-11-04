# Native-output disclosure

Raw native outputs are not redistributed in this bundle.

- Cognium Conformis is imported from a sanitized all-pages proofgraph
  projection (`comparison/import-cognium.mjs` in the runner); the private
  proofgraph and runtime are not published. Its rows share the digest of the
  source proofgraph.
- The six direct adapters discard complete native reports after normalization,
  so HTML fragments, selectors and tool-specific evidence do not cross the
  publication boundary. Each records a SHA-256 digest of its per-page native
  output.
- Nu Html Checker was not executed in this run.
- Digests let a party holding the native artifact verify its identity. They do
  not reconstruct the omitted evidence. Per-page digests differ from the
  2026-10-13 bundle wherever a native report carries a timestamp, a duration,
  a browser version or a port, so they are not a reproduction check; the case
  outcomes are.

The normalized criterion lane keeps native rule IDs, mapped WCAG criteria,
finding counts, execution state and the explicit `cannot-tell` boundary.
Corrections must create a new immutable bundle rather than replacing these
digests silently.
