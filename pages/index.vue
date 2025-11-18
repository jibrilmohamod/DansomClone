<template>
 <div class="text-white">
  <TheHero />

  <section class="container px-6 py-16 md:py-20">
   <div class="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
    <div class="space-y-6 rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
     <p class="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Who we are</p>
     <h2 class="font-display text-3xl font-semibold leading-tight sm:text-4xl">Regional expertise backed by on-the-ground access</h2>
     <p class="font-body text-lg leading-relaxed text-white/80">
      Since 2009, DANSOM has partnered with humanitarian and development actors to generate actionable insights across Somalia and Kenya. Our network of thematic experts and field researchers brings clarity to complex contexts so programs can move forward with confidence.
     </p>
     <div class="grid gap-4 sm:grid-cols-2">
      <div class="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/5">
       <span class="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
        <Icon name="mdi:account-group" class="text-xl" />
       </span>
       <div>
        <p class="font-semibold">Local teams, trusted access</p>
        <p class="text-sm text-white/70">Dedicated research teams in hard-to-reach areas across Somalia and Kenya.</p>
       </div>
      </div>
      <div class="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/5">
       <span class="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
        <Icon name="mdi:lightbulb-on-outline" class="text-xl" />
       </span>
       <div>
        <p class="font-semibold">Analysis that drives action</p>
        <p class="text-sm text-white/70">Political economy analysis, TPME, and advisory services tailored to your objectives.</p>
       </div>
      </div>
     </div>
    </div>

    <div class="relative">
     <div class="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-lg">
      <NuxtImg
       provider="cloudinary"
       format="webp"
       loading="lazy"
       sizes="sm:100vw md:50vw lg:800px"
       src="v1713946564/expertise-1000x757_1_ha2eyx.jpg"
       class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
       <p class="text-xs uppercase tracking-[0.3em] text-white/70">Our promise</p>
       <h3 class="text-2xl font-semibold">Evidence you can use, partners you can trust</h3>
       <p class="mt-2 text-sm text-white/80">End-to-end support from study design to decision-ready insights.</p>
      </div>
     </div>
    </div>
   </div>
  </section>

  <section class="relative py-16 md:py-20">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(215,176,101,0.12),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(140,115,87,0.12),transparent_28%),linear-gradient(0deg,rgba(255,255,255,0.03),transparent)]"></div>
   <div class="container relative px-6 space-y-12">
    <div class="flex flex-col gap-4 text-center">
     <p class="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Our expertise</p>
     <h2 class="font-display text-3xl font-semibold sm:text-4xl">Services designed for complex environments</h2>
     <p class="font-body text-lg text-white/80 max-w-3xl mx-auto">
      We blend rigorous methodologies with contextual sensitivity to deliver monitoring, advisory, and research services that strengthen decision-making for partners across the Horn of Africa.
     </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
     <div
      v-for="service in services"
      :key="service.title"
      class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-xl"
     >
      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
       <Icon :name="service.icon" class="text-2xl" />
      </div>
      <h3 class="mt-4 text-xl font-semibold text-white">{{ service.title }}</h3>
      <p class="mt-2 text-sm text-white/70 leading-relaxed">{{ service.subtitle }}</p>
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

  <section class="py-16 md:py-20">
   <div class="container px-6">
    <div class="grid gap-10 rounded-[28px] border border-white/10 bg-gradient-to-r from-primary/90 via-surface to-primary/90 p-10 shadow-2xl shadow-primary/30">
     <div class="max-w-3xl space-y-4">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">How we work</p>
      <h2 class="font-display text-3xl font-semibold sm:text-4xl">Field-tested methods for reliable results</h2>
      <p class="font-body text-lg text-white/80">
       Our teams pair local presence with proven tools to deliver credible evidence. From rapid mobilization to structured analysis, every engagement is designed to translate findings into practical recommendations.
      </p>
     </div>

     <div class="grid gap-6 md:grid-cols-3">
      <div
       v-for="step in approach"
       :key="step.title"
       class="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-lg shadow-black/20 ring-1 ring-white/10"
      >
       <div class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
         <Icon :name="step.icon" class="text-xl" />
        </span>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{{ step.tag }}</p>
       </div>
       <h3 class="mt-4 text-xl font-semibold text-white">{{ step.title }}</h3>
       <p class="mt-2 text-sm text-white/70 leading-relaxed">{{ step.copy }}</p>
      </div>
     </div>
    </div>
   </div>
  </section>

  <section class="py-16 md:py-20">
   <div class="container px-6 space-y-8 rounded-[28px] border border-white/10 bg-white/5 p-10 shadow-glow backdrop-blur-xl">
    <div class="flex flex-col gap-4 text-center">
     <p class="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Recent work</p>
     <h2 class="font-display text-3xl font-semibold sm:text-4xl">Trusted by leading regional and global institutions</h2>
     <p class="font-body text-lg text-white/80">
      We support international consultancies, donor agencies, and NGOs with bespoke strategies, monitoring frameworks, and research that respond to shifting contexts. Explore our recent collaborations and the outcomes we delivered.
     </p>
     <div class="flex flex-wrap gap-3 justify-center">
      <NuxtLink
       to="/Portfolio"
       class="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-surface shadow-glow transition hover:-translate-y-1"
      >
       View portfolio
       <Icon name="ic:round-arrow-outward" class="text-lg" />
      </NuxtLink>
      <NuxtLink
       to="/Contact"
       class="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
      >
       Start a conversation
       <Icon name="mdi:message-text-outline" class="text-lg" />
      </NuxtLink>
     </div>
    </div>
    <div class="rounded-[28px] border border-white/10 bg-primary/40 p-6 shadow-inner shadow-black/30">
     <LogoCarousel />
    </div>
   </div>
  </section>

  <section class="pb-16 md:pb-20">
   <div class="container px-6">
    <div class="flex flex-col items-center gap-4 rounded-[24px] border border-white/10 bg-gradient-to-r from-secondary/15 via-white/5 to-secondary/10 p-10 text-center shadow-glow backdrop-blur">
     <p class="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Let&apos;s collaborate</p>
     <h2 class="font-display text-3xl font-semibold sm:text-4xl">Ready to build actionable evidence together?</h2>
     <p class="font-body text-lg text-white/80 max-w-3xl">
      Tell us about your objectives and we&apos;ll assemble the right team to support you—from rapid assessments to long-term monitoring and evaluation.
     </p>
     <div class="flex flex-wrap items-center justify-center gap-3">
      <NuxtLink
       to="/Contact"
       class="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-surface shadow-glow transition hover:-translate-y-1"
      >
       Contact Dansom
       <Icon name="mdi:phone" class="text-lg" />
      </NuxtLink>
      <NuxtLink
       to="/About"
       class="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
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
