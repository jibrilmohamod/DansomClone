<template>
 <article class="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
  <p class="text-sm font-semibold text-primary">{{ role }}</p>
  <h3 class="mt-2 font-display text-xl font-semibold text-slate-900 md:text-2xl">{{ name }}</h3>
  <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ about }}</p>

  <Accordion type="single" collapsible class="mt-auto pt-4">
   <AccordionItem value="bio">
    <AccordionTrigger class="text-left text-primary hover:text-primary/80">Read full bio</AccordionTrigger>
    <AccordionContent>
     <div class="space-y-3 text-sm leading-relaxed text-slate-600" v-html="aboutBig"></div>
    </AccordionContent>
   </AccordionItem>
  </Accordion>
 </article>
</template>

<script lang="ts" setup>
 import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
 } from "@/components/ui/accordion"

 defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  about: { type: String, required: true },
  aboutBig: { type: String, required: true },
 })
</script>
