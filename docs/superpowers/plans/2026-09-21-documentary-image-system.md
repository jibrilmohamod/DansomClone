# Somali and Ethiopian Documentary Image System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the site's weaker photography with a licensed, visually coherent documentary set featuring Somali and context-appropriate Ethiopian subjects, while preserving the interactive line heroes.

**Architecture:** Keep image selection and licensing metadata in `data/photography.ts`, then let the three existing image consumers apply source-specific focal positions without duplicating URLs or alt text. GitHub commits trigger the Vercel preview; verification is performed against that preview because this project must not be run locally.

**Tech Stack:** Nuxt 3, Vue 3, Tailwind CSS, Wikimedia Commons image redirects, GitHub, Vercel

## Global Constraints

- Use real photography; no AI-generated images.
- People shown must be Somali or Ethiopian and contextually appropriate to the page.
- Do not use generic African stock imagery or white subjects.
- Ethiopian imagery must not be presented as a clearly Somali location or institution.
- Keep the interactive line hero system unchanged.
- Do not add visible captions.
- Preserve source and licence details in repository data or documentation.
- Never stretch or compress an image.
- Use the same source in light and dark mode with restrained, neutral treatment.
- Do not run the project locally; verify through GitHub-triggered Vercel previews and the connected browser.

---

### Task 1: Replace the photography catalogue with an auditable licensed set

**Files:**
- Modify: `data/photography.ts`
- Create: `docs/image-sources.md`

**Interfaces:**
- Produces: `DocumentaryPhoto` with `src`, `alt`, `position`, `sourcePage`, `license`, and `location`
- Produces: the existing `photography` keys so current page imports remain valid
- Consumes: Wikimedia Commons file pages and `Special:Redirect/file` delivery URLs

- [ ] **Step 1: Replace the catalogue type and records**

Use this exact shape and selected asset set:

```ts
export type DocumentaryPhoto = {
 src: string
 alt: string
 position: string
 sourcePage: string
 license: string
 location: string
}

export const photography = {
 fieldResearchHero: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Women%20Political%20Participation%20Forum%20-%20Mogadishu%20(51667300629).jpg?width=2200",
  alt: "Somali women taking part in a professional forum in Mogadishu",
  position: "50% 44%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:Women_Political_Participation_Forum_-_Mogadishu_(51667300629).jpg",
  license: "CC0 1.0",
  location: "Mogadishu, Somalia",
 },
 communityDialogue: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Somali%20women%20participate%20in%20political%20forum%20-%2051618325414.jpg?width=2200",
  alt: "Somali women and civil society participants in a public forum in Dhusamareb",
  position: "50% 46%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:Somali_women_participate_in_political_forum_-_51618325414.jpg",
  license: "CC0 1.0",
  location: "Dhusamareb, Somalia",
 },
 fieldMonitoring: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/A%20man%20collects%20water%20from%20a%20well%20in%20Garbahaarey%20town%20in%20the%20Gedo%20region%20of%20Somalia%20on%20August%2011.%20AMISOM's%20Humanitarian%20Unit%20today%20conducted%20an%20assesment%20of%20Garbahaarey%20town%20in%20the%20Gedo%20region%20of%20(14700908410).jpg?width=2200",
  alt: "A Somali resident collecting water during a field assessment in Gedo",
  position: "52% 46%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:A_man_collects_water_from_a_well_in_Garbahaarey_town_in_the_Gedo_region_of_Somalia_on_August_11._AMISOM%27s_Humanitarian_Unit_today_conducted_an_assesment_of_Garbahaarey_town_in_the_Gedo_region_of_(14700908410).jpg",
  license: "CC0 1.0",
  location: "Garbahaarey, Somalia",
 },
 researchWorkshop: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/A%20Group%20of%20Women%20Meets%20at%20a%20Health%20Post%20to%20Discuss%20Issues%20of%20Common%20Concern%20(9502333198).jpg?width=2200",
  alt: "An Ethiopian health extension worker leading a community discussion with women",
  position: "50% 48%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:A_Group_of_Women_Meets_at_a_Health_Post_to_Discuss_Issues_of_Common_Concern_(9502333198).jpg",
  license: "CC BY 2.0",
  location: "SNNP Region, Ethiopia",
 },
 programmeAnalysis: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/2016%2003%2026%20Roundtable%20Discussions%20-12%20(25953128652).jpg?width=2200",
  alt: "Somali students and officials participating in a roundtable discussion in Mogadishu",
  position: "50% 42%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:2016_03_26_Roundtable_Discussions_-12_(25953128652).jpg",
  license: "CC0 1.0",
  location: "Mogadishu, Somalia",
 },
 fieldOperations: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mogadishu%20Daily%20Life%20one%20year%20after%20Al%20Shabaab%2003%20(7731056752).jpg?width=2200",
  alt: "Somali dock workers handling supplies at Mogadishu seaport",
  position: "50% 50%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:Mogadishu_Daily_Life_one_year_after_Al_Shabaab_03_(7731056752).jpg",
  license: "CC0 1.0",
  location: "Mogadishu, Somalia",
 },
 livelihoodsResearch: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Woman%20watering%20in%20a%20field%20in%20Ethiopia.jpg?width=2200",
  alt: "An Ethiopian farmer watering crops in a cultivated field",
  position: "50% 48%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:Woman_watering_in_a_field_in_Ethiopia.jpg",
  license: "CC BY-SA 4.0",
  location: "Ethiopia",
 },
} as const satisfies Record<string, DocumentaryPhoto>
```

