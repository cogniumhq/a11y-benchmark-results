# Accessibility benchmark comparison: latest browser-served corpus

Published run date: 2026-10-13 (America/Los_Angeles).

Classification: **maintainer-authored**. This bundle was produced by the corpus maintainers and is not an independent reproduction.

This is a single-run, finite-corpus detection comparison. It is not WCAG certification, legal advice, a universal product ranking, a performance benchmark or a guarantee about production websites.

## Identity and scope

- Corpus: `cogniumhq/a11y-benchmark@v0.1.0` (`469486a4811c5055de9d2524ede1ca520c2774c8`).
- Corpus manifest: `sha256:a4e01bcd1281bfb1c1951657a815ad2da053e5e233c1d937dd7ed7227c03c9f0`.
- Comparison harness: `cogniumhq/a11y-validation@32edddfa06448a583344d940d1ac18b2b2fb1117` ([review PR](https://github.com/cogniumhq/a11y-validation/pull/11)).
- Cognium Conformis run source: `cogniumhq/conformis@28f9e14db3a095f3d5983a947f233c99772a2b25`.
- Latest upstream `main` verified: `28f9e14db3a095f3d5983a947f233c99772a2b25`; the executed revision matched upstream main when verified for this run.
- Executed automated lane: 214/270 corpus cases (56 not executed).
- Human and assistive-technology protocols executed: 0/8.

The unexecuted cases and protocols are neither passes nor failures. JAWS, NVDA, VoiceOver, TalkBack, keyboard, switch, voice, media-equivalence, display-adaptation, comprehension and user-task work remains in separate lanes.

## Executive interpretation

In the expanded entry-page lane, Cognium Conformis detected 71/189 declared target assertions (38%), reached 47/110 known-defect pages (43%), and left 104/104 corrected controls target-clean. It detected 13 target assertions that no other criterion-mapped configuration detected in this run.

| What this number answers | Result | Interpretation |
|---|---:|---|
| Expanded target-assertion recall | 71/189 (38%) | Broad entry-page coverage across multi-criterion fixtures |
| Known-defect page reach | 47/110 (43%) | Pages with at least one declared criterion detected |
| Corrected-control guardrail | 104/104 | No corrected control was reported for its declared target criterion |
| Distinct WCAG criteria detected | 17/54 | Breadth across the declared criterion set |
| Conformis-only target assertions | 13 | Incremental detection beyond the other measured configurations |
| Dynamic-state execution | 0 declared flows | This run measured loaded entry pages, not interaction-state coverage |

### Scope change, not a trend line

| Published lane | State model | Defect pages | Target assertions | Cognium Conformis |
|---|---|---:|---:|---:|
| Prior functional core | Subject-declared page and flow states | 18 | 18 | 9/18 (50%) |
| Expanded browser-served | Loaded entry pages; zero declared flows | 110 | 189 | 71/189 (38%) |

The prior 50% result and the expanded 38% result are not a before/after product comparison. The core lane was criterion-isolated and included declared page or flow states; the expanded lane is much broader and declared no flows. Projecting the expanded entry-page evidence onto the prior core IDs yields 8/18, but that diagnostic is not a release-regression score: the WCAG 2.4.11 focus-obscured state was not exercised, although another focus finding was present on that page.

Future release reporting should keep three independent trend lines: a pinned flow-enabled core regression lane, this expanded entry-page lane, and a human/assistive-technology lane. Do not average them into one score.

## Expanded entry-page lane results

| Tool | Known-defect criteria detected | Corrected controls target-clean | Completed | Errors |
|---|---:|---:|---:|---:|
| Cognium Conformis | 71/189 (38%) | 104/104 | 214/214 | 0 |
| axe-core | 15/189 (8%) | 104/104 | 214/214 | 0 |
| Pa11y / HTML_CodeSniffer | 11/189 (6%) | 103/104 | 214/214 | 0 |
| IBM Equal Access | 31/189 (16%) | 104/104 | 214/214 | 0 |
| Lighthouse accessibility | 15/189 (8%) | 104/104 | 214/214 | 0 |
| Siteimprove Alfa | 20/189 (11%) | 103/104 | 214/214 | 0 |
| QualWeb | 59/189 (31%) | 102/104 | 214/214 | 0 |

The 7-product criterion-mapped union detected the declared target criterion on 50/110 known-defect cases (45%). “Target-clean” means only that a tool did not report the corrected control's declared criterion; it does not establish conformance or a pass.

Across multi-criterion cases, the product union detected 75/189 target assertions and 18/54 distinct WCAG criteria. The detected-criteria count happens to be 18; unlike the earlier fixed 18-scenario denominator, it is computed from this run's mapped findings against a 54-criterion denominator.

Cognium Conformis had the highest target-assertion count in this lane with 71/189; QualWeb was next at 59/189. This finite-corpus result does not establish conformance, a universal ranking or a product trend.

## Specialized signal lane

| Tool | Metric family | Pages with findings | Native findings | Completed | Errors |
|---|---|---:|---:|---:|---:|
| Nu Html Checker | specialized markup signal | 44/214 | 98 | 214/214 | 0 |

Specialized signals are not WCAG criterion-recall results and do not contribute to the criterion-mapped union. They are published to compare the tool’s actual signal family without inventing WCAG mappings.

## Tool lineage

| Tool | Version/build | Engine family | Independence | Interface |
|---|---|---|---|---|
| Cognium Conformis | git:28f9e14db3a095f3d5983a947f233c99772a2b25; a11y/html@1.2.1 + tech/html-aria@1.2.1 | Conformis a11y/html and tech/html-aria | independent-engine | site scan with subject-declared entry pages |
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
| Cognium Conformis | git:28f9e14db3a095f3d5983a947f233c99772a2b25; a11y/html@1.2.1 + tech/html-aria@1.2.1 | automated | Conformis a11y/html and tech/html-aria a11y/html@1.2.1 + tech/html-aria@1.2.1; independent-engine | executed | Measured as the Cognium Conformis site-scanner configuration over all declared entry pages; this subject declared zero flows. |
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
| Cognium Conformis | linux/arm64 | Cognium Conformis browser driver 0.9.13; static-html driver 0.2.3 | Chromium 149.0.7827.0 | 1280×900 | 2026-10-13T22:37:24.226Z – 2026-10-13T22:52:15.591Z |
| axe-core | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T21:52:54.966Z – 2026-10-13T21:56:21.456Z |
| Pa11y / HTML_CodeSniffer | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T21:56:21.456Z – 2026-10-13T22:01:16.092Z |
| IBM Equal Access | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T22:01:16.093Z – 2026-10-13T22:04:30.820Z |
| Lighthouse accessibility | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T22:04:30.820Z – 2026-10-13T22:23:36.159Z |
| Siteimprove Alfa | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T22:23:36.160Z – 2026-10-13T22:28:22.662Z |
| QualWeb | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T22:28:22.663Z – 2026-10-13T22:33:32.883Z |
| Nu Html Checker | darwin/arm64 | Node.js v25.9.0 | Chromium 149.0.7827.55 | 1280×900 | 2026-10-13T22:33:32.884Z – 2026-10-13T22:36:39.133Z |

Cognium Conformis ran in Linux/arm64 while the 7 directly executed competitor adapters ran in macOS/arm64, and the Chromium patch versions differ. The corpus, viewport and criterion mapping were pinned, but this is not a perfectly environment-controlled head-to-head trial. Treat the counts as a reproducible product snapshot, not a claim that OS and browser-build effects are zero.

## Case matrix

Legend: `T` declared target criterion detected; `o` another automated finding only; `.` no automated finding; `E` execution error.

| Case | Expected | Cognium Conformis | axe-core | Pa11y / HTML_CodeSniffer | IBM Equal Access | Lighthouse accessibility | Siteimprove Alfa | QualWeb | Nu Html Checker |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `keyboard-div_button` | known defect | T | . | . | T | . | o | T | . |
| `keyboard-safe_native_button` | corrected control | . | . | . | . | . | o | o | . |
| `keyboard-div_text_field` | known defect | T | . | . | T | . | o | T | . |
| `keyboard-safe_native_text_field` | corrected control | . | . | . | . | . | o | o | . |
| `keyboard-div_date_fields` | known defect | T | . | . | o | . | o | T | . |
| `keyboard-safe_native_date_fields` | corrected control | o | . | . | . | . | o | o | . |
| `keyboard-div_travellers` | known defect | T | . | . | o | . | o | T | . |
| `keyboard-safe_native_travellers` | corrected control | . | . | . | . | . | o | o | . |
| `keyboard-div_checkbox` | known defect | T | . | . | T | . | o | T | . |
| `keyboard-safe_native_checkbox` | corrected control | . | . | . | . | . | o | o | . |
| `keyboard-div_fare_cards` | known defect | T | . | . | o | . | o | T | . |
| `keyboard-safe_native_fare_options` | corrected control | . | . | . | . | . | o | o | . |
| `keyboard-role_tab_no_tablist` | known defect | T | o | . | o | o | o | o | o |
| `keyboard-safe_roving_tabindex` | corrected control | . | . | . | . | . | o | o | o |
| `keyboard-safe_custom_button` | corrected control | . | . | . | . | . | o | o | . |
| `keyboard-focus_not_visible` | known defect | T | . | . | . | . | o | o | o |
| `keyboard-safe_focus_visible` | corrected control | . | . | . | . | . | o | o | . |
| `keyboard-focus_obscured` | known defect | o | . | . | . | . | o | o | o |
| `keyboard-safe_focus_not_obscured` | corrected control | . | . | . | . | . | o | o | o |
| `capture-client_mounted` | known defect | T | o | . | T | o | o | T | o |
| `capture-safe_server_rendered` | corrected control | . | . | . | . | . | o | o | o |
| `capture-link_heavy` | corrected control | . | . | o | . | . | o | o | . |
| `static-viewport_no_zoom` | known defect | T | T | . | . | T | T | T | . |
| `static-safe_viewport` | corrected control | . | . | . | . | . | o | o | . |
| `static-img_no_alt` | known defect | T | T | T | T | T | T | T | o |
| `static-safe_img` | corrected control | . | . | . | . | . | o | o | o |
| `static-anim_no_reduced_motion` | known defect | T | o | . | o | . | o | o | o |
| `static-safe_anim_reduced_motion` | corrected control | . | . | . | . | . | o | o | o |
| `static-field_no_visible_label` | known defect | T | . | o | . | . | o | T | . |
| `static-safe_field_visible_label` | corrected control | . | . | . | . | . | o | o | . |
| `static-lang_missing` | known defect | T | T | T | T | T | T | T | . |
| `static-safe_lang_declared` | corrected control | . | . | . | . | . | o | o | . |
| `static-page_title_missing` | known defect | T | T | T | T | T | T | T | o |
| `static-safe_page_title` | corrected control | . | . | . | . | . | o | o | . |
| `static-text_low_contrast` | known defect | T | T | T | T | T | T | T | . |
| `static-safe_text_contrast` | corrected control | . | . | . | . | . | o | o | . |
| `static-input_purpose_missing` | known defect | . | . | . | . | . | o | o | . |
| `static-safe_input_purpose` | corrected control | . | . | . | . | . | o | o | . |
| `static-route_field_relationship` | known defect | o | . | . | . | . | o | T | . |
| `static-safe_route_field_relationship` | corrected control | . | . | . | . | . | o | o | . |
| `static-ambiguous_link_purpose` | known defect | . | . | o | . | . | o | o | . |
| `static-safe_link_purpose` | corrected control | . | . | o | . | . | o | o | . |
| `static-vague_heading_and_label` | known defect | . | . | . | . | . | o | o | . |
| `static-safe_descriptive_heading_and_label` | corrected control | . | . | . | . | . | o | o | . |
| `delivery-server_html` | known defect | T | T | T | T | T | T | T | o |
| `delivery-client_js` | known defect | T | T | T | T | T | T | T | o |
| `delivery-client_js_delayed` | known defect | T | T | T | T | T | T | T | o |
| `delivery-iframe_same_origin` | known defect | T | . | . | T | . | T | T | . |
| `delivery-iframe_srcdoc` | known defect | T | . | . | T | . | T | T | . |
| `delivery-iframe_sandboxed` | known defect | T | . | . | T | . | T | T | . |
| `delivery-iframe_nested` | known defect | T | . | . | T | . | T | T | . |
| `delivery-shadow_dom_open` | known defect | T | T | . | T | T | T | T | . |
| `delivery-shadow_dom_closed` | known defect | . | . | . | . | . | o | o | . |
| `delivery-web_component` | known defect | T | T | . | T | T | T | T | . |
| `delivery-progressive_enhancement` | known defect | T | T | T | T | T | T | T | o |
| `patterns-disclosure` | known defect | T | . | . | T | . | o | T | . |
| `patterns-safe_disclosure` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-accordion` | known defect | T | . | . | T | . | o | T | . |
| `patterns-safe_accordion` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-tabs` | known defect | T | o | . | o | o | o | o | o |
| `patterns-safe_tabs` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-dialog` | known defect | T | . | . | T | . | o | T | . |
| `patterns-safe_dialog` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-combobox` | known defect | T | . | . | T | . | o | T | . |
| `patterns-safe_combobox` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-menu` | known defect | T | . | . | T | . | o | T | . |
| `patterns-safe_menu` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-switch` | known defect | T | . | . | T | . | o | T | . |
| `patterns-safe_switch` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-alert` | known defect | . | . | . | . | . | o | o | . |
| `patterns-safe_alert` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-table` | known defect | . | . | . | . | . | o | o | . |
| `patterns-safe_table` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-tooltip` | known defect | . | . | . | . | . | o | o | . |
| `patterns-safe_tooltip` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-breadcrumb` | known defect | . | . | . | . | . | o | o | . |
| `patterns-safe_breadcrumb` | corrected control | . | . | o | . | . | o | o | . |
| `patterns-slider` | known defect | . | . | . | . | . | o | T | . |
| `patterns-safe_slider` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-listbox` | known defect | T | . | . | T | . | o | T | . |
| `patterns-safe_listbox` | corrected control | o | . | . | . | . | o | o | . |
| `patterns-form-errors` | known defect | . | . | o | . | . | o | o | . |
| `patterns-safe_form-errors` | corrected control | . | . | . | . | . | o | o | . |
| `patterns-required-fields` | known defect | T | . | o | . | . | o | o | . |
| `patterns-safe_required-fields` | corrected control | . | . | o | . | . | o | o | . |
| `patterns-media-captions` | known defect | . | . | . | . | . | o | o | . |
| `patterns-safe_media-captions` | corrected control | . | . | o | . | . | o | o | . |
| `color-error_color_only` | known defect | . | . | o | . | . | o | o | o |
| `color-safe_error_color_only` | corrected control | . | . | o | . | . | o | o | o |
| `color-status_color_only` | known defect | . | . | . | . | . | o | o | o |
| `color-safe_status_color_only` | corrected control | . | . | . | . | . | o | o | o |
| `color-link_color_only` | known defect | . | . | o | . | . | o | o | o |
| `color-safe_link_color_only` | corrected control | . | . | o | . | . | o | o | o |
| `color-chart_series_color_only` | known defect | . | . | o | . | . | o | o | . |
| `color-safe_chart_series_color_only` | corrected control | . | . | . | . | . | o | o | . |
| `color-selection_color_only` | known defect | . | . | . | . | . | o | o | o |
| `color-safe_selection_color_only` | corrected control | . | . | . | . | . | o | o | o |
| `color-placeholder_contrast` | known defect | T | . | o | . | . | o | o | o |
| `color-safe_placeholder_contrast` | corrected control | . | . | . | . | . | o | o | o |
| `color-disabled_state` | known defect | o | o | o | o | o | o | o | o |
| `color-safe_disabled_state` | corrected control | . | . | . | . | . | o | o | . |
| `color-required_color_only` | known defect | T | . | o | . | . | o | o | o |
| `color-safe_required_color_only` | corrected control | . | . | o | . | . | o | o | . |
| `media-video_no_captions` | known defect | o | . | . | . | . | o | o | . |
| `media-safe_video_no_captions` | corrected control | o | . | . | . | . | o | o | . |
| `media-safe_captions_present_but_poor` | corrected control | o | . | . | . | . | o | o | . |
| `media-audio_no_transcript` | known defect | o | . | . | . | . | o | o | . |
| `media-safe_audio_no_transcript` | corrected control | o | . | . | . | . | o | o | . |
| `media-safe_video_no_audio_description` | corrected control | o | . | . | . | . | o | o | . |
| `media-live_no_captions` | known defect | . | . | . | . | . | o | o | . |
| `media-safe_live_no_captions` | corrected control | . | . | . | . | . | o | o | . |
| `media-alert_by_sound_only` | known defect | . | . | . | . | . | o | o | . |
| `media-safe_alert_by_sound_only` | corrected control | . | . | . | . | . | o | o | . |
| `media-autoplay_no_control` | known defect | T | . | . | . | . | o | o | . |
| `media-safe_autoplay_no_control` | corrected control | o | . | . | . | . | o | o | . |
| `media-captions_unlabelled_track` | known defect | o | . | . | . | . | o | o | . |
| `media-safe_captions_unlabelled_track` | corrected control | o | . | . | . | . | o | o | . |
| `state-loading` | known defect | . | . | . | . | . | o | o | . |
| `state-safe_loading` | corrected control | . | . | . | . | . | o | o | . |
| `state-empty` | known defect | . | . | o | . | . | o | o | . |
| `state-safe_empty` | corrected control | . | . | o | . | . | o | o | . |
| `state-invalid` | known defect | . | . | o | . | . | o | o | . |
| `state-safe_invalid` | corrected control | . | . | . | . | . | o | o | . |
| `state-corrected` | known defect | . | . | o | . | . | o | o | . |
| `state-safe_corrected` | corrected control | . | . | o | . | . | o | o | . |
| `state-submitted` | known defect | . | . | . | . | . | o | o | . |
| `state-safe_submitted` | corrected control | . | . | . | . | . | o | o | . |
| `state-error` | known defect | . | . | . | . | . | o | o | . |
| `state-safe_error` | corrected control | . | . | o | . | . | o | o | . |
| `state-offline` | known defect | o | o | o | o | o | o | o | . |
| `state-safe_offline` | corrected control | . | . | o | . | . | o | o | . |
| `state-permission-denied` | known defect | . | . | . | . | . | o | o | . |
| `state-safe_permission-denied` | corrected control | . | . | . | . | . | o | o | . |
| `state-timed-out` | known defect | T | T | T | o | T | T | T | o |
| `state-safe_timed-out` | corrected control | . | . | o | . | . | o | o | . |
| `state-busy` | known defect | . | . | o | . | . | o | o | . |
| `state-safe_busy` | corrected control | . | . | . | . | . | o | o | . |
| `journey-booking-broken` | known defect | . | . | . | . | . | o | o | . |
| `journey-booking-correct` | corrected control | . | . | . | . | . | o | o | . |
| `journey-signin-broken` | known defect | . | . | . | . | . | o | o | . |
| `journey-signin-correct` | corrected control | . | . | o | o | . | o | o | . |
| `journey-consistent-help-broken` | known defect | . | . | . | . | . | o | o | . |
| `journey-consistent-help-correct` | corrected control | . | . | . | . | . | o | o | . |
| `journey-destructive-broken` | known defect | . | . | . | . | . | o | o | . |
| `journey-destructive-correct` | corrected control | . | . | . | . | . | o | o | . |
| `journey-consent-broken` | known defect | T | . | . | o | . | o | T | . |
| `journey-consent-correct` | corrected control | . | . | . | . | . | o | o | . |
| `journey-navigate-broken` | known defect | . | . | . | . | . | o | o | . |
| `journey-navigate-correct` | corrected control | . | . | . | . | . | o | o | . |
| `journey-signup-broken` | known defect | . | . | . | . | . | o | o | . |
| `journey-signup-correct` | corrected control | . | . | . | . | . | o | o | . |
| `journey-checkout-broken` | known defect | . | . | . | . | . | o | o | . |
| `journey-checkout-correct` | corrected control | . | . | . | . | . | o | o | . |
| `journey-session-broken` | known defect | . | . | . | . | . | o | o | . |
| `journey-session-correct` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-keyboard_trap` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_keyboard_trap` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-overlay_focus_trap` | known defect | o | . | o | o | . | o | o | . |
| `scenario-safe_overlay_focus_trap` | corrected control | . | . | o | . | . | o | o | . |
| `scenario-async_validation` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_async_validation` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-infinite_scroll` | known defect | . | . | o | . | . | o | o | . |
| `scenario-safe_infinite_scroll` | corrected control | . | . | o | . | . | o | o | . |
| `scenario-data_dashboard` | known defect | . | . | . | T | . | o | o | . |
| `scenario-safe_data_dashboard` | corrected control | . | . | . | . | . | o | T | . |
| `scenario-meaningful_sequence` | known defect | . | . | . | . | . | o | o | o |
| `scenario-safe_meaningful_sequence` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-live_chat` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_live_chat` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-text_spacing` | known defect | . | . | . | . | . | o | o | o |
| `scenario-safe_text_spacing` | corrected control | . | . | . | . | . | o | o | o |
| `scenario-forced_colors` | known defect | . | . | . | . | . | o | o | o |
| `scenario-safe_forced_colors` | corrected control | . | . | . | . | . | o | o | o |
| `scenario-orientation_lock` | known defect | T | . | . | . | o | o | o | o |
| `scenario-safe_orientation_lock` | corrected control | . | . | . | . | . | o | o | o |
| `scenario-rtl_mixed_language` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_rtl_mixed_language` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-label_in_name` | known defect | T | T | . | T | T | T | T | . |
| `scenario-safe_label_in_name` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-dragging_required` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_dragging_required` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-touch_targets` | known defect | T | . | o | T | . | T | o | o |
| `scenario-safe_touch_targets` | corrected control | . | . | o | . | . | T | o | o |
| `scenario-pointer_cancellation` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_pointer_cancellation` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-change_on_focus` | known defect | T | . | . | . | . | o | o | . |
| `scenario-safe_change_on_focus` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-change_on_input` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_change_on_input` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-error_suggestion` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_error_suggestion` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-disabled_state` | known defect | o | o | o | o | o | o | o | o |
| `scenario-safe_disabled_state` | corrected control | . | . | . | . | . | o | o | . |
| `scenario-motion_actuation` | known defect | . | . | . | . | . | o | o | . |
| `scenario-safe_motion_actuation` | corrected control | . | . | . | . | . | o | o | . |
| `surface-email_table_layout` | known defect | T | T | T | T | T | T | T | o |
| `surface-safe_email_table_layout` | corrected control | . | . | T | . | . | o | T | o |
| `surface-email_contrast_darkmode` | known defect | . | . | . | . | . | o | o | . |
| `surface-safe_email_contrast_darkmode` | corrected control | . | . | . | . | . | o | o | . |
| `surface-epub_no_metadata` | known defect | o | o | o | o | o | o | o | o |
| `surface-safe_epub_no_metadata` | corrected control | . | . | . | . | . | o | o | . |
| `surface-authoring_generates_bad_markup` | known defect | T | T | T | T | T | T | T | o |
| `surface-safe_authoring_generates_bad_markup` | corrected control | . | . | . | . | . | o | o | . |
| `surface-chatbot_transcript` | known defect | T | . | . | o | . | o | T | . |
| `surface-safe_chatbot_transcript` | corrected control | . | . | o | . | . | o | o | . |
| `flash-flash_10hz_large_area` | known defect | . | . | . | . | . | o | o | . |
| `flash-safe_flash_10hz_large_area` | corrected control | . | . | . | . | . | o | o | . |
| `flash-red_flash` | known defect | . | . | . | . | . | o | o | . |
| `flash-safe_red_flash` | corrected control | . | . | . | . | . | o | o | . |
| `flash-safe_flash_small_area` | corrected control | . | . | . | . | . | o | o | . |
| `flash-three_flashes_exactly` | known defect | . | . | . | . | . | o | o | . |
| `flash-safe_three_flashes_exactly` | corrected control | . | . | . | . | . | o | o | . |
| `flash-animation_from_interaction` | known defect | . | . | . | . | . | o | o | . |
| `flash-safe_animation_from_interaction` | corrected control | . | . | . | . | . | o | o | . |

## Shared gaps

No tool mapped the declared criterion on 60 known-defect cases: `keyboard-focus_obscured`, `static-input_purpose_missing`, `static-ambiguous_link_purpose`, `static-vague_heading_and_label`, `delivery-shadow_dom_closed`, `patterns-alert`, `patterns-table`, `patterns-tooltip`, `patterns-breadcrumb`, `patterns-form-errors`, `patterns-media-captions`, `color-error_color_only`, `color-status_color_only`, `color-link_color_only`, `color-chart_series_color_only`, `color-selection_color_only`, `color-disabled_state`, `media-video_no_captions`, `media-audio_no_transcript`, `media-live_no_captions`, `media-alert_by_sound_only`, `media-captions_unlabelled_track`, `state-loading`, `state-empty`, `state-invalid`, `state-corrected`, `state-submitted`, `state-error`, `state-offline`, `state-permission-denied`, `state-busy`, `journey-booking-broken`, `journey-signin-broken`, `journey-consistent-help-broken`, `journey-destructive-broken`, `journey-navigate-broken`, `journey-signup-broken`, `journey-checkout-broken`, `journey-session-broken`, `scenario-keyboard_trap`, `scenario-overlay_focus_trap`, `scenario-async_validation`, `scenario-infinite_scroll`, `scenario-meaningful_sequence`, `scenario-live_chat`, `scenario-text_spacing`, `scenario-forced_colors`, `scenario-rtl_mixed_language`, `scenario-dragging_required`, `scenario-pointer_cancellation`, `scenario-change_on_input`, `scenario-error_suggestion`, `scenario-disabled_state`, `scenario-motion_actuation`, `surface-email_contrast_darkmode`, `surface-epub_no_metadata`, `flash-flash_10hz_large_area`, `flash-red_flash`, `flash-three_flashes_exactly`, `flash-animation_from_interaction`.

These misses identify automation and scenario-driver backlog. They are not evidence that the fixtures pass. Some require interaction, state transitions, visual judgment, comprehension or a person using assistive technology.

Three corrected-control-clean Conformis gaps were logged before publication: [#288](https://github.com/cogniumhq/conformis/issues/288) for visible-label association mapping, [#289](https://github.com/cogniumhq/conformis/issues/289) for the draggable custom slider, and [#290](https://github.com/cogniumhq/conformis/issues/290) for the unnamed SVG chart.

An Alfa-only WCAG 2.5.5 signal was not treated as a Conformis defect because Alfa also reports that criterion on the corrected control. Conformis reports WCAG 2.5.8 on the defect and leaves that corrected control target-clean.

## Evidence and interpretation limits

- Every product has one repetition; this bundle does not estimate run-to-run variance.
- Native product outputs are represented by per-case SHA-256 digests. Raw Cognium Conformis proofgraph evidence and raw third-party outputs are not redistributed.
- Criterion credit is conservative and requires an explicit native-rule-to-WCAG mapping. A tool can report another issue and receive no target credit.
- `cannot-tell` is preserved when no mapped finding exists. It is never converted into pass.
- Durations are diagnostic only and are not used as a product speed ranking.
- Thirty-eight automated candidates were outside this lane: 26 AAA and eight pipeline pages were not exposed by the merged server, while four PDF/DOCX cases require native document adapters. They are excluded, not counted as scanner errors.
- Corrections must publish a new immutable revision and retain this bundle with a supersession link.

See [method.md](method.md), [metrics.json](metrics.json), [comparison.json](comparison.json) and each product’s schema-valid `result.json` for the reproducible evidence.
