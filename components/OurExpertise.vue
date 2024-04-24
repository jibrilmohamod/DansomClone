<template>
 <div
  class="md:pt-0 pl-6 pr-3 pb-4 md:container md:m-auto md:flex md:gap-x-6 2xl:px-0 md:px-6 flex-col"
  data-aos="fade-up"
  data-aos-duration="1000"
 >
  <div class="py-4 flex flex-col gap-2">
   <h4 class="font-DM text-5xl md:text-6xl 2xl:text-7xl">
    {{ title }}
   </h4>
   <p
    class="text-black md:w-3/4 2xl:pb-7 py-5 font-Lora text-lg md:text-xl md:pr-3 pt-5 2xl:text-2xl"
   >
    {{ subtitle }}
   </p>
  </div>
  <!-- slot  -->
  <slot name="vfor"></slot>
  <!-- button to services page -->
  <!-- <div class="flex py-4">
   <NuxtLink to="/services">
    <Button
     class="bg-primary text-white hover:bg-quaternary hover:duration-700 transition-all hover:ease-linear md:text-2xl md:pr-9 rounded-md md:py-4 flex gap-1 px-4 items-center py-2"
    >
     <Icon name="icon-park-outline:torch" class="text-3xl md:text-4xl" />
     <p class="font-Montserrat">Our Services</p>
    </Button>
   </NuxtLink>
  </div> -->
 </div>
</template>

<script setup>
 defineProps({
  title: String,
  subtitle: String,
 })
</script>

<style lang="scss" scoped></style>
