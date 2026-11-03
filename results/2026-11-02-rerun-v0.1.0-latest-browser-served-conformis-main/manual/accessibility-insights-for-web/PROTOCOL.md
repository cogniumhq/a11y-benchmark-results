# Accessibility Insights for Web execution protocol

Status: **protocol-ready; not executed in this bundle**.

This protocol adds the Microsoft browser extension as a reproducible product
surface without converting its axe-derived checks into a second independent
engine score or presenting unperformed human review as evidence.

## Pinned product and scope

- Extension: Accessibility Insights for Web `2.49.0`
- Embedded dependency at the tagged source release: axe-core `4.11.3`
- Corpus: `cogniumhq/a11y-benchmark@v0.1.0`
- Corpus commit: `469486a4811c5055de9d2524ede1ca520c2774c8`
- Manifest: `sha256:a4e01bcd1281bfb1c1951657a815ad2da053e5e233c1d937dd7ed7227c03c9f0`
- Selection: all 214 pages named by `../../comparison.json`

The store version and source tag are recorded independently because a browser
extension version does not by itself prove the version of every embedded
engine. Re-verify both immediately before an execution.

## Environment controls

1. Use a fresh Chrome profile with only Accessibility Insights installed.
2. Disable extension telemetry before loading the fixtures and record that
   setting. Do not sign in or connect issue trackers.
3. Serve only the pinned public synthetic corpus on an ephemeral loopback
   address. Do not use a production or customer target.
4. Record Chrome, extension, platform, viewport, zoom, colour/display settings,
   input method, locale and run timestamps.
5. Reset the page to its declared initial state before every lane and variant.

## Execution lanes

Run and report these lanes separately for every selected known-defect/control
pair:

1. **FastPass automated checks.** Export or transcribe rule identifiers,
   counts, needs-review instances and the state that was scanned. Normalize
   criterion mappings, but mark this result `derived-surface` of axe-core.
2. **Needs Review.** A reviewer follows each supplied check instruction and
   records `pass`, `fail`, `inapplicable`, `cannot-tell` or `not-tested` with a
   public-synthetic note or digest. Do not merge these outcomes into automated
   recall.
3. **Tab Stops.** Run the assisted keyboard traversal with Tab, Shift+Tab,
   arrow keys and Escape as applicable. Record ordered stops, reachability,
   visible focus, traps, unexpected movement and the review decision for every
   suggested issue. This lane maps to the corpus `keyboard-task` human protocol
   where its declared fixtures overlap.
4. **Assessment.** Execute only applicable requirements, preserve incomplete
   and not-tested outcomes, and identify the exact fixture state. Assessment
   results remain in the corpus `human-guided` lane.

Hidden dialogs, menus and validation states must be deliberately revealed and
rescanned where the scenario requires them. Default-page results cannot be
copied to a different state.

## Required record per case and lane

- fixture ID and relative path;
- broken or corrected-control role and declared criterion;
- state reached and whether the declared target was observable;
- execution status: `completed`, `error`, `blocked` or `unsupported`;
- native rule or requirement ID and mapped WCAG criterion, when available;
- reviewer outcome for every attempted human-guided step;
- evidence digest or privacy-reviewed public-synthetic note; and
- separate automated, review-needed and human-guided counts.

No finding, an unobserved target, an unfinished Assessment or an unavailable
browser state is `cannot-tell` or `not-tested` as appropriate—never an inferred
pass.

## Publication rule

Publish a result only after all selected cases have an explicit execution
status and the bundle passes the public corpus result validator. The FastPass
automated result may be compared as a browser-product configuration, but it
must not increase the independent-engine union. Publish Tab Stops and
Assessment using the corpus human-result vocabulary and keep them beside, not
averaged into, automated metrics.

Official references:

- https://accessibilityinsights.io/docs/web/getstarted/fastpass/
- https://accessibilityinsights.io/docs/web/overview/
- https://accessibilityinsights.io/docs/web/reference/faq/
- https://github.com/microsoft/accessibility-insights-web/tree/web%402.49.0
