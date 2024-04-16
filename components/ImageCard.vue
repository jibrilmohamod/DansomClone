<template>
 <div
  :style="{
   backgroundImage: 'radial-gradient(#474bff 2px, transparent 2px)',
   backgroundSize: '12px 16px',
   backgroundColor: '#47d3ff',
  }"
  class="md:h-96 2xl:h-[40vh] md:w-10/12 duration-1000 ease-in-out rounded-full flex items-center justify-center gap-2 p-4 md:gap-6 bg-opacity-60 flex-col"
 >
  <NuxtImg
   :src="image"
   class="rounded-full h-80 w-80 shadow-quaternary shadow-xl object-cover"
  />
 </div>
</template>

<script setup>
 defineProps({
  image: {
   type: String,
   default:
    "https://dansomconsultancy.org/wp-content/uploads/2018/10/expertise-1000x757.jpg",
  },
 })
</script>

<style lang="scss" scoped></style>
