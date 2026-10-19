# Accessibility benchmark: Cognium Conformis labelled HTML pages

Published run date: 2026-10-19 (America/Los_Angeles).

Classification: **maintainer-authored**. Cognium maintains this corpus and makes Conformis, so this bundle is not an independent reproduction.

This is a single-run, finite-corpus detection result for one product. It is not WCAG certification, legal advice, a universal product ranking, a performance benchmark or a guarantee about production websites. It does not replace the 2026-10-13 multi-product bundles: those pin an earlier corpus revision and earlier pack versions.

## Identity and scope

- Corpus: `cogniumhq/a11y-benchmark@v0.1.0` (`94ef3f918e80a2bbc5f586271a55f9439c9fa637`).
- Corpus manifest: `sha256:e47c343fbe2b73049756ef566d0fa7e32e0ae90d28e214b45efaf20d3ac8edfe`.
- Conformis commit: `c315d202b3561213e81f989b98104e172547189f`. The executed commit is detached and is not claimed to equal origin/main. The bench label pin was updated locally to this corpus revision; that pin is recorded in this bundle rather than as a Conformis commit.
- Packs: `a11y/html@1.6.0 + tech/html-aria@1.3.0`.
- Bench harness: `cogniumhq/conformis` `packs/a11y-html/bench/a11y-benchmark-2026-10`.
- Executed lane: 234/282 corpus cases (48 not in this denominator).
- Human and assistive-technology protocols executed: 0/8.

The lane is every corpus case whose page the Conformis bench labelled `should-report` or `must-not-report` and which declares at least one WCAG criterion. `should-report` is a known defect. `must-not-report` is a corrected control. Pages the bench itself classifies as `cannot-tell` or journey-level `other` were run, and their counts are below, but they are not in the recall denominator: a cannot-tell page has no automated pass/fail, and a journey-level broken step says the defect is not on that page alone.

| Bench class | Pages run | In this denominator |
|---|---:|---|
| should-report | 113 | yes, as known defects |
| must-not-report | 153 | yes, as corrected controls |
| cannot-tell | 19 | no |
| other (journey-level) | 34 | no |
| run errors | 0 | kept when the page is otherwise in the lane; an error is not a pass |

Corpus cases with no bench row: 20. Bench rows that are not corpus cases: 57. In-lane pages with no declared criterion: 0.

## Result

| Known-defect criteria detected | 82/171 (48%) |
| Known-defect pages with at least one declared criterion detected | 61/113 (54%) |
| Corrected controls target-clean | 120/121 |
| Completed / errors | 234/234 completed, 0 errors |

“Target-clean” means only that Conformis did not report the corrected control's declared criterion. It does not establish conformance. `cannot-tell` is preserved when no mapped finding exists. It is never converted into pass.

The bench's own score, which drops cannot-tell and journey-level pages before counting, is a different denominator. Use the fractions in this section when comparing with other bundles in this repository. The bench totals above are the product's own classification, not a second recall figure.

## Comparison with 2026-10-13-v0.1.0-latest-browser-served

Cases published on 2026-10-13 whose assertion (case id, min_criteria, must_not_report) is unchanged at corpus 94ef3f91 and which this Conformis run also executed. Other products were not re-run; their cells are the 2026-10-13 measurements on this same case set. Nu Html Checker stays in its specialized markup lane and is not given a WCAG criterion score.

Shared set: 196 cases (95 known-defect pages, 152 declared criteria, 101 corrected controls).
8 cases changed assertion and are excluded: `media-captions_unlabelled_track`, `scenario-forced_colors`, `scenario-dragging_required`, `scenario-safe_dragging_required`, `surface-email_contrast_darkmode`, `surface-safe_email_contrast_darkmode`, `flash-three_flashes_exactly`, `flash-safe_three_flashes_exactly`.
10 October cases are not in this run and are excluded: `color-chart_series_color_only`, `journey-booking-broken`, `journey-signin-broken`, `journey-consistent-help-broken`, `journey-destructive-broken`, `journey-consent-broken`, `journey-navigate-broken`, `journey-signup-broken`, `journey-checkout-broken`, `journey-session-broken`.

