# Method: Conformis labelled HTML pages

## Purpose and classification

Maintainer-authored measurement of Cognium Conformis against the public
synthetic corpus. Cognium maintains the corpus and makes the product. This is
not an independent reproduction, a WCAG conformance claim, a legal opinion or
a certification.

Only public synthetic pages were used. No customer target, credential, cookie,
authorization header or production capture is in this bundle.

## Pinned inputs

- Corpus commit: `94ef3f918e80a2bbc5f586271a55f9439c9fa637`
- Corpus manifest: `sha256:e47c343fbe2b73049756ef566d0fa7e32e0ae90d28e214b45efaf20d3ac8edfe`
- Conformis commit: `c315d202b3561213e81f989b98104e172547189f` (short head recorded by the bench: `c315d202`)
- Packs: `a11y/html@1.6.0 + tech/html-aria@1.3.0`
- Harness: `packs/a11y-html/bench/a11y-benchmark-2026-10` in that Conformis commit
- Explore setting recorded by the bench: `false`

The bench label file in the working tree was regenerated for this corpus pin.
That pin is the `pin` field of the bench JSON. Checking out the Conformis
commit alone still has the previous pin until that label update is committed
there.

The executed commit is detached. This bundle does not claim it equals
`origin/main`.

## Command

```sh
npm run bench:a11y-benchmark -- --fresh
```

Each labelled page is its own run of `a11y/html` and `tech/html-aria`, with
the static-site kit and an empty declared-flow list. Egress is denied by that
harness. Relative stylesheets and frames resolve inside the corpus checkout.

## Mapping

- A `should-report` page is a known defect. A declared criterion is detected
  only when the bench's `hitCriteria` includes it. The native id is the
  control id (`AX-…`), not the criterion.
- A `must-not-report` page is a corrected control. A hit on its declared
  criterion is a target finding. A hit on any other criterion is kept as an
  other finding and is not a false positive on the declared criterion.
- No mapped finding is `cannot-tell`. It is not a pass.
- `examined_count` is null. The product counts controls, not elements.
- A bench row with `errors` is `error`. It is not a miss and not a pass.
- `cannot-tell` and journey-level `other` rows were run. They are omitted
  from this denominator because the bench's own labels say they are not
  definite defect or control pages.
- Corpus cases the bench did not run (pipeline accounting pages, native
  documents, pages with no header) are not selected. They are not passes.

## Environment

- Platform recorded by the bench: `linux/arm64`
- Runtime: `Node.js v24.17.0`
- Browser: Chromium `149.0.7827.0`
- Viewport: 1280×900
- Reduced motion: `reduce`
- Colour scheme: `light`
- One repetition.

## Limits

The corpus state-driver contract was not executed. Loaded-page results do not
measure defects that appear only after the declared interaction. Human and
assistive-technology protocols were not run. No other product was refreshed.
