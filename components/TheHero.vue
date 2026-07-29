<template>
 <section class="relative overflow-hidden bg-ink text-mist">
  <TheNav />

  <div class="shell grid min-h-[calc(100dvh-4.5rem)] items-center gap-10 py-8 md:py-12 lg:grid-cols-12 lg:gap-10">
   <div class="reveal lg:col-span-5">
    <p class="eyebrow">Research grounded in regional access</p>
    <h1 class="display-title mt-5 max-w-2xl text-5xl leading-[0.98] sm:text-6xl lg:text-[4rem]">
     Evidence for a resilient Horn of Africa
    </h1>
    <p class="mt-6 max-w-lg text-base leading-relaxed text-mist/[0.68] md:text-lg">
     Local access and rigorous research help development partners make confident decisions across Somalia, Kenya, and the wider region.
    </p>
    <div class="mt-8 flex flex-wrap gap-3">
     <NuxtLink to="/Portfolio" class="button-primary">
      View recent work
      <Icon name="mdi:arrow-top-right" class="text-lg" />
     </NuxtLink>
     <NuxtLink to="/Contact" class="button-ghost">
      Talk to our team
      <Icon name="mdi:message-text-outline" class="text-lg" />
     </NuxtLink>
    </div>
   </div>

   <div class="lg:col-span-7">
    <div class="media-zoom overflow-hidden rounded-2xl border border-mist/10 bg-panel shadow-lift">
     <img
      src="/dansom-field-research-hero.jpg"
      width="1810"
      height="869"
      loading="eager"
      fetchpriority="high"
      alt="East African researchers speaking with community members during a field study"
      class="aspect-[16/11] w-full object-cover object-center lg:aspect-[16/10]"
     />
    </div>
   </div>
  </div>

  <div class="border-y border-mist/10 bg-panel/[0.72]">
   <div class="shell grid sm:grid-cols-3">
    <div class="py-6 sm:border-r sm:border-mist/10 sm:pr-6">
     <p class="font-display text-3xl font-semibold text-primary">15+</p>
     <p class="mt-1 text-sm text-mist/[0.64]">Years delivering research and advisory services</p>
    </div>
    <div class="border-t border-mist/10 py-6 sm:border-r sm:border-t-0 sm:px-6">
     <p class="font-display text-2xl font-semibold text-mist">Somalia and Kenya</p>
     <p class="mt-1 text-sm text-mist/[0.64]">Field teams with trusted local access</p>
    </div>
    <div class="border-t border-mist/10 py-6 sm:border-t-0 sm:pl-6">
     <p class="font-display text-2xl font-semibold text-mist">Independent evidence</p>
     <p class="mt-1 text-sm text-mist/[0.64]">Clear findings for institutional decision-makers</p>
    </div>
   </div>
  </div>
 </section>
</template>
