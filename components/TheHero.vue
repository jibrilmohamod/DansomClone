<template>
 <section class="relative isolate overflow-hidden bg-gradient-to-br from-quaternary via-primary to-primary/40 text-white">
  <div
   class="pointer-events-none absolute inset-0 opacity-70"
   aria-hidden="true"
  >
   <NuxtImg
    provider="cloudinary"
    format="webp"
    loading="lazy"
    src="v1713943514/Community_Mobilization_Bula_jiray-2_vzzaja.jpg"
    class="h-full w-full object-cover"
   />
   <div class="absolute inset-0 bg-gradient-to-r from-quinary via-quaternary/80 to-primary/60"></div>
  </div>

  <div class="relative">
   <TheNav />
   <div class="container px-6 pb-16 pt-10 md:pt-16">
    <div class="grid items-center gap-12 md:grid-cols-2">
     <div class="space-y-6">
      <p class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-teal-50 ring-1 ring-white/20">
       <span class="h-2 w-2 rounded-full bg-tertiary"></span>
       Transforming research into impact
      </p>
      <h1 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl font-Playfair">
       Evidence, partnership, and insight for a resilient Horn of Africa
      </h1>
      <p class="text-lg text-slate-100 md:text-xl font-Montserrat">
       DANSOM pairs deep regional access with rigorous analysis to help development and humanitarian partners make confident decisions.
      </p>
      <div class="flex flex-wrap gap-4">
       <NuxtLink
        to="/Portfolio"
        class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-base font-semibold text-quinary shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
       >
        View recent work
        <Icon name="ic:round-arrow-outward" class="text-xl" />
       </NuxtLink>
       <NuxtLink
        to="/Contact"
        class="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
       >
        Talk to our team
        <Icon name="mdi:message-text-outline" class="text-xl" />
       </NuxtLink>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
       <div class="rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/20">
        <p class="text-3xl font-bold text-white">15+</p>
        <p class="text-sm text-slate-100">years delivering research and advisory services</p>
       </div>
       <div class="rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/20">
        <p class="text-3xl font-bold text-white">360°</p>
        <p class="text-sm text-slate-100">access to hard-to-reach contexts across Somalia</p>
       </div>
       <div class="rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/20">
        <p class="text-3xl font-bold text-white">Trusted</p>
        <p class="text-sm text-slate-100">by UN agencies, INGOs, and regional institutions</p>
       </div>
      </div>
     </div>

     <div class="relative">
      <div class="rounded-[28px] border border-white/30 bg-white/10 p-6 backdrop-blur shadow-2xl shadow-black/10">
       <div class="space-y-6">
        <div class="rounded-2xl bg-white/20 p-4 ring-1 ring-white/30">
         <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-quinary">
           <Icon name="mdi:earth" class="text-2xl" />
          </span>
          <div>
           <p class="text-sm uppercase tracking-wide text-white/80">Regional presence</p>
           <p class="text-lg font-semibold text-white">Somalia &amp; Kenya</p>
          </div>
         </div>
        </div>

        <div class="rounded-2xl bg-white/20 p-4 ring-1 ring-white/30">
         <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-quinary">
           <Icon name="mdi:shield-check" class="text-2xl" />
          </span>
          <div>
           <p class="text-sm uppercase tracking-wide text-white/80">Secure access</p>
           <p class="text-lg font-semibold text-white">Field teams in hard-to-reach areas</p>
          </div>
         </div>
        </div>

        <div class="rounded-2xl bg-white/20 p-4 ring-1 ring-white/30">
         <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-quinary">
           <Icon name="mdi:chart-bar" class="text-2xl" />
          </span>
          <div>
           <p class="text-sm uppercase tracking-wide text-white/80">Impact-driven</p>
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
