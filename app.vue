<template>
 <div class="min-h-[100dvh] bg-ink text-mist">
  <AtlasPreloader @active-change="introActive = $event" />
  <div
   class="flex min-h-[100dvh] flex-col"
   :inert="introActive || undefined"
   :aria-hidden="introActive ? 'true' : undefined"
  >
   <main class="flex-1">
    <NuxtPage />
   </main>
   <TheFooter />

   <button
    v-show="scrolled"
    type="button"
    class="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/40 bg-panel text-primary shadow-lift transition hover:-translate-y-0.5 hover:bg-primary hover:text-ink active:translate-y-px"
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

 const introCookie = useCookie<boolean>("dansom-atlas-intro", {
  default: () => false,
  sameSite: "lax",
 })
 const introActive = ref(!introCookie.value)

 const { y } = useWindowScroll()
 const scrolled = computed(() => y.value > 700)

 const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
 }
</script>

<style>
.page-enter-active,
.page-leave-active {
 transition:
  opacity 420ms ease,
  transform 520ms cubic-bezier(0.16, 1, 0.3, 1),
  filter 420ms ease;
}

.page-enter-from {
 opacity: 0;
 transform: translateY(18px);
 filter: blur(5px);
}

.page-leave-to {
 opacity: 0;
 transform: translateY(-10px);
 filter: blur(3px);
}

@media (prefers-reduced-motion: reduce) {
 .page-enter-active,
 .page-leave-active {
  transition: none;
 }

 .page-enter-from,
 .page-leave-to {
  transform: none;
  filter: none;
 }
}
</style>
