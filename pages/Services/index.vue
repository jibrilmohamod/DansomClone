<template>
 <div class="bg-tertiary min-h-screen text-quinary">
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
   <div class="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200 ring-1 ring-tertiary">
    <div class="grid gap-8 md:grid-cols-2 items-center">
     <div class="space-y-4">
      <p class="text-sm uppercase tracking-[0.25em] text-primary">What we do</p>
      <h2 class="text-3xl font-bold font-Playfair">Specialised services for complex operating environments</h2>
      <p class="text-lg text-slate-700 leading-relaxed font-Montserrat">
       We combine contextual understanding with rigorous methodology to deliver evidence, advisory, and monitoring services that keep programmes responsive and accountable.
      </p>
     </div>
     <div class="grid gap-4 sm:grid-cols-2">
      <div class="rounded-2xl bg-tertiary p-4 ring-1 ring-tertiary">
       <p class="text-lg font-semibold text-primary">Secure access</p>
       <p class="text-sm text-slate-700">Field teams positioned across Somalia and Kenya.</p>
      </div>
      <div class="rounded-2xl bg-tertiary p-4 ring-1 ring-tertiary">
       <p class="text-lg font-semibold text-primary">Decision-ready</p>
       <p class="text-sm text-slate-700">Clear deliverables aligned to partner objectives.</p>
      </div>
     </div>
    </div>
   </div>

   <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div
     v-for="service in services"
     :key="service.title"
     class="rounded-2xl bg-white p-6 shadow-md shadow-slate-200 ring-1 ring-tertiary"
    >
     <div class="flex items-center gap-3">
      <span class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
       <Icon :name="service.icon" class="text-xl" />
      </span>
      <p class="text-xs uppercase tracking-[0.2em] text-primary">{{ service.category }}</p>
     </div>
     <h3 class="mt-3 text-xl font-semibold">{{ service.title }}</h3>
     <p class="mt-2 text-sm text-slate-700 leading-relaxed">{{ service.description }}</p>
     <NuxtLink
      :to="`/Services/${encodeURIComponent(service.title)}`"
      class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
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
    "Independent verification and evaluation services that ensure transparency, accountability, and adaptive learning.",
  },
  {
   title: "Formative Research and Policy Advisory Services",
   category: "Research",
   icon: "mdi:chart-bubble",
   description:
    "Baseline assessments, mixed-method studies, and policy insights that ground interventions in evidence.",
  },
  {
   title: "Security & Access Advisory",
   category: "Advisory",
   icon: "mdi:shield-check",
   description:
    "Risk analysis, access planning, and ongoing advisory to operate safely in volatile environments.",
  },
  {
   title: "Organizational Capacity Building",
   category: "Growth",
   icon: "mdi:account-group",
   description:
    "Strengthening institutions with tailored training, change management, and process optimization support.",
  },
  {
   title: "Operational & Logistics Management",
   category: "Delivery",
   icon: "mdi:truck-fast-outline",
   description:
    "End-to-end operational coordination, logistics, and rapid mobilization for field activities and events.",
  },
 ]
</script>
