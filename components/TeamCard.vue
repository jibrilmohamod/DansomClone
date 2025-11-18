<template>
 <article
  class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-tertiary/40 bg-gradient-to-b from-white via-tertiary/20 to-white shadow-xl shadow-slate-200/70"
 >
  <div class="relative h-44 overflow-hidden">
   <NuxtImg
    v-if="image"
    provider="cloudinary"
    loading="lazy"
    format="webp"
    :src="image"
    :alt="alt || name"
    class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
   />
   <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
   <span
    class="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary"
   >
    {{ role }}
   </span>
  </div>

  <div class="flex flex-1 flex-col gap-4 p-6">
   <div class="flex items-start justify-between gap-3">
    <div>
     <h3 class="text-xl font-semibold text-quinary">{{ name }}</h3>
     <p class="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">Leadership Team</p>
    </div>
    <div class="h-12 w-12 rounded-2xl bg-primary/10 ring-1 ring-primary/20" aria-hidden="true">
     <div class="h-full w-full rounded-2xl bg-gradient-to-br from-primary/50 via-secondary/40 to-quaternary/50 opacity-40 transition duration-500 group-hover:opacity-70"></div>
    </div>
   </div>

   <p class="text-sm leading-relaxed text-slate-700">{{ about }}</p>

   <Accordion type="multiple" collapsible class="mt-auto">
    <AccordionItem value="item-1">
     <AccordionTrigger class="text-primary hover:text-quinary">Read full bio</AccordionTrigger>
     <AccordionContent>
      <div class="flex flex-col gap-3 text-sm leading-relaxed text-slate-700" v-html="aboutBig"></div>
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

<style></style>
