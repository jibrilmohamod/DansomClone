<template>
 <div>
  <section class="home-cinema relative overflow-hidden border-b border-line/45 bg-ink">
   <TheNav />
   <div class="home-photo-stage relative isolate overflow-hidden">
    <picture class="absolute inset-0 -z-20">
     <source media="(max-width: 767px)" srcset="/images/dansom/home-dialogue-mobile.webp" />
     <img :src="photography.homeHero.src" :alt="photography.homeHero.alt" width="2000" height="1333" fetchpriority="high" loading="eager" class="home-photo h-full w-full object-cover" />
    </picture>
    <div class="home-photo-shade absolute inset-0 -z-10" aria-hidden="true"></div>
    <div class="atlas-shell relative flex h-full items-end py-12 md:py-16">
     <div class="home-editorial-copy max-w-[42rem]">
      <p class="text-xs font-semibold uppercase tracking-[.18em] text-white/80">Research and advisory services</p>
      <h1 class="atlas-display home-title mt-5 max-w-[17ch] text-[clamp(2.35rem,4.25vw,4rem)] leading-[1.04] text-white">Research for complex operating environments.</h1>
      <p class="mt-5 max-w-[49ch] text-base leading-relaxed text-white/85">Research, monitoring, and advisory built from trusted access across Somalia, Kenya, and the Horn of Africa.</p>
      <div class="mt-7 flex flex-wrap gap-3">
       <NuxtLink to="/Portfolio" class="home-hero-primary">Explore the work <Icon name="mdi:arrow-top-right" /></NuxtLink>
       <NuxtLink to="/About" class="home-hero-secondary">Who we are <Icon name="mdi:arrow-right" /></NuxtLink>
      </div>
     </div>
    </div>
   </div>
  </section>

  <section id="partners" class="border-y border-line/45 bg-panel py-8">
   <div class="atlas-shell"><p class="atlas-label mb-6">Selected partners</p><LogoCarousel /></div>
  </section>

  <section class="atlas-grid bg-ink py-20 md:py-24">
   <div class="atlas-shell grid gap-14 lg:grid-cols-12">
    <RevealBlock class="lg:col-span-8">
     <p class="atlas-label">Our approach</p>
     <h2 class="atlas-display mt-6 max-w-[18ch] text-[clamp(2.25rem,4vw,4rem)] leading-[0.98]">Research grounded in local context.</h2>
    </RevealBlock>
    <RevealBlock class="self-end border-t border-line/55 pt-6 lg:col-span-3 lg:col-start-10">
     <p class="text-lg leading-relaxed text-mist/65">Since 2009, Dansom has connected field access with independent analysis so programmes can respond to what is actually happening.</p>
     <NuxtLink to="/About" class="text-link mt-6">About Dansom <Icon name="mdi:arrow-right" /></NuxtLink>
    </RevealBlock>
   </div>
  </section>

  <HomeFieldSequence />

  <section class="overflow-hidden bg-ink py-24 md:py-36">
   <div class="atlas-shell">
    <div class="grid gap-10 lg:grid-cols-12 lg:items-end">
     <RevealBlock class="max-w-4xl lg:col-span-9"><p class="atlas-label">Services</p><h2 class="atlas-display mt-6 text-[clamp(2.4rem,4.3vw,4.25rem)] leading-[0.98]">Research, monitoring and advisory services.</h2></RevealBlock>
     <div class="flex items-center gap-3 lg:col-span-3 lg:justify-end">
      <button type="button" class="capability-control" aria-label="Previous services" @click="scrollCapabilities(-1)"><Icon name="mdi:arrow-left" /></button>
      <button type="button" class="capability-control" aria-label="Next services" @click="scrollCapabilities(1)"><Icon name="mdi:arrow-right" /></button>
     </div>
    </div>
   </div>
   <div ref="capabilityTrack" class="atlas-scroll mt-14 flex snap-x snap-mandatory overflow-x-auto border-y border-line/50 pl-[max(1rem,calc((100vw-1600px)/2+2.5rem))]">
    <NuxtLink v-for="(service,index) in services" :key="service.slug" :to="`/Services/${encodeURIComponent(service.slug)}`" class="service-panel group flex min-h-[32rem] w-[84vw] max-w-[48rem] shrink-0 snap-start flex-col border-r border-line/50 p-7 md:p-10">
     <div class="flex items-center justify-between"><Icon :name="service.icon" class="text-3xl text-primary" /><span class="font-display text-sm text-mist/35">0{{ index+1 }}</span></div>
     <div class="mt-auto"><p class="atlas-label">{{ service.category }}</p><h3 class="atlas-display mt-4 max-w-[20ch] text-[clamp(1.9rem,3vw,3rem)] leading-[1] transition group-hover:text-primary">{{ service.title }}</h3><p class="mt-5 max-w-xl text-base leading-relaxed text-mist/62">{{ service.description }}</p><span class="mt-8 inline-flex items-center gap-2 font-bold text-primary">View service <Icon name="mdi:arrow-right" class="transition group-hover:translate-x-1" /></span></div>
    </NuxtLink>
   </div>
  </section>

  <section class="border-t border-line/45 bg-panel-soft/35 py-24 md:py-36">
   <div class="atlas-shell grid gap-14 lg:grid-cols-12">
    <RevealBlock class="lg:col-span-4"><p class="atlas-label">Selected projects</p><h2 class="atlas-display mt-6 text-[clamp(2.25rem,3.8vw,3.75rem)] leading-[0.98]">Selected assignments across the Horn of Africa.</h2><NuxtLink to="/Portfolio" class="button-ghost mt-8">View all projects <Icon name="mdi:arrow-right" /></NuxtLink></RevealBlock>
    <div class="lg:col-span-7 lg:col-start-6">
     <NuxtLink v-for="project in featuredProjects" :key="project.title" to="/Portfolio" class="experience-row group grid gap-6 border-t border-line/55 py-8 first:border-t-0 first:pt-0 md:items-center">
      <div class="experience-logo-cell"><BrandMark :src="`/${project.icon}`" :alt="project.Ngo || project.title" context="experience" loading="eager" /></div>
      <div><p class="text-sm font-semibold text-primary">{{ project.Location }}</p><h3 class="mt-2 max-w-[32ch] font-display text-[clamp(1.2rem,1.65vw,1.55rem)] font-semibold leading-snug tracking-tight transition group-hover:text-primary">{{ project.title }}</h3></div>
      <Icon name="mdi:arrow-top-right" class="text-2xl text-mist/40 transition group-hover:text-primary" />
     </NuxtLink>
    </div>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
