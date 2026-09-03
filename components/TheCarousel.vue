<template>
 <div id="app" class="min-h-[100dvh]">
  <div class="relative slide overflow-hidden">
   <div class="carousel-inner relative overflow-hidden w-full">
    <div
     v-for="(img, i) in images"
     :id="`slide-${i}`"
     :key="i"
     :class="`${active === i ? 'active' : 'left-full'}`"
     class="carousel-item inset-0 relative w-full transform transition-all duration-1000 ease-in-out"
    >
     <img
      class="block min-h-[100dvh] w-full object-cover"
      :src="img"
      width="1586"
      height="992"
      :alt="imageAlts[i]"
     />
    </div>
   </div>
  </div>
 </div>
</template>

<script setup>
import { photography } from "~/data/photography"
 const images = ref([
  photography.fieldMonitoring.src,
  photography.communityDialogue.src,
  photography.researchWorkshop.src,
  photography.livelihoodsResearch.src,
 ])

 const imageAlts = [
  "Researchers monitoring rural water infrastructure",
  "Researchers listening during a community consultation",
  "Research specialists reviewing a fieldwork plan",
  "Researchers and a farmer examining crop conditions",
 ]

 let active = ref(0)

 onMounted(() => {
  let i = 0
  setInterval(() => {
   if (i > images.value.length - 1) {
    i = 0
   }
   active.value = i
   i++
  }, 5000)
 })
</script>

<style scoped>
 .left-full {
  left: -100%;
 }

 .carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
 }

 .carousel-item.active {
  left: 0;
 }
</style>
