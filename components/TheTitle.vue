<template>
 <div>
  <h2 class="font-display text-3xl font-semibold tracking-tight md:text-4xl">
   {{ title }}
  </h2>
  <p v-if="subtitle" class="mt-3 max-w-2xl font-body text-base leading-relaxed text-slate-600 md:text-lg">
   {{ subtitle }}
  </p>
  <p v-if="subtitle2" class="mt-3 max-w-2xl font-body text-base leading-relaxed text-slate-600 md:text-lg">
   {{ subtitle2 }}
  </p>
  <NuxtLink
   v-if="icon && link"
   :to="link"
   class="mt-5 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 active:translate-y-px"
  >
   {{ LinkText }}
   <Icon :name="icon" class="text-lg" />
  </NuxtLink>
 </div>
</template>

<script setup>
 defineProps({
  title: String,
  subtitle: String,
  link: String,
  LinkText: String,
  subtitle2: String,
  icon: String,
 })
</script>
