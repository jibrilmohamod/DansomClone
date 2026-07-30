<template>
 <div>
  <TheHeader
   title="Our Services"
   eyebrow="Capabilities"
   intro="Integrated research, monitoring, advisory, institutional support, and field delivery for complex contexts."
  >
   <template #image>
    <img
     loading="eager"
     fetchpriority="high"
     width="1586"
     height="992"
     alt="Researchers independently monitoring rural water infrastructure"
     src="/dansom-field-monitoring.jpg"
     class="h-full w-full object-cover"
    />
   </template>
  </TheHeader>

  <section class="py-20 md:py-32">
   <div class="shell grid gap-12 lg:grid-cols-12">
    <RevealBlock class="lg:col-span-4">
     <h2 class="display-title text-4xl leading-tight md:text-6xl">Specialised services for complex operating environments.</h2>
     <p class="body-copy mt-5 text-base md:text-lg">
      Contextual understanding and rigorous methodology keep programmes responsive, accountable, and grounded in reliable evidence.
     </p>
     <div class="media-zoom editorial-media mt-10 hidden lg:block">
      <img src="/dansom-programme-analysis.jpg" alt="A Dansom team reviewing programme evidence" class="aspect-[4/5] w-full object-cover" loading="lazy" />
     </div>
    </RevealBlock>

    <div class="lg:col-span-7 lg:col-start-6">
     <RevealBlock
      v-for="(service, index) in services"
      :key="service.title"
      as="article"
      :delay="index * 45"
      class="service-index border-t border-line/55 py-8 first:border-t-0 first:pt-0 md:py-10"
     >
      <div class="grid gap-5 md:grid-cols-[4rem_1fr_auto] md:items-start">
       <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-line/60 text-primary"><Icon :name="service.icon" class="text-2xl" /></div>
       <div>
        <p class="text-sm font-semibold text-primary">{{ service.category }}</p>
        <h3 class="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-mist md:text-3xl">{{ service.title }}</h3>
        <p class="mt-3 max-w-2xl text-sm leading-relaxed text-mist/62">{{ service.description }}</p>
       </div>
       <NuxtLink :to="'/Services/' + encodeURIComponent(service.slug)" :aria-label="`Explore ${service.title}`" class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line/60 text-mist transition hover:border-primary hover:bg-primary hover:text-accent-ink">
        <Icon name="mdi:arrow-top-right" />
       </NuxtLink>
      </div>
     </RevealBlock>
    </div>
   </div>
  </section>

  <section class="border-t border-line/40 bg-panel-soft/35 py-20 md:py-28">
   <div class="shell grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-5">
     <h2 class="display-title text-4xl leading-tight md:text-5xl">Designed around the operating context.</h2>
    </div>
    <RevealBlock class="grid gap-8 border-y border-line/55 py-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
     <div>
      <p class="font-display text-2xl font-semibold text-primary">Secure access</p>
      <p class="mt-3 text-sm leading-relaxed text-mist/[0.64]">Field teams positioned across Somalia and Kenya.</p>
     </div>
     <div>
      <p class="font-display text-2xl font-semibold text-primary">Decision-ready</p>
      <p class="mt-3 text-sm leading-relaxed text-mist/[0.64]">Clear deliverables aligned to partner objectives.</p>
     </div>
    </RevealBlock>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
 import { services } from "~/data/services"

 useSeoMeta({
  title: "Services",
  description:
   "Explore Dansom Research & Consultancy services including political economy analysis, third-party monitoring and evaluation, research, security advisory, and knowledge management.",
  ogTitle: "Services | Dansom Research & Consultancy",
  ogDescription:
   "Specialised research, MEL, advisory, and knowledge services for complex operating environments across Somalia and Kenya.",
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })

</script>

