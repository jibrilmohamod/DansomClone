<template>
 <div>
  <TheHeader :projTitle="service.fullTitle" :eyebrow="service.category" :intro="service.subtitle">
   <template #image><img :src="photography.programmeAnalysis.src" :alt="photography.programmeAnalysis.alt" fetchpriority="high" /></template>
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
     <p class="atlas-label">Service overview</p>
     <h2 class="atlas-display mt-6 max-w-[18ch] text-[clamp(2.2rem,3.4vw,3.4rem)] leading-[1]">What this service covers.</h2>
     <div class="service-narrative mt-12" v-html="service.about"></div>

     <section class="mt-20 grid gap-10 border-y border-line/55 py-10 md:grid-cols-2">
      <div>
       <p class="atlas-label">Areas of work</p>
       <ul class="service-list mt-7">
        <li v-for="item in service.areasOfWork" :key="item">{{ item }}</li>
       </ul>
      </div>
      <div class="md:border-l md:border-line/55 md:pl-10">
       <p class="atlas-label">Methods</p>
       <ul class="service-list mt-7">
        <li v-for="item in service.methods" :key="item">{{ item }}</li>
       </ul>
      </div>
     </section>

     <section v-if="relatedProjects.length" class="mt-20">
      <p class="atlas-label">Related assignments</p>
      <div class="mt-7 border-b border-line/55">
       <NuxtLink v-for="project in relatedProjects" :key="project.title" :to="project.path" class="group grid gap-4 border-t border-line/55 py-7 md:grid-cols-[1fr_auto] md:items-center">
        <div><h3 class="font-display text-xl font-semibold transition group-hover:text-primary md:text-2xl">{{ project.title }}</h3><p class="mt-2 text-sm text-mist/55">{{ project.Location }}<span v-if="project.timeframes">, {{ project.timeframes }}</span></p></div>
        <Icon name="mdi:arrow-top-right" class="text-xl text-mist/40 transition group-hover:text-primary" />
       </NuxtLink>
      </div>
     </section>

     <div class="mt-20 grid gap-6 border-y border-line/55 py-9 md:grid-cols-2">
      <NuxtLink to="/Portfolio" class="group"><p class="atlas-label">Project portfolio</p><p class="mt-3 font-display text-2xl font-semibold transition group-hover:text-primary">View our project work</p></NuxtLink>
      <NuxtLink to="/Services" class="group md:border-l md:border-line/55 md:pl-7"><p class="atlas-label">Other services</p><p class="mt-3 font-display text-2xl font-semibold transition group-hover:text-primary">Explore all services</p></NuxtLink>
     </div>
    </article>
   </div>
  </main>
 </div>
</template>

<style>
.service-narrative>p { max-width: 64ch; font-size:clamp(1rem,1.25vw,1.125rem); font-weight:400; line-height:1.75; letter-spacing:-.005em; color:rgb(var(--mist)/.76); }
.service-narrative>p+ p { margin-top:clamp(2.5rem,5vw,4.5rem); margin-left:auto; }
.service-narrative ul { margin-top:3rem; display:grid; gap:1rem; border-top:1px solid rgb(var(--line)/.55); padding-top:2rem; }
.service-narrative li { border-bottom:1px solid rgb(var(--line)/.45); padding-bottom:1rem; color:rgb(var(--mist)/.65); }
.service-list { display:grid; gap:0; border-top:1px solid rgb(var(--line)/.55); }
.service-list li { border-bottom:1px solid rgb(var(--line)/.45); padding:1rem 0; color:rgb(var(--mist)/.7); }
</style>

<script setup lang="ts">
import { photography } from "~/data/photography"
 import { services } from "~/data/services"
 import { projects } from "~/data/projects"
 const route=useRoute(); const requestedService=decodeURIComponent(String(route.params.slug||"")); const service=services.find(item=>item.slug===requestedService)
 if(!service) throw createError({statusCode:404,statusMessage:"Service not found"})
 const relatedProjects=projects.map((project,index)=>({...project,path:`/Portfolio/${index}-${encodeURIComponent(project.title)}`})).filter(project=>project.classification===service.slug||project.classification===service.fullTitle||project.classification2===service.slug||project.classification2===service.fullTitle).slice(0,3)
 useSeoMeta({ title:()=>service.fullTitle, description:()=>service.subtitle, ogTitle:()=>`${service.fullTitle} | Dansom Research & Consultancy`, ogDescription:()=>service.subtitle, ogImage:photography.programmeAnalysis.src, twitterCard:"summary_large_image" })
</script>
