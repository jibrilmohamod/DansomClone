<template>
 <section class="bg-slate-50 text-slate-900">
  <TheNav />

  <div class="container grid min-h-[calc(100dvh-4rem)] items-center gap-10 px-4 py-10 md:px-6 md:py-14 lg:grid-cols-[1.05fr_0.95fr]">
   <div class="max-w-3xl">
    <p class="text-sm font-semibold text-primary">Research grounded in regional access</p>
    <h1 class="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
     Evidence and insight for a resilient Horn of Africa
    </h1>
    <p class="mt-5 max-w-2xl font-body text-base leading-relaxed text-slate-600 md:text-lg">
     DANSOM pairs deep regional access with rigorous analysis to help humanitarian and development partners make confident decisions.
    </p>
    <div class="mt-7 flex flex-wrap gap-3">
     <NuxtLink
      to="/Portfolio"
      class="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 active:translate-y-px md:text-base"
     >
      View recent work
      <Icon name="ic:round-arrow-outward" class="text-lg" />
     </NuxtLink>
     <NuxtLink
      to="/Contact"
      class="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-primary/25 bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-primary/5 active:translate-y-px md:text-base"
     >
      Contact
      <Icon name="mdi:message-text-outline" class="text-lg" />
     </NuxtLink>
    </div>
   </div>

   <div class="relative">
    <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_28px_80px_-50px_rgba(30,64,175,0.55)]">
     <NuxtImg
      provider="cloudinary"
      format="webp"
      loading="eager"
      preload
      sizes="sm:100vw md:50vw lg:720px"
      src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
      alt="A Dansom field research setting in Somalia"
      class="aspect-[4/3] w-full rounded-xl object-cover"
     />
    </div>
   </div>
  </div>

  <div class="border-y border-slate-200 bg-white">
   <div class="container grid px-4 sm:grid-cols-3 md:px-6">
    <div class="py-6 sm:border-r sm:border-slate-200 sm:pr-6">
     <p class="text-3xl font-semibold text-primary">15+</p>
     <p class="mt-1 text-sm text-slate-600">Years delivering research and advisory services</p>
    </div>
    <div class="border-t border-slate-200 py-6 sm:border-r sm:border-t-0 sm:px-6">
     <p class="text-3xl font-semibold text-primary">Somalia and Kenya</p>
     <p class="mt-1 text-sm text-slate-600">Field teams with trusted local access</p>
    </div>
    <div class="border-t border-slate-200 py-6 sm:border-t-0 sm:pl-6">
     <p class="text-3xl font-semibold text-primary">Independent</p>
     <p class="mt-1 text-sm text-slate-600">Evidence for institutional decision-makers</p>
    </div>
   </div>
  </div>
 </section>
</template>
