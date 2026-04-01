<template>
 <section class="relative isolate min-h-screen overflow-hidden text-slate-900">
 <div class="absolute inset-0 bg-gradient-to-b from-slate-900/45 via-white/88 to-slate-100"></div>
  <div class="pointer-events-none absolute inset-0 bg-neon-grid opacity-60"></div>
  <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.7),transparent_52%),radial-gradient(circle_at_12%_20%,rgba(17,24,39,0.08),transparent_34%)]"></div>
  <div class="absolute inset-0 opacity-55" aria-hidden="true">
   <NuxtImg
    provider="cloudinary"
    format="webp"
    loading="lazy"
    src="v1713943514/Community_Mobilization_Bula_jiray-2_vzzaja.jpg"
    class="h-full w-full object-cover"
   />
   <div class="absolute inset-0 bg-gradient-to-r from-slate-900/35 via-white/65 to-slate-100/80"></div>
  </div>

  <div class="relative">
   <TheNav />
   <div class="container flex min-h-[calc(100vh-4rem)] items-center px-6 pb-24 pt-20 md:pt-24">
    <div class="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
     <div class="space-y-7">
      <div class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-700 shadow-sm">
       <span class="h-2 w-2 rounded-full bg-secondary"></span>
       Transforming research into impact
      </div>
      <div class="space-y-4">
       <h1 class="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        Evidence, partnership, and insight for a resilient Horn of Africa
       </h1>
       <p class="max-w-2xl font-body text-lg text-slate-700 md:text-xl">
        DANSOM pairs deep regional access with rigorous analysis to help development and humanitarian partners make confident decisions.
       </p>
      </div>
      <div class="flex flex-wrap gap-3">
      <NuxtLink
       to="/Portfolio"
       class="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-base font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:from-secondary hover:to-primary"
      >
        View recent work
        <span class="transition-transform group-hover:translate-x-1">
         <Icon name="ic:round-arrow-outward" class="text-xl" />
        </span>
       </NuxtLink>
       <NuxtLink
        to="/Contact"
        class="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-5 py-3 text-base font-semibold text-primary transition hover:-translate-y-1 hover:border-primary/60 hover:bg-secondary/10"
       >
        Talk to our team
        <span class="transition-transform group-hover:translate-x-1">
         <Icon name="mdi:message-text-outline" class="text-xl" />
        </span>
       </NuxtLink>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
       <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <p class="text-3xl font-semibold text-slate-900">15+</p>
        <p class="text-sm text-slate-600">years delivering research and advisory services</p>
       </div>
       <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <p class="text-3xl font-semibold text-slate-900">360°</p>
        <p class="text-sm text-slate-600">access to hard-to-reach contexts across Somalia</p>
       </div>
       <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <p class="text-3xl font-semibold text-slate-900">Trusted</p>
        <p class="text-sm text-slate-600">by UN agencies, INGOs, and regional institutions</p>
       </div>
      </div>
    </div>

    <div class="relative">
      <div class="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.45)]">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(148,163,184,0.18),transparent_34%),radial-gradient(circle_at_75%_80%,rgba(182,138,53,0.16),transparent_32%)]"></div>
       <div class="relative space-y-6">
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
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

        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
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

        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
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
    class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-primary/90 transition hover:text-primary"
    aria-label="Scroll to next section"
   >
    <span class="text-[11px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
    <span class="animate-bob inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-white/80">
     <Icon name="mdi:chevron-down" class="text-2xl" />
    </span>
   </a>
  </div>
  </div>
 </section>
</template>
