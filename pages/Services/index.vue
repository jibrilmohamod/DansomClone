<template>
 <div>
  <TheHeader title="Capabilities" eyebrow="What we do" intro="Integrated research, monitoring, advisory, institutional support, and field delivery for complex contexts.">
   <template #image><img src="/dansom-field-monitoring.jpg" alt="Researchers independently monitoring rural water infrastructure" fetchpriority="high" /></template>
  </TheHeader>

  <section class="atlas-grid bg-ink py-24 md:py-36">
   <div class="atlas-shell">
    <RevealBlock class="max-w-5xl"><p class="atlas-label">The operating model</p><h2 class="atlas-display mt-6 text-[clamp(3rem,6vw,6rem)] leading-[0.94]">The method changes with the question. The rigour does not.</h2></RevealBlock>
   </div>
  </section>

  <section class="bg-panel text-mist">
   <article v-for="(service,index) in services" :key="service.slug" class="service-scene relative min-h-[118dvh] border-t border-line/45">
    <div class="sticky top-0 grid min-h-[100dvh] overflow-hidden lg:grid-cols-12">
     <div class="service-visual relative min-h-[42dvh] lg:col-span-5 lg:min-h-full" :class="index % 2 === 1 ? 'lg:order-2' : ''">
      <img :src="images[index]" :alt="service.description" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,14,23,.1),rgba(5,14,23,.7))]"></div>
      <p class="absolute bottom-6 left-6 font-display text-sm text-white/55 md:bottom-10 md:left-10">0{{ index+1 }} / 0{{ services.length }}</p>
     </div>
     <div class="service-copy-panel atlas-grid flex items-end bg-panel p-6 pb-12 md:p-10 md:pb-16 lg:col-span-7 lg:p-16" :class="index % 2 === 1 ? 'lg:order-1' : ''">
      <div class="service-copy max-w-4xl">
       <div class="flex h-14 w-14 items-center justify-center rounded-xl border border-line/65 text-primary"><Icon :name="service.icon" class="text-3xl" /></div>
       <p class="atlas-label mt-10">{{ service.category }}</p>
       <h2 class="atlas-display mt-5 max-w-[17ch] text-[clamp(2.6rem,5vw,5.25rem)] leading-[0.94]">{{ service.title }}</h2>
       <p class="mt-7 max-w-2xl text-base leading-relaxed text-mist/64 md:text-lg">{{ service.subtitle }}</p>
       <NuxtLink :to="`/Services/${encodeURIComponent(service.slug)}`" class="button-primary mt-8">Explore capability <Icon name="mdi:arrow-right" /></NuxtLink>
      </div>
     </div>
    </div>
   </article>
  </section>

  <section class="bg-panel py-24 md:py-36">
   <div class="atlas-shell grid gap-12 lg:grid-cols-12">
    <RevealBlock class="lg:col-span-7"><p class="atlas-label">Across every assignment</p><h2 class="atlas-display mt-6 text-[clamp(2.8rem,5.2vw,5.25rem)] leading-[0.94]">Secure access. Independent evidence. Decision-ready analysis.</h2></RevealBlock>
    <RevealBlock class="self-end border-t border-line/55 pt-6 lg:col-span-3 lg:col-start-10"><p class="text-lg leading-relaxed text-mist/65">Field teams positioned across Somalia and Kenya, supported by multidisciplinary researchers and operational specialists.</p><NuxtLink to="/Contact" class="button-primary mt-7">Discuss an assignment <Icon name="mdi:arrow-right" /></NuxtLink></RevealBlock>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
 import { services } from "~/data/services"
 const images=["/dansom-community-dialogue.jpg","/dansom-field-monitoring.jpg","/dansom-research-workshop.jpg","/dansom-programme-analysis.jpg","/dansom-field-operations.jpg","/dansom-livelihoods-research.jpg"]
 useSeoMeta({ title:"Services", description:"Explore Dansom Research & Consultancy services including political economy analysis, third-party monitoring and evaluation, research, security advisory, and knowledge management.", ogTitle:"Services | Dansom Research & Consultancy", ogDescription:"Specialised research, MEL, advisory, and knowledge services for complex operating environments across Somalia and Kenya.", ogImage:"/dansom-field-monitoring.jpg", twitterCard:"summary_large_image" })
</script>

<style scoped>
.service-visual { overflow:hidden; }
.service-visual img { transform:scale(1.04); }
.service-copy-panel { position:relative; }
.service-copy-panel::before { content:""; position:absolute; inset:0 auto 0 0; width:3px; background:rgb(var(--primary)); transform:scaleY(.16); transform-origin:bottom; opacity:.7; }
@media (prefers-reduced-motion:no-preference) {
 .service-visual img { animation:service-image linear both; animation-timeline:view(block); animation-range:entry 0% cover 85%; }
 .service-copy { animation:service-copy linear both; animation-timeline:view(block); animation-range:entry 4% cover 38%; }
 .service-copy-panel::before { animation:service-rule linear both; animation-timeline:view(block); animation-range:entry 5% cover 55%; }
}
@keyframes service-image { from { transform:scale(1.11); } to { transform:scale(1.02); } }
@keyframes service-copy { from { opacity:.2; transform:translateY(3rem); } to { opacity:1; transform:none; } }
@keyframes service-rule { from { transform:scaleY(.16); } to { transform:scaleY(1); } }
</style>
