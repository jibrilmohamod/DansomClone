<template>
 <div>
  <div class="max-w-3xl pb-6 md:pb-8">
   <h2 class="font-display text-3xl font-semibold tracking-tight md:text-4xl" :class="variantStyles.title">
    {{ title }}
   </h2>
   <p class="mt-3 max-w-2xl font-body text-base leading-relaxed md:text-lg" :class="variantStyles.subtitle">
    {{ subtitle }}
   </p>
  </div>
  <slot name="vfor"></slot>
 </div>
</template>

<script setup>
 import { computed } from "vue"

 const props = defineProps({
  title: String,
  subtitle: String,
  variant: {
   type: String,
   default: "light",
  },
 })

 const variantStyles = computed(() =>
  props.variant === "dark"
   ? { title: "text-white", subtitle: "text-slate-200" }
   : { title: "text-slate-900", subtitle: "text-slate-600" },
 )
</script>
