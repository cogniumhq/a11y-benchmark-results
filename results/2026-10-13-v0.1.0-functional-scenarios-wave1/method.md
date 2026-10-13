# Method: v0.1.0 functional-scenarios Wave 1 comparison

## Purpose and classification

This maintainer-authored bundle compares automated target-criterion detection
on 18 isolated known-defect/corrected-control pairs. It adds Siteimprove Alfa
and QualWeb to the criterion-mapped lane and Nu Html Checker to a separate
specialized markup-signal lane. It is a regression and coverage snapshot, not
an independent reproduction, conformance assessment, legal opinion, product
certification or universal ranking.

The run used public synthetic data only. No customer target, production capture,
credential, cookie, authorization header, private selector, personal information
or local path is published.

## Pinned inputs

- Corpus: `cogniumhq/a11y-benchmark@v0.1.0`
- Corpus commit: `0105c659d9fe7e85119c190910b2c53985f83374`
- `corpus-manifest.json`:
  `sha256:1f6e6c0cd962689937c5ca44f4450997ec12b15506e93f1b2e69cdce7835b923`
- Cognium Conformis commit:
  `6876cf20c7e20d1a90017387c4d82a370f9a91fa`
- Comparison harness commit:
  `588b27e2d79741592b0acf37e01ff04dcd4a98d3`
- Declared-flow file:
  `sha256:6044a07c187da76ec07e7e6f706179a096bc49f9bbdfbfe2aa779a36a6b757dd`

The latest corpus `main` was pulled before this run. The execution deliberately
retains the immutable `v0.1.0` corpus revision so that every newly added tool is
directly comparable with the prior published snapshot.

The automated lane contains 36 of the corpus's 234 cases: 18 known-defect pages
and 18 criterion-isolated corrected controls. The remaining 198 cases and all
eight human/assistive-technology protocols were not executed.

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
  --tools cognium,axe,pa11y-htmlcs,ibm,lighthouse,alfa,qualweb,nu-html-checker \
  --fixture-root <pinned-corpus-checkout>
```

Nu Html Checker ran as a local digest-pinned service; no page was submitted to
a hosted API. The public transformation is reproducible from the sanitized
comparison file:

```sh
npm run import:comparison -- \
  --source <comparison-snapshot.json> \
  --out results/2026-10-13-v0.1.0-functional-scenarios-wave1 \
  --schema <v0.1.0-benchmark-result.schema.json> \
  --conformis-revision 6876cf20c7e20d1a90017387c4d82a370f9a91fa

npm run generate
npm test
```

## Product configurations

### Cognium Conformis

- Packs: `a11y/html@1.2.1`, `tech/html-aria@1.2.1`
- Drivers: `browser@0.9.11`, `static-html@0.2.3`
- Interface: site scan with subject-declared page and flow states
- Capture: 41/41 pages hydrated and reproduced twice, including five support
  pages; zero capture misses, run errors or records outside the proofgraph
- Browser: Chromium `149.0.7827.0`, Linux/arm64, 1280×900

Five Cognium Conformis controls explicitly did not run because the subject did
not declare the named flows those controls consume. Those gaps remain in the
native report and are not converted into passes. The public 36-case projection
credits only findings mapped to each pair's declared criterion.

### Criterion-mapped third-party tools

- axe-core `4.14.0`, injected into a Playwright page with WCAG 2.0, 2.1 and
  2.2 A/AA tags
- Pa11y `10.0.0`, HTML_CodeSniffer runner only, `WCAG2AA`
- IBM Equal Access Accessibility Checker `4.0.34`, `WCAG_2_2` policy
- Lighthouse `13.5.0`, accessibility category only; its audits are axe-derived
- Siteimprove Alfa rules `0.119.0` with Puppeteer integration `0.84.2`
- QualWeb core `0.9.5`, ACT rules `0.8.6`, WCAG techniques `0.4.9`, and best
  practices `0.7.13`

### Nu Html Checker specialist lane

- Version: `26.10.12 (0a70d65)`
- Container digest:
  `sha256:8f21030474e68e06905cfa801b37376e99c0e37867c653c5b6cd7e2dcaf3f503`
- Interface: local v.Nu service receiving the rendered fixture markup
- Treatment: native markup errors are counted by page and in total, but do not
  receive invented WCAG criterion mappings and do not enter criterion recall

### Inventoried browser-extension surfaces

axe DevTools `4.138.0` and Accessibility Insights for Web `2.49.0` remain
inventoried but were not separately executed. Their automated checks are
axe-derived and must not be counted as additional independent-engine votes.
Accessibility Insights guided/manual lanes remain protocol-ready; see
[`manual/accessibility-insights-for-web/PROTOCOL.md`](manual/accessibility-insights-for-web/PROTOCOL.md).

## State, mapping and scoring

Cognium Conformis evaluated suite-declared page or flow states. The direct
third-party adapters evaluated the default page-load state. A completed default
page load is recorded as reached; absence of a mapped target finding remains
`target_observability: unknown`.

Each criterion-lane case declares one WCAG criterion. Native rule IDs are
retained and mapped to WCAG criteria by the harness. A known-defect case
receives target credit only when a native finding explicitly maps to its
declared criterion. Another finding on the page does not earn target credit. A
corrected control is “target-clean” only when the declared criterion is not
reported; the result is still encoded `cannot-tell`, not `pass`.

Nu markup findings remain a different metric family. The report exposes their
page count and total count without treating them as WCAG misses, passes, or
criterion detections.

## Environment, repeat and dependency limits

Cognium Conformis ran on Linux/arm64 with Chromium `149.0.7827.0`; the seven
direct adapters ran on macOS/arm64 with Chromium `149.0.7827.55`. All used a
1280×900 viewport and the same corpus bytes. Because the OS and browser patch
versions differ, this is not a perfectly environment-controlled trial.

Every product has one repetition. Durations are retained only for diagnostics
and are not used as performance rankings.

The browser-based benchmark packages inherit high-severity Puppeteer-chain
advisories for which the pinned dependency set has no non-breaking upstream
fix. The run was isolated to benchmark-only containers, install scripts were
disabled, and only public synthetic localhost fixtures were processed. This
dependency environment must not be reused as a hosted service or against
untrusted archives.

## Native-output boundary

The committed files retain normalized native rule IDs, mapped criteria, counts,
execution status and SHA-256 digests. Raw proofgraph, HTML fragments, selectors,
screenshots and complete third-party native reports are not redistributed. See
[`native-output/README.md`](native-output/README.md).
