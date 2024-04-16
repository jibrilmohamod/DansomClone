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
      class="text-white text-3xl text-center font font-Pridi md:text-5xl"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1200"
     >
      Powerful transformations across the Horn of Africa
     </h1>
     <p
      class="text-center text-3xl font-Zilla"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1400"
     >
      Dansom is a leading consultancy firm in the Horn of Africa. We provide a
      range of services to our clients
     </p>
     <button
      class="bg-white text-black font-Merriweather py-2 px-4 rounded-2xl flex justify-center gap-x-2 md:text-2xl md:py-5 md:px-6 md:rounded-3xl md:gap-x-4"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1400"
     >
      <Icon
       name="lets-icons:sun-light"
       class="text-black text-xl md:text-3xl"
      />
      <p>Learn More</p>
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
