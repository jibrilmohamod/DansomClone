---
name: ui-ux-pro-max
description: UI/UX design intelligence for web interfaces. Use when designing, building, reviewing, or fixing pages and components, including layout, typography, color, accessibility, interaction, responsive behavior, motion, forms, navigation, and perceived quality.
metadata:
  author: nextlevelbuilder / adapted for Dansom
  version: "2.5-core"
---

# UI/UX Pro Max - Project Core

This project-local version keeps the high-value decision framework in the repository without vendoring the upstream multi-megabyte font/icon catalogue.

When deep catalogue search is genuinely useful, consult the upstream `nextlevelbuilder/ui-ux-pro-max-skill` or install its full Codex dataset in the working environment. Do not replace this project's Dansom-specific rules with an automatically generated design system.

## Priority order

Review UI decisions in this order:

1. accessibility
2. touch and interaction
3. performance and layout stability
4. fit with the existing product style
5. responsive layout
6. typography and color
7. motion
8. forms and feedback
9. navigation
10. charts/data presentation

A fashionable treatment does not outrank usability or the approved Dansom design language.

## Accessibility

- maintain readable text contrast; target WCAG AA for normal text
- keep visible keyboard focus
- label icon-only controls
- use semantic elements before ARIA workarounds
- make informative images understandable through alt text
- do not encode essential meaning through color alone
- ensure animated/revealed content remains available under reduced motion

## Touch and interaction

- important touch controls should generally provide about a 44x44px usable target
- avoid hover-only access to essential information
- provide immediate feedback for presses, toggles, navigation, and submissions
- prevent accidental tiny adjacent targets
- preserve normal browser navigation behavior

## Performance and stability

- prefer responsive AVIF/WebP or appropriate optimized formats
- lazy load below-the-fold imagery where appropriate
- reserve image/media space to avoid layout shift
- avoid expensive scroll listeners when CSS/native capabilities work
- animate transform/opacity before layout-triggering properties
- do not add large frontend dependencies for effects that can be implemented cleanly with existing tools

## Style selection

Before introducing a new visual pattern, inspect the current Dansom implementation and answer:

- does an equivalent pattern already exist?
- does this reinforce the editorial field-intelligence identity?
- is it improving hierarchy or merely adding decoration?
- does it still work in both themes and on mobile?

Avoid mixing unrelated visual languages inside one page.

## Responsive layout

- work mobile-first at the component level, even when the desktop composition is visually dominant
- do not assume desktop asymmetry can simply be stacked vertically
- control reading measure on long text
- avoid fixed widths that break at intermediate viewports
- eliminate unintended horizontal scrolling
- test at least one phone width, one tablet/intermediate width when relevant, and desktop

## Typography

- body text should normally remain at or above a comfortable 16px-equivalent reading size
- use hierarchy, weight, scale, measure, and whitespace intentionally
- avoid using tiny uppercase metadata everywhere
- prevent heading orphans and awkward one-word wraps at common breakpoints
- keep line height appropriate to text size and density
- use the project's established font system before adding fonts

## Color and themes

- use semantic/design tokens rather than scattering raw colors through components
- green is a brand accent, not a default fill for every surface
- validate light and dark theme contrast separately
- preserve original partner/client mark colors unless a verified alternate asset exists
- do not use low-contrast gray-on-gray copy for important content

## Motion

- motion communicates state, hierarchy, continuity, or narrative
- ordinary interaction feedback should feel immediate
- entrances usually decelerate; exits are usually faster
- never use one duration/easing for everything
- respect `prefers-reduced-motion`
- use the dedicated motion skill for substantial animation work

## Forms and feedback

- keep visible labels for important fields
- put validation feedback near the field that needs attention
- explain recovery, not just failure
- distinguish loading, success, error, and disabled states
- do not rely on placeholder text as the only field label

## Navigation

- preserve predictable page navigation and browser back behavior
- keep primary navigation understandable without experimentation
- mobile navigation must be intentionally usable with touch
- links must look/behave like links and buttons like buttons
- ensure deep routes and project/service details remain directly addressable

## Design decision workflow

For each significant UI task:

1. identify the user goal and content priority
2. inspect the current component/page and design tokens
3. identify the smallest visual/interaction problem to solve
4. select a pattern consistent with Dansom
5. define responsive behavior before implementation is considered complete
6. define keyboard, focus, theme, and reduced-motion behavior where relevant
7. implement
8. render-test and audit

## Full upstream catalogue

The upstream skill contains searchable style, product, palette, typography, UX, icon, motion/GSAP, chart, and stack guidance including Nuxt/Vue/Tailwind support.

When a task requires broad design exploration rather than refinement, the upstream Codex installer is:

```bash
npx uipro-cli init --ai codex
```

Only run an installer when the working environment permits network/package changes and doing so will not overwrite project-specific agent instructions. Treat generated design-system output as recommendations, not authority over `.agents/skills/dansom-frontend/SKILL.md`.

## Source

Adapted from `nextlevelbuilder/ui-ux-pro-max-skill`. Upstream is MIT licensed.
