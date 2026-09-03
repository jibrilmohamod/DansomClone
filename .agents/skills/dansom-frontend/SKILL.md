---
name: dansom-frontend
description: Site-specific frontend design and implementation rules for the Dansom Research and Consultancy website. Use for any Dansom page, component, responsive, visual, motion, UX, content-presentation, or frontend QA task.
metadata:
  author: Dansom project
  version: "1.0.0"
---

# Dansom Frontend

## Purpose

Protect the approved Dansom visual direction while making focused improvements. This skill is the project-specific source of truth and outranks generic design trends when they conflict with the established site.

## Product identity

Dansom is a research, monitoring, evaluation, political economy, advisory, operational, and field-intelligence consultancy working across Somalia, Kenya, and the Horn of Africa.

The website should communicate:

- institutional credibility
- field presence and evidence
- regional intelligence
- clarity and seriousness
- modern capability without tech-startup styling

## Visual direction

Use an editorial field-intelligence language:

- strong, oversized but readable typography
- documentary / project-bound imagery
- visible structure and deliberate grid logic
- controlled asymmetry
- spacious composition
- restrained green brand accents
- strong neutral surfaces in light and dark themes
- original partner marks and real project evidence
- meaningful contrast between narrative sections and evidence/archive sections

The visual reference is the approved `agent/dansom-futuristic-rebuild` branch lineage. Preserve its design system unless the user explicitly requests a redesign.

## Avoid

Do not drift toward:

- generic SaaS landing pages
- repetitive rounded card grids
- glassmorphism as a default surface
- purple / blue AI gradients
- excessive pill labels or badges
- fake statistics or fabricated case studies
- fake vacancies or fake client quotes
- stock-looking AI imagery used as documentary evidence
- decorative motion with no information or interaction purpose
- novelty navigation that makes basic browsing harder
- scroll-jacking

## Existing stack

Prefer the existing Nuxt 3 / Vue 3 / TailwindCSS implementation and components before introducing another framework or component library.

Use existing design tokens and shared primitives where possible. Avoid one-off raw values when a project token or established utility pattern already exists.

## Layout

- Preserve deliberate whitespace. Do not fill empty space simply because space exists.
- Keep primary reading widths controlled for long text.
- Use asymmetry to create hierarchy, not disorder.
- Make mobile layouts intentionally composed rather than desktop layouts merely stacked.
- Never introduce horizontal overflow unless a section intentionally provides an accessible horizontal interaction.
- For horizontal experiences, provide obvious affordance, touch support, keyboard support where applicable, and a non-trapping fallback.

## Typography

- Typography carries much of the site's identity. Treat hierarchy changes as design changes, not incidental CSS.
- Keep body copy highly readable.
- Avoid tiny uppercase metadata as a substitute for hierarchy.
- Use line breaks deliberately in major editorial headings but prevent ugly orphan words at common breakpoints.
- Avoid long all-caps passages.

## Color and theme

- Support both light and dark themes when editing shared surfaces.
- Keep green as a controlled brand accent rather than flooding every component.
- Verify logos and partner marks retain correct contrast and brand color.
- Never solve dark-mode contrast by globally inverting brand assets unless the asset is designed for it.

## Imagery

- Prefer authentic project, field, geography, research, and institutional imagery tied to the actual content.
- Preserve image aspect ratio and focal point intentionally.
- Use Nuxt Image / responsive image patterns already present in the project.
- Reserve layout space to avoid CLS.
- Provide meaningful alt text for informative images and empty alt text for genuinely decorative images.

## Interaction

- Interaction should make the site feel precise and alive, not playful.
- Hover must never be the only way to reveal essential information.
- Controls need visible focus states.
- Icon-only controls require accessible names.
- Touch targets should be comfortably usable on phones.
- Do not hide basic actions behind experimental gestures.

## Motion personality

Dansom motion is **calm, controlled, editorial, and confident**.

Default motion values:

- micro feedback: 100-180ms
- component transitions: 180-320ms
- section / page transitions: 350-600ms
- cinematic reveals only when justified: 600-900ms

Prefer decelerating entrances and faster exits. Avoid bounce unless there is a very specific interaction reason.

Use CSS and native browser capabilities first. Use Vue/Nuxt transitions next. Add GSAP only when complex choreography, pinning, sequencing, or scroll-linked behavior genuinely benefits from it.

Always respect `prefers-reduced-motion` for non-essential motion.

## Content integrity

Visual polish must not invent organizational facts.

For projects, offices, staff, clients, dates, budgets, statistics, services, partners, vacancies, and contact details, preserve verified repository content or ask for/locate evidence before changing facts.

## Change workflow

For a focused frontend task:

1. Inspect the target page and shared components.
2. Identify what is already working visually.
3. Define the smallest design objective that solves the request.
4. Apply UI/UX guidance without changing unrelated visual systems.
5. Implement with existing project patterns.
6. Render and test desktop + mobile.
7. Audit accessibility, overflow, themes, and motion.
8. Report what changed and what remains unverified.

## Definition of done

A meaningful frontend change is not done until:

- the intended page works at desktop and mobile widths
- no horizontal overflow was introduced
- typography does not clip or produce obvious broken wraps
- interactive controls are usable by keyboard where applicable
- light/dark surfaces remain coherent
- reduced-motion is respected for significant animation
- console/runtime errors relevant to the change are absent
- screenshots or equivalent rendered evidence were reviewed
