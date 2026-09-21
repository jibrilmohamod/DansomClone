# Documentary Image System Design

**Date:** 2026-09-21  
**Branch:** `agent/interactive-evidence-hero`  
**Status:** Approved direction, implementation specification

## Objective

Replace the site's weaker and repetitive photography with a coherent documentary image system that feels credible, contemporary, and specific to Dansom's work in Somalia and the wider Horn of Africa.

The interactive line-based hero system remains unchanged. Photography supports the editorial sections below the heroes and social-preview metadata.

## Creative direction

The site should use real, high-resolution documentary photography featuring Somali people, locations, and working contexts. Images must feel observed rather than staged: field research, community consultation, professional workshops, monitoring visits, livelihoods, logistics, and public-service contexts.

The treatment is professional and restrained. Images should provide human context without becoming decorative stock photography or competing with the content.

## Non-negotiable constraints

- Use real photography; no AI-generated images.
- People shown must be recognisably Somali and contextually appropriate.
- Do not use generic African stock imagery as a substitute for Somali representation.
- Do not use images featuring white subjects.
- Use images with a clear reuse licence from reputable sources.
- Do not add visible captions to the interface.
- Preserve source and licence information in code comments or project documentation.
- Do not return photographs to the interactive hero areas.

## Image selection

Prioritise:

1. Somali researchers and facilitators working with communities.
2. Women and men participating in professional or civic settings.
3. Field monitoring, verification, and programme-delivery contexts.
4. Livelihoods, agriculture, water, infrastructure, logistics, and local markets.
5. Candid compositions with clear subjects, usable negative space, and natural light.

Avoid:

- ceremonial or political imagery unless directly relevant;
- conflict imagery that sensationalises the context;
- NGO clichés such as posed handshakes or staged laptop meetings;
- low-resolution images, screenshots, watermarks, and visibly compressed files;
- near-duplicate scenes across multiple sections.

## Placement strategy

### Home

Use a concise sequence of three distinct photographs:

- community engagement;
- field verification or research;
- livelihoods or programme delivery.

Each image should advance the narrative rather than repeat the same workshop setting.

### About

Use one strong 4:3 documentary photograph that communicates listening, regional knowledge, and collaborative fieldwork. The crop must retain faces and body language at both desktop and mobile widths.

### Services

Use six context-specific images, one per service category. Each image should relate directly to the adjacent service rather than acting as a generic background. Sticky visual panels remain, but crop behaviour and tone are standardised.

### Metadata

Use a strong landscape Somali documentary image for Open Graph previews where appropriate. It must still read clearly when cropped by social platforms.

## Crop and display system

- About image: 4:3.
- Home editorial sequence: 16:10 on desktop; responsive portrait-safe crops on mobile.
- Service panels: 4:5 or 3:4 within tall layouts, using subject-aware object positioning.
- Social previews: approximately 1.91:1.
- Always preserve native aspect ratio; use `object-fit: cover` only inside deliberate crop frames.
- Set `object-position` per image when the subject is not centred.
- Never stretch or compress an asset.

## Light and dark mode treatment

Use the same source image in both modes.

- Light mode: natural colour, modest contrast, no milky wash.
- Dark mode: slightly reduced brightness with a subtle neutral overlay only when necessary for surrounding contrast.
- Avoid monochrome filters, heavy blue/green grading, and branded colour casts.
- Images should remain legible and natural in both themes.

## Performance and accessibility

- Use appropriately sized remote assets or stable repository assets.
- Include accurate, concise alt text describing the scene and its functional context.
- Avoid repeating identical alt text across images.
- Preserve lazy loading for below-the-fold images.
- Prevent layout shifts by declaring aspect ratios.
- Confirm image hosts are stable and permitted by the Nuxt image configuration.

## Validation

Implementation is complete only after:

- visually reviewing every image placement in light and dark modes;
- checking desktop and mobile crops;
- confirming no non-Somali or white subjects appear;
- confirming no image is stretched, compressed, watermarked, or visibly low-resolution;
- verifying source licences and preserving attribution records internally;
- confirming all relevant routes load without broken images;
- checking the browser console for image or CSP errors.

## Out of scope

- Changes to the interactive line hero system.
- New captions or editorial credits in the visible interface.
- Changes to factual page content.
- AI-generated imagery.
