<template>
 <SpeedInsights />

 <div class="w-full overflow-hidden">
  <NuxtPage />
  <TheFooter />

  <!-- Add this icon at the bottom right corner -->
  <div
   class="fixed bottom-4 right-4 cursor-pointer outline-none bg-primary rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out motion-safe:animate-pulse"
   @click="scrollToTop"
   v-show="scrolled"
  >
   <Icon name="ic:round-arrow-upward" class="text-4xl text-white" />
  </div>
 </div>
</template>

<script lang="ts" setup>
 import { SpeedInsights } from "@vercel/speed-insights/nuxt"

 // Define the scrollToTop function directly
 const scrolled = ref(false)
 const checkScroll = () => {
  scrolled.value = window.scrollY > window.innerHeight
 }

 onMounted(() => {
  window.addEventListener("scroll", checkScroll)
 })

 onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll)
 })

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
 .page-enter-active,
 .page-leave-active {
  transition: all 0.4s;
 }
 .page-enter-from,
 .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
 }
</style>
