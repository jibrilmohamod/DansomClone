<template>
 <div class="text-slate-900">
  <TheHeader title="Our Services">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="Services banner"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="w-full h-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <section class="container mx-auto space-y-6 px-4 py-8 md:px-6 md:space-y-12 md:py-16">
   <div class="relative overflow-hidden rounded-none border-0 bg-transparent p-0 shadow-none md:dansom-card md:p-8">
    <div class="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_12%_18%,rgba(80,174,211,0.2),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(191,217,98,0.24),transparent_30%)] md:block"></div>
    <div class="grid items-start gap-5 md:grid-cols-2 md:items-center md:gap-8">
     <div class="relative space-y-3 md:space-y-4">
      <p class="text-xs uppercase tracking-[0.22em] text-secondary md:text-sm md:tracking-[0.25em]">What we do</p>
      <h2 class="font-display text-xl font-semibold leading-tight md:text-3xl">Specialised services for complex operating environments</h2>
      <p class="font-body text-sm leading-relaxed text-slate-700 md:text-lg">
       We combine contextual understanding with rigorous methodology to deliver evidence, advisory, and monitoring services that keep programmes responsive and accountable.
      </p>
      <div class="flex flex-wrap gap-1.5 md:gap-2">
       <span class="dansom-chip">Somalia</span>
       <span class="dansom-chip">Kenya</span>
       <span class="dansom-chip">Field-verified</span>
      </div>
     </div>
     <div class="relative grid gap-3 sm:grid-cols-2 md:gap-4">
      <div class="rounded-xl bg-white/80 p-3 ring-1 ring-slate-200/70 backdrop-blur-sm md:dansom-card-soft md:p-4">
       <p class="text-base font-semibold text-slate-900 md:text-lg">Secure access</p>
       <p class="text-sm text-slate-600">Field teams positioned across Somalia and Kenya.</p>
      </div>
      <div class="rounded-xl bg-white/80 p-3 ring-1 ring-slate-200/70 backdrop-blur-sm md:dansom-card-soft md:p-4">
       <p class="text-base font-semibold text-slate-900 md:text-lg">Decision-ready</p>
       <p class="text-sm text-slate-600">Clear deliverables aligned to partner objectives.</p>
      </div>
     </div>
    </div>
   </div>

   <div class="grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
    <div
     v-for="service in services"
     :key="service.title"
     class="dansom-card group p-4 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-secondary/40 md:p-6"
    >
     <div class="flex items-center gap-3">
      <span class="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/15 text-secondary md:h-10 md:w-10">
       <Icon :name="service.icon" class="text-lg md:text-xl" />
      </span>
      <p class="text-[10px] uppercase tracking-[0.18em] text-slate-500 md:text-xs md:tracking-[0.2em]">{{ service.category }}</p>
     </div>
     <h3 class="mt-2.5 text-lg font-semibold text-primary md:mt-3 md:text-xl">{{ service.title }}</h3>
     <p class="mt-1.5 text-sm leading-relaxed text-slate-600 md:mt-2">{{ service.description }}</p>
     <NuxtLink
      :to="`/Services/${encodeURIComponent(service.title)}`"
      class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition group-hover:translate-x-1 md:mt-4"
     >
      Explore
      <Icon name="mdi:arrow-right" />
     </NuxtLink>
    </div>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
 useSeoMeta({
  title: "Services",
  description:
   "Explore Dansom service areas including political economy analysis, third party monitoring and evaluation, policy advisory, EIA, HR capacity building, logistics, and community engagement.",
 })

 const services = [
 {
   title: "Political Economy Analysis",
   category: "Advisory",
   icon: "arcticons:adobe-analytics",
   description:
    "Political economy analysis in Somalia to inform programming and policy development.",
  },
  {
   title: "Third Party Monitoring and Evaluation",
   category: "MEL",
   icon: "carbon:data-analytics",
   description:
    "Third party monitoring and evaluation of humanitarian and development projects in Somalia.",
  },
  {
   title: "Formative Research and Policy Advisory Services",
   category: "Research",
   icon: "carbon:data-analytics",
   description:
    "Formative Research and Policy Advisory Services to inform programming and policy development.",
  },
  {
   title: "Environmental Impact Assessment (EIA) & Monitoring",
   category: "Advisory",
   icon: "ph:leaf-thin",
   description:
    "Environmental impact assessment and monitoring of humanitarian and development projects in Somalia.",
  },
  {
   title: "Organizational Capacity Building & HR",
   category: "Insights",
   icon: "pepicons-pencil:people",
   description:
    "Organizational Capacity Building & Human Resource Management for local and international organizations in Somalia.",
  },
  {
   title: "Operational and Logistics Management",
   category: "MEL",
   icon: "ph:gear-six-thin",
   description:
    "Operational and Logistics Management for local and international organizations in Somalia.",
  },
  {
   title: "Community Engagement Strategies",
   category: "MEL",
   icon: "la:people-carry",
   description:
    "Community Engagement Strategies for local and international organizations in Somalia.",
  },
 ]
</script>
