<script setup lang="ts">
 const showMobile = ref(false)
 const toggleMobileNav = () => {
  showMobile.value = !showMobile.value
 }
</script>

<template>
 <header class="relative z-40 border-b border-mist/10 bg-ink/[0.88] text-mist backdrop-blur-xl">
  <div class="shell hidden h-[72px] items-center gap-5 xl:flex">
   <NuxtLink to="/" class="shrink-0" aria-label="Dansom Research & Consultancy home">
    <img src="/dansom-logo.png" alt="Dansom Research & Consultancy" class="h-10 w-auto brand-logo" />
   </NuxtLink>

   <nav aria-label="Primary navigation" class="ml-auto flex items-center gap-6 text-sm font-semibold">
    <NuxtLink to="/" class="nav-link">Home</NuxtLink>
    <NuxtLink to="/About" class="nav-link">About</NuxtLink>
    <NuxtLink to="/Services" class="nav-link">Services</NuxtLink>
    <NuxtLink to="/Portfolio" class="nav-link">Portfolio</NuxtLink>
    <NuxtLink to="/Careers" class="nav-link">Careers</NuxtLink>
    <NuxtLink to="/Contact" class="nav-link">Contact</NuxtLink>
    <a href="http://webmail.dansomconsultancy.org/" target="_blank" rel="noopener noreferrer" class="nav-link">Staff Email</a>
   </nav>

   <ThemeToggle compact />

   <a
    href="https://so.linkedin.com/company/dansom-research-and-consultancy"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Dansom Research & Consultancy on LinkedIn"
    class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-mist/[0.15] text-mist/75 transition hover:border-primary/60 hover:text-primary"
   >
    <Icon name="ri:linkedin-fill" class="text-lg" />
   </a>
   <NuxtLink to="/Contact" class="button-primary shrink-0">
    Contact
    <Icon name="mdi:arrow-top-right" />
   </NuxtLink>
  </div>

  <div class="flex h-16 items-center justify-between px-4 xl:hidden">
   <NuxtLink to="/" class="rounded-xl bg-paper px-2.5 py-1.5" aria-label="Dansom Research & Consultancy home">
    <img src="/dansom-logo.png" alt="Dansom Research & Consultancy" class="h-7 w-auto" />
   </NuxtLink>
   <div class="flex items-center gap-2">
    <ThemeToggle compact />
    <button
     type="button"
     class="inline-flex h-10 items-center justify-center rounded-xl border border-mist/[0.15] bg-mist/[0.03] px-3 text-sm font-bold text-mist"
     aria-label="Open navigation"
     :aria-expanded="showMobile"
     @click="toggleMobileNav"
    >
     Menu
    </button>
   </div>
  </div>

  <MobileNav v-if="showMobile" @toggleMobileNav="toggleMobileNav" />
 </header>
</template>

<style scoped>
.nav-link {
 position: relative;
 padding: 0.55rem 0;
 color: rgb(var(--mist) / 0.66);
 transition: color 0.25s ease;
}
.nav-link::after {
 content: "";
 position: absolute;
 right: 0;
 bottom: 0;
 left: 0;
 height: 2px;
 background: #bfd962;
 transform: scaleX(0);
 transform-origin: left;
 transition: transform 0.25s ease;
}
.nav-link:hover,
.nav-link.router-link-exact-active {
 color: rgb(var(--mist));
}
.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
 transform: scaleX(1);
}
</style>