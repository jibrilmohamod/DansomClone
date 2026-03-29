<template>
 <div class="relative min-h-screen overflow-hidden text-slate-900">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(80,174,211,0.14),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(191,217,98,0.14),transparent_30%)]"></div>
  <div class="relative">
  <TheHeader title="Careers">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="Careers banner"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="w-full h-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <section class="container mx-auto px-6 py-16 space-y-10">
   <div class="dansom-card grid gap-8 p-8 md:grid-cols-3">
    <div class="md:col-span-2 space-y-4">
     <p class="text-sm uppercase tracking-[0.25em] text-primary">Join our mission</p>
     <h2 class="text-3xl font-bold font-Playfair">Careers at Dansom</h2>
     <p class="text-lg text-slate-700 font-Montserrat leading-relaxed">
      Dansom is an Equal Opportunity Employer committed to inclusive teams and equitable workplaces. We welcome diverse experiences and perspectives that strengthen our work across the Horn of Africa.
     </p>
     <p class="text-slate-700 leading-relaxed">
      We look for team members who thrive in complex environments, collaborate across disciplines, and translate data into action. If that sounds like you, explore our opportunities below or reach out directly.
     </p>
    </div>
    <div class="dansom-card-soft p-5">
     <h3 class="text-xl font-semibold text-slate-900">Why work with us</h3>
     <ul class="mt-3 space-y-2 text-sm text-slate-700">
      <li class="flex items-start gap-2"><Icon name="mdi:check-circle" class="text-primary mt-0.5" /> Impactful regional projects</li>
      <li class="flex items-start gap-2"><Icon name="mdi:check-circle" class="text-primary mt-0.5" /> Collaborative, mission-driven teams</li>
      <li class="flex items-start gap-2"><Icon name="mdi:check-circle" class="text-primary mt-0.5" /> Professional growth and mentorship</li>
      <li class="flex items-start gap-2"><Icon name="mdi:check-circle" class="text-primary mt-0.5" /> Inclusive culture and flexible work</li>
     </ul>
    </div>
   </div>

   <OurExpertise
    title="Current Opportunities"
    subtitle="Browse open roles across research, programme delivery, and operations."
   >
    <template #vfor>
     <div class="grid gap-6 md:grid-cols-2">
      <div
       v-for="role in roles"
       :key="role.title"
       class="dansom-card-soft p-5 shadow-md shadow-slate-200"
      >
       <div class="flex items-center justify-between">
        <div>
         <p class="text-xs uppercase tracking-[0.2em] text-primary">{{ role.type }}</p>
         <h3 class="mt-1 text-xl font-semibold">{{ role.title }}</h3>
        </div>
        <span class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{{ role.location }}</span>
       </div>
       <p class="mt-3 text-slate-700 text-sm leading-relaxed">{{ role.summary }}</p>
       <NuxtLink
        to="/Contact"
        class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
       >
        Start a conversation
        <Icon name="mdi:arrow-right" />
       </NuxtLink>
      </div>
     </div>
    </template>
   </OurExpertise>

   <div class="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 text-white p-10 shadow-lg shadow-slate-500/30">
    <div class="grid gap-6 lg:grid-cols-2 items-center">
     <div class="space-y-4">
      <p class="text-sm uppercase tracking-[0.25em] text-secondary">Don&apos;t see a fit?</p>
      <h3 class="text-3xl font-bold font-Playfair">We&apos;re always meeting future collaborators</h3>
      <p class="text-white/80 leading-relaxed">
       Share your CV and interests. We regularly build agile teams for research deployments, evaluations, and advisory missions across the region.
      </p>
     </div>
     <div class="flex flex-wrap gap-3">
      <NuxtLink
       to="/Contact"
       class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/10 transition hover:-translate-y-0.5"
      >
       Send your CV
       <Icon name="mdi:email-outline" />
      </NuxtLink>
      <NuxtLink
       to="/About"
       class="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
      >
       Learn about Dansom
       <Icon name="mdi:information-outline" />
      </NuxtLink>
     </div>
    </div>
   </div>
  </section>
  </div>
 </div>
</template>

<script setup lang="ts">
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
