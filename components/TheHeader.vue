<template>
 <TheNav />
 <div :class="gradientClass" :style="gradientClass">
  <div class="container mx-auto px-4 py-8">
   <div class="flex flex-col items-center justify-center">
    <h1
     class="text-6xl font-bold text-center text-white font-Lora bg-transparent shadow-md"
    >
     {{ title }}
    </h1>
    <h2 class="text-3xl font-bold text-center text-white">
     <p class="w-3/4 text-center mx-auto">{{ projTitle }}</p>
    </h2>
   </div>
  </div>
 </div>
</template>

<script setup>
 import { computed } from "vue"

 defineProps({
  title: {},
  projTitle: {},
 })

 const gradientClass = computed(() => {
  // Get the current page name from the route
  const currentPage = useRoute().name

  // Define the gradient colors for different pages
  const pageColors = {
   Portfolio:
    "background-color: #e5e5f7;opacity: 1;background-image: radial-gradient(circle at center center, #55C1D9, #e5e5f7), repeating-radial-gradient(circle at center center, #55C1D9, #55C1D9, 38px, transparent 76px, transparent 38px);background-blend-mode: multiply;",
   About:
    "background-color: #e5e5f7;opacity: 1;background-image: radial-gradient(circle at center center, #55C1D9, #e5e5f7), repeating-radial-gradient(circle at center center, #55C1D9, #55C1D9, 40px, transparent 80px, transparent 40px);background-blend-mode: multiply;",
   Careers:
    "background-color: #e5e5f7;opacity: 1;background-image: radial-gradient(circle at center center, #55C1D9, #e5e5f7), repeating-radial-gradient(circle at center center, #55C1D9, #55C1D9, 40px, transparent 80px, transparent 40px);background-blend-mode: multiply;;",
   Contact:
    "background-color: #e7e5f7;opacity: 1;background-image: radial-gradient(circle at center center, #55C1D9, #e5e5f7), repeating-radial-gradient(circle at center center, #55C1D9, #55C1D9, 40px, transparent 80px, transparent 40px);background-blend-mode: multiply;",
  }

  // Return the corresponding gradient class
  return pageColors[currentPage] || "bg-gradient-to-r from-blue-500 to-blue-700"
 })
</script>
