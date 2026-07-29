<template>
 <section class="relative overflow-hidden bg-ink text-mist">
  <TheNav />

  <div class="shell grid min-h-[calc(100dvh-4.5rem)] items-center gap-10 py-10 md:py-14 lg:grid-cols-12 lg:gap-8">
   <div class="reveal relative z-10 lg:col-span-7">
    <p class="eyebrow">Research grounded in regional access</p>
    <h1 class="display-title mt-5 max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-6xl">
     Evidence and insight for a resilient Horn of Africa
    </h1>
    <p class="mt-6 max-w-xl text-base leading-relaxed text-mist/[0.68] md:text-lg">
     DANSOM pairs deep regional access with rigorous analysis to help humanitarian and development partners make confident decisions.
    </p>
    <div class="mt-8 flex flex-wrap gap-3">
     <NuxtLink to="/Portfolio" class="button-primary">
      View recent work
      <Icon name="ic:round-arrow-outward" class="text-lg" />
     </NuxtLink>
     <NuxtLink to="/Contact" class="button-ghost">
      Contact
      <Icon name="mdi:message-text-outline" class="text-lg" />
     </NuxtLink>
    </div>
   </div>

   <div class="relative lg:col-span-5 lg:h-[620px]">
    <div class="media-zoom relative ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-2xl border border-mist/10 bg-panel shadow-lift lg:h-full lg:w-full">
     <NuxtImg
      provider="cloudinary"
      format="webp"
      loading="eager"
      preload
      sizes="sm:90vw md:60vw lg:620px"
      src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
      alt="A Dansom field research setting in Somalia"
      class="h-full w-full object-cover"
     />
     <div class="absolute inset-0 bg-gradient-to-t from-ink/[0.55] via-transparent to-transparent"></div>
    </div>
    <div class="absolute -bottom-5 left-0 w-[46%] overflow-hidden rounded-2xl border-4 border-ink bg-panel shadow-lift md:bottom-8 lg:-left-16">
     <NuxtImg
      provider="cloudinary"
      format="webp"
      loading="eager"
      sizes="sm:45vw lg:280px"
      src="v1713943514/Community_Mobilization_Bula_jiray-2_vzzaja.jpg"
      alt="Community engagement during Dansom fieldwork"
      class="aspect-square w-full object-cover"
     />
    </div>
   </div>
  </div>

  <div class="border-y border-mist/10 bg-panel/[0.65]">
   <div class="shell grid sm:grid-cols-3">
    <div class="py-6 sm:border-r sm:border-mist/10 sm:pr-6">
     <p class="font-display text-3xl font-semibold text-primary">15+</p>
     <p class="mt-1 text-sm text-mist/[0.55]">Years delivering research and advisory services</p>
    </div>
    <div class="border-t border-mist/10 py-6 sm:border-r sm:border-t-0 sm:px-6">
     <p class="font-display text-2xl font-semibold text-mist">Somalia and Kenya</p>
     <p class="mt-1 text-sm text-mist/[0.55]">Field teams with trusted local access</p>
    </div>
    <div class="border-t border-mist/10 py-6 sm:border-t-0 sm:pl-6">
     <p class="font-display text-2xl font-semibold text-mist">Independent</p>
     <p class="mt-1 text-sm text-mist/[0.55]">Evidence for institutional decision-makers</p>
    </div>
   </div>
  </div>
 </section>
</template>