| Tool | Known-defect criteria detected | Corrected controls target-clean | Known-defect pages |
|---|---:|---:|---:|
| Cognium Conformis (this run) | 79/152 (52%) | 100/101 (99%) | 58/95 (61%) |
| Cognium Conformis (2026-10-13) | 70/152 (46%) | 101/101 (100%) | 46/95 (48%) |
| axe-core (2026-10-13) | 15/152 (10%) | 101/101 (100%) | 15/95 (16%) |
| Pa11y / HTML_CodeSniffer (2026-10-13) | 11/152 (7%) | 100/101 (99%) | 11/95 (12%) |
| IBM Equal Access (2026-10-13) | 31/152 (20%) | 101/101 (100%) | 30/95 (32%) |
| Lighthouse accessibility (2026-10-13) | 15/152 (10%) | 101/101 (100%) | 15/95 (16%) |
| Siteimprove Alfa (2026-10-13) | 20/152 (13%) | 100/101 (99%) | 20/95 (21%) |
| QualWeb (2026-10-13) | 58/152 (38%) | 99/101 (98%) | 37/95 (39%) |

Nu Html Checker is omitted. It is a markup validator, and the October bundle does not give it a WCAG criterion score.

Declared criteria matched by an October product and missed by this run: `capture-client_mounted` 4.1.2 (Cognium Conformis, IBM Equal Access, QualWeb); `delivery-client_js` 1.1.1 (Cognium Conformis, axe-core, Pa11y / HTML_CodeSniffer, IBM Equal Access, Lighthouse accessibility, Siteimprove Alfa, QualWeb); `delivery-client_js_delayed` 1.1.1 (Cognium Conformis, axe-core, Pa11y / HTML_CodeSniffer, IBM Equal Access, Lighthouse accessibility, Siteimprove Alfa, QualWeb); `delivery-shadow_dom_open` 1.1.1 (Cognium Conformis, axe-core, IBM Equal Access, Lighthouse accessibility, Siteimprove Alfa, QualWeb); `delivery-web_component` 1.1.1 (Cognium Conformis, axe-core, IBM Equal Access, Lighthouse accessibility, Siteimprove Alfa, QualWeb); `delivery-progressive_enhancement` 1.1.1 (Cognium Conformis, axe-core, Pa11y / HTML_CodeSniffer, IBM Equal Access, Lighthouse accessibility, Siteimprove Alfa, QualWeb); `scenario-touch_targets` 2.5.5 (Siteimprove Alfa).

Corrected controls where this run mapped a declared criterion: `scenario-safe_motion_actuation`.

## What this run did not do

- State exploration: `false`. The corpus state-driver contract was not executed.
- No other product was run. axe-core, Pa11y, IBM Equal Access, Lighthouse, Alfa, QualWeb and Nu Html Checker are unchanged from the 2026-10-13 bundles.
- axe DevTools is inventoried but was not separately executed because its free automated checks run on axe-core; counting that surface as another independent engine result would duplicate the axe family. Accessibility Insights for Web is protocol-ready but not executed: its FastPass automated checks are axe-derived, while Needs Review, Tab Stops and Assessment require separate human-guided evidence. See [the Accessibility Insights protocol](manual/accessibility-insights-for-web/PROTOCOL.md) and [run plan](manual/accessibility-insights-for-web/run-plan.json).

## Tool lineage

| Tool | Version/build | Engine family | Independence | Interface |
|---|---|---|---|---|
| Cognium Conformis | git:c315d202b3561213e81f989b98104e172547189f; a11y/html@1.6.0 + tech/html-aria@1.3.0 | Conformis a11y/html and tech/html-aria | independent-engine | one corpus page per run, no declared flows |

## Product surface inventory

