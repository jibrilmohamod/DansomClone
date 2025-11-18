<template>
 <div
  class="md:pt-0 pl-6 pr-3 pb-4 md:container md:m-auto md:flex md:gap-x-6 2xl:px-0 md:px-6 flex-col"
  data-aos="fade-up"
  data-aos-duration="1000"
 >
  <div class="py-4 flex flex-col gap-3">
   <p class="text-xs uppercase tracking-[0.3em] text-primary">Capabilities</p>
   <h4 class="font-DM text-3xl md:text-4xl 2xl:text-5xl text-quinary">
    {{ title }}
   </h4>
   <p class="text-slate-700 md:w-3/4 2xl:pb-4 py-2 font-Lora md:pr-3 2xl:text-xl">
    {{ subtitle }}
   </p>
  </div>
  <slot name="vfor"></slot>
 </div>
</template>

<script setup>
 defineProps({
  title: String,
  subtitle: String,
 })
</script>

<style lang="scss" scoped></style>
