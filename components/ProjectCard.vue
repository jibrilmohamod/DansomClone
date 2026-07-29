<template>
 <NuxtLink
  :to="slug"
  class="group grid min-h-64 overflow-hidden rounded-2xl border border-mist/10 bg-panel transition duration-500 hover:-translate-y-1 hover:border-primary/[0.45] hover:shadow-lift"
 >
  <div class="flex h-32 items-center bg-paper p-6">
   <NuxtImg
    v-if="icon"
    :src="icon"
    :alt="title + ' project partner logo'"
    class="max-h-16 max-w-[12rem] object-contain object-left"
    loading="lazy"
   />
  </div>
  <div class="flex flex-col p-5">
   <h3 class="font-display text-xl font-semibold leading-snug tracking-tight text-mist">{{ title }}</h3>
   <span class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
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
 })
</script>