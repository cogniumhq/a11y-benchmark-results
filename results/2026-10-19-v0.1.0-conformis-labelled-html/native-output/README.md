# Native-output disclosure

Raw Conformis bench rows are not redistributed.

- The source is the JSON written by `npm run bench:a11y-benchmark` in
  `cogniumhq/conformis` at `c315d202b3561213e81f989b98104e172547189f`.
- Each execution's `evidence.digest` is the SHA-256 of that page's bench row,
  JSON-serialised as parsed. A party who has the same file can recompute it.
- The digest does not reconstruct selectors, anchors or deviation prose, and
  it is not an independent reproduction.
- The whole bench file digest is `sha256:8f6ab43b647f6eb9a6ed3abec6488d08c2b2b81ce7eece1639fb4f952b66c7f9`.
- Corrections publish a new bundle. They do not replace these digests.
