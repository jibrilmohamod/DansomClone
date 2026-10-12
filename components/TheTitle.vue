<template>
 <div>
  <h2 class="display-title text-4xl leading-tight md:text-5xl">{{ title }}</h2>
  <p v-if="subtitle" class="body-copy mt-4 text-base md:text-lg">{{ subtitle }}</p>
  <p v-if="subtitle2" class="body-copy mt-3 text-base md:text-lg">{{ subtitle2 }}</p>
  <NuxtLink v-if="icon && link" :to="link" class="button-primary mt-6">
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