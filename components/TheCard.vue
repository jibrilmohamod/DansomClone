<template>
 <div
  class="px-6 py-6 md:container m-auto md:pt-10"
  data-aos="fade-up"
  data-aos-anchor-placement="top-bottom"
  data-aos-duration="1000"
 >
  <div class="flex flex-col md:flex-row">
   <div class="md:basis-1/2">
    <slot name="One"></slot>
   </div>

   <!-- image slot  -->
   <div class="md:basis-1/2 flex items-center justify-center">
    <slot name="Image"></slot>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
