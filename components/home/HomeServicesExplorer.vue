<template>
 <section id="capabilities" class="border-y border-line/35 bg-panel-soft/45 py-20 md:py-32 lg:py-40">
  <div class="shell">
   <div class="max-w-4xl">
    <h2 class="display-title text-4xl leading-[0.96] md:text-6xl lg:text-7xl">Expertise built for complex contexts.</h2>
    <p class="body-copy mt-6 text-base md:text-lg">
     Six connected capabilities support programmes from first question to field delivery and institutional learning.
    </p>
   </div>

   <div class="mt-14 hidden gap-8 lg:mt-20 lg:grid lg:grid-cols-12 lg:items-start">
    <div
     id="service-panel"
     class="service-stage relative min-h-[32rem] overflow-hidden rounded-2xl border border-line/55 bg-panel shadow-lift md:min-h-[40rem] lg:sticky lg:top-24 lg:col-span-7"
     role="tabpanel"
     :aria-labelledby="`service-tab-desktop-${activeIndex}`"
     aria-live="polite"
    >
     <Transition name="service-scene" mode="out-in">
      <div :key="activeService.slug" class="absolute inset-0">
       <img
        :src="activeVisual.image"
        :alt="activeVisual.alt"
        width="1586"
        height="992"
        loading="lazy"
        class="h-full w-full object-cover"
       />
      </div>
     </Transition>
     <div class="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,15,24,0.94)_0%,rgba(4,15,24,0.58)_45%,rgba(4,15,24,0.08)_78%)]"></div>
     <div class="relative flex min-h-[32rem] flex-col justify-end p-7 text-[#f3f7f9] md:min-h-[40rem] md:p-12">
      <Icon :name="activeService.icon" class="mb-6 text-3xl text-[#bfd962]" />
      <h3 class="max-w-[17ch] font-display text-3xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-5xl">
       {{ activeService.fullTitle }}
      </h3>
      <p class="mt-5 max-w-xl text-sm leading-relaxed text-[#f3f7f9]/72 md:text-base">{{ activeService.description }}</p>
      <NuxtLink :to="serviceHref(activeService.slug)" class="mt-7 inline-flex w-fit items-center gap-2 font-semibold text-[#bfd962] transition hover:gap-3">
       Explore this service
       <Icon name="mdi:arrow-top-right" />
      </NuxtLink>
     </div>
    </div>

    <div class="service-tabs lg:col-span-5" role="tablist" aria-label="Dansom services" aria-orientation="vertical">
     <button
      v-for="(service, index) in services"
      :id="`service-tab-desktop-${index}`"
      :key="service.slug"
      type="button"
      role="tab"
      :aria-selected="activeIndex === index"
      aria-controls="service-panel"
      :tabindex="activeIndex === index ? 0 : -1"
      class="service-tab"
      :class="activeIndex === index ? 'is-active' : ''"
      @click="setActive(index)"
      @focus="setActive(index)"
      @mouseenter="setActive(index)"
      @keydown="handleKeydown($event, index)"
     >
      <Icon :name="service.icon" class="service-tab-icon" />
      <span class="min-w-0 flex-1 text-left font-display text-lg font-semibold leading-tight tracking-[-0.025em] md:text-2xl">
       {{ service.title }}
      </span>
      <Icon name="mdi:arrow-right" class="service-tab-arrow" />
     </button>
    </div>
   </div>

   <div class="mt-10 border-t border-line/50 lg:hidden" aria-label="Dansom services">
    <article v-for="(service, index) in services" :key="`mobile-${service.slug}`" class="border-b border-line/50">
     <button
      :id="`service-tab-mobile-${index}`"
      type="button"
      class="service-tab"
      :class="activeIndex === index ? 'is-active' : ''"
      :aria-expanded="activeIndex === index"
      :aria-controls="`service-panel-mobile-${index}`"
      @click="setActive(index)"
     >
      <Icon :name="service.icon" class="service-tab-icon" />
      <span class="min-w-0 flex-1 text-left font-display text-lg font-semibold leading-tight tracking-[-0.025em]">
       {{ service.title }}
      </span>
      <Icon name="mdi:chevron-down" class="mobile-tab-chevron" />
     </button>

     <Transition name="mobile-service">
      <div
       v-if="activeIndex === index"
       :id="`service-panel-mobile-${index}`"
       class="mobile-service-panel"
       role="region"
       :aria-labelledby="`service-tab-mobile-${index}`"
      >
       <img :src="visuals[index].image" :alt="visuals[index].alt" width="1586" height="992" loading="lazy" />
       <div class="p-5">
        <h3 class="font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-mist">{{ service.fullTitle }}</h3>
        <p class="mt-3 text-sm leading-relaxed text-mist/65">{{ service.description }}</p>
        <NuxtLink :to="serviceHref(service.slug)" class="text-link mt-5">Explore this service <Icon name="mdi:arrow-top-right" /></NuxtLink>
       </div>
      </div>
     </Transition>
    </article>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
 import { services } from "~/data/services"

 const visuals = [
  { image: "/dansom-programme-analysis.jpg", alt: "A research team reviewing programme evidence and analytical findings" },
  { image: "/dansom-field-monitoring.jpg", alt: "A field researcher recording observations during programme monitoring" },
  { image: "/dansom-community-dialogue.jpg", alt: "Community members contributing to a facilitated research discussion" },
  { image: "/dansom-research-workshop.jpg", alt: "Researchers facilitating an organisational development workshop" },
  { image: "/dansom-field-operations.jpg", alt: "Field researchers travelling through a rural operating environment" },
  { image: "/dansom-livelihoods-research.jpg", alt: "Researchers examining agricultural and environmental conditions" },
 ]

 const activeIndex = ref(0)
 const activeService = computed(() => services[activeIndex.value])
 const activeVisual = computed(() => visuals[activeIndex.value])

 const serviceHref = (slug: string) => `/Services/${encodeURIComponent(slug)}`

 const setActive = (index: number) => {
  activeIndex.value = index
 }

 const handleKeydown = (event: KeyboardEvent, index: number) => {
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return
  event.preventDefault()

  const nextIndex = event.key === "Home"
   ? 0
   : event.key === "End"
    ? services.length - 1
    : (index + (event.key === "ArrowDown" ? 1 : -1) + services.length) % services.length

  activeIndex.value = nextIndex
  document.getElementById(`service-tab-desktop-${nextIndex}`)?.focus()
 }
