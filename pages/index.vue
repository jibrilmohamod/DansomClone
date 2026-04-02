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

  <section class="relative bg-slate-50/80 py-10 md:py-20">
   <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(148,163,184,0.14),transparent_32%),radial-gradient(circle_at_90%_15%,rgba(182,138,53,0.12),transparent_30%),linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]"></div>
   <div class="container relative space-y-6 px-4 md:space-y-8 md:px-6">
    <div class="grid items-start gap-5 md:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
     <div class="space-y-4 rounded-none border-0 bg-transparent p-0 shadow-none backdrop-blur-none md:dansom-card md:space-y-6 md:p-8 md:shadow-glow md:backdrop-blur">
      <div class="space-y-3 md:space-y-4">
       <p class="text-xs font-semibold uppercase tracking-[0.24em] text-secondary md:text-sm md:tracking-[0.3em]">Recent work</p>
       <h2 class="font-display text-2xl font-semibold md:text-4xl">Trusted by leading regional and global institutions</h2>
       <p class="font-body text-sm text-slate-600 md:text-lg">
        We support international consultancies, donor agencies, and NGOs with bespoke strategies, monitoring frameworks, and research that respond to shifting contexts. Explore our recent collaborations and the outcomes we delivered.
       </p>
      </div>

      <div class="grid gap-2.5 sm:grid-cols-2 md:gap-4">
       <div
        v-for="signal in deliveryStats"
        :key="signal.title"
        class="relative overflow-hidden rounded-lg border border-slate-200/80 bg-white p-3 shadow-none md:dansom-card-soft md:p-4"
       >
        <span class="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/10 via-transparent to-quaternary/10 blur-xl"></span>
        <div class="relative flex items-center gap-3">
         <span class="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/20 text-secondary shadow-none md:h-11 md:w-11 md:shadow-[0_6px_30px_rgba(15,23,42,0.14)]">
          <Icon :name="signal.icon" class="text-lg md:text-xl" />
         </span>
         <div>
          <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 md:text-sm md:tracking-[0.15em]">{{ signal.title }}</p>
          <p class="text-sm text-slate-600">{{ signal.copy }}</p>
         </div>
        </div>
       </div>
      </div>

      <div class="flex flex-wrap gap-2 md:gap-3">
       <NuxtLink
        to="/Portfolio"
        class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:from-secondary hover:to-primary md:px-5 md:py-3"
       >
        View portfolio
        <Icon name="ic:round-arrow-outward" class="text-lg" />
       </NuxtLink>
       <NuxtLink
        to="/Contact"
        class="inline-flex items-center gap-2 rounded-full border border-primary/35 px-4 py-2.5 text-sm font-semibold text-primary transition hover:-translate-y-1 hover:border-primary/60 hover:bg-secondary/10 md:px-5 md:py-3"
       >
        Start a conversation
        <Icon name="mdi:message-text-outline" class="text-lg" />
       </NuxtLink>
      </div>
     </div>

     <div class="grid gap-3 md:grid-cols-2 md:gap-4">
      <article
       v-for="project in portfolioHighlights"
       :key="project.title"
       class="dansom-card group relative overflow-hidden p-4 shadow-none backdrop-blur md:p-6 md:shadow-[0_30px_60px_-45px_rgba(15,23,42,0.55)]"
      >
       <span class="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/10 via-transparent to-quaternary/15 opacity-70 blur-2xl"></span>
       <div class="relative flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        <span class="flex items-center gap-2 rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200 md:px-3">
         <Icon name="mdi:map-marker-outline" class="text-base text-secondary" />
         {{ project.location }}
        </span>
        <span class="rounded-full bg-secondary/15 px-3 py-1 text-secondary ring-1 ring-secondary/40">{{ project.partner }}</span>
       </div>
       <h3 class="relative mt-3 text-lg font-semibold text-slate-900 md:mt-4 md:text-xl">{{ project.title }}</h3>
       <p class="relative mt-1.5 text-sm leading-relaxed text-slate-600 md:mt-2">{{ project.summary }}</p>

       <div class="relative mt-4 flex flex-wrap gap-2">
        <span
         v-for="tag in project.tags"
         :key="tag"
         class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
        >
         {{ tag }}
        </span>
       </div>

       <div class="relative mt-4 flex items-center justify-between border-t border-slate-200 pt-3 text-sm text-slate-600 md:mt-5 md:pt-4">
        <div class="flex items-center gap-2">
         <span class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-secondary md:h-9 md:w-9">
          <Icon :name="project.icon" class="text-lg" />
         </span>
         <div>
          <p class="text-xs uppercase tracking-[0.16em] text-slate-500">Outcome</p>
          <p class="font-semibold">{{ project.metric }}</p>
         </div>
        </div>
        <NuxtLink
         to="/Portfolio"
         class="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition group-hover:-translate-y-1 md:px-3 md:py-2 md:text-xs md:tracking-[0.16em]"
        >
         Case study
         <Icon name="mdi:arrow-top-right" class="text-base" />
        </NuxtLink>
       </div>
      </article>
     </div>
    </div>

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
 const portfolioHighlights = [
  {
   title: "Stabilization monitoring for social services",
   summary: "Network of enumerators verifying education and health outputs in high-risk districts to inform adaptive delivery.",
   partner: "UN partners",
   location: "Somalia",
   metric: "340+ sites verified",
   tags: ["TPME", "Access", "Localization"],
   icon: "mdi:radar",
  },
  {
   title: "Cross-border political economy analysis",
   summary: "Mixed-method PEA unpacking mobility, trade, and governance dynamics along Somali-Kenyan corridors.",
   partner: "Global consultancy",
   location: "Somalia & Kenya",
   metric: "12 counties mapped",
   tags: ["PEA", "Advisory", "Economies"],
   icon: "mdi:earth",
  },
  {
   title: "Community engagement playbooks",
   summary: "Participatory design sprints with displaced communities to co-create inclusion toolkits for INGOs.",
   partner: "INGO consortium",
   location: "Kenya",
   metric: "6 co-created toolkits",
   tags: ["Engagement", "Design", "Inclusion"],
   icon: "mdi:hand-heart",
  },
  {
   title: "Security and access advisory",
   summary: "Risk mapping, vetting, and access strategies enabling safe deployments and data collection in fragile contexts.",
   partner: "Donor missions",
   location: "Horn of Africa",
   metric: "72h mobilization",
   tags: ["Security", "Access", "Advisory"],
   icon: "mdi:security",
  },
 ]

 const deliveryStats = [
  {
   title: "Rapid mobilization",
   copy: "Field teams active within 72 hours across Somalia and Kenya.",
   icon: "mdi:flash-outline",
  },
  {
   title: "Regional reach",
   copy: "340+ sites monitored with local enumerators and advisors.",
   icon: "mdi:earth",
  },
 ]

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
