<template>
  <div class="h-[50vh] 2xl:h-[40vh]">
    <div
      class="absolute inset-0 z-10 h-[50vh] flex justify-center items-center 2xl:h-[40vh]"
    >
      <!-- page title  -->
    </div>
    <div
      class="absolute inset-0 z-20 h-[50vh] flex justify-center items-center"
    >
      <!-- page title  -->
      <h1
        class="text-white text-5xl uppercase pt-20 md:text-6xl 2xl:pt-0 text-center font-Merriweather"
      >
        {{ title }}
      </h1>
    </div>
    <!-- NavBar -->
    <TheNav class="absolute z-50 w-full" />

    <!-- image slot  -->
    <slot name="image"></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "About Us",
  },
});
</script>

<style lang="scss" scoped></style>
