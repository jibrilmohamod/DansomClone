<template>
 <div class="flex flex-col gap-3 md:gap-6">
  <h3 class="font-DM text-5xl md:text-6xl">
   {{ title }}
  </h3>

  <p class="py-5 font-Lora text-lg md:text-xl md:pr-3">
   {{ subtitle }}
  </p>

  <NuxtLink class="place-self-start" :to="link">
   <Button
    class="bg-primary text-lg my-4 hover:bg-quaternary hover:duration-700 transition-all hover:ease-linear md:text-xl md:pr-9 rounded-md md:py-4 flex text-white gap-1 px-4 items-center py-2"
   >
    <Icon name="icon-park-outline:torch" class="text-3xl md:text-4xl" />
    <p class="font-Montserrat">
     {{ LinkText }}
    </p>
   </Button>
  </NuxtLink>
 </div>
</template>

<script setup>
 defineProps({
  title: String,
  subtitle: String,
  image: String,
  link: String,
  LinkText: String,
 })
</script>

<style lang="scss" scoped></style>
