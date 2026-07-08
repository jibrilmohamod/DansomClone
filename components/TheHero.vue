<template>
 <section class="relative isolate min-h-[78svh] overflow-hidden text-slate-900 md:min-h-screen">
 <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-white/90 to-slate-100"></div>
  <div class="pointer-events-none absolute inset-0 bg-neon-grid opacity-60"></div>
  <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.7),transparent_52%),radial-gradient(circle_at_12%_20%,rgba(17,24,39,0.08),transparent_34%)]"></div>
  <div class="absolute inset-0 opacity-55" aria-hidden="true">
   <NuxtImg
    provider="cloudinary"
    format="webp"
    loading="lazy"
    src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
    class="h-full w-full object-cover"
   />
   <div class="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-white/75 to-slate-100/85"></div>
  </div>

  <div class="relative">
   <TheNav />
   <div class="container flex min-h-[calc(78svh-3.5rem)] items-center px-4 pb-8 pt-8 md:min-h-[calc(100vh-4rem)] md:px-6 md:pb-24 md:pt-24">
    <div class="grid items-center gap-6 md:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
     <div class="space-y-3 md:space-y-7">
      <div class="inline-flex items-center gap-2 rounded-full border border-secondary/35 bg-secondary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary shadow-sm transition hover:bg-secondary/20 md:px-4 md:py-2 md:text-[11px] md:tracking-[0.35em]">
       <span class="h-2 w-2 rounded-full bg-secondary"></span>
       Transforming research into impact
      </div>
      <div class="space-y-3 md:space-y-4">
       <h1 class="font-display text-2xl font-semibold leading-tight md:text-4xl lg:text-6xl">
        Evidence, partnership, and insight for a resilient Horn of Africa
       </h1>
       <p class="max-w-2xl font-body text-sm text-slate-700 md:text-xl">
        DANSOM pairs deep regional access with rigorous analysis to help development and humanitarian partners make confident decisions.
       </p>
      </div>
      <div class="flex flex-wrap gap-2 md:gap-3">
      <NuxtLink
       to="/Portfolio"
       class="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:from-secondary hover:to-primary md:px-5 md:py-3 md:text-base"
      >
        View recent work
        <span class="transition-transform group-hover:translate-x-1">
         <Icon name="ic:round-arrow-outward" class="text-xl" />
        </span>
       </NuxtLink>
       <NuxtLink
        to="/Contact"
        class="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-4 py-2.5 text-sm font-semibold text-primary transition hover:-translate-y-1 hover:border-primary/60 hover:bg-secondary/10 md:px-5 md:py-3 md:text-base"
       >
        Talk to our team
        <span class="transition-transform group-hover:translate-x-1">
         <Icon name="mdi:message-text-outline" class="text-xl" />
        </span>
       </NuxtLink>
      </div>

      <div class="grid gap-2 sm:grid-cols-3 md:gap-3">
       <div class="rounded-lg border border-slate-200 bg-white/90 p-2.5 shadow-none transition md:dansom-card-soft md:p-4 md:hover:-translate-y-1 md:hover:border-secondary/45">
        <p class="text-2xl font-semibold text-slate-900 md:text-3xl">15+</p>
        <p class="text-xs text-slate-600 md:text-sm">years delivering research and advisory services</p>
       </div>
       <div class="rounded-lg border border-slate-200 bg-white/90 p-2.5 shadow-none transition md:dansom-card-soft md:p-4 md:hover:-translate-y-1 md:hover:border-secondary/45">
        <p class="text-2xl font-semibold text-slate-900 md:text-3xl">360°</p>
        <p class="text-xs text-slate-600 md:text-sm">access to hard-to-reach contexts across Somalia</p>
       </div>
       <div class="rounded-lg border border-slate-200 bg-white/90 p-2.5 shadow-none transition md:dansom-card-soft md:p-4 md:hover:-translate-y-1 md:hover:border-secondary/45">
        <p class="text-2xl font-semibold text-slate-900 md:text-3xl">Trusted</p>
        <p class="text-xs text-slate-600 md:text-sm">by UN agencies, INGOs, and regional institutions</p>
       </div>
      </div>
    </div>

    <div class="relative hidden lg:block">
      <div class="dansom-card relative overflow-hidden p-6">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(148,163,184,0.18),transparent_34%),radial-gradient(circle_at_75%_80%,rgba(182,138,53,0.16),transparent_32%)]"></div>
       <div class="relative space-y-6">
        <div class="dansom-card-soft p-4 transition hover:-translate-y-1 hover:border-secondary/45">
         <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
           <Icon name="mdi:earth" class="text-2xl" />
          </span>
          <div>
           <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Regional presence</p>
           <p class="text-lg font-semibold text-slate-900">Somalia &amp; Kenya</p>
          </div>
         </div>
        </div>

        <div class="dansom-card-soft p-4 transition hover:-translate-y-1 hover:border-secondary/45">
         <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
           <Icon name="mdi:shield-check" class="text-2xl" />
          </span>
          <div>
           <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Secure access</p>
           <p class="text-lg font-semibold text-slate-900">Field teams in hard-to-reach areas</p>
          </div>
         </div>
        </div>

        <div class="dansom-card-soft p-4 transition hover:-translate-y-1 hover:border-secondary/45">
         <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
           <Icon name="mdi:chart-bar" class="text-2xl" />
          </span>
          <div>
           <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Impact-driven</p>
           <p class="text-lg font-semibold text-slate-900">Actionable evidence for decision-makers</p>
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
   </div>
   <a
    href="#home-intro"
    class="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-primary/90 transition hover:text-primary md:flex md:gap-2"
    aria-label="Scroll to next section"
   >
    <span class="text-[10px] font-semibold uppercase tracking-[0.24em] md:text-[11px] md:tracking-[0.3em]">Scroll</span>
    <span class="animate-bob inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-white/80 md:h-10 md:w-10">
     <Icon name="mdi:chevron-down" class="text-2xl" />
    </span>
   </a>
  </div>
  </div>
 </section>
</template>
