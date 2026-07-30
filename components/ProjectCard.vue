<template>
 <RevealBlock as="article" class="project-entry border-t border-line/55 first:border-t-0">
  <NuxtLink
   :to="slug"
   class="group grid gap-5 py-7 transition md:grid-cols-[10rem_1fr_auto] md:items-center md:py-9"
  >
   <div class="flex h-16 items-center justify-start pr-4">
    <img
     v-if="icon"
     :src="icon"
     :alt="title + ' project partner logo'"
     class="project-logo max-h-14 max-w-[9rem] object-contain object-left"
     loading="lazy"
    />
   </div>
   <div>
    <p class="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{{ classification }}</p>
    <h3 class="mt-3 max-w-3xl font-display text-xl font-semibold leading-snug tracking-tight text-mist transition group-hover:text-primary md:text-2xl">{{ title }}</h3>
    <p class="mt-3 text-sm text-mist/55">{{ location }}<span v-if="timeframe">, {{ timeframe }}</span></p>
   </div>
   <span class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line/65 text-mist transition group-hover:border-primary group-hover:bg-primary group-hover:text-accent-ink">
    <Icon name="mdi:arrow-top-right" />
   </span>
  </NuxtLink>
 </RevealBlock>
</template>

<script lang="ts" setup>
 defineProps({
  title: { type: String, required: true },
  icon: String,
  slug: { type: String, required: true },
  classification: { type: String, required: true },
  location: { type: String, required: true },
  timeframe: String,
 })
</script>

<style scoped>
:global(:root[data-theme="dark"]) .project-logo {
 filter: drop-shadow(0 0 0.75px rgba(255, 255, 255, 0.9));
}

@media (prefers-color-scheme: dark) {
 :global(:root:not([data-theme])) .project-logo {
  filter: drop-shadow(0 0 0.75px rgba(255, 255, 255, 0.9));
 }
}
</style>

