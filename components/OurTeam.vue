<template>
 <section class="border-y border-slate-200 bg-white py-12 md:py-16">
  <div class="container px-4 md:px-6">
   <div class="max-w-2xl">
    <TheTitle class="text-slate-900" title="Meet our team" />
    <p class="mt-3 text-base leading-relaxed text-slate-600">Regional specialists combining field access, research leadership, operations, and analytical expertise.</p>
   </div>
   <div class="mt-8 grid gap-5 md:grid-cols-2">
    <slot name="vfor"></slot>
   </div>
  </div>
 </section>
</template>
