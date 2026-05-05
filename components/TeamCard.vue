<template>
 <article class="dansom-card group relative flex h-full flex-col overflow-hidden p-4 md:p-0">
  <div class="flex flex-1 flex-col gap-3 p-0 text-slate-900 md:gap-4 md:p-6">
   <div class="space-y-1">
    <div>
     <h3 class="text-lg font-semibold md:text-xl">{{ name }}</h3>
     <p class="text-xs font-medium text-slate-500 md:text-sm">{{ role }}</p>
    </div>
   </div>

   <div class="rounded-lg border border-slate-200 bg-white p-3 shadow-none md:dansom-card-soft md:p-4" aria-hidden="true">
    <div class="h-1.5 w-24 rounded-full bg-secondary/60"></div>
    <div class="mt-3 h-1.5 w-16 rounded-full bg-slate-300"></div>
    <div class="mt-3 h-1.5 w-20 rounded-full bg-slate-200"></div>
    </div>

   <p class="text-sm leading-relaxed text-slate-700">{{ about }}</p>

   <Accordion type="multiple" collapsible class="mt-auto">
    <AccordionItem value="item-1">
     <AccordionTrigger class="text-secondary hover:text-slate-900">Read full bio</AccordionTrigger>
     <AccordionContent>
      <div class="flex flex-col gap-3 text-sm leading-relaxed text-slate-600" v-html="aboutBig"></div>
     </AccordionContent>
    </AccordionItem>
   </Accordion>
  </div>
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
 name: {
  type: String,
  required: true,
  default: "Abdifatah Hamud",
 },
 role: {
  type: String,
  required: true,
  default: "Chief Executive Officer",
 },
 image: {
  type: String,
  default: "",
 },
 alt: {
  type: String,
  default: "",
 },
 about: {
  type: String,
  required: true,
  default:
   "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
 },
 aboutBig: {
  type: String,
  required: true,
  default:
   "<p>Abdifatah Hamud is the CEO of the company. He is responsible for the overall success of the business. He is responsible for making top-level managerial decisions, creating a company-wide strategy, and ensuring that the company's goals are met. He is also responsible for making sure that the company is profitable</p>",
 },
})
</script>
