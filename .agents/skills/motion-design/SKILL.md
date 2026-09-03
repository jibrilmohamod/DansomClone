---
name: motion-design
description: Apply motion design principles to animations, transitions, micro-interactions, loading states, page transitions, and scroll-triggered effects. Use for CSS, Vue transitions, GSAP, Lottie, or other animation systems.
license: MIT
metadata:
  author: LottieFiles / adapted for Dansom
  version: "1.0.0"
---

# Motion Design

Use motion only when it improves feedback, hierarchy, continuity, orientation, or narrative.

## Before animating

Decide:

1. What should the user notice or understand?
2. Is the motion functional, narrative, or ambient?
3. What is the single primary moving property?
4. What duration fits the size and importance of the element?
5. What happens for `prefers-reduced-motion`?

## Motion personality

For Dansom, default to a premium/corporate personality: controlled, confident, calm, and precise. Avoid playful bounce and exaggerated overshoot.

Recommended ranges:

| Interaction | Duration |
| --- | ---: |
| hover / micro feedback | 80-140ms |
| button / toggle | 120-180ms |
| icon transition | 150-240ms |
| card / panel | 200-350ms |
| modal | 280-400ms |
| page / major section | 400-600ms |
| deliberate cinematic reveal | 600-900ms |

Longer travel may justify longer duration. Exits should generally be faster than entrances.

## Easing

- entrances: decelerate / ease-out
- exits: accelerate / ease-in
- on-screen state changes: ease-in-out
- ambient loops: smooth and seamless

Avoid linear easing for spatial movement.

## Property choice

Prefer transform and opacity for performance. Do not animate layout-heavy properties such as width/height when a transform solution is practical.

Use the minimum number of properties necessary:

- entrance/exit: position + opacity
- emphasis: subtle scale, possibly opacity
- state feedback: color + small transform
- direction/flow: position
- depth: restrained scale/shadow/parallax

## Choreography

- establish one hero element or dominant movement
- keep entry direction spatially coherent
- stagger groups lightly rather than making everything move simultaneously
- keep ordinary list/card stagger totals below roughly 400-500ms
- avoid large continuous motion across the screen without meaningful progression

## Scroll motion

Prefer native CSS scroll-driven animation and normal document scrolling when they can achieve the effect cleanly.

Use Vue/Nuxt transitions for ordinary component and page state.

Use GSAP only when the requested behavior genuinely needs complex pinning, sequencing, timelines, or cross-element choreography.

Never implement scroll-jacking for Dansom.

## Accessibility

All non-essential motion must have a reduced-motion path. Reduced motion should preserve content, hierarchy, and interaction rather than simply hiding content that would otherwise animate in.

Avoid rapid flashing, intense parallax, or motion that interferes with reading.

## Review checklist

Before calling motion finished, check:

- purpose is clear
- timing fits element weight
- easing matches direction
- motion does not delay basic interaction
- layout remains stable
- scrolling remains native and predictable
- mobile performance is acceptable
- reduced-motion behavior works
- animation does not compete with important copy

## Source

Adapted from the LottieFiles `motion-design-skill` (MIT). Consult the upstream skill for deeper motion-directing references when necessary.
