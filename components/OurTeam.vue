<template>
 <section class="border-y border-line/45 bg-panel-soft/35 py-24 md:py-40">
  <div class="atlas-shell">
   <RevealBlock class="grid gap-8 lg:grid-cols-12">
    <p class="atlas-label lg:col-span-2">Regional specialists</p>
    <h2 class="atlas-display max-w-[17ch] text-[clamp(2.35rem,4.1vw,4rem)] leading-[0.98] lg:col-span-8 lg:col-start-4">Our research and advisory team.</h2>
   </RevealBlock>
   <p class="mt-12 max-w-xl text-lg leading-relaxed text-mist/[0.62] lg:ml-auto">Research leadership, field access, operations, data science, and sector expertise in one multidisciplinary team.</p>
   <div class="mt-20 border-b border-line/55">
    <slot name="vfor"></slot>
   </div>
  </div>
 </section>
</template>
