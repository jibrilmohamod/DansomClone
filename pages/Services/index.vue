<template>
 <div>
  <TheHeader title="Our Services">
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

  <section class="py-16 md:py-28">
   <div class="shell">
    <div class="reveal max-w-3xl">
     <h2 class="display-title text-4xl leading-tight md:text-6xl">Specialised services for complex operating environments.</h2>
     <p class="body-copy mt-5 text-base md:text-lg">
      Contextual understanding and rigorous methodology keep programmes responsive, accountable, and grounded in reliable evidence.
     </p>
    </div>

    <div class="mt-12 grid auto-rows-fr gap-5 md:grid-cols-12">
     <article
      v-for="(service, index) in services"
      :key="service.title"
      class="surface group flex min-h-72 flex-col p-6 transition duration-500 hover:-translate-y-1 hover:border-primary/40 md:p-8"
      :class="index % 4 === 0 || index % 4 === 3 ? 'md:col-span-7' : 'md:col-span-5'"
     >
      <div class="flex items-center justify-between gap-4">
       <Icon :name="service.icon" class="text-3xl text-primary" />
       <span class="text-sm font-semibold text-mist/[0.45]">{{ service.category }}</span>
      </div>
      <div class="mt-auto pt-14">
       <h3 class="font-display text-2xl font-semibold tracking-tight text-mist md:text-3xl">{{ service.title }}</h3>
       <p class="mt-3 max-w-xl text-sm leading-relaxed text-mist/[0.64]">{{ service.description }}</p>
       <NuxtLink :to="'/Services/' + encodeURIComponent(service.slug)" class="text-link mt-6">
        Explore service
        <Icon name="mdi:arrow-right" />
       </NuxtLink>
      </div>
     </article>
    </div>
   </div>
  </section>

  <section class="border-t border-mist/10 bg-panel/[0.62] py-16 md:py-24">
   <div class="shell grid gap-10 lg:grid-cols-12">
    <div class="lg:col-span-5">
     <h2 class="display-title text-4xl leading-tight md:text-5xl">Designed around the operating context.</h2>
    </div>
    <div class="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
     <div>
      <p class="font-display text-2xl font-semibold text-primary">Secure access</p>
      <p class="mt-3 text-sm leading-relaxed text-mist/[0.64]">Field teams positioned across Somalia and Kenya.</p>
     </div>
     <div>
      <p class="font-display text-2xl font-semibold text-primary">Decision-ready</p>
      <p class="mt-3 text-sm leading-relaxed text-mist/[0.64]">Clear deliverables aligned to partner objectives.</p>
     </div>
    </div>
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
