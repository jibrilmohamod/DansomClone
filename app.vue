<template>
 <div class="relative min-h-screen overflow-hidden bg-surface text-white">
  <div class="pointer-events-none absolute inset-0 bg-neon-grid opacity-70 mix-blend-screen"></div>
  <div class="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-secondary/20 via-transparent to-transparent blur-3xl"></div>
  <div class="pointer-events-none absolute inset-y-0 right-0 w-[320px] bg-gradient-to-l from-quaternary/25 via-transparent to-transparent blur-3xl"></div>

  <div class="relative flex min-h-screen flex-col backdrop-blur-[1px]">
   <NuxtPage />
   <TheFooter />

   <button
    type="button"
    class="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-glow ring-1 ring-white/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    @click="scrollToTop"
    v-show="scrolled"
    aria-label="Back to top"
   >
    <Icon name="ic:round-arrow-upward" class="text-2xl" />
   </button>
  </div>
 </div>
</template>

<script lang="ts" setup>
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
.page-enter-active,
.page-leave-active {
 transition: all 0.45s ease;
}
.page-enter-from,
.page-leave-to {
 opacity: 0;
 filter: blur(1rem);
 transform: translateY(12px);
}
</style>
