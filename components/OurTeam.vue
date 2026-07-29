<template>
 <section class="border-y border-mist/10 bg-panel/[0.55] py-16 md:py-24">
  <div class="shell">
   <div class="max-w-3xl">
    <TheTitle title="Meet our team" />
    <p class="mt-4 max-w-2xl text-base leading-relaxed text-mist/[0.65] md:text-lg">
     Regional specialists combining field access, research leadership, operations, and analytical expertise.
    </p>
   </div>
   <div class="mt-10 grid gap-5 lg:grid-cols-2">
    <slot name="vfor"></slot>
   </div>
  </div>
 </section>
</template>