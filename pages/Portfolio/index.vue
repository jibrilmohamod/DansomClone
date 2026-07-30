<template>
 <div>
  <TheHeader title="Fieldwork" eyebrow="Selected experience" intro="Independent assignments and long-term partnerships across humanitarian, development, and public-sector programmes.">
   <template #image><img src="/dansom-field-operations.jpg" alt="Research and operations staff planning a field deployment" fetchpriority="high" /></template>
  </TheHeader>

  <section class="atlas-grid bg-ink py-20 md:py-28">
   <div class="atlas-shell">
    <RevealBlock class="grid gap-10 lg:grid-cols-12 lg:items-end"><div class="lg:col-span-8"><p class="atlas-label">Project archive</p><h2 class="atlas-display mt-6 max-w-[14ch] text-[clamp(3rem,5.8vw,5.75rem)] leading-[0.94]">Evidence tested in real programmes.</h2></div><p class="border-t border-line/55 pt-5 text-base leading-relaxed text-mist/62 lg:col-span-3 lg:col-start-10">Monitoring, evaluation, research, logistics, and advisory work delivered across the Horn of Africa.</p></RevealBlock>

    <div class="sticky top-0 z-30 -mx-4 mt-16 grid gap-4 border-y border-line/55 bg-ink/90 px-4 py-5 backdrop-blur-xl md:grid-cols-2 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
     <div><label for="project-search" class="atlas-label">Search</label><input id="project-search" v-model="searchTerm" type="search" placeholder="Project or partner" class="mt-2 w-full border-0 border-b border-line/60 bg-transparent px-0 py-3 text-lg text-mist placeholder:text-mist/35 focus:border-primary focus:ring-0" /></div>
     <div><label for="project-filter" class="atlas-label">Capability</label><select id="project-filter" v-model="classification" class="mt-2 w-full border-0 border-b border-line/60 bg-transparent px-0 py-3 text-lg text-mist focus:border-primary focus:ring-0"><option value="All">All services</option><option v-for="option in classificationOptions" :key="option" :value="option">{{ option }}</option></select></div>
    </div>

    <div class="mt-8">
     <ProjectCard v-for="(project,index) in filteredProjects" :key="project.title" :index="index" :title="project.title" :icon="'/'+project.icon" :slug="getProjectPath(project)" :classification="project.classification" :location="project.Location" :timeframe="project.timeframes" />
    </div>
    <div v-if="filteredProjectPool.length===0" class="border-y border-line/55 py-20 text-center"><h3 class="atlas-display text-4xl">No matching projects.</h3><p class="mt-3 text-mist/55">Try another project, partner, or capability.</p></div>
    <div v-if="filteredProjects.length<filteredProjectPool.length" class="mt-10 flex justify-center"><button class="button-primary" @click="visibleCount+=6">Load more</button></div>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
 import { projects as projectsData } from "~/data/projects"
 const projects=ref(projectsData),searchTerm=ref(""),classification=ref("All"),visibleCount=ref(9)
 const classificationOptions=computed(()=>[...new Set(projects.value.flatMap(p=>[p.classification,p.classification2].filter(Boolean) as string[]))].sort())
 const filteredProjectPool=computed(()=>{const search=searchTerm.value.trim().toLowerCase();return projects.value.filter(p=>(!search||p.title.toLowerCase().includes(search)||p.description.toLowerCase().includes(search)||p.Ngo?.toLowerCase().includes(search))&&(classification.value==="All"||p.classification===classification.value||p.classification2===classification.value))})
 const filteredProjects=computed(()=>filteredProjectPool.value.slice(0,visibleCount.value));watch([searchTerm,classification],()=>visibleCount.value=9)
 const getProjectPath=(project:{title:string;description:string;icon:string})=>{const i=projects.value.findIndex(item=>item.title===project.title&&item.description===project.description&&item.icon===project.icon);return `/Portfolio/${i}-${encodeURIComponent(project.title)}`}
 useSeoMeta({title:"Portfolio",description:"Explore Dansom Research & Consultancy's portfolio of monitoring, evaluation, research, logistics, and advisory projects for partners across Somalia and the Horn of Africa.",ogTitle:"Portfolio | Dansom Research & Consultancy",ogDescription:"Browse Dansom's project work with development, humanitarian, donor, and institutional partners across Somalia and the Horn of Africa.",ogImage:"/dansom-field-operations.jpg",twitterCard:"summary_large_image"})
</script>
