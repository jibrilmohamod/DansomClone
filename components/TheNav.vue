<script setup lang="ts">
 const showMobile = ref(false)

 const toggleMobileNav = () => {
  showMobile.value = !showMobile.value
 }
</script>

<template>
 <div class="text-white">
  <div class="hidden md:block">
   <div class="container">
    <div class="flex flex-wrap items-center justify-between py-3 text-xs font-medium text-white/70">
     <div class="flex flex-wrap items-center gap-4">
      <div class="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
       <Icon name="mdi:map-marker" class="text-base text-secondary" />
       <span>Mogadishu &amp; Nairobi</span>
      </div>
      <a
       class="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 transition hover:bg-white/10"
       href="mailto:info@dansomconsultancy.org"
      >
       <Icon name="mdi:email-outline" class="text-base text-secondary" />
       info@dansomconsultancy.org
      </a>
     </div>
     <div class="flex items-center gap-3 text-white/70">
      <Icon name="mdi:facebook" class="transition hover:text-white" />
      <Icon name="mdi:instagram" class="transition hover:text-white" />
      <Icon name="mdi:twitter" class="transition hover:text-white" />
      <Icon name="akar-icons:tiktok-fill" class="transition hover:text-white" />
     </div>
    </div>

    <div class="flex items-center justify-between rounded-[18px] border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-glow">
     <NuxtLink to="/" class="flex items-center gap-3">
      <img src="/dansom-logo.png" alt="Dansom logo" class="h-11 w-auto" />
     </NuxtLink>

     <div class="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.12em]">
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
      class="group inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary shadow-glow transition hover:-translate-y-1"
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
     <li class="rounded-full border border-white/20 bg-white/10 p-3" @click="toggleMobileNav()">
      <Icon name="ci:menu-alt-01" class="text-3xl text-white" />
     </li>

     <li>
      <NuxtLink to="/">
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
 color: rgba(255, 255, 255, 0.75);
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
 background: linear-gradient(90deg, #d7b065, #8c7357);
 transition: transform 0.25s ease;
 opacity: 0.9;
}

.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
 transform: scaleX(1);
}

.nav-link:hover,
.nav-link.router-link-exact-active {
 color: #fff;
}
</style>
