<script setup lang="ts">
 const showMobile = ref(false)

 const toggleMobileNav = () => {
  showMobile.value = !showMobile.value
 }
</script>

<template>
 <div>
  <div>
   <div class="hidden md:block h-fit inset-0 z-50 container mx-auto text-white">
    <!-- location , email and phone -->
    <div
     class="font-jost border-b border-quaternary flex justify-between rounded-sm text-base"
    >
     <!-- location  -->
     <div
      class="py-2 border-x border-quaternary rounded-sm px-5 grow flex justify-center items-center w-fit gap-3"
     >
      <!-- icon  -->
      <Icon name="mdi:location" class="text-primary" />
      <!-- text  -->
      <a class="text-sm text-primary" href=""> Nairobi , Kenya </a>
     </div>
     <!-- phone  -->
     <div
      class="py-2 border-r border-quaternary rounded-sm px-5 grow flex justify-center items-center w-fit gap-3"
     >
      <!-- icon  -->
      <Icon name="mdi:location" class="text-primary" />
      <!-- text  -->
      <a class="text-sm text-primary"> Mogadishu , Somalia </a>
     </div>
     <!-- email  -->
     <div
      class="py-2 border-r border-quaternary rounded-sm px-5 grow flex justify-center items-center w-fit gap-3"
     >
      <!-- icon  -->
      <Icon name="mdi:email" class="text-primary" />
      <!-- text  -->
      <a
       class="text-sm text-primary"
       href="mailto:info@dansomconsultancy.org
"
      >
       info@dansomconsultancy.org
      </a>
     </div>
     <!-- socials -->
     <div
      class="py-2 border-r border-quaternary rounded-sm px-5 grow flex justify-center items-center w-fit"
     >
      <!-- icon  -->
      <Icon name="mdi:facebook" class="text-white grow hover:text-blue-700" />
      <!-- icon  -->
      <Icon name="mdi:instagram" class="text-white grow hover:text-pink-700" />
      <!-- icon  -->
      <Icon name="mdi:twitter" class="text-white grow hover:text-sky-600" />
      <!-- tiktok -->
      <Icon
       name="akar-icons:tiktok-fill"
       class="text-white grow hover:text-fuchsia-600"
      />
     </div>
    </div>
    <!-- navigation and logo -->
    <div class="flex items-center py-5">
     <!-- logo -->
     <h1
      class="w-fit p-3 rounded-md shadow-md hover:bg-white bg-slate-200 transition-all delay-150 ease-linear"
     >
      <NuxtLink to="/">
       <img
        src="/dansom-logo.png"
        alt="logo"
        class="object-contain h-10 w-fit"
       />
      </NuxtLink>
     </h1>
     <!-- navigation -->
     <div class="flex-grow flex justify-end items-center gap-5">
      <!-- nav items -->
      <div class="flex-grow flex justify-end items-center gap-5">
       <NuxtLink to="/" class="text-lg border-button font-Lora">
        Home
       </NuxtLink>
       <NuxtLink to="/About" class="text-lg border-button font-Lora">
        About Us
       </NuxtLink>
       <NuxtLink to="/Portfolio" class="text-lg border-button font-Lora">
        Our Portfolio
       </NuxtLink>
       <NuxtLink to="/Contact" class="border-button text-lg font-Lora">
        Contact Us
       </NuxtLink>
       <NuxtLink to="/Careers" class="text-lg border-button font-Lora">
        Careers
       </NuxtLink>
       <NuxtLink to="" class="text-lg border-button font-Lora">
        Repository
       </NuxtLink>
       <a
        href="http://webmail.dansomconsultancy.org/"
        class="text-lg border-button font-Lora"
        target="_blank"
       >
        Staff Email
       </a>
      </div>
      <!-- button -->
      <div class="flex justify-end items-center gap-5">
       <a href="mailto:info@focalfoods.co.ke" class="text-lg font-Lora hover:">
       </a>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="w-full px-5 py-5 overflow-hidden md:hidden">
   <nav class="w-96">
    <!-- menu item -->
    <ul class="flex w-[90vw] items-center justify-between">
     <li class="bg-white p-2 rounded-full" @click="toggleMobileNav()">
      <Icon name="ci:menu-alt-01" class="text-4xl text-blue-500" />
     </li>

     <li class="">
      <!-- logo -->
      <NuxtLink to="/"
       ><img src="/dansom-logo.png" alt="logo" class="h-8"
      /></NuxtLink>
     </li>
    </ul>
    <transition
     mode="out-in"
     enter-to-class="animate__animated animate__fadeInRight"
     leave-to-class="animate__animated animate__fadeOutRight"
    >
     <MobileNav
      class=""
      v-if="showMobile"
      @toggleMobileNav="toggleMobileNav()"
     />
    </transition>
   </nav>
  </div>
 </div>
</template>

<style scoped>
 .border-button {
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  position: relative;
  overflow: hidden;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
 }

 .border-button::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  /* Height of the bottom border */
  background-color: #3077d3;
  /* Color of the animated border */
  transition: width 0.3s ease;
  z-index: -1;
 }

 .border-button:hover::before {
  width: 100%;
 }
</style>
