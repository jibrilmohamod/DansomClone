<template>
 <div>
  <TheHeader
   title="Build what matters"
   eyebrow="Careers at Dansom"
   intro="For careful thinkers and grounded practitioners working across research, monitoring, analysis, and field delivery."
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

  <section class="atlas-grid py-24 md:py-40">
   <div class="atlas-shell grid gap-12 lg:grid-cols-12">
    <p class="atlas-label lg:col-span-2">The work</p>
    <RevealBlock class="lg:col-span-9 lg:col-start-4">
     <h2 class="atlas-display text-[clamp(3.7rem,9vw,9rem)] leading-[0.83]">Context first. Evidence always. People at the centre.</h2>
     <p class="mt-10 max-w-3xl text-lg leading-relaxed text-mist/[0.65] md:ml-auto md:text-2xl">
      Dansom is an Equal Opportunity Employer committed to inclusive teams and equitable workplaces. We value people who work carefully across disciplines and translate evidence into useful action.
     </p>
    </RevealBlock>
   </div>
  </section>

  <section class="border-y border-line/45 bg-panel-soft/35 py-24 md:py-40">
   <div class="atlas-shell">
    <p class="atlas-label">How we operate</p>
    <div class="mt-16 border-b border-line/55">
     <RevealBlock
      v-for="(principle, index) in principles"
      :key="principle"
      class="group grid min-h-[28dvh] items-center border-t border-line/55 py-10 md:grid-cols-12"
     >
      <span class="atlas-label md:col-span-2">0{{ index + 1 }}</span>
      <h2 class="atlas-display mt-8 text-[clamp(3rem,7vw,7rem)] leading-[0.86] transition-colors group-hover:text-primary md:col-span-9 md:col-start-4 md:mt-0">{{ principle }}</h2>
     </RevealBlock>
    </div>
   </div>
  </section>

  <section class="atlas-grid py-24 md:py-40">
   <div class="atlas-shell grid gap-12 lg:grid-cols-12">
    <div class="lg:col-span-2">
     <p class="atlas-label">Open roles</p>
     <p class="mt-5 font-display text-6xl font-semibold text-primary">00</p>
    </div>
    <RevealBlock class="lg:col-span-8 lg:col-start-4">
     <h2 class="atlas-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.84]">No open positions at this time.</h2>
     <p class="mt-8 max-w-2xl text-lg leading-relaxed text-mist/[0.62]">
      When a verified vacancy becomes available, it will be published here with the role description, location, closing date, and application instructions.
     </p>
     <a
      href="https://so.linkedin.com/company/dansom-research-and-consultancy"
      target="_blank"
      rel="noopener noreferrer"
      class="button-primary mt-10"
     >
      Follow updates
      <Icon name="mdi:linkedin" />
     </a>
    </RevealBlock>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
 const principles = [
  "Context before assumptions",
  "Rigour in every assignment",
  "Respect for partners and communities",
 ]

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
