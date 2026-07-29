<template>
 <div>
  <TheHero />

  <section class="border-b border-mist/10 py-12 md:py-16">
   <div class="shell">
    <p class="mb-8 text-sm font-semibold text-mist/[0.45]">Selected partners</p>
    <LogoCarousel />
   </div>
  </section>

  <section id="home-intro" class="py-16 md:py-28">
   <div class="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
    <div class="reveal lg:col-span-5">
     <h2 class="display-title text-4xl leading-tight md:text-6xl">Context changes everything.</h2>
     <p class="body-copy mt-6 text-base md:text-lg">
      Since 2009, DANSOM has partnered with humanitarian and development actors to generate actionable insights across Somalia and Kenya. Our network of thematic experts and field researchers brings clarity to complex contexts so programs can move forward with confidence.
     </p>
     <NuxtLink to="/About" class="text-link mt-7">
      About Dansom
      <Icon name="mdi:arrow-right" />
     </NuxtLink>
    </div>

    <div class="lg:col-span-7 lg:pl-12" data-testid="home-intro-media">
     <div class="overflow-hidden rounded-2xl border border-mist/10 bg-panel shadow-lift">
      <div class="media-zoom overflow-hidden">
       <NuxtImg
        provider="cloudinary"
        format="webp"
        loading="lazy"
        sizes="sm:100vw md:70vw lg:760px"
        src="v1713946564/expertise-1000x757_1_ha2eyx.jpg"
        alt="Dansom field research and regional expertise"
        class="aspect-[16/10] w-full object-cover"
       />
      </div>
      <div class="grid border-t border-mist/10 sm:grid-cols-2" data-testid="home-intro-evidence">
       <div class="p-6 md:p-7">
        <p class="eyebrow">Regional access</p>
        <h3 class="mt-3 font-display text-xl font-semibold text-mist">Local teams, trusted access</h3>
        <p class="mt-2 text-sm leading-relaxed text-mist/[0.58]">Dedicated research teams in hard-to-reach areas across Somalia and Kenya.</p>
       </div>
       <div class="border-t border-mist/10 p-6 sm:border-l sm:border-t-0 md:p-7">
        <p class="eyebrow">Decision support</p>
        <h3 class="mt-3 font-display text-xl font-semibold text-mist">Analysis that drives action</h3>
        <p class="mt-2 text-sm leading-relaxed text-mist/[0.58]">Political economy analysis, TPME, and advisory tailored to your objectives.</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>

  <section class="border-y border-mist/10 bg-panel/[0.55] py-16 md:py-28">
   <div class="shell">
    <div class="reveal max-w-3xl">
     <h2 class="display-title text-4xl leading-tight md:text-6xl">Services for complex environments</h2>
     <p class="body-copy mt-5 text-base md:text-lg">
      Rigorous methods, contextual sensitivity, and evidence that strengthens decision-making across the Horn of Africa.
     </p>
    </div>

    <div class="mt-12 grid auto-rows-fr gap-5 md:grid-cols-12">
     <NuxtLink
      v-for="(service, index) in services"
      :key="service.title"
      :to="'/Services/' + service.slug"
      class="group surface relative flex min-h-64 flex-col overflow-hidden p-6 transition duration-500 hover:-translate-y-1 hover:border-primary/40 md:p-7"
      :class="index === 0 || index === 5 ? 'md:col-span-7' : index === 1 || index === 4 ? 'md:col-span-5' : 'md:col-span-6'"
     >
      <div class="flex items-start justify-between gap-5">
       <Icon :name="service.icon" class="text-3xl text-primary" />
       <Icon name="ic:round-arrow-outward" class="text-xl text-mist/30 transition group-hover:text-primary" />
      </div>
      <div class="mt-auto pt-12">
       <h3 class="font-display text-2xl font-semibold tracking-tight text-mist">{{ service.title }}</h3>
       <p class="mt-3 max-w-xl text-sm leading-relaxed text-mist/[0.55]">{{ service.subtitle }}</p>
      </div>
     </NuxtLink>
    </div>
   </div>
  </section>

  <section class="py-16 md:py-28">
   <div class="shell grid gap-12 lg:grid-cols-12 lg:items-start">
    <div class="lg:sticky lg:top-28 lg:col-span-5">
     <h2 class="display-title text-4xl leading-tight md:text-6xl">Field-tested methods. Reliable results.</h2>
     <p class="body-copy mt-5 text-base md:text-lg">
      Local presence and proven tools translate findings into practical recommendations.
     </p>
    </div>
    <div class="lg:col-span-6 lg:col-start-7">
     <article v-for="step in approach" :key="step.title" class="reveal border-b border-mist/10 py-8 first:pt-0">
      <Icon :name="step.icon" class="text-3xl text-primary" />
      <p class="mt-5 text-sm font-semibold text-primary">{{ step.tag }}</p>
      <h3 class="mt-2 font-display text-3xl font-semibold tracking-tight text-mist">{{ step.title }}</h3>
      <p class="mt-3 text-base leading-relaxed text-mist/60">{{ step.copy }}</p>
     </article>
    </div>
   </div>
  </section>

  <section class="pb-16 md:pb-28">
   <div class="shell">
    <div class="relative overflow-hidden rounded-2xl border border-mist/10">
     <NuxtImg
      provider="cloudinary"
      format="webp"
      loading="lazy"
      sizes="sm:100vw lg:1400px"
      src="v1713943514/Community_Mobilization_Bula_jiray-2_vzzaja.jpg"
      alt="Community engagement fieldwork in Somalia"
      class="absolute inset-0 h-full w-full object-cover"
     />
     <div class="absolute inset-0 bg-ink/80"></div>
     <div class="relative max-w-3xl p-7 md:p-14 lg:p-20">
      <h2 class="display-title text-4xl leading-tight md:text-6xl">Build actionable evidence with us.</h2>
      <p class="mt-5 max-w-2xl text-base leading-relaxed text-mist/[0.68] md:text-lg">
       Tell us about your objectives and we&apos;ll assemble the right team, from rapid assessments to long-term monitoring and evaluation.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
       <NuxtLink to="/Contact" class="button-primary">Contact <Icon name="mdi:arrow-right" /></NuxtLink>
       <NuxtLink to="/About" class="button-ghost">Meet the team <Icon name="mdi:account-group-outline" /></NuxtLink>
      </div>
     </div>
    </div>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
 useSeoMeta({
  title: "Home",
  description:
   "Dansom Research & Consultancy delivers monitoring, evaluation, research, political economy analysis, and advisory services across Somalia, Kenya, and the Horn of Africa.",
  ogTitle: "Dansom Research & Consultancy",
  ogDescription:
   "Evidence, partnership, and insight for development and humanitarian partners working across Somalia, Kenya, and the Horn of Africa.",
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })

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
   slug: "Community%20Engagement%20and%20Inclusion",
  },
  {
   icon: "ph:chart-line-up",
   title: "Economic Growth & Market Systems",
   subtitle:
    "Market analyses and growth strategies that align public, private, and community stakeholders.",
   slug: "Economic%20Growth%20and%20Market%20Systems",
  },
  {
   icon: "mdi:security",
   title: "Security & Access Advisory",
   subtitle:
    "Risk analysis, access strategies, and secure field operations enabling safe delivery in fragile contexts.",
   slug: "Security%20and%20Access%20Advisory",
  },
  {
   icon: "mdi:chart-bell-curve",
   title: "Program Design & Learning",
   subtitle:
    "Evidence-backed design support, MEL frameworks, and adaptive learning systems for complex programs.",
   slug: "Program%20Design%20and%20Learning",
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