- [ ] **Step 2: Create the internal source register**

Create `docs/image-sources.md` with a table containing every key, Commons source page, creator/source organisation when listed, licence, location, and current page usage. State that the visible site intentionally omits captions while this register preserves attribution and auditability.

- [ ] **Step 3: Verify every upstream asset**

Open every `sourcePage` and confirm the described location, subject, original dimensions of at least 1,920 pixels on the long edge, and licence. Then open every `src` URL and confirm it resolves to an image without a watermark.

- [ ] **Step 4: Commit the catalogue**

Commit both files to `agent/interactive-evidence-hero` with message:

```text
Replace photography with licensed Somali and Ethiopian documentary set
```

### Task 2: Apply a consistent crop and tonal system

**Files:**
- Modify: `components/home/HomeFieldSequence.vue:19-44,58-80`
- Modify: `pages/About/index.vue:33-42,192-193`
- Modify: `pages/Services/index.vue:20-25,50-65`

**Interfaces:**
- Consumes: `DocumentaryPhoto.position: string`
- Produces: subject-aware `object-position` on every displayed documentary image
- Preserves: current responsive layout, lazy loading, hero line fields, and reduced-motion behaviour

- [ ] **Step 1: Pass complete photo records into the home sequence**

Change each chapter from separate `image` and `alt` strings to `photo: photography.<key>`. Bind the desktop and mobile images as:

```vue
<img
 :src="chapter.photo.src"
 :alt="chapter.photo.alt"
 :style="{ objectPosition: chapter.photo.position }"
 width="1586"
 height="992"
 loading="lazy"
 class="sequence-image absolute inset-0 h-full w-full object-cover"
/>
```

Use `communityDialogue`, `fieldMonitoring`, and `programmeAnalysis` for Listen, Verify, and Advise respectively.

- [ ] **Step 2: Standardise home aspect ratios and overlays**

Keep the desktop frame at its current sticky height. Change the mobile frame from `aspect-[16/9]` to `aspect-[16/10]`. Replace the dark gradient with:

```html
<div class="image-tone absolute inset-0"></div>
```

Add scoped styles:

```css
.image-tone {
 background: linear-gradient(180deg, transparent 48%, rgb(5 14 23 / 0.56));
 pointer-events: none;
}
:global(.light) .image-tone {
 background: linear-gradient(180deg, transparent 56%, rgb(5 14 23 / 0.42));
}
```

- [ ] **Step 3: Apply the About focal point and restrained treatment**

Add `:style="{ objectPosition: photography.communityDialogue.position }"` to the vision image. Replace the current pseudo-element with:

```css
.vision-media {
 position: relative;
 overflow: hidden;
 aspect-ratio: 4 / 3;
 background: rgb(var(--panel-soft));
}
.vision-media::after {
 content: "";
 position: absolute;
 inset: 0;
 pointer-events: none;
 background: linear-gradient(180deg, transparent 68%, rgb(5 14 23 / 0.18));
}
:global(.dark) .vision-media::after {
 background: linear-gradient(180deg, rgb(5 14 23 / 0.05), rgb(5 14 23 / 0.28));
}
```

