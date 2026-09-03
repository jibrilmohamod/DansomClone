# Interactive Line Hero System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace every image-led hero with a coherent, accessible line field that responds subtly to pointer movement and adapts to page type, viewport, motion preference, and theme.

**Architecture:** Add one canvas-based decorative component that owns drawing, animation, pointer sampling, resizing, theme observation, visibility pausing, and cleanup. Keep semantic hero content in `pages/index.vue` and `components/TheHeader.vue`; pages select only a visual variant and no longer provide hero image slots.

**Tech Stack:** Nuxt 3.10, Vue 3.4 Composition API, TypeScript, Tailwind CSS 3, Canvas 2D, native `requestAnimationFrame`, `ResizeObserver`, `IntersectionObserver`, and `MutationObserver`. No new dependency.

## Global Constraints

- Design variance is 4/10, motion intensity is 4/10, and visual density is 3/10.
- Use only the existing brand-green accent.
- Keep headings moderate and consistent with the navigation.
- Preserve factual content, conventional page names, navigation, SEO metadata, documentary images below heroes, and normalized partner-logo behavior.
- Hero images, image scrims, bright glows, particles, nodes, fake data, maps, floating cards, and scroll prompts are excluded.
- Desktop motion is localized and subtle; touch is ambient or static; reduced motion is static.
- Light and dark modes require independently calibrated line contrast.
- Use `min-height: 100dvh` for the homepage and dynamic viewport units elsewhere.
- The decorative layer must be `aria-hidden`, must not intercept interaction, and must fail safely.
- Do not add a runtime or development dependency.

---

## File map

- Create `components/InteractiveLineField.vue`: the only renderer and interaction owner.
- Modify `components/TheHeader.vue`: shared landing/detail hero shell, sizing, typography, variant forwarding, and theme-aware navigation.
- Modify `pages/index.vue`: homepage hero composition and removal of visible hero photography.
- Modify `pages/About/index.vue`, `pages/Careers/index.vue`, `pages/Contact/index.vue`, `pages/Portfolio/index.vue`, and `pages/Services/index.vue`: remove hero slots/imports where unused and select landing-page variants.
- Modify `pages/Portfolio/[slug].vue` and `pages/Services/[slug].vue`: select compact detail variant and remove hero-only photography imports.
- Modify `assets/css/tailwind.css`: remove obsolete hero image/scrim theme overrides and retain all non-hero brand-mark rules.

### Task 1: Build the reusable interactive line field

**Files:**
- Create: `components/InteractiveLineField.vue`

**Interfaces:**
- Consumes: CSS theme variables `--ink`, `--line`, and `--primary`.
- Produces: Vue component props `variant?: "home" | "about" | "services" | "work" | "careers" | "contact" | "detail"`, `strength?: number`, and `density?: number`.
- Produces: a decorative absolute canvas that never captures pointer input.

- [ ] **Step 1: Create a typed renderer shell**

Use this public interface and lifecycle structure:

```vue
<script setup lang="ts">
type LineVariant = "home" | "about" | "services" | "work" | "careers" | "contact" | "detail"

const props = withDefaults(defineProps<{
  variant?: LineVariant
  strength?: number
  density?: number
}>(), {
  variant: "home",
  strength: 1,
  density: 1,
})

const canvas = ref<HTMLCanvasElement | null>(null)
</script>

<template>
  <canvas
    ref="canvas"
    class="interactive-line-field"
    aria-hidden="true"
  />
</template>
```

The canvas class must be absolute, inset to zero, fill its parent, remain behind content, and use `pointer-events: none`.

- [ ] **Step 2: Implement deterministic line geometry**

Inside `onMounted`, size the canvas from its bounding rectangle, cap device scale at `Math.min(window.devicePixelRatio || 1, 1.75)`, and generate widely spaced line samples from deterministic variant settings. Do not use `Math.random()`; the same variant must render the same composition during hydration and resize.

Use a configuration record with exact variant entries:

