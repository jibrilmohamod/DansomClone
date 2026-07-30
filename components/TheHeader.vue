<template>
 <section class="page-cinema relative min-h-[100dvh] overflow-hidden bg-[#050e17] text-white">
  <div class="absolute inset-0"><slot name="image"><div class="h-full bg-[#091722]"></div></slot></div>
  <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,14,23,0.2),rgba(5,14,23,0.22)_35%,rgba(5,14,23,0.92))]"></div>
  <div class="cinema-grid absolute inset-0"></div>
  <TheNav overlay />
  <div class="atlas-shell relative z-10 flex min-h-[calc(100dvh-76px)] items-end pb-12 pt-24 md:pb-16">
   <div class="grid w-full gap-8 lg:grid-cols-12 lg:items-end">
    <div class="lg:col-span-9">
     <p class="atlas-label">{{ eyebrow }}</p>
     <h1 class="atlas-display cinema-title mt-5 max-w-[13ch] text-[clamp(3.25rem,7vw,6.75rem)] leading-[0.9]" :class="projTitle ? 'text-[clamp(2.75rem,5.4vw,5.25rem)]' : ''">{{ projTitle || title }}</h1>
    </div>
    <p class="max-w-md border-t border-white/25 pt-5 text-sm leading-relaxed text-white/66 md:text-base lg:col-span-3">{{ intro }}</p>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
 withDefaults(defineProps<{ title?: string; projTitle?: string; eyebrow?: string; intro?: string }>(), {
  title: "", projTitle: "", eyebrow: "Dansom Research & Consultancy",
  intro: "Regional research, monitoring, evaluation, and advisory expertise for the Horn of Africa.",
 })
</script>

<style scoped>
.page-cinema :deep(img) { width: 100%; height: 100%; object-fit: cover; animation: cinema-in 1.4s cubic-bezier(0.16,1,0.3,1) both; }
.cinema-grid { background-image: linear-gradient(rgb(255 255 255 / .1) 1px, transparent 1px),linear-gradient(90deg,rgb(255 255 255 / .1) 1px,transparent 1px); background-size: clamp(4rem,8vw,8rem) clamp(4rem,8vw,8rem); mask-image: linear-gradient(to bottom,transparent 12%,black); opacity:.28; }
.cinema-title { animation: title-in 950ms 120ms cubic-bezier(0.16,1,0.3,1) both; }
@keyframes cinema-in { from { opacity:0; transform:scale(1.1) } to { opacity:1; transform:scale(1) } }
@keyframes title-in { from { opacity:0; transform:translateY(50px) } to { opacity:1; transform:translateY(0) } }
@media (prefers-reduced-motion: reduce) { .page-cinema :deep(img),.cinema-title { animation:none; } }
</style>