- [ ] **Step 4: Convert the Services image array to photo records**

Keep the service order but bind full records:

```ts
const images = [
 photography.communityDialogue,
 photography.fieldMonitoring,
 photography.researchWorkshop,
 photography.programmeAnalysis,
 photography.fieldOperations,
 photography.livelihoodsResearch,
]
```

Update the image to use `:src="images[index].src"`, `:alt="images[index].alt"`, and `:style="{ objectPosition: images[index].position }"`.

- [ ] **Step 5: Moderate the Services overlay in both themes**

Replace the fixed inline gradient with a `service-image-tone` element and add:

```css
.service-image-tone {
 position: absolute;
 inset: 0;
 pointer-events: none;
 background: linear-gradient(180deg, rgb(5 14 23 / 0.04), rgb(5 14 23 / 0.46));
}
:global(.light) .service-image-tone {
 background: linear-gradient(180deg, transparent 58%, rgb(5 14 23 / 0.34));
}
```

Do not add filters, blend modes, colour casts, or global image opacity.

- [ ] **Step 6: Commit the rendering changes**

Commit with message:

```text
Refine documentary image crops and theme treatment
```

### Task 3: Align social-preview imagery and confirm telephone removal

**Files:**
- Modify: `pages/index.vue`
- Modify: `pages/Portfolio/index.vue`
- Inspect: `components/TheFooter.vue`
- Inspect: `pages/Contact/index.vue`

**Interfaces:**
- Consumes: landscape photographs in `photography`
- Produces: stable social metadata that no longer points to weaker or unrelated imagery

- [ ] **Step 1: Use one strong landscape source per preview**

Keep the home Open Graph image on `photography.fieldResearchHero.src`. Keep Portfolio on `photography.fieldOperations.src`. Ensure each page has an `ogImageAlt` that matches the selected photograph's `alt`.

- [ ] **Step 2: Confirm no telephone links or numbers remain**

Inspect the footer and Contact page and confirm there are no `tel:` links and no occurrences of `+254-722-853-540` or `+252-61-557-0144`. Preserve the three office addresses, email link, and LinkedIn link.

- [ ] **Step 3: Commit metadata corrections if required**

If Task 3 changes either metadata file, commit with message:

```text
Align social previews with documentary photography
```

If no metadata edit is required, record that fact in the verification notes and do not create an empty commit.

### Task 4: Vercel build and full visual verification

**Files:**
- Modify only files with defects discovered during verification
- Update: `docs/image-sources.md` if any source is rejected or replaced

**Interfaces:**
- Consumes: Vercel preview for `agent/interactive-evidence-hero`
- Produces: verified responsive image system with no broken, stretched, or contextually incorrect imagery

- [ ] **Step 1: Wait for the branch deployment**

Use the Vercel deployment created from the latest GitHub commit. Continue only when its status is `READY`; do not use an older `agent/real-documentary-photography` preview.

- [ ] **Step 2: Check asset delivery and the console**

Open `/`, `/About`, `/Services`, `/Portfolio`, and one service detail route. Confirm every image request succeeds, no CSP or mixed-content errors appear, and no Commons redirect produces a broken image.

- [ ] **Step 3: Review desktop presentation**

At approximately 1440×900, review the Home sequence, About vision block, and all six Services scenes in both light and dark modes. Confirm:

- faces and actions remain inside each crop;
- no image is stretched or compressed;
- overlays do not wash out light mode or over-brighten dark mode;
- the three Home images are visually distinct;
- Somali and Ethiopian scenes are not mislabeled;
- no white subjects appear.

- [ ] **Step 4: Review mobile presentation**

At approximately 390×844, repeat the same routes and both themes. Confirm 16:10 Home crops preserve the subject, the About image stays 4:3, Service images remain readable in their tall frames, and there is no horizontal overflow or layout shift.

- [ ] **Step 5: Correct focal points without changing layout**

If a subject is clipped, adjust only that record's `position` value in `data/photography.ts`, redeploy, and repeat Steps 2–4. Do not compensate with stretching, per-page duplicate URLs, or arbitrary frame changes.

- [ ] **Step 6: Final verification commit**

Commit any focal-point corrections with message:

```text
Polish documentary image focal points after visual QA
```

Record the final deployment URL and the routes reviewed in the task handoff.
