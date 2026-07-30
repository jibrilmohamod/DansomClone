<script setup lang="ts">
 withDefaults(defineProps<{ overlay?: boolean }>(), { overlay: false })
 const showMobile = ref(false)
</script>

<template>
 <header class="atlas-nav relative z-50" :class="overlay ? 'atlas-nav-overlay' : 'atlas-nav-solid'">
  <div class="atlas-shell flex h-[76px] items-center gap-5">
   <NuxtLink to="/" class="logo-plate shrink-0" aria-label="Dansom Research & Consultancy home">
    <img src="/dansom-logo.png" alt="Dansom Research & Consultancy" class="h-8 w-auto" />
   </NuxtLink>

   <nav aria-label="Primary navigation" class="ml-auto hidden items-center gap-8 text-sm font-semibold xl:flex">
    <NuxtLink to="/About" class="nav-link">About</NuxtLink>
    <NuxtLink to="/Services" class="nav-link">Services</NuxtLink>
    <NuxtLink to="/Portfolio" class="nav-link">Work</NuxtLink>
    <NuxtLink to="/Careers" class="nav-link">Careers</NuxtLink>
   </nav>

   <div class="ml-auto flex items-center gap-2 xl:ml-4">
    <ThemeToggle compact />
    <a href="https://so.linkedin.com/company/dansom-research-and-consultancy" target="_blank" rel="noopener noreferrer" aria-label="Dansom Research & Consultancy on LinkedIn" class="nav-control hidden sm:inline-flex">
     <Icon name="ri:linkedin-fill" />
    </a>
    <NuxtLink to="/Contact" class="button-primary hidden sm:inline-flex">Start a project <Icon name="mdi:arrow-top-right" /></NuxtLink>
    <button type="button" class="nav-menu xl:hidden" aria-label="Open navigation" :aria-expanded="showMobile" @click="showMobile = !showMobile">
     <span>Menu</span><Icon name="mdi:menu" class="text-xl" />
    </button>
   </div>
  </div>
  <MobileNav v-if="showMobile" @toggleMobileNav="showMobile = false" />
 </header>
</template>

<style scoped>
.atlas-nav-overlay { color: white; border-bottom: 1px solid rgb(255 255 255 / 0.16); }
.atlas-nav-solid { color: rgb(var(--mist)); border-bottom: 1px solid rgb(var(--line) / 0.45); background: rgb(var(--ink) / 0.88); backdrop-filter: blur(24px); }
.logo-plate { display: inline-flex; align-items: center; border-radius: 0.7rem; background: #f7f8f6; padding: 0.42rem 0.68rem; box-shadow: 0 14px 36px -26px rgb(0 0 0 / 0.65); }
.logo-plate img { display: block; width: auto; height: 2rem; }
.nav-link { position: relative; padding-block: 0.6rem; color: currentColor; opacity: 0.68; transition: opacity 240ms ease; }
.nav-link::after { content: ""; position: absolute; inset: auto 0 0; height: 2px; background: #c5e060; transform: scaleX(0); transform-origin: left; transition: transform 240ms ease; }
.nav-link:hover, .nav-link.router-link-active { opacity: 1; }
.nav-link:hover::after, .nav-link.router-link-active::after { transform: scaleX(1); }
.nav-control { height: 2.75rem; width: 2.75rem; align-items: center; justify-content: center; border: 1px solid currentColor; border-radius: 0.7rem; opacity: 0.65; transition: opacity 240ms ease, color 240ms ease; }
.nav-control:hover { opacity: 1; color: #c5e060; }
.nav-menu { display: inline-flex; height: 2.75rem; align-items: center; gap: 0.5rem; border: 1px solid currentColor; border-radius: 0.7rem; padding-inline: 0.9rem; font-size: 0.8rem; font-weight: 700; opacity: 0.8; }
</style>
