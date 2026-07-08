<template>
 <div
  class="flex-col pb-3 pl-4 pr-4 md:container md:m-auto md:flex md:gap-x-6 md:px-6 md:pt-0 2xl:px-0"
  data-aos="fade-up"
  data-aos-duration="1000"
 >
  <div class="flex flex-col gap-2 py-3 md:gap-3 md:py-4">
   <p
    class="text-[10px] uppercase tracking-[0.22em] md:text-xs md:tracking-[0.3em]"
    :class="variantStyles.kicker"
   >
    Capabilities
   </p>
   <h4
    class="font-DM text-2xl md:text-4xl 2xl:text-5xl"
    :class="variantStyles.title"
   >
    {{ title }}
   </h4>
   <p
    class="py-1.5 font-Lora text-sm md:w-3/4 md:py-2 md:pr-3 md:text-base 2xl:pb-4 2xl:text-xl"
    :class="variantStyles.subtitle"
   >
    {{ subtitle }}
   </p>
  </div>
  <slot name="vfor"></slot>
 </div>
</template>

<script setup>
 import { computed } from 'vue'

 const props = defineProps({
  title: String,
  subtitle: String,
  variant: {
   type: String,
   default: 'light',
  },
 })

 const variantStyles = computed(() =>
  props.variant === 'dark'
   ? {
      kicker: 'text-white/80',
      title: 'text-white',
      subtitle: 'text-white/85',
     }
   : {
      kicker: 'text-primary',
      title: 'text-slate-900',
      subtitle: 'text-slate-700',
     },
 )
</script>

<style lang="scss" scoped></style>
