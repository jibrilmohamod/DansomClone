<template>
 <div>
  <section class="home-cinema relative min-h-[100dvh] overflow-hidden bg-[#050e17] text-white">
   <img src="/dansom-field-research-hero.jpg" alt="Dansom researchers speaking with community members in a rural farming area" class="absolute inset-0 h-full w-full object-cover" fetchpriority="high" width="1586" height="992" />
   <div class="home-scrim absolute inset-0"></div>
   <div class="atlas-grid absolute inset-0 opacity-30"></div>
   <TheNav overlay />

   <div class="atlas-shell relative z-10 flex min-h-[calc(100dvh-76px)] items-end pb-10 pt-24 md:pb-14">
    <div class="grid w-full gap-10 lg:grid-cols-12 lg:items-end">
     <div class="lg:col-span-9">
      <p class="atlas-label">Research and advisory services</p>
      <h1 class="atlas-display home-title mt-6 max-w-[16ch] text-[clamp(2.75rem,4.8vw,4.75rem)] leading-[0.96]">Research for complex operating environments.</h1>
     </div>
     <div class="lg:col-span-3">
      <p class="border-t border-white/25 pt-5 text-base leading-relaxed text-white/68">Research, monitoring, and advisory built from trusted access across Somalia, Kenya, and the Horn of Africa.</p>
      <div class="mt-6 flex flex-wrap gap-3"><NuxtLink to="/Portfolio" class="button-primary">Explore the work <Icon name="mdi:arrow-right" /></NuxtLink><NuxtLink to="/About" class="button-ghost border-white/30 text-white">Who we are</NuxtLink></div>
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
 import { services } from "~/data/services"
 import { projects } from "~/data/projects"
 const capabilityTrack = ref<HTMLElement | null>(null)
 const scrollCapabilities = (direction: number) => {
  capabilityTrack.value?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.78, 760), behavior: "smooth" })
 }
 const featuredProjects = projects.slice(0,4)
 useSeoMeta({ title:"Home", description:"Dansom Research & Consultancy provides research, monitoring, evaluation, political economy analysis, and advisory services across Somalia, Kenya, and the Horn of Africa.", ogTitle:"Dansom Research & Consultancy", ogDescription:"Field-grounded research, monitoring, evaluation, and advisory across the Horn of Africa.", ogImage:"/dansom-field-research-hero.jpg", twitterCard:"summary_large_image" })
</script>

<style scoped>
.home-cinema>img { animation: slow-drift 16s ease-in-out alternate infinite; }
.home-scrim { background:linear-gradient(110deg,rgba(5,14,23,.94) 0%,rgba(5,14,23,.68) 52%,rgba(5,14,23,.32) 100%); }
.home-title { animation: home-title 1s 100ms cubic-bezier(.16,1,.3,1) both; }
.atlas-scroll { scrollbar-width: thin; scrollbar-color: rgb(var(--primary)) transparent; }
.service-panel { background: linear-gradient(145deg,rgb(var(--panel)/.65),transparent 70%); }
.capability-control { display:inline-flex; height:3rem; width:3rem; align-items:center; justify-content:center; border:1px solid rgb(var(--line)/.65); border-radius:.75rem; color:rgb(var(--mist)); transition:transform 240ms ease,border-color 240ms ease,background-color 240ms ease,color 240ms ease; }
.capability-control:hover { border-color:rgb(var(--primary)); background:rgb(var(--primary)); color:rgb(var(--accent-ink)); transform:translateY(-2px); }
.experience-row { grid-template-columns:9.5rem minmax(0,1fr) auto; }
.experience-logo-cell { display:flex; min-height:4.75rem; align-items:center; }
@media(max-width:767px){.experience-row{grid-template-columns:minmax(7.5rem,9rem) minmax(0,1fr)}.experience-row>:last-child{grid-column:2}.experience-logo-cell{min-height:4rem}}
@keyframes home-title { from { opacity:0; transform:translateY(55px) } to { opacity:1; transform:none } }
@media (prefers-reduced-motion:reduce) { .home-cinema>img,.home-title { animation:none; } }
</style>
