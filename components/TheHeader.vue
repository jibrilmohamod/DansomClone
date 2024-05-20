<template>
 <div class="">
  <TheNav class="z-50 w-full" />

  <div
   class="flex flex-col items-center justify-center bg md:h-32"
  
  >
   <h1 class="text-6xl font-bold text-center text-gray-800 font-Lora">
    {{ title }}
   </h1>
   <h2 class="text-4xl font-bold text-center text-gray-800">
    {{ projTitle }}
   </h2>
  </div>
 </div>
</template>

<script setup>
 defineProps({
  title: {},
  projTitle: {},
 })

//  const getStyleBasedOnTitle = computed(() => {
//   if (title === "Who we are") {
//    return {
//     background:
//      "radial-gradient(farthest-side at -33.33% 50%, #0000 52%, #474bff 54% 57%, #0000 59%) 0 calc(40px / 2), radial-gradient(farthest-side at 50% 133.33%, #0000 52%, #474bff 54% 57%, #0000 59%) calc(40px / 2) 0, radial-gradient(farthest-side at 133.33% 50%, #0000 52%, #474bff 54% 57%, #0000 59%), radial-gradient(farthest-side at 50% -33.33%, #0000 52%, #474bff 54% 57%, #0000 59%), #47d3ff",
//     backgroundSize: "calc(40px / 4.667) 40px, 40px calc(40px / 4.667)",
//    }
//   }
//  })
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
   #47d3ff;
  background-size: calc(40px / 4.667) 40px, 40px calc(40px / 4.667);
 }
</style>
