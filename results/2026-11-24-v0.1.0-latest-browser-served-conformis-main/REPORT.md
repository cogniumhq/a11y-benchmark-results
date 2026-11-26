# Accessibility benchmark: Cognium Conformis at main on the latest browser-served lane

Published run date: 2026-11-24 (America/Los_Angeles).

Classification: **maintainer-authored**. Cognium maintains this corpus and makes Cognium Conformis, so this bundle is not an independent reproduction.

This is a single-run, finite-corpus detection comparison. It is not WCAG certification, legal advice, a universal product ranking, a performance benchmark or a guarantee about production websites.

This bundle runs Cognium Conformis at `main` (`6de5c4e8`) on the same 214-page case list, in the same order, as `2026-11-09-v0.1.0-latest-browser-served-conformis-main`. It is NOT at the same corpus revision: the baseline is pinned at `469486a4` and this run ran against `30e5f3ea`, 52 commits later. Each case is scored as the corpus of THIS run declares it, so three cases that upstream reclassified from known defect to corrected control move denominators. Read the comparison as two runs of the same product against two revisions of the same ground truth, not as a like-for-like delta. No other product was run.

## Identity and scope

- Corpus: `cogniumhq/a11y-benchmark@v0.1.0` (`30e5f3eaaa59ad4ecf3011b7fb397e233c26a878`).
- Corpus manifest: `sha256:6ec8c1b092945c9b86c586f338019eed3bf63a6e6ba983a75ed05cc7e5ca8c84`.
- Runner: `cogniumhq/a11y-benchmark` `comparison/` at `583d6d1bf66de0e819864063375039c7c75a0194` ([review PR](https://github.com/cogniumhq/a11y-benchmark/pull/99)). Package lock SHA-256: `sha256:f5ccf82768fc24e7a232bc44363d2e573868091833b0a71189dcdb06f780a533`.
- Cognium Conformis run source: `cogniumhq/conformis@6de5c4e8dbc50b4de671f6760cf571b4dca11eaa` (private). This is `main` as the 2026-11-24 nightly found it (`6de5c4e8`), 166 commits after the 2026-11-09 run's revision `d4eb53a`. `main` has advanced since the run; this bundle measures the commit the run measured, not the tip at publication.
- Baseline: [`2026-11-09-v0.1.0-latest-browser-served-conformis-main`](../2026-11-09-v0.1.0-latest-browser-served-conformis-main/REPORT.md).
- Executed automated lane: 214/397 corpus cases (183 not executed), the baseline's case list in its order.
- Human and assistive-technology protocols executed: 0/8.

The unexecuted cases and protocols are neither passes nor failures.

## Comparison with Conformis d4eb53a

Each row compares a product in this run with its column in `2026-11-09-v0.1.0-latest-browser-served-conformis-main` (Conformis d4eb53a), case by case. A case differs when its cell (`T`, `o`, `.`, `E`) or its matched declared criteria differ.

| Tool | Known-defect cases target-detected (Conformis d4eb53a → this run) | Declared criteria matched | Corrected controls target-clean | Errors | Cases that differ |
|---|---:|---:|---:|---:|---:|
| Cognium Conformis | 63/110 → 71/107 | 82/189 → 99/183 | 104/104 → 106/107 | 0 → 0 | 18 |

The two columns do not share a denominator. Between `469486a4` and `30e5f3ea` the corpus moved `scenario-forced_colors`, `media-captions_unlabelled_track` and `flash-three_flashes_exactly` from known defect to corrected control, so this run has 107 known defects and 107 corrected controls where the baseline had 110 and 104, and 183 declared criteria where the baseline had 189 (`scenario-dragging_required` lost 2.5.1, `surface-email_contrast_darkmode` lost 1.4.1, `flash-three_flashes_exactly` gained 2.3.1, and each of their safe twins moved with them). Eighteen cases changed cell or matched criteria. Nine known-defect cases that matched nothing on the baseline now match a declared criterion, and nine already-detected keyboard and ARIA-pattern cases regain `AX-05/4.1.2` alongside 2.1.1. Nothing that the baseline detected is lost. One of the nine new matches, `scenario-forced_colors`, is a FALSE POSITIVE rather than a gain: at this corpus revision the case is a corrected control that declares 1.4.1 and 1.4.11 in `must_not_report`, and this run reports both. Eight of the nine pages are byte-identical across the two pins; `scenarios/forced_colors.html` changed only in its prose header, which now states that passing 1.4.1 and 1.4.11 is the expected outcome. Scored at the baseline's stale classification the lane would read 72/110, 101/189 and 104/104 with no false positive; that is the figure `a11y-bench` reported on this run and it is not what the run measured (cogniumhq/conformis#862).

### Cognium Conformis: cases that differ

| Case | Expected | Declared criteria | Conformis d4eb53a | This run |
|---|---|---|---|---|
| `keyboard-div_button` | known defect | 2.1.1, 4.1.2 | T (2.1.1) | T (2.1.1, 4.1.2) |
| `keyboard-div_text_field` | known defect | 2.1.1, 1.3.1, 4.1.2 | T (2.1.1) | T (2.1.1, 4.1.2) |
| `keyboard-div_checkbox` | known defect | 2.1.1, 4.1.2 | T (2.1.1) | T (2.1.1, 4.1.2) |
| `static-ambiguous_link_purpose` | known defect | 2.4.4 | . (none) | T (2.4.4) |
| `patterns-disclosure` | known defect | 4.1.2, 2.1.1 | T (2.1.1) | T (4.1.2, 2.1.1) |
| `patterns-accordion` | known defect | 4.1.2, 1.3.1 | o (none) | T (4.1.2) |
| `patterns-dialog` | known defect | 4.1.2, 2.1.1, 2.4.3 | T (2.1.1) | T (4.1.2, 2.1.1) |
| `patterns-combobox` | known defect | 4.1.2, 2.1.1 | T (2.1.1) | T (4.1.2, 2.1.1) |
| `patterns-menu` | known defect | 4.1.2, 2.1.1 | T (2.1.1) | T (4.1.2, 2.1.1) |
| `patterns-switch` | known defect | 4.1.2, 2.1.1 | T (2.1.1) | T (4.1.2, 2.1.1) |
| `patterns-listbox` | known defect | 4.1.2, 2.1.1 | T (2.1.1) | T (4.1.2, 2.1.1) |
| `patterns-form-errors` | known defect | 3.3.1, 3.3.2, 4.1.2 | o (none) | T (3.3.1) |
| `state-loading` | known defect | 4.1.3 | . (none) | T (4.1.3) |
| `state-invalid` | known defect | 3.3.1, 4.1.2 | . (none) | T (3.3.1) |
| `state-submitted` | known defect | 4.1.3, 2.4.3 | . (none) | T (4.1.3) |
| `scenario-async_validation` | known defect | 4.1.3, 3.3.1 | . (none) | T (4.1.3) |
| `scenario-infinite_scroll` | known defect | 2.4.3, 4.1.3 | . (none) | T (4.1.3) |
| `scenario-forced_colors` | known defect | 1.4.1, 1.4.11 | . (none) | T (1.4.1, 1.4.11) |

The nine known-defect cases that go from no declared match to a detection are `static-ambiguous_link_purpose` (2.4.4), `patterns-accordion` (4.1.2), `patterns-form-errors` (3.3.1), `state-loading` (4.1.3), `state-invalid` (3.3.1), `state-submitted` (4.1.3), `scenario-async_validation` (4.1.3), `scenario-infinite_scroll` (4.1.3) and `scenario-forced_colors` (1.4.1 and 1.4.11). The last of those is the false positive described above: it is a corrected control at this corpus revision. The nine cases that add `4.1.2` to an existing 2.1.1 detection are `keyboard-div_button`, `keyboard-div_text_field`, `keyboard-div_checkbox`, `patterns-disclosure`, `patterns-dialog`, `patterns-combobox`, `patterns-menu`, `patterns-switch` and `patterns-listbox`; `AX-05/4.1.2` had stopped firing on them between the 2026-11-02 and 2026-11-09 runs and fires again at `a11y/html@1.9.0`. Thirty-six known-defect cases still match nothing; 2.4.3 (9 cases), 4.1.3 (9) and 1.3.1 (8) remain the largest standing gaps.

## Corrected controls: target-clean rate

The lane has 107 corrected controls. A control is target-clean when the tool reported none of the criteria the control declares in `must_not_report`. Target-clean is not a pass and not conformance: a tool with no rule for a criterion is target-clean on it by silence. A control that is not target-clean is a finding the corpus says should not be there.

| Tool | Corrected controls target-clean | Controls with a declared-criterion finding |
|---|---:|---|
| Cognium Conformis | 106/107 (99%) | `scenario-forced_colors` (1.4.1, 1.4.11) |

## This run

| Tool | Known-defect cases target-detected | Declared criteria matched | Corrected controls target-clean | Completed | Errors |
|---|---:|---:|---:|---:|---:|
| Cognium Conformis | 71/107 (66%) | 99/183 (54%) | 106/107 | 214/214 | 0 |

### Reference scorer

The reference scorer of this run's corpus revision (`check/score.mjs` at `30e5f3ea`, policy `cognium-a11y-scoring/1.1.0`, `--strict`) applied to this bundle's `result.json`. The baseline bundle quoted the scorer at `469486a4` under policy `1.0.0`, which gave 82/207 (39.6%), 82/189 (43.4%) and 0/192 for `d4eb53a`; neither the corpus revision nor the scoring policy is the same, so the two rows are not a delta.

| Tool | True-positive recall (whole corpus) | Of attempted | Corrected-control false-positive assertions |
|---|---:|---:|---:|
| Cognium Conformis | 99/262 (37.8%) | 99/183 (54.1%) | 2/278 (0.7%) |

## Execution environment

| Tool | OS | Runtime | Browser | Viewport | Run window (UTC) |
|---|---|---|---|---|---|
| Cognium Conformis | linux/x64 | Cognium Conformis browser driver 0.28.5; static-html driver 0.4.2 | Chromium 149.0.7827.55 | 1280×900 | 2026-11-24T12:54:40.163Z – 2026-11-24T13:43:24.242Z |

Differences from the Conformis d4eb53a environment:

- The corpus revision moved from `469486a4` to `30e5f3ea` (52 commits). Case classification and declared criteria are taken from the corpus this run ran against, not from the baseline bundle.
- Conformis at `6de5c4e8` uses browser driver 0.28.5 and static-html driver 0.4.2 (0.28.1 and 0.4.1 at `d4eb53a`), and packs `a11y/html@1.9.0` and `tech/html-aria@1.4.0` (`1.8.0` and `1.4.0` at `d4eb53a`).
- The scan ran unattended on the `a11y-bench` nightly workflow (cogniumhq/conformis run 45397881016) on a self-hosted Linux x86_64 runner, in the same pinned Playwright image and with the same Chromium 149.0.7827.55 and 1280x900 viewport as the baseline.
- The comparison snapshot in this bundle was assembled later from that run's published artifact, on darwin/arm64 with Node.js v25.9.0. That step re-reads and re-scores the sanitized export; it performs no measurement. `comparison.json`'s top-level `environment` block records that assembly host, while the measurement environment is `tools.cognium.source.environment`.
- This scan ran alone. It did not pass `--explore`, `--bench-run` or `--axe-cross-check`.

## Tool lineage

| Tool | Version/build | Engine family | Independence | Interface |
|---|---|---|---|---|
| Cognium Conformis | git:6de5c4e8dbc50b4de671f6760cf571b4dca11eaa; a11y/html@1.9.0 + tech/html-aria@1.4.0 | Conformis a11y/html and tech/html-aria | independent-engine | site scan with subject-declared entry pages |

## Product surface inventory

| Product surface | Version | Lane | Engine lineage | Status in this bundle | Metric treatment |
|---|---|---|---|---|---|
| Cognium Conformis | git:6de5c4e8dbc50b4de671f6760cf571b4dca11eaa; a11y/html@1.9.0 + tech/html-aria@1.4.0 | automated | Conformis a11y/html and tech/html-aria a11y/html@1.9.0 + tech/html-aria@1.4.0; independent-engine | executed | Measured as the Cognium Conformis site-scanner configuration at main over all 214 declared entry pages, zero flows, without the optional axe-core cross-check; browser passes ran in the pinned Playwright image (see method.md). |
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

Legend: `T` declared target criterion detected; `o` another automated finding only; `.` no automated finding; `E` execution error. A trailing `*` marks a cell or matched-criterion set that differs from Conformis d4eb53a.

| Case | Expected | Cognium Conformis |
|---|---|---:|
| `keyboard-div_button` | known defect | T* |
| `keyboard-safe_native_button` | corrected control | . |
| `keyboard-div_text_field` | known defect | T* |
| `keyboard-safe_native_text_field` | corrected control | . |
| `keyboard-div_date_fields` | known defect | T |
| `keyboard-safe_native_date_fields` | corrected control | . |
| `keyboard-div_travellers` | known defect | T |
| `keyboard-safe_native_travellers` | corrected control | . |
| `keyboard-div_checkbox` | known defect | T* |
| `keyboard-safe_native_checkbox` | corrected control | . |
| `keyboard-div_fare_cards` | known defect | T |
| `keyboard-safe_native_fare_options` | corrected control | . |
| `keyboard-role_tab_no_tablist` | known defect | T |
| `keyboard-safe_roving_tabindex` | corrected control | . |
| `keyboard-safe_custom_button` | corrected control | . |
| `keyboard-focus_not_visible` | known defect | T |
| `keyboard-safe_focus_visible` | corrected control | . |
| `keyboard-focus_obscured` | known defect | T |
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
| `static-input_purpose_missing` | known defect | T |
| `static-safe_input_purpose` | corrected control | . |
| `static-route_field_relationship` | known defect | T |
| `static-safe_route_field_relationship` | corrected control | . |
| `static-ambiguous_link_purpose` | known defect | T* |
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
| `patterns-disclosure` | known defect | T* |
| `patterns-safe_disclosure` | corrected control | . |
| `patterns-accordion` | known defect | T* |
| `patterns-safe_accordion` | corrected control | . |
| `patterns-tabs` | known defect | T |
| `patterns-safe_tabs` | corrected control | . |
| `patterns-dialog` | known defect | T* |
| `patterns-safe_dialog` | corrected control | . |
| `patterns-combobox` | known defect | T* |
| `patterns-safe_combobox` | corrected control | . |
| `patterns-menu` | known defect | T* |
| `patterns-safe_menu` | corrected control | . |
| `patterns-switch` | known defect | T* |
| `patterns-safe_switch` | corrected control | . |
| `patterns-alert` | known defect | . |
| `patterns-safe_alert` | corrected control | . |
| `patterns-table` | known defect | . |
| `patterns-safe_table` | corrected control | . |
| `patterns-tooltip` | known defect | . |
| `patterns-safe_tooltip` | corrected control | . |
| `patterns-breadcrumb` | known defect | T |
| `patterns-safe_breadcrumb` | corrected control | . |
| `patterns-slider` | known defect | T |
| `patterns-safe_slider` | corrected control | . |
| `patterns-listbox` | known defect | T* |
| `patterns-safe_listbox` | corrected control | o |
| `patterns-form-errors` | known defect | T* |
| `patterns-safe_form-errors` | corrected control | o |
| `patterns-required-fields` | known defect | T |
| `patterns-safe_required-fields` | corrected control | o |
| `patterns-media-captions` | known defect | T |
| `patterns-safe_media-captions` | corrected control | . |
| `color-error_color_only` | known defect | o |
| `color-safe_error_color_only` | corrected control | o |
| `color-status_color_only` | known defect | . |
| `color-safe_status_color_only` | corrected control | . |
| `color-link_color_only` | known defect | T |
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
| `color-safe_required_color_only` | corrected control | o |
| `media-video_no_captions` | known defect | T |
| `media-safe_video_no_captions` | corrected control | . |
| `media-safe_captions_present_but_poor` | corrected control | . |
| `media-audio_no_transcript` | known defect | . |
| `media-safe_audio_no_transcript` | corrected control | . |
| `media-safe_video_no_audio_description` | corrected control | . |
| `media-live_no_captions` | known defect | . |
| `media-safe_live_no_captions` | corrected control | . |
| `media-alert_by_sound_only` | known defect | . |
| `media-safe_alert_by_sound_only` | corrected control | . |
| `media-autoplay_no_control` | known defect | T |
| `media-safe_autoplay_no_control` | corrected control | . |
| `media-captions_unlabelled_track` | corrected control | . |
| `media-safe_captions_unlabelled_track` | corrected control | . |
| `state-loading` | known defect | T* |
| `state-safe_loading` | corrected control | . |
| `state-empty` | known defect | . |
| `state-safe_empty` | corrected control | . |
| `state-invalid` | known defect | T* |
| `state-safe_invalid` | corrected control | . |
| `state-corrected` | known defect | . |
| `state-safe_corrected` | corrected control | . |
| `state-submitted` | known defect | T* |
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
| `journey-signin-broken` | known defect | T |
| `journey-signin-correct` | corrected control | . |
| `journey-consistent-help-broken` | known defect | . |
| `journey-consistent-help-correct` | corrected control | . |
| `journey-destructive-broken` | known defect | . |
| `journey-destructive-correct` | corrected control | . |
| `journey-consent-broken` | known defect | T |
| `journey-consent-correct` | corrected control | . |
| `journey-navigate-broken` | known defect | . |
| `journey-navigate-correct` | corrected control | . |
| `journey-signup-broken` | known defect | o |
| `journey-signup-correct` | corrected control | . |
| `journey-checkout-broken` | known defect | . |
| `journey-checkout-correct` | corrected control | . |
| `journey-session-broken` | known defect | o |
| `journey-session-correct` | corrected control | o |
| `scenario-keyboard_trap` | known defect | . |
| `scenario-safe_keyboard_trap` | corrected control | . |
| `scenario-overlay_focus_trap` | known defect | o |
| `scenario-safe_overlay_focus_trap` | corrected control | . |
| `scenario-async_validation` | known defect | T* |
| `scenario-safe_async_validation` | corrected control | . |
| `scenario-infinite_scroll` | known defect | T* |
| `scenario-safe_infinite_scroll` | corrected control | . |
| `scenario-data_dashboard` | known defect | T |
| `scenario-safe_data_dashboard` | corrected control | . |
| `scenario-meaningful_sequence` | known defect | T |
| `scenario-safe_meaningful_sequence` | corrected control | . |
| `scenario-live_chat` | known defect | . |
| `scenario-safe_live_chat` | corrected control | . |
| `scenario-text_spacing` | known defect | T |
| `scenario-safe_text_spacing` | corrected control | . |
| `scenario-forced_colors` | corrected control | T* |
| `scenario-safe_forced_colors` | corrected control | . |
| `scenario-orientation_lock` | known defect | T |
| `scenario-safe_orientation_lock` | corrected control | . |
| `scenario-rtl_mixed_language` | known defect | T |
| `scenario-safe_rtl_mixed_language` | corrected control | . |
| `scenario-label_in_name` | known defect | T |
| `scenario-safe_label_in_name` | corrected control | . |
| `scenario-dragging_required` | known defect | T |
| `scenario-safe_dragging_required` | corrected control | . |
| `scenario-touch_targets` | known defect | T |
| `scenario-safe_touch_targets` | corrected control | . |
| `scenario-pointer_cancellation` | known defect | T |
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
| `surface-authoring_generates_bad_markup` | known defect | T |
| `surface-safe_authoring_generates_bad_markup` | corrected control | . |
| `surface-chatbot_transcript` | known defect | T |
| `surface-safe_chatbot_transcript` | corrected control | . |
| `flash-flash_10hz_large_area` | known defect | T |
| `flash-safe_flash_10hz_large_area` | corrected control | o |
| `flash-red_flash` | known defect | T |
| `flash-safe_red_flash` | corrected control | o |
| `flash-safe_flash_small_area` | corrected control | . |
| `flash-three_flashes_exactly` | corrected control | o |
| `flash-safe_three_flashes_exactly` | corrected control | o |
| `flash-animation_from_interaction` | known defect | . |
| `flash-safe_animation_from_interaction` | corrected control | . |

## Evidence and interpretation limits

- One repetition per product. This bundle does not estimate run-to-run variance; the comparison with the baseline is two single runs.
- Native product outputs are represented by per-case SHA-256 digests. Raw Cognium Conformis proofgraph evidence and raw third-party outputs are not redistributed.
- Criterion credit requires an explicit native-rule-to-WCAG mapping. A tool can report another issue and receive no target credit.
- `cannot-tell` is preserved when no mapped finding exists. It is never converted into pass.
- Durations are diagnostic only and are not a speed ranking.
- One repetition. The difference from `d4eb53a` is two single runs against two corpus revisions, so product change and ground-truth change are not separable case by case except where this bundle names them.
- `scenario-forced_colors` is an open false positive against `a11y/html@1.9.0`: the corpus states that passing 1.4.1 and 1.4.11 is the expected outcome there and the product reports both.
- `a11y/html@1.9.0` and `tech/html-aria@1.4.0` are workspace versions at `6de5c4e8`, not published registry versions; the commit is the pin. The repository is private.
- **Five of the 107 known-defect cases cannot be passed by any tool, so the detection figure above is a floor, not a measurement.** `media-alert_by_sound_only`, `ui-states/corrected`, `ui-states/offline`, `scenarios/live_chat` and `surfaces/chatbot_transcript` each declare `method: ["runtime-dom"]` with `expected_outcome: fail`, and each ships a page with **no DOM-mutating code at all** — no `textContent`, `innerHTML`, `insertAdjacent`, `appendChild` or `createElement`; one carries `onclick="void 0"`. A runtime check has nothing to find. Confirmed behaviourally: an exploring run produces an explored state for `patterns/alert` and for none of these five. Filed upstream as cogniumhq/a11y-benchmark#106. This understates every tool scored on this lane, not only Conformis.
- **This lane runs without state exploration, so part of the product is not exercised.** The nightly invokes `a11y:site` with `--subject`, `--out` and `--capture-now` and no `--explore`, although cogniumhq/conformis#822 merged to add it; cogniumhq/conformis#950 tracks the gap. Measured on this corpus, exploring costs 50m00s → 55m41s (+11.4%) and, once explored-state anchors are carried through the harness, gains exactly two cases (`scenario-keyboard_trap` 2.1.2, `scenario-change_on_input` 3.2.2), loses none and adds **no** false positives. It is not folded in here: the comparison harness asserts `!report.explore` for this lane and drops `<path>#s:<hash>` anchors, so an exploring run scores identically today. Two upstream halves are filed as cogniumhq/a11y-benchmark#108.
- The case list is still the 2026-10-13 published lane's 214 pages in its order. Cases the corpus added after `469486a4` are not measured here, so the lane is a fixed subset of a corpus that has grown.
- No flows or state drivers were declared: the lane measures loaded entry pages. The inventory probe does not click on this live run unless `--bench-run` is passed, and it was not.
- Corrections must publish a new immutable revision and retain this bundle with a supersession link.

See [method.md](method.md), [metrics.json](metrics.json), [comparison.json](comparison.json) and each product’s schema-valid `result.json`.
