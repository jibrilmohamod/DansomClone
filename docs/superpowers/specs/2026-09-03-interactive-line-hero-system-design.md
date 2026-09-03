# Site-wide Interactive Line Hero Design

Date: 2026-09-03  
Branch: `agent/interactive-evidence-hero`

## Purpose

Replace image-led hero areas with a consistent, professional visual system built around thin contour-like lines that respond gently to pointer movement. The system should modernize the site without making it feel experimental, playful, or technology-led.

The intended audience remains institutional clients, development partners, and research commissioners. The visual language must feel mature, authoritative, calm, and credible.

## Design direction

The hero background is an abstract field of widely spaced lines. On pointer-capable devices, nearby lines bend slightly toward or away from the cursor and settle smoothly when the pointer leaves. The interaction is deliberately subtle: it supports the page hierarchy and never competes with the content.

The effect is not a literal map, network diagram, particle system, data visualization, or representation of measured information. It must not display fake statistics, nodes, cards, or location markers.

Design calibration:

- Design variance: 4/10
- Motion intensity: 4/10
- Visual density: 3/10
- One existing brand-green accent
- Moderate typography sized consistently with the navigation
- Clear conventional labels such as Services, Work, About, and Careers

## Hero system

### Homepage

The homepage receives the most expressive version of the line field.

- Full-height or near-full-height hero using `min-height: 100dvh`.
- Existing factual headline, supporting copy, and calls to action remain.
- Text is left-aligned inside the established site container.
- Lines span the background and remain visually secondary to the copy.
- Pointer movement creates a localized elastic displacement with a smooth return.
- No image, dark scrim, floating cards, scroll prompt, or automatic content carousel.

### Section landing pages

About, Services, Work/Portfolio, Careers, and Contact use shorter versions of the same system.

- Each page uses a distinct line arrangement or origin so the pages are related but not cloned.
- Headline scale is smaller than the current oversized treatments.
- Page label, factual introduction, and any typography follow the existing content hierarchy.
- Pointer response is lower amplitude than on the homepage.
- Existing documentary photography may remain below the hero where it supports the content.

### Detail pages

Individual service and portfolio pages use compact line-backed headers.

- Title, category, location, timeframe, partner, and other factual metadata remain intact.
- Long titles wrap at a controlled measure and do not dominate the viewport.
- The line field is restrained and mostly atmospheric.
- Partner logos retain their native aspect ratios and existing normalized display treatment.
- Hero photography is removed; documentary images can remain within page content.

## Reusable architecture

Create one focused, reusable hero-background component rather than separate animation implementations for every page.

The component accepts a small set of presentation inputs:

- visual variant for line arrangement;
- interaction strength;
- density;
- optional class or theme treatment.

Page templates control their own semantic content and layout. The visual component does not own page copy, navigation, metadata, or calls to action.

Use the existing Nuxt/Vue and CSS stack without introducing another animation dependency. Continuous pointer values must update outside Vue's reactive render cycle, using animation frames and direct rendering appropriate to the selected implementation. Event listeners and animation frames must be cleaned up when the component unmounts.

## Interaction and motion

- Desktop pointer movement affects only a local radius around the cursor.
- Lines settle naturally after interaction and when the pointer leaves.
- Motion must remain smooth without producing large deformations.
- Touch devices use a very slow ambient drift or a static composition; there is no touch-follow effect that interferes with scrolling.
- `prefers-reduced-motion: reduce` renders a static line field.
- The effect is decorative and excluded from the accessibility tree.
- Foreground links and buttons remain fully keyboard accessible and receive visible focus states.
- The background never intercepts clicks or pointer events intended for content.

## Theme treatment

Light and dark modes share the same structure but use independently calibrated contrast.

Light mode:

- neutral page background;
- low-contrast grey or olive-grey lines;
- dark primary copy;
- restrained brand-green accent.

Dark mode:

- deep navy/ink background consistent with the existing theme;
- muted blue-grey lines rather than bright white;
- off-white copy with controlled contrast;
- no glow, neon color, or high-brightness line clusters.

Both themes must keep navigation, logos, headings, body copy, and buttons readable without relying on an image scrim.

## Responsive behavior

- Desktop and tablet preserve the main content composition with the line field behind it.
- Mobile uses a single-column text layout with moderate vertical spacing.
- The decorative field is simplified at narrow widths to protect performance and readability.
- Text and actions must not overflow at long route titles.
- Hero sizing uses dynamic viewport units and avoids fixed `h-screen`.

## Content and SEO

- Existing factual content and conventional page names remain unchanged unless a wording correction is required for fit.
- Existing SEO metadata and canonical configuration remain.
- The homepage Open Graph image may continue using the approved Somali documentary photograph because social-preview imagery is separate from the visible hero.
- No fabricated claims, metrics, office information, or project details are introduced.

## Performance and resilience

- Do not add a new runtime dependency.
- Pause or substantially reduce animation when the hero is not visible.
- Keep rendering resolution device-aware and cap pixel density where necessary.
- Resize safely without layout shift.
- If scripting fails, the hero remains complete and readable with a static CSS background.
- The decorative effect must not delay headline rendering or become the largest contentful paint element.

## Verification

Implementation is complete only after:

- production build succeeds on Vercel;
- homepage, landing pages, service detail pages, and portfolio detail pages return successfully;
- light and dark modes are visually checked on desktop and mobile;
- pointer response, pointer exit, resize, and navigation are checked;
- touch scrolling remains unaffected;
- reduced-motion mode produces a static result;
- headline sizing and line contrast are checked against the navigation;
- no hero photography or obsolete scrims remain on the converted templates;
- below-hero documentary photography remains available where contextually useful;
- no accessibility, console, or hydration errors are introduced.

## Exclusions

This phase does not redesign navigation, footers, service-card layouts, partner carousels, logos, body-page photography, factual copy, or SEO architecture except where a small compatibility adjustment is required by the new hero system.
