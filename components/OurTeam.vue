<template>
  <div class="pb-16">
    <div class="container flex mx-auto pt-16">
      <TheTitle class="text-center" title="Meet Our Team" />
    </div>
    <div class="w-full bg-secondary px-10 pt-10">
      <div class="container mx-auto">
        <div
          class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
        >
          <!-- vfor slot -->
          <slot name="vfor"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrayBgWithDescription",
};
</script>
