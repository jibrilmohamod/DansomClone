<template>
 <section class="home-hero relative min-h-[100dvh] overflow-hidden bg-ink text-mist">
  <TheNav overlay />

  <div class="hero-media absolute inset-0 top-16 md:top-[72px]">
   <img
    :src="photography.fieldResearchHero.src"
    :alt="photography.fieldResearchHero.alt"
    width="1810"
    height="869"
    fetchpriority="high"
    class="h-full w-full object-cover object-[58%_center]"
   />
  </div>
  <div class="hero-scrim absolute inset-0 top-16 md:top-[72px]"></div>

  <div class="shell relative flex min-h-[calc(100dvh-4rem)] items-end pb-10 pt-24 md:min-h-[calc(100dvh-72px)] md:pb-14 lg:pb-16">
   <div class="hero-copy max-w-4xl">
    <p class="text-sm font-semibold tracking-[-0.01em] text-primary">Research and advisory services</p>
    <h1 class="mt-5 max-w-[17ch] font-display text-[clamp(2.75rem,4.8vw,4.75rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-mist">
     Research for complex operating environments.
    </h1>
    <p class="mt-6 max-w-xl text-base leading-relaxed text-mist/75 md:text-lg">
     Research, monitoring and advisory built from trusted access across Somalia, Kenya and the Horn of Africa.
    </p>
    <div class="mt-8 flex flex-wrap gap-3">
     <NuxtLink to="/Portfolio" class="button-primary">Explore our work <Icon name="mdi:arrow-right" /></NuxtLink>
     <NuxtLink to="/Services" class="hero-secondary">What we do <Icon name="mdi:arrow-top-right" /></NuxtLink>
    </div>
   </div>
  </div>
 </section>
</template>


<script setup lang="ts">
import { photography } from "~/data/photography"
</script>
<style scoped>
.hero-media {
 animation: hero-curtain 1.25s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-scrim {
 background:
  linear-gradient(90deg, rgb(var(--ink) / 0.96) 0%, rgb(var(--ink) / 0.78) 42%, rgb(var(--ink) / 0.14) 74%),
  linear-gradient(0deg, rgb(var(--ink) / 0.9) 0%, transparent 54%);
}

.hero-media img {
 animation: hero-scale 1.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-copy > * {
 animation: hero-copy-in 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-copy > :nth-child(2) { animation-delay: 0.08s; }
.hero-copy > :nth-child(3) { animation-delay: 0.16s; }
.hero-copy > :nth-child(4) { animation-delay: 0.24s; }

.hero-secondary {
 display: inline-flex;
 align-items: center;
 justify-content: center;
 gap: 0.5rem;
 border: 1px solid rgb(var(--mist) / 0.28);
 border-radius: 0.75rem;
 background: rgb(var(--ink) / 0.62);
 padding: 0.75rem 1.25rem;
 color: rgb(var(--mist));
 font-size: 0.875rem;
 font-weight: 700;
 backdrop-filter: blur(14px);
 transition: transform 300ms ease, border-color 300ms ease, background 300ms ease;
}

.hero-secondary:hover {
 transform: translateY(-2px);
 border-color: rgb(var(--primary) / 0.72);
 background: rgb(var(--ink) / 0.82);
}

@keyframes hero-curtain {
 from { clip-path: inset(0 0 100% 0); }
 to { clip-path: inset(0); }
}

@keyframes hero-scale {
 from { transform: scale(1.08); }
 to { transform: scale(1); }
}

@keyframes hero-copy-in {
 from { opacity: 0; transform: translateY(28px); }
 to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
 .hero-media,
 .hero-media img,
 .hero-copy > * {
  animation: none;
 }
}
</style>
