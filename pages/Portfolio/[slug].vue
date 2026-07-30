<template>
 <div>
  <TheHeader :projTitle="project.title">
   <template #image>
    <img
     loading="eager"
     fetchpriority="high"
     width="1586"
     height="992"
     alt="Researchers documenting evidence during a field monitoring visit"
     src="/dansom-field-monitoring.jpg"
     class="h-full w-full object-cover"
    />
   </template>
  </TheHeader>

  <main class="py-16 md:py-24">
   <div class="shell">
    <NuxtLink to="/Portfolio" class="text-link">
     <Icon name="mdi:arrow-left" />
     Back to portfolio
    </NuxtLink>

    <div class="mt-10 grid gap-10 lg:grid-cols-12">
     <aside class="lg:col-span-4">
      <div class="lg:sticky lg:top-28">
       <Image2Card :image="project.icon" :alt="project.title + ' project partner logo'" />
       <dl class="surface-soft mt-5 grid gap-6 p-6 text-sm">
        <div>
         <dt class="font-semibold text-mist">Location</dt>
         <dd class="mt-2 text-mist/[0.55]">{{ project.Location }}</dd>
        </div>
        <div v-if="project.timeframes">
         <dt class="font-semibold text-mist">Timeframe</dt>
         <dd class="mt-2 text-mist/[0.55]">{{ project.timeframes }}</dd>
        </div>
       </dl>
      </div>
     </aside>

     <article class="lg:col-span-7 lg:col-start-6">
      <p class="text-sm font-semibold text-primary">{{ project.classification }}</p>
      <h2 class="display-title mt-4 text-4xl leading-tight md:text-5xl">Project overview</h2>
      <p class="mt-6 text-base leading-8 text-mist/[0.65] md:text-lg">{{ project.description }}</p>

      <section v-if="project.classification2 || project.description2" class="mt-10 border-t border-mist/10 pt-10">
       <h3 class="display-title text-3xl">Additional scope</h3>
       <p v-if="project.classification2" class="mt-5 font-semibold text-primary">{{ project.classification2 }}</p>
       <p v-if="project.description2" class="mt-4 text-base leading-8 text-mist/[0.65]">{{ project.description2 }}</p>
       <p v-if="project.timeframes2" class="mt-4 text-sm text-mist/[0.45]">{{ project.timeframes2 }}</p>
      </section>

      <NuxtLink to="/Contact" class="button-primary mt-10">Contact <Icon name="mdi:arrow-right" /></NuxtLink>
     </article>
    </div>
   </div>
  </main>
 </div>
</template>

<script lang="ts" setup>
 import { projects } from "~/data/projects"

 const route = useRoute()
 const slug = decodeURIComponent(String(route.params.slug || ""))
 const projectIndex = Number(slug.split("-")[0])
 const projectTitle = slug.replace(/^\d+-/, "")
 const project =
  projects[projectIndex] ||
  projects.find((item) => item.title === projectTitle)

 if (!project) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" })
 }

 useSeoMeta({
  title: () => project.title,
  description: () =>
   `${project.classification} project by Dansom Research & Consultancy: ${project.description}`,
  ogTitle: () => `${project.title} | Dansom Research & Consultancy`,
  ogDescription: () => project.description,
  ogImage: () => `/${project.icon}`,
  twitterCard: "summary_large_image",
 })
</script>
