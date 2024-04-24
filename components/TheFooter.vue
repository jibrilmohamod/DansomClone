<template>
 <div class="overflow-y-hidden bg-primary bg-opacity-30">
  <div class="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
   <div class="flex flex-col items-center justify-center">
    <div>
     <!-- logo -->
     <NuxtImg src="/dansom-logo.png" alt="logo" class="w-52" />
    </div>
    <div
     class="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8"
    >
     <NuxtLink
      to="/About"
      class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-black"
      >About</NuxtLink
     >
     <NuxtLink
      to="/Contact"
      class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-black"
      >Contact us</NuxtLink
     >
     <NuxtLink
      to="/Careers"
      class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-black"
      >Careers</NuxtLink
     >
     <NuxtLink
      to="/Portfolio"
      class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-black"
      >Our Projects</NuxtLink
     >
    </div>
    <div class="flex items-center gap-x-8 mt-6">
     <button
      aria-label="facebook"
      class="focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none rounded-full"
     >
      <Icon
       name="ri:facebook-fill"
       class="text-sky-500 hover:text-gray-500"
       size="24"
      />
     </button>
     <button
      aria-label="instagram"
      class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none rounded-full"
     >
      <Icon
       name="ri:instagram-fill"
       class="text-red-400 hover:text-gray-500"
       size="24"
      />
     </button>
     <button
      aria-label="pinterest"
      class="focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none rounded-full"
     >
      <Icon
       name="ri:pinterest-fill"
       class="text-rose-700 hover:text-gray-500"
       size="24"
      />
     </button>
    </div>
    <div class="flex items-center mt-6">
     <p class="text-base leading-4 text-black">
      {{ year }} <span class="font-semibold text-quaternary">Dansom</span>
     </p>
     <div class="border-l border-quaternary pl-2 ml-2">
      <p class="text-base leading-4 text-black">Inc. All rights reserved</p>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script setup>
 // get the current year
 const year = new Date().getFullYear()
</script>

<style></style>