```ts
const variantConfig: Record<LineVariant, {
  count: number
  amplitude: number
  slope: number
  phase: number
}> = {
  home:     { count: 13, amplitude: 24, slope: -0.08, phase: 0.4 },
  about:    { count: 10, amplitude: 18, slope:  0.06, phase: 1.2 },
  services: { count: 11, amplitude: 20, slope: -0.04, phase: 2.0 },
  work:     { count: 10, amplitude: 16, slope:  0.09, phase: 2.8 },
  careers:  { count: 9,  amplitude: 17, slope: -0.07, phase: 3.6 },
  contact:  { count: 9,  amplitude: 15, slope:  0.04, phase: 4.4 },
  detail:   { count: 8,  amplitude: 12, slope: -0.03, phase: 5.2 },
}
```

Multiply count and amplitude by the clamped public density/strength props, while keeping no fewer than six and no more than sixteen lines.

- [ ] **Step 3: Implement localized elastic pointer response**

Register one passive `pointermove` listener on `window`. Convert pointer coordinates into canvas-local coordinates and update plain numeric targets, not Vue refs. Ignore points outside the canvas bounds.

For each sampled line point, calculate a smooth radial falloff within a maximum radius of 220 CSS pixels. Keep displacement below 32 pixels on the homepage and below 20 pixels elsewhere. Interpolate current pointer values toward their targets on each frame so the field settles rather than snapping.

On `pointerleave`, `blur`, or an out-of-bounds pointer, ease the influence to zero.

- [ ] **Step 4: Add theme, visibility, resize, and motion handling**

- Read the three RGB theme variables with `getComputedStyle(document.documentElement)`.
- Observe `data-theme` on the root element and refresh colors without remounting.
- Use `ResizeObserver` to resize and redraw.
- Use `IntersectionObserver` to stop continuous frames while the canvas is off-screen.
- Read `matchMedia("(prefers-reduced-motion: reduce)")`; draw once and do not schedule continuous animation when it matches.
- Treat coarse pointers as non-interactive and render a static field.
- Remove all listeners, observers, media listeners, and pending animation frames in `onBeforeUnmount`.

Line opacity must resolve to approximately 0.18–0.28 in light mode and 0.16–0.24 in dark mode. At most one line may use a subtle primary-color tint; the rest use `--line`.

- [ ] **Step 5: Verify the component compiles**

Trigger the branch deployment after the component commit. Expected Vercel build result: Nuxt build succeeds with no TypeScript, SSR, or hydration error.

- [ ] **Step 6: Commit**

Commit `components/InteractiveLineField.vue` with message:

```text
Add reusable interactive line field
```

### Task 2: Convert the shared page header

**Files:**
- Modify: `components/TheHeader.vue`

**Interfaces:**
- Consumes: `InteractiveLineField` from Task 1.
- Produces: existing props `title`, `projTitle`, `eyebrow`, and `intro`, plus `variant?: LineVariant`.
- Keeps all existing callers source-compatible while the page migrations land.

- [ ] **Step 1: Add variant typing and a detail-state computed value**

Use:

```ts
type LineVariant = "about" | "services" | "work" | "careers" | "contact" | "detail"

const props = withDefaults(defineProps<{
  title?: string
  projTitle?: string
  eyebrow?: string
  intro?: string
  variant?: LineVariant
}>(), {
  title: "",
  projTitle: "",
  eyebrow: "Dansom Research & Consultancy",
  intro: "Regional research, monitoring, evaluation, and advisory expertise for the Horn of Africa.",
  variant: "detail",
})

const isDetail = computed(() => Boolean(props.projTitle))
```

- [ ] **Step 2: Replace the image layer and scrims**

Remove the `image` slot, image selectors, `.cinema-scrim`, `.cinema-grid`, and `cinema-in` animation. Render:

```vue
<section
  class="page-hero relative overflow-hidden border-b border-line/45 bg-ink text-mist"
  :class="isDetail ? 'min-h-[54dvh]' : 'min-h-[68dvh]'"
>
  <InteractiveLineField
    :variant="isDetail ? 'detail' : variant"
    :strength="isDetail ? 0.55 : 0.72"
    :density="isDetail ? 0.8 : 0.92"
  />
  <TheNav />
  <!-- existing semantic content -->
</section>
```

