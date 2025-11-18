<template>
 <section class="relative isolate overflow-hidden text-white">
  <div class="absolute inset-0">
   <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 scale-[1.02] transform">
     <slot name="image">
      <div class="h-full w-full bg-gradient-to-br from-primary via-surface to-secondary"></div>
     </slot>
    </div>
   </div>
   <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-primary/75 to-primary"></div>
   <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(215,176,101,0.18),transparent_35%),radial-gradient(circle_at_82%_6%,rgba(140,115,87,0.14),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(111,137,155,0.12),transparent_36%)]"></div>
   <div class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
   <div class="pointer-events-none absolute inset-x-10 top-28 h-[520px] rounded-[46px] border border-white/10 bg-white/5 blur-3xl"></div>
  </div>

  <div class="relative">
   <TheNav class="absolute z-50 w-full" />
   <div class="container relative flex min-h-[60vh] items-end pb-16 pt-32">
    <div class="max-w-3xl rounded-[32px] border border-white/15 bg-white/10 px-8 py-9 shadow-[0_22px_80px_-32px_rgba(0,0,0,0.75)] backdrop-blur-2xl">
     <div class="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/70">
      <span class="h-px w-14 bg-gradient-to-r from-secondary via-white/70 to-white/20"></span>
      <span>Dansom Consultancy</span>
     </div>
     <h1 class="mt-5 font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
      <span v-if="projTitle">{{ projTitle }}</span>
      <span v-else>{{ title }}</span>
     </h1>
     <p class="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
      Research &amp; Consultancy for the Horn of Africa
     </p>
     <div class="mt-6 flex items-center gap-4">
      <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
       <span class="block h-5 w-5 rounded-full bg-gradient-to-br from-secondary via-primary to-white/70"></span>
      </div>
      <div class="h-px flex-1 bg-gradient-to-r from-white/60 via-white/25 to-transparent"></div>
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