import { photography } from "~/data/photography"
 import { services } from "~/data/services"
 import { projects } from "~/data/projects"
 const capabilityTrack = ref<HTMLElement | null>(null)
 const scrollCapabilities = (direction: number) => {
  capabilityTrack.value?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.78, 760), behavior: "smooth" })
 }
 const featuredProjects = projects.slice(0,4)
 useSeoMeta({ title:"Home", description:"Dansom Research & Consultancy provides research, monitoring, evaluation, political economy analysis, and advisory services across Somalia, Kenya, and the Horn of Africa.", ogTitle:"Dansom Research & Consultancy", ogDescription:"Field-grounded research, monitoring, evaluation, and advisory across the Horn of Africa.", ogImage:photography.homeHero.src, ogImageAlt:photography.homeHero.alt, twitterImage:photography.homeHero.src, twitterImageAlt:photography.homeHero.alt, twitterCard:"summary_large_image" })
</script>

<style scoped>
.home-photo-stage { height:clamp(38rem,calc(100svh - 76px),50rem); color:#fff; }
.home-photo { object-position:65% 34%; }
.home-photo-shade { background:linear-gradient(90deg,rgba(4,16,24,.63),rgba(4,16,24,.12) 80%),linear-gradient(0deg,rgba(4,16,24,.88),rgba(4,16,24,.18) 72%); }
.home-hero-primary,.home-hero-secondary { display:inline-flex; align-items:center; justify-content:center; gap:.75rem; min-height:3rem; padding:.8rem 1.15rem; border:1px solid transparent; border-radius:.35rem; font-weight:600; font-size:.9rem; transition:background-color .2s,color .2s,border-color .2s; }
.home-hero-primary { background:#c9e569; color:#142011; }
.home-hero-primary:hover { background:#d9f28a; }
.home-hero-secondary { border-color:rgba(255,255,255,.55); color:white; background:rgba(4,16,24,.2); }
.home-hero-secondary:hover { background:rgba(255,255,255,.15); border-color:white; }
.home-hero-primary:focus-visible,.home-hero-secondary:focus-visible { outline:2px solid white; outline-offset:4px; }
@media(max-width:767px) {
 .home-photo-stage { height:auto; min-height:42rem; display:flex; }
 .home-photo-stage>.atlas-shell { padding-top:17rem; padding-bottom:2.5rem; }
 .home-photo { object-position:50% 22%; }
 .home-photo-shade { background:linear-gradient(0deg,rgba(4,16,24,.97),rgba(4,16,24,.8) 44%,rgba(4,16,24,.08) 83%); }
}

@media (prefers-reduced-motion: no-preference) {
 .home-title { animation: home-title 760ms 100ms cubic-bezier(.16,1,.3,1) both; }
}
.atlas-scroll { scrollbar-width: thin; scrollbar-color: rgb(var(--primary)) transparent; }
.service-panel { background: linear-gradient(145deg,rgb(var(--panel)/.65),transparent 70%); }
.capability-control { display:inline-flex; height:3rem; width:3rem; align-items:center; justify-content:center; border:1px solid rgb(var(--line)/.65); border-radius:.75rem; color:rgb(var(--mist)); transition:transform 240ms ease,border-color 240ms ease,background-color 240ms ease,color 240ms ease; }
.capability-control:hover { border-color:rgb(var(--primary)); background:rgb(var(--primary)); color:rgb(var(--accent-ink)); transform:translateY(-2px); }
.experience-row { grid-template-columns:9.5rem minmax(0,1fr) auto; }
.experience-logo-cell { display:flex; min-height:4.75rem; align-items:center; }
@media(max-width:767px){.experience-row{grid-template-columns:minmax(7.5rem,9rem) minmax(0,1fr)}.experience-row>:last-child{grid-column:2}.experience-logo-cell{min-height:4rem}}
@keyframes home-title { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:none } }
</style>
