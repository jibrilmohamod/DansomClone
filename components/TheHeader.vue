<template>
 <section class="relative overflow-hidden bg-ink text-mist">
  <TheNav />
  <div class="shell grid min-h-[62dvh] items-stretch lg:grid-cols-12">
   <div class="reveal flex items-end py-12 md:py-16 lg:col-span-7 lg:pr-12">
    <div class="max-w-4xl">
     <p class="eyebrow">Dansom Research &amp; Consultancy</p>
     <h1 class="display-title mt-5 text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
      <span v-if="projTitle">{{ projTitle }}</span>
      <span v-else>{{ title }}</span>
     </h1>
     <p class="mt-6 max-w-xl text-base leading-relaxed text-mist/[0.65] md:text-lg">
      Regional research, monitoring, evaluation, and advisory expertise for the Horn of Africa.
     </p>
    </div>
   </div>
   <div class="relative min-h-72 overflow-hidden rounded-t-2xl border-x border-t border-mist/10 lg:col-span-5 lg:min-h-full lg:rounded-t-none lg:border-y-0 lg:border-r">
    <slot name="image">
     <div class="h-full w-full bg-panel"></div>
    </slot>
    <div class="absolute inset-0 bg-gradient-to-t from-[#08131f]/45 via-transparent to-[#08131f]/5"></div>
   </div>
  </div>
 </section>
</template>

<script setup>
 defineProps({
  title: String,
  projTitle: String,
 })
</script>