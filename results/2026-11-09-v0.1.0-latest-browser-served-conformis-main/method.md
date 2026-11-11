# Method: Cognium Conformis at main on the latest browser-served lane

## Purpose and classification

This maintainer-authored bundle runs Cognium Conformis as it stood on `main`
on 2026-11-09 over the same 214 pages, corpus revision and subject declaration
as `2026-11-02-rerun-v0.1.0-latest-browser-served-conformis-main`. The product
revision, pack versions, browser build and container execution differ from that
run. Cognium maintains the corpus and makes Conformis, so this is not an
independent measurement. It is not a WCAG conformance assessment, legal
opinion, product certification or universal ranking.

Only public synthetic inputs were used.

## Pinned inputs

- Corpus commit: `469486a4811c5055de9d2524ede1ca520c2774c8`; manifest
  `sha256:a4e01bcd1281bfb1c1951657a815ad2da053e5e233c1d937dd7ed7227c03c9f0`.
  Later corpus revisions changed some assertions; this run keeps the 2026-10-13
  ground truth so it can be compared with the 2026-11-02 main run.
- Runner: `cogniumhq/a11y-benchmark` `comparison/` at
  `affcf7a4076504b1ed48ad7d71a52fb898ed5193`, case list
  `comparison/suites/latest-browser-served.json`, subject
  `comparison/cognium/latest-browser-served-subject.yaml` (214 entry pages, no
  flows).
- Cognium Conformis: `cogniumhq/conformis@d4eb53a29a9dcb526b84a2103d08f4daa31d1bbe`
  (`main` on 2026-11-09): `a11y/html@1.8.0`, `tech/html-aria@1.4.0`, browser
  driver `0.28.1`, static-html driver `0.4.1`. These are workspace versions
  at that commit; the commit is the pin. The repository is private.

## Commands

The corpus server listened on all interfaces so the browser container could
reach it. The subject origin stayed `http://127.0.0.1:4173`.

```sh
node <corpus>/serve.mjs --host 0.0.0.0 --port 4173 &
npm run a11y:site -- --subject <a11y-benchmark>/comparison/cognium/latest-browser-served-subject.yaml \
  --live --out out/cognium-report
node comparison/import-cognium.mjs --source out/cognium-report --fixture-root <corpus> \
  --out out/cognium-export.json --conformis-revision d4eb53a29a9dcb526b84a2103d08f4daa31d1bbe
node comparison/run.mjs --fixture-root <corpus> --out out/cognium \
  --tools cognium --cognium-export out/cognium-export.json
```

`--explore`, `--bench-run` and `--axe-cross-check` were not passed. axe-core
did not run inside Conformis, and the inventory probe did not click.

## Environment

Linux x86_64, Node.js v22.23.3, Chromium 149.0.7827.55, viewport 1280×900, one
repetition. Browser passes ran in
`mcr.microsoft.com/playwright:v1.61.1-noble@sha256:5b8f294aff9041b7191c34a4bab3ac270157a28774d4b0660e9743297b697e48`.
The recorded fonts are that image's fonts. The scan ran alone, after a re-run
of the six direct tools on the same host. That re-run matched the 2026-11-02
six-tool columns on every case and is not a separate bundle.

## Scoring

As on 2026-10-13 and 2026-11-02: a known defect is detected only when a finding
maps to one of its declared `min_criteria`; a corrected control is target-clean
only when none of its `must_not_report` criteria is reported. No mapped finding
is `cannot-tell`, not pass.
