# Accessibility benchmark tool catalog

Research review date: 2026-10-13.

This catalog represents 52 product surfaces across 8 categories. It is a comparison roadmap, not a claim that every product has been run. The immutable result bundles remain the only source of executed measurements.

## Evidence maturity

| State | Meaning | Catalog count |
|---|---|---:|
| represented | Named and classified, but no complete benchmark runner or protocol exists yet. | 39 |
| executable | A benchmark runner or protocol exists, but this catalog does not claim a completed result. | 5 |
| executed | A complete result exists for a pinned corpus and environment. | 8 |
| verified | An executed result has an independent reproduction against the same contract. | 0 |

A represented tool has inventory coverage only. It has no inferred detection score, pass rate or conformance outcome. Wrappers, browser extensions and ensembles remain useful product comparisons, but they do not add an independent engine vote.

## Implementation order

1. Add local adapters for Siteimprove Alfa, QualWeb and Nu Html Checker; preserve each native outcome vocabulary and criterion mapping.
2. Run Testaro as an orchestration cross-check while reporting its underlying engines separately.
3. Define repeatable browser protocols for axe DevTools, WAVE, ARC Toolkit and ANDI; execute the existing Accessibility Insights protocol.
4. Execute the existing screen-reader protocol independently with JAWS, NVDA, VoiceOver and TalkBack.
5. Add native mobile, desktop, PDF, office-document and EPUB fixtures before claiming results for those surfaces.
6. Invite commercial vendors to submit version-pinned exports using the public result contract; do not upload the corpus to hosted services without an approved privacy review.

## Inventory summary

| Dimension | Value | Count |
|---|---|---:|
| Category | Assistive Technology | 11 |
| Category | Browser Assisted | 9 |
| Category | Desktop Native | 1 |
| Category | Document | 5 |
| Category | Enterprise Platform | 6 |
| Category | Mobile Native | 6 |
| Category | Specialized Signal | 3 |
| Category | Web Automated | 11 |
| Priority | P0 | 5 |
| Priority | P1 | 14 |
| Priority | P2 | 30 |
| Priority | P3 | 3 |

## Assistive Technology

