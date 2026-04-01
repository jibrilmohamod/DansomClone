<template>
 <article class="dansom-card group relative flex h-full flex-col overflow-hidden">
  <div class="flex flex-1 flex-col gap-4 p-6 text-slate-900">
   <div class="flex items-start justify-between gap-3">
    <div>
     <h3 class="text-xl font-semibold">{{ name }}</h3>
     <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Leadership Team</p>
    </div>
    <span class="dansom-chip !text-[11px] !tracking-[0.2em] !text-secondary">
     {{ role }}
    </span>
   </div>

   <div class="dansom-card-soft p-4" aria-hidden="true">
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
