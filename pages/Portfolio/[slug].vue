<template>
 <div>
  <TheHeader :projTitle="project.title" :eyebrow="project.classification" :intro="projectIntro">
   <template #image><img src="/dansom-field-monitoring.jpg" alt="Researchers documenting evidence during a field monitoring visit" fetchpriority="high" /></template>
  </TheHeader>
  <main class="atlas-grid bg-ink py-24 md:py-36">
   <div class="atlas-shell">
    <NuxtLink to="/Portfolio" class="text-link"><Icon name="mdi:arrow-left" /> All projects</NuxtLink>
    <div class="mt-16 grid gap-14 lg:grid-cols-12">
     <aside class="lg:col-span-3">
      <div class="sticky top-8 border-t border-line/55 pt-7">
       <BrandMark :src="`/${project.icon}`" :alt="`${project.title} project partner logo`" context="project" loading="eager" />
       <dl class="mt-10 grid gap-7 text-sm">
        <div v-if="project.Ngo"><dt class="font-semibold">Partner</dt><dd class="mt-2 leading-relaxed text-mist/58">{{ project.Ngo }}</dd></div>
        <div><dt class="font-semibold">Location</dt><dd class="mt-2 text-mist/58">{{ project.Location }}</dd></div>
        <div v-if="project.timeframes"><dt class="font-semibold">Timeframe</dt><dd class="mt-2 text-mist/58">{{ project.timeframes }}</dd></div>
       </dl>
      </div>
     </aside>
     <article class="lg:col-span-8 lg:col-start-5">
      <p class="atlas-label">Assignment overview</p>
      <p class="mt-6 max-w-[68ch] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.75] text-mist/78">{{ project.description }}</p>

      <section class="mt-16 border-y border-line/55 py-9">
       <p class="atlas-label">Services involved</p>
       <div class="mt-6 flex flex-wrap gap-3">
        <NuxtLink v-for="serviceName in serviceNames" :key="serviceName" :to="servicePath(serviceName)" class="rounded-full border border-line/60 px-4 py-2 text-sm font-semibold text-mist/72 transition hover:border-primary hover:text-primary">{{ serviceName }}</NuxtLink>
       </div>
      </section>

      <section v-if="project.classification2||project.description2" class="mt-16 border-t border-line/55 pt-10"><p class="atlas-label">Additional scope</p><h2 v-if="project.classification2" class="atlas-display mt-5 max-w-[22ch] text-[clamp(2rem,3.2vw,3.15rem)] leading-[1.02]">{{ project.classification2 }}</h2><p v-if="project.description2" class="mt-7 max-w-[68ch] text-base leading-[1.75] text-mist/65 md:text-lg">{{ project.description2 }}</p><p v-if="project.timeframes2" class="mt-5 text-sm text-mist/45">{{ project.timeframes2 }}</p></section>

      <section v-if="relatedProjects.length" class="mt-20">
       <p class="atlas-label">Related assignments</p>
       <div class="mt-7 border-b border-line/55">
        <NuxtLink v-for="related in relatedProjects" :key="related.title" :to="related.path" class="group grid gap-4 border-t border-line/55 py-7 md:grid-cols-[1fr_auto] md:items-center">
         <div><h2 class="font-display text-xl font-semibold transition group-hover:text-primary md:text-2xl">{{ related.title }}</h2><p class="mt-2 text-sm text-mist/55">{{ related.Location }}<span v-if="related.timeframes">, {{ related.timeframes }}</span></p></div>
         <Icon name="mdi:arrow-top-right" class="text-xl text-mist/40 transition group-hover:text-primary" />
        </NuxtLink>
       </div>
      </section>
      <div class="mt-20 flex flex-wrap gap-3 border-t border-line/55 pt-9"><NuxtLink to="/Contact" class="button-primary">Discuss a similar assignment <Icon name="mdi:arrow-right" /></NuxtLink><NuxtLink to="/Portfolio" class="button-ghost">More work</NuxtLink></div>
     </article>
    </div>
   </div>
  </main>
 </div>
</template>

<script setup lang="ts">
 import {projects} from "~/data/projects"
 import {services} from "~/data/services"
 const route=useRoute(),slug=decodeURIComponent(String(route.params.slug||"")),projectIndex=Number(slug.split("-")[0]),projectTitle=slug.replace(/^\d+-/,""); const project=projects[projectIndex]||projects.find(item=>item.title===projectTitle); if(!project)throw createError({statusCode:404,statusMessage:"Project not found"}); const projectIntro=`${project.Location}${project.timeframes?`, ${project.timeframes}`:""}`
 const serviceNames=[project.classification,project.classification2].filter((value,index,array):value is string=>Boolean(value)&&array.indexOf(value)===index)
 const servicePath=(serviceName:string)=>{const service=services.find(item=>item.slug===serviceName||item.fullTitle===serviceName);return service?`/Services/${encodeURIComponent(service.slug)}`:"/Services"}
 const relatedProjects=projects.map((item,index)=>({...item,path:`/Portfolio/${index}-${encodeURIComponent(item.title)}`})).filter(item=>item.title!==project.title&&(serviceNames.includes(item.classification)||Boolean(item.classification2&&serviceNames.includes(item.classification2)))).slice(0,3)
 useSeoMeta({title:()=>project.title,description:()=>`${project.classification} project by Dansom Research & Consultancy: ${project.description}`,ogTitle:()=>`${project.title} | Dansom Research & Consultancy`,ogDescription:()=>project.description,ogImage:()=>`/${project.icon}`,twitterCard:"summary_large_image"})
</script>