</script>

<style scoped>
.service-tabs {
 border-top: 1px solid rgb(var(--line) / 0.5);
}

.service-tab {
 display: flex;
 width: 100%;
 align-items: center;
 gap: 1rem;
 border-bottom: 1px solid rgb(var(--line) / 0.5);
 padding: 1.35rem 0.25rem;
 color: rgb(var(--mist) / 0.52);
 transition: color 300ms ease, padding 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-tab:hover,
.service-tab.is-active {
 padding-left: 0.85rem;
 color: rgb(var(--mist));
}

.service-tab-icon {
 width: 1.55rem;
 height: 1.55rem;
 flex-shrink: 0;
 color: rgb(var(--primary));
}

.service-tab-arrow {
 flex-shrink: 0;
 opacity: 0;
 transform: translateX(-0.5rem);
 transition: opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-tab.is-active .service-tab-arrow {
 opacity: 1;
 transform: translateX(0);
}

.mobile-tab-chevron {
 flex-shrink: 0;
 transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-tab.is-active .mobile-tab-chevron {
 transform: rotate(180deg);
}

.mobile-service-panel {
 overflow: hidden;
 border: 1px solid rgb(var(--line) / 0.55);
 border-radius: 0.75rem;
 background: rgb(var(--panel));
 margin-bottom: 1.25rem;
 box-shadow: 0 18px 44px -34px rgb(var(--shadow) / 0.58);
}

.mobile-service-panel img {
 width: 100%;
 aspect-ratio: 4 / 3;
 object-fit: cover;
}

.service-scene-enter-active,
.service-scene-leave-active {
 transition: opacity 420ms ease, transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-scene-enter-from {
 opacity: 0;
 transform: scale(1.025);
}

.service-scene-leave-to {
 opacity: 0;
}

.mobile-service-enter-active,
.mobile-service-leave-active {
 transition: opacity 300ms ease, transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-service-enter-from,
.mobile-service-leave-to {
 opacity: 0;
 transform: translateY(-0.5rem);
}

@media (max-width: 767px) {
 .service-tab {
  padding: 1.1rem 0;
 }

 .service-tab:hover,
 .service-tab.is-active {
  padding-left: 0.5rem;
 }
}

@media (prefers-reduced-motion: reduce) {
 .service-tab,
 .service-tab-arrow,
 .mobile-tab-chevron,
 .mobile-service-enter-active,
 .mobile-service-leave-active,
 .service-scene-enter-active,
 .service-scene-leave-active {
  transition: none;
 }
}
</style>
