<template>
 <div class="h-[50vh] 2xl:h-[40vh]">
  <div
   class="absolute inset-0 z-10 h-[50vh] flex justify-center items-center 2xl:h-[40vh]"
  >
   <!-- page title  -->
  </div>
  <div class="absolute inset-0 z-20 h-[50vh] flex justify-center items-center">
   <!-- page title  -->
   <!-- project title -->
   <div class="h-full justify-center items-center flex pt-16 md:w-3/4">
    <h2
     class="text-white text-3xl uppercase pt-5 md:text-4xl 2xl:pt-0 text-center font-Merriweather"
    >
     <p v-if="projTitle">
      {{ projTitle }}
     </p>

     <p
      v-if="title"
      class="text-white text-5xl uppercase md:text-6xl 2xl:pt-0 text-center font-Merriweather"
     >
      {{ title }}
     </p>
    </h2>
   </div>
  </div>
  <!-- NavBar -->
  <TheNav class="absolute z-50 w-full" />

  <!-- image slot  -->
  <slot name="image"></slot>
 </div>
</template>

<script setup>
 defineProps({
  title: {},
  projTitle: {},
 })
</script>

<style lang="scss" scoped></style>
