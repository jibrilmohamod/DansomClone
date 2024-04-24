<template>
 <div class="bg-white">
  <TheCarousel class="" />
  <div class="curved-div b bg-cover bg-center absolute inset-0 z-50">
   <TheNav />
   <div class="h-[85vh] w-full flex items-center justify-center">
    <div class="w-1/2 h-full hidden md:block"></div>
    <div
     class="md:w-[40%] md:h-5/6 bg-primary rounded-full bg-opacity-60 flex items-center h-80 w-80 flex-col justify-center gap-2 p-4 md:gap-6"
     data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="1000"
    >
     <h1
      class="text-white text-3xl text-center font font-Pridi md:text-5xl 2xl:text-7xl"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1200"
     >
      Powerful transformations across the Horn of Africa
     </h1>
     <p
      class="text-center text-lg md:text-3xl font-Zilla 2xl:text-4xl"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1400"
     >
      Dansom is a leading consultancy firm in the Horn of Africa. We provide a
      range of services to our clients
     </p>
     <button
      class="bg-white flex items-center px-4 py-2 rounded-md gap-2 text-xl hover:bg-quaternary hover:duration-700 transition-all hover:ease-linear md:text-2xl 2xl:text-3xl 2xl:px-5 2xl:py-3"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1400"
     >
      <NuxtLink to="/about" class="flex justify-center gap-x-2 items-center">
       <p>Learn More</p>
       <Icon
        name="ic:sharp-double-arrow"
        class="text-black text-xl md:text-3xl"
       />
      </NuxtLink>
     </button>
    </div>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
 import { Button } from "@/components/ui/button"
</script>

<style scoped>
 .curved-div {
  border-bottom-left-radius: 50% 30px;
  border-bottom-right-radius: 50% 30px;
 }
</style>
