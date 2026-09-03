# Dansom Agent Instructions

## Canonical website baseline

The approved visual baseline is the `agent/dansom-futuristic-rebuild` lineage, specifically the version represented by commit `be42ad0a0a48ca41cc74bb76e6c55fc40ccbd211` when this agent setup was created.

Do not use `main`, PR #47, or an older redesign as the visual source of truth unless the user explicitly asks to compare or restore them.

## Frontend stack

This is a Nuxt 3 / Vue 3 / TailwindCSS site. Preserve the existing stack and conventions before adding dependencies.

## Required skills for frontend work

For any task that changes how the website looks, feels, moves, responds, or is interacted with:

1. Read `.agents/skills/dansom-frontend/SKILL.md` first.
2. Use `.agents/skills/frontend-design/SKILL.md` to classify the task and translate the approved design direction into focused Nuxt/Vue/Tailwind changes.
3. Use `.agents/skills/ui-ux-pro-max/SKILL.md` for layout, typography, hierarchy, color, responsive, interaction, and accessibility decisions.
4. Use `.agents/skills/motion-design/SKILL.md` when motion, transitions, scroll effects, hover behavior, or micro-interactions are involved.
5. Use `.agents/skills/web-design-guidelines/SKILL.md` as a post-implementation UX/accessibility audit.
6. Use `.agents/skills/frontend-testing-debugging/SKILL.md` for rendered browser QA.

## Working rule

Preserve and refine the approved design. Do not reinterpret a focused change as permission for a site-wide redesign.

Before editing, inspect the existing page/component, nearby shared components, data files, and global styles. Reuse established patterns where they are already strong.

## Frontend quality gate

A build passing is not enough. For meaningful UI changes, verify the rendered site at desktop and mobile sizes and check:

- page identity and intended route
- no framework/runtime overlay
- no relevant console errors
- no horizontal overflow
- no clipped or overlapping content
- usable keyboard focus states
- accessible labels for icon-only controls
- light and dark themes where relevant
- `prefers-reduced-motion` behavior for non-essential animation
- responsive navigation and primary interactions
- images and partner marks render correctly

Do not claim visual QA passed without rendered evidence.

## Design direction

The site should feel like an institutional field-intelligence and research consultancy, not a generic SaaS template or an experimental agency portfolio.

Prefer editorial hierarchy, documentary evidence, controlled asymmetry, strong typography, restrained green accents, clear information architecture, and purposeful motion.

Avoid generic card grids, excessive pills, glassmorphism, decorative gradients, fabricated metrics, fake case studies, random animation, stock-looking AI imagery, and inaccessible novelty interactions.
