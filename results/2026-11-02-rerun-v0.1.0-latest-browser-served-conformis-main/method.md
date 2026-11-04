# Method: Cognium Conformis at main on the latest browser-served lane

## Purpose and classification

This maintainer-authored bundle runs Cognium Conformis as it stood on `main`
on 2026-11-02 over the same lane, corpus revision, subject declaration, host,
browser build and fonts as `2026-11-02-rerun-v0.1.0-latest-browser-served`,
which re-ran the 2026-10-13 revision. Holding everything else fixed, the
difference between the two bundles is the product revision. Cognium maintains
the corpus and makes Conformis, so this is not an independent measurement. It
is not a WCAG conformance assessment, legal opinion, product certification or
universal ranking.

Only public synthetic inputs were used.

## Pinned inputs

- Corpus commit: `469486a4811c5055de9d2524ede1ca520c2774c8`; manifest
  `sha256:a4e01bcd1281bfb1c1951657a815ad2da053e5e233c1d937dd7ed7227c03c9f0`.
  Later corpus revisions changed some assertions; this run keeps the 2026-10-13
  ground truth so the two Conformis revisions are scored against the same one.
- Runner: `cogniumhq/a11y-benchmark` `comparison/` at
  `101112de2a3ba81af328c562363aac74181ea324`, case list
  `comparison/suites/latest-browser-served.json`, subject
  `comparison/cognium/latest-browser-served-subject.yaml` (214 entry pages, no
  flows).
- Cognium Conformis: `cogniumhq/conformis@7fa92329e835146d240ea8bb8d3c420a8e653829`
  (`main` on 2026-11-02): `a11y/html@1.6.1`, `tech/html-aria@1.3.0`, browser
  driver `0.26.1`, static-html driver `0.3.0`. These are workspace versions
  at that commit; `tech/html-aria@1.3.0` and `a11y/html@1.6.1` are not
  published registry versions, so the commit is the pin. The repository is
  private.

## Commands

As in `2026-11-02-rerun-v0.1.0-latest-browser-served`, from a checkout of
`cogniumhq/conformis` at `7fa92329`:

```sh
npm run a11y:site -- --subject <a11y-benchmark>/comparison/cognium/latest-browser-served-subject.yaml \
  --live --out out/cognium-main-report
node comparison/import-cognium.mjs --source out/cognium-main-report --fixture-root <corpus> \
  --out out/cognium-main-export.json --conformis-revision 7fa92329e835146d240ea8bb8d3c420a8e653829
node comparison/run.mjs --fixture-root <corpus> --out out/cognium-main --tools cognium \
  --cognium-export out/cognium-main-export.json
```

The optional `--axe-cross-check` was not passed, so axe-core did not run inside
Conformis and no axe output entered this result.

## Environment

The same host and stand-in as the re-run bundle: Linux x86_64, 2 vCPUs,
Chromium `153.0.8010.12`, host fonts, viewport 1280×900, one repetition.
Conformis at `7fa92329` pins the same container image digest as at `28f9e14d`;
its browser passes ran in place through the same local stand-in for `docker`
(same mounts, declared environment only, no network where the pass declares
none). This scan ran alone, after the re-run's scans had finished.

## Scoring

As in the re-run bundle and on 2026-10-13: a known defect is detected only
when a finding maps to one of its declared `min_criteria`; a corrected control
is target-clean only when none of its `must_not_report` criteria is reported,
which is `cannot-tell`, not pass.
