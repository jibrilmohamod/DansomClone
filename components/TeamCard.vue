<template>
 <article class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow backdrop-blur">
  <div class="relative h-48 overflow-hidden">
   <NuxtImg
    v-if="image"
    provider="cloudinary"
    loading="lazy"
    format="webp"
    :src="image"
    :alt="alt || name"
    class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
   />
   <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
   <span class="absolute right-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
    {{ role }}
   </span>
  </div>

  <div class="flex flex-1 flex-col gap-4 p-6 text-white">
   <div class="flex items-start justify-between gap-3">
    <div>
     <h3 class="text-xl font-semibold">{{ name }}</h3>
     <p class="text-sm font-medium uppercase tracking-[0.2em] text-white/60">Leadership Team</p>
    </div>
    <div class="h-12 w-12 rounded-2xl border border-white/15 bg-white/5 ring-1 ring-white/10" aria-hidden="true">
    <div class="h-full w-full rounded-2xl bg-[conic-gradient(at_50%_50%,#7cf8ff,#9c7bff,#7cf8ff)] opacity-30 transition duration-500 group-hover:opacity-70"></div>
    </div>
   </div>

   <p class="text-sm leading-relaxed text-white/75">{{ about }}</p>

   <Accordion type="multiple" collapsible class="mt-auto">
    <AccordionItem value="item-1">
     <AccordionTrigger class="text-secondary hover:text-white">Read full bio</AccordionTrigger>
     <AccordionContent>
      <div class="flex flex-col gap-3 text-sm leading-relaxed text-white/70" v-html="aboutBig"></div>
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
