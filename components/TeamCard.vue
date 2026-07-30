<template>
 <RevealBlock as="article" class="team-row border-t border-line/55 py-9 md:py-12">
  <div class="grid gap-7 md:grid-cols-12">
   <p class="atlas-label md:col-span-2">{{ role }}</p>
   <div class="md:col-span-5">
    <h3 class="atlas-display text-4xl leading-[0.92] md:text-6xl">{{ name }}</h3>
   </div>
   <div class="md:col-span-4 md:col-start-9">
    <p class="text-sm leading-relaxed text-mist/[0.65]">{{ about }}</p>
    <Accordion type="single" collapsible class="mt-4">
     <AccordionItem value="bio" class="border-0">
      <AccordionTrigger class="justify-start gap-2 py-3 text-left text-sm font-semibold text-primary hover:no-underline">Read full bio</AccordionTrigger>
      <AccordionContent>
       <div class="team-bio space-y-4 pb-2 text-sm leading-7 text-mist/[0.65]" v-html="aboutBig"></div>
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