| Product surface | Version | Lane | Engine lineage | Status in this bundle | Metric treatment |
|---|---|---|---|---|---|
| Cognium Conformis | git:c315d202b3561213e81f989b98104e172547189f; a11y/html@1.6.0 + tech/html-aria@1.3.0 | automated | Conformis a11y/html and tech/html-aria a11y/html@1.6.0 + tech/html-aria@1.3.0; independent-engine | executed | Measured as one labelled HTML page per run. No declared flows and no corpus state-driver execution. |
| axe DevTools - Web Accessibility Testing | 4.138.0 | automated-and-guided | axe-core (version not established); derived-surface of axe-core | not-executed | Inventoried from the 2026-10-13 bundle and not re-executed. Not an independent engine vote. |
| Accessibility Insights for Web | 2.49.0 | automated-assisted-and-manual | axe-core 4.11.3; derived-surface of axe-core | not-executed | Protocol-ready and not executed. FastPass automated checks would be an axe-derived surface, not a new engine. |

## Execution environment

| Tool | OS | Runtime | Browser | Viewport | Run window (UTC) |
|---|---|---|---|---|---|
| Cognium Conformis | linux/arm64 | Node.js v24.17.0 | Chromium 149.0.7827.0 | 1280×900 | 2026-10-19T17:41:37.696Z – 2026-10-19T18:50:37.749Z |

## Case matrix

Legend: `T` declared target criterion detected; `o` another automated finding only; `.` no automated finding; `E` execution error.

