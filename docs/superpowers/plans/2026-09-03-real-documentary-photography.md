# Real Documentary Photography Implementation Plan

> **For agentic workers:** Execute this plan task-by-task through the connected GitHub and Vercel services. Do not use a local checkout or local development server.

**Goal:** Replace every AI-generated website photograph with context-appropriate, licensed real stock photography.

**Architecture:** A single `data/photography.ts` module owns the seven remote Pexels image URLs and accurate alternative text. Existing components consume those records, preserving layouts while eliminating duplicated paths. The obsolete local AI image binaries are removed after all references have migrated.

**Tech Stack:** Nuxt 3, Vue 3, TypeScript, GitHub Contents/Git Data APIs, Vercel preview deployments.

## Global Constraints

- Work only on `agent/real-documentary-photography`.
- Make changes through GitHub; do not run the project locally.
- Use real photographs listed as free to use under the Pexels licence.
- Do not claim stock subjects are Dansom employees or clients.
- Add no visible captions or credits.
- Preserve current layouts, copy, logos, animation, light mode, and dark mode.

---

### Task 1: Central photography catalogue and source record

**Files:**
- Create: `data/photography.ts`
- Create: `docs/image-sources.md`

- [ ] Add seven named image records with a stable Pexels CDN URL, factual alt text, source page, photographer, and usage context.
- [ ] Record the Pexels licence and retrieval date in the source ledger.
- [ ] Verify every source page says “Free to use” and every CDN URL uses HTTPS.

### Task 2: Replace all synthetic-photo references

**Files:**
- Modify: `pages/index.vue`
- Modify: `components/home/HomeHero.vue`
- Modify: `components/home/HomeFieldSequence.vue`
- Modify: `pages/About/index.vue`
- Modify: `pages/Careers/index.vue`
- Modify: `pages/Contact/index.vue`
- Modify: `pages/Services/index.vue`
- Modify: `pages/Services/[slug].vue`
- Modify: `components/home/HomeServicesExplorer.vue`
- Modify: `pages/Portfolio/index.vue`
- Modify: `pages/Portfolio/[slug].vue`
- Modify: `components/TheCarousel.vue`
- Modify: `components/TheHero.vue`

- [ ] Import the shared catalogue where each image is rendered.
- [ ] Replace local AI image paths with bound catalogue URLs.
- [ ] Replace misleading “Dansom researchers” alt text with factual scene descriptions.
- [ ] Preserve existing image classes, fetch priority, loading behaviour, and animation.

### Task 3: Remove obsolete assets and validate remotely

**Files:**
- Delete: `public/dansom-field-research-hero.jpg`
- Delete: `public/dansom-community-dialogue.jpg`
- Delete: `public/dansom-field-monitoring.jpg`
- Delete: `public/dansom-research-workshop.jpg`
- Delete: `public/dansom-programme-analysis.jpg`
- Delete: `public/dansom-field-operations.jpg`
- Delete: `public/dansom-livelihoods-research.jpg`

- [ ] Confirm the branch contains no references to the seven deleted local paths.
- [ ] Let Vercel build the GitHub branch and inspect the deployment status.
- [ ] Review home, About, Services, service detail, Portfolio, portfolio detail, Careers, and Contact at desktop and mobile widths.
- [ ] Verify hero readability, crop quality, loading, and both theme variants.
- [ ] Correct any failed or visually weak placement through GitHub and recheck the resulting Vercel preview.
