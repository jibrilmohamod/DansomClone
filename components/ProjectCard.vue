<template>
 <div data-aos="fade-up" data-aos-duration="800">
  <NuxtLink :to="slug">
   <div
    class="bg-white shadow-2xl rounded-lg overflow-hidden h-60 hover:scale-110 hover:duration-200 hover:ease-linear"
   >
    <div class="h-full px-3 pb-2">
     <!-- logo  -->
     <div class="flex justify-center items-center h-1/2">
      <NuxtImg
       :src="icon"
       alt="logo"
       class="object-contain h-24 w-fit"
       format="webp"
       loading="lazy"
       v-if="icon"
      />
     </div>
     <div class="h-1/2 flex items-center">
      <h3 class="font-Lora text-lg text-pretty text-quaternary">
       {{ title }}
      </h3>
     </div>
    </div>
   </div>
  </NuxtLink>
 </div>
</template>

<script lang="ts" setup>
 defineProps({
  title: String,
  icon: String,
  icon2: String,
  slug: String,
 })
</script>

<style></style>
