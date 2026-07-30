<template>
 <section class="inner-hero relative overflow-hidden bg-ink text-mist">
  <TheNav overlay />

  <div class="shell grid min-h-[calc(100dvh-4.5rem)] lg:grid-cols-12">
   <div class="relative z-10 flex items-end py-14 md:py-20 lg:col-span-7 lg:pr-12">
    <div class="max-w-[52rem]">
     <p class="eyebrow hero-kicker">{{ eyebrow }}</p>
     <h1
      class="display-title hero-title mt-5 text-[clamp(3.25rem,7.2vw,7.4rem)] leading-[0.88]"
      :class="projTitle ? 'hero-title-long' : ''"
     >
      {{ projTitle || title }}
     </h1>
     <p class="mt-7 max-w-xl text-base leading-relaxed text-mist/[0.68] md:text-lg">
      {{ intro }}
     </p>
    </div>
   </div>

   <div class="hero-media relative min-h-[22rem] overflow-hidden lg:col-span-5 lg:min-h-full">
    <slot name="image">
     <div class="h-full w-full bg-panel"></div>
    </slot>
    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,31,0.05),rgba(8,19,31,0.48))]"></div>
    <div class="hero-grid absolute inset-0 opacity-30"></div>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
 withDefaults(defineProps<{
  title?: string
  projTitle?: string
  eyebrow?: string
  intro?: string
 }>(), {
  title: "",
  projTitle: "",
  eyebrow: "Dansom Research & Consultancy",
  intro: "Regional research, monitoring, evaluation, and advisory expertise for the Horn of Africa.",
 })
</script>

<style scoped>
.inner-hero::before {
 content: "";
 position: absolute;
 inset: 0 auto 0 0;
 width: min(62vw, 58rem);
 background: radial-gradient(circle at 15% 48%, rgb(var(--primary) / 0.1), transparent 55%);
 pointer-events: none;
}

.hero-title {
 max-width: 9ch;
 animation: hero-title-in 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-title-long {
 max-width: 14ch;
 font-size: clamp(2.6rem, 5.4vw, 5.8rem);
 line-height: 0.96;
}

.hero-kicker {
 animation: hero-kicker-in 700ms 120ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-media :deep(img) {
 width: 100%;
 height: 100%;
 object-fit: cover;
 animation: hero-image-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-grid {
 background-image:
  linear-gradient(rgb(255 255 255 / 0.1) 1px, transparent 1px),
  linear-gradient(90deg, rgb(255 255 255 / 0.1) 1px, transparent 1px);
 background-size: 5rem 5rem;
 mask-image: linear-gradient(to bottom, transparent, black 40%, black);
}

@keyframes hero-title-in {
 from { opacity: 0; transform: translateY(36px); }
 to { opacity: 1; transform: translateY(0); }
}

@keyframes hero-kicker-in {
 from { opacity: 0; transform: translateY(16px); }
 to { opacity: 1; transform: translateY(0); }
}

@keyframes hero-image-in {
 from { opacity: 0; transform: scale(1.08); }
 to { opacity: 1; transform: scale(1); }
}

@media (min-width: 1024px) {
 .hero-media {
  margin-right: calc((100vw - min(100vw, 1400px)) / -2);
  padding-right: calc((100vw - min(100vw, 1400px)) / 2);
  clip-path: inset(0 0 0 0 round 1.5rem 0 0 1.5rem);
 }
}

@media (max-width: 1023px) {
 .hero-title { max-width: 10ch; }
 .hero-title-long { max-width: 16ch; }
 .hero-media { border-radius: 1.5rem 1.5rem 0 0; }
}

@media (prefers-reduced-motion: reduce) {
 .hero-title,
 .hero-kicker,
 .hero-media :deep(img) { animation: none; }
}
</style>

