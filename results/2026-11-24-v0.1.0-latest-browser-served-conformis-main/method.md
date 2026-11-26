# Method: Cognium Conformis at main on the latest browser-served lane

## Purpose and classification

This maintainer-authored bundle runs Cognium Conformis as it stood on `main`
on 2026-11-24 over the same 214 entry pages, in the same order, as
`2026-11-09-v0.1.0-latest-browser-served-conformis-main`. The product revision,
pack versions and — unlike that bundle — the corpus revision differ from the
baseline. Cognium maintains the corpus and makes Conformis, so this is not an
independent measurement. It is not a WCAG conformance assessment, legal
opinion, product certification or universal ranking.

Only public synthetic inputs were used.

## Pinned inputs

- Corpus commit: `30e5f3eaaa59ad4ecf3011b7fb397e233c26a878`; manifest
  `sha256:6ec8c1b092945c9b86c586f338019eed3bf63a6e6ba983a75ed05cc7e5ca8c84`.
  The baseline bundle is at `469486a4`, 52 commits earlier. Each case is
  classified and its declared criteria read from the manifest families of
  **this** revision, so three cases the corpus reclassified in between are
  scored as corrected controls here and as known defects there.
- Runner: `cogniumhq/a11y-benchmark` `comparison/` at
  `583d6d1bf66de0e819864063375039c7c75a0194`, case list
  `comparison/suites/latest-browser-served.json` (identical, case for case and
  in order, to the baseline bundle's `comparison.json`), subject rebuilt from
  that case list as 214 entry pages with no flows.
- Cognium Conformis: `cogniumhq/conformis@6de5c4e8dbc50b4de671f6760cf571b4dca11eaa`
  (`main` on 2026-11-24): `a11y/html@1.9.0`, `tech/html-aria@1.4.0`, browser
  driver `0.28.5`, static-html driver `0.4.2`. These are workspace versions at
  that commit; the commit is the pin. The repository is private.

## Commands

The measurement is the `a11y-bench` nightly workflow in `cogniumhq/conformis`
(run `45397881016`, 2026-11-24), on a self-hosted Linux x86_64 runner. It
serves the corpus on all interfaces so the browser container can reach it; the
subject origin stays `http://127.0.0.1:4173`.

```sh
node <corpus>/serve.mjs --port 4173 &            # serve.mjs binds 0.0.0.0 by default
npm run a11y:site -- --subject <subject.yaml> --out out --capture-now
```

The snapshot in this bundle was assembled afterwards from that run's published
artifact. Those steps re-read and re-score the sanitized export; they perform
no measurement of their own.

```sh
node comparison/import-cognium.mjs --source out --fixture-root <corpus at 30e5f3ea> \
  --out cognium-export.json --conformis-revision 6de5c4e8dbc50b4de671f6760cf571b4dca11eaa
node comparison/run.mjs --fixture-root <corpus at 30e5f3ea> --out snapshot \
  --tools cognium --cognium-export cognium-export.json --allow-unpinned
node scripts/import-comparison.mjs --source snapshot/comparison.json \
  --out results/2026-11-24-v0.1.0-latest-browser-served-conformis-main \
  --schema <pinned schema> --conformis-revision 6de5c4e8dbc50b4de671f6760cf571b4dca11eaa
```

`--allow-unpinned` is required and is recorded in `comparison.json`: the
runner's `pins.json` still names the baseline corpus revision, and this run is
at `30e5f3ea`. The import is byte-identical to the export the workflow itself
published, apart from the per-case `mode` and `declared_criteria` fields the
runner began recording at
[a11y-benchmark#99](https://github.com/cogniumhq/a11y-benchmark/pull/99); those
fields are the whole of the scoring difference.

`--explore`, `--bench-run` and `--axe-cross-check` were not passed. axe-core
did not run inside Conformis, and the inventory probe did not click.

## Environment

The measurement ran on Linux x86_64, Chromium 149.0.7827.55, viewport
1280x900, one repetition, inside
`mcr.microsoft.com/playwright:v1.61.1-noble@sha256:5b8f294aff9041b7191c34a4bab3ac270157a28774d4b0660e9743297b697e48`.
The recorded fonts are that image's fonts. All 214 declared pages hydrated and
reproduced, with no capture misses and no run errors.

The later snapshot assembly ran on darwin/arm64 with Node.js v25.9.0. That is
the host `comparison.json`'s top-level `environment` block describes; the
measurement environment is `tools.cognium.source.environment` and the `run`
block of `cognium-conformis/result.json`.

## Scoring

As on 2026-10-13, 2026-11-02 and 2026-11-09: a known defect is detected only
when a finding maps to one of its declared `min_criteria`; a corrected control
is target-clean only when none of its `must_not_report` criteria is reported.
No mapped finding is `cannot-tell`, not pass.

What changed is where the declaration is read from. Earlier bundles in this
lane scored a Conformis export against the case classification frozen in the
published baseline. This bundle reads `mode`, `min_criteria` and
`must_not_report` from the corpus revision the run actually ran against. Under
the baseline's classification the same export reads 72/110 known defects,
101/189 declared criteria and 104/104 controls clean with no false positive —
the figure the workflow's own gate reported. That classification is 52 commits
stale, and three of the cases it scores have been reclassified upstream; see
[cogniumhq/conformis#862](https://github.com/cogniumhq/conformis/issues/862).
