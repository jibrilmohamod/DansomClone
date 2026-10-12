<template>
 <article class="surface group flex h-full flex-col p-6 transition duration-500 hover:border-primary/[0.35] md:p-7">
  <div class="flex items-start justify-between gap-5">
   <div>
    <p class="text-sm font-semibold text-primary">{{ role }}</p>
    <h3 class="mt-2 font-display text-2xl font-semibold tracking-tight text-mist">{{ name }}</h3>
   </div>
   <Icon name="mdi:account-outline" class="text-3xl text-mist/25 transition group-hover:text-primary" />
  </div>
  <p class="mt-5 text-sm leading-relaxed text-mist/60">{{ about }}</p>

  <Accordion type="single" collapsible class="mt-auto pt-5">
   <AccordionItem value="bio" class="border-mist/10">
    <AccordionTrigger class="text-left text-primary hover:no-underline">Read full bio</AccordionTrigger>
    <AccordionContent>
     <div class="team-bio space-y-3 text-sm leading-relaxed text-mist/60" v-html="aboutBig"></div>
    </AccordionContent>
   </AccordionItem>
  </Accordion>
 </article>
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