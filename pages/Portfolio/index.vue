<template>
 <div class="min-h-screen text-slate-900">
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
    title="Our Portfolio"
    subtitle="Explore how Dansom delivers transparency, accountability, and evidence-backed recommendations across the Horn of Africa."
   />

   <div class="rounded-none border-0 bg-transparent p-0 shadow-none md:dansom-card md:p-6">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
     <div class="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-4">
      <input
       type="text"
       v-model="searchTerm"
       placeholder="Search projects"
       class="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm placeholder:text-slate-500 focus:border-primary focus:outline-none md:w-1/2 md:rounded-xl md:px-4 md:py-3"
      />
      <div class="flex items-center gap-2 text-sm font-semibold text-primary md:gap-3">
       <p class="text-xs text-slate-700 md:text-sm">Filter by:</p>
       <select
        v-model="classification"
        class="rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-2 text-xs focus:border-primary focus:outline-none md:rounded-xl md:px-3 md:text-sm"
       >
        <option value="All">All</option>
        <option value="Third Party Monitoring & Evaluation">Third Party Monitoring & Evaluation</option>
        <option value="Political Economy Analysis & Security Advisory">Political Economy Analysis & Security Advisory</option>
        <option value="Formative Research & Policy Analysis">Formative Research & Policy Analysis</option>
        <option value="Independent Evaluation">Independent Evaluation</option>
        <option value="Operational & Logistics Management">Operational & Logistics Management</option>
        <option value="Organizational Capacity Building & Human Resource Management">Organizational Capacity Building</option>
       </select>
      </div>
     </div>
    </div>

    <div class="mt-5 grid gap-3 md:mt-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
     <ProjectCard
      v-for="project in filteredProjects"
      :key="project.title"
      :title="project.title"
      :icon="project.icon"
      :slug="getProjectPath(project)"
     />
    </div>

    <div class="mt-4 flex justify-center md:mt-6" v-if="displayedProjects.length < projects.length">
     <Button
      @click="loadMore()"
      class="my-2 w-44 bg-primary py-2.5 font-Zilla text-base text-white transition-all hover:bg-quaternary hover:duration-200 hover:ease-linear md:my-3 md:w-48 md:py-3 md:text-lg"
     >
      Load More
     </Button>
    </div>
   </div>
  </section>
 </div>
</template>

<script lang="ts" setup>
 import Button from "~/components/ui/button/Button.vue"
 import { getProjectPath, portfolioProjects } from "~/data/portfolioProjects"

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

 const projects = ref(portfolioProjects)

 const searchTerm = ref("")
 const classification = ref("All")
 const displayedProjects = ref(projects.value.slice(0, 9))

 const filteredProjects = computed(() => {
  const search = searchTerm.value.toLowerCase()
  return displayedProjects.value.filter((project) => {
   const matchesSearch = project.title.toLowerCase().includes(search)
   const matchesClassification =
    classification.value === "All" ||
    project.classification === classification.value ||
    project.classification2 === classification.value

   return matchesSearch && matchesClassification
  })
 })

 const loadMore = () => {
  displayedProjects.value = projects.value.slice(
   0,
   displayedProjects.value.length + 6
  )
 }

</script>
