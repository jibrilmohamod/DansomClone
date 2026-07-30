<template>
 <div>
  <TheHeader title="Capabilities" eyebrow="What we do" intro="Integrated research, monitoring, advisory, institutional support, and field delivery for complex contexts.">
   <template #image><img src="/dansom-field-monitoring.jpg" alt="Researchers independently monitoring rural water infrastructure" fetchpriority="high" /></template>
  </TheHeader>

  <section class="atlas-grid bg-ink py-24 md:py-36">
   <div class="atlas-shell">
    <RevealBlock class="max-w-6xl"><p class="atlas-label">The operating model</p><h2 class="atlas-display mt-6 text-[clamp(3.5rem,8.5vw,9rem)] leading-[0.84]">The method changes with the question. The rigour does not.</h2></RevealBlock>
   </div>
  </section>

  <section class="bg-[#050e17] text-white">
   <article v-for="(service,index) in services" :key="service.slug" class="service-scene relative min-h-[125dvh] border-t border-white/15">
    <div class="sticky top-0 grid min-h-[100dvh] overflow-hidden lg:grid-cols-12">
     <div class="service-visual relative min-h-[42dvh] lg:col-span-5 lg:min-h-full">
      <img :src="images[index]" :alt="service.description" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,14,23,.1),rgba(5,14,23,.7))]"></div>
      <p class="absolute bottom-6 left-6 font-display text-sm text-white/55 md:bottom-10 md:left-10">0{{ index+1 }} / 0{{ services.length }}</p>
     </div>
     <div class="atlas-grid flex items-end p-6 pb-12 md:p-10 md:pb-16 lg:col-span-7 lg:p-16">
      <div class="max-w-4xl">
       <div class="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 text-[#c5e060]"><Icon :name="service.icon" class="text-3xl" /></div>
       <p class="atlas-label mt-10">{{ service.category }}</p>
       <h2 class="atlas-display mt-5 text-[clamp(3rem,7vw,7.5rem)] leading-[0.84]">{{ service.title }}</h2>
       <p class="mt-7 max-w-2xl text-base leading-relaxed text-white/64 md:text-lg">{{ service.subtitle }}</p>
       <NuxtLink :to="`/Services/${encodeURIComponent(service.slug)}`" class="button-primary mt-8">Explore capability <Icon name="mdi:arrow-right" /></NuxtLink>
      </div>
     </div>
    </div>
   </article>
  </section>

  <section class="bg-panel py-24 md:py-36">
   <div class="atlas-shell grid gap-12 lg:grid-cols-12">
    <RevealBlock class="lg:col-span-7"><p class="atlas-label">Across every assignment</p><h2 class="atlas-display mt-6 text-[clamp(3.5rem,7vw,7rem)] leading-[0.86]">Secure access. Independent evidence. Decision-ready analysis.</h2></RevealBlock>
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