| Case | Expected | Cognium Conformis |
|---|---|---:|
| `aaa-abbreviations` | known defect | . |
| `aaa-accessible_auth_enhanced` | known defect | T |
| `aaa-concurrent_input` | known defect | o |
| `aaa-error_prevention_all` | known defect | . |
| `aaa-focus_appearance` | known defect | . |
| `aaa-focus_not_obscured_enhanced` | known defect | T |
| `aaa-help` | known defect | . |
| `aaa-identify_purpose` | known defect | o |
| `aaa-location` | known defect | . |
| `aaa-no_timing` | known defect | o |
| `aaa-re_authenticating` | known defect | . |
| `aaa-safe_abbreviations` | corrected control | . |
| `aaa-safe_accessible_auth_enhanced` | corrected control | . |
| `aaa-safe_concurrent_input` | corrected control | . |
| `aaa-safe_error_prevention_all` | corrected control | . |
| `aaa-safe_focus_appearance` | corrected control | . |
| `aaa-safe_focus_not_obscured_enhanced` | corrected control | . |
| `aaa-safe_help` | corrected control | . |
| `aaa-safe_identify_purpose` | corrected control | . |
| `aaa-safe_location` | corrected control | . |
| `aaa-safe_no_timing` | corrected control | . |
| `aaa-safe_re_authenticating` | corrected control | . |
| `aaa-safe_section_headings` | corrected control | . |
| `aaa-safe_visual_presentation` | corrected control | . |
| `aaa-section_headings` | known defect | o |
| `aaa-visual_presentation` | known defect | T |
| `capture-client_mounted` | known defect | T |
| `capture-link_heavy` | corrected control | . |
| `capture-safe_server_rendered` | corrected control | . |
| `color-disabled_state` | known defect | . |
| `color-error_color_only` | known defect | . |
| `color-link_color_only` | known defect | T |
| `color-placeholder_contrast` | known defect | T |
| `color-required_color_only` | known defect | T |
| `color-safe_chart_series_color_only` | corrected control | . |
| `color-safe_disabled_state` | corrected control | . |
| `color-safe_error_color_only` | corrected control | . |
| `color-safe_link_color_only` | corrected control | . |
| `color-safe_placeholder_contrast` | corrected control | . |
| `color-safe_required_color_only` | corrected control | . |
| `color-safe_selection_color_only` | corrected control | . |
| `color-safe_status_color_only` | corrected control | . |
| `color-selection_color_only` | known defect | . |
| `color-status_color_only` | known defect | . |
| `delivery-client_js` | known defect | T |
| `delivery-client_js_delayed` | known defect | T |
| `delivery-iframe_nested` | known defect | T |
| `delivery-iframe_same_origin` | known defect | T |
| `delivery-iframe_sandboxed` | known defect | T |
| `delivery-iframe_srcdoc` | known defect | T |
| `delivery-progressive_enhancement` | known defect | T |
| `delivery-server_html` | known defect | T |
| `delivery-shadow_dom_closed` | known defect | . |
| `delivery-shadow_dom_open` | known defect | T |
| `delivery-web_component` | known defect | T |
| `flash-animation_from_interaction` | known defect | . |
| `flash-flash_10hz_large_area` | known defect | T |
| `flash-red_flash` | known defect | T |
| `flash-safe_animation_from_interaction` | corrected control | . |
| `flash-safe_flash_10hz_large_area` | corrected control | o |
| `flash-safe_flash_small_area` | corrected control | . |
| `flash-safe_red_flash` | corrected control | o |
| `flash-safe_three_flashes_exactly` | corrected control | o |
| `flash-three_flashes_exactly` | corrected control | o |
| `journey-booking-correct` | corrected control | . |
| `journey-checkout-correct` | corrected control | . |
| `journey-consent-correct` | corrected control | . |
| `journey-consistent-help-correct` | corrected control | . |
| `journey-destructive-correct` | corrected control | . |
| `journey-navigate-correct` | corrected control | . |
| `journey-session-correct` | corrected control | . |
| `journey-signin-correct` | corrected control | . |
| `journey-signup-correct` | corrected control | . |
| `keyboard-div_button` | known defect | T |
| `keyboard-div_checkbox` | known defect | T |
| `keyboard-div_date_fields` | known defect | T |
| `keyboard-div_fare_cards` | known defect | T |
| `keyboard-div_text_field` | known defect | T |
| `keyboard-div_travellers` | known defect | T |
| `keyboard-focus_not_visible` | known defect | T |
| `keyboard-focus_obscured` | known defect | T |
| `keyboard-role_tab_no_tablist` | known defect | T |
| `keyboard-safe_custom_button` | corrected control | . |
| `keyboard-safe_focus_not_obscured` | corrected control | . |
| `keyboard-safe_focus_visible` | corrected control | . |
| `keyboard-safe_native_button` | corrected control | . |
| `keyboard-safe_native_checkbox` | corrected control | . |
| `keyboard-safe_native_date_fields` | corrected control | . |
| `keyboard-safe_native_fare_options` | corrected control | . |
| `keyboard-safe_native_text_field` | corrected control | . |
| `keyboard-safe_native_travellers` | corrected control | . |
| `keyboard-safe_roving_tabindex` | corrected control | . |
| `media-alert_by_sound_only` | known defect | . |
| `media-audio_no_transcript` | known defect | . |
| `media-autoplay_no_control` | known defect | T |
| `media-captions_unlabelled_track` | corrected control | . |
| `media-live_no_captions` | known defect | . |
| `media-safe_alert_by_sound_only` | corrected control | . |
| `media-safe_audio_no_transcript` | corrected control | . |
| `media-safe_autoplay_no_control` | corrected control | . |
| `media-safe_captions_present_but_poor` | corrected control | . |
| `media-safe_captions_unlabelled_track` | corrected control | . |
| `media-safe_live_no_captions` | corrected control | . |
| `media-safe_video_no_audio_description` | corrected control | . |
| `media-safe_video_no_captions` | corrected control | . |
| `media-video_no_captions` | known defect | . |
| `patterns-accordion` | known defect | T |
| `patterns-alert` | known defect | . |
| `patterns-breadcrumb` | known defect | . |
| `patterns-combobox` | known defect | T |
| `patterns-dialog` | known defect | T |
| `patterns-disclosure` | known defect | T |
| `patterns-form-errors` | known defect | . |
| `patterns-listbox` | known defect | T |
| `patterns-media-captions` | known defect | . |
| `patterns-menu` | known defect | T |
| `patterns-required-fields` | known defect | T |
| `patterns-safe_accordion` | corrected control | . |
| `patterns-safe_alert` | corrected control | . |
| `patterns-safe_breadcrumb` | corrected control | . |
| `patterns-safe_combobox` | corrected control | . |
| `patterns-safe_dialog` | corrected control | . |
| `patterns-safe_disclosure` | corrected control | . |
| `patterns-safe_form-errors` | corrected control | . |
| `patterns-safe_listbox` | corrected control | o |
| `patterns-safe_media-captions` | corrected control | . |
| `patterns-safe_menu` | corrected control | . |
| `patterns-safe_required-fields` | corrected control | . |
| `patterns-safe_slider` | corrected control | . |
| `patterns-safe_switch` | corrected control | . |
| `patterns-safe_table` | corrected control | . |
| `patterns-safe_tabs` | corrected control | . |
| `patterns-safe_tooltip` | corrected control | . |
| `patterns-slider` | known defect | T |
| `patterns-switch` | known defect | T |
| `patterns-table` | known defect | . |
| `patterns-tabs` | known defect | T |
| `patterns-tooltip` | known defect | . |
| `scenario-async_validation` | known defect | . |
| `scenario-change_on_focus` | known defect | T |
| `scenario-change_on_input` | known defect | . |
| `scenario-data_dashboard` | known defect | T |
| `scenario-disabled_state` | known defect | . |
| `scenario-dragging_required` | known defect | o |
| `scenario-error_suggestion` | known defect | . |
| `scenario-forced_colors` | known defect | . |
| `scenario-icon_button_contrast` | known defect | . |
| `scenario-infinite_scroll` | known defect | . |
| `scenario-keyboard_trap` | known defect | . |
| `scenario-label_in_name` | known defect | T |
| `scenario-live_chat` | known defect | . |
| `scenario-meaningful_sequence` | known defect | T |
| `scenario-motion_actuation` | known defect | T |
| `scenario-orientation_lock` | known defect | T |
| `scenario-overlay_focus_trap` | known defect | . |
| `scenario-pointer_cancellation` | known defect | T |
| `scenario-rtl_mixed_language` | known defect | T |
| `scenario-safe_async_validation` | corrected control | . |
| `scenario-safe_change_on_focus` | corrected control | . |
| `scenario-safe_change_on_input` | corrected control | . |
| `scenario-safe_data_dashboard` | corrected control | . |
| `scenario-safe_disabled_state` | corrected control | . |
| `scenario-safe_dragging_required` | corrected control | o |
| `scenario-safe_error_suggestion` | corrected control | . |
| `scenario-safe_forced_colors` | corrected control | . |
| `scenario-safe_icon_button_contrast` | corrected control | . |
| `scenario-safe_infinite_scroll` | corrected control | . |
| `scenario-safe_keyboard_trap` | corrected control | . |
| `scenario-safe_label_in_name` | corrected control | . |
| `scenario-safe_live_chat` | corrected control | . |
| `scenario-safe_meaningful_sequence` | corrected control | . |
| `scenario-safe_motion_actuation` | corrected control | T |
| `scenario-safe_orientation_lock` | corrected control | . |
| `scenario-safe_overlay_focus_trap` | corrected control | . |
| `scenario-safe_pointer_cancellation` | corrected control | . |
| `scenario-safe_rtl_mixed_language` | corrected control | . |
| `scenario-safe_swipe_required` | corrected control | o |
| `scenario-safe_text_spacing` | corrected control | . |
| `scenario-safe_touch_targets` | corrected control | . |
| `scenario-swipe_required` | known defect | o |
| `scenario-text_spacing` | known defect | T |
| `scenario-touch_targets` | known defect | T |
| `state-busy` | known defect | . |
| `state-corrected` | known defect | . |
| `state-empty` | known defect | . |
| `state-error` | known defect | . |
| `state-invalid` | known defect | . |
| `state-loading` | known defect | . |
| `state-offline` | known defect | o |
| `state-permission-denied` | known defect | . |
| `state-safe_busy` | corrected control | . |
| `state-safe_corrected` | corrected control | . |
| `state-safe_empty` | corrected control | . |
| `state-safe_error` | corrected control | . |
| `state-safe_invalid` | corrected control | . |
| `state-safe_loading` | corrected control | . |
| `state-safe_offline` | corrected control | . |
| `state-safe_permission-denied` | corrected control | . |
| `state-safe_submitted` | corrected control | . |
| `state-safe_timed-out` | corrected control | . |
| `state-submitted` | known defect | . |
| `state-timed-out` | known defect | T |
| `static-ambiguous_link_purpose` | known defect | . |
| `static-anim_no_reduced_motion` | known defect | T |
| `static-field_no_visible_label` | known defect | T |
| `static-img_no_alt` | known defect | T |
| `static-input_purpose_missing` | known defect | . |
| `static-lang_missing` | known defect | T |
| `static-page_title_missing` | known defect | T |
| `static-route_field_relationship` | known defect | T |
| `static-safe_anim_reduced_motion` | corrected control | . |
| `static-safe_descriptive_heading_and_label` | corrected control | . |
| `static-safe_field_visible_label` | corrected control | . |
| `static-safe_img` | corrected control | . |
| `static-safe_input_purpose` | corrected control | . |
| `static-safe_lang_declared` | corrected control | . |
| `static-safe_link_purpose` | corrected control | . |
| `static-safe_page_title` | corrected control | . |
| `static-safe_route_field_relationship` | corrected control | . |
| `static-safe_text_contrast` | corrected control | . |
| `static-safe_viewport` | corrected control | . |
| `static-text_low_contrast` | known defect | T |
| `static-vague_heading_and_label` | known defect | . |
| `static-viewport_no_zoom` | known defect | T |
| `surface-authoring_generates_bad_markup` | known defect | T |
| `surface-chatbot_transcript` | known defect | T |
| `surface-email_contrast_darkmode` | known defect | . |
| `surface-email_table_layout` | known defect | T |
| `surface-epub_no_metadata` | known defect | . |
| `surface-safe_authoring_generates_bad_markup` | corrected control | . |
| `surface-safe_chatbot_transcript` | corrected control | . |
| `surface-safe_email_contrast_darkmode` | corrected control | . |
| `surface-safe_email_table_layout` | corrected control | . |
| `surface-safe_epub_no_metadata` | corrected control | . |

