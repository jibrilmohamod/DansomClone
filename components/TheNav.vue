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
    <div
     class="flex flex-wrap items-center justify-between pb-3 pt-2 text-xs font-medium text-white/80"
    >
     <div class="flex flex-wrap items-center gap-5">
      <div class="flex items-center gap-2">
       <Icon name="mdi:map-marker" />
       <span>Mogadishu &amp; Nairobi</span>
      </div>
      <a
       class="flex items-center gap-2 hover:text-white"
       href="mailto:info@dansomconsultancy.org"
      >
       <Icon name="mdi:email-outline" />
       info@dansomconsultancy.org
      </a>
     </div>
     <div class="flex items-center gap-3 text-white/70">
      <Icon name="mdi:facebook" class="hover:text-white" />
      <Icon name="mdi:instagram" class="hover:text-white" />
      <Icon name="mdi:twitter" class="hover:text-white" />
      <Icon name="akar-icons:tiktok-fill" class="hover:text-white" />
     </div>
    </div>

    <div
     class="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 ring-1 ring-white/15 backdrop-blur-lg shadow-lg shadow-black/10"
    >
     <NuxtLink to="/" class="flex items-center gap-3">
      <img src="/dansom-logo.png" alt="Dansom logo" class="h-12 w-auto" />
      <div class="hidden text-left text-xs font-semibold leading-tight text-white/80 lg:block">
       Research &amp; Consultancy for the Horn of Africa
      </div>
     </NuxtLink>

     <div class="flex items-center gap-7 text-sm font-semibold uppercase tracking-[0.08em]">
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
      class="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-quinary shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
     >
      Book a call
      <Icon name="mdi:arrow-right" />
     </NuxtLink>
    </div>
   </div>
  </div>

  <div class="w-full px-5 py-5 overflow-hidden md:hidden">
   <nav class="w-full">
    <ul class="flex w-full items-center justify-between">
     <li class="rounded-full bg-white/90 p-2" @click="toggleMobileNav()">
      <Icon name="ci:menu-alt-01" class="text-4xl text-quinary" />
     </li>

     <li>
      <NuxtLink to="/">
       <img src="/dansom-logo.png" alt="Dansom logo" class="h-8" />
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
 transition: color 0.2s ease;
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
 background: #f5a524;
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
