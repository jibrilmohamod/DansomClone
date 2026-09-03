<template>
 <span class="brand-mark" :class="[`brand-mark--${context}`, `brand-mark--${profile}`, { 'brand-mark--boost': needsDarkBoost, 'brand-mark--dark-invert': needsDarkInvert }]">
  <img :src="src" :alt="alt" :loading="loading" decoding="async" />
 </span>
</template>

<script setup lang="ts">
 const props = withDefaults(defineProps<{
  src: string
  alt: string
  context?: "carousel" | "experience" | "project"
  loading?: "eager" | "lazy"
 }>(), { context: "project", loading: "lazy" })

 const filename = computed(() => props.src.toLowerCase())
 const needsDarkBoost = computed(() => /world-bank|ifc|wfp|fao|unops|unsos|afdb|somalia/.test(filename.value))
 const needsDarkInvert = computed(() => /sdc\.svg/.test(filename.value))
 const profile = computed(() => {
  if (/eu\.svg/.test(filename.value)) return "compact"
  if (/somalia\.svg|fao\.svg/.test(filename.value)) return "emblem"
  if (/unsos|care|afdb|somalia-planning|wfp-fao/.test(filename.value)) return "medium"
  return "wide"
 })
</script>

<style scoped>
.brand-mark {
 display: flex;
 align-items: center;
 justify-content: flex-start;
 width: 11rem;
 height: 4.25rem;
 flex: 0 0 auto;
}
.brand-mark img {
 display: block;
 width: auto;
 height: auto;
 max-width: 100%;
 max-height: 100%;
 aspect-ratio: auto;
 object-fit: contain;
 object-position: left center;
 opacity: .96;
 transition: filter 280ms ease, opacity 280ms ease, transform 280ms cubic-bezier(.16,1,.3,1);
}
.brand-mark--wide img { max-width:100%; max-height:3.4rem; }
.brand-mark--medium img { max-width:88%; max-height:4rem; }
.brand-mark--compact img { max-width:5rem; max-height:3.35rem; }
.brand-mark--emblem img { max-width:5rem; max-height:3.35rem; }
.brand-mark--carousel { width: 12rem; height: 4.5rem; justify-content: center; }
.brand-mark--carousel img { object-position: center; }
.brand-mark--experience { width: 10rem; height: 4rem; }
.brand-mark--project { width: 11rem; height: 4.25rem; }
@media (max-width: 767px) {
 .brand-mark--experience { width: 8.5rem; height: 3.5rem; }
 .brand-mark--project { width: 9rem; height: 3.75rem; }
 .brand-mark--compact img,
 .brand-mark--emblem img { max-width:4.5rem; max-height:3.15rem; }
}
</style>
