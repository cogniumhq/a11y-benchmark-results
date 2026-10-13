# Native-output disclosure

Raw native outputs are not redistributed in this bundle.

- Cognium Conformis is imported from a sanitized all-pages proofgraph projection;
  the private proofgraph and runtime are not published.
- The four direct adapters discard complete native reports after normalization
  so that HTML fragments, selectors and tool-specific evidence do not cross the
  publication boundary.
- Every execution in each schema-valid `result.json` contains a SHA-256 digest
  of the native output used for that case. Cognium Conformis rows share the
  digest of the source proofgraph; direct adapters record a per-page digest.
- Digests allow a party holding the corresponding native artifact to verify its
  identity. They do not reconstruct the omitted evidence and are not presented
  as independent reproduction.

The published normalized evidence includes native rule IDs, mapped WCAG
criteria, finding counts, execution state and the explicit `cannot-tell`
boundary. Corrections must create a new immutable bundle rather than replacing
these digests silently.
