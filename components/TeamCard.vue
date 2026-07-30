<template>
 <RevealBlock as="article" class="team-row border-t border-line/55 py-7 first:border-t-0 first:pt-0">
  <div class="grid gap-5 md:grid-cols-[12rem_1fr]">
   <div>
    <p class="text-sm font-semibold text-primary">{{ role }}</p>
    <h3 class="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-mist">{{ name }}</h3>
   </div>
   <div>
    <p class="text-sm leading-relaxed text-mist/65">{{ about }}</p>
    <Accordion type="single" collapsible class="mt-3">
     <AccordionItem value="bio" class="border-0">
      <AccordionTrigger class="justify-start gap-2 py-3 text-left text-sm font-semibold text-primary hover:no-underline">Read full bio</AccordionTrigger>
      <AccordionContent>
       <div class="team-bio space-y-4 pb-2 text-sm leading-7 text-mist/65" v-html="aboutBig"></div>
      </AccordionContent>
     </AccordionItem>
    </Accordion>
   </div>
  </div>
 </RevealBlock>
</template>

<script lang="ts" setup>
 import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
 defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  about: { type: String, required: true },
  aboutBig: { type: String, required: true },
 })
</script>

