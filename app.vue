<template>
 <div class="w-full overflow-hidden">
  <NuxtPage />
  <TheFooter />

  <!-- Add this icon at the bottom right corner -->
  <div class="fixed bottom-4 right-4 cursor-pointer" @click="scrollToTop">
   <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    class="h-6 w-6 text-white bg-primary rounded-full p-1"
   >
    <path
     stroke-linecap="round"
     stroke-linejoin="round"
     stroke-width="2"
     d="M5 10l7-7m0 0l7 7m-7-7v18"
    ></path>
   </svg>
  </div>
 </div>
</template>

<script lang="ts" setup>
 // Define the scrollToTop function directly
 const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
 }
</script>

<style scoped>
 .fixed {
  position: fixed;
 }
 .cursor-pointer {
  cursor: pointer;
 }
</style>
