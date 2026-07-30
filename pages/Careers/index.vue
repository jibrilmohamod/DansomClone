<template>
 <div>
  <TheHeader
   title="Careers"
   eyebrow="Join the team"
   intro="Careful thinkers and grounded practitioners working across research, monitoring, analysis, and field delivery."
  >
   <template #image>
    <img
     loading="eager"
     fetchpriority="high"
     width="1588"
     height="991"
     alt="Research and operations colleagues preparing for fieldwork"
     src="/dansom-field-operations.jpg"
     class="h-full w-full object-cover"
    />
   </template>
  </TheHeader>

  <section class="py-20 md:py-32">
   <div class="shell grid gap-12 lg:grid-cols-12">
    <div class="reveal lg:col-span-7">
     <p class="eyebrow">Careers at Dansom</p>
     <h2 class="display-title mt-4 text-4xl leading-tight md:text-6xl">Work grounded in context.</h2>
     <p class="body-copy mt-6 text-base md:text-lg">
      Dansom is an Equal Opportunity Employer committed to inclusive teams and equitable workplaces. We value people who work carefully across disciplines and translate evidence into useful action.
     </p>
    </div>
    <RevealBlock class="border-y border-line/55 py-7 lg:col-span-4 lg:col-start-9">
     <h3 class="font-display text-2xl font-semibold text-mist">How we work</h3>
     <div class="mt-6 grid gap-4 text-sm text-mist/[0.62]">
      <p class="flex items-start gap-3"><Icon name="mdi:check" class="mt-0.5 shrink-0 text-primary" /> Context before assumptions</p>
      <p class="flex items-start gap-3"><Icon name="mdi:check" class="mt-0.5 shrink-0 text-primary" /> Rigour in every assignment</p>
      <p class="flex items-start gap-3"><Icon name="mdi:check" class="mt-0.5 shrink-0 text-primary" /> Respect for partners and communities</p>
     </div>
    </RevealBlock>
   </div>
  </section>

  <section class="border-y border-line/40 bg-panel-soft/35 py-20 md:py-32">
   <div class="shell">
    <RevealBlock class="grid gap-8 lg:grid-cols-12 lg:items-end">
     <div class="lg:col-span-7">
      <p class="eyebrow">Current opportunities</p>
      <h2 class="display-title mt-4 text-4xl leading-tight md:text-5xl">There are no open positions at this time.</h2>
      <p class="body-copy mt-5">
       When a verified vacancy becomes available, it will be published here with a role description, location, closing date, and application instructions.
      </p>
     </div>
     <div class="lg:col-span-4 lg:col-start-9">
      <a
       href="https://so.linkedin.com/company/dansom-research-and-consultancy"
       target="_blank"
       rel="noopener noreferrer"
       class="button-ghost"
      >
       Follow updates on LinkedIn
       <Icon name="mdi:linkedin" />
      </a>
     </div>
    </RevealBlock>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
 useSeoMeta({
  title: "Careers",
  description:
   "Check verified career opportunities with Dansom Research & Consultancy. There are currently no open positions.",
  ogTitle: "Careers at Dansom Research & Consultancy",
  ogDescription:
   "Verified career opportunities with Dansom Research & Consultancy are published on this page when available.",
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })
</script>

