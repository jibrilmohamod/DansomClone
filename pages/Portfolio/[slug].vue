<template>
 <div>
  <TheHeader :projTitle="project.title" :eyebrow="project.classification" :intro="projectIntro">
   <template #image><img src="/dansom-field-monitoring.jpg" alt="Researchers documenting evidence during a field monitoring visit" fetchpriority="high" /></template>
  </TheHeader>
  <main class="atlas-grid bg-ink py-24 md:py-36">
   <div class="atlas-shell">
    <NuxtLink to="/Portfolio" class="text-link"><Icon name="mdi:arrow-left" /> Project archive</NuxtLink>
    <div class="mt-16 grid gap-14 lg:grid-cols-12">
     <aside class="lg:col-span-3">
      <div class="sticky top-8 border-t border-line/55 pt-7">
       <img :src="`/${project.icon}`" :alt="`${project.title} project partner logo`" class="project-detail-logo max-h-24 max-w-full object-contain object-left" />
       <dl class="mt-10 grid gap-7 text-sm"><div><dt class="font-semibold">Location</dt><dd class="mt-2 text-mist/58">{{ project.Location }}</dd></div><div v-if="project.timeframes"><dt class="font-semibold">Timeframe</dt><dd class="mt-2 text-mist/58">{{ project.timeframes }}</dd></div></dl>
      </div>
     </aside>
     <article class="lg:col-span-8 lg:col-start-5">
      <p class="atlas-label">Assignment overview</p>
      <p class="atlas-display mt-6 text-[clamp(2.8rem,6vw,6rem)] leading-[0.94] text-mist/88">{{ project.description }}</p>
      <section v-if="project.classification2||project.description2" class="mt-24 border-t border-line/55 pt-10"><p class="atlas-label">Additional scope</p><h2 v-if="project.classification2" class="atlas-display mt-5 text-4xl md:text-6xl">{{ project.classification2 }}</h2><p v-if="project.description2" class="mt-7 max-w-3xl text-lg leading-relaxed text-mist/65">{{ project.description2 }}</p><p v-if="project.timeframes2" class="mt-5 text-sm text-mist/45">{{ project.timeframes2 }}</p></section>
      <div class="mt-20 flex flex-wrap gap-3 border-t border-line/55 pt-9"><NuxtLink to="/Contact" class="button-primary">Discuss a similar assignment <Icon name="mdi:arrow-right" /></NuxtLink><NuxtLink to="/Portfolio" class="button-ghost">More work</NuxtLink></div>
     </article>
    </div>
   </div>
  </main>
 </div>
</template>

<script setup lang="ts">
 import {projects} from "~/data/projects"; const route=useRoute(),slug=decodeURIComponent(String(route.params.slug||"")),projectIndex=Number(slug.split("-")[0]),projectTitle=slug.replace(/^\d+-/,""); const project=projects[projectIndex]||projects.find(item=>item.title===projectTitle); if(!project)throw createError({statusCode:404,statusMessage:"Project not found"}); const projectIntro=`${project.Location}${project.timeframes?`, ${project.timeframes}`:""}`
 useSeoMeta({title:()=>project.title,description:()=>`${project.classification} project by Dansom Research & Consultancy: ${project.description}`,ogTitle:()=>`${project.title} | Dansom Research & Consultancy`,ogDescription:()=>project.description,ogImage:()=>`/${project.icon}`,twitterCard:"summary_large_image"})
</script>

<style scoped>
:global(:root[data-theme="dark"]) .project-detail-logo{filter:drop-shadow(0 0 .75px rgba(255,255,255,.9));}
</style>
