<template>
 <div class="flex min-h-48 items-center justify-center rounded-2xl bg-paper p-8">
  <img v-if="image" loading="lazy" :src="image" :alt="alt" class="max-h-28 max-w-full object-contain" />
 </div>
</template>

<script setup>
 defineProps({
  image: { type: String, default: "" },
  alt: { type: String, default: "Project partner logo" },
 })
</script>
