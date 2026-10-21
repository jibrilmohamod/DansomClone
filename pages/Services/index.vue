<template>
 <div>
  <TheHeader
   title="Services"
   eyebrow="What we do"
   intro="Research, monitoring, advisory, institutional support and field delivery for complex contexts."
   variant="services"
  >
   <template #image>
    <img :src="photography.servicesHero.src" :alt="photography.servicesHero.alt" :style="{ objectPosition: photography.servicesHero.position }" fetchpriority="high" />
   </template>
  </TheHeader>

  <section class="atlas-grid bg-ink py-24 md:py-36">
   <div class="atlas-shell">
    <RevealBlock class="max-w-5xl"><p class="atlas-label">Our services</p><h2 class="atlas-display mt-6 text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[0.98]">Research, monitoring and advisory support for complex programmes.</h2></RevealBlock>
   </div>
  </section>

  <section class="bg-panel text-mist">
   <article v-for="(service,index) in services" :key="service.slug" class="service-scene relative border-t border-line/45">
    <div class="atlas-shell grid items-center gap-10 py-14 md:gap-14 md:py-20 lg:grid-cols-12">
     <div class="service-visual relative flex w-full items-center justify-center lg:col-span-6" :class="index % 2 === 1 ? 'lg:order-2' : ''">
      <img :src="images[index].src" :alt="images[index].alt" :style="{ objectPosition: images[index].position }" class="block h-auto max-h-[34rem] w-full object-contain" loading="lazy" />
     </div>
     <div class="service-copy-panel flex items-center py-2 lg:col-span-6 lg:px-6" :class="index % 2 === 1 ? 'lg:order-1' : ''">
      <div class="service-copy max-w-4xl">
       <div class="flex h-14 w-14 items-center justify-center rounded-xl border border-line/65 text-primary"><Icon :name="service.icon" class="text-3xl" /></div>
       <p class="atlas-label mt-10">{{ service.category }}</p>
       <h2 class="atlas-display mt-5 max-w-[19ch] text-[clamp(2.15rem,3.8vw,3.85rem)] leading-[0.98]">{{ service.title }}</h2>
       <p class="mt-7 max-w-2xl text-base leading-relaxed text-mist/64 md:text-lg">{{ service.subtitle }}</p>
       <NuxtLink :to="`/Services/${encodeURIComponent(service.slug)}`" class="button-primary mt-8">View service <Icon name="mdi:arrow-right" /></NuxtLink>
      </div>
     </div>
    </div>
   </article>
  </section>

  <section class="bg-panel py-24 md:py-36">
   <div class="atlas-shell grid gap-12 lg:grid-cols-12">
    <RevealBlock class="lg:col-span-7"><p class="atlas-label">Regional delivery</p><h2 class="atlas-display mt-6 text-[clamp(2.3rem,4vw,4rem)] leading-[0.98]">Regional expertise across every assignment.</h2></RevealBlock>
    <RevealBlock class="self-end border-t border-line/55 pt-6 lg:col-span-3 lg:col-start-10"><p class="text-lg leading-relaxed text-mist/65">Field teams positioned across Somalia and Kenya, supported by multidisciplinary researchers and operational specialists.</p><NuxtLink to="/Contact" class="button-primary mt-7">Discuss an assignment <Icon name="mdi:arrow-right" /></NuxtLink></RevealBlock>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
import { photography } from "~/data/photography"
 import { services } from "~/data/services"
 const images = [photography.politicalEconomy, photography.monitoring, photography.research, photography.capacity, photography.operations, photography.environment]
 useSeoMeta({ title:"Services", description:"Explore Dansom Research & Consultancy services including political economy analysis, third-party monitoring and evaluation, research, security advisory, and knowledge management.", ogTitle:"Services | Dansom Research & Consultancy", ogDescription:"Specialised research, MEL, advisory, and knowledge services for complex operating environments across Somalia and Kenya.", ogImage:photography.servicesHero.src, ogImageAlt:photography.servicesHero.alt, twitterImage:photography.servicesHero.src, twitterImageAlt:photography.servicesHero.alt, twitterCard:"summary_large_image" })
</script>

<style scoped>
.service-visual img { transform:none; }
.service-copy-panel { position:relative; }
.service-copy-panel::before { content:""; position:absolute; inset:0 auto 0 0; width:3px; background:rgb(var(--primary)); transform:scaleY(.16); transform-origin:bottom; opacity:.7; }
@media (prefers-reduced-motion:no-preference) {
 .service-copy { animation:service-copy linear both; animation-timeline:view(block); animation-range:entry 4% cover 38%; }
 .service-copy-panel::before { animation:service-rule linear both; animation-timeline:view(block); animation-range:entry 5% cover 55%; }
}
@keyframes service-copy { from { opacity:.2; transform:translateY(3rem); } to { opacity:1; transform:none; } }
@keyframes service-rule { from { transform:scaleY(.16); } to { transform:scaleY(1); } }
</style>
