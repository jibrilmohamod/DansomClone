<template>
 <div>
  <HomeHero />

  <section class="border-b border-line/35 py-10 md:py-14">
   <div class="shell">
    <p class="mb-8 text-sm font-semibold text-mist/55">Selected partners</p>
    <LogoCarousel />
   </div>
  </section>

  <section class="overflow-hidden py-20 md:py-32 lg:py-40">
   <div class="shell">
    <div class="grid gap-12 lg:grid-cols-12 lg:items-end">
     <div class="lg:col-span-8">
      <h2 class="display-title max-w-[15ch] text-5xl leading-[0.92] md:text-7xl lg:text-[6.4rem]">
       Close enough to understand. Rigorous enough to trust.
      </h2>
     </div>
     <div class="lg:col-span-3 lg:col-start-10 lg:pb-2">
      <p class="body-copy text-base md:text-lg">
       Since 2009, Dansom has connected regional access with independent research and practical advisory.
      </p>
      <NuxtLink to="/About" class="text-link mt-7">About Dansom <Icon name="mdi:arrow-right" /></NuxtLink>
     </div>
    </div>

    <div class="mt-16 grid gap-4 md:mt-24 md:grid-cols-12 md:grid-rows-[14rem_18rem]">
     <figure class="media-shift overflow-hidden rounded-2xl border border-line/55 md:col-span-7 md:row-span-2">
      <img
       src="/dansom-livelihoods-research.jpg"
       alt="Researchers examining crop conditions with a farmer"
       width="1586"
       height="992"
       loading="lazy"
       class="h-full min-h-80 w-full object-cover"
      />
     </figure>
     <div class="flex items-end rounded-2xl border border-line/55 bg-primary p-7 text-accent-ink md:col-span-5 md:p-9">
      <p class="font-display text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">Regional expertise. Independent judgement.</p>
     </div>
     <figure class="media-shift overflow-hidden rounded-2xl border border-line/55 md:col-span-5">
      <img
       src="/dansom-research-workshop.jpg"
       alt="Researchers facilitating a collaborative workshop"
       width="1586"
       height="992"
       loading="lazy"
       class="h-full min-h-64 w-full object-cover"
      />
     </figure>
    </div>
   </div>
  </section>

  <HomeFieldSequence />

  <section id="capabilities" class="py-20 md:py-32 lg:py-40">
   <div class="shell">
   <div class="max-w-4xl">
     <h2 class="display-title text-4xl leading-[0.96] md:text-6xl lg:text-7xl">Expertise that moves with the context.</h2>
     <p class="body-copy mt-6 text-base md:text-lg">
      Six connected capabilities support programmes from first question to field delivery and institutional learning.
    </p>
    <div class="mt-8 flex items-center gap-3">
     <button type="button" class="rail-control" aria-label="Previous expertise" @click="moveCapabilities(-1)">
      <Icon name="mdi:arrow-left" />
     </button>
     <button type="button" class="rail-control" aria-label="Next expertise" @click="moveCapabilities(1)">
      <Icon name="mdi:arrow-right" />
     </button>
    </div>
   </div>
  </div>

   <div
    ref="capabilityRail"
    class="capability-rail mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(1rem,calc((100vw-1400px)/2+2rem))] pb-6 md:mt-14 md:gap-6"
    tabindex="0"
    aria-label="Dansom areas of expertise"
   >
    <NuxtLink
     v-for="(service, index) in services"
     :key="service.title"
     :to="'/Services/' + encodeURIComponent(service.slug)"
     class="capability-panel group relative flex min-h-[30rem] w-[84vw] max-w-[46rem] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-line/55 bg-panel p-7 shadow-lift md:w-[62vw] md:p-10 lg:w-[46vw]"
    >
     <img
      v-if="serviceImages[index]"
      :src="serviceImages[index]"
      :alt="serviceAlts[index]"
      width="1586"
      height="992"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
     />
     <div v-if="serviceImages[index]" class="absolute inset-0 bg-gradient-to-t from-[#08131f]/90 via-[#08131f]/30 to-[#08131f]/10"></div>
     <div class="relative flex h-full flex-1 flex-col" :class="serviceImages[index] ? 'text-[#f3f7f9]' : 'text-mist'">
      <div class="flex items-start justify-between gap-8">
       <Icon :name="service.icon" class="text-3xl text-primary" />
       <Icon name="mdi:arrow-top-right" class="text-2xl opacity-45 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
      </div>
      <div class="mt-auto pt-24">
       <h3 class="max-w-[16ch] font-display text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">{{ service.title }}</h3>
       <p class="mt-5 max-w-xl text-sm leading-relaxed opacity-70 md:text-base">{{ service.description }}</p>
      </div>
     </div>
    </NuxtLink>
   </div>
  </section>

  <section class="border-y border-line/35 bg-panel-soft/45 py-20 md:py-32">
   <div class="shell">
    <div class="grid gap-12 lg:grid-cols-12">
     <div class="lg:col-span-4">
      <h2 class="display-title text-4xl leading-tight md:text-6xl">Selected experience</h2>
      <p class="body-copy mt-5">Long-term partnerships and independent assignments across complex sectors and operating environments.</p>
      <NuxtLink to="/Portfolio" class="text-link mt-7">View portfolio <Icon name="mdi:arrow-right" /></NuxtLink>
     </div>

     <div class="lg:col-span-7 lg:col-start-6">
      <article v-for="project in featuredProjects" :key="project.title" class="project-row grid gap-5 border-b border-line/45 py-8 first:pt-0 md:grid-cols-[7rem_1fr_auto] md:items-center">
       <div class="flex h-16 items-center rounded-xl bg-white p-3">
        <img :src="'/' + project.icon" :alt="project.Ngo || project.title" class="max-h-full w-full object-contain" loading="lazy" />
       </div>
       <div>
        <p class="text-sm font-semibold text-primary">{{ project.Location }}</p>
        <h3 class="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-mist">{{ project.title }}</h3>
       </div>
       <NuxtLink to="/Portfolio" :aria-label="`Read about ${project.title}`" class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line/60 text-mist transition hover:border-primary hover:bg-primary hover:text-accent-ink">
        <Icon name="mdi:arrow-top-right" />
       </NuxtLink>
      </article>
     </div>
    </div>
   </div>
  </section>

  <section class="py-6 md:py-8">
   <div class="shell">
    <div class="relative min-h-[38rem] overflow-hidden rounded-2xl border border-line/55">
     <img
      src="/dansom-field-operations.jpg"
      alt="Dansom field researchers travelling through a rural area"
      width="1586"
      height="992"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover"
     />
     <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,15,24,0.9),rgba(4,15,24,0.38)_62%,rgba(4,15,24,0.12))]"></div>
     <div class="relative flex min-h-[38rem] max-w-3xl flex-col justify-end p-7 text-[#f3f7f9] md:p-14 lg:p-20">
      <h2 class="font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] md:text-6xl">Make the next decision with better evidence.</h2>
      <p class="mt-6 max-w-xl text-base leading-relaxed text-[#f3f7f9]/72 md:text-lg">Bring us the context, the uncertainty and the questions that matter.</p>
      <NuxtLink to="/Contact" class="button-primary mt-8 w-fit">Contact <Icon name="mdi:arrow-right" /></NuxtLink>
     </div>
    </div>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
 import { services } from "~/data/services"
 import { projects } from "~/data/projects"

 useSeoMeta({
  title: "Home",
  description:
   "Dansom Research & Consultancy delivers monitoring, evaluation, research, political economy analysis, and advisory services across Somalia, Kenya, and the Horn of Africa.",
  ogTitle: "Dansom Research & Consultancy",
  ogDescription:
   "Evidence, partnership, and insight for development and humanitarian partners working across Somalia, Kenya, and the Horn of Africa.",
  ogImage: "/dansom-field-research-hero.jpg",
  twitterCard: "summary_large_image",
 })

 const serviceImages: Record<number, string> = {
  0: "/dansom-community-dialogue.jpg",
  3: "/dansom-research-workshop.jpg",
  5: "/dansom-livelihoods-research.jpg",
 }

 const serviceAlts: Record<number, string> = {
  0: "Community members contributing to a facilitated research discussion",
  3: "A group participating in an organisational research workshop",
  5: "Researchers examining environmental and agricultural conditions",
 }

 const featuredProjects = projects.slice(0, 4)

 const capabilityRail = ref<HTMLElement | null>(null)

 const moveCapabilities = (direction: number) => {
  const rail = capabilityRail.value
  if (!rail) return

  const panel = rail.querySelector<HTMLElement>(".capability-panel")
  const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap) || 24
  const distance = (panel?.offsetWidth || rail.clientWidth * 0.8) + gap
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  rail.scrollBy({ left: direction * distance, behavior: reduceMotion ? "auto" : "smooth" })
 }
