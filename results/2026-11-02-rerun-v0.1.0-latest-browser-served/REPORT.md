# Accessibility benchmark re-run: latest browser-served lane from committed inputs

Published run date: 2026-11-02 (America/Los_Angeles).

Classification: **maintainer-authored**. Cognium maintains this corpus and makes Cognium Conformis, so this bundle is not an independent reproduction.

This is a single-run, finite-corpus detection comparison. It is not WCAG certification, legal advice, a universal product ranking, a performance benchmark or a guarantee about production websites.

This bundle repeats the 2026-10-13 latest-browser-served lane with every tool, case list, subject declaration and mapping taken from a commit, at the same product versions and corpus revision, to test whether that result can be repeated from committed inputs. Nu Html Checker, a markup-signal lane outside the criterion metrics, was not repeated.

## Identity and scope

- Corpus: `cogniumhq/a11y-benchmark@v0.1.0` (`469486a4811c5055de9d2524ede1ca520c2774c8`).
- Corpus manifest: `sha256:a4e01bcd1281bfb1c1951657a815ad2da053e5e233c1d937dd7ed7227c03c9f0`.
- Runner: `cogniumhq/a11y-benchmark` `comparison/` at `101112de2a3ba81af328c562363aac74181ea324` ([review PR](https://github.com/cogniumhq/a11y-benchmark/pull/72)). Package lock SHA-256: `sha256:f5ccf82768fc24e7a232bc44363d2e573868091833b0a71189dcdb06f780a533`.
- Cognium Conformis run source: `cogniumhq/conformis@28f9e14db3a095f3d5983a947f233c99772a2b25` (private). This is the 2026-10-13 run's revision, chosen to reproduce that run. Main was `7fa92329`, 733 commits later, on 2026-11-02; it is measured in `2026-11-02-rerun-v0.1.0-latest-browser-served-conformis-main`.
- Baseline: [`2026-10-13-v0.1.0-latest-browser-served`](../2026-10-13-v0.1.0-latest-browser-served/REPORT.md).
- Executed automated lane: 214/270 corpus cases (56 not executed), the baseline's case list in its order.
- Human and assistive-technology protocols executed: 0/8.

The unexecuted cases and protocols are neither passes nor failures.

## Comparison with 2026-10-13

Each row compares a product in this run with its column in `2026-10-13-v0.1.0-latest-browser-served` (2026-10-13), case by case. A case differs when its cell (`T`, `o`, `.`, `E`) or its matched declared criteria differ.

| Tool | Known-defect cases target-detected (2026-10-13 → this run) | Declared criteria matched | Corrected controls target-clean | Errors | Cases that differ |
|---|---:|---:|---:|---:|---:|
| Cognium Conformis | 47/110 → 47/110 | 71/189 → 71/189 | 104/104 → 104/104 | 0 → 0 | 2 |
| axe-core | 15/110 → 15/110 | 15/189 → 15/189 | 104/104 → 104/104 | 0 → 0 | 0 |
| Pa11y / HTML_CodeSniffer | 11/110 → 11/110 | 11/189 → 11/189 | 103/104 → 103/104 | 0 → 0 | 0 |
| IBM Equal Access | 30/110 → 30/110 | 31/189 → 31/189 | 104/104 → 104/104 | 0 → 0 | 0 |
| Lighthouse accessibility | 15/110 → 15/110 | 15/189 → 15/189 | 104/104 → 104/104 | 0 → 0 | 0 |
| Siteimprove Alfa | 20/110 → 20/110 | 20/189 → 20/189 | 103/104 → 103/104 | 0 → 0 | 0 |
| QualWeb | 38/110 → 38/110 | 59/189 → 59/189 | 102/104 → 102/104 | 0 → 0 | 0 |

All seven configurations give the same lane metrics as on 2026-10-13. Six give the same outcome on every one of the 214 cases. Cognium Conformis differs on two cases, listed below; neither changes a metric. Below the case level, one QualWeb native finding differs: on `static-anim_no_reduced_motion` the contrast rule `act-rules:QW-ACT-R37` (1.4.3, not the declared 2.2.2) fired in this run and not on 2026-10-13; that cell was `o` in both runs.

### Cognium Conformis: cases that differ

| Case | Expected | Declared criteria | 2026-10-13 | This run |
|---|---|---|---|---|
| `media-live_no_captions` | known defect | 1.2.4 | . (none) | o (none) |
| `media-safe_live_no_captions` | corrected control | 1.2.4 | . (none) | o (none) |

On both live-caption pages the keyboard-trap control `AX-08/2.1.2` reported a deviation under 2.1.2, which neither page declares, so each cell moves from `.` to `o` and no metric changes. The same control reported the same deviation on `media-video_no_captions` in both runs. The browser build differs between the runs (Chromium 153.0.8010.12 here, 149.0.7827.0 on 2026-10-13), and how Chromium exposes a media element to keyboard focus is a plausible source; this run does not isolate it.

## Corrected controls: target-clean rate

The lane has 104 corrected controls. A control is target-clean when the tool reported none of the criteria the control declares in `must_not_report`. Target-clean is not a pass and not conformance: a tool with no rule for a criterion is target-clean on it by silence. A control that is not target-clean is a finding the corpus says should not be there.

| Tool | Corrected controls target-clean | Controls with a declared-criterion finding |
|---|---:|---|
| Cognium Conformis | 104/104 (100%) | none |
| axe-core | 104/104 (100%) | none |
| Pa11y / HTML_CodeSniffer | 103/104 (99%) | `surface-safe_email_table_layout` (1.3.1) |
| IBM Equal Access | 104/104 (100%) | none |
| Lighthouse accessibility | 104/104 (100%) | none |
| Siteimprove Alfa | 103/104 (99%) | `scenario-safe_touch_targets` (2.5.5) |
| QualWeb | 102/104 (98%) | `scenario-safe_data_dashboard` (1.1.1); `surface-safe_email_table_layout` (1.3.1) |

## This run

| Tool | Known-defect cases target-detected | Declared criteria matched | Corrected controls target-clean | Completed | Errors |
|---|---:|---:|---:|---:|---:|
| Cognium Conformis | 47/110 (43%) | 71/189 (38%) | 104/104 | 214/214 | 0 |
| axe-core | 15/110 (14%) | 15/189 (8%) | 104/104 | 214/214 | 0 |
| Pa11y / HTML_CodeSniffer | 11/110 (10%) | 11/189 (6%) | 103/104 | 214/214 | 0 |
| IBM Equal Access | 30/110 (27%) | 31/189 (16%) | 104/104 | 214/214 | 0 |
| Lighthouse accessibility | 15/110 (14%) | 15/189 (8%) | 104/104 | 214/214 | 0 |
| Siteimprove Alfa | 20/110 (18%) | 20/189 (11%) | 103/104 | 214/214 | 0 |
| QualWeb | 38/110 (35%) | 59/189 (31%) | 102/104 | 214/214 | 0 |

The union of these 7 configurations detected a declared criterion on 50/110 (45%) known-defect cases. Lighthouse is axe-derived and Pa11y wraps HTML_CodeSniffer, so the union is not a count of independent engines.

### Reference scorer

The reference scorer of the pinned corpus revision (`check/score.mjs` at `469486a4`, policy `cognium-a11y-scoring/1.0.0`, `--strict`), applied to each product's `result.json` in this bundle. Recall counts the 18 known-defect assertions outside this lane as not run; false positives are assertion-level, over the 192 `must_not_report` assertions of the 104 corrected controls. The 2026-10-13 bundle's result files give the same figures.

| Tool | True-positive recall (whole corpus) | Of attempted | Corrected-control false-positive assertions |
|---|---:|---:|---:|
| Cognium Conformis | 71/207 (34.3%) | 71/189 (37.6%) | 0/192 (0.0%) |
| axe-core | 15/207 (7.2%) | 15/189 (7.9%) | 0/192 (0.0%) |
| Pa11y / HTML_CodeSniffer | 11/207 (5.3%) | 11/189 (5.8%) | 1/192 (0.5%) |
| IBM Equal Access | 31/207 (15.0%) | 31/189 (16.4%) | 0/192 (0.0%) |
| Lighthouse accessibility | 15/207 (7.2%) | 15/189 (7.9%) | 0/192 (0.0%) |
| Siteimprove Alfa | 20/207 (9.7%) | 20/189 (10.6%) | 1/192 (0.5%) |
| QualWeb | 59/207 (28.5%) | 59/189 (31.2%) | 2/192 (1.0%) |

## Inputs that were not committed before this run

What the 2026-10-13 run depended on that a reader could not obtain from a commit, and where each input is pinned now.

| Input | Before | Now |
|---|---|---|
| Comparison harness: adapters, configurations, native-rule-to-WCAG mappings | A private repository (`cogniumhq/a11y-validation` at `32edddfa`) | `comparison/run.mjs`, restated; the one addition records a Lighthouse runtime error as an execution error (none occurred) |
| Package lock for the seven tools | In the private harness repository | `comparison/package.json` and `package-lock.json`; the runner refuses a different install |
| IBM Equal Access rule engine | Downloaded at run time from a CDN: the archive list of the moving `accessibility-checker-engine@next` tag (4.0.29), then engine 4.0.27 for archive `13July2026`. The published label 4.0.34 is the checker, not the rule engine | Both are locked packages, served to the checker on 127.0.0.1 |
| The 214-case lane | Projected after the run from a `--suite all` run by dropping the 38 pages the corpus server did not serve; the projection was not committed | `comparison/suites/latest-browser-served.json`, checked against the corpus at the pinned revision |
| Corpus revision | The harness's committed fixture lock named an earlier revision (`0105c659`); `469486a4` was supplied as a local checkout | `comparison/pins.json`; the runner refuses another revision or manifest, or a checkout with local changes |
| Cognium Conformis subject declaration (214 entry pages, origin, no flows) | A local file | `comparison/cognium/latest-browser-served-subject.yaml` |
| Cognium Conformis command and importer | The command was not recorded; the importer was in the private harness | `comparison/README.md` and `comparison/import-cognium.mjs` |
| Cognium Conformis runtime | Private repository at `28f9e14d` | Unchanged: still private, pinned by commit. Repeating the Cognium column needs access to that repository |
| Browser builds | Chromium 149.0.7827.55 (Playwright 1.61.1) and 149.0.7827.0 (Conformis image), recorded but not obtainable from a commit | Recorded; the runner takes `--chromium` and records the version. This run used 153.0.8010.12 |

## Execution environment

| Tool | OS | Runtime | Browser | Viewport | Run window (UTC) |
|---|---|---|---|---|---|
| Cognium Conformis | linux/x64 | Cognium Conformis browser driver 0.9.13; static-html driver 0.2.3 | Chromium 153.0.8010.12 | 1280×900 | 2026-11-03T04:39:35.422Z – 2026-11-03T04:55:27.816Z |
| axe-core | linux/x64 | Node.js v22.23.4 | Chromium 153.0.8010.12 | 1280×900 | 2026-11-03T04:35:41.547Z – 2026-11-03T04:39:14.199Z |
| Pa11y / HTML_CodeSniffer | linux/x64 | Node.js v22.23.4 | Chromium 153.0.8010.12 | 1280×900 | 2026-11-03T04:39:14.200Z – 2026-11-03T04:43:35.705Z |
| IBM Equal Access | linux/x64 | Node.js v22.23.4 | Chromium 153.0.8010.12 | 1280×900 | 2026-11-03T04:43:35.705Z – 2026-11-03T04:47:07.168Z |
| Lighthouse accessibility | linux/x64 | Node.js v22.23.4 | Chromium 153.0.8010.12 | 1280×900 | 2026-11-03T04:47:07.168Z – 2026-11-03T05:05:42.261Z |
| Siteimprove Alfa | linux/x64 | Node.js v22.23.4 | Chromium 153.0.8010.12 | 1280×900 | 2026-11-03T05:05:42.262Z – 2026-11-03T05:10:07.395Z |
| QualWeb | linux/x64 | Node.js v22.23.4 | Chromium 153.0.8010.12 | 1280×900 | 2026-11-03T05:10:07.395Z – 2026-11-03T05:15:49.330Z |

Differences from the 2026-10-13 environment:

- Linux on x86_64 with 2 vCPUs for every tool. On 2026-10-13 the direct tools ran on macOS/arm64 and Cognium Conformis on Linux/arm64.
- Chromium 153.0.8010.12 for every tool, against 149.0.7827.55 (direct tools) and 149.0.7827.0 (Conformis). The 2026-10-13 builds could not be installed: browser downloads and the image registry were unreachable from the run host.
- Node.js v22.23.4, against v25.9.0 for the direct tools.
- Cognium Conformis browser passes ran in place through a local stand-in for `docker`, not in the pinned Playwright image: same mounts, same declared environment, no network where the pass declares none; the host's Chromium and fonts instead of the image's. See method.md.
- Host fonts (Conformis records `sans-serif` as Inter) instead of the macOS and image font sets.
- IBM rules served from the package lock on 127.0.0.1 instead of a CDN; the archive label on every page matches 2026-10-13.
- The direct tools and the Conformis scan ran concurrently on the same CPUs.

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

## Product surface inventory

| Product surface | Version | Lane | Engine lineage | Status in this bundle | Metric treatment |
|---|---|---|---|---|---|
| Cognium Conformis | git:28f9e14db3a095f3d5983a947f233c99772a2b25; a11y/html@1.2.1 + tech/html-aria@1.2.1 | automated | Conformis a11y/html and tech/html-aria a11y/html@1.2.1 + tech/html-aria@1.2.1; independent-engine | executed | Measured as the Cognium Conformis site-scanner configuration of the 2026-10-13 run over all 214 declared entry pages, zero flows; browser passes ran in place on the host Chromium (see method.md). |
| axe-core | 4.14.0 | automated | axe-core 4.14.0; independent-engine | executed | Measured directly through Playwright page injection and counted once as the axe-core engine result. |
| axe DevTools - Web Accessibility Testing | 4.138.0 | automated-and-guided | axe-core (version not established); derived-surface of axe-core | not-executed | Inventoried but not counted as a second independent engine vote; a future extension run must pin the edition, enabled features and embedded engine version. |
| Pa11y / HTML_CodeSniffer | 10.0.0 | automated | HTML_CodeSniffer 2.6.0; wrapper of HTML_CodeSniffer | executed | Measured through Pa11y's HTML_CodeSniffer runner; the optional axe runner was excluded to avoid duplicate axe measurements. |
| IBM Equal Access | 4.0.34 | automated | IBM Equal Access Accessibility Checker accessibility-checker-engine 4.0.27 (rule archive 13July2026); independent-engine | executed | Measured directly with the WCAG 2.2 policy. Checker 4.0.34 with ruleArchive versioned selects archive 13July2026, engine 4.0.27; both the archive list and the engine came from the package lock and were served locally. |
| Lighthouse accessibility | 13.5.0 | automated | axe-core-derived Lighthouse audits 4.14.0; derived-configuration of axe-core | executed | Measured as a product configuration but excluded from claims about independent engine agreement. |
| Siteimprove Alfa | rules 0.119.0; Puppeteer integration 0.84.2 | automated | Alfa ACT rules rules 0.119.0; Puppeteer integration 0.84.2; independent-engine | executed | Measured through Alfa's stable ACT-rule set against each Puppeteer page snapshot. |
| QualWeb | core 0.9.5; ACT rules 0.8.6; WCAG techniques 0.4.9; best practices 0.7.13 | automated | QualWeb ACT rules, WCAG techniques and best practices core 0.9.5; ACT rules 0.8.6; WCAG techniques 0.4.9; best practices 0.7.13; independent-engine | executed | Measured with the ACT rules, WCAG techniques and best-practice modules enabled. |
| Nu Html Checker | 26.10.12 (0a70d65); image sha256:8f21030474e68e06905cfa801b37376e99c0e37867c653c5b6cd7e2dcaf3f503 | automated | v.Nu HTML, CSS and SVG conformance checker 26.10.12 (0a70d65); independent-engine | not-executed | Not executed in this re-run: its pinned container image could not be pulled on the run host. It is a specialized markup-signal lane and never enters WCAG criterion metrics. |
| Accessibility Insights for Web | 2.49.0 | automated-assisted-and-manual | axe-core 4.11.3; derived-surface of axe-core | not-executed | FastPass automated checks are axe-derived and must not be counted as an independent engine vote. Needs Review, Tab Stops and Assessment remain separate human-guided results. |

axe DevTools is inventoried but was not separately executed because its free automated checks run on axe-core; counting that surface as another independent engine result would duplicate the axe family. Accessibility Insights for Web is protocol-ready but not executed: its FastPass automated checks are axe-derived, while Needs Review, Tab Stops and Assessment require separate human-guided evidence. See [the Accessibility Insights protocol](manual/accessibility-insights-for-web/PROTOCOL.md) and [run plan](manual/accessibility-insights-for-web/run-plan.json).

## Case matrix

Legend: `T` declared target criterion detected; `o` another automated finding only; `.` no automated finding; `E` execution error. A trailing `*` marks a cell or matched-criterion set that differs from 2026-10-13.

| Case | Expected | Cognium Conformis | axe-core | Pa11y / HTML_CodeSniffer | IBM Equal Access | Lighthouse accessibility | Siteimprove Alfa | QualWeb |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| `keyboard-div_button` | known defect | T | . | . | T | . | o | T |
| `keyboard-safe_native_button` | corrected control | . | . | . | . | . | o | o |
| `keyboard-div_text_field` | known defect | T | . | . | T | . | o | T |
| `keyboard-safe_native_text_field` | corrected control | . | . | . | . | . | o | o |
| `keyboard-div_date_fields` | known defect | T | . | . | o | . | o | T |
| `keyboard-safe_native_date_fields` | corrected control | o | . | . | . | . | o | o |
| `keyboard-div_travellers` | known defect | T | . | . | o | . | o | T |
| `keyboard-safe_native_travellers` | corrected control | . | . | . | . | . | o | o |
| `keyboard-div_checkbox` | known defect | T | . | . | T | . | o | T |
| `keyboard-safe_native_checkbox` | corrected control | . | . | . | . | . | o | o |
| `keyboard-div_fare_cards` | known defect | T | . | . | o | . | o | T |
| `keyboard-safe_native_fare_options` | corrected control | . | . | . | . | . | o | o |
| `keyboard-role_tab_no_tablist` | known defect | T | o | . | o | o | o | o |
| `keyboard-safe_roving_tabindex` | corrected control | . | . | . | . | . | o | o |
| `keyboard-safe_custom_button` | corrected control | . | . | . | . | . | o | o |
| `keyboard-focus_not_visible` | known defect | T | . | . | . | . | o | o |
| `keyboard-safe_focus_visible` | corrected control | . | . | . | . | . | o | o |
| `keyboard-focus_obscured` | known defect | o | . | . | . | . | o | o |
| `keyboard-safe_focus_not_obscured` | corrected control | . | . | . | . | . | o | o |
| `capture-client_mounted` | known defect | T | o | . | T | o | o | T |
| `capture-safe_server_rendered` | corrected control | . | . | . | . | . | o | o |
| `capture-link_heavy` | corrected control | . | . | o | . | . | o | o |
| `static-viewport_no_zoom` | known defect | T | T | . | . | T | T | T |
| `static-safe_viewport` | corrected control | . | . | . | . | . | o | o |
| `static-img_no_alt` | known defect | T | T | T | T | T | T | T |
| `static-safe_img` | corrected control | . | . | . | . | . | o | o |
| `static-anim_no_reduced_motion` | known defect | T | o | . | o | . | o | o |
| `static-safe_anim_reduced_motion` | corrected control | . | . | . | . | . | o | o |
| `static-field_no_visible_label` | known defect | T | . | o | . | . | o | T |
| `static-safe_field_visible_label` | corrected control | . | . | . | . | . | o | o |
| `static-lang_missing` | known defect | T | T | T | T | T | T | T |
| `static-safe_lang_declared` | corrected control | . | . | . | . | . | o | o |
| `static-page_title_missing` | known defect | T | T | T | T | T | T | T |
| `static-safe_page_title` | corrected control | . | . | . | . | . | o | o |
| `static-text_low_contrast` | known defect | T | T | T | T | T | T | T |
| `static-safe_text_contrast` | corrected control | . | . | . | . | . | o | o |
| `static-input_purpose_missing` | known defect | . | . | . | . | . | o | o |
| `static-safe_input_purpose` | corrected control | . | . | . | . | . | o | o |
| `static-route_field_relationship` | known defect | o | . | . | . | . | o | T |
| `static-safe_route_field_relationship` | corrected control | . | . | . | . | . | o | o |
| `static-ambiguous_link_purpose` | known defect | . | . | o | . | . | o | o |
| `static-safe_link_purpose` | corrected control | . | . | o | . | . | o | o |
| `static-vague_heading_and_label` | known defect | . | . | . | . | . | o | o |
| `static-safe_descriptive_heading_and_label` | corrected control | . | . | . | . | . | o | o |
| `delivery-server_html` | known defect | T | T | T | T | T | T | T |
| `delivery-client_js` | known defect | T | T | T | T | T | T | T |
| `delivery-client_js_delayed` | known defect | T | T | T | T | T | T | T |
| `delivery-iframe_same_origin` | known defect | T | . | . | T | . | T | T |
| `delivery-iframe_srcdoc` | known defect | T | . | . | T | . | T | T |
| `delivery-iframe_sandboxed` | known defect | T | . | . | T | . | T | T |
| `delivery-iframe_nested` | known defect | T | . | . | T | . | T | T |
| `delivery-shadow_dom_open` | known defect | T | T | . | T | T | T | T |
| `delivery-shadow_dom_closed` | known defect | . | . | . | . | . | o | o |
| `delivery-web_component` | known defect | T | T | . | T | T | T | T |
| `delivery-progressive_enhancement` | known defect | T | T | T | T | T | T | T |
| `patterns-disclosure` | known defect | T | . | . | T | . | o | T |
| `patterns-safe_disclosure` | corrected control | . | . | . | . | . | o | o |
| `patterns-accordion` | known defect | T | . | . | T | . | o | T |
| `patterns-safe_accordion` | corrected control | . | . | . | . | . | o | o |
| `patterns-tabs` | known defect | T | o | . | o | o | o | o |
| `patterns-safe_tabs` | corrected control | . | . | . | . | . | o | o |
| `patterns-dialog` | known defect | T | . | . | T | . | o | T |
| `patterns-safe_dialog` | corrected control | . | . | . | . | . | o | o |
| `patterns-combobox` | known defect | T | . | . | T | . | o | T |
| `patterns-safe_combobox` | corrected control | . | . | . | . | . | o | o |
| `patterns-menu` | known defect | T | . | . | T | . | o | T |
| `patterns-safe_menu` | corrected control | . | . | . | . | . | o | o |
| `patterns-switch` | known defect | T | . | . | T | . | o | T |
| `patterns-safe_switch` | corrected control | . | . | . | . | . | o | o |
| `patterns-alert` | known defect | . | . | . | . | . | o | o |
| `patterns-safe_alert` | corrected control | . | . | . | . | . | o | o |
| `patterns-table` | known defect | . | . | . | . | . | o | o |
| `patterns-safe_table` | corrected control | . | . | . | . | . | o | o |
| `patterns-tooltip` | known defect | . | . | . | . | . | o | o |
| `patterns-safe_tooltip` | corrected control | . | . | . | . | . | o | o |
| `patterns-breadcrumb` | known defect | . | . | . | . | . | o | o |
| `patterns-safe_breadcrumb` | corrected control | . | . | o | . | . | o | o |
| `patterns-slider` | known defect | . | . | . | . | . | o | T |
| `patterns-safe_slider` | corrected control | . | . | . | . | . | o | o |
| `patterns-listbox` | known defect | T | . | . | T | . | o | T |
| `patterns-safe_listbox` | corrected control | o | . | . | . | . | o | o |
| `patterns-form-errors` | known defect | . | . | o | . | . | o | o |
| `patterns-safe_form-errors` | corrected control | . | . | . | . | . | o | o |
| `patterns-required-fields` | known defect | T | . | o | . | . | o | o |
| `patterns-safe_required-fields` | corrected control | . | . | o | . | . | o | o |
| `patterns-media-captions` | known defect | . | . | . | . | . | o | o |
| `patterns-safe_media-captions` | corrected control | . | . | o | . | . | o | o |
| `color-error_color_only` | known defect | . | . | o | . | . | o | o |
| `color-safe_error_color_only` | corrected control | . | . | o | . | . | o | o |
| `color-status_color_only` | known defect | . | . | . | . | . | o | o |
| `color-safe_status_color_only` | corrected control | . | . | . | . | . | o | o |
| `color-link_color_only` | known defect | . | . | o | . | . | o | o |
| `color-safe_link_color_only` | corrected control | . | . | o | . | . | o | o |
| `color-chart_series_color_only` | known defect | . | . | o | . | . | o | o |
| `color-safe_chart_series_color_only` | corrected control | . | . | . | . | . | o | o |
| `color-selection_color_only` | known defect | . | . | . | . | . | o | o |
| `color-safe_selection_color_only` | corrected control | . | . | . | . | . | o | o |
| `color-placeholder_contrast` | known defect | T | . | o | . | . | o | o |
| `color-safe_placeholder_contrast` | corrected control | . | . | . | . | . | o | o |
| `color-disabled_state` | known defect | o | o | o | o | o | o | o |
| `color-safe_disabled_state` | corrected control | . | . | . | . | . | o | o |
| `color-required_color_only` | known defect | T | . | o | . | . | o | o |
| `color-safe_required_color_only` | corrected control | . | . | o | . | . | o | o |
| `media-video_no_captions` | known defect | o | . | . | . | . | o | o |
| `media-safe_video_no_captions` | corrected control | o | . | . | . | . | o | o |
| `media-safe_captions_present_but_poor` | corrected control | o | . | . | . | . | o | o |
| `media-audio_no_transcript` | known defect | o | . | . | . | . | o | o |
| `media-safe_audio_no_transcript` | corrected control | o | . | . | . | . | o | o |
| `media-safe_video_no_audio_description` | corrected control | o | . | . | . | . | o | o |
| `media-live_no_captions` | known defect | o* | . | . | . | . | o | o |
| `media-safe_live_no_captions` | corrected control | o* | . | . | . | . | o | o |
| `media-alert_by_sound_only` | known defect | . | . | . | . | . | o | o |
| `media-safe_alert_by_sound_only` | corrected control | . | . | . | . | . | o | o |
| `media-autoplay_no_control` | known defect | T | . | . | . | . | o | o |
| `media-safe_autoplay_no_control` | corrected control | o | . | . | . | . | o | o |
| `media-captions_unlabelled_track` | known defect | o | . | . | . | . | o | o |
| `media-safe_captions_unlabelled_track` | corrected control | o | . | . | . | . | o | o |
| `state-loading` | known defect | . | . | . | . | . | o | o |
| `state-safe_loading` | corrected control | . | . | . | . | . | o | o |
| `state-empty` | known defect | . | . | o | . | . | o | o |
| `state-safe_empty` | corrected control | . | . | o | . | . | o | o |
| `state-invalid` | known defect | . | . | o | . | . | o | o |
| `state-safe_invalid` | corrected control | . | . | . | . | . | o | o |
| `state-corrected` | known defect | . | . | o | . | . | o | o |
| `state-safe_corrected` | corrected control | . | . | o | . | . | o | o |
| `state-submitted` | known defect | . | . | . | . | . | o | o |
| `state-safe_submitted` | corrected control | . | . | . | . | . | o | o |
| `state-error` | known defect | . | . | . | . | . | o | o |
| `state-safe_error` | corrected control | . | . | o | . | . | o | o |
| `state-offline` | known defect | o | o | o | o | o | o | o |
| `state-safe_offline` | corrected control | . | . | o | . | . | o | o |
| `state-permission-denied` | known defect | . | . | . | . | . | o | o |
| `state-safe_permission-denied` | corrected control | . | . | . | . | . | o | o |
| `state-timed-out` | known defect | T | T | T | o | T | T | T |
| `state-safe_timed-out` | corrected control | . | . | o | . | . | o | o |
| `state-busy` | known defect | . | . | o | . | . | o | o |
| `state-safe_busy` | corrected control | . | . | . | . | . | o | o |
| `journey-booking-broken` | known defect | . | . | . | . | . | o | o |
| `journey-booking-correct` | corrected control | . | . | . | . | . | o | o |
| `journey-signin-broken` | known defect | . | . | . | . | . | o | o |
| `journey-signin-correct` | corrected control | . | . | o | o | . | o | o |
| `journey-consistent-help-broken` | known defect | . | . | . | . | . | o | o |
| `journey-consistent-help-correct` | corrected control | . | . | . | . | . | o | o |
| `journey-destructive-broken` | known defect | . | . | . | . | . | o | o |
| `journey-destructive-correct` | corrected control | . | . | . | . | . | o | o |
| `journey-consent-broken` | known defect | T | . | . | o | . | o | T |
| `journey-consent-correct` | corrected control | . | . | . | . | . | o | o |
| `journey-navigate-broken` | known defect | . | . | . | . | . | o | o |
| `journey-navigate-correct` | corrected control | . | . | . | . | . | o | o |
| `journey-signup-broken` | known defect | . | . | . | . | . | o | o |
| `journey-signup-correct` | corrected control | . | . | . | . | . | o | o |
| `journey-checkout-broken` | known defect | . | . | . | . | . | o | o |
| `journey-checkout-correct` | corrected control | . | . | . | . | . | o | o |
| `journey-session-broken` | known defect | . | . | . | . | . | o | o |
| `journey-session-correct` | corrected control | . | . | . | . | . | o | o |
| `scenario-keyboard_trap` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_keyboard_trap` | corrected control | . | . | . | . | . | o | o |
| `scenario-overlay_focus_trap` | known defect | o | . | o | o | . | o | o |
| `scenario-safe_overlay_focus_trap` | corrected control | . | . | o | . | . | o | o |
| `scenario-async_validation` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_async_validation` | corrected control | . | . | . | . | . | o | o |
| `scenario-infinite_scroll` | known defect | . | . | o | . | . | o | o |
| `scenario-safe_infinite_scroll` | corrected control | . | . | o | . | . | o | o |
| `scenario-data_dashboard` | known defect | . | . | . | T | . | o | o |
| `scenario-safe_data_dashboard` | corrected control | . | . | . | . | . | o | T |
| `scenario-meaningful_sequence` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_meaningful_sequence` | corrected control | . | . | . | . | . | o | o |
| `scenario-live_chat` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_live_chat` | corrected control | . | . | . | . | . | o | o |
| `scenario-text_spacing` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_text_spacing` | corrected control | . | . | . | . | . | o | o |
| `scenario-forced_colors` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_forced_colors` | corrected control | . | . | . | . | . | o | o |
| `scenario-orientation_lock` | known defect | T | . | . | . | o | o | o |
| `scenario-safe_orientation_lock` | corrected control | . | . | . | . | . | o | o |
| `scenario-rtl_mixed_language` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_rtl_mixed_language` | corrected control | . | . | . | . | . | o | o |
| `scenario-label_in_name` | known defect | T | T | . | T | T | T | T |
| `scenario-safe_label_in_name` | corrected control | . | . | . | . | . | o | o |
| `scenario-dragging_required` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_dragging_required` | corrected control | . | . | . | . | . | o | o |
| `scenario-touch_targets` | known defect | T | . | o | T | . | T | o |
| `scenario-safe_touch_targets` | corrected control | . | . | o | . | . | T | o |
| `scenario-pointer_cancellation` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_pointer_cancellation` | corrected control | . | . | . | . | . | o | o |
| `scenario-change_on_focus` | known defect | T | . | . | . | . | o | o |
| `scenario-safe_change_on_focus` | corrected control | . | . | . | . | . | o | o |
| `scenario-change_on_input` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_change_on_input` | corrected control | . | . | . | . | . | o | o |
| `scenario-error_suggestion` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_error_suggestion` | corrected control | . | . | . | . | . | o | o |
| `scenario-disabled_state` | known defect | o | o | o | o | o | o | o |
| `scenario-safe_disabled_state` | corrected control | . | . | . | . | . | o | o |
| `scenario-motion_actuation` | known defect | . | . | . | . | . | o | o |
| `scenario-safe_motion_actuation` | corrected control | . | . | . | . | . | o | o |
| `surface-email_table_layout` | known defect | T | T | T | T | T | T | T |
| `surface-safe_email_table_layout` | corrected control | . | . | T | . | . | o | T |
| `surface-email_contrast_darkmode` | known defect | . | . | . | . | . | o | o |
| `surface-safe_email_contrast_darkmode` | corrected control | . | . | . | . | . | o | o |
| `surface-epub_no_metadata` | known defect | o | o | o | o | o | o | o |
| `surface-safe_epub_no_metadata` | corrected control | . | . | . | . | . | o | o |
| `surface-authoring_generates_bad_markup` | known defect | T | T | T | T | T | T | T |
| `surface-safe_authoring_generates_bad_markup` | corrected control | . | . | . | . | . | o | o |
| `surface-chatbot_transcript` | known defect | T | . | . | o | . | o | T |
| `surface-safe_chatbot_transcript` | corrected control | . | . | o | . | . | o | o |
| `flash-flash_10hz_large_area` | known defect | . | . | . | . | . | o | o |
| `flash-safe_flash_10hz_large_area` | corrected control | . | . | . | . | . | o | o |
| `flash-red_flash` | known defect | . | . | . | . | . | o | o |
| `flash-safe_red_flash` | corrected control | . | . | . | . | . | o | o |
| `flash-safe_flash_small_area` | corrected control | . | . | . | . | . | o | o |
| `flash-three_flashes_exactly` | known defect | . | . | . | . | . | o | o |
| `flash-safe_three_flashes_exactly` | corrected control | . | . | . | . | . | o | o |
| `flash-animation_from_interaction` | known defect | . | . | . | . | . | o | o |
| `flash-safe_animation_from_interaction` | corrected control | . | . | . | . | . | o | o |

## Evidence and interpretation limits

- One repetition per product. This bundle does not estimate run-to-run variance; the comparison with the baseline is two single runs.
- Native product outputs are represented by per-case SHA-256 digests. Raw Cognium Conformis proofgraph evidence and raw third-party outputs are not redistributed.
- Criterion credit requires an explicit native-rule-to-WCAG mapping. A tool can report another issue and receive no target credit.
- `cannot-tell` is preserved when no mapped finding exists. It is never converted into pass.
- Durations are diagnostic only and are not a speed ranking.
- This run reproduces counts and case outcomes under a different OS, CPU architecture, browser build and font set. It does not show those factors have no effect on other corpora or other product versions.
- Nu Html Checker was not executed. It is outside the criterion metrics.
- No flows or state drivers were declared, as on 2026-10-13: the lane measures loaded entry pages.
- The Cognium Conformis column depends on a private runtime. The other six columns can be repeated from public inputs alone.
- Corrections must publish a new immutable revision and retain this bundle with a supersession link.

See [method.md](method.md), [metrics.json](metrics.json), [comparison.json](comparison.json) and each product’s schema-valid `result.json`.
