---
name: frontend-testing-debugging
description: Use for rendered frontend testing, debugging, responsive QA, interaction checks, console errors, visual regressions, and verification of UI changes. A successful build is not sufficient evidence for rendered frontend work.
metadata:
  author: OpenAI / adapted for Dansom
  version: "1.0-project"
---

# Frontend Testing and Debugging

For any meaningful frontend change, validate the rendered application rather than judging only source code or build output.

## Target flow

Before testing, state the flow in one sentence:

`The flow under test is: [entry route] -> [action/state] -> [expected rendered result].`

For broad visual work:

`The flow under test is: route loads -> meaningful content renders -> navigation/primary interactions work -> layout remains correct across target viewports.`

## Preferred browser path

Use the best browser automation available in the environment. Prefer a browser tool that can provide navigation, DOM/snapshot evidence, screenshots, console logs, viewport control, and interactions.

If no integrated browser capability exists, use Playwright/agent-browser tooling already available to the project or agent environment. Do not add a heavy testing dependency merely to take one screenshot when an existing browser tool can do it.

## Required checks

Before claiming rendered QA passed, verify:

1. **Page identity** — correct URL/route and page title where relevant.
2. **Meaningful render** — not a blank shell, loading dead-end, or error overlay.
3. **Console health** — no relevant application errors/warnings caused by the change.
4. **Visual evidence** — inspect screenshot(s), not just DOM text.
5. **Interaction proof** — exercise at least one interaction affected by the change.
6. **Responsive behavior** — desktop plus at least one phone-sized viewport for visual work.

## Dansom-specific visual checks

Look explicitly for:

- horizontal overflow
- clipping or overlapping headings
- awkward single-word heading wraps
- off-screen or unreachable navigation
- broken sticky/pinned sections
- unusable horizontal interactions
- image cropping that hides the subject
- missing/broken partner or brand marks
- dark-theme contrast regressions
- theme toggle problems
- excessive motion or motion that blocks reading
- reduced-motion content disappearing
- z-index collisions between navigation, menus, overlays, and media
- layout shift while images/fonts load

## Viewports

For typical site work, test representative sizes such as:

- phone: ~390x844
- intermediate/tablet when layout behavior changes materially: ~768-900px wide
- desktop: ~1440x900
- large desktop when the composition is highly cinematic: ~1920x1080

Exact device emulation is not required unless the bug is device-specific.

## Light/dark validation

When a changed surface participates in theming, inspect both light and dark states. Pay special attention to logos, partner marks, borders, subdued body text, transparent imagery, overlays, and focus states.

## Interaction loop

For a defect or refinement:

1. reproduce the current behavior
2. collect the cheapest useful evidence
3. identify the smallest responsible code path
4. make the focused change
5. reload the same route/state
6. repeat the same interaction
7. compare before/after behavior

Do not replace root-cause investigation with random CSS adjustments.

## Screenshot review

Screenshots are required evidence for visual claims. Inspect what the user actually sees:

- hierarchy
- rhythm/spacing
- alignment
- legibility
- image crop
- visual balance
- control affordance
- theme consistency

A screenshot that merely exists but was not inspected does not count as QA.

## Completion report

For non-trivial frontend work, report concisely:

- what changed
- routes/surfaces tested
- viewports tested
- interactions tested
- theme/reduced-motion checks when applicable
- relevant console/runtime result
- any remaining untested risk

## Source

Adapted from OpenAI's `frontend-testing-debugging` skill and browser-first frontend QA guidance in the OpenAI plugins/skills repositories.
