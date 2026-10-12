<template>
 <div>
  <TheHeader title="Our Portfolio">
   <template #image>
    <img
     loading="eager"
     fetchpriority="high"
     width="1588"
     height="991"
     alt="Research and operations staff planning a field deployment"
     src="/dansom-field-operations.jpg"
     class="h-full w-full object-cover"
    />
   </template>
  </TheHeader>

  <section class="py-16 md:py-24">
   <div class="shell">
    <div class="max-w-3xl">
     <h2 class="display-title text-4xl leading-tight md:text-6xl">Projects and partnerships.</h2>
     <p class="body-copy mt-5 text-base md:text-lg">
      Monitoring, evaluation, research, logistics, and advisory work delivered across the Horn of Africa.
     </p>
    </div>

    <div class="surface-soft mt-10 grid gap-5 p-5 md:grid-cols-2 md:p-6">
     <div class="grid gap-2">
      <label for="project-search" class="text-sm font-semibold text-mist">Search projects</label>
      <input
       id="project-search"
       v-model="searchTerm"
       type="search"
       placeholder="Project or partner name"
       class="w-full rounded-xl border border-mist/[0.15] bg-ink px-4 py-3 text-base text-mist placeholder:text-mist/[0.38] focus:border-primary"
      />
     </div>
     <div class="grid gap-2">
      <label for="project-filter" class="text-sm font-semibold text-mist">Filter by service</label>
      <select
       id="project-filter"
       v-model="classification"
       class="w-full rounded-xl border border-mist/[0.15] bg-ink px-4 py-3 text-base text-mist focus:border-primary"
      >
       <option value="All">All services</option>
       <option v-for="option in classificationOptions" :key="option" :value="option">{{ option }}</option>
      </select>
     </div>
    </div>

    <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
     <ProjectCard
      v-for="project in filteredProjects"
      :key="project.title"
      :title="project.title"
      :icon="project.icon"
      :slug="getProjectPath(project)"
      :classification="project.classification"
      :location="project.Location"
      :timeframe="project.timeframes"
     />
    </div>

    <div v-if="filteredProjectPool.length === 0" class="surface mt-8 p-8 text-center">
     <h3 class="font-display text-2xl font-semibold text-mist">No matching projects</h3>
     <p class="mt-2 text-mist/[0.62]">Try another search term or service.</p>
    </div>

    <div v-if="filteredProjects.length < filteredProjectPool.length" class="mt-8 flex justify-center">
     <button type="button" class="button-primary" @click="loadMore">Load more</button>
    </div>
   </div>
  </section>
 </div>
</template>

<script lang="ts" setup>
 import { projects as projectsData } from "~/data/projects"

 useSeoMeta({
  title: "Portfolio",
  description:
   "Explore Dansom Research & Consultancy's portfolio of monitoring, evaluation, research, logistics, and advisory projects for partners across Somalia and the Horn of Africa.",
  ogTitle: "Portfolio | Dansom Research & Consultancy",
  ogDescription:
   "Browse Dansom's project work with development, humanitarian, donor, and institutional partners across Somalia and the Horn of Africa.",
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })

 const projects = ref(projectsData)


 const searchTerm = ref("")
 const classification = ref("All")
 const visibleCount = ref(9)

 const classificationOptions = computed(() =>
  [...new Set(projects.value.flatMap((project) =>
   [project.classification, project.classification2].filter(Boolean),
  ))].sort(),
 )

 const filteredProjectPool = computed(() => {
  const search = searchTerm.value.trim().toLowerCase()
  return projects.value.filter((project) => {
   const matchesSearch =
    !search ||
    project.title.toLowerCase().includes(search) ||
    project.description.toLowerCase().includes(search) ||
    project.Ngo?.toLowerCase().includes(search)
   const matchesClassification =
    classification.value === "All" ||
    project.classification === classification.value ||
    project.classification2 === classification.value

   return matchesSearch && matchesClassification
  })
 })

 const filteredProjects = computed(() =>
  filteredProjectPool.value.slice(0, visibleCount.value),
 )

 watch([searchTerm, classification], () => {
  visibleCount.value = 9
 })

 const loadMore = () => {
  visibleCount.value += 6
 }

 const getProjectPath = (project: { title: string; description: string; icon: string }) => {
  const projectIndex = projects.value.findIndex(
   (item) =>
    item.title === project.title &&
    item.description === project.description &&
    item.icon === project.icon,
  )

  return `/Portfolio/${projectIndex}-${encodeURIComponent(project.title)}`
 }
</script>
