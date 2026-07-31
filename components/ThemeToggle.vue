<script setup lang="ts">
 const props = withDefaults(defineProps<{ compact?: boolean }>(), {
  compact: false,
 })

 type Theme = "light" | "dark"

 const theme = ref<Theme>("light")
 const nextTheme = computed<Theme>(() => (theme.value === "dark" ? "light" : "dark"))
 const actionLabel = computed(() => `Switch to ${nextTheme.value} mode`)

 const applyTheme = (value: Theme) => {
  theme.value = value
  document.documentElement.dataset.theme = value
  localStorage.setItem("dansom-theme", value)
 }

 const toggleTheme = () => {
  applyTheme(nextTheme.value)
 }

 onMounted(() => {
  const activeTheme = document.documentElement.dataset.theme
  theme.value = activeTheme === "dark" ? "dark" : "light"
 })
</script>

<template>
 <button
  type="button"
  class="theme-toggle"
  :class="{ 'theme-toggle--compact': props.compact }"
  :aria-label="actionLabel"
  :title="actionLabel"
  @click="toggleTheme"
 >
  <span class="theme-toggle-icon"><Icon :name="theme === 'dark' ? 'mdi:white-balance-sunny' : 'mdi:weather-night'" aria-hidden="true" /></span>
  <span class="theme-toggle-label">{{ theme === "dark" ? "Light" : "Dark" }}</span>
 </button>
</template>

<style scoped>
.theme-toggle {
 display: inline-flex;
 height: 2.75rem;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 gap: .55rem;
 border: 1px solid currentColor;
 border-radius: .7rem;
 background: rgb(5 14 23 / .62);
 padding: 0 .8rem;
 color: currentColor;
 font-size: .78rem;
 font-weight: 700;
 opacity: .86;
 backdrop-filter: blur(14px);
 transition: opacity 220ms ease, border-color 220ms ease, color 220ms ease, background-color 220ms ease;
}
.theme-toggle:hover { border-color: #c5e060; color: #c5e060; opacity: 1; }
.theme-toggle-icon { display:inline-flex; height:1.55rem; width:1.55rem; align-items:center; justify-content:center; border-radius:999px; background:#c5e060; color:#07111b; font-size:1rem; }
.theme-toggle--compact .theme-toggle-label { display:none; }
@media (min-width: 768px) {
 .theme-toggle--compact .theme-toggle-label { display:inline; }
}
</style>
