<template>
 <div class="">
  <NuxtImg
   loading="lazy"
   :src="image"
   class="h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
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
