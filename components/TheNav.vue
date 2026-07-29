<script setup lang="ts">
 const showMobile = ref(false)

 const toggleMobileNav = () => {
  showMobile.value = !showMobile.value
 }
</script>

<template>
 <header class="relative z-40 border-b border-slate-200 bg-white/95 text-slate-800 backdrop-blur">
  <div class="container hidden h-[72px] items-center justify-between gap-6 px-6 lg:flex">
   <NuxtLink to="/" class="shrink-0" aria-label="Dansom Research & Consultancy home">
    <img src="/dansom-logo.png" alt="Dansom Research & Consultancy" class="h-11 w-auto" />
   </NuxtLink>

   <nav aria-label="Primary navigation" class="flex items-center gap-5 text-sm font-semibold">
    <NuxtLink to="/" class="nav-link">Home</NuxtLink>
    <NuxtLink to="/About" class="nav-link">About</NuxtLink>
    <NuxtLink to="/Services" class="nav-link">Services</NuxtLink>
    <NuxtLink to="/Portfolio" class="nav-link">Portfolio</NuxtLink>
    <NuxtLink to="/Careers" class="nav-link">Careers</NuxtLink>
    <NuxtLink to="/Contact" class="nav-link">Contact</NuxtLink>
    <a href="http://webmail.dansomconsultancy.org/" target="_blank" rel="noopener noreferrer" class="nav-link">Staff Email</a>
   </nav>

   <div class="flex shrink-0 items-center gap-2">
    <a
     href="https://so.linkedin.com/company/dansom-research-and-consultancy"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="Dansom Research & Consultancy on LinkedIn"
     class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-primary transition hover:border-primary/30 hover:bg-primary/5"
    >
     <Icon name="ri:linkedin-fill" class="text-lg" />
    </a>
    <NuxtLink
     to="/Contact"
     class="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90 active:translate-y-px"
    >
     Contact
     <Icon name="mdi:arrow-right" />
    </NuxtLink>
   </div>
  </div>

  <div class="flex h-16 items-center justify-between px-4 lg:hidden">
   <NuxtLink to="/" aria-label="Dansom Research & Consultancy home">
    <img src="/dansom-logo.png" alt="Dansom Research & Consultancy" class="h-9 w-auto" />
   </NuxtLink>
   <button
    type="button"
    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700"
    aria-label="Open navigation"
    :aria-expanded="showMobile"
    @click="toggleMobileNav"
   >
    <Icon name="ci:menu-alt-01" class="text-2xl" />
   </button>
  </div>

  <MobileNav v-if="showMobile" @toggleMobileNav="toggleMobileNav" />
 </header>
</template>

<style scoped>
.nav-link {
 position: relative;
 padding: 0.5rem 0;
 color: rgb(71 85 105);
 transition: color 0.2s ease;
}

.nav-link::after {
 content: "";
 position: absolute;
 inset-inline: 0;
 bottom: 0;
 height: 2px;
 background: #425e87;
 transform: scaleX(0);
 transform-origin: left;
 transition: transform 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
 color: rgb(15 23 42);
}

.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
 transform: scaleX(1);
}
</style>
