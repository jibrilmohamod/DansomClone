<template>
 <div class="bg-slate-50 text-quinary">
  <TheHero />

  <section class="container px-6 py-16 md:py-20">
   <div class="grid items-center gap-12 md:grid-cols-12">
    <div class="md:col-span-7 space-y-6">
     <p class="text-sm font-semibold uppercase tracking-[0.2em] text-quaternary">Who we are</p>
     <h2 class="text-3xl font-bold leading-tight sm:text-4xl font-Playfair">Regional expertise backed by on-the-ground access</h2>
     <p class="text-lg leading-relaxed text-slate-700 font-Montserrat">
      Since 2009, DANSOM has partnered with humanitarian and development actors to generate actionable insights across Somalia and Kenya. Our network of thematic experts and field researchers brings clarity to complex contexts so programs can move forward with confidence.
     </p>
     <div class="grid gap-4 sm:grid-cols-2">
      <div class="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-md shadow-slate-200/70 ring-1 ring-slate-100">
       <span class="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon name="mdi:account-group" class="text-xl" />
       </span>
       <div>
        <p class="text-lg font-semibold">Local teams, trusted access</p>
        <p class="text-sm text-slate-600">Dedicated research teams in hard-to-reach areas across Somalia and Kenya.</p>
       </div>
      </div>
      <div class="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-md shadow-slate-200/70 ring-1 ring-slate-100">
       <span class="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
        <Icon name="mdi:lightbulb-on-outline" class="text-xl" />
       </span>
       <div>
        <p class="text-lg font-semibold">Analysis that drives action</p>
        <p class="text-sm text-slate-600">Political economy analysis, TPME, and advisory services tailored to your objectives.</p>
       </div>
      </div>
     </div>
    </div>
    <div class="md:col-span-5">
     <div class="relative overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-200">
      <NuxtImg
       provider="cloudinary"
       format="webp"
       loading="lazy"
       sizes="sm:100vw md:50vw lg:800px"
       src="v1713946564/expertise-1000x757_1_ha2eyx.jpg"
       class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-quinary/70 via-quinary/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
       <p class="text-sm uppercase tracking-[0.2em] text-white/80">Our promise</p>
       <h3 class="text-2xl font-semibold">Evidence you can use, partners you can trust</h3>
       <p class="mt-2 text-sm text-white/80">End-to-end support from study design to decision-ready insights.</p>
      </div>
     </div>
    </div>
   </div>
  </section>

  <section class="bg-white py-16 md:py-20">
   <div class="container px-6 space-y-12">
    <div class="flex flex-col gap-4 text-center">
     <p class="text-sm font-semibold uppercase tracking-[0.2em] text-quaternary">Our expertise</p>
     <h2 class="text-3xl font-bold sm:text-4xl font-Playfair">Services designed for complex environments</h2>
     <p class="text-lg text-slate-700 max-w-3xl mx-auto font-Montserrat">
      We blend rigorous methodologies with contextual sensitivity to deliver monitoring, advisory, and research services that strengthen decision-making for partners across the Horn of Africa.
     </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
     <div
      v-for="service in services"
      :key="service.title"
      class="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-white p-6 shadow-md shadow-slate-200 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
     >
      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
       <Icon :name="service.icon" class="text-2xl" />
      </div>
      <h3 class="mt-4 text-xl font-semibold text-quinary">{{ service.title }}</h3>
      <p class="mt-2 text-sm text-slate-600 leading-relaxed">{{ service.subtitle }}</p>
      <NuxtLink
       class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-quaternary transition group-hover:translate-x-1"
       :to="`/Services/${service.slug}`"
      >
       Explore service
       <Icon name="ic:round-arrow-outward" class="text-lg" />
      </NuxtLink>
     </div>
    </div>
   </div>
  </section>

  <section class="py-16 md:py-20">
   <div class="container px-6">
    <div class="grid gap-10 rounded-[28px] bg-gradient-to-r from-primary/15 via-white to-secondary/10 p-10 shadow-lg shadow-slate-200">
     <div class="max-w-3xl space-y-4">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-quaternary">How we work</p>
      <h2 class="text-3xl font-bold sm:text-4xl font-Playfair">Field-tested methods for reliable results</h2>
      <p class="text-lg text-slate-700 font-Montserrat">
       Our teams pair local presence with proven tools to deliver credible evidence. From rapid mobilization to structured analysis, every engagement is designed to translate findings into practical recommendations.
      </p>
     </div>

     <div class="grid gap-6 md:grid-cols-3">
      <div
       v-for="step in approach"
       :key="step.title"
       class="rounded-2xl bg-white p-6 shadow-md shadow-slate-200 ring-1 ring-slate-100"
      >
       <div class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-quaternary/10 text-quaternary">
         <Icon :name="step.icon" class="text-xl" />
        </span>
        <p class="text-sm font-semibold uppercase tracking-[0.15em] text-quinary">{{ step.tag }}</p>
       </div>
       <h3 class="mt-4 text-xl font-semibold">{{ step.title }}</h3>
       <p class="mt-2 text-sm text-slate-600 leading-relaxed">{{ step.copy }}</p>
      </div>
     </div>
    </div>
   </div>
  </section>

  <section class="bg-white py-16 md:py-20">
   <div class="container px-6 grid items-center gap-10 lg:grid-cols-2">
    <div class="space-y-6">
     <p class="text-sm font-semibold uppercase tracking-[0.2em] text-quaternary">Partners &amp; portfolio</p>
     <h2 class="text-3xl font-bold sm:text-4xl font-Playfair">Trusted by leading regional and global institutions</h2>
     <p class="text-lg text-slate-700 font-Montserrat">
      We support international consultancies, donor agencies, and NGOs with bespoke strategies, monitoring frameworks, and research that respond to shifting contexts. Explore our recent collaborations and the outcomes we delivered.
     </p>
     <div class="flex flex-wrap gap-3">
      <NuxtLink
       to="/Portfolio"
       class="inline-flex items-center gap-2 rounded-full bg-quaternary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5"
      >
       View portfolio
       <Icon name="ic:round-arrow-outward" class="text-lg" />
      </NuxtLink>
      <NuxtLink
       to="/Contact"
       class="inline-flex items-center gap-2 rounded-full border border-quaternary px-5 py-3 text-sm font-semibold text-quaternary transition hover:-translate-y-0.5 hover:bg-quaternary hover:text-white"
      >
       Start a conversation
       <Icon name="mdi:message-text-outline" class="text-lg" />
      </NuxtLink>
     </div>
    </div>
    <div class="rounded-[28px] bg-slate-50 p-6 shadow-inner shadow-slate-200 ring-1 ring-slate-100">
     <LogoCarousel />
    </div>
   </div>
  </section>

  <section class="py-16 md:py-20">
   <div class="container px-6">
    <div class="flex flex-col items-center gap-4 text-center">
     <p class="text-sm font-semibold uppercase tracking-[0.2em] text-quaternary">Let&apos;s collaborate</p>
     <h2 class="text-3xl font-bold sm:text-4xl font-Playfair">Ready to build actionable evidence together?</h2>
     <p class="text-lg text-slate-700 max-w-3xl font-Montserrat">
      Tell us about your objectives and we&apos;ll assemble the right team to support you—from rapid assessments to long-term monitoring and evaluation.
     </p>
     <div class="flex flex-wrap items-center justify-center gap-3">
      <NuxtLink
       to="/Contact"
       class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-quinary shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
      >
       Contact Dansom
       <Icon name="mdi:phone" class="text-lg" />
      </NuxtLink>
      <NuxtLink
       to="/About"
       class="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-quinary"
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
    "Deep-dive assessments that unpack power dynamics, incentives, and risks to inform programming decisions.",
   slug: "Political%20Economy%20Analysis",
  },
  {
   icon: "carbon:data-analytics",
   title: "Third Party Monitoring & Evaluation",
   subtitle:
    "Independent verification, real-time monitoring, and evaluations that keep projects accountable to communities and donors.",
   slug: "Third%20Party%20Monitoring%20and%20Evaluation",
  },
  {
   icon: "mdi:account-voice",
   title: "Community Engagement & Inclusion",
   subtitle:
    "Strategies that ensure meaningful participation of community members, women, and minority groups across program cycles.",
   slug: "Community%20Engagement%20Strategies",
  },
  {
   icon: "ph:leaf-thin",
   title: "Environmental Impact & Resilience",
   subtitle:
    "Environmental impact assessments and climate resilience insights tailored to humanitarian and development contexts.",
   slug: "Environmental%20Impact%20Assessment%20(EIA)%20%26%20Monitoring",
  },
  {
   icon: "pepicons-pencil:people",
   title: "Organizational Capacity & HR",
   subtitle:
    "Capacity building, leadership coaching, and HR systems that strengthen local institutions and delivery partners.",
   slug: "Organizational%20Capacity%20Building%20%26%20HR",
  },
  {
   icon: "ph:gear-six-thin",
   title: "Operational & Logistics Advisory",
   subtitle:
    "Operational planning, security advisory, and logistics management to keep field activities safe and efficient.",
   slug: "Operational%20and%20Logistics%20Management",
  },
 ]

 const approach = [
  {
   title: "Local insight meets rigorous design",
   copy:
    "We combine local researchers, subject matter experts, and robust methodologies to tailor each engagement to the context.",
   icon: "mdi:map-search-outline",
   tag: "Discover",
  },
  {
   title: "Secure field deployment",
   copy:
    "Dedicated access teams operate in challenging environments to collect reliable qualitative and quantitative data.",
   icon: "mdi:shield-check-outline",
   tag: "Access",
  },
  {
   title: "Actionable reporting",
   copy:
    "Clear, decision-ready deliverables with recommendations aligned to partner objectives and community realities.",
   icon: "mdi:chart-box-outline",
   tag: "Deliver",
  },
 ]

 useHead({
  title: "Dansom Consultancy & Research",
  meta: [
   {
    name: "description",
    content:
     "DANSOM is a research and consultancy firm that partners with humanitarian and development organizations across the Horn of Africa to deliver actionable insights.",
   },
   {
    name: "keywords",
    content:
     "DANSOM, research, consultancy, third party monitoring, political economy analysis, Somalia, Kenya, Horn of Africa, humanitarian, development",
   },
  ],
 })
</script>
