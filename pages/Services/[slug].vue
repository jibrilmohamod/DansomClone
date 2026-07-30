<template>
 <div>
  <TheHeader :projTitle="service.fullTitle" :eyebrow="service.category" :intro="service.subtitle">
   <template #image><img src="/dansom-programme-analysis.jpg" alt="Analysts reviewing field evidence and programme findings" fetchpriority="high" /></template>
  </TheHeader>

  <main class="atlas-grid bg-ink py-24 md:py-36">
   <div class="atlas-shell grid gap-14 lg:grid-cols-12">
    <aside class="lg:col-span-3">
     <div class="sticky top-8 border-t border-line/55 pt-6">
      <Icon :name="service.icon" class="text-5xl text-primary" />
      <dl class="mt-10 grid gap-7 text-sm">
       <div><dt class="font-semibold text-mist">Delivery model</dt><dd class="mt-2 leading-relaxed text-mist/58">{{ service.deliveryModel }}</dd></div>
       <div><dt class="font-semibold text-mist">Coverage</dt><dd class="mt-2 text-mist/58">Somalia and Kenya</dd></div>
      </dl>
      <NuxtLink to="/Contact" class="button-primary mt-9">Discuss this service <Icon name="mdi:arrow-right" /></NuxtLink>
     </div>
    </aside>

    <article class="lg:col-span-8 lg:col-start-5">
     <p class="atlas-label">How we work</p>
     <h2 class="atlas-display mt-6 text-[clamp(2.75rem,4.4vw,4.5rem)] leading-[0.96]">Context first. Evidence throughout.</h2>
     <div class="service-narrative mt-16" v-html="service.about"></div>
     <div class="mt-20 grid gap-6 border-y border-line/55 py-9 md:grid-cols-2">
      <NuxtLink to="/Portfolio" class="group"><p class="atlas-label">Related evidence</p><p class="mt-3 font-display text-3xl font-semibold transition group-hover:text-primary">View our project work</p></NuxtLink>
      <NuxtLink to="/Services" class="group md:border-l md:border-line/55 md:pl-7"><p class="atlas-label">Other capabilities</p><p class="mt-3 font-display text-3xl font-semibold transition group-hover:text-primary">Explore all services</p></NuxtLink>
     </div>
    </article>
   </div>
  </main>
 </div>
</template>

<style>
.service-narrative>p { max-width: 56ch; font-size:clamp(1.125rem,1.65vw,1.55rem); font-weight:400; line-height:1.65; letter-spacing:-.015em; color:rgb(var(--mist)/.78); }
.service-narrative>p+ p { margin-top:clamp(2.5rem,5vw,4.5rem); margin-left:auto; }
.service-narrative ul { margin-top:3rem; display:grid; gap:1rem; border-top:1px solid rgb(var(--line)/.55); padding-top:2rem; }
.service-narrative li { border-bottom:1px solid rgb(var(--line)/.45); padding-bottom:1rem; color:rgb(var(--mist)/.65); }
</style>

<script setup lang="ts">
 import { services } from "~/data/services"
 const route=useRoute(); const requestedService=decodeURIComponent(String(route.params.slug||"")); const service=services.find(item=>item.slug===requestedService)
 if(!service) throw createError({statusCode:404,statusMessage:"Service not found"})
 useSeoMeta({ title:()=>service.fullTitle, description:()=>service.subtitle, ogTitle:()=>`${service.fullTitle} | Dansom Research & Consultancy`, ogDescription:()=>service.subtitle, ogImage:"/dansom-programme-analysis.jpg", twitterCard:"summary_large_image" })
</script>
