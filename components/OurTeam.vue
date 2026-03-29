<template>
 <section class="relative overflow-hidden py-14">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(15,23,42,0.07),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(182,138,53,0.12),transparent_30%)]"></div>
  <div class="container relative mx-auto px-6">
   <div class="flex flex-col gap-3 text-center text-slate-900">
    <p class="text-xs uppercase tracking-[0.3em] text-secondary">Leadership</p>
    <TheTitle class="text-slate-900" title="Meet Our Team" />
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
