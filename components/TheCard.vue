<template>
 <div
  class="px-6 pt-6 md:container"
  data-aos="fade-up"
  data-aos-anchor-placement="top-bottom"
  data-aos-duration="1000"
 >
  <div class="flex flex-col md:flex-row">
   <div class="md:basis-1/2">
    <slot name="One"></slot>
   </div>

   <!-- image slot  -->
   <div>
    <slot name="Image"></slot>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
