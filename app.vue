<template>
 <div class="relative min-h-screen overflow-hidden bg-white text-slate-900">
  <div class="pointer-events-none absolute inset-0 bg-neon-grid opacity-12"></div>
  <div class="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-slate-100/60 to-transparent"></div>

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
 const route = useRoute()
 const siteUrl = "https://www.dansom.vercel.app"
 const defaultTitle = "Dansom Research & Consultancy"
 const defaultDescription =
  "Dansom Research & Consultancy delivers field-based research, monitoring, evaluation, and advisory services across Somalia and the Horn of Africa."
 const defaultOgImage = `${siteUrl}/dansom-logo.png`

 useHead({
  titleTemplate: (titleChunk) =>
   titleChunk ? `${titleChunk} | ${defaultTitle}` : defaultTitle,
  link: [
   {
    rel: "canonical",
    href: `${siteUrl}${route.path}`,
   },
  ],
 })

 useSeoMeta({
  description: defaultDescription,
  ogType: "website",
  ogSiteName: defaultTitle,
  ogTitle: defaultTitle,
  ogDescription: defaultDescription,
  ogUrl: () => `${siteUrl}${route.path}`,
  ogImage: defaultOgImage,
  twitterCard: "summary_large_image",
  twitterTitle: defaultTitle,
  twitterDescription: defaultDescription,
  twitterImage: defaultOgImage,
 })

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
