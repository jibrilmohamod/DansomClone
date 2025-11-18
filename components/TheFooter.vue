<template>
 <footer class="relative overflow-hidden bg-surface/90 text-white">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]"></div>
  <div class="container relative mx-auto px-6 py-12">
   <div class="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
    <div class="space-y-5">
     <NuxtImg src="/dansom-logo.png" alt="logo" class="w-44" />
     <p class="text-sm text-white/70">
      Research and consultancy services anchored in deep regional expertise across Somalia and Kenya.
     </p>
     <div class="flex flex-wrap gap-2">
      <span class="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">Horn of Africa</span>
      <span class="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">Trusted insights</span>
     </div>
    </div>

    <div class="space-y-4">
     <h3 class="text-lg font-semibold text-secondary">Company</h3>
     <div class="grid grid-cols-2 gap-2 text-sm text-white/80">
      <NuxtLink to="/About" class="hover:text-white">About</NuxtLink>
      <NuxtLink to="/Services" class="hover:text-white">Services</NuxtLink>
      <NuxtLink to="/Portfolio" class="hover:text-white">Our Projects</NuxtLink>
      <NuxtLink to="/Careers" class="hover:text-white">Careers</NuxtLink>
      <NuxtLink to="/Contact" class="hover:text-white">Contact</NuxtLink>
      <a href="http://webmail.dansomconsultancy.org/" target="_blank" class="hover:text-white">Staff Email</a>
     </div>
    </div>

    <div class="space-y-4">
     <h3 class="text-lg font-semibold text-secondary">Visit us</h3>
     <div class="space-y-3 text-sm text-white/80">
      <div class="rounded-xl border border-white/10 bg-white/5 p-3">
       <p class="font-semibold text-white">Mogadishu</p>
       <p>Dirir Building on Balcad Road</p>
      </div>
      <div class="rounded-xl border border-white/10 bg-white/5 p-3">
       <p class="font-semibold text-white">Nairobi</p>
       <p>Nas Apartments, No. 4, Milimani Road</p>
      </div>
     </div>
    </div>

    <div class="space-y-4">
     <h3 class="text-lg font-semibold text-secondary">Connect</h3>
     <a class="flex items-center gap-2 text-sm text-white/80 transition hover:text-white" href="mailto:info@dansomconsultancy.org">
      <Icon name="mdi:email-outline" />
      info@dansomconsultancy.org
     </a>
     <div class="flex items-center gap-3 text-white/70">
      <Icon name="ri:facebook-fill" class="hover:text-white" size="22" />
      <Icon name="ri:instagram-fill" class="hover:text-white" size="22" />
      <Icon name="ri:pinterest-fill" class="hover:text-white" size="22" />
      <Icon name="ri:twitter-fill" class="hover:text-white" size="22" />
     </div>
     <div class="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
      <p class="font-semibold text-white">Mogadishu &amp; Nairobi</p>
      <p class="text-white/60">+254 745 276 911</p>
     </div>
    </div>
   </div>

   <div class="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
    <p>
     {{ year }} <span class="font-semibold text-secondary">Dansom Consultancy</span> — All rights reserved
    </p>
    <div class="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
     <span class="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
      <span class="h-1.5 w-1.5 rounded-full bg-secondary"></span>
      Future-ready research
     </span>
     <span class="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
      <span class="h-1.5 w-1.5 rounded-full bg-quaternary"></span>
      Human-centered delivery
     </span>
    </div>
   </div>
  </div>
 </footer>
</template>

<script setup>
 const year = new Date().getFullYear()
</script>
