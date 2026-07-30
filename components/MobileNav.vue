<template>
 <div class="fixed inset-0 z-[60] overflow-y-auto bg-[#050e17] text-white xl:hidden">
  <div class="atlas-shell flex min-h-[100dvh] flex-col py-5">
   <div class="flex items-center justify-between">
    <div class="logo-plate"><img src="/dansom-logo.png" alt="Dansom Research & Consultancy" width="153" height="32" /></div>
    <button type="button" class="inline-flex h-11 items-center gap-2 rounded-xl border border-white/25 px-4 text-sm font-bold" aria-label="Close navigation" @click="$emit('toggleMobileNav')">Close <Icon name="mdi:close" /></button>
   </div>
   <nav aria-label="Mobile navigation" class="my-auto grid py-12">
    <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="mobile-link" @click="$emit('toggleMobileNav')">{{ link.label }}<Icon name="mdi:arrow-top-right" /></NuxtLink>
   </nav>
   <div class="flex items-end justify-between border-t border-white/15 pt-6 text-sm text-white/55">
    <a href="https://so.linkedin.com/company/dansom-research-and-consultancy" target="_blank" rel="noopener noreferrer" class="text-[#c5e060]">LinkedIn</a>
    <p class="text-right">Mogadishu<br />Nairobi</p>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
 defineEmits(["toggleMobileNav"])
 const links = [
  { label: "Home", to: "/" }, { label: "About", to: "/About" }, { label: "Services", to: "/Services" },
  { label: "Work", to: "/Portfolio" }, { label: "Careers", to: "/Careers" }, { label: "Contact", to: "/Contact" },
 ]
</script>

<style scoped>
.logo-plate { display: inline-flex; border-radius: 0.7rem; background: #f7f8f6; padding: 0.45rem 0.7rem; }
.logo-plate img { display: block !important; width: 9.5625rem !important; max-width: 9.5625rem !important; height: 2rem !important; object-fit: contain; }
.mobile-link { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgb(255 255 255 / 0.16); padding-block: 1rem; font-family: "Space Grotesk", sans-serif; font-size: clamp(2.2rem, 11vw, 4.6rem); font-weight: 600; line-height: 1; letter-spacing: -0.055em; }
.mobile-link:last-child { border-bottom: 1px solid rgb(255 255 255 / 0.16); }
</style>
