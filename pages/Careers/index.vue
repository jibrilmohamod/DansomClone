<template>
 <div class="min-h-screen text-slate-900">
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

  <section class="container mx-auto space-y-6 px-4 py-10 md:space-y-10 md:px-6 md:py-16">
   <div class="grid gap-5 rounded-none border-0 bg-transparent p-0 shadow-none md:dansom-card md:grid-cols-3 md:gap-8 md:p-8">
    <div class="space-y-3 md:col-span-2 md:space-y-4">
     <p class="text-xs uppercase tracking-[0.2em] text-primary md:text-sm md:tracking-[0.25em]">Join our mission</p>
     <h2 class="font-display text-2xl font-semibold md:text-3xl">Careers at Dansom</h2>
     <p class="font-body text-sm leading-relaxed text-slate-700 md:text-lg">
      Dansom is an Equal Opportunity Employer committed to inclusive teams and equitable workplaces. We welcome diverse experiences and perspectives that strengthen our work across the Horn of Africa.
     </p>
     <p class="font-body text-sm leading-relaxed text-slate-700 md:text-base">
      We look for team members who thrive in complex environments, collaborate across disciplines, and translate data into action. If that sounds like you, reach out directly.
     </p>
    </div>
    <div class="rounded-lg border border-slate-200/80 bg-white p-4 shadow-none md:dansom-card-soft md:p-5">
     <h3 class="text-lg font-semibold text-slate-900 md:text-xl">Why work with us</h3>
     <ul class="mt-3 space-y-2 text-sm text-slate-700">
      <li class="flex items-start gap-2"><Icon name="mdi:check-circle" class="text-primary mt-0.5" /> Impactful regional projects</li>
      <li class="flex items-start gap-2"><Icon name="mdi:check-circle" class="text-primary mt-0.5" /> Collaborative, mission-driven teams</li>
      <li class="flex items-start gap-2"><Icon name="mdi:check-circle" class="text-primary mt-0.5" /> Professional growth and mentorship</li>
      <li class="flex items-start gap-2"><Icon name="mdi:check-circle" class="text-primary mt-0.5" /> Inclusive culture and flexible work</li>
     </ul>
    </div>
   </div>

   <div class="rounded-xl bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 p-5 text-white shadow-none md:rounded-3xl md:p-10 md:shadow-lg md:shadow-slate-500/30">
    <div class="grid items-center gap-4 md:gap-6 lg:grid-cols-2">
     <div class="space-y-3 md:space-y-4">
      <p class="text-xs uppercase tracking-[0.2em] text-secondary md:text-sm md:tracking-[0.25em]">Don&apos;t see a fit?</p>
      <h3 class="font-display text-2xl font-semibold md:text-3xl">We&apos;re always meeting future collaborators</h3>
      <p class="font-body text-white/80 leading-relaxed">
       Share your CV and interests. We regularly build agile teams for research deployments, evaluations, and advisory missions across the region.
      </p>
     </div>
     <div class="flex flex-wrap gap-2 md:gap-3">
      <NuxtLink
       to="/Contact"
       class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-none transition hover:-translate-y-0.5 md:px-5 md:py-3 md:shadow-lg md:shadow-black/10"
      >
       Send your CV
       <Icon name="mdi:email-outline" />
      </NuxtLink>
      <NuxtLink
       to="/About"
       class="inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 md:px-5 md:py-3"
      >
       Learn about Dansom
       <Icon name="mdi:information-outline" />
      </NuxtLink>
     </div>
    </div>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts"></script>
