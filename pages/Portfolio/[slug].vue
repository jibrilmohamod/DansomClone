<template>
 <div class="min-h-screen text-slate-900">
  <TheHeader :projTitle="project.title">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="Project hero"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="w-full h-full object-cover object-center"
    />
   </template>
  </TheHeader>
  <div class="container m-auto px-4 py-6 md:px-6 md:py-14">
   <div class="grid gap-4 rounded-none border-0 bg-transparent p-0 shadow-none ring-0 md:grid-cols-3 md:gap-8 md:rounded-3xl md:bg-white md:p-8 md:shadow-xl md:shadow-slate-200 md:ring-1 md:ring-slate-200">
    <div class="flex flex-col items-center gap-4 md:col-span-1">
     <Image2Card :image="project.icon" />
     <div class="w-full rounded-lg border border-slate-200 bg-slate-50 p-3.5 ring-0 md:rounded-2xl md:p-4 md:ring-1 md:ring-slate-200">
      <div class="flex items-center gap-2 text-primary">
       <Icon name="mdi:location" class="text-lg md:text-xl" />
       <p class="text-sm md:text-base">{{ project.Location }}</p>
      </div>
      <div class="mt-2 flex items-center gap-2 text-primary">
       <Icon name="mdi:calendar" class="text-lg md:text-xl" />
       <p class="text-sm md:text-base">{{ project.timeframes }}</p>
      </div>
     </div>
    </div>
    <div class="space-y-3 font-Roboto md:col-span-2 md:space-y-6">
     <div class="space-y-2 md:space-y-3">
      <h3 class="pb-1 text-xl font-DM md:pb-2 md:text-3xl">Classification</h3>
      <p class="text-sm text-slate-700 md:text-lg">{{ project.classification }}</p>
     </div>
     <div class="space-y-2 md:space-y-3">
      <h3 class="pb-1 text-xl font-DM md:pb-2 md:text-3xl">Description</h3>
      <p class="text-sm leading-relaxed text-slate-700 md:text-lg">{{ project.description }}</p>
     </div>
     <div v-if="project?.classification2" class="space-y-2 md:space-y-3">
      <h3 class="pb-1 text-xl font-DM md:pb-2 md:text-3xl">Classification</h3>
      <p class="text-sm text-slate-700 md:text-lg">{{ project.classification2 }}</p>
     </div>
     <div v-if="project?.description2" class="space-y-2 md:space-y-3">
      <h3 class="pb-1 text-xl font-DM md:pb-2 md:text-3xl">Description</h3>
      <p class="text-sm leading-relaxed text-slate-700 md:text-lg">{{ project?.description2 }}</p>
      <div class="flex flex-wrap gap-3 text-primary md:gap-4">
       <div class="flex items-center gap-2">
        <Icon name="mdi:location" class="text-lg md:text-xl" />
        <p class="text-sm md:text-base">{{ project.Location }}</p>
       </div>
       <div class="flex items-center gap-2">
        <Icon name="mdi:calendar" class="text-lg md:text-xl" />
        <p class="text-sm md:text-base">{{ project?.timeframes2 }}</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script lang="ts" setup>
 import { portfolioProjects } from "~/data/portfolioProjects"

 const projects = ref(portfolioProjects)

 const route = useRoute()
 const slug = computed(() => String(route.params.slug))
 const decodedSlug = computed(() => decodeURIComponent(slug.value))
 const projectIndex = computed(() => Number(decodedSlug.value.split("-")[0]))
 const projectTitle = computed(() =>
  decodedSlug.value.replace(/^\d+-/, ""),
 )
 const project = computed(
  () =>
   projects.value[projectIndex.value] ||
   projects.value.find((item) => item.title === projectTitle.value) ||
   projects.value[0],
 )

 useSeoMeta({
  title: () => project.value.title,
  description: () =>
   `${project.value.classification} project by Dansom Research & Consultancy: ${project.value.description}`,
  ogTitle: () => `${project.value.title} | Dansom Portfolio`,
  ogDescription: () => project.value.description,
  ogImage: () => `/${project.value.icon}`,
  twitterCard: "summary_large_image",
 })
</script>
