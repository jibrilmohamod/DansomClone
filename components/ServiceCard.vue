<template>
 <div>
  <NuxtLink v-if="link" :to="link" class="flex gap-3 py-4 cursor-pointer">
   <!-- Icon -->
   <div
    class="h-fit bg-primary w-fit rounded-full p-2 hover:bg-secondary hover:duration-200 transition-all hover:ease-linear"
   >
    <Icon :name="icon" class="text-black text-6xl hover:" />
   </div>

   <!-- Title & Subtitle -->
   <div class="w-full">
    <h5 class="font-Pridi 2xl:text-2xl">
     {{ title }}
    </h5>
    <p class="font-Zilla md:w-3/4 2xl:text-xl">
     {{ subtitle }}
    </p>
   </div>
  </NuxtLink>
  <div v-else class="flex gap-3 py-4 cursor-progress">
   <!-- Icon -->
   <div
    class="h-fit bg-primary w-fit rounded-full p-2 hover:bg-secondary hover:duration-200 transition-all hover:ease-linear"
   >
    <Icon :name="icon" class="text-black text-6xl hover:" />
   </div>

   <!-- Title & Subtitle -->
   <div class="w-full">
    <h5 class="font-Pridi 2xl:text-2xl">
     {{ title }}
    </h5>
    <p class="font-Zilla md:w-3/4 2xl:text-xl">
     {{ subtitle }}
    </p>
   </div>
  </div>
 </div>
</template>

<script setup>
 defineProps({
  icon: {
   type: String,
  },
  title: String,
  subtitle: String,
  link: String,
 })
</script>

<style lang="scss" scoped></style>
