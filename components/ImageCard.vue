<template>
 <div
  class="md:h-[70vh] md:w-11/12 2xl:h-[50vh] duration-1000 ease-in-out rounded-full flex items-center justify-center gap-2 p-4 md:gap-6 bg-opacity-60 flex-col md:p-6 m-auto"
 >
  <NuxtImg
   :src="image"
   provider="cloudinary"
   format="webp"
   loading="lazy"
   class="rounded-full h-80 w-80 md:w-full md:h-full shadow-quaternary shadow-xl object-cover"
  />
 </div>
</template>

<script setup>
 defineProps({
  image: {
   type: String,
   default: "v1713943323/ODK_with_Beneficiary-1_d6zteg.jpg",
  },
 })
</script>

<style scoped>
 .bg {
  background: radial-gradient(
     farthest-side at -33.33% 50%,
     #0000 52%,
     #474bff 54% 57%,
     #0000 59%
    )
    0 calc(40px / 2),
   radial-gradient(
     farthest-side at 50% 133.33%,
     #0000 52%,
     #474bff 54% 57%,
     #0000 59%
    )
    calc(40px / 2) 0,
   radial-gradient(
    farthest-side at 133.33% 50%,
    #0000 52%,
    #474bff 54% 57%,
    #0000 59%
   ),
   radial-gradient(
    farthest-side at 50% -33.33%,
    #0000 52%,
    #474bff 54% 57%,
    #0000 59%
   ),
   transparent;
  background-size: calc(40px / 4.667) 40px, 40px calc(40px / 4.667);
 }
</style>
