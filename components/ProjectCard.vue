<template>
 <NuxtLink
  :to="slug"
  class="group grid min-h-[22rem] overflow-hidden rounded-2xl border border-mist/10 bg-panel transition duration-300 hover:-translate-y-1 hover:border-primary/[0.52] hover:shadow-lift"
 >
  <div class="flex h-32 items-center border-b border-mist/10 bg-paper p-6">
   <NuxtImg
    v-if="icon"
    :src="icon"
    :alt="title + ' project partner logo'"
    class="max-h-16 max-w-[12rem] object-contain object-left"
    loading="lazy"
   />
  </div>
  <div class="flex flex-col p-5">
   <p class="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{{ classification }}</p>
   <h3 class="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-mist">{{ title }}</h3>
   <p class="mt-3 text-sm text-mist/[0.62]">{{ location }}<span v-if="timeframe">, {{ timeframe }}</span></p>
   <span class="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-primary">
    View project
    <Icon name="mdi:arrow-right" class="transition group-hover:translate-x-1" />
   </span>
  </div>
 </NuxtLink>
</template>

<script lang="ts" setup>
 defineProps({
  title: { type: String, required: true },
  icon: String,
  slug: { type: String, required: true },
  classification: { type: String, required: true },
  location: { type: String, required: true },
  timeframe: String,
 })
</script>
