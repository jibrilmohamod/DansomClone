<template>
 <footer class="bg-quinary text-white">
  <div class="container mx-auto px-6 py-12">
   <div class="grid gap-10 md:grid-cols-4">
    <div class="space-y-4">
     <NuxtImg src="/dansom-logo.png" alt="logo" class="w-44" />
     <p class="text-sm text-white/70">
      Research and consultancy services anchored in deep regional expertise across Somalia and Kenya.
     </p>
    </div>

    <div class="space-y-3">
     <h3 class="text-lg font-semibold text-quaternary">Company</h3>
     <div class="flex flex-col gap-2 text-sm text-white/80">
      <NuxtLink to="/About" class="hover:text-white">About</NuxtLink>
      <NuxtLink to="/Services" class="hover:text-white">Services</NuxtLink>
      <NuxtLink to="/Portfolio" class="hover:text-white">Our Projects</NuxtLink>
      <NuxtLink to="/Careers" class="hover:text-white">Careers</NuxtLink>
      <NuxtLink to="/Contact" class="hover:text-white">Contact</NuxtLink>
     </div>
    </div>

    <div class="space-y-3">
     <h3 class="text-lg font-semibold text-quaternary">Visit us</h3>
     <div class="space-y-3 text-sm text-white/80">
      <div>
       <p class="font-semibold text-white">Mogadishu</p>
       <p>Dirir Building on Balcad Road</p>
      </div>
      <div>
       <p class="font-semibold text-white">Nairobi</p>
       <p>Nas Apartments, No. 4, Milimani Road</p>
      </div>
     </div>
    </div>

    <div class="space-y-3">
     <h3 class="text-lg font-semibold text-quaternary">Connect</h3>
     <a class="flex items-center gap-2 text-sm text-white/80 hover:text-white" href="mailto:info@dansomconsultancy.org">
      <Icon name="mdi:email-outline" />
      info@dansomconsultancy.org
     </a>
     <div class="flex items-center gap-3 text-white/70">
      <Icon name="ri:facebook-fill" class="hover:text-white" size="22" />
      <Icon name="ri:instagram-fill" class="hover:text-white" size="22" />
      <Icon name="ri:pinterest-fill" class="hover:text-white" size="22" />
     </div>
    </div>
   </div>

   <div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/70 md:flex-row">
    <p>
     {{ year }} <span class="font-semibold text-quaternary">Dansom Consultancy</span> — All rights reserved
    </p>
    <div class="flex items-center gap-4">
     <span class="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/70">Horn of Africa</span>
     <span class="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/70">Trusted insights</span>
    </div>
   </div>
  </div>
 </footer>
</template>

<script setup>
 // get the current year
 const year = new Date().getFullYear()
</script>

<style></style>
