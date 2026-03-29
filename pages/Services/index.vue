<template>
 <div class="relative overflow-hidden text-slate-900">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(80,174,211,0.16),transparent_30%),radial-gradient(circle_at_84%_16%,rgba(191,217,98,0.16),transparent_30%)]"></div>
  <div class="relative">
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

  <section class="container mx-auto px-6 py-16 space-y-12">
   <div class="dansom-card relative overflow-hidden p-8 backdrop-blur">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(80,174,211,0.2),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(191,217,98,0.24),transparent_30%)]"></div>
    <div class="grid items-center gap-8 md:grid-cols-2">
     <div class="relative space-y-4">
      <p class="text-sm uppercase tracking-[0.25em] text-secondary">What we do</p>
      <h2 class="font-display text-3xl font-semibold">Specialised services for complex operating environments</h2>
      <p class="font-body text-lg text-slate-700 leading-relaxed">
       We combine contextual understanding with rigorous methodology to deliver evidence, advisory, and monitoring services that keep programmes responsive and accountable.
      </p>
      <div class="flex flex-wrap gap-2">
       <span class="dansom-chip">Somalia</span>
       <span class="dansom-chip">Kenya</span>
       <span class="dansom-chip">Field-verified</span>
      </div>
     </div>
     <div class="relative grid gap-4 sm:grid-cols-2">
      <div class="dansom-card-soft p-4">
       <p class="text-lg font-semibold text-slate-900">Secure access</p>
       <p class="text-sm text-slate-600">Field teams positioned across Somalia and Kenya.</p>
      </div>
      <div class="dansom-card-soft p-4">
       <p class="text-lg font-semibold text-slate-900">Decision-ready</p>
       <p class="text-sm text-slate-600">Clear deliverables aligned to partner objectives.</p>
      </div>
     </div>
    </div>
   </div>

   <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div
     v-for="service in services"
     :key="service.title"
     class="dansom-card group p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-secondary/40"
    >
     <div class="flex items-center gap-3">
      <span class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
       <Icon :name="service.icon" class="text-xl" />
      </span>
      <p class="text-xs uppercase tracking-[0.2em] text-slate-500">{{ service.category }}</p>
     </div>
     <h3 class="mt-3 text-xl font-semibold text-primary">{{ service.title }}</h3>
     <p class="mt-2 text-sm text-slate-600 leading-relaxed">{{ service.description }}</p>
     <NuxtLink
      :to="`/Services/${encodeURIComponent(service.title)}`"
      class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition group-hover:translate-x-1"
     >
      Explore
      <Icon name="mdi:arrow-right" />
     </NuxtLink>
    </div>
   </div>
  </section>
  </div>
 </div>
</template>

<script setup lang="ts">
 const services = [
  {
   title: "Political Economy Analysis",
   category: "Advisory",
   icon: "arcticons:adobe-analytics",
   description:
    "Deep-dive assessments that unpack incentives, power dynamics, and risks to guide strategy and programme design.",
  },
  {
   title: "Third Party Monitoring and Evaluation",
   category: "MEL",
   icon: "carbon:data-analytics",
   description:
    "Independent verification, real-time monitoring, and evaluations that ensure accountability to donors and communities.",
  },
  {
   title: "Socio-Political and Economic Development",
   category: "Research",
   icon: "mdi:account-group",
   description:
    "Research and advisory services addressing governance, economic growth, and community resilience in fragile contexts.",
  },
  {
   title: "Security and Access Advisory",
   category: "Advisory",
   icon: "mdi:security",
   description:
    "Risk assessments, access strategies, and operational support for secure delivery in hard-to-reach areas.",
  },
  {
   title: "Research and Knowledge Management",
   category: "Insights",
   icon: "mdi:file-document-edit",
   description:
    "Knowledge products, learning agendas, and evidence synthesis that drive adaptive programming.",
  },
  {
   title: "Monitoring and Performance Evaluation",
   category: "MEL",
   icon: "mdi:clipboard-list",
   description:
    "End-to-end MEL systems, performance tracking, and data quality assurance tailored to partner needs.",
  },
 ]
</script>
