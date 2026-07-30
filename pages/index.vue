<template>
 <div>
  <section class="home-cinema relative min-h-[100dvh] overflow-hidden bg-[#050e17] text-white">
   <img src="/dansom-field-research-hero.jpg" alt="Dansom researchers speaking with community members in a rural farming area" class="absolute inset-0 h-full w-full object-cover" fetchpriority="high" width="1586" height="992" />
   <div class="absolute inset-0 bg-[linear-gradient(110deg,rgba(5,14,23,0.94)_0%,rgba(5,14,23,0.64)_50%,rgba(5,14,23,0.24)_100%)]"></div>
   <div class="atlas-grid absolute inset-0 opacity-30"></div>
   <TheNav overlay />

   <div class="atlas-shell relative z-10 flex min-h-[calc(100dvh-76px)] items-end pb-10 pt-24 md:pb-14">
    <div class="grid w-full gap-10 lg:grid-cols-12 lg:items-end">
     <div class="lg:col-span-9">
      <p class="atlas-label">Research grounded in lived context</p>
      <h1 class="atlas-display home-title mt-6 max-w-[10ch] text-[clamp(4rem,10vw,10rem)] leading-[0.8]">Evidence begins where context lives.</h1>
     </div>
     <div class="lg:col-span-3">
      <p class="border-t border-white/25 pt-5 text-base leading-relaxed text-white/68">Research, monitoring, and advisory built from trusted access across Somalia, Kenya, and the Horn of Africa.</p>
      <div class="mt-6 flex flex-wrap gap-3"><NuxtLink to="/Portfolio" class="button-primary">Explore the work <Icon name="mdi:arrow-right" /></NuxtLink><NuxtLink to="/About" class="button-ghost border-white/30 text-white">Who we are</NuxtLink></div>
     </div>
    </div>
   </div>
  </section>

  <section class="border-y border-line/45 bg-panel py-8">
   <div class="atlas-shell"><p class="atlas-label mb-6">Selected partners</p><LogoCarousel /></div>
  </section>

  <section class="atlas-grid bg-ink py-24 md:py-36">
   <div class="atlas-shell grid gap-14 lg:grid-cols-12">
    <RevealBlock class="lg:col-span-8">
     <p class="atlas-label">The premise</p>
     <h2 class="atlas-display mt-6 text-[clamp(3.5rem,8vw,8.5rem)] leading-[0.86]">Complex places do not need distant assumptions.</h2>
    </RevealBlock>
    <RevealBlock class="self-end border-t border-line/55 pt-6 lg:col-span-3 lg:col-start-10">
     <p class="text-lg leading-relaxed text-mist/65">Since 2009, Dansom has connected field access with independent analysis so programmes can respond to what is actually happening.</p>
     <NuxtLink to="/About" class="text-link mt-6">About Dansom <Icon name="mdi:arrow-right" /></NuxtLink>
    </RevealBlock>
   </div>
  </section>

  <section class="bg-[#050e17] text-white">
   <article v-for="chapter in chapters" :key="chapter.title" class="chapter relative min-h-[135dvh]">
    <div class="sticky top-0 h-[100dvh] overflow-hidden">
     <img :src="chapter.image" :alt="chapter.alt" class="h-full w-full object-cover" loading="lazy" />
     <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,14,23,0.88),rgba(5,14,23,0.3)_70%)]"></div>
     <div class="atlas-grid absolute inset-0 opacity-25"></div>
     <div class="atlas-shell absolute inset-x-0 bottom-0 pb-12 md:pb-16">
      <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
       <div class="lg:col-span-8"><p class="atlas-label">{{ chapter.stage }}</p><h2 class="atlas-display mt-5 max-w-[10ch] text-[clamp(3.5rem,8vw,8rem)] leading-[0.84]">{{ chapter.title }}</h2></div>
       <p class="border-t border-white/25 pt-5 text-base leading-relaxed text-white/68 lg:col-span-3 lg:col-start-10">{{ chapter.copy }}</p>
      </div>
     </div>
    </div>
   </article>
  </section>

  <section class="overflow-hidden bg-ink py-24 md:py-36">
   <div class="atlas-shell">
    <RevealBlock class="max-w-5xl"><p class="atlas-label">Capabilities</p><h2 class="atlas-display mt-6 text-[clamp(3.5rem,8vw,8rem)] leading-[0.86]">One team from field evidence to practical action.</h2></RevealBlock>
   </div>
   <div class="atlas-scroll mt-14 flex snap-x snap-mandatory overflow-x-auto border-y border-line/50 pl-[max(1rem,calc((100vw-1600px)/2+2.5rem))]">
    <NuxtLink v-for="(service,index) in services" :key="service.slug" :to="`/Services/${encodeURIComponent(service.slug)}`" class="service-panel group flex min-h-[32rem] w-[84vw] max-w-[48rem] shrink-0 snap-start flex-col border-r border-line/50 p-7 md:p-10">
     <div class="flex items-center justify-between"><Icon :name="service.icon" class="text-3xl text-primary" /><span class="font-display text-sm text-mist/35">0{{ index+1 }}</span></div>
     <div class="mt-auto"><p class="atlas-label">{{ service.category }}</p><h3 class="atlas-display mt-4 text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] transition group-hover:text-primary">{{ service.title }}</h3><p class="mt-5 max-w-xl text-base leading-relaxed text-mist/62">{{ service.description }}</p><span class="mt-8 inline-flex items-center gap-2 font-bold text-primary">Explore <Icon name="mdi:arrow-right" class="transition group-hover:translate-x-1" /></span></div>
    </NuxtLink>
   </div>
  </section>

  <section class="border-t border-line/45 bg-panel-soft/35 py-24 md:py-36">
   <div class="atlas-shell grid gap-14 lg:grid-cols-12">
    <RevealBlock class="lg:col-span-4"><p class="atlas-label">Selected experience</p><h2 class="atlas-display mt-6 text-5xl leading-[0.9] md:text-7xl">Evidence tested in real programmes.</h2><NuxtLink to="/Portfolio" class="button-ghost mt-8">Full portfolio <Icon name="mdi:arrow-right" /></NuxtLink></RevealBlock>
    <div class="lg:col-span-7 lg:col-start-6">
     <NuxtLink v-for="project in featuredProjects" :key="project.title" to="/Portfolio" class="group grid gap-5 border-t border-line/55 py-8 first:border-t-0 first:pt-0 md:grid-cols-[8rem_1fr_auto] md:items-center">
      <img :src="`/${project.icon}`" :alt="project.Ngo || project.title" class="max-h-14 max-w-[7rem] object-contain" loading="lazy" />
      <div><p class="text-sm font-semibold text-primary">{{ project.Location }}</p><h3 class="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight transition group-hover:text-primary">{{ project.title }}</h3></div>
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
 const chapters = [
  { stage:"Listen", title:"Access before assumptions.", copy:"Local researchers begin with the people, institutions, and incentives shaping each operating environment.", image:"/dansom-community-dialogue.jpg", alt:"Dansom researchers listening to community members during a consultation" },
  { stage:"Verify", title:"Evidence tested from every angle.", copy:"Field observations, interviews, and quantitative evidence are triangulated to separate signal from noise.", image:"/dansom-field-monitoring.jpg", alt:"A researcher recording observations during field monitoring" },
  { stage:"Advise", title:"Findings built for decisions.", copy:"Clear analysis and practical recommendations help partners adapt programmes, allocate resources, and act with confidence.", image:"/dansom-programme-analysis.jpg", alt:"A research team reviewing programme findings and charts" },
 ]
 const featuredProjects = projects.slice(0,4)
 useSeoMeta({ title:"Home", description:"Dansom Research & Consultancy provides research, monitoring, evaluation, political economy analysis, and advisory services across Somalia, Kenya, and the Horn of Africa.", ogTitle:"Dansom Research & Consultancy", ogDescription:"Field-grounded research, monitoring, evaluation, and advisory across the Horn of Africa.", ogImage:"/dansom-field-research-hero.jpg", twitterCard:"summary_large_image" })
</script>

<style scoped>
.home-cinema>img { animation: slow-drift 16s ease-in-out alternate infinite; }
.home-title { animation: home-title 1s 100ms cubic-bezier(.16,1,.3,1) both; }
.atlas-scroll { scrollbar-width: thin; scrollbar-color: rgb(var(--primary)) transparent; }
.service-panel { background: linear-gradient(145deg,rgb(var(--panel)/.65),transparent 70%); }
@keyframes home-title { from { opacity:0; transform:translateY(55px) } to { opacity:1; transform:none } }
@media (prefers-reduced-motion:reduce) { .home-cinema>img,.home-title { animation:none; } }
</style>
