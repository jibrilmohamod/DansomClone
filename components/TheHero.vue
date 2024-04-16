<template>
 <div class="bg-white">
  <TheCarousel class="" />
  <div class="curved-div b bg-cover bg-center absolute inset-0">
   <TheNav />
   <div class="h-[85vh] w-full outline md:flex items-center hidden">
    <div class="w-1/2 h-full"></div>
    <div class="w-[40%] h-5/6 bg-primary rounded-full bg-opacity-60"></div>
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
