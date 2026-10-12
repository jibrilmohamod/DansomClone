<template>
 <section class="relative isolate overflow-hidden bg-slate-900 text-white">
  <div class="absolute inset-0">
   <slot name="image">
    <div class="h-full w-full bg-slate-800"></div>
   </slot>
   <div class="absolute inset-0 bg-slate-950/65"></div>
   <div class="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/35 to-slate-950/20"></div>
  </div>

  <div class="relative">
   <TheNav />
   <div class="container flex min-h-[44dvh] items-end px-4 pb-10 pt-20 md:min-h-[52dvh] md:px-6 md:pb-14 md:pt-24">
    <div class="max-w-4xl">
     <p class="text-sm font-semibold text-secondary">Dansom Research &amp; Consultancy</p>
     <h1 class="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
      <span v-if="projTitle">{{ projTitle }}</span>
      <span v-else>{{ title }}</span>
     </h1>
     <p class="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
      Regional research, monitoring, evaluation, and advisory expertise for the Horn of Africa.
     </p>
    </div>
   </div>
  </div>
 </section>
</template>

<script setup>
 defineProps({
  title: String,
  projTitle: String,
 })
</script>
