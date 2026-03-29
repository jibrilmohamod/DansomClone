<template>
 <section class="relative overflow-hidden py-14">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,248,255,0.14),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(156,123,255,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]"></div>
  <div class="container relative mx-auto px-6">
   <div class="flex flex-col gap-3 text-center text-white">
    <p class="text-xs uppercase tracking-[0.3em] text-secondary">Leadership</p>
    <TheTitle class="text-white" title="Meet Our Team" />
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
