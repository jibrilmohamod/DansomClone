<template>
 <div class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#edf2ff] via-[#fffdf8] to-[#eef4ff] text-slate-900">
  <div class="pointer-events-none absolute inset-0 bg-neon-grid opacity-35"></div>
  <div class="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-white via-[#f7f1e4]/70 to-transparent"></div>
  <div class="pointer-events-none absolute inset-y-0 right-0 w-[420px] bg-gradient-to-l from-[#dce8ff]/85 via-transparent to-transparent blur-3xl"></div>
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(37,99,235,0.12),transparent_34%),radial-gradient(circle_at_74%_18%,rgba(182,138,53,0.16),transparent_32%),radial-gradient(circle_at_48%_80%,rgba(15,23,42,0.08),transparent_40%)]"></div>

  <div class="relative flex min-h-screen flex-col backdrop-blur-[2px]">
   <NuxtPage />
   <TheFooter />

   <button
    type="button"
    class="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-glow ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
