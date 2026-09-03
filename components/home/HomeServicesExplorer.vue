<template>
 <section id="services" class="services-directory border-y border-line/35 bg-panel-soft/35 py-20 md:py-32 lg:py-40">
  <div class="shell">
   <div class="max-w-4xl">
    <h2 class="display-title text-3xl leading-[1] md:text-5xl">Research, monitoring and advisory services.</h2>
    <p class="body-copy mt-6 text-base md:text-lg">
     Research, monitoring, advisory, institutional support and field delivery, shaped around the realities of each assignment.
    </p>
   </div>

   <div class="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:items-start">
    <div class="lg:sticky lg:top-24 lg:col-span-5">
     <figure class="service-image overflow-hidden rounded-2xl border border-line/55">
      <img
       :src="photography.programmeAnalysis.src"
       :alt="photography.programmeAnalysis.alt"
       width="1586"
       height="992"
       loading="lazy"
       class="aspect-[4/5] w-full object-cover"
      />
     </figure>
     <p class="mt-6 max-w-md font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-mist md:text-3xl">
      Regional and technical expertise for complex assignments.
     </p>
    </div>

    <div class="grid gap-12 md:grid-cols-2 md:gap-x-10 lg:col-span-6 lg:col-start-7">
     <div v-for="(group, groupIndex) in serviceGroups" :key="groupIndex" class="service-group">
      <article v-for="service in group" :key="service.slug" class="service-entry">
       <p class="text-sm font-semibold text-primary">{{ service.category }}</p>
       <h3 class="mt-3 font-display text-2xl font-semibold leading-[1.04] tracking-[-0.035em] text-mist md:text-3xl">
        {{ service.title }}
       </h3>
       <p class="mt-4 text-sm leading-relaxed text-mist/65">{{ service.description }}</p>
       <NuxtLink :to="serviceHref(service.slug)" class="service-link mt-5" :aria-label="`Explore ${service.title}`">
        Explore service
        <Icon name="mdi:arrow-top-right" aria-hidden="true" />
       </NuxtLink>
      </article>
     </div>
    </div>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
import { photography } from "~/data/photography"
 import { services } from "~/data/services"

 const serviceGroups = computed(() => [services.slice(0, 3), services.slice(3)])
 const serviceHref = (slug: string) => `/Services/${encodeURIComponent(slug)}`
</script>

<style scoped>
.service-image img {
 transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-image:hover img {
 transform: scale(1.025);
}

.service-group {
 border-top: 1px solid rgb(var(--line) / 0.58);
}

.service-entry {
 padding-top: 2rem;
 padding-bottom: 3.5rem;
}

.service-link {
 display: inline-flex;
 align-items: center;
 gap: 0.5rem;
 font-weight: 700;
 color: rgb(var(--mist));
 transition: color 250ms ease, gap 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-link:hover {
 gap: 0.8rem;
 color: rgb(var(--primary));
}

@media (prefers-reduced-motion: reduce) {
 .service-image img,
 .service-link {
  transition: none;
 }
}
</style>
