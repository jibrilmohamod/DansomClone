<template>
 <div id="app" class="h-screen">
  <div class="relative slide overflow-hidden">
   <div class="carousel-inner relative overflow-hidden w-full">
    <div class="curved-div bg-cover bg-center inset-0 z-50 outline absolute">
     <div class="h-full w-full flex items-center justify-center">
      <div class="w-1/2 h-full hidden md:block"></div>
      <div
       class="md:w-[40%] md:h-[500px] bg-primary rounded-full bg-opacity-60 flex items-center h-80 w-80 flex-col justify-center gap-2 p-4 md:gap-6"
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
    <div
     v-for="(img, i) in images"
     :id="`slide-${i}`"
     :key="i"
     :class="`${active === i ? 'active' : 'left-full'}`"
     class="carousel-item inset-0 relative w-full transform transition-all duration-1000 ease-in-out"
    >
     <NuxtImg
      class="block w-full h-screen object-cover object-"
      :src="img"
      provider="cloudinary"
      format="webp"
      sizes="sm:800px md:50vw xl:1200px"
      :modifiers="{ effect: 'colorize:40', color: 'black' }"
      alt="First slide"
     />
    </div>
   </div>
  </div>
 </div>
</template>

<script setup>
 const images = ref([
  //   "v1713880776/Banner-1-1-1600x699_qxucbz.jpg",
  "v1713880776/Banner-2-1600x699_vmkzbn.jpg",
  "v1713880776/Banner-3-1600x699_ewoaq4.jpg",
  "v1713943514/Community_Mobilization_Bula_jiray-2_vzzaja.jpg",
  "v1713943545/20220907_110930_xh7a6k.jpg",
 ])

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
