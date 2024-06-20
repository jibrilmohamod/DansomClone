<template>
 <div class="">
  <NuxtImg :src="image" class="max-h-full object-cover md:object-cover" />
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
