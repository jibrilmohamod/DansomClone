<template>
 <div class="relative w-full rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 ring-1 ring-tertiary">
  <div class="font-bold text-xl pb-1 font-Zilla text-quinary">
   {{ name }}
  </div>
  <p class="text-primary text-sm font-Lora">{{ role }}</p>
  <p class="text-gray-600 text-sm pt-3 font-normal leading-relaxed">
   {{ about }}
  </p>
  <Accordion type="multiple" collapsible class="mt-4">
   <AccordionItem value="item-1">
    <AccordionTrigger>Read More</AccordionTrigger>
    <AccordionContent>
     <div
      class="font-Zilla flex flex-col gap-3 text-slate-700 leading-relaxed"
      v-html="aboutBig"
     ></div>
    </AccordionContent>
   </AccordionItem>
  </Accordion>
 </div>
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

<style></style>