| Product surface | Surface | Access | Engine lineage | Metric family | Maturity | Readiness | Priority |
|---|---|---|---|---|---|---|---:|
| [JAWS](https://www.freedomscientific.com/products/software/jaws/) | windows-screen-reader | commercial | JAWS; assistive-technology | task interoperability and announcement transcript | executable | protocol-ready-license-required | P1 |
| [JAWS Inspect](https://www.tpgi.com/jaws-inspect/) | speech-output-inspection-tool | commercial | JAWS speech output; derived-surface of jaws | speech transcript and product-surface parity | represented | license-and-protocol-required | P2 |
| [NVDA](https://www.nvaccess.org/download/) | windows-screen-reader | open-source | NVDA; assistive-technology | task interoperability and announcement transcript | executable | protocol-ready | P1 |
| [VoiceOver](https://support.apple.com/guide/voiceover/welcome/mac) | apple-screen-reader | built-in | VoiceOver; assistive-technology | task interoperability and announcement transcript | executable | protocol-ready | P1 |
| [TalkBack](https://support.google.com/accessibility/android/answer/6283677) | android-screen-reader | free | TalkBack; assistive-technology | task interoperability and announcement transcript | executable | protocol-ready-native-fixture-required | P1 |
| [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator) | windows-screen-reader | built-in | Narrator; assistive-technology | task interoperability and announcement transcript | represented | protocol-next | P2 |
| [ZoomText](https://www.freedomscientific.com/products/software/zoomtext/) | windows-magnifier-reader | commercial | ZoomText; assistive-technology | magnification, reflow and task interoperability | represented | license-and-protocol-required | P2 |
| [Voice Control](https://support.apple.com/guide/accessibility-mac/use-voice-control-mchl63d14772/mac) | voice-operation-system | built-in | Apple Voice Control; assistive-technology | voice-operation task completion | represented | protocol-next | P2 |
| [Voice Access](https://support.google.com/accessibility/android/answer/6151848) | voice-operation-system | free | Android Voice Access; assistive-technology | voice-operation task completion | represented | protocol-next-native-fixture-required | P2 |
| [Switch Control](https://support.apple.com/guide/accessibility-mac/use-switch-control-mh43190/mac) | switch-input-system | built-in | Apple Switch Control; assistive-technology | switch-input task completion | represented | protocol-next | P2 |
| [Switch Access](https://support.google.com/accessibility/android/answer/6122836) | switch-input-system | free | Android Switch Access; assistive-technology | switch-input task completion | represented | protocol-next-native-fixture-required | P2 |

## Browser Assisted

| Product surface | Surface | Access | Engine lineage | Metric family | Maturity | Readiness | Priority |
|---|---|---|---|---|---|---|---:|
| [axe DevTools browser extension](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) | browser-extension | mixed | axe-core; derived-surface of axe-core | product-surface parity and guided review | represented | protocol-next | P1 |
| [Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/overview/) | browser-extension | open-source | axe-core plus Microsoft assisted tests; derived-surface of axe-core | product-surface parity and human-guided outcomes | executable | protocol-ready | P1 |
| [WAVE Browser Extension](https://wave.webaim.org/extension/) | browser-extension | free | WAVE; derived-surface of wave-testing-engine-api | product-surface detection and manual interpretation | represented | protocol-next | P1 |
| [ARC Toolkit](https://www.tpgi.com/arc-platform/arc-toolkit/) | developer-tools-extension | free | ARC Toolkit; inspection-tool | automated findings and manual inspection | represented | protocol-next | P1 |
| [ANDI](https://www.ssa.gov/accessibility/andi/) | bookmarklet | free | ANDI; inspection-tool | module-specific findings and accessible-name inspection | represented | protocol-next | P1 |
| [Siteimprove Accessibility Checker](https://www.siteimprove.com/why-siteimprove/integrations/browser-extensions/) | browser-extension | free | Alfa; derived-surface of siteimprove-alfa | product-surface parity | represented | protocol-next | P2 |
| [Silktide Accessibility Checker](https://silktide.com/tools/accessibility-checker/) | browser-extension | free | Silktide; unknown-proprietary | product-surface findings and guided checks | represented | protocol-research | P2 |
| [Sa11y](https://sa11y.netlify.app/) | in-page-auditing-tool | open-source | Sa11y; inspection-tool | content-authoring findings | represented | adapter-research | P3 |
| [Editoria11y](https://itmaybejj.github.io/editoria11y/) | in-page-auditing-tool | open-source | Editoria11y; inspection-tool | content-authoring findings | represented | adapter-research | P3 |

## Desktop Native

| Product surface | Surface | Access | Engine lineage | Metric family | Maturity | Readiness | Priority |
|---|---|---|---|---|---|---|---:|
| [Accessibility Insights for Windows](https://accessibilityinsights.io/docs/windows/overview/) | desktop-inspector-and-checker | open-source | Accessibility Insights Windows rules; inspection-tool | UI Automation findings and assisted inspection | represented | native-fixture-required | P2 |

## Document

| Product surface | Surface | Access | Engine lineage | Metric family | Maturity | Readiness | Priority |
|---|---|---|---|---|---|---|---:|
| [PDF Accessibility Checker (PAC)](https://pac.pdf-accessibility.org/en) | pdf-checker | free | PAC; independent-engine | PDF/UA and WCAG document checks | represented | native-fixture-required | P2 |
| [Adobe Acrobat Pro Accessibility Checker](https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html) | pdf-checker | commercial | Adobe PDF accessibility checker; unknown-proprietary | PDF document checks and manual-review flags | represented | license-and-native-fixture-required | P2 |
| [CommonLook PDF Validator](https://commonlook.com/software/pdf-validator/) | pdf-checker | free | CommonLook PDF Validator; unknown-proprietary | PDF/UA, WCAG and Section 508 document checks | represented | native-fixture-required | P2 |
| [Microsoft 365 Accessibility Checker](https://support.microsoft.com/en-US/Accessibility/office-accessibility/improve-accessibility-with-the-accessibility-checker) | office-document-checker | built-in | Microsoft 365 Accessibility Checker; unknown-proprietary | native office-document findings | represented | native-fixture-required | P2 |
| [Ace by DAISY](https://daisy.github.io/ace/) | epub-checker | open-source | axe-core plus EPUB-specific checks; derived-surface of axe-core | EPUB accessibility findings | represented | native-fixture-required | P2 |

## Enterprise Platform

| Product surface | Surface | Access | Engine lineage | Metric family | Maturity | Readiness | Priority |
|---|---|---|---|---|---|---|---:|
| [Level Access Continuum](https://www.levelaccess.com/access-continuum-2/) | automation-sdk | commercial | Level Access Access Engine; unknown-proprietary | product-configuration detection | represented | license-required | P2 |
| [Evinced Auto Test SDKs](https://www.evinced.com/products/auto-test-sdks) | automation-sdk | commercial | Evinced; unknown-proprietary | product-configuration detection | represented | license-required | P2 |
| [BrowserStack Accessibility Testing](https://www.browserstack.com/docs/accessibility) | hosted-platform-and-sdk | commercial | Spectra rule engine; unknown-proprietary | product-configuration detection and assisted review | represented | license-required | P2 |
| [Siteimprove Accessibility Code Checker](https://alfa.siteimprove.com/code-checker) | automation-integration | mixed | Alfa; derived-surface of siteimprove-alfa | product-surface parity | represented | adapter-research | P2 |
| [Axe Monitor](https://docs.deque.com/) | site-monitoring-platform | commercial | axe family; derived-surface of axe-core | site-crawl and monitoring product behavior | represented | license-required | P2 |
| [TPGi ARC Platform](https://www.tpgi.com/arc-platform/) | governance-and-testing-platform | commercial | ARC; unknown-proprietary | product workflow and exported findings | represented | license-required | P2 |

## Mobile Native

| Product surface | Surface | Access | Engine lineage | Metric family | Maturity | Readiness | Priority |
|---|---|---|---|---|---|---|---:|
| [Accessibility Scanner](https://support.google.com/accessibility/android/faq/6376582) | android-app-scanner | free | Android Accessibility Test Framework; derived-surface of android-atf | native-screen findings | represented | native-fixture-required | P2 |
| [Accessibility Test Framework for Android](https://github.com/google/Accessibility-Test-Framework-for-Android) | automation-framework | open-source | Android Accessibility Test Framework; independent-engine | native-hierarchy automated detection | represented | native-fixture-required | P2 |
| [Accessibility Inspector](https://developer.apple.com/documentation/accessibility/performing-accessibility-audits-for-your-app) | platform-inspector | built-in | Apple accessibility audits; inspection-tool | native-screen findings and inspection | represented | native-fixture-required | P2 |
| [XCTest accessibility audit](https://developer.apple.com/documentation/accessibility/performing-accessibility-audits-for-your-app) | test-framework-api | built-in | Apple accessibility audits; derived-surface of apple-accessibility-inspector | native-workflow automated detection | represented | native-fixture-required | P2 |
| [Axe DevTools for Mobile](https://www.deque.com/axe/devtools/mobile-accessibility/) | mobile-sdk-and-analyzer | commercial | Deque mobile rules; unknown-proprietary | native-screen and workflow detection | represented | license-and-native-fixture-required | P2 |
| [BrowserStack App Accessibility](https://www.browserstack.com/docs/app-accessibility) | hosted-device-platform | commercial | BrowserStack mobile accessibility; unknown-proprietary | native-screen findings and AT sessions | represented | license-and-native-fixture-required | P2 |

## Specialized Signal

| Product surface | Surface | Access | Engine lineage | Metric family | Maturity | Readiness | Priority |
|---|---|---|---|---|---|---|---:|
| [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) | desktop-inspection-tool | free | Colour Contrast Analyser; inspection-tool | contrast measurement accuracy | represented | protocol-next | P2 |
| [Photosensitive Epilepsy Analysis Tool (PEAT)](https://trace.umd.edu/peat/) | video-analysis-tool | free | PEAT; inspection-tool | flash hazard analysis | represented | native-fixture-required | P2 |
| [Stark](https://www.getstark.co/) | design-tool-integration | commercial | Stark; inspection-tool | design-stage contrast and annotation checks | represented | design-fixture-required | P3 |

## Web Automated

| Product surface | Surface | Access | Engine lineage | Metric family | Maturity | Readiness | Priority |
|---|---|---|---|---|---|---|---:|
| [Cognium Conformis](https://github.com/cogniumhq/conformis) ([result](results/2026-10-13-v0.1.0-latest-browser-served/cognium-conformis/result.json)) | site-scanner | commercial | Conformis a11y/html and tech/html-aria; independent-engine | criterion-isolated automated detection | executed | current-result | P0 |
| [axe-core](https://github.com/dequelabs/axe-core) ([result](results/2026-10-13-v0.1.0-latest-browser-served/axe/result.json)) | automation-engine | open-source | axe-core; independent-engine | criterion-isolated automated detection | executed | current-result | P0 |
| [Pa11y / HTML_CodeSniffer](https://github.com/pa11y/pa11y) ([result](results/2026-10-13-v0.1.0-latest-browser-served/pa11y-htmlcs/result.json)) | automation-runner | open-source | HTML_CodeSniffer; wrapper of HTML_CodeSniffer | criterion-isolated automated detection | executed | current-result | P0 |
| [IBM Equal Access Accessibility Checker](https://github.com/IBMa/equal-access) ([result](results/2026-10-13-v0.1.0-latest-browser-served/ibm/result.json)) | automation-engine | open-source | IBM Equal Access; independent-engine | criterion-isolated automated detection | executed | current-result | P0 |
| [Lighthouse accessibility](https://github.com/GoogleChrome/lighthouse) ([result](results/2026-10-13-v0.1.0-latest-browser-served/lighthouse/result.json)) | browser-audit | open-source | axe-core-derived Lighthouse audits; derived-surface of axe-core | criterion-isolated automated detection | executed | current-result | P0 |
| [Siteimprove Alfa](https://github.com/Siteimprove/alfa) ([result](results/2026-10-13-v0.1.0-latest-browser-served/alfa/result.json)) | automation-engine | open-source | Alfa ACT rules; independent-engine | criterion-isolated automated detection | executed | current-result | P1 |
| [QualWeb](https://github.com/qualweb/qualweb) ([result](results/2026-10-13-v0.1.0-latest-browser-served/qualweb/result.json)) | automation-engine | open-source | QualWeb ACT, WCAG techniques and best practices; independent-engine | criterion-isolated automated detection | executed | current-result | P1 |
| [Nu Html Checker](https://github.com/validator/validator) ([result](results/2026-10-13-v0.1.0-latest-browser-served/nu-html-checker/result.json)) | conformance-checker | open-source | v.Nu HTML/CSS/SVG checker; independent-engine | specialized markup signal | executed | current-result | P1 |
| [Testaro](https://github.com/YRA-Tech/testaro) | ensemble-runner | open-source | multi-engine ensemble; ensemble-wrapper of multiple engines | orchestration parity and underlying-engine results | represented | adapter-research | P1 |
| [WAVE Testing Engine and API](https://wave.webaim.org/api/) | engine-and-api | mixed | WAVE; independent-engine | criterion-isolated automated detection | represented | license-required | P1 |
| [Tenon API](https://tenon.io/) | hosted-api | commercial | Tenon; unknown-proprietary | criterion-isolated automated detection | represented | license-required | P2 |

## Research anchors

- [Accessibility Metatesting: Comparing Nine Testing Tools](https://arxiv.org/abs/2304.07591)
- [Testaro: Efficient Ensemble Testing for Web Accessibility](https://arxiv.org/abs/2309.10167)
- [W3C Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/test-evaluate/tools/list/)

## Interpretation rules

- Unexecuted products are not assigned a floating version; record the exact build at execution.
- Wrappers, extensions, ensembles and derived products are product surfaces, not additional independent-engine votes.
- Automated detection, assisted/manual review, native artifacts and assistive-technology interoperability retain separate denominators.
- Represented and executable entries without published evidence are not passes, failures or zero-detection results.
