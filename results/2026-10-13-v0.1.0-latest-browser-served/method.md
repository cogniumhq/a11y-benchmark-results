# Method: latest browser-served corpus comparison

## Purpose and classification

This maintainer-authored bundle compares automated target-criterion detection
across every definite defect or corrected-control case that the merged corpus
HTTP server exposes. It is a finite synthetic-corpus coverage snapshot, not an
independent reproduction, WCAG conformance assessment, legal opinion, product
certification or universal ranking.

Only public synthetic inputs were used. No customer target, production capture,
credential, cookie, authorization header, private selector, personal information
or local path is published.

## Pinned inputs and scope

- Corpus commit: `469486a4811c5055de9d2524ede1ca520c2774c8`
- Corpus manifest: `sha256:a4e01bcd1281bfb1c1951657a815ad2da053e5e233c1d937dd7ed7227c03c9f0`
- Cognium Conformis commit: `28f9e14db3a095f3d5983a947f233c99772a2b25`
- Comparison harness commit: `32edddfa06448a583344d940d1ac18b2b2fb1117`
- Harness review: <https://github.com/cogniumhq/a11y-validation/pull/11>

All repositories were pulled before execution. The corpus contains 270 cases.
The full automated candidate set contains 252 cases, but 38 were outside the
comparable served-browser lane: 26 AAA pages and eight pipeline-integrity pages
were not exposed by the merged server, while four PDF/DOCX cases require native
document adapters. This bundle therefore executes 214 pages: 110 known defects
and 104 corrected controls, carrying 189 defect assertions over 54 distinct
WCAG criteria. Another 18 corpus cases are guided or explicit cannot-tell cases.
Eight human and assistive-technology protocols were available and not executed.

## Execution and normalization

Cognium Conformis ran the 214 entry pages declared in a local subject, with no
declared interaction flows. The latest report had 214/214 pages hydrated and
reproduced, zero capture misses, zero run errors and zero records outside the
proofgraph. Its sanitized proofgraph projection was imported by exact fixture ID.

The direct adapters completed the same 214 pages at their default loaded state.
They were projected by exact case ID from a completed `--suite all` run against
the identical corpus commit; the 38 server-unsupported rows were excluded rather
than counted as scanner errors. The logical commands were:

```sh
node import-cognium.mjs \
  --suite latest-browser-served \
  --source <sanitized-conformis-export> \
  --fixture-root <pinned-corpus-checkout>

node run.mjs \
  --suite all \
  --tools axe,pa11y-htmlcs,ibm,lighthouse,alfa,qualweb,nu-html-checker \
  --fixture-root <pinned-corpus-checkout>
```

Nu Html Checker ran as a local digest-pinned service. No fixture was submitted
to a hosted product.

## Product configurations

- Cognium Conformis: `a11y/html@1.2.1`, `tech/html-aria@1.2.1`, browser driver
  `0.9.13`, static-html driver `0.2.3`
- axe-core `4.14.0`, WCAG 2.0/2.1/2.2 A and AA tags
- Pa11y `10.0.0`, HTML_CodeSniffer runner, `WCAG2AA`
- IBM Equal Access Accessibility Checker `4.0.34`, `WCAG_2_2` policy
- Lighthouse `13.5.0`, accessibility category; axe-derived
- Siteimprove Alfa rules `0.119.0`, Puppeteer integration `0.84.2`
- QualWeb core `0.9.5`, ACT `0.8.6`, WCAG techniques `0.4.9`, best practices `0.7.13`
- Nu Html Checker `26.10.12 (0a70d65)`, container digest
  `sha256:8f21030474e68e06905cfa801b37376e99c0e37867c653c5b6cd7e2dcaf3f503`

Cognium Conformis ran on Linux/arm64 with Chromium `149.0.7827.0`.
Direct adapters ran on macOS/arm64 with Chromium `149.0.7827.55`. All used a
1280x900 viewport. Each product has one repetition; durations are diagnostic
and are not a speed ranking.

## Scoring and interpretation

A defect assertion receives credit only when a native finding maps explicitly
to that case's declared criterion. Another finding on the page earns no target
credit. A corrected control is target-clean only when its declared criterion is
not reported; that is encoded as cannot-tell, not pass. Nu's native markup
signals remain separate and do not enter WCAG criterion recall.

Cognium Conformis leads this lane with 71/189 target assertions, 47/110 defect
pages and 17/54 criteria detected while all 104 corrected controls remain
target-clean. QualWeb is next on assertion count at 59/189, with two corrected-
control target findings. The product union detects 75/189 assertions on 50/110
defect pages and 18/54 distinct criteria. The union's 18 is a measured result,
not the earlier fixed 18-scenario denominator.

Three corrected-control-clean Conformis gaps were logged before publication:

- <https://github.com/cogniumhq/conformis/issues/288>
- <https://github.com/cogniumhq/conformis/issues/289>
- <https://github.com/cogniumhq/conformis/issues/290>

An Alfa-only WCAG 2.5.5 signal was not treated as a Conformis defect because
Alfa also reports that criterion on the corrected control. Conformis reports
WCAG 2.5.8 on the defect and leaves that control target-clean.

## Native-output boundary

Normalized rule IDs, mapped criteria, counts, status and SHA-256 digests are
published. Raw proofgraphs, HTML fragments, selectors, screenshots and complete
third-party reports are not redistributed. See `native-output/README.md`.