## Shared gaps

Conformis did not map the declared criterion on 52 known-defect cases: `aaa-abbreviations`, `aaa-concurrent_input`, `aaa-error_prevention_all`, `aaa-focus_appearance`, `aaa-help`, `aaa-identify_purpose`, `aaa-location`, `aaa-no_timing`, `aaa-re_authenticating`, `aaa-section_headings`, `color-disabled_state`, `color-error_color_only`, `color-selection_color_only`, `color-status_color_only`, `delivery-shadow_dom_closed`, `flash-animation_from_interaction`, `media-alert_by_sound_only`, `media-audio_no_transcript`, `media-live_no_captions`, `media-video_no_captions`, `patterns-alert`, `patterns-breadcrumb`, `patterns-form-errors`, `patterns-media-captions`, `patterns-table`, `patterns-tooltip`, `scenario-async_validation`, `scenario-change_on_input`, `scenario-disabled_state`, `scenario-dragging_required`, `scenario-error_suggestion`, `scenario-forced_colors`, `scenario-icon_button_contrast`, `scenario-infinite_scroll`, `scenario-keyboard_trap`, `scenario-live_chat`, `scenario-overlay_focus_trap`, `scenario-swipe_required`, `state-busy`, `state-corrected`, `state-empty`, `state-error`, `state-invalid`, `state-loading`, `state-offline`, `state-permission-denied`, `state-submitted`, `static-ambiguous_link_purpose`, `static-input_purpose_missing`, `static-vague_heading_and_label`, `surface-email_contrast_darkmode`, `surface-epub_no_metadata`.

These misses are not evidence that the fixtures pass. Some require interaction, a state the bench did not drive, visual judgment, comprehension or a person using assistive technology.

## Evidence and interpretation limits

- One repetition. This bundle does not estimate run-to-run variance.
- Native output is a SHA-256 digest of each bench row. The raw row is not redistributed.
- Criterion credit requires an explicit control-to-WCAG mapping from the pack's own `supports` list. A deviation under another criterion receives no target credit.
- `examined_count` is null. Conformis counts controls, not elements examined.
- Durations are diagnostic only and are not a speed ranking.
- Corrections must publish a new immutable revision and retain this bundle.

See [method.md](method.md), [metrics.json](metrics.json), [comparison.json](comparison.json) and [cognium-conformis/result.json](cognium-conformis/result.json).
