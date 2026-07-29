<template>
 <div>
  <TheHeader title="Careers">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="eager"
     format="webp"
     alt="Careers with Dansom"
     sizes="sm:100vw md:50vw lg:760px"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="h-full w-full object-cover"
    />
   </template>
  </TheHeader>

  <section class="py-16 md:py-28">
   <div class="shell grid gap-12 lg:grid-cols-12">
    <div class="reveal lg:col-span-7">
     <h2 class="display-title text-4xl leading-tight md:text-6xl">Careers at Dansom.</h2>
     <p class="body-copy mt-6 text-base md:text-lg">
      Dansom is an Equal Opportunity Employer committed to inclusive teams and equitable workplaces. We welcome diverse experiences and perspectives that strengthen our work across the Horn of Africa.
     </p>
     <p class="body-copy mt-4">
      We look for people who thrive in complex environments, collaborate across disciplines, and translate data into action.
     </p>
    </div>
    <div class="surface-soft p-6 lg:col-span-4 lg:col-start-9">
     <h3 class="font-display text-2xl font-semibold text-mist">Why work with us</h3>
     <div class="mt-6 grid gap-4 text-sm text-mist/[0.62]">
      <p class="flex items-start gap-3"><Icon name="mdi:check" class="mt-0.5 shrink-0 text-primary" /> Impactful regional projects</p>
      <p class="flex items-start gap-3"><Icon name="mdi:check" class="mt-0.5 shrink-0 text-primary" /> Collaborative, mission-driven teams</p>
      <p class="flex items-start gap-3"><Icon name="mdi:check" class="mt-0.5 shrink-0 text-primary" /> Professional growth and mentorship</p>
      <p class="flex items-start gap-3"><Icon name="mdi:check" class="mt-0.5 shrink-0 text-primary" /> Inclusive culture and flexible work</p>
     </div>
    </div>
   </div>
  </section>

  <section class="border-y border-mist/10 bg-panel/[0.55] py-16 md:py-24">
   <div class="shell">
    <div class="max-w-3xl">
     <h2 class="display-title text-4xl leading-tight md:text-5xl">Current opportunities</h2>
     <p class="body-copy mt-4">Open roles across research, programme delivery, and operations.</p>
    </div>

    <div class="mt-10 grid gap-5 lg:grid-cols-2">
     <article v-for="role in roles" :key="role.title" class="surface group p-6 transition duration-500 hover:border-primary/[0.35] md:p-7">
      <div class="flex flex-wrap items-start justify-between gap-3">
       <div>
        <p class="text-sm font-semibold text-primary">{{ role.type }}</p>
        <h3 class="mt-2 font-display text-2xl font-semibold tracking-tight text-mist">{{ role.title }}</h3>
       </div>
       <span class="rounded-xl border border-mist/10 px-3 py-1.5 text-xs font-semibold text-mist/[0.55]">{{ role.location }}</span>
      </div>
      <p class="mt-5 text-sm leading-relaxed text-mist/[0.58]">{{ role.summary }}</p>
      <NuxtLink to="/Contact" class="text-link mt-6">Contact <Icon name="mdi:arrow-right" /></NuxtLink>
     </article>
    </div>
   </div>
  </section>

  <section class="py-16 md:py-24">
   <div class="shell">
    <div class="surface-soft grid gap-8 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
     <div>
      <h2 class="display-title text-4xl leading-tight md:text-5xl">We&apos;re always meeting future collaborators.</h2>
      <p class="body-copy mt-4">Share your CV and interests for future research, evaluation, and advisory missions.</p>
     </div>
     <NuxtLink to="/Contact" class="button-primary">Send your CV <Icon name="mdi:email-outline" /></NuxtLink>
    </div>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
 useSeoMeta({
  title: "Careers",
  description:
   "Explore careers and consulting opportunities with Dansom Research & Consultancy across research, monitoring, evaluation, operations, and advisory roles.",
  ogTitle: "Careers at Dansom Research & Consultancy",
  ogDescription:
   "Join Dansom's research, monitoring, evaluation, and advisory teams supporting evidence-driven work across the Horn of Africa.",
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })

 const roles = [
  {
   title: "Field Research Coordinator",
   type: "Research",
   location: "Mogadishu",
   summary:
    "Lead field teams, manage data quality, and coordinate stakeholder engagement for multi-site studies.",
  },
  {
   title: "Monitoring & Evaluation Specialist",
   type: "MEL",
   location: "Nairobi",
   summary:
    "Design MEL frameworks, oversee TPME deliverables, and synthesize insights for partners and donors.",
  },
  {
   title: "Security & Access Advisor",
   type: "Advisory",
   location: "Somalia",
   summary:
    "Develop access strategies, risk mitigation plans, and field protocols for programmes in non-permissive areas.",
  },
  {
   title: "Data Analyst",
   type: "Insights",
   location: "Hybrid",
   summary:
    "Transform qualitative and quantitative findings into decision-ready dashboards and reports.",
  },
 ]
</script>
