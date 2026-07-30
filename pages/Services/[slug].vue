<template>
 <div>
  <TheHeader :projTitle="service.fullTitle" :eyebrow="service.category" :intro="service.subtitle">
   <template #image>
    <img
     loading="eager"
     fetchpriority="high"
     width="1586"
     height="992"
     alt="Analysts reviewing field evidence and programme findings"
     src="/dansom-programme-analysis.jpg"
     class="h-full w-full object-cover"
    />
   </template>
  </TheHeader>

  <main class="py-20 md:py-32">
   <div class="shell grid gap-10 lg:grid-cols-12">
    <aside class="lg:col-span-4">
     <div class="border-y border-line/55 lg:sticky lg:top-28">
      <div class="flex min-h-44 items-center justify-start border-b border-line/55 py-8">
       <Icon :name="service.icon" class="h-24 w-24 text-primary" />
      </div>
      <dl class="grid gap-6 py-7 text-sm">
       <div>
        <dt class="font-semibold text-mist">Delivery model</dt>
        <dd class="mt-2 leading-relaxed text-mist/[0.62]">{{ service.deliveryModel }}</dd>
       </div>
       <div>
        <dt class="font-semibold text-mist">Coverage</dt>
        <dd class="mt-2 text-mist/[0.62]">Somalia and Kenya</dd>
       </div>
      </dl>
     </div>
    </aside>

    <article class="lg:col-span-7 lg:col-start-6">
     <p class="text-sm font-semibold text-primary">How we deliver</p>
     <h2 class="display-title mt-4 text-4xl leading-tight md:text-6xl">Context first. Evidence throughout.</h2>
     <div class="service-body mt-10 space-y-6 text-base leading-8 text-mist/[0.65]" v-html="service.about"></div>
     <div class="mt-12 flex flex-wrap gap-3 border-t border-line/55 pt-8">
      <NuxtLink to="/Contact" class="button-primary">Discuss this service <Icon name="mdi:arrow-right" /></NuxtLink>
      <NuxtLink to="/Portfolio" class="button-ghost">View relevant work</NuxtLink>
     </div>
    </article>
   </div>
  </main>
 </div>
</template>

<style>
.service-body p + p {
 margin-top: 1.5rem;
}
.service-body ul {
 margin-top: 1.5rem;
 display: grid;
 gap: 0.75rem;
 padding-left: 1.25rem;
 list-style: disc;
}
</style>

<script lang="ts" setup>
 import { services } from "~/data/services"

 const route = useRoute()
 const requestedService = decodeURIComponent(String(route.params.slug || ""))
 const service = services.find((item) => item.slug === requestedService)

 if (!service) {
  throw createError({ statusCode: 404, statusMessage: "Service not found" })
 }

 useSeoMeta({
  title: () => service.fullTitle,
  description: () => service.subtitle,
  ogTitle: () => `${service.fullTitle} | Dansom Research & Consultancy`,
  ogDescription: () => service.subtitle,
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })
</script>

