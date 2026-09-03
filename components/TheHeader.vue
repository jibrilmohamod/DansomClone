<template>
 <section
  class="page-hero relative overflow-hidden border-b border-line/45 bg-ink text-mist"
  :class="isDetail ? 'min-h-[54dvh]' : 'min-h-[68dvh]'"
 >
  <InteractiveLineField
   :variant="isDetail ? 'detail' : variant"
   :strength="isDetail ? 0.55 : 0.72"
   :density="isDetail ? 0.8 : 0.92"
  />
  <TheNav />
  <div
   class="atlas-shell relative z-10 flex"
   :class="isDetail
    ? 'min-h-[calc(54dvh-76px)] items-center py-14 md:py-20'
    : 'min-h-[calc(68dvh-76px)] items-end pb-12 pt-20 md:pb-16'"
  >
   <div class="grid w-full gap-8 lg:grid-cols-12 lg:items-end">
    <div class="lg:col-span-9">
     <p class="atlas-label">{{ eyebrow }}</p>
     <h1
      class="atlas-display hero-title mt-5 max-w-[18ch] leading-[1]"
      :class="isDetail
       ? 'text-[clamp(2rem,3.25vw,3.25rem)]'
       : 'text-[clamp(2.35rem,4vw,4rem)]'"
     >
      {{ projTitle || title }}
     </h1>
    </div>
    <p class="max-w-md border-t border-line/55 pt-5 text-sm leading-relaxed text-mist/68 md:text-base lg:col-span-3">
     {{ intro }}
    </p>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
type LineVariant = "about" | "services" | "work" | "careers" | "contact" | "detail"

const props = withDefaults(
 defineProps<{
  title?: string
  projTitle?: string
  eyebrow?: string
  intro?: string
  variant?: LineVariant
 }>(),
 {
  title: "",
  projTitle: "",
  eyebrow: "Dansom Research & Consultancy",
  intro: "Regional research, monitoring, evaluation, and advisory expertise for the Horn of Africa.",
  variant: "detail",
 },
)

const isDetail = computed(() => Boolean(props.projTitle))
</script>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
 .hero-title {
  animation: title-in 760ms 100ms cubic-bezier(0.16, 1, 0.3, 1) both;
 }
}

@keyframes title-in {
 from {
  opacity: 0;
  transform: translateY(24px);
 }
 to {
  opacity: 1;
  transform: translateY(0);
 }
}
</style>
