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

  <HomeServicesExplorer />

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
       <div class="flex h-16 items-center px-2 py-3">
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

 const featuredProjects = projects.slice(0, 4)
</script>

<style scoped>
.media-shift img {
 transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
}

.media-shift:hover img {
 transform: scale(1.025);
}

.project-row {
 transition: padding-left 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.project-row:hover {
 padding-left: 0.75rem;
}

@media (max-width: 767px) {
 .project-row:hover { padding-left: 0; }
}

@media (prefers-reduced-motion: reduce) {
 .media-shift img,
 .project-row {
  transition: none;
 }
}
</style>

