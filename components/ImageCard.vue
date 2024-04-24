<template>
 <div
  :style="{
   backgroundImage: 'radial-gradient(#474bff 2px, transparent 2px)',
   backgroundSize: '12px 12px',
   backgroundColor: '',
  }"
  class="md:h-[70vh] md:w-11/12 2xl:h-[40vh] md:w- duration-1000 ease-in-out rounded-full flex items-center justify-center gap-2 p-4 md:gap-6 bg-opacity-60 flex-col md:p-6 m-auto"
 >
  <NuxtImg
   :src="image"
   provider="cloudinary"
   format="webp"
   loading="lazy"
   class="rounded-full h-80 w-80 md:w-full md:h-full shadow-quaternary shadow-xl object-cover"
  />
 </div>
</template>

<script setup>
 defineProps({
  image: {
   type: String,
   default: "v1713943323/ODK_with_Beneficiary-1_d6zteg.jpg",
  },
 })
</script>

<style lang="scss" scoped></style>
