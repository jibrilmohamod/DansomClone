<template>
 <div class="fixed inset-0 z-50 min-h-[100dvh] overflow-y-auto bg-white text-slate-900 lg:hidden">
  <div class="flex h-16 items-center justify-between border-b border-slate-200 px-4">
   <NuxtLink to="/" aria-label="Dansom Research & Consultancy home" @click="$emit('toggleMobileNav')">
    <img src="/dansom-logo.png" class="h-9 w-auto" alt="Dansom Research & Consultancy" />
   </NuxtLink>
   <button
    type="button"
    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700"
    aria-label="Close navigation"
    @click="$emit('toggleMobileNav')"
   >
    <Icon name="ic:baseline-close" class="text-2xl" />
   </button>
  </div>

  <nav aria-label="Mobile navigation" class="grid gap-1 px-4 py-6 text-lg font-semibold">
   <NuxtLink to="/" class="mobile-link" @click="$emit('toggleMobileNav')">Home</NuxtLink>
   <NuxtLink to="/About" class="mobile-link" @click="$emit('toggleMobileNav')">About</NuxtLink>
   <NuxtLink to="/Services" class="mobile-link" @click="$emit('toggleMobileNav')">Services</NuxtLink>
   <NuxtLink to="/Portfolio" class="mobile-link" @click="$emit('toggleMobileNav')">Portfolio</NuxtLink>
   <NuxtLink to="/Careers" class="mobile-link" @click="$emit('toggleMobileNav')">Careers</NuxtLink>
   <NuxtLink to="/Contact" class="mobile-link" @click="$emit('toggleMobileNav')">Contact</NuxtLink>
   <a href="http://webmail.dansomconsultancy.org/" class="mobile-link" target="_blank" rel="noopener noreferrer">Staff Email</a>
  </nav>

  <div class="mx-4 border-t border-slate-200 py-6">
   <div class="space-y-3 text-sm text-slate-600">
    <p class="flex items-center gap-3"><Icon name="mdi:map-marker-outline" class="text-xl text-primary" />Mogadishu and Nairobi</p>
    <a href="tel:+254745276911" class="flex items-center gap-3 hover:text-primary"><Icon name="mdi:phone-outline" class="text-xl text-primary" />+254 745 276 911</a>
    <a href="mailto:info@dansomconsultancy.org" class="flex items-center gap-3 hover:text-primary"><Icon name="mdi:email-outline" class="text-xl text-primary" />info@dansomconsultancy.org</a>
   </div>

   <a
    href="https://so.linkedin.com/company/dansom-research-and-consultancy"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Dansom Research & Consultancy on LinkedIn"
    class="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-primary"
   >
    <Icon name="ri:linkedin-fill" class="text-xl" />
    LinkedIn
   </a>

   <p class="mt-8 text-xs text-slate-500">&copy; {{ year }} Dansom Research &amp; Consultancy. All rights reserved.</p>
  </div>
 </div>
</template>

<script setup>
 defineEmits(["toggleMobileNav"])
 const year = new Date().getFullYear()
</script>

<style scoped>
.mobile-link {
 display: block;
 border-bottom: 1px solid rgb(226 232 240);
 padding: 0.9rem 0;
 color: rgb(30 41 59);
 transition: color 0.2s ease, padding-left 0.2s ease;
}

.mobile-link:hover,
.mobile-link.router-link-exact-active {
 color: #425e87;
 padding-left: 0.25rem;
}
</style>
