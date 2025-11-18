<template>
 <section class="relative isolate overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-primary/75 to-tertiary/95"></div>
  <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(124,248,255,0.18),transparent_40%),linear-gradient(300deg,rgba(156,123,255,0.16),transparent_38%),radial-gradient(circle_at_12%_20%,rgba(103,153,255,0.14),transparent_32%)]"></div>
  <div class="absolute inset-0 opacity-55" aria-hidden="true">
   <NuxtImg
    provider="cloudinary"
    format="webp"
    loading="lazy"
    src="v1713943514/Community_Mobilization_Bula_jiray-2_vzzaja.jpg"
    class="h-full w-full object-cover"
   />
   <div class="absolute inset-0 bg-gradient-to-r from-primary/90 via-quinary/75 to-tertiary/85"></div>
  </div>

  <div class="relative">
   <TheNav />
   <div class="container px-6 pb-20 pt-14 md:pt-20">
    <div class="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
     <div class="space-y-7">
      <div class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80 ring-1 ring-white/15">
       <span class="h-2 w-2 rounded-full bg-secondary"></span>
       Transforming research into impact
      </div>
      <div class="space-y-4">
       <h1 class="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        Evidence, partnership, and insight for a resilient Horn of Africa
       </h1>
       <p class="max-w-2xl font-body text-lg text-white/85 md:text-xl">
        DANSOM pairs deep regional access with rigorous analysis to help development and humanitarian partners make confident decisions.
       </p>
      </div>
      <div class="flex flex-wrap gap-3">
       <NuxtLink
        to="/Portfolio"
        class="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-quaternary px-5 py-3 text-base font-semibold text-primary shadow-glow transition hover:-translate-y-1 hover:shadow-lg"
       >
        View recent work
        <span class="transition-transform group-hover:translate-x-1">
         <Icon name="ic:round-arrow-outward" class="text-xl" />
        </span>
       </NuxtLink>
       <NuxtLink
        to="/Contact"
        class="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
       >
        Talk to our team
        <span class="transition-transform group-hover:translate-x-1">
         <Icon name="mdi:message-text-outline" class="text-xl" />
        </span>
       </NuxtLink>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
       <div class="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/10 p-4 backdrop-blur-xl shadow-lg shadow-black/30 ring-1 ring-white/10">
        <p class="text-3xl font-semibold text-white">15+</p>
        <p class="text-sm text-white/75">years delivering research and advisory services</p>
       </div>
       <div class="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/10 p-4 backdrop-blur-xl shadow-lg shadow-black/30 ring-1 ring-white/10">
        <p class="text-3xl font-semibold text-white">360°</p>
        <p class="text-sm text-white/75">access to hard-to-reach contexts across Somalia</p>
       </div>
       <div class="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/10 p-4 backdrop-blur-xl shadow-lg shadow-black/30 ring-1 ring-white/10">
        <p class="text-3xl font-semibold text-white">Trusted</p>
        <p class="text-sm text-white/75">by UN agencies, INGOs, and regional institutions</p>
       </div>
      </div>
    </div>

    <div class="relative">
      <div class="relative overflow-hidden rounded-[30px] border border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-white/10 p-6 backdrop-blur-2xl shadow-2xl shadow-black/30 ring-1 ring-white/15">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(124,248,255,0.18),transparent_35%),radial-gradient(circle_at_75%_20%,rgba(156,123,255,0.16),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(103,153,255,0.16),transparent_35%)]"></div>
       <div class="relative space-y-6">
        <div class="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg shadow-black/20 ring-1 ring-white/10">
         <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-secondary">
           <Icon name="mdi:earth" class="text-2xl" />
          </span>
          <div>
           <p class="text-xs uppercase tracking-[0.2em] text-white/60">Regional presence</p>
           <p class="text-lg font-semibold text-white">Somalia &amp; Kenya</p>
          </div>
         </div>
        </div>

        <div class="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg shadow-black/20 ring-1 ring-white/10">
         <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-secondary">
           <Icon name="mdi:shield-check" class="text-2xl" />
          </span>
          <div>
           <p class="text-xs uppercase tracking-[0.2em] text-white/60">Secure access</p>
           <p class="text-lg font-semibold text-white">Field teams in hard-to-reach areas</p>
          </div>
         </div>
        </div>

        <div class="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg shadow-black/20 ring-1 ring-white/10">
         <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-secondary">
           <Icon name="mdi:chart-bar" class="text-2xl" />
          </span>
          <div>
           <p class="text-xs uppercase tracking-[0.2em] text-white/60">Impact-driven</p>
           <p class="text-lg font-semibold text-white">Actionable evidence for decision-makers</p>
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
   </div>
  </div>
  </div>
 </section>
</template>
