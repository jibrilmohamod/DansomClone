<template>
 <div class="min-h-[100dvh] text-slate-900">
  <TheHeader :projTitle="project.title">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="Dansom project fieldwork in the Horn of Africa"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="h-full w-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <main class="container px-4 py-10 md:px-6 md:py-16">
   <NuxtLink to="/Portfolio" class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
    <Icon name="mdi:arrow-left" />
    Back to portfolio
   </NuxtLink>

   <div class="mt-6 grid gap-8 lg:grid-cols-[0.75fr_1.75fr] lg:gap-12">
    <aside class="space-y-4">
     <Image2Card :image="project.icon" :alt="`${project.title} project partner logo`" />
     <dl class="rounded-2xl border border-slate-200 bg-white p-5 text-sm">
      <div>
       <dt class="font-semibold text-slate-900">Location</dt>
       <dd class="mt-1 text-slate-600">{{ project.Location }}</dd>
      </div>
      <div v-if="project.timeframes" class="mt-4 border-t border-slate-200 pt-4">
       <dt class="font-semibold text-slate-900">Timeframe</dt>
       <dd class="mt-1 text-slate-600">{{ project.timeframes }}</dd>
      </div>
     </dl>
    </aside>

    <article>
     <p class="text-sm font-semibold text-primary">{{ project.classification }}</p>
     <h2 class="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">Project overview</h2>
     <p class="mt-5 text-base leading-8 text-slate-600 md:text-lg">{{ project.description }}</p>

     <section v-if="project.classification2 || project.description2" class="mt-8 border-t border-slate-200 pt-8">
      <h3 class="font-display text-2xl font-semibold text-slate-900">Additional scope</h3>
      <p v-if="project.classification2" class="mt-3 text-sm font-semibold text-primary">{{ project.classification2 }}</p>
      <p v-if="project.description2" class="mt-3 text-base leading-8 text-slate-600">{{ project.description2 }}</p>
      <p v-if="project.timeframes2" class="mt-3 text-sm text-slate-500">{{ project.timeframes2 }}</p>
     </section>

     <NuxtLink
      to="/Contact"
      class="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 active:translate-y-px"
     >
      Contact
      <Icon name="mdi:arrow-right" />
     </NuxtLink>
    </article>
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
