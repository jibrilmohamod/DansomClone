<template>
 <div class="min-h-[100dvh] bg-slate-50 text-slate-900">
  <div class="flex min-h-[100dvh] flex-col">
   <main class="flex-1">
    <NuxtPage />
   </main>
   <TheFooter />

   <button
    v-show="scrolled"
    type="button"
    class="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 active:translate-y-0"
    aria-label="Back to top"
    @click="scrollToTop"
   >
    <Icon name="ic:round-arrow-upward" class="text-xl" />
   </button>
  </div>
 </div>
</template>

<script lang="ts" setup>
 import { useWindowScroll } from "@vueuse/core"

 const { y } = useWindowScroll()
 const scrolled = computed(() => y.value > 700)

 const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
 }
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
 transition: opacity 0.25s ease, transform 0.25s ease;
}
.page-enter-from,
.page-leave-to {
 opacity: 0;
 transform: translateY(8px);
}

@media (prefers-reduced-motion: reduce) {
 .page-enter-active,
 .page-leave-active {
  transition: none;
 }
}
</style>
