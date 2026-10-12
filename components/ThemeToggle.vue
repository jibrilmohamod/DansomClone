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
  class="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-mist/[0.15] bg-mist/[0.03] px-3 text-sm font-bold text-mist transition hover:border-primary/60 hover:text-primary"
  :class="{ 'w-10 px-0': props.compact }"
  :aria-label="actionLabel"
  :title="actionLabel"
  @click="toggleTheme"
 >
  <Icon :name="theme === 'dark' ? 'mdi:white-balance-sunny' : 'mdi:weather-night'" class="text-lg" aria-hidden="true" />
  <span v-if="!props.compact">{{ theme === "dark" ? "Light mode" : "Dark mode" }}</span>
 </button>
</template>
