# Native-output disclosure

Raw native outputs are not redistributed in this bundle.

- Cognium Conformis is imported from a sanitized all-pages proofgraph
  projection; the private proofgraph and runtime are not published.
- The six direct accessibility adapters and the Nu Html Checker adapter discard
  complete native reports after normalization so that HTML fragments, selectors
  and tool-specific evidence do not cross the publication boundary.
- Every execution in each schema-valid `result.json` contains a SHA-256 digest
  of the native output used for that case. Cognium Conformis rows share the
  digest of the source proofgraph; direct adapters record a per-page digest.
- Nu native error identifiers are irreversible hashes. Its 98-finding aggregate
  across 44 pages is published in the comparison and specialist metrics, but
  raw messages and rendered markup are not redistributed.
- Digests allow a party holding the corresponding native artifact to verify its
  identity. They do not reconstruct the omitted evidence and are not presented
  as independent reproduction.

The normalized criterion lane includes native rule IDs, mapped WCAG criteria,
finding counts, execution state and the explicit `cannot-tell` boundary.
Specialized signals remain separately labelled. Corrections must create a new
immutable bundle rather than replacing these digests silently.