Place the content above the canvas with a relative z-index. Align landing content to the lower portion of the hero, but keep detail content vertically comfortable without forcing it to the viewport bottom.

- [ ] **Step 3: Moderate typography and contrast**

Use a landing title clamp no larger than `clamp(2.35rem, 4vw, 4rem)` and a detail clamp no larger than `clamp(2rem, 3.25vw, 3.25rem)`. Use `text-mist`, `border-line/55`, and `text-mist/68`; remove hard-coded white foreground and white borders.

Retain the restrained title entrance only under `prefers-reduced-motion: no-preference`, with no more than 24 pixels vertical travel.

- [ ] **Step 4: Verify the shared shell**

Deploy and fetch one landing route and one detail route. Expected: both return HTTP 200 and generated HTML includes the page title and no hero `<img>` from `TheHeader`.

- [ ] **Step 5: Commit**

Commit `components/TheHeader.vue` with message:

```text
Replace image headers with line-based hero shell
```

### Task 3: Migrate all secondary and detail pages

**Files:**
- Modify: `pages/About/index.vue`
- Modify: `pages/Careers/index.vue`
- Modify: `pages/Contact/index.vue`
- Modify: `pages/Portfolio/index.vue`
- Modify: `pages/Portfolio/[slug].vue`
- Modify: `pages/Services/index.vue`
- Modify: `pages/Services/[slug].vue`

**Interfaces:**
- Consumes: `TheHeader.variant` from Task 2.
- Produces: no new public interface.

- [ ] **Step 1: Replace landing-page hero calls**

Set exact variants:

```vue
<TheHeader ... variant="about" />
<TheHeader ... variant="careers" />
<TheHeader ... variant="contact" />
<TheHeader ... variant="work" />
<TheHeader ... variant="services" />
```

Remove each nested `#image` template. Do not change titles, eyebrows, introductions, body sections, forms, filters, addresses, phone numbers, partner logos, or SEO copy.

- [ ] **Step 2: Replace detail-page hero calls**

Use:

```vue
<TheHeader
  :projTitle="project.title"
  :eyebrow="project.classification"
  :intro="projectIntro"
  variant="detail"
/>
```

and:

```vue
<TheHeader
  :projTitle="service.fullTitle"
  :eyebrow="service.category"
  :intro="service.subtitle"
  variant="detail"
/>
```

Remove nested image templates only.

- [ ] **Step 3: Remove imports only when no longer used**

- Remove `photography` from About, Careers, and Contact only if no below-hero image still references it. About must retain it because the vision section uses `photography.communityDialogue`.
- Portfolio landing keeps `photography` because its Open Graph image still uses `fieldOperations`.
- Portfolio detail removes `photography` after the hero image is removed.
- Services landing keeps `photography` because service scenes and Open Graph metadata still use it.
- Service detail keeps `photography` because Open Graph metadata still uses `programmeAnalysis`.

- [ ] **Step 4: Verify all routes**

Fetch:

```text
/
/About
/Services
/Services/Third%20Party%20Monitoring%20and%20Evaluation
/Portfolio
/Portfolio/0-<existing-project-title>
/Careers
/Contact
```

Expected: HTTP 200 for valid routes; each response contains its existing title and no visible hero image. Confirm a valid project slug from `data/projects` rather than inventing one.

- [ ] **Step 5: Commit**

Commit the seven page files with message:

```text
Apply line hero system across site pages
```

### Task 4: Convert the homepage hero

**Files:**
- Modify: `pages/index.vue`

**Interfaces:**
- Consumes: `InteractiveLineField variant="home"`.
- Preserves: existing hero headline, supporting paragraph, calls to action, and Open Graph image.

- [ ] **Step 1: Replace the homepage visual layers**

Remove the visible hero `<img>`, `.home-scrim`, and redundant `.atlas-grid` hero layer. Replace them with:

```vue
<InteractiveLineField variant="home" :strength="1" :density="1" />
<TheNav />
```

