<template>
 <div class="flex min-h-40 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6">
  <NuxtImg
   v-if="image"
   loading="lazy"
   :src="image"
   :alt="alt"
   class="max-h-28 max-w-full object-contain"
  />
 </div>
</template>

<script setup>
 defineProps({
  image: { type: String, default: "" },
  alt: { type: String, default: "Project partner logo" },
 })
</script>
