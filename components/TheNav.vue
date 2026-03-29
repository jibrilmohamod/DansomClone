<script setup lang="ts">
 const showMobile = ref(false)

 const toggleMobileNav = () => {
  showMobile.value = !showMobile.value
 }
</script>

<template>
 <div class="text-slate-800">
  <div class="hidden md:block">
   <div class="container">
    <div class="flex flex-wrap items-center justify-between py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
     <div class="flex flex-wrap items-center gap-3">
      <div class="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
       <Icon name="mdi:map-marker" class="text-base text-secondary" />
       <span>Mogadishu &amp; Nairobi</span>
      </div>
      <a
       class="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 transition hover:bg-slate-50"
       href="mailto:info@dansomconsultancy.org"
      >
       <Icon name="mdi:email-outline" class="text-base text-secondary" />
       info@dansomconsultancy.org
      </a>
     </div>
     <div class="flex items-center gap-3 text-slate-500">
      <Icon name="mdi:facebook" class="transition hover:text-slate-900" />
      <Icon name="mdi:instagram" class="transition hover:text-slate-900" />
      <Icon name="mdi:twitter" class="transition hover:text-slate-900" />
      <Icon name="akar-icons:tiktok-fill" class="transition hover:text-slate-900" />
     </div>
    </div>

    <div class="flex items-center justify-between rounded-[18px] border border-slate-200 bg-white px-5 py-3 backdrop-blur-2xl shadow-[0_16px_40px_-28px_rgba(15,23,42,0.35)]">
     <NuxtLink
      to="/"
      class="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm"
     >
      <img src="/dansom-logo.png" alt="Dansom logo" class="h-11 w-auto" />
     </NuxtLink>

     <div class="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.16em]">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/About" class="nav-link">About</NuxtLink>
      <NuxtLink to="/Services" class="nav-link">Services</NuxtLink>
      <NuxtLink to="/Portfolio" class="nav-link">Portfolio</NuxtLink>
      <NuxtLink to="/Careers" class="nav-link">Careers</NuxtLink>
      <NuxtLink to="/Contact" class="nav-link">Contact</NuxtLink>
      <a
       href="http://webmail.dansomconsultancy.org/"
       target="_blank"
       class="nav-link"
      >
       Staff Email
      </a>
     </div>

     <NuxtLink
      to="/Contact"
      class="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800"
     >
      Book a call
      <span class="transition-transform group-hover:translate-x-1">
       <Icon name="mdi:arrow-right" />
      </span>
     </NuxtLink>
    </div>
   </div>
  </div>

  <div class="w-full px-5 py-5 md:hidden">
   <nav class="w-full">
    <ul class="flex w-full items-center justify-between">
     <li class="rounded-full border border-slate-300 bg-white p-3 shadow-sm" @click="toggleMobileNav()">
      <Icon name="ci:menu-alt-01" class="text-3xl text-slate-700" />
     </li>

     <li>
      <NuxtLink to="/" class="flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
       <img src="/dansom-logo.png" alt="Dansom logo" class="h-9" />
      </NuxtLink>
     </li>
    </ul>
     <transition
     mode="out-in"
     enter-to-class="animate__animated animate__fadeInRight"
     leave-to-class="animate__animated animate__fadeOutRight"
    >
     <MobileNav
      v-if="showMobile"
      @toggleMobileNav="toggleMobileNav()"
     />
    </transition>
   </nav>
  </div>
 </div>
</template>

<style scoped>
.nav-link {
 position: relative;
 padding: 6px 0;
 transition: color 0.2s ease, opacity 0.2s ease;
 color: rgb(71 85 105);
}

.nav-link::after {
 content: "";
 position: absolute;
 left: 0;
 bottom: 0;
 height: 2px;
 width: 100%;
 transform: scaleX(0);
 transform-origin: left;
 background: linear-gradient(90deg, #b68a35, #111827);
 transition: transform 0.25s ease;
 opacity: 0.9;
}

.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
 transform: scaleX(1);
}

.nav-link:hover,
.nav-link.router-link-exact-active {
 color: rgb(15 23 42);
}
</style>
