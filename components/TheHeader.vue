<template>
 <section class="relative isolate overflow-hidden bg-gradient-to-br from-primary via-quinary to-primary text-white">
  <div class="absolute inset-0" aria-hidden="true">
   <div class="absolute inset-0 bg-gradient-to-r from-primary/85 via-quinary/70 to-secondary/50"></div>
   <div class="absolute inset-0 opacity-60">
    <slot name="image"></slot>
   </div>
  </div>

  <div class="relative">
   <TheNav class="absolute z-50 w-full" />
   <div class="container flex h-[45vh] flex-col items-center justify-end pb-12 pt-28 text-center">
    <p class="text-xs uppercase tracking-[0.3em] text-white/70">Dansom Consultancy</p>
    <h1 class="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl font-Playfair">
     <span v-if="projTitle">{{ projTitle }}</span>
     <span v-else>{{ title }}</span>
    </h1>
    <div class="mt-4 h-1 w-16 rounded-full bg-quaternary"></div>
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

<style scoped></style>
