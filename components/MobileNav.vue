<template>
 <div class="fixed inset-0 z-50 min-h-[100dvh] overflow-y-auto bg-ink text-mist lg:hidden">
  <div class="flex h-16 items-center justify-between border-b border-mist/10 px-4">
   <NuxtLink to="/" class="rounded-xl bg-paper px-2.5 py-1.5" aria-label="Dansom Research & Consultancy home" @click="$emit('toggleMobileNav')">
    <img src="/dansom-logo.png" class="h-7 w-auto" alt="Dansom Research & Consultancy" />
   </NuxtLink>
   <button
    type="button"
    class="inline-flex h-10 items-center justify-center rounded-xl border border-mist/[0.15] px-3 text-sm font-bold text-mist"
    aria-label="Close navigation"
    @click="$emit('toggleMobileNav')"
   >
    Close
   </button>
  </div>

  <div class="grid min-h-[calc(100dvh-4rem)] px-4 py-6">
   <nav aria-label="Mobile navigation" class="grid self-start font-display text-3xl font-semibold tracking-tight">
    <NuxtLink to="/" class="mobile-link" @click="$emit('toggleMobileNav')">Home</NuxtLink>
    <NuxtLink to="/About" class="mobile-link" @click="$emit('toggleMobileNav')">About</NuxtLink>
    <NuxtLink to="/Services" class="mobile-link" @click="$emit('toggleMobileNav')">Services</NuxtLink>
    <NuxtLink to="/Portfolio" class="mobile-link" @click="$emit('toggleMobileNav')">Portfolio</NuxtLink>
    <NuxtLink to="/Careers" class="mobile-link" @click="$emit('toggleMobileNav')">Careers</NuxtLink>
    <NuxtLink to="/Contact" class="mobile-link" @click="$emit('toggleMobileNav')">Contact</NuxtLink>
   </nav>

   <div class="mt-10 self-end border-t border-mist/10 pt-6 text-sm text-mist/60">
    <p>Mogadishu and Nairobi</p>
    <a href="tel:+254745276911" class="mt-2 block hover:text-primary">+254 745 276 911</a>
    <a href="mailto:info@dansomconsultancy.org" class="mt-2 block hover:text-primary">info@dansomconsultancy.org</a>
    <div class="mt-5 flex flex-wrap gap-3">
     <a
      href="https://so.linkedin.com/company/dansom-research-and-consultancy"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Dansom Research & Consultancy on LinkedIn"
      class="button-ghost"
     >
      <Icon name="ri:linkedin-fill" class="text-lg" />
      LinkedIn
     </a>
     <a href="http://webmail.dansomconsultancy.org/" target="_blank" rel="noopener noreferrer" class="button-ghost">Staff Email</a>
    </div>
    <p class="mt-8 text-xs">&copy; {{ year }} Dansom Research &amp; Consultancy.</p>
   </div>
  </div>
 </div>
</template>

<script setup>
 defineEmits(["toggleMobileNav"])
 const year = new Date().getFullYear()
</script>

<style scoped>
.mobile-link {
 border-bottom: 1px solid rgb(255 255 255 / 0.1);
 padding: 0.72rem 0;
 transition: color 0.25s ease, padding-left 0.25s ease;
}
.mobile-link:hover,
.mobile-link.router-link-exact-active {
 color: #bfd962;
 padding-left: 0.35rem;
}
</style>