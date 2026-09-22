<template>
 <section
  class="page-hero relative overflow-hidden border-b border-line/45 bg-ink text-mist"
  :class="isDetail ? 'min-h-[54dvh]' : 'min-h-[68dvh]'"
 >
  <div class="page-hero-media absolute inset-0 z-0" aria-hidden="true">
   <slot name="image" />
   <div class="page-hero-media-overlay absolute inset-0"></div>
  </div>
  <div class="page-hero-surface atlas-grid absolute inset-0 z-[1]" aria-hidden="true"></div>
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
.page-hero-media :deep(img) {
 height: 100%;
 width: 100%;
 object-fit: cover;
 transform: scale(1.025);
 filter: saturate(0.82) contrast(1.04);
}
.page-hero-media-overlay {
 background:
  linear-gradient(90deg, rgb(5 14 23 / 0.82) 0%, rgb(5 14 23 / 0.58) 46%, rgb(5 14 23 / 0.28) 100%),
  linear-gradient(180deg, rgb(5 14 23 / 0.18), rgb(5 14 23 / 0.62));
}
:global(.light) .page-hero-media-overlay {
 background:
  linear-gradient(90deg, rgb(247 249 246 / 0.9) 0%, rgb(247 249 246 / 0.72) 48%, rgb(247 249 246 / 0.38) 100%),
  linear-gradient(180deg, rgb(247 249 246 / 0.22), rgb(247 249 246 / 0.62));
}
.page-hero-surface {
 background:
  radial-gradient(circle at 78% 24%, rgb(var(--primary) / 0.075), transparent 31%),
  linear-gradient(135deg, rgb(var(--panel-soft) / 0.22), transparent 52%);
}
.page-hero-surface::after {
 content: "";
 position: absolute;
 inset: 0;
 background: linear-gradient(180deg, transparent 48%, rgb(var(--ink) / 0.14));
}
@media (prefers-reduced-motion: no-preference) {
 .hero-title { animation: title-in 760ms 100ms cubic-bezier(0.16, 1, 0.3, 1) both; }
 .page-hero-media :deep(img) { animation: hero-media-in 1.1s cubic-bezier(0.16, 1, 0.3, 1) both; }
}
@keyframes title-in {
 from { opacity: 0; transform: translateY(24px); }
 to { opacity: 1; transform: translateY(0); }
}
@keyframes hero-media-in {
 from { opacity: 0; transform: scale(1.07); }
 to { opacity: 1; transform: scale(1.025); }
}
</style>
