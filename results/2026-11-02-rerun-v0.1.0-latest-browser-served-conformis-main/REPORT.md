# Accessibility benchmark: Cognium Conformis at main on the latest browser-served lane

Published run date: 2026-11-02 (America/Los_Angeles).

Classification: **maintainer-authored**. Cognium maintains this corpus and makes Cognium Conformis, so this bundle is not an independent reproduction.

This is a single-run, finite-corpus detection comparison. It is not WCAG certification, legal advice, a universal product ranking, a performance benchmark or a guarantee about production websites.

This bundle runs Cognium Conformis at `main` (`7fa92329`) on the same 214 pages, corpus revision, subject declaration, host, browser build and fonts as `2026-11-02-rerun-v0.1.0-latest-browser-served`, which re-ran the 2026-10-13 revision `28f9e14d`. With everything else held fixed, the comparison below isolates the product revision. No other product was run.

## Identity and scope

- Corpus: `cogniumhq/a11y-benchmark@v0.1.0` (`469486a4811c5055de9d2524ede1ca520c2774c8`).
- Corpus manifest: `sha256:a4e01bcd1281bfb1c1951657a815ad2da053e5e233c1d937dd7ed7227c03c9f0`.
- Runner: `cogniumhq/a11y-benchmark` `comparison/` at `101112de2a3ba81af328c562363aac74181ea324` ([review PR](https://github.com/cogniumhq/a11y-benchmark/pull/72)). Package lock SHA-256: `sha256:f5ccf82768fc24e7a232bc44363d2e573868091833b0a71189dcdb06f780a533`.
- Cognium Conformis run source: `cogniumhq/conformis@7fa92329e835146d240ea8bb8d3c420a8e653829` (private). This is `main` as fetched on 2026-11-02, 733 commits after the 2026-10-13 run's revision `28f9e14d`.
- Baseline: [`2026-11-02-rerun-v0.1.0-latest-browser-served`](../2026-11-02-rerun-v0.1.0-latest-browser-served/REPORT.md).
- Executed automated lane: 214/270 corpus cases (56 not executed), the baseline's case list in its order.
- Human and assistive-technology protocols executed: 0/8.

The unexecuted cases and protocols are neither passes nor failures.

## Comparison with Conformis 28f9e14d

Each row compares a product in this run with its column in `2026-11-02-rerun-v0.1.0-latest-browser-served` (Conformis 28f9e14d), case by case. A case differs when its cell (`T`, `o`, `.`, `E`) or its matched declared criteria differ.

| Tool | Known-defect cases target-detected (Conformis 28f9e14d → this run) | Declared criteria matched | Corrected controls target-clean | Errors | Cases that differ |
|---|---:|---:|---:|---:|---:|
| Cognium Conformis | 47/110 → 57/110 | 71/189 → 84/189 | 104/104 → 104/104 | 0 → 0 | 30 |

Every corrected control stayed target-clean. Criterion credit follows the pack's own control-to-criterion mapping: for example `AX-15/1.4.11-forced` deviates under both 1.4.11 and 1.3.1, which is how `journey-consent-broken` and `surface-chatbot_transcript` gain 1.3.1.

### Cognium Conformis: cases that differ

| Case | Expected | Declared criteria | Conformis 28f9e14d | This run |
|---|---|---|---|---|
| `keyboard-safe_native_date_fields` | corrected control | 2.1.1 | o (none) | . (none) |
| `keyboard-focus_obscured` | known defect | 2.4.11 | o (none) | T (2.4.11) |
| `static-route_field_relationship` | known defect | 1.3.1 | o (none) | T (1.3.1) |
| `patterns-slider` | known defect | 4.1.2, 2.1.1 | . (none) | T (2.1.1) |
| `color-link_color_only` | known defect | 1.4.1 | . (none) | T (1.4.1) |
| `media-video_no_captions` | known defect | 1.2.2 | o (none) | . (none) |
| `media-safe_video_no_captions` | corrected control | 1.2.2 | o (none) | . (none) |
| `media-safe_captions_present_but_poor` | corrected control | 1.2.2 | o (none) | . (none) |
| `media-audio_no_transcript` | known defect | 1.2.1 | o (none) | . (none) |
| `media-safe_audio_no_transcript` | corrected control | 1.2.1 | o (none) | . (none) |
| `media-safe_video_no_audio_description` | corrected control | 1.2.3, 1.2.5 | o (none) | . (none) |
| `media-live_no_captions` | known defect | 1.2.4 | o (none) | . (none) |
| `media-safe_live_no_captions` | corrected control | 1.2.4 | o (none) | . (none) |
| `media-safe_autoplay_no_control` | corrected control | 1.4.2 | o (none) | . (none) |
| `media-captions_unlabelled_track` | known defect | 1.2.2 | o (none) | . (none) |
| `media-safe_captions_unlabelled_track` | corrected control | 1.2.2 | o (none) | . (none) |
| `journey-consent-broken` | known defect | 2.1.1, 2.4.3, 1.3.1 | T (2.1.1) | T (2.1.1, 1.3.1) |
| `scenario-data_dashboard` | known defect | 1.1.1, 1.3.1 | . (none) | T (1.1.1) |
| `scenario-meaningful_sequence` | known defect | 1.3.2 | . (none) | T (1.3.2) |
| `scenario-text_spacing` | known defect | 1.4.12 | . (none) | T (1.4.12) |
| `scenario-rtl_mixed_language` | known defect | 3.1.2 | . (none) | T (3.1.2) |
| `scenario-dragging_required` | known defect | 2.5.7, 2.5.1 | . (none) | o (none) |
| `surface-authoring_generates_bad_markup` | known defect | 1.1.1, 1.3.1 | T (1.1.1) | T (1.1.1, 1.3.1) |
| `surface-chatbot_transcript` | known defect | 4.1.3, 1.3.1, 2.1.1 | T (2.1.1) | T (1.3.1, 2.1.1) |
| `flash-flash_10hz_large_area` | known defect | 2.3.1, 2.3.2 | . (none) | T (2.3.1) |
| `flash-safe_flash_10hz_large_area` | corrected control | 2.3.1, 2.3.2 | . (none) | o (none) |
| `flash-red_flash` | known defect | 2.3.1 | . (none) | T (2.3.1) |
| `flash-safe_red_flash` | corrected control | 2.3.1 | . (none) | o (none) |
| `flash-three_flashes_exactly` | known defect | 2.3.2 | . (none) | o (none) |
| `flash-safe_three_flashes_exactly` | corrected control | 2.3.2 | . (none) | o (none) |

Thirteen known-defect cases gain a declared criterion and none loses one. Twelve cells move from `o` to `.`, eleven media pages and `keyboard-safe_native_date_fields`: at `28f9e14d` the only finding on each was the keyboard-trap control `AX-08/2.1.2` under 2.1.2, which none of them declares, and at `main` that control reports nothing there. Five cells move from `.` to `o`: `scenario-dragging_required` (`AX-10/2.1.1` under 2.1.1) and four flash pages (`AX-41/1.3.3` under 1.3.3), criteria those pages do not declare.

## Corrected controls: target-clean rate

The lane has 104 corrected controls. A control is target-clean when the tool reported none of the criteria the control declares in `must_not_report`. Target-clean is not a pass and not conformance: a tool with no rule for a criterion is target-clean on it by silence. A control that is not target-clean is a finding the corpus says should not be there.

| Tool | Corrected controls target-clean | Controls with a declared-criterion finding |
|---|---:|---|
| Cognium Conformis | 104/104 (100%) | none |

## This run

| Tool | Known-defect cases target-detected | Declared criteria matched | Corrected controls target-clean | Completed | Errors |
|---|---:|---:|---:|---:|---:|
| Cognium Conformis | 57/110 (52%) | 84/189 (44%) | 104/104 | 214/214 | 0 |

### Reference scorer

The reference scorer of the pinned corpus revision (`check/score.mjs` at `469486a4`, policy `cognium-a11y-scoring/1.0.0`, `--strict`) applied to this bundle's `result.json`. For `28f9e14d` on the same host it gives 71/207 (34.3%), 71/189 (37.6%) and 0/192.

| Tool | True-positive recall (whole corpus) | Of attempted | Corrected-control false-positive assertions |
|---|---:|---:|---:|
| Cognium Conformis | 84/207 (40.6%) | 84/189 (44.4%) | 0/192 (0.0%) |

## Execution environment

| Tool | OS | Runtime | Browser | Viewport | Run window (UTC) |
|---|---|---|---|---|---|
| Cognium Conformis | linux/x64 | Cognium Conformis browser driver 0.26.1; static-html driver 0.3.0 | Chromium 153.0.8010.12 | 1280×900 | 2026-11-03T05:01:11.483Z – 2026-11-03T05:42:37.527Z |

Differences from the Conformis 28f9e14d environment:

- None in host, operating system, Node.js, browser build or fonts: this scan used the same host as the re-run bundle, Chromium 153.0.8010.12 and the host fonts.
- This scan ran alone; the re-run's Conformis scan ran alongside the direct tools.
- Conformis at `main` uses browser driver 0.26.1 and static-html driver 0.3.0 (0.9.13 and 0.2.3 at `28f9e14d`). Both revisions pin the same container image digest and ran through the same local stand-in for `docker`.

## Tool lineage

| Tool | Version/build | Engine family | Independence | Interface |
|---|---|---|---|---|
| Cognium Conformis | git:7fa92329e835146d240ea8bb8d3c420a8e653829; a11y/html@1.6.1 + tech/html-aria@1.3.0 | Conformis a11y/html and tech/html-aria | independent-engine | site scan with subject-declared entry pages |

## Product surface inventory

| Product surface | Version | Lane | Engine lineage | Status in this bundle | Metric treatment |
|---|---|---|---|---|---|
| Cognium Conformis | git:7fa92329e835146d240ea8bb8d3c420a8e653829; a11y/html@1.6.1 + tech/html-aria@1.3.0 | automated | Conformis a11y/html and tech/html-aria a11y/html@1.6.1 + tech/html-aria@1.3.0; independent-engine | executed | Measured as the Cognium Conformis site-scanner configuration at main over all 214 declared entry pages, zero flows, without the optional axe-core cross-check; browser passes ran in place on the host Chromium (see method.md). |
| axe-core | 4.14.0 | automated | axe-core 4.14.0; independent-engine | not-executed | Not executed in this bundle. Its result for this lane, corpus revision and environment is in 2026-11-02-rerun-v0.1.0-latest-browser-served. |
| axe DevTools - Web Accessibility Testing | 4.138.0 | automated-and-guided | axe-core (version not established); derived-surface of axe-core | not-executed | Inventoried but not counted as a second independent engine vote; a future extension run must pin the edition, enabled features and embedded engine version. |
| Pa11y / HTML_CodeSniffer | 10.0.0 | automated | HTML_CodeSniffer 2.6.0; wrapper of HTML_CodeSniffer | not-executed | Not executed in this bundle. Its result for this lane, corpus revision and environment is in 2026-11-02-rerun-v0.1.0-latest-browser-served. |
| IBM Equal Access | 4.0.34 | automated | IBM Equal Access Accessibility Checker 4.0.34; independent-engine | not-executed | Not executed in this bundle. Its result for this lane, corpus revision and environment is in 2026-11-02-rerun-v0.1.0-latest-browser-served. |
| Lighthouse accessibility | 13.5.0 | automated | axe-core-derived Lighthouse audits 4.14.0; derived-configuration of axe-core | not-executed | Not executed in this bundle. Its result for this lane, corpus revision and environment is in 2026-11-02-rerun-v0.1.0-latest-browser-served. |
| Siteimprove Alfa | rules 0.119.0; Puppeteer integration 0.84.2 | automated | Alfa ACT rules rules 0.119.0; Puppeteer integration 0.84.2; independent-engine | not-executed | Not executed in this bundle. Its result for this lane, corpus revision and environment is in 2026-11-02-rerun-v0.1.0-latest-browser-served. |
| QualWeb | core 0.9.5; ACT rules 0.8.6; WCAG techniques 0.4.9; best practices 0.7.13 | automated | QualWeb ACT rules, WCAG techniques and best practices core 0.9.5; ACT rules 0.8.6; WCAG techniques 0.4.9; best practices 0.7.13; independent-engine | not-executed | Not executed in this bundle. Its result for this lane, corpus revision and environment is in 2026-11-02-rerun-v0.1.0-latest-browser-served. |
| Nu Html Checker | 26.10.12 (0a70d65); image sha256:8f21030474e68e06905cfa801b37376e99c0e37867c653c5b6cd7e2dcaf3f503 | automated | v.Nu HTML, CSS and SVG conformance checker 26.10.12 (0a70d65); independent-engine | not-executed | Not executed in this bundle. Its result for this lane, corpus revision and environment is in 2026-11-02-rerun-v0.1.0-latest-browser-served. |
| Accessibility Insights for Web | 2.49.0 | automated-assisted-and-manual | axe-core 4.11.3; derived-surface of axe-core | not-executed | FastPass automated checks are axe-derived and must not be counted as an independent engine vote. Needs Review, Tab Stops and Assessment remain separate human-guided results. |

axe DevTools is inventoried but was not separately executed because its free automated checks run on axe-core; counting that surface as another independent engine result would duplicate the axe family. Accessibility Insights for Web is protocol-ready but not executed: its FastPass automated checks are axe-derived, while Needs Review, Tab Stops and Assessment require separate human-guided evidence. See [the Accessibility Insights protocol](manual/accessibility-insights-for-web/PROTOCOL.md) and [run plan](manual/accessibility-insights-for-web/run-plan.json).

## Case matrix

Legend: `T` declared target criterion detected; `o` another automated finding only; `.` no automated finding; `E` execution error. A trailing `*` marks a cell or matched-criterion set that differs from Conformis 28f9e14d.

| Case | Expected | Cognium Conformis |
|---|---|---:|
| `keyboard-div_button` | known defect | T |
| `keyboard-safe_native_button` | corrected control | . |
| `keyboard-div_text_field` | known defect | T |
| `keyboard-safe_native_text_field` | corrected control | . |
| `keyboard-div_date_fields` | known defect | T |
| `keyboard-safe_native_date_fields` | corrected control | .* |
| `keyboard-div_travellers` | known defect | T |
| `keyboard-safe_native_travellers` | corrected control | . |
| `keyboard-div_checkbox` | known defect | T |
| `keyboard-safe_native_checkbox` | corrected control | . |
| `keyboard-div_fare_cards` | known defect | T |
| `keyboard-safe_native_fare_options` | corrected control | . |
| `keyboard-role_tab_no_tablist` | known defect | T |
| `keyboard-safe_roving_tabindex` | corrected control | . |
| `keyboard-safe_custom_button` | corrected control | . |
| `keyboard-focus_not_visible` | known defect | T |
| `keyboard-safe_focus_visible` | corrected control | . |
| `keyboard-focus_obscured` | known defect | T* |
| `keyboard-safe_focus_not_obscured` | corrected control | . |
| `capture-client_mounted` | known defect | T |
| `capture-safe_server_rendered` | corrected control | . |
| `capture-link_heavy` | corrected control | . |
| `static-viewport_no_zoom` | known defect | T |
| `static-safe_viewport` | corrected control | . |
| `static-img_no_alt` | known defect | T |
| `static-safe_img` | corrected control | . |
| `static-anim_no_reduced_motion` | known defect | T |
| `static-safe_anim_reduced_motion` | corrected control | . |
| `static-field_no_visible_label` | known defect | T |
| `static-safe_field_visible_label` | corrected control | . |
| `static-lang_missing` | known defect | T |
| `static-safe_lang_declared` | corrected control | . |
| `static-page_title_missing` | known defect | T |
| `static-safe_page_title` | corrected control | . |
| `static-text_low_contrast` | known defect | T |
| `static-safe_text_contrast` | corrected control | . |
| `static-input_purpose_missing` | known defect | . |
| `static-safe_input_purpose` | corrected control | . |
| `static-route_field_relationship` | known defect | T* |
| `static-safe_route_field_relationship` | corrected control | . |
| `static-ambiguous_link_purpose` | known defect | . |
| `static-safe_link_purpose` | corrected control | . |
| `static-vague_heading_and_label` | known defect | . |
| `static-safe_descriptive_heading_and_label` | corrected control | . |
| `delivery-server_html` | known defect | T |
| `delivery-client_js` | known defect | T |
| `delivery-client_js_delayed` | known defect | T |
| `delivery-iframe_same_origin` | known defect | T |
| `delivery-iframe_srcdoc` | known defect | T |
| `delivery-iframe_sandboxed` | known defect | T |
| `delivery-iframe_nested` | known defect | T |
| `delivery-shadow_dom_open` | known defect | T |
| `delivery-shadow_dom_closed` | known defect | . |
| `delivery-web_component` | known defect | T |
| `delivery-progressive_enhancement` | known defect | T |
| `patterns-disclosure` | known defect | T |
| `patterns-safe_disclosure` | corrected control | . |
| `patterns-accordion` | known defect | T |
| `patterns-safe_accordion` | corrected control | . |
| `patterns-tabs` | known defect | T |
| `patterns-safe_tabs` | corrected control | . |
| `patterns-dialog` | known defect | T |
| `patterns-safe_dialog` | corrected control | . |
| `patterns-combobox` | known defect | T |
| `patterns-safe_combobox` | corrected control | . |
| `patterns-menu` | known defect | T |
| `patterns-safe_menu` | corrected control | . |
| `patterns-switch` | known defect | T |
| `patterns-safe_switch` | corrected control | . |
| `patterns-alert` | known defect | . |
| `patterns-safe_alert` | corrected control | . |
| `patterns-table` | known defect | . |
| `patterns-safe_table` | corrected control | . |
| `patterns-tooltip` | known defect | . |
| `patterns-safe_tooltip` | corrected control | . |
| `patterns-breadcrumb` | known defect | . |
| `patterns-safe_breadcrumb` | corrected control | . |
| `patterns-slider` | known defect | T* |
| `patterns-safe_slider` | corrected control | . |
| `patterns-listbox` | known defect | T |
| `patterns-safe_listbox` | corrected control | o |
| `patterns-form-errors` | known defect | . |
| `patterns-safe_form-errors` | corrected control | . |
| `patterns-required-fields` | known defect | T |
| `patterns-safe_required-fields` | corrected control | . |
| `patterns-media-captions` | known defect | . |
| `patterns-safe_media-captions` | corrected control | . |
| `color-error_color_only` | known defect | . |
| `color-safe_error_color_only` | corrected control | . |
| `color-status_color_only` | known defect | . |
| `color-safe_status_color_only` | corrected control | . |
| `color-link_color_only` | known defect | T* |
| `color-safe_link_color_only` | corrected control | . |
| `color-chart_series_color_only` | known defect | . |
| `color-safe_chart_series_color_only` | corrected control | . |
| `color-selection_color_only` | known defect | . |
| `color-safe_selection_color_only` | corrected control | . |
| `color-placeholder_contrast` | known defect | T |
| `color-safe_placeholder_contrast` | corrected control | . |
| `color-disabled_state` | known defect | o |
| `color-safe_disabled_state` | corrected control | . |
| `color-required_color_only` | known defect | T |
| `color-safe_required_color_only` | corrected control | . |
| `media-video_no_captions` | known defect | .* |
| `media-safe_video_no_captions` | corrected control | .* |
| `media-safe_captions_present_but_poor` | corrected control | .* |
| `media-audio_no_transcript` | known defect | .* |
| `media-safe_audio_no_transcript` | corrected control | .* |
| `media-safe_video_no_audio_description` | corrected control | .* |
| `media-live_no_captions` | known defect | .* |
| `media-safe_live_no_captions` | corrected control | .* |
| `media-alert_by_sound_only` | known defect | . |
| `media-safe_alert_by_sound_only` | corrected control | . |
| `media-autoplay_no_control` | known defect | T |
| `media-safe_autoplay_no_control` | corrected control | .* |
| `media-captions_unlabelled_track` | known defect | .* |
| `media-safe_captions_unlabelled_track` | corrected control | .* |
| `state-loading` | known defect | . |
| `state-safe_loading` | corrected control | . |
| `state-empty` | known defect | . |
| `state-safe_empty` | corrected control | . |
| `state-invalid` | known defect | . |
| `state-safe_invalid` | corrected control | . |
| `state-corrected` | known defect | . |
| `state-safe_corrected` | corrected control | . |
| `state-submitted` | known defect | . |
| `state-safe_submitted` | corrected control | . |
| `state-error` | known defect | . |
| `state-safe_error` | corrected control | . |
| `state-offline` | known defect | o |
| `state-safe_offline` | corrected control | . |
| `state-permission-denied` | known defect | . |
| `state-safe_permission-denied` | corrected control | . |
| `state-timed-out` | known defect | T |
| `state-safe_timed-out` | corrected control | . |
| `state-busy` | known defect | . |
| `state-safe_busy` | corrected control | . |
| `journey-booking-broken` | known defect | . |
| `journey-booking-correct` | corrected control | . |
| `journey-signin-broken` | known defect | . |
| `journey-signin-correct` | corrected control | . |
| `journey-consistent-help-broken` | known defect | . |
| `journey-consistent-help-correct` | corrected control | . |
| `journey-destructive-broken` | known defect | . |
| `journey-destructive-correct` | corrected control | . |
| `journey-consent-broken` | known defect | T* |
| `journey-consent-correct` | corrected control | . |
| `journey-navigate-broken` | known defect | . |
| `journey-navigate-correct` | corrected control | . |
| `journey-signup-broken` | known defect | . |
| `journey-signup-correct` | corrected control | . |
| `journey-checkout-broken` | known defect | . |
| `journey-checkout-correct` | corrected control | . |
| `journey-session-broken` | known defect | . |
| `journey-session-correct` | corrected control | . |
| `scenario-keyboard_trap` | known defect | . |
| `scenario-safe_keyboard_trap` | corrected control | . |
| `scenario-overlay_focus_trap` | known defect | o |
| `scenario-safe_overlay_focus_trap` | corrected control | . |
| `scenario-async_validation` | known defect | . |
| `scenario-safe_async_validation` | corrected control | . |
| `scenario-infinite_scroll` | known defect | . |
| `scenario-safe_infinite_scroll` | corrected control | . |
| `scenario-data_dashboard` | known defect | T* |
| `scenario-safe_data_dashboard` | corrected control | . |
| `scenario-meaningful_sequence` | known defect | T* |
| `scenario-safe_meaningful_sequence` | corrected control | . |
| `scenario-live_chat` | known defect | . |
| `scenario-safe_live_chat` | corrected control | . |
| `scenario-text_spacing` | known defect | T* |
| `scenario-safe_text_spacing` | corrected control | . |
| `scenario-forced_colors` | known defect | . |
| `scenario-safe_forced_colors` | corrected control | . |
| `scenario-orientation_lock` | known defect | T |
| `scenario-safe_orientation_lock` | corrected control | . |
| `scenario-rtl_mixed_language` | known defect | T* |
| `scenario-safe_rtl_mixed_language` | corrected control | . |
| `scenario-label_in_name` | known defect | T |
| `scenario-safe_label_in_name` | corrected control | . |
| `scenario-dragging_required` | known defect | o* |
| `scenario-safe_dragging_required` | corrected control | . |
| `scenario-touch_targets` | known defect | T |
| `scenario-safe_touch_targets` | corrected control | . |
| `scenario-pointer_cancellation` | known defect | . |
| `scenario-safe_pointer_cancellation` | corrected control | . |
| `scenario-change_on_focus` | known defect | T |
| `scenario-safe_change_on_focus` | corrected control | . |
| `scenario-change_on_input` | known defect | . |
| `scenario-safe_change_on_input` | corrected control | . |
| `scenario-error_suggestion` | known defect | . |
| `scenario-safe_error_suggestion` | corrected control | . |
| `scenario-disabled_state` | known defect | o |
| `scenario-safe_disabled_state` | corrected control | . |
| `scenario-motion_actuation` | known defect | . |
| `scenario-safe_motion_actuation` | corrected control | . |
| `surface-email_table_layout` | known defect | T |
| `surface-safe_email_table_layout` | corrected control | . |
| `surface-email_contrast_darkmode` | known defect | . |
| `surface-safe_email_contrast_darkmode` | corrected control | . |
| `surface-epub_no_metadata` | known defect | o |
| `surface-safe_epub_no_metadata` | corrected control | . |
| `surface-authoring_generates_bad_markup` | known defect | T* |
| `surface-safe_authoring_generates_bad_markup` | corrected control | . |
| `surface-chatbot_transcript` | known defect | T* |
| `surface-safe_chatbot_transcript` | corrected control | . |
| `flash-flash_10hz_large_area` | known defect | T* |
| `flash-safe_flash_10hz_large_area` | corrected control | o* |
| `flash-red_flash` | known defect | T* |
| `flash-safe_red_flash` | corrected control | o* |
| `flash-safe_flash_small_area` | corrected control | . |
| `flash-three_flashes_exactly` | known defect | o* |
| `flash-safe_three_flashes_exactly` | corrected control | o* |
| `flash-animation_from_interaction` | known defect | . |
| `flash-safe_animation_from_interaction` | corrected control | . |

## Evidence and interpretation limits

- One repetition per product. This bundle does not estimate run-to-run variance; the comparison with the baseline is two single runs.
- Native product outputs are represented by per-case SHA-256 digests. Raw Cognium Conformis proofgraph evidence and raw third-party outputs are not redistributed.
- Criterion credit requires an explicit native-rule-to-WCAG mapping. A tool can report another issue and receive no target credit.
- `cannot-tell` is preserved when no mapped finding exists. It is never converted into pass.
- Durations are diagnostic only and are not a speed ranking.
- One repetition per revision. The difference between the two Conformis revisions is two single runs.
- `a11y/html@1.6.1` and `tech/html-aria@1.3.0` are workspace versions at `7fa92329`, not published registry versions; the commit is the pin. The repository is private.
- This bundle keeps the 2026-10-13 corpus revision. Later corpus revisions changed some assertions, and results against them are not comparable with this one.
- No flows or state drivers were declared: the lane measures loaded entry pages.
- Corrections must publish a new immutable revision and retain this bundle with a supersession link.

See [method.md](method.md), [metrics.json](metrics.json), [comparison.json](comparison.json) and each product’s schema-valid `result.json`.
