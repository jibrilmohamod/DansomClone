<template>
 <div>
  <div class="max-w-3xl pb-8 md:pb-10">
   <h2 class="display-title text-4xl leading-tight md:text-5xl" :class="variantStyles.title">{{ title }}</h2>
   <p class="body-copy mt-4 text-base md:text-lg" :class="variantStyles.subtitle">{{ subtitle }}</p>
  </div>
  <slot name="vfor"></slot>
 </div>
</template>

<script setup>
 import { computed } from "vue"
 const props = defineProps({
  title: String,
  subtitle: String,
  variant: { type: String, default: "dark" },
 })
 const variantStyles = computed(() => ({
  title: "text-mist",
  subtitle: "text-mist/[0.65]",
 }))
</script>