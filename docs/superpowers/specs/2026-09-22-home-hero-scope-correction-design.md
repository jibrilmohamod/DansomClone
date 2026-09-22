# Homepage Hero Scope Correction

Date: 2026-09-22  
Branch: `agent/interactive-evidence-hero`

## Objective

Correct the interactive hero implementation without changing the approved wider site design. The homepage hero will be the only place where the line field appears. The homepage “Our approach” section will return to its previously approved layout and proportions.

## Design direction

The site remains a professional, mature research consultancy experience. Motion is concentrated in one memorable homepage interaction; internal pages remain calm, static, and easy to scan.

Design dials:

- Design variance: 5/10
- Motion intensity: 7/10 in the homepage hero, 2/10 elsewhere
- Visual density: 4/10

## Homepage hero

The existing homepage headline, supporting copy, navigation, calls to action, theme behavior, and full-height layout remain unchanged.

The line field becomes directly manipulable:

- Hovering near a line produces a restrained local displacement.
- Pointer-down near a line captures the nearest strand.
- Dragging pulls a local anchor while adjacent strands respond with distance-based falloff.
- Releasing applies damped spring recovery rather than snapping immediately.
- The cursor changes between default, grab, and grabbing states.
- Subtle autonomous movement keeps the field alive when idle.
- The interaction remains behind the copy and never blocks navigation or calls to action.
- The canvas is the only interactive background surface.

Touch behavior will not interfere with ordinary page scrolling. Direct dragging is enabled only where an intentional pointer gesture can be distinguished safely. Reduced-motion mode renders a static line composition without continuous animation or spring physics.

## Internal-page heroes

`TheHeader.vue` will no longer render `InteractiveLineField`.

About, Services, Work, Careers, Contact, service-detail, and portfolio-detail heroes will use the existing type hierarchy and layout over a restrained static background:

- no interactive lines;
- no animated line field;
- no hero photography;
- existing theme colors and subtle grid/border language;
- existing title entrance may remain when reduced motion is not requested.

This keeps the homepage interaction distinctive and prevents repetitive motion across the site.

## “Our approach” restoration

`HomeFieldSequence.vue` will restore the approved desktop geometry from commit `067ba04298dffdf741bdff25b40de645b01205b7`:

- sticky media frame at `68dvh`;
- original column proportions and scroll pacing;
- original mobile stacking behavior;
- existing Listen / Verify / Advise content;
- existing intersection-driven image transitions.

The current licensed Somali and Ethiopian documentary images, alt text, focal positions, neutral image treatment, and source register remain. Only the unintended layout/proportion change is reversed.

## Component boundaries

- `InteractiveLineField.vue`: homepage-only canvas interaction and spring model.
- `pages/index.vue`: sole consumer of `InteractiveLineField`.
- `TheHeader.vue`: static internal-page hero shell.
- `HomeFieldSequence.vue`: restored approach sequence with current photography records.

No new dependency is required. The interaction will use the existing Canvas 2D implementation and pointer events.

## Accessibility and performance

- Respect `prefers-reduced-motion`.
- Keep canvas decorative and excluded from the accessibility tree.
- Maintain readable contrast in both light and dark modes.
- Pause animation when the hero is outside the viewport or the page is hidden.
- Resize for device pixel ratio without exceeding the existing cap.
- Do not create per-frame Vue reactive state.
- Preserve keyboard access to all real controls.
- Ensure pointer capture is released on cancellation and unmount.

## Verification

The implementation is accepted when:

1. The homepage “Our approach” layout visually matches the approved earlier deployment.
2. Lines appear only in the homepage hero.
3. A desktop pointer can grab, drag, and release a line with visible spring recovery.
4. Navigation and hero buttons remain clickable while dragging the background.
5. Internal-page heroes render a static corporate background in light and dark modes.
6. Reduced-motion mode is static.
7. Homepage, About, Services, Work, Careers, Contact, and representative detail routes load successfully without console errors or horizontal overflow.
8. The existing phone-number removal, documentary photography, metadata, and logo work remain intact.
