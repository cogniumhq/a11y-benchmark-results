# Accessibility benchmark comparison: v0.1.0 functional scenarios

Published run date: 2026-10-12 (America/Los_Angeles).

Classification: **maintainer-authored**. This bundle was produced by the corpus maintainers and is not an independent reproduction.

This is a single-run, finite-corpus detection comparison. It is not WCAG certification, legal advice, a universal product ranking, a performance benchmark or a guarantee about production websites.

## Identity and scope

- Corpus: `cogniumhq/a11y-benchmark@v0.1.0` (`0105c659d9fe7e85119c190910b2c53985f83374`).
- Corpus manifest: `sha256:1f6e6c0cd962689937c5ca44f4450997ec12b15506e93f1b2e69cdce7835b923`.
- Comparison harness: `cogniumhq/a11y-validation@1a70bca62ddda4b65f06ba89df74b23369132675` ([review PR](https://github.com/cogniumhq/a11y-validation/pull/8)).
- Cognium Conformis run source: `cogniumhq/conformis@25d5253000df278f4a5fab5b690cee635a01e47a`.
- Latest upstream `main` verified: `0a8e5278c2251838976da830a9ea34defad801d5`; artifact-only: packs/a11y-html/bench/iip-2026-10/bench-2026-10-13.json; no executable or dependency change.
- Executed automated lane: 36/234 corpus cases (198 not executed).
- Human and assistive-technology protocols executed: 0/8.

The unexecuted cases and protocols are neither passes nor failures. JAWS, NVDA, VoiceOver, TalkBack, keyboard, switch, voice, media-equivalence, display-adaptation, comprehension and user-task work remains in separate lanes.

## Results

| Tool | Known-defect criteria detected | Corrected controls target-clean | Completed | Errors |
|---|---:|---:|---:|---:|
| Cognium Conformis | 9/18 (50%) | 18/18 | 36/36 | 0 |
| axe-core | 6/18 (33%) | 18/18 | 36/36 | 0 |
| Pa11y / HTML_CodeSniffer | 4/18 (22%) | 18/18 | 36/36 | 0 |
| IBM Equal Access | 5/18 (28%) | 18/18 | 36/36 | 0 |
| Lighthouse accessibility | 6/18 (33%) | 18/18 | 36/36 | 0 |

The five-product union detected the declared target criterion on 9/18 known-defect cases (50%). “Target-clean” means only that a tool did not report the corrected control's declared criterion; it does not establish conformance or a pass.

## Tool lineage

| Tool | Version/build | Engine family | Independence | Interface |
|---|---|---|---|---|
| Cognium Conformis | git:25d5253000df278f4a5fab5b690cee635a01e47a; a11y/html@1.2.1 + tech/html-aria@1.2.1 | Conformis a11y/html and tech/html-aria | independent-engine | site scan with subject-declared flows |
| axe-core | 4.14.0 | axe-core | independent-engine | Playwright page injection |
| Pa11y / HTML_CodeSniffer | 10.0.0 | HTML_CodeSniffer | wrapper of HTML_CodeSniffer | Pa11y runner |
| IBM Equal Access | 4.0.34 | IBM Equal Access Accessibility Checker | independent-engine | Playwright page API |
| Lighthouse accessibility | 13.5.0 | axe-core-derived Lighthouse audits | derived-configuration of axe-core | Lighthouse accessibility category |

Lighthouse uses axe-derived accessibility audits. It is included as a product configuration comparison, not as an independent engine vote.

## Execution environments

| Tool | OS | Runtime | Browser | Viewport | Run window (UTC) |
|---|---|---|---|---|---|
| Cognium Conformis | linux/arm64 | Cognium Conformis browser driver 0.9.6; static-html driver 0.2.3 | Chromium 149.0.7827.0 | 1280×900 | 2026-10-13T04:35:21.327Z – 2026-10-13T04:53:05.585Z |
| axe-core | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T04:54:01.824Z – 2026-10-13T04:54:32.944Z |
| Pa11y / HTML_CodeSniffer | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T04:54:32.944Z – 2026-10-13T04:55:16.205Z |
| IBM Equal Access | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T04:55:16.205Z – 2026-10-13T04:55:45.435Z |
| Lighthouse accessibility | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T04:55:45.435Z – 2026-10-13T04:58:35.453Z |

Cognium Conformis ran in Linux/arm64 while the four directly executed competitor adapters ran in macOS/arm64, and the Chromium patch versions differ. The corpus, viewport and criterion mapping were pinned, but this is not a perfectly environment-controlled head-to-head trial. Treat the counts as a reproducible product snapshot, not a claim that OS and browser-build effects are zero.

## Case matrix

Legend: `T` declared target criterion detected; `o` another automated finding only; `.` no automated finding; `E` execution error.

| Case | Expected | Cognium Conformis | axe-core | Pa11y / HTML_CodeSniffer | IBM Equal Access | Lighthouse accessibility |
|---|---|---:|---:|---:|---:|---:|
| `static-img_no_alt` | known defect | T | T | T | T | T |
| `static-safe_img` | corrected control | . | . | . | . | . |
| `static-input_purpose_missing` | known defect | . | . | . | . | . |
| `static-safe_input_purpose` | corrected control | . | . | . | . | . |
| `static-text_low_contrast` | known defect | T | T | T | T | T |
| `static-safe_text_contrast` | corrected control | . | . | . | . | . |
| `static-viewport_no_zoom` | known defect | T | T | . | . | T |
| `static-safe_viewport` | corrected control | . | . | . | . | . |
| `static-page_title_missing` | known defect | T | T | T | T | T |
| `static-safe_page_title` | corrected control | . | . | . | . | . |
| `static-ambiguous_link_purpose` | known defect | . | . | o | . | . |
| `static-safe_link_purpose` | corrected control | . | . | o | . | . |
| `static-vague_heading_and_label` | known defect | . | . | . | . | . |
| `static-safe_descriptive_heading_and_label` | corrected control | . | . | . | . | . |
| `keyboard-focus_not_visible` | known defect | T | . | . | . | . |
| `keyboard-safe_focus_visible` | corrected control | . | . | . | . | . |
| `keyboard-focus_obscured` | known defect | T | . | . | . | . |
| `keyboard-safe_focus_not_obscured` | corrected control | . | . | . | . | . |
| `scenario-keyboard_trap` | known defect | . | . | . | . | . |
| `scenario-safe_keyboard_trap` | corrected control | . | . | . | . | . |
| `scenario-meaningful_sequence` | known defect | . | . | . | . | . |
| `scenario-safe_meaningful_sequence` | corrected control | . | . | . | . | . |
| `scenario-text_spacing` | known defect | . | . | . | . | . |
| `scenario-safe_text_spacing` | corrected control | . | . | . | . | . |
| `scenario-rtl_mixed_language` | known defect | . | . | . | . | . |
| `scenario-safe_rtl_mixed_language` | corrected control | . | . | . | . | . |
| `scenario-label_in_name` | known defect | T | T | . | T | T |
| `scenario-safe_label_in_name` | corrected control | . | . | . | . | . |
| `scenario-pointer_cancellation` | known defect | . | . | . | . | . |
| `scenario-safe_pointer_cancellation` | corrected control | . | . | . | . | . |
| `scenario-error_suggestion` | known defect | . | . | . | . | . |
| `scenario-safe_error_suggestion` | corrected control | . | . | . | . | . |
| `static-field_no_visible_label` | known defect | T | . | o | . | . |
| `static-safe_field_visible_label` | corrected control | . | . | . | . | . |
| `static-lang_missing` | known defect | T | T | T | T | T |
| `static-safe_lang_declared` | corrected control | . | . | . | . | . |

## Shared gaps

No tool mapped the declared criterion on 9 known-defect cases: `static-input_purpose_missing`, `static-ambiguous_link_purpose`, `static-vague_heading_and_label`, `scenario-keyboard_trap`, `scenario-meaningful_sequence`, `scenario-text_spacing`, `scenario-rtl_mixed_language`, `scenario-pointer_cancellation`, `scenario-error_suggestion`.

These misses identify automation and scenario-driver backlog. They are not evidence that the fixtures pass. Some require interaction, state transitions, visual judgment, comprehension or a person using assistive technology.

## Evidence and interpretation limits

- Every product has one repetition; this bundle does not estimate run-to-run variance.
- Native product outputs are represented by per-case SHA-256 digests. Raw Cognium Conformis proofgraph evidence and raw third-party outputs are not redistributed.
- Criterion credit is conservative and requires an explicit native-rule-to-WCAG mapping. A tool can report another issue and receive no target credit.
- `cannot-tell` is preserved when no mapped finding exists. It is never converted into pass.
- Durations are diagnostic only and are not used as a product speed ranking.
- The eight pipeline-integrity cases were outside this lane; the v0.1.0 HTTP server omission is tracked in [a11y-benchmark issue #19](https://github.com/cogniumhq/a11y-benchmark/issues/19).
- Corrections must publish a new immutable revision and retain this bundle with a supersession link.

See [method.md](method.md), [metrics.json](metrics.json), [comparison.json](comparison.json) and each product’s schema-valid `result.json` for the reproducible evidence.