Keep `photography.fieldResearchHero.src` in `useSeoMeta` for the social-preview image. Do not remove the `photography` import.

- [ ] **Step 2: Make the hero theme-aware**

Replace hard-coded `bg-[#050e17] text-white` with `bg-ink text-mist`. Replace `border-white/25`, `text-white/68`, and the white ghost-button overrides with existing `border-line/55`, `text-mist/68`, and the standard `button-ghost`.

Retain `min-h-[100dvh]`, left-aligned content, existing semantic hierarchy, and both CTAs.

- [ ] **Step 3: Moderate the title entrance**

Keep the homepage title no larger than `clamp(2.65rem, 4.35vw, 4.35rem)`. Reduce the entrance translation to 24 pixels and run it only when reduced motion is not requested.

- [ ] **Step 4: Verify hero behavior**

Expected:

- light and dark themes visibly differ;
- navigation uses theme-aware colors;
- pointer displacement stays localized;
- leaving the hero settles the field;
- buttons and links remain clickable;
- mobile scrolling is unaffected;
- headline remains readable before JavaScript runs.

- [ ] **Step 5: Commit**

Commit `pages/index.vue` with message:

```text
Introduce interactive line homepage hero
```

### Task 5: Remove obsolete global hero overrides

**Files:**
- Modify: `assets/css/tailwind.css`

**Interfaces:**
- Consumes: completed page migrations from Tasks 2–4.
- Preserves: all theme variables, grid utilities, button rules, brand-mark filters, page body styles, and reduced-motion reset.

- [ ] **Step 1: Delete only obsolete selectors**

Remove the explicit light/dark and system-dark rules targeting:

```css
.home-cinema > img
.home-cinema .home-scrim
.page-cinema img
.page-cinema .cinema-scrim
```

Do not alter `.brand-mark`, `.brand-mark--boost`, or `.brand-mark--dark-invert`.

- [ ] **Step 2: Search for stale hero hooks**

Search the branch for:

```text
home-scrim
cinema-scrim
cinema-grid
page-cinema
slot name="image"
```

Expected: no active hero implementation references remain. A hit in the committed design or implementation plan is acceptable.

- [ ] **Step 3: Build on Vercel**

Expected: READY deployment with no build error.

- [ ] **Step 4: Commit**

Commit `assets/css/tailwind.css` with message:

```text
Remove obsolete image hero theme rules
```

### Task 6: Production verification and visual review

**Files:**
- No source file changes unless verification identifies a defect.

**Interfaces:**
- Consumes: deployed branch preview.
- Produces: verified Vercel preview and defect list or final approval.

- [ ] **Step 1: Confirm Vercel deployment identity**

Verify that the READY deployment points to branch `agent/interactive-evidence-hero` and includes the latest commit SHA. Do not inspect the older `agent/real-documentary-photography` alias.

- [ ] **Step 2: Check representative routes remotely**

Fetch homepage, one landing page of every variant, one service detail, and one portfolio detail. Expected: HTTP 200 and correct title/description content.

- [ ] **Step 3: Perform browser visual review**

At desktop and mobile widths, inspect:

- homepage;
- About;
- Services;
- Portfolio;
- Careers;
- Contact;
- one service detail;
- one portfolio detail.

Review both light and dark themes. Check line restraint, text/navigation scale, contrast, logo appearance, button focus/hover, and absence of hero images.

- [ ] **Step 4: Exercise interaction and accessibility**

- Move the cursor slowly and quickly across each representative hero.
- Leave and re-enter the viewport.
- Navigate CTAs by keyboard.
- Verify touch/mobile scrolling.
- Enable reduced motion and confirm static lines.
- Confirm the console has no runtime, hydration, or canvas errors.

- [ ] **Step 5: Correct only verified defects**

If defects appear, edit the smallest responsible component, redeploy, and repeat the failed check. Do not widen scope into body-section redesigns.

- [ ] **Step 6: Record final commit and deployment URL**

Report the final branch, commit SHA, READY Vercel preview URL, routes checked, and any limitations of the available visual tooling.
