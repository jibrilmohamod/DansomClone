<template>
 <span class="brand-mark" :class="[`brand-mark--${context}`, `brand-mark--${profile}`, { 'brand-mark--boost': needsDarkBoost }]">
  <img :src="src" :alt="alt" :loading="loading" decoding="async" />
 </span>
</template>

<script setup lang="ts">
 const props = withDefaults(defineProps<{
  src: string
  alt: string
  context?: "carousel" | "experience" | "project"
  loading?: "eager" | "lazy"
  shape?: "wide" | "medium" | "crest"
 }>(), { context: "project", loading: "lazy" })

 const filename = computed(() => props.src.toLowerCase())
 const profile = computed(() => {
  if (props.shape) return props.shape
  if (/coat_of_arms|fao_logo|capture1|untitled design|eu\.jpg/.test(filename.value)) return "crest"
  if (/wfp|care|unops|swiss|eidgenossenschaft|ministry|icf|download/.test(filename.value)) return "medium"
  return "wide"
 })
 const needsDarkBoost = computed(() => /world_bank|world-bank|finance_corporation|ifc\.|ifc\.png/.test(filename.value))
</script>

<style scoped>
.brand-mark {
 display: flex;
 align-items: center;
 justify-content: flex-start;
 width: 10.75rem;
 height: 5rem;
 flex: 0 0 auto;
}
.brand-mark img {
 display: block;
 width: auto;
 height: auto;
 max-width: 100%;
 max-height: 100%;
 object-fit: contain;
 object-position: left center;
 opacity: .96;
 transition: filter 280ms ease, opacity 280ms ease, transform 280ms cubic-bezier(.16,1,.3,1);
}
.brand-mark--wide img { width: 100%; max-height: 3.2rem; }
.brand-mark--medium img { width: 82%; max-height: 4rem; }
.brand-mark--crest img { height: 4.6rem; max-width: 5.4rem; }
.brand-mark--carousel { width: 11.5rem; justify-content: center; }
.brand-mark--carousel img { object-position: center; }
.brand-mark--carousel.brand-mark--wide img { width: 100%; }
.brand-mark--carousel.brand-mark--medium img { width: 78%; }
.brand-mark--carousel.brand-mark--crest img { height: 4.65rem; }
.brand-mark--experience { width: 9.75rem; }
.brand-mark--project { width: 10.75rem; height: 5.25rem; }
@media (max-width: 767px) {
 .brand-mark--experience { width: 8rem; height: 4.25rem; }
 .brand-mark--project { width: 9rem; height: 4.5rem; }
 .brand-mark--wide img { max-height: 2.8rem; }
 .brand-mark--crest img { height: 4rem; }
}
</style>
