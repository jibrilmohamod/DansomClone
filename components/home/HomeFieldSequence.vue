<template>
 <section id="field-intelligence" class="border-y border-line/35 bg-panel-soft/45 py-20 md:py-28 lg:py-36">
  <div class="shell">
   <div class="max-w-4xl">
    <h2 class="display-title text-4xl leading-[0.96] md:text-6xl lg:text-7xl">Clarity is built in the field.</h2>
    <p class="body-copy mt-6 text-base md:text-lg">
     Every assignment moves through a disciplined cycle of local access, independent verification and decision-ready analysis.
    </p>
   </div>

   <div class="mt-14 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8">
    <div class="hidden lg:sticky lg:top-24 lg:col-span-7 lg:block lg:h-[calc(100dvh-7rem)]">
     <div class="relative h-full overflow-hidden rounded-2xl border border-line/55 bg-panel shadow-lift">
      <img
       v-for="(chapter, index) in chapters"
       :key="chapter.title"
       :src="chapter.image"
       :alt="chapter.alt"
       width="1586"
       height="992"
       loading="lazy"
       class="sequence-image absolute inset-0 h-full w-full object-cover"
       :class="activeIndex === index ? 'is-active' : ''"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#08131f]/70 via-transparent to-transparent"></div>
      <div class="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-5 text-[#f3f7f9] md:bottom-8 md:left-8 md:right-8">
       <p class="max-w-md font-display text-2xl font-semibold tracking-tight">{{ chapters[activeIndex].title }}</p>
       <div class="flex gap-1.5" aria-hidden="true">
        <span
         v-for="(_, index) in chapters"
         :key="index"
         class="h-1 rounded-full bg-[#f3f7f9]/35 transition-[width,background-color] duration-500"
         :class="activeIndex === index ? 'w-10 !bg-[#bfd962]' : 'w-4'"
        ></span>
       </div>
      </div>
     </div>
    </div>

    <div class="lg:col-span-4 lg:col-start-9">
     <article
      v-for="(chapter, index) in chapters"
      :key="chapter.verb"
      :ref="(element) => setStepRef(element, index)"
      class="sequence-step flex min-h-0 flex-col justify-center border-b border-line/40 py-10 first:pt-0 last:border-b-0 lg:min-h-[72dvh] lg:py-20"
      :class="activeIndex === index ? 'is-active' : ''"
     >
      <img
       :src="chapter.image"
       :alt="chapter.alt"
       width="1586"
       height="992"
       loading="lazy"
       class="mb-7 aspect-[4/3] w-full rounded-2xl border border-line/55 object-cover lg:hidden"
      />
      <p class="font-display text-xl font-semibold text-primary">{{ chapter.verb }}</p>
      <h3 class="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-mist md:text-4xl">{{ chapter.title }}</h3>
      <p class="mt-5 text-base leading-relaxed text-mist/65">{{ chapter.copy }}</p>
     </article>
    </div>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
 const chapters = [
  {
   verb: "Listen",
   title: "Access before assumptions",
   copy: "Local researchers begin with the people, institutions and incentives that shape each operating environment.",
   image: "/dansom-community-dialogue.jpg",
   alt: "Dansom researchers listening to community members during a consultation",
  },
  {
   verb: "Verify",
   title: "Evidence tested from every angle",
   copy: "Field observations, interviews and quantitative evidence are triangulated to separate signal from noise.",
   image: "/dansom-field-monitoring.jpg",
   alt: "A researcher recording observations during field monitoring",
  },
  {
   verb: "Advise",
   title: "Findings built for decisions",
   copy: "Clear analysis and practical recommendations help partners adapt programmes, allocate resources and act with confidence.",
   image: "/dansom-programme-analysis.jpg",
   alt: "A research team reviewing programme findings and charts",
  },
 ]

 const activeIndex = ref(0)
 const stepElements: HTMLElement[] = []
 let observer: IntersectionObserver | undefined

 const setStepRef = (element: unknown, index: number) => {
  if (element instanceof HTMLElement) stepElements[index] = element
 }

 onMounted(() => {
  observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (!entry.isIntersecting) return
     const index = stepElements.indexOf(entry.target as HTMLElement)
     if (index >= 0) activeIndex.value = index
    })
   },
   { rootMargin: "-32% 0px -38%", threshold: 0.1 },
  )

  stepElements.forEach((element) => observer?.observe(element))
 })

 onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.sequence-image {
 opacity: 0;
 transform: scale(1.045);
 transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.sequence-image.is-active {
 opacity: 1;
 transform: scale(1);
}

.sequence-step {
 opacity: 0.42;
 transition: opacity 450ms ease, transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
}

.sequence-step.is-active {
 opacity: 1;
 transform: translateX(0.5rem);
}

@media (max-width: 1023px) {
 .sequence-step { opacity: 1; }
 .sequence-step.is-active { transform: none; }
}

@media (prefers-reduced-motion: reduce) {
 .sequence-image,
 .sequence-step {
  transition: none;
 }
}
</style>
