<template>
 <NuxtLink
  :to="slug"
  class="group flex min-h-56 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_45px_-34px_rgba(30,64,175,0.5)]"
 >
  <div class="flex h-24 items-center justify-start">
   <NuxtImg
    v-if="icon"
    :src="icon"
    :alt="`${title} project partner logo`"
    class="max-h-16 max-w-[12rem] object-contain object-left"
    loading="lazy"
   />
  </div>
  <h3 class="mt-auto font-display text-lg font-semibold leading-snug text-slate-900">{{ title }}</h3>
  <span class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
   View project
   <Icon name="mdi:arrow-right" class="transition group-hover:translate-x-1" />
  </span>
 </NuxtLink>
</template>

<script lang="ts" setup>
 defineProps({
  title: { type: String, required: true },
  icon: String,
  slug: { type: String, required: true },
 })
</script>
