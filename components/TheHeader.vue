<template>
 <section class="relative isolate overflow-hidden text-white">
  <div class="absolute inset-0">
   <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 scale-[1.02] transform">
     <slot name="image">
      <div class="h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100"></div>
     </slot>
    </div>
   </div>
   <div class="absolute inset-0 bg-gradient-to-b from-slate-900/45 via-slate-900/35 to-slate-900/60"></div>
   <div class="pointer-events-none absolute inset-0 bg-neon-grid opacity-60"></div>
   <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(17,24,39,0.06),transparent_35%),radial-gradient(circle_at_82%_6%,rgba(182,138,53,0.14),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(148,163,184,0.14),transparent_36%)]"></div>
   <div class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900/70 via-transparent to-transparent"></div>
   <div class="pointer-events-none absolute inset-x-10 top-28 hidden h-[520px] rounded-[46px] border border-white/20 bg-white/10 blur-3xl md:block"></div>
  </div>

  <div class="relative">
   <TheNav class="absolute z-50 w-full" />
   <div class="container relative flex min-h-[46vh] items-end pb-8 pt-20 md:min-h-[60vh] md:pb-16 md:pt-32">
    <div class="max-w-3xl rounded-[24px] border border-white/20 bg-slate-900/55 px-5 py-5 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.75)] backdrop-blur-2xl md:rounded-[32px] md:px-8 md:py-9">
     <div class="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/75 md:gap-3 md:text-[11px] md:tracking-[0.32em]">
      <span class="h-px w-14 bg-gradient-to-r from-secondary via-white/80 to-slate-300"></span>
      <span>Dansom Consultancy</span>
     </div>
     <h1 class="mt-3 font-display text-2xl font-semibold leading-tight md:mt-5 md:text-4xl lg:text-5xl">
      <span v-if="projTitle">{{ projTitle }}</span>
      <span v-else>{{ title }}</span>
     </h1>
     <p class="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 md:mt-4 md:text-base">
      Research &amp; Consultancy for the Horn of Africa
     </p>
     <div class="mt-4 flex items-center gap-3 md:mt-6 md:gap-4">
      <div class="hidden h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 md:flex">
       <span class="block h-5 w-5 rounded-full bg-gradient-to-br from-secondary via-white/70 to-slate-300"></span>
      </div>
      <div class="h-px flex-1 bg-gradient-to-r from-secondary/80 via-white/40 to-transparent"></div>
     </div>
    </div>
   </div>
  </div>
 </section>
</template>

<script setup>
 defineProps({
  title: {},
  projTitle: {},
 })
</script>
