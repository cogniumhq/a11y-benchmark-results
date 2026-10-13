# Method: v0.1.0 functional-scenarios comparison

## Purpose and classification

This maintainer-authored bundle compares automated target-criterion detection
on 18 isolated known-defect/corrected-control pairs. It is a regression and
coverage snapshot, not an independent reproduction, conformance assessment,
legal opinion, product certification or universal ranking.

The run used public synthetic data only. No customer target, production capture,
credential, cookie, authorization header, private selector, personal information
or local path is published.

## Pinned inputs

- Corpus: `cogniumhq/a11y-benchmark@v0.1.0`
- Corpus commit: `0105c659d9fe7e85119c190910b2c53985f83374`
- `corpus-manifest.json`:
  `sha256:1f6e6c0cd962689937c5ca44f4450997ec12b15506e93f1b2e69cdce7835b923`
- Cognium Conformis commit:
  `25d5253000df278f4a5fab5b690cee635a01e47a`
- Comparison harness commit:
  `1a70bca62ddda4b65f06ba89df74b23369132675`
- Declared-flow file:
  `sha256:6044a07c187da76ec07e7e6f706179a096bc49f9bbdfbfe2aa779a36a6b757dd`

The automated lane contains 36 of the corpus's 234 cases. It has 18
known-defect pages and 18 criterion-isolated corrected controls. The remaining
198 cases and all eight human/assistive-technology protocols were not executed.

## Commands

The corpus was served on an ephemeral loopback address. The comparison harness
used the following logical commands with the pinned checkout:

```sh
node import-cognium.mjs \
  --suite functional-scenarios \
  --source <sanitized-cognium-conformis-export> \
  --fixture-root <pinned-corpus-checkout>

node run.mjs \
  --suite functional-scenarios \
  --tools cognium,axe,pa11y-htmlcs,ibm,lighthouse \
  --fixture-root <pinned-corpus-checkout>
```

The public transformation is reproducible from the sanitized comparison file:

```sh
npm run import:comparison -- \
  --source <comparison-snapshot.json> \
  --out results/2026-10-12-v0.1.0-functional-scenarios \
  --schema <v0.1.0-benchmark-result.schema.json> \
  --conformis-revision 25d5253000df278f4a5fab5b690cee635a01e47a

npm run generate
npm test
```

## Product configurations

### Cognium Conformis

- Packs: `a11y/html@1.2.1`, `tech/html-aria@1.2.1`
- Drivers: `browser@0.9.6`, `static-html@0.2.3`
- Interface: site scan with subject-declared page and flow states
- Capture: 41/41 pages hydrated and reproduced twice, including five support
  pages; zero capture misses, run errors or records outside the proofgraph
- Browser: Chromium `149.0.7827.0`, Linux/arm64, 1280×900

Five Cognium Conformis controls explicitly did not run because the subject did
not declare the named flows those controls consume. Those gaps remain in the
native report and are not converted into passes. The public 36-case projection
credits only findings mapped to each pair's declared criterion.

### axe-core

- Version: `4.14.0`
- Deque's axe engine injected into a Playwright page
- Tags: WCAG 2.0 A/AA, 2.1 A/AA and 2.2 A/AA
- `violations` counted as automated findings; `incomplete` retained as review
  items in the normalized comparison

### Pa11y / HTML_CodeSniffer

- Pa11y version: `10.0.0`
- Runner: `htmlcs`; standard: `WCAG2AA`
- Errors counted as automated findings; warnings retained as review items
- This is a Pa11y wrapper around the HTML_CodeSniffer engine, not a separate
  independent rules engine

### IBM Equal Access

- `accessibility-checker@4.0.34`
- Policy: `WCAG_2_2`; versioned rule archive
- Fail level: violation; report levels also retained potential/manual/pass for
  review accounting
- IBM scan metrics were suppressed

### Lighthouse accessibility

- Version: `13.5.0`
- Accessibility category only; storage reset disabled and error reporting off
- Binary failed audits counted; manual audits retained as review items
- Lighthouse accessibility audits are axe-derived, so this is not an
  independent detection vote

The direct adapters used Playwright `1.61.1`, intentionally aligned with the
Cognium Conformis browser driver's pinned Playwright generation. The latest
standalone Playwright package was not substituted because that would change the
browser runtime for only one side of the comparison.

## State, mapping and scoring

Cognium Conformis evaluated suite-declared page or flow states. The four direct
third-party adapters evaluated the default page-load state. A completed default
page load is recorded as reached; absence of a mapped target finding remains
`target_observability: unknown`.

Each case declares one WCAG criterion. Native rule IDs are retained and mapped
to WCAG criteria by the harness. A known-defect case receives target credit only
when a native finding explicitly maps to its declared criterion. Another
finding on the page does not earn target credit. A corrected control is
“target-clean” only when the declared criterion is not reported; the result is
still encoded `cannot-tell`, not `pass`.

The report shows counts and denominators. It does not collapse coverage,
severity, confidence, review-needed items or conformance into one score.

## Environment and repeat limits

Cognium Conformis ran on Linux/arm64 with Chromium `149.0.7827.0`; the four
direct adapters ran on macOS/arm64 with Chromium `149.0.7827.55`. All used a
1280×900 viewport and the same corpus bytes. Because the OS and browser patch
versions differ, this is not a perfectly environment-controlled trial.

Every product has one repetition. Durations are retained only for diagnostics
and are not used as performance rankings.

## Native-output boundary

The committed files retain normalized native rule IDs, mapped criteria, counts,
execution status and SHA-256 digests. Raw proofgraph, HTML fragments, selectors,
screenshots and complete third-party native reports are not redistributed. See
[`native-output/README.md`](native-output/README.md).
