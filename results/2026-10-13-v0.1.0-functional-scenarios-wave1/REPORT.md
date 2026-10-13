# Accessibility benchmark comparison: v0.1.0 functional scenarios

Published run date: 2026-10-13 (America/Los_Angeles).

Classification: **maintainer-authored**. This bundle was produced by the corpus maintainers and is not an independent reproduction.

This is a single-run, finite-corpus detection comparison. It is not WCAG certification, legal advice, a universal product ranking, a performance benchmark or a guarantee about production websites.

## Identity and scope

- Corpus: `cogniumhq/a11y-benchmark@v0.1.0` (`0105c659d9fe7e85119c190910b2c53985f83374`).
- Corpus manifest: `sha256:1f6e6c0cd962689937c5ca44f4450997ec12b15506e93f1b2e69cdce7835b923`.
- Comparison harness: `cogniumhq/a11y-validation@fea3d3c7926b9a4c47a126695a8b5a50b062b6a6` ([review PR](https://github.com/cogniumhq/a11y-validation/pull/10)).
- Cognium Conformis run source: `cogniumhq/conformis@6876cf20c7e20d1a90017387c4d82a370f9a91fa`.
- Latest upstream `main` verified: `6876cf20c7e20d1a90017387c4d82a370f9a91fa`; the executed revision matched upstream main when verified for this run.
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
| Siteimprove Alfa | 6/18 (33%) | 18/18 | 36/36 | 0 |
| QualWeb | 7/18 (39%) | 18/18 | 36/36 | 0 |

The 7-product criterion-mapped union detected the declared target criterion on 9/18 known-defect cases (50%). “Target-clean” means only that a tool did not report the corrected control's declared criterion; it does not establish conformance or a pass.

## Specialized signal lane

| Tool | Metric family | Pages with findings | Native findings | Completed | Errors |
|---|---|---:|---:|---:|---:|
| Nu Html Checker | specialized markup signal | 9/36 | 25 | 36/36 | 0 |

Specialized signals are not WCAG criterion-recall results and do not contribute to the criterion-mapped union. They are published to compare the tool’s actual signal family without inventing WCAG mappings.

## Tool lineage

| Tool | Version/build | Engine family | Independence | Interface |
|---|---|---|---|---|
| Cognium Conformis | git:6876cf20c7e20d1a90017387c4d82a370f9a91fa; a11y/html@1.2.1 + tech/html-aria@1.2.1 | Conformis a11y/html and tech/html-aria | independent-engine | site scan with subject-declared flows |
| axe-core | 4.14.0 | axe-core | independent-engine | Playwright page injection |
| Pa11y / HTML_CodeSniffer | 10.0.0 | HTML_CodeSniffer | wrapper of HTML_CodeSniffer | Pa11y runner |
| IBM Equal Access | 4.0.34 | IBM Equal Access Accessibility Checker | independent-engine | Playwright page API |
| Lighthouse accessibility | 13.5.0 | axe-core-derived Lighthouse audits | derived-configuration of axe-core | Lighthouse accessibility category |
| Siteimprove Alfa | rules 0.119.0; Puppeteer integration 0.84.2 | Alfa ACT rules | independent-engine | Puppeteer page API |
| QualWeb | core 0.9.5; ACT rules 0.8.6; WCAG techniques 0.4.9; best practices 0.7.13 | QualWeb ACT rules, WCAG techniques and best practices | independent-engine | QualWeb Core local browser evaluation |
| Nu Html Checker | 26.10.12 (0a70d65); image sha256:8f21030474e68e06905cfa801b37376e99c0e37867c653c5b6cd7e2dcaf3f503 | v.Nu HTML, CSS and SVG conformance checker | independent-engine | local validator service |

Lighthouse uses axe-derived accessibility audits. It is included as a product configuration comparison, not as an independent engine vote.

## Product surface inventory

The measured engines and the requested browser extensions are tracked together here, while their evidence lanes and engine lineage remain separate.

| Product surface | Version | Lane | Engine lineage | Status in this bundle | Metric treatment |
|---|---|---|---|---|---|
| Cognium Conformis | git:6876cf20c7e20d1a90017387c4d82a370f9a91fa; a11y/html@1.2.1 + tech/html-aria@1.2.1 | automated | Conformis a11y/html and tech/html-aria a11y/html@1.2.1 + tech/html-aria@1.2.1; independent-engine | executed | Measured as the Cognium Conformis site-scanner configuration with subject-declared flows. |
| axe-core | 4.14.0 | automated | axe-core 4.14.0; independent-engine | executed | Measured directly through Playwright page injection and counted once as the axe-core engine result. |
| axe DevTools - Web Accessibility Testing | 4.138.0 | automated-and-guided | axe-core (version not established); derived-surface of axe-core | not-executed | Inventoried but not counted as a second independent engine vote; a future extension run must pin the edition, enabled features and embedded engine version. |
| Pa11y / HTML_CodeSniffer | 10.0.0 | automated | HTML_CodeSniffer 2.6.0; wrapper of HTML_CodeSniffer | executed | Measured through Pa11y's HTML_CodeSniffer runner; the optional axe runner was excluded to avoid duplicate axe measurements. |
| IBM Equal Access | 4.0.34 | automated | IBM Equal Access Accessibility Checker 4.0.34; independent-engine | executed | Measured directly with the WCAG 2.2 policy. |
| Lighthouse accessibility | 13.5.0 | automated | axe-core-derived Lighthouse audits 4.14.0; derived-configuration of axe-core | executed | Measured as a product configuration but excluded from claims about independent engine agreement. |
| Siteimprove Alfa | rules 0.119.0; Puppeteer integration 0.84.2 | automated | Alfa ACT rules rules 0.119.0; Puppeteer integration 0.84.2; independent-engine | executed | Measured through Alfa's stable ACT-rule set against each Puppeteer page snapshot. |
| QualWeb | core 0.9.5; ACT rules 0.8.6; WCAG techniques 0.4.9; best practices 0.7.13 | automated | QualWeb ACT rules, WCAG techniques and best practices core 0.9.5; ACT rules 0.8.6; WCAG techniques 0.4.9; best practices 0.7.13; independent-engine | executed | Measured with the ACT rules, WCAG techniques and best-practice modules enabled. |
| Nu Html Checker | 26.10.12 (0a70d65); image sha256:8f21030474e68e06905cfa801b37376e99c0e37867c653c5b6cd7e2dcaf3f503 | automated | v.Nu HTML, CSS and SVG conformance checker 26.10.12 (0a70d65); independent-engine | executed | Measured as a specialized markup signal. Native error counts are reported separately and excluded from WCAG criterion recall and its union. |
| Accessibility Insights for Web | 2.49.0 | automated-assisted-and-manual | axe-core 4.11.3; derived-surface of axe-core | not-executed | FastPass automated checks are axe-derived and must not be counted as an independent engine vote. Needs Review, Tab Stops and Assessment remain separate human-guided results. |

axe DevTools is inventoried but was not separately executed because its free automated checks run on axe-core; counting that surface as another independent engine result would duplicate the axe family. Accessibility Insights for Web is protocol-ready but not executed: its FastPass automated checks are axe-derived, while Needs Review, Tab Stops and Assessment require separate human-guided evidence. See [the Accessibility Insights protocol](manual/accessibility-insights-for-web/PROTOCOL.md) and [run plan](manual/accessibility-insights-for-web/run-plan.json).

## Execution environments

| Tool | OS | Runtime | Browser | Viewport | Run window (UTC) |
|---|---|---|---|---|---|
| Cognium Conformis | linux/arm64 | Cognium Conformis browser driver 0.9.11; static-html driver 0.2.3 | Chromium 149.0.7827.0 | 1280×900 | 2026-10-13T16:06:52.719Z – 2026-10-13T16:10:53.344Z |
| axe-core | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T16:11:40.407Z – 2026-10-13T16:12:11.287Z |
| Pa11y / HTML_CodeSniffer | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T16:12:11.288Z – 2026-10-13T16:12:54.453Z |
| IBM Equal Access | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T16:12:54.454Z – 2026-10-13T16:13:23.917Z |
| Lighthouse accessibility | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T16:13:23.917Z – 2026-10-13T16:16:14.243Z |
| Siteimprove Alfa | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T16:16:14.244Z – 2026-10-13T16:16:56.752Z |
| QualWeb | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T16:16:56.753Z – 2026-10-13T16:17:42.354Z |
| Nu Html Checker | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T16:17:42.356Z – 2026-10-13T16:18:09.919Z |

Cognium Conformis ran in Linux/arm64 while the 7 directly executed competitor adapters ran in macOS/arm64, and the Chromium patch versions differ. The corpus, viewport and criterion mapping were pinned, but this is not a perfectly environment-controlled head-to-head trial. Treat the counts as a reproducible product snapshot, not a claim that OS and browser-build effects are zero.

## Case matrix

Legend: `T` declared target criterion detected; `o` another automated finding only; `.` no automated finding; `E` execution error.

| Case | Expected | Cognium Conformis | axe-core | Pa11y / HTML_CodeSniffer | IBM Equal Access | Lighthouse accessibility | Siteimprove Alfa | QualWeb | Nu Html Checker |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `static-img_no_alt` | known defect | T | T | T | T | T | T | T | o |
| `static-safe_img` | corrected control | . | . | . | . | . | o | o | o |
| `static-input_purpose_missing` | known defect | . | . | . | . | . | o | o | . |
| `static-safe_input_purpose` | corrected control | . | . | . | . | . | o | o | . |
| `static-text_low_contrast` | known defect | T | T | T | T | T | T | T | . |
| `static-safe_text_contrast` | corrected control | . | . | . | . | . | o | o | . |
| `static-viewport_no_zoom` | known defect | T | T | . | . | T | T | T | . |
| `static-safe_viewport` | corrected control | . | . | . | . | . | o | o | . |
| `static-page_title_missing` | known defect | T | T | T | T | T | T | T | o |
| `static-safe_page_title` | corrected control | . | . | . | . | . | o | o | . |
| `static-ambiguous_link_purpose` | known defect | . | . | o | . | . | o | o | . |
| `static-safe_link_purpose` | corrected control | . | . | o | . | . | o | o | . |
| `static-vague_heading_and_label` | known defect | . | . | . | . | . | o | o | . |
| `static-safe_descriptive_heading_and_label` | corrected control | . | . | . | . | . | o | o | . |
| `keyboard-focus_not_visible` | known defect | T | . | . | . | . | o | o | o |
| `keyboard-safe_focus_visible` | corrected control | . | . | . | . | . | o | o | . |
| `keyboard-focus_obscured` | known defect | T | . | . | . | . | o | o | o |
| `keyboard-safe_focus_not_obscured` | corrected control | . | . | . | . | . | o | o | o |
| `scenario-keyboard_trap` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_keyboard_trap` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-meaningful_sequence` | known defect | . | . | . | . | . | o | o | o |
| `scenario-safe_meaningful_sequence` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-text_spacing` | known defect | . | . | . | . | . | o | o | o |
| `scenario-safe_text_spacing` | corrected control | . | . | . | . | . | o | o | o |
| `scenario-rtl_mixed_language` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_rtl_mixed_language` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-label_in_name` | known defect | T | T | . | T | T | T | T | . |
| `scenario-safe_label_in_name` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-pointer_cancellation` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_pointer_cancellation` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-error_suggestion` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_error_suggestion` | corrected control | . | . | . | . | . | o | o | . |
| `static-field_no_visible_label` | known defect | T | . | o | . | . | o | T | . |
| `static-safe_field_visible_label` | corrected control | . | . | . | . | . | o | o | . |
| `static-lang_missing` | known defect | T | T | T | T | T | T | T | . |
| `static-safe_lang_declared` | corrected control | . | . | . | . | . | o | o | . |

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
