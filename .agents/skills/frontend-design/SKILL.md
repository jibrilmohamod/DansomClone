---
name: frontend-design
description: Plan and implement polished frontend UI in an existing application. Use for page/component design, visual refinement, responsive composition, hierarchy, interaction design, and translating an approved visual direction into Nuxt/Vue/Tailwind code.
metadata:
  author: Dansom project
  version: "1.0.0"
---

# Frontend Design Implementation

Act as a senior product/interface designer first and a frontend engineer second.

For Dansom, the objective is usually **refinement of an approved system**, not invention of a new one.

## First classify the task

Choose one:

### A. Focused refinement
Examples: fix spacing, improve mobile hero, refine navigation, improve a project card, adjust typography.

Preserve the surrounding design. Do not redesign unrelated sections.

### B. New surface inside the existing system
Examples: new project archive control, new service section, new contact state.

Derive visual rules from existing Dansom components, tokens, typography, spacing, imagery, and motion before designing the new surface.

### C. Explicit redesign / new concept
Only use this path when the user clearly asks for a redesign, major restyle, new visual concept, or entirely new page direction.

Concept exploration may be broader, but the accepted direction must still be implemented and browser-tested.

## Inspect before designing

Read enough of the existing codebase to understand:

- page structure
- shared layout components
- navigation/footer
- global styles and Tailwind config
- typography and color tokens
- theme behavior
- reusable cards/sections
- data structures supplying content
- image handling
- existing motion helpers

Do not propose a new dependency or design primitive before checking whether the site already has one.

## Define the design objective

Before implementation, write a short internal design objective with:

- user/content problem
- hierarchy change
- layout/composition approach
- responsive behavior
- interaction behavior
- motion behavior if any
- accessibility considerations

Keep the objective narrow enough that success can be judged visually.

## Implementation principles

### Hierarchy
Use scale, weight, spacing, alignment, imagery, and contrast before adding decoration.

### Composition
Prefer clear editorial structure and intentional asymmetry. Avoid defaulting to equal-width card grids when the content has natural hierarchy.

### Responsiveness
Design the mobile composition deliberately. Decide what reorders, collapses, scrolls, crops, becomes sticky, or stops being sticky.

### Components
Extract shared components when patterns genuinely repeat. Do not abstract one-off visual fragments merely to make the code look architectural.

### CSS/Tailwind
Reuse project tokens/utilities. Avoid large clusters of unexplained magic values. Complex visual effects should remain understandable by another engineer.

### Images
Treat image selection/crop as part of design. Keep documentary/project imagery tied to real content.

### Motion
Use the motion skill. Motion should reinforce hierarchy and continuity rather than advertise technical cleverness.

## Current-direction heuristics for Dansom

Good candidates:

- editorial split compositions
- image/text tension with strong whitespace
- visible evidence/project metadata
- restrained separators/rules/grids
- sticky narrative regions where they improve comprehension
- searchable/filterable project archives
- subtle stateful transitions
- large headings paired with disciplined body copy

Use cautiously:

- horizontal scrollers
- pinned scroll narratives
- kinetic typography
- full-screen section transitions
- heavy parallax

Usually reject:

- generic bento dashboards
- floating glass cards everywhere
- 3D/WebGL for decoration
- cursor hijacking
- scroll-jacking
- hidden navigation experiments

## Review loop

After implementation:

1. render the target route
2. inspect first viewport before scrolling
3. inspect full-page composition
4. test mobile
5. test affected interactions
6. check dark/light when relevant
7. run web-design-guidelines audit
8. fix issues before reporting completion

## What to report

Explain the design decision, not just the files changed. Include what was preserved, what changed, and the browser QA performed.
