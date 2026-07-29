<template>
 <div class="min-h-[100dvh] text-slate-900">
  <TheHeader title="Our Portfolio">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="Portfolio banner"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="w-full h-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <section class="container m-auto space-y-6 px-4 py-10 md:space-y-10 md:px-6 md:py-16">
   <OurExpertise
    title="Projects and partnerships"
    subtitle="Explore monitoring, evaluation, research, logistics, and advisory work delivered across the Horn of Africa."
   />

   <div class="rounded-none border-0 bg-transparent p-0 shadow-none md:dansom-card md:p-6">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
     <div class="grid w-full gap-4 md:grid-cols-[1fr_1fr]">
      <div class="grid gap-2">
       <label for="project-search" class="text-sm font-semibold text-slate-800">Search projects</label>
       <input
        id="project-search"
        v-model="searchTerm"
        type="search"
        placeholder="Project or partner name"
        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:border-primary focus:outline-none"
       />
      </div>
      <div class="grid gap-2">
       <label for="project-filter" class="text-sm font-semibold text-slate-800">Filter by service</label>
       <select
        id="project-filter"
        v-model="classification"
        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-primary focus:outline-none"
       >
        <option value="All">All services</option>
        <option v-for="option in classificationOptions" :key="option" :value="option">{{ option }}</option>
       </select>
      </div>
     </div>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-2 md:gap-6">
     <ProjectCard
      v-for="project in filteredProjects"
      :key="project.title"
      :title="project.title"
      :icon="project.icon"
      :slug="getProjectPath(project)"
     />
    </div>

    <p v-if="filteredProjectPool.length === 0" class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center text-slate-600">
     No projects match your search. Try another term or service.
    </p>

    <div v-if="filteredProjects.length < filteredProjectPool.length" class="mt-6 flex justify-center">
     <button
      type="button"
      class="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 active:translate-y-px"
      @click="loadMore"
     >
      Load more
     </button>
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