</script>

<style scoped>
.media-shift img {
 transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
}

.media-shift:hover img {
 transform: scale(1.025);
}

.capability-rail {
 overscroll-behavior-inline: contain;
 scrollbar-color: rgb(var(--primary)) rgb(var(--line) / 0.22);
 scrollbar-width: thin;
}

.capability-rail::-webkit-scrollbar {
 height: 6px;
}

.capability-rail::-webkit-scrollbar-track {
 background: rgb(var(--line) / 0.22);
}

.capability-rail::-webkit-scrollbar-thumb {
 border-radius: 999px;
 background: rgb(var(--primary));
}

.rail-control {
 display: inline-flex;
 height: 3rem;
 width: 3rem;
 align-items: center;
 justify-content: center;
 border: 1px solid rgb(var(--line) / 0.7);
 border-radius: 0.75rem;
 background: rgb(var(--panel));
 color: rgb(var(--mist));
 font-size: 1.25rem;
 box-shadow: 0 12px 32px -24px rgb(var(--shadow) / 0.65);
 transition: transform 250ms ease, border-color 250ms ease, background 250ms ease, color 250ms ease;
}

.rail-control:hover {
 transform: translateY(-2px);
 border-color: rgb(var(--primary));
 background: rgb(var(--primary));
 color: rgb(var(--accent-ink));
}

.capability-panel:nth-child(even) {
 margin-top: 3rem;
}

.project-row {
 transition: padding-left 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.project-row:hover {
 padding-left: 0.75rem;
}

@media (max-width: 767px) {
 .capability-panel:nth-child(even) { margin-top: 0; }
 .project-row:hover { padding-left: 0; }
}

@media (prefers-reduced-motion: reduce) {
 .media-shift img,
 .project-row,
 .rail-control {
  transition: none;
 }
}
</style>
