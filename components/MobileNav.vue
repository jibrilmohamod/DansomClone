<template>
 <div
  class="absolute top-0 left-0 z-50 h-[100vh] w-full overflow-y-auto bg-gradient-to-b from-primary to-quinary text-white"
 >
  <div class="flex items-center justify-between border-b border-white/10 px-5 pb-6 pt-5">
   <NuxtLink to="/" @click="$emit('toggleMobileNav')">
    <img src="/dansom-logo.png" class="h-10 object-contain" alt="Dansom" />
   </NuxtLink>

   <button
    class="rounded-full bg-white p-2 text-quinary shadow-md"
    @click="$emit('toggleMobileNav')"
   >
    <IconCSS name="ic:baseline-close" class="text-2xl" />
   </button>
  </div>

  <nav class="flex flex-col gap-5 px-5 py-8 text-lg font-semibold">
   <NuxtLink to="/" class="mobile-link" @click="$emit('toggleMobileNav')">Home</NuxtLink>
   <NuxtLink to="/About" class="mobile-link" @click="$emit('toggleMobileNav')">About Us</NuxtLink>
   <NuxtLink to="/Services" class="mobile-link" @click="$emit('toggleMobileNav')">Services</NuxtLink>
   <NuxtLink to="/Portfolio" class="mobile-link" @click="$emit('toggleMobileNav')">Our Portfolio</NuxtLink>
   <NuxtLink to="/Careers" class="mobile-link" @click="$emit('toggleMobileNav')">Careers</NuxtLink>
   <NuxtLink to="/Contact" class="mobile-link" @click="$emit('toggleMobileNav')">Contact Us</NuxtLink>
   <a
    href="http://webmail.dansomconsultancy.org/"
    class="mobile-link"
    target="_blank"
    @click="$emit('toggleMobileNav')"
   >
    Staff Email
   </a>
  </nav>

  <div class="space-y-5 px-5 pb-10">
   <div class="flex items-center gap-3 text-sm text-white/80">
    <IconCSS name="mdi:location" class="text-xl" />
    <p>Mogadishu &amp; Nairobi</p>
   </div>
   <div class="flex items-center gap-3 text-sm text-white/80">
    <IconCSS name="mdi:phone" class="text-xl" />
    <p>+254 745 276 911</p>
   </div>
   <div class="flex items-center gap-3 text-sm text-white/80">
    <IconCSS name="mdi:email" class="text-xl" />
    <a href="mailto:info@dansomconsultancy.org" class="hover:text-white">info@dansomconsultancy.org</a>
   </div>

   <div class="flex gap-4 text-white/70">
    <IconCSS name="akar-icons:instagram-fill" class="text-2xl" />
    <IconCSS name="akar-icons:facebook-fill" class="text-2xl" />
    <IconCSS name="akar-icons:twitter-fill" class="text-2xl" />
    <IconCSS name="akar-icons:tiktok-fill" class="text-2xl" />
    <IconCSS name="akar-icons:youtube-fill" class="text-2xl" />
   </div>

   <p class="text-xs text-white/60">&copy; 2024 Dansom Consultancy. All Rights Reserved.</p>
  </div>
 </div>
</template>

<script setup>
 defineEmits(["toggleMobileNav"])
</script>

<style scoped>
.mobile-link {
 transition: color 0.2s ease, transform 0.2s ease;
}

.mobile-link:hover {
 color: #f5a524;
 transform: translateX(4px);
}
</style>
