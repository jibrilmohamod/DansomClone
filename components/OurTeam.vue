<template>
 <section class="border-y border-line/40 bg-panel-soft/35 py-20 md:py-32">
  <div class="shell grid gap-12 lg:grid-cols-12">
   <RevealBlock class="lg:col-span-4">
    <p class="eyebrow">Regional specialists</p>
    <h2 class="display-title mt-5 text-4xl leading-[0.98] md:text-6xl">The people behind the evidence.</h2>
    <p class="body-copy mt-6">Research leadership, field access, operations, data science, and sector expertise in one multidisciplinary team.</p>
   </RevealBlock>
   <div class="lg:col-span-7 lg:col-start-6">
    <slot name="vfor"></slot>
   </div>
  </div>
 </section>
</template>

