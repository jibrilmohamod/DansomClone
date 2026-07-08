<template>
 <section class="relative overflow-hidden py-10 md:py-14">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(182,138,53,0.15),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(15,23,42,0.08),transparent_35%)]"></div>
  <div class="container relative mx-auto px-4 md:px-6">
   <div class="flex flex-col gap-2 text-center text-slate-900 md:gap-3">
    <p class="text-[10px] uppercase tracking-[0.22em] text-secondary md:text-xs md:tracking-[0.3em]">Leadership</p>
    <TheTitle class="text-slate-900" title="Meet Our Team" />
   </div>

   <div class="mt-5 grid gap-3 md:mt-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
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
