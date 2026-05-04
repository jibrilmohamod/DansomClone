<template>
 <div class="text-slate-900">
  <TheHero />

  <section id="home-intro" class="container px-4 py-10 md:px-6 md:py-20">
   <div class="grid items-center gap-6 md:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
    <div class="animate-fade-up space-y-4 rounded-none border-0 bg-transparent p-0 shadow-none backdrop-blur-none md:dansom-card md:space-y-6 md:p-8 md:backdrop-blur-xl">
     <p class="text-xs font-semibold uppercase tracking-[0.24em] text-secondary md:text-sm md:tracking-[0.3em]">Who we are</p>
     <h2 class="font-display text-2xl font-semibold leading-tight md:text-4xl">Regional expertise backed by on-the-ground access</h2>
     <p class="font-body text-sm leading-relaxed text-slate-600 md:text-lg">
      Since 2009, DANSOM has partnered with humanitarian and development actors to generate actionable insights across Somalia and Kenya. Our network of thematic experts and field researchers brings clarity to complex contexts so programs can move forward with confidence.
     </p>
     <div class="grid gap-3 sm:grid-cols-2 md:gap-4">
      <div class="flex items-start gap-3 rounded-lg border border-slate-200/80 bg-white/90 p-3 shadow-none transition md:dansom-card-soft md:p-4 md:hover:-translate-y-1">
       <span class="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-secondary/15 text-secondary md:mt-1 md:h-10 md:w-10">
        <Icon name="mdi:account-group" class="text-lg md:text-xl" />
       </span>
       <div>
        <p class="font-semibold">Local teams, trusted access</p>
        <p class="text-sm text-slate-500">Dedicated research teams in hard-to-reach areas across Somalia and Kenya.</p>
       </div>
      </div>
      <div class="flex items-start gap-3 rounded-lg border border-slate-200/80 bg-white/90 p-3 shadow-none transition md:dansom-card-soft md:p-4 md:hover:-translate-y-1">
       <span class="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-secondary/15 text-secondary md:mt-1 md:h-10 md:w-10">
        <Icon name="mdi:lightbulb-on-outline" class="text-lg md:text-xl" />
       </span>
       <div>
        <p class="font-semibold">Analysis that drives action</p>
        <p class="text-sm text-slate-500">Political economy analysis, TPME, and advisory services tailored to your objectives.</p>
       </div>
      </div>
     </div>
    </div>

    <div class="relative hidden md:block">
     <div class="dansom-card relative overflow-hidden">
      <NuxtImg
       provider="cloudinary"
       format="webp"
       loading="lazy"
       sizes="sm:100vw md:50vw lg:800px"
       src="v1713946564/expertise-1000x757_1_ha2eyx.jpg"
       class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
       <p class="text-xs uppercase tracking-[0.3em] text-white/70">Our promise</p>
       <h3 class="text-2xl font-semibold">Evidence you can use, partners you can trust</h3>
       <p class="mt-2 text-sm text-white/85">End-to-end support from study design to decision-ready insights.</p>
      </div>
     </div>
    </div>
   </div>
  </section>

  <section class="relative bg-slate-50/70 py-10 md:py-20">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(148,163,184,0.12),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(182,138,53,0.12),transparent_28%),linear-gradient(0deg,rgba(255,255,255,0.04),transparent)]"></div>
   <div class="container relative space-y-7 px-4 md:space-y-12 md:px-6">
    <div class="flex flex-col gap-3 text-center md:gap-4">
     <p class="text-xs font-semibold uppercase tracking-[0.24em] text-secondary md:text-sm md:tracking-[0.3em]">Our expertise</p>
     <h2 class="font-display text-2xl font-semibold md:text-4xl">Services designed for complex environments</h2>
     <p class="mx-auto max-w-3xl font-body text-sm text-slate-600 md:text-lg">
      We blend rigorous methodologies with contextual sensitivity to deliver monitoring, advisory, and research services that strengthen decision-making for partners across the Horn of Africa.
     </p>
    </div>

    <div class="grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
     <div
      v-for="service in services"
      :key="service.title"
      class="dansom-card group relative overflow-hidden p-4 shadow-none backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-secondary/50 md:p-6 md:shadow-glow md:hover:shadow-xl"
     >
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary md:h-12 md:w-12">
       <Icon :name="service.icon" class="text-xl md:text-2xl" />
      </div>
      <h3 class="mt-3 text-lg font-semibold text-slate-900 md:mt-4 md:text-xl">{{ service.title }}</h3>
      <p class="mt-1.5 text-sm leading-relaxed text-slate-500 md:mt-2">{{ service.subtitle }}</p>
      <NuxtLink
       class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition group-hover:translate-x-1"
       :to="`/Services/${service.slug}`"
      >
       Explore service
       <Icon name="ic:round-arrow-outward" class="text-lg" />
      </NuxtLink>
     </div>
    </div>
   </div>
  </section>

  <section class="py-10 md:py-20">
   <div class="container px-4 md:px-6">
    <div class="grid gap-6 rounded-none border-0 bg-transparent p-0 shadow-none md:dansom-card md:gap-10 md:p-10 md:shadow-2xl md:shadow-slate-200">
     <div class="max-w-3xl space-y-3 md:space-y-4">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-secondary md:text-sm md:tracking-[0.3em]">How we work</p>
      <h2 class="font-display text-2xl font-semibold md:text-4xl">Field-tested methods for reliable results</h2>
      <p class="font-body text-sm text-slate-600 md:text-lg">
       Our teams pair local presence with proven tools to deliver credible evidence. From rapid mobilization to structured analysis, every engagement is designed to translate findings into practical recommendations.
      </p>
     </div>

     <div class="grid gap-3 md:grid-cols-3 md:gap-6">
      <div
       v-for="step in approach"
       :key="step.title"
       class="rounded-lg border border-slate-200/80 bg-white/90 p-4 shadow-none transition md:dansom-card-soft md:p-6 md:shadow-lg md:shadow-black/10 md:hover:-translate-y-1"
      >
       <div class="flex items-center gap-3">
        <span class="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/15 text-secondary md:h-10 md:w-10">
         <Icon :name="step.icon" class="text-lg md:text-xl" />
        </span>
        <p class="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 md:text-xs md:tracking-[0.2em]">{{ step.tag }}</p>
       </div>
       <h3 class="mt-3 text-lg font-semibold text-slate-900 md:mt-4 md:text-xl">{{ step.title }}</h3>
       <p class="mt-1.5 text-sm leading-relaxed text-slate-500 md:mt-2">{{ step.copy }}</p>
      </div>
     </div>
    </div>
   </div>
  </section>

  <section class="pb-6 md:pb-10">
   <div class="container px-4 md:px-6">
    <div class="rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-none backdrop-blur md:dansom-card-soft md:p-3 md:shadow-inner md:shadow-slate-300/40">
     <div class="flex flex-col gap-3 text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Partners and collaborators</p>
      <LogoCarousel />
     </div>
    </div>
   </div>
  </section>

  <section class="pb-10 md:pb-20">
   <div class="container px-4 md:px-6">
    <div class="flex flex-col items-center gap-3 rounded-none border-0 bg-transparent p-0 text-center shadow-none backdrop-blur-none md:dansom-card md:gap-4 md:p-10 md:shadow-glow md:backdrop-blur">
     <p class="text-xs font-semibold uppercase tracking-[0.24em] text-secondary md:text-sm md:tracking-[0.3em]">Let&apos;s collaborate</p>
     <h2 class="font-display text-2xl font-semibold md:text-4xl">Ready to build actionable evidence together?</h2>
     <p class="max-w-3xl font-body text-sm text-slate-600 md:text-lg">
      Tell us about your objectives and we&apos;ll assemble the right team to support you—from rapid assessments to long-term monitoring and evaluation.
     </p>
     <div class="flex flex-wrap items-center justify-center gap-2 md:gap-3">
      <NuxtLink
       to="/Contact"
       class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:from-secondary hover:to-primary md:px-6 md:py-3"
      >
       Contact Dansom
       <Icon name="mdi:phone" class="text-lg" />
      </NuxtLink>
      <NuxtLink
       to="/About"
       class="inline-flex items-center gap-2 rounded-full border border-primary/35 px-5 py-2.5 text-sm font-semibold text-primary transition hover:-translate-y-1 hover:border-primary/60 hover:bg-secondary/10 md:px-6 md:py-3"
      >
       Meet the team
       <Icon name="mdi:account-circle-outline" class="text-lg" />
      </NuxtLink>
     </div>
    </div>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
 const services = [
  {
   icon: "arcticons:adobe-analytics",
   title: "Political Economy Analysis",
   subtitle:
    "Political Economy Analysis (PEA) in Somalia to inform programming and policy development.",
   slug: "Political%20Economy%20Analysis",
  },
  {
   icon: "carbon:data-analytics",
   title: "Third Party Monitoring and Evaluation",
   subtitle:
    "Third Party Monitoring and Evaluation (TPME) of humanitarian and development projects in Somalia.",
   slug: "Third%20Party%20Monitoring%20and%20Evaluation",
  },
  {
   icon: "carbon:data-analytics",
   title: "Formative Research and Policy Advisory Services",
   subtitle:
    "Formative Research and Policy Advisory Services to inform programming and policy development.",
   slug: "Formative%20Research%20and%20Policy%20Advisory%20Services",
  },
  {
   icon: "ph:leaf-thin",
   title: "Environmental Impact Assessment (EIA) & Monitoring",
   subtitle:
    "Environmental Impact Assessment (EIA) & Monitoring of humanitarian and development projects in Somalia.",
   slug: "Environmental%20Impact%20Assessment%20(EIA)%20%26%20Monitoring",
  },
  {
   icon: "pepicons-pencil:people",
   title: "Organizational Capacity Building & HR",
   subtitle:
    "Organizational Capacity Building & Human Resource Management for local and international organizations in Somalia.",
   slug: "Organizational%20Capacity%20Building%20%26%20HR",
  },
  {
   icon: "ph:gear-six-thin",
   title: "Operational and Logistics Management",
   subtitle:
    "Operational and Logistics Management for local and international organizations in Somalia.",
   slug: "Operational%20and%20Logistics%20Management",
  },
  {
   icon: "la:people-carry",
   title: "Community Engagement Strategies",
   subtitle:
    "Community Engagement Strategies for local and international organizations in Somalia.",
   slug: "Community%20Engagement%20Strategies",
  },
 ]

 const approach = [
  {
   icon: "mdi:flash-outline",
   tag: "Mobilize",
   title: "Local presence, rapid start",
   copy: "Embedded field teams and vetted networks unlock reliable access to communities and decision-makers.",
  },
  {
   icon: "mdi:chart-pie",
   tag: "Analyse",
   title: "Mixed-method rigor",
   copy: "Qualitative and quantitative tools paired with triangulation deliver defensible findings you can trust.",
  },
  {
   icon: "mdi:rocket-launch-outline",
   tag: "Apply",
   title: "Insight to action",
   copy: "Clear recommendations and partner workshops move findings into implementation and learning.",
  },
 ]
</script>
