<template>
 <div
  class="bg-quinary z-50 h-[100vh] w-full text-white absolute top-0 left-0 pt-5"
 >
  <!-- logo here and close button -->
  <div class="flex justify-between px-5 pb-10 pt-5 border-b border-gray-800">
   <NuxtLink to="/">
    <img src="/dansom-logo.png" class="object-contain h-10" alt="Focal Foods" />
   </NuxtLink>

   <button
    class="p-2 bg-white rounded-full text-black"
    @click="$emit('toggleMobileNav')"
   >
    <IconCSS name="ic:baseline-close" class="text-3xl text-black" />
   </button>
  </div>

  <!-- nav links -->
  <nav class="flex flex-col gap-5 py-8 font-jost px-5">
   <NuxtLink
    to="/"
    class="text-2xl focus:text-orange-500"
    aria-label="Nav link"
   >
    Home
   </NuxtLink>

   <NuxtLink
    to="/about"
    class="text-2xl focus:text-orange-500"
    aria-label="Nav link"
   >
    About Us
   </NuxtLink>

   <NuxtLink
    to="/Portfolio"
    class="text-2xl focus:text-orange-500"
    aria-label="Nav link"
   >
    Our Portfolio
   </NuxtLink>

   <NuxtLink
    to="/Contact"
    class="text-2xl focus:text-orange-500"
    aria-label="Nav link"
   >
    Contact Us
   </NuxtLink>

   <NuxtLink
    to="/Careers"
    class="text-2xl focus:text-orange-500"
    aria-label="Nav link"
   >
    Careers
   </NuxtLink>

   <NuxtLink class="text-2xl focus:text-orange-500" aria-label="Nav link">
    Repository
   </NuxtLink>

   <a
    href="http://webmail.dansomconsultancy.org/"
    class="text-2xl focus:text-orange-500"
    aria-label="Nav link"
    target="_blank"
   >
    Staff Email
   </a>
  </nav>

  <!-- social media icons and copyright -->
  <div class="px-5">
   <div class="flex">
    <!-- instagram -->
    <IconCSS name="akar-icons:instagram-fill" class="text-xl mr-5" />
    <!-- facebook -->
    <IconCSS name="akar-icons:facebook-fill" class="text-xl mr-5" />
    <!-- twitter -->
    <IconCSS name="akar-icons:twitter-fill" class="text-xl mr-5" />
    <!-- tiktok -->
    <IconCSS name="akar-icons:tiktok-fill" class="text-xl mr-5" />
    <!-- youtube -->
    <IconCSS name="akar-icons:youtube-fill" class="text-xl mr-5" />
   </div>

   <div class="py-4">
    <p class="font-jost text-sm">&copy; 2024 DANSOM All Rights Reserved.</p>
   </div>
  </div>

  <div class="px-5 text-sm border-t border-gray-800">
   <!-- address with icon -->

   <div class="flex py-2">
    <div class="pr-3">
     <IconCSS name="mdi:location" class="text-xl" />
    </div>
    <p class="font-jost">1234, Nairobi, Kenya</p>
   </div>
   <!-- phone with icon -->

   <div class="flex py-2">
    <div class="pr-3">
     <IconCSS name="mdi:phone" class="text-xl" />
    </div>
    <p class="font-jost">+254 123 456 789</p>
   </div>
   <!-- email with icon -->

   <div class="flex py-2">
    <div class="pr-3">
     <IconCSS name="mdi:email" class="text-xl" />
    </div>
    <p class="font-jost">
     <a href="mailto:info@zaman.co.ke"> info@dansom.com </a>
    </p>
   </div>
  </div>
 </div>
</template>

<script setup>
 defineEmits(["toggleMobileNav"])
</script>

<style lang="scss" scoped></style>
