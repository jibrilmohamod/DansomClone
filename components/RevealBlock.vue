<template>
 <component
  :is="as"
  ref="root"
  class="reveal-block"
  :class="{ 'is-visible': isVisible }"
  :style="{ '--reveal-delay': `${delay}ms` }"
 >
  <slot />
 </component>
</template>

<script setup lang="ts">
 const props = withDefaults(defineProps<{ as?: string; delay?: number }>(), {
  as: "div",
  delay: 0,
 })

 const root = ref<HTMLElement | null>(null)
 const isVisible = ref(false)
 let observer: IntersectionObserver | null = null

 onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
   isVisible.value = true
   return
  }

  observer = new IntersectionObserver(([entry]) => {
   if (!entry?.isIntersecting) return
   isVisible.value = true
   observer?.disconnect()
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" })

  if (root.value) observer.observe(root.value)
 })

 onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.reveal-block {
 opacity: 0;
 transform: translateY(28px);
 transition:
  opacity 750ms var(--reveal-delay) cubic-bezier(0.16, 1, 0.3, 1),
  transform 750ms var(--reveal-delay) cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-block.is-visible {
 opacity: 1;
 transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
 .reveal-block { opacity: 1; transform: none; transition: none; }
}
</style>

