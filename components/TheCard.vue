<template>
 <div
  class="px-6 py-8 md:container m-auto md:pt-10"
  data-aos="fade-up"
  data-aos-anchor-placement="top-bottom"
  data-aos-duration="1000"
 >
  <div class="dansom-card flex flex-col gap-10 p-6 md:flex-row md:items-center">
   <div class="md:basis-1/2 space-y-4">
    <slot name="One"></slot>
   </div>

   <div class="md:basis-1/2 flex items-center justify-center">
    <slot name="Image"></slot>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
