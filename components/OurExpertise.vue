<template>
 <div
  class="md:pt-0 pl-6 pr-3 pb-4 md:container md:m-auto md:flex md:gap-x-6 2xl:px-0 md:px-6 flex-col"
  data-aos="fade-up"
  data-aos-duration="1000"
 >
  <div class="py-4 flex flex-col gap-3">
   <p
    class="text-xs uppercase tracking-[0.3em]"
    :class="variantStyles.kicker"
   >
    Capabilities
   </p>
   <h4
    class="font-DM text-3xl md:text-4xl 2xl:text-5xl"
    :class="variantStyles.title"
   >
    {{ title }}
   </h4>
   <p
    class="md:w-3/4 2xl:pb-4 py-2 font-Lora md:pr-3 2xl:text-xl"
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
