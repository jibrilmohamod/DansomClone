<template>
 <section class="bg-white py-12">
  <div class="container mx-auto px-6">
   <div class="flex flex-col gap-3 text-center">
    <p class="text-xs uppercase tracking-[0.3em] text-primary">Leadership</p>
    <TheTitle class="text-quinary" title="Meet Our Team" />
   </div>

   <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <slot name="vfor"> </slot>
   </div>
  </div>
 </section>
</template>

<script>
export default {
  name: "GrayBgWithDescription",
}
</script>
