# Native-output disclosure

Raw Conformis bench rows are not redistributed.

- The source is the JSON written by `npm run bench:a11y-benchmark` in
  `cogniumhq/conformis` at `26ab6cc85a810f6b0a39d15f1953314dafdb4d03`.
- Each execution's `evidence.digest` is the SHA-256 of that page's bench row,
  JSON-serialised as parsed. A party who has the same file can recompute it.
- The digest does not reconstruct selectors, anchors or deviation prose, and
  it is not an independent reproduction.
- The whole bench file digest is `sha256:4a9fdcf648956ca3d7e7e9e8da3c0ce15eb4cac776eade4ba78c11e51e80fd0e`.
- Corrections publish a new bundle. They do not replace these digests.
