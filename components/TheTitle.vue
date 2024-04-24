<template>
 <div class="flex flex-col gap-3 md:gap-6 pb-5">
  <h3 class="font-DM text-5xl md:text-6xl 2xl:text-7xl">
   {{ title }}
  </h3>

  <p class="pt-5 font-Lora text-lg md:text-xl md:pr-3 2xl:text-2xl">
   {{ subtitle }}
  </p>

  <p class="font-Lora text-lg md:text-xl md:pr-3 2xl:text-2xl">
   {{ subtitle2 }}
  </p>

  <NuxtLink class="place-self-start" :to="link" v-if="icon">
   <button
    class="bg-primary text-white flex items-center px-4 py-2 rounded-md gap-2 text-xl hover:bg-quaternary hover:duration-700 transition-all hover:ease-linear md:text-2xl"
   >
    <p class="font-Montserrat">
     {{ LinkText }}
    </p>
    <Icon :name="icon" class="text-3xl md:text-4xl" />
   </button>
  </NuxtLink>
 </div>
</template>

<script setup>
 import { Button } from "@/components/ui/button"
 defineProps({
  title: String,
  subtitle: String,
  image: String,
  link: String,
  LinkText: String,
  subtitle2: String,
  icon: String,
 })
</script>

<style lang="scss" scoped></style>
