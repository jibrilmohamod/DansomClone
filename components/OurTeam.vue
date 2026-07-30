<template>
 <section class="border-y border-line/45 bg-panel-soft/35 py-24 md:py-40">
  <div class="atlas-shell">
   <RevealBlock class="grid gap-8 lg:grid-cols-12">
    <p class="atlas-label lg:col-span-2">Regional specialists</p>
    <h2 class="atlas-display text-[clamp(4rem,10vw,10rem)] leading-[0.8] lg:col-span-9 lg:col-start-4">The people behind the evidence.</h2>
   </RevealBlock>
   <p class="mt-12 max-w-xl text-lg leading-relaxed text-mist/[0.62] lg:ml-auto">Research leadership, field access, operations, data science, and sector expertise in one multidisciplinary team.</p>
   <div class="mt-20 border-b border-line/55">
    <slot name="vfor"></slot>
   </div>
  </div>
 </section>
</template>
