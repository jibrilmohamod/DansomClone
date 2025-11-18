<template>
 <section class="relative isolate overflow-hidden bg-gradient-to-br from-primary via-surface to-primary text-white">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(245,158,11,0.18),transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]"></div>
  <div class="absolute inset-0 opacity-40" aria-hidden="true">
   <div class="absolute inset-0 bg-gradient-to-r from-primary/85 via-surface/70 to-secondary/40"></div>
  </div>

  <div class="relative">
   <TheNav class="absolute z-50 w-full" />
   <div class="container flex h-[45vh] flex-col items-center justify-end pb-12 pt-28 text-center">
    <p class="text-xs uppercase tracking-[0.35em] text-white/70">Dansom Consultancy</p>
    <h1 class="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
     <span v-if="projTitle">{{ projTitle }}</span>
     <span v-else>{{ title }}</span>
    </h1>
    <div class="mt-4 h-1 w-16 rounded-full bg-secondary"></div>
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
