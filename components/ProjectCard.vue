<template>
 <div data-aos="fade-left" data-aos-duration="800">
  <NuxtLink :to="slug">
   <div
    class="dansom-card h-52 overflow-hidden transition hover:scale-[1.02] hover:duration-200 hover:ease-linear md:h-60"
   >
    <div class="h-full px-2.5 pb-2 md:px-3">
     <!-- logo  -->
     <div
      class="flex h-1/2 items-center justify-center border-b border-1 border-slate-300"
     >
      <NuxtImg
       :src="icon"
       alt="logo"
       class="h-20 w-full object-contain md:h-24"
       loading="lazy"
       quality="100"
       v-if="icon"
      />
     </div>
     <div class="flex h-1/2 items-center justify-center">
      <h3 class="text-pretty text-center font-Merriweather text-base text-slate-800 md:text-lg">
       {{ title }}
      </h3>
     </div>
    </div>
   </div>
  </NuxtLink>
 </div>
</template>

<script lang="ts" setup>
 defineProps({
  title: String,
  icon: String,
  icon2: String,
  slug: String,
 })
</script>

<style></style>
