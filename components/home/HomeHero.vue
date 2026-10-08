<template>
 <section class="home-hero relative border-b border-line/45 bg-ink text-mist">
  <div class="home-hero-surface atlas-grid absolute inset-0" aria-hidden="true"></div>
  <TheNav />

  <div class="atlas-shell relative z-10 grid gap-10 pb-12 pt-10 md:pb-16 md:pt-14 lg:min-h-[calc(100dvh-76px)] lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-14">
   <div class="hero-copy min-w-0 lg:col-span-6 xl:col-span-5">
    <p class="atlas-label">Research and advisory services</p>
    <h1 class="atlas-display mt-6 max-w-[17ch] text-[clamp(2.6rem,4.4vw,4.6rem)] leading-[0.98]">Research for complex operating environments.</h1>
    <p class="mt-6 max-w-[46ch] text-base leading-relaxed text-mist/70 md:text-lg">Research, monitoring, and advisory built from trusted access across Somalia, Kenya, and the Horn of Africa.</p>
    <div class="mt-8 flex flex-wrap gap-3">
     <NuxtLink to="/Portfolio" class="button-primary">Explore the work <Icon name="mdi:arrow-right" aria-hidden="true" /></NuxtLink>
     <NuxtLink to="/About" class="button-ghost">Who we are</NuxtLink>
    </div>

    <dl class="mt-12 grid max-w-lg grid-cols-3 border-t border-line/55">
     <div v-for="fact in facts" :key="fact.label" class="flex flex-col border-r border-line/40 pr-4 pt-5 last:border-r-0 [&:not(:first-child)]:pl-4">
      <dt class="text-xs leading-snug text-mist/70">{{ fact.label }}</dt>
      <dd class="order-first font-display text-[clamp(1.6rem,2.4vw,2.2rem)] font-semibold tracking-[-0.04em]">{{ fact.value }}</dd>
     </div>
    </dl>
   </div>

   <div class="hero-evidence flex min-w-0 flex-col lg:col-span-6 xl:col-span-7">
    <figure class="hero-photo relative aspect-[16/10] overflow-hidden md:aspect-[16/9] border border-line/55 bg-panel lg:aspect-auto lg:h-[min(46dvh,30rem)]">
     <img
      :src="photo.src"
      :alt="photo.alt"
      :style="{ objectPosition: photo.position }"
      width="1810"
      height="869"
      fetchpriority="high"
      class="h-full w-full object-cover"
     />
     <figcaption class="absolute bottom-0 left-0 m-3 inline-flex items-center gap-2 rounded-lg bg-[#05101a]/80 px-3 py-2 text-xs font-semibold text-[#f2f7f8] backdrop-blur md:m-4">
      <span class="h-1.5 w-1.5 rounded-full bg-[#c5e060]" aria-hidden="true"></span>
      {{ photo.location }} · Dansom workshop
     </figcaption>
    </figure>

    <div class="evidence-panel border-x border-b border-line/55 bg-panel" @mouseenter="paused = true" @mouseleave="paused = false" @focusin="paused = true" @focusout="paused = false">
     <div class="flex items-center justify-between gap-4 px-5 pt-5 md:px-6">
      <p id="track-record-label" class="atlas-label">Track record by service</p>
      <p class="hidden text-xs text-mist/70 sm:block">{{ projects.length }} documented assignments</p>
     </div>

     <div ref="tablist" role="tablist" aria-labelledby="track-record-label" class="evidence-tabs relative mt-4 flex gap-1 overflow-x-auto px-3 sm:flex-wrap sm:overflow-visible md:px-4" @keydown="onTabKeydown">
      <button
       v-for="(line, index) in serviceLines"
       :id="`evidence-tab-${index}`"
       :key="line.classification"
       :ref="(element) => setTabRef(element, index)"
       type="button"
       role="tab"
       :aria-selected="activeIndex === index"
       :aria-controls="`evidence-panel-${index}`"
       :tabindex="activeIndex === index ? 0 : -1"
       class="evidence-tab"
       :class="{ 'is-active': activeIndex === index }"
       @click="choose(index)"
       @mouseenter="previewOnHover(index)"
      >
       {{ line.shortLabel }}
       <span class="evidence-count">{{ line.projects.length }}</span>
      </button>
     </div>

     <div
      v-for="(line, index) in serviceLines"
      v-show="activeIndex === index"
      :id="`evidence-panel-${index}`"
      :key="line.classification"
      role="tabpanel"
      :aria-labelledby="`evidence-tab-${index}`"
      tabindex="0"
      class="evidence-body grid gap-6 border-t border-line/45 px-5 py-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] md:px-6"
     >
      <div>
       <p class="font-display text-5xl font-semibold leading-none tracking-[-0.05em] text-primary">{{ line.projects.length }}</p>
       <p class="mt-2 text-sm leading-snug text-mist/65">{{ line.projects.length === 1 ? "assignment" : "assignments" }}, {{ line.span }}</p>
      </div>
      <div class="min-w-0">
       <p class="text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">Commissioned by</p>
       <p class="mt-2 text-sm leading-relaxed text-mist/85">{{ clientSummary(line.clients) }}</p>
       <NuxtLink :to="line.href" class="text-link mt-4 text-sm">{{ line.serviceTitle }} <Icon name="mdi:arrow-right" aria-hidden="true" /></NuxtLink>
      </div>
     </div>
    </div>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
import { photography } from "~/data/photography"
import { projects } from "~/data/projects"
import { services } from "~/data/services"

const photo = photography.fieldResearchHero

const shortLabels: Record<string, string> = {
 "Third Party Monitoring and Evaluation": "Monitoring & evaluation",
 "Formative Research and Policy Advisory Services": "Research & policy",
 "Political Economy Analysis and Security Advisory": "Political economy",
 "Operational and Logistics Management": "Operations & logistics",
 "Organizational Capacity Building and HR": "Capacity building",
}

const currentYear = new Date().getFullYear()

const yearsOf = (timeframe?: string) => {
 if (!timeframe) return []
 const years = (timeframe.match(/\b(19|20)\d{2}\b/g) || []).map(Number)
 if (/present/i.test(timeframe)) years.push(currentYear)
 return years
}

const serviceLines = Object.keys(shortLabels)
 .map((classification) => {
  const matches = projects.filter((project) => project.classification === classification || project.classification2 === classification)
  const years = matches.flatMap((project) => yearsOf(project.timeframes))
  const first = Math.min(...years)
  const last = Math.max(...years)
  const service = services.find((entry) => entry.title === classification || entry.fullTitle === classification)
  return {
   classification,
   shortLabel: shortLabels[classification],
   projects: matches,
   span: years.length ? (last >= currentYear ? `${first} to present` : `${first} to ${last}`) : "recent",
   clients: [...new Set(matches.map((project) => project.Ngo).filter(Boolean))] as string[],
   serviceTitle: service?.title || classification,
   href: service ? `/Services/${encodeURIComponent(service.slug)}` : "/Services",
  }
 })
 .filter((line) => line.projects.length)
 .sort((a, b) => b.projects.length - a.projects.length)

const facts = [
 { value: "2009", label: "Working in the region since" },
 { value: String(projects.length), label: "Documented assignments" },
 { value: String(services.length), label: "Service lines" },
]

const clientSummary = (clients: string[]) => {
 const shown = clients.slice(0, 5).join(" · ")
 return clients.length > 5 ? `${shown} and ${clients.length - 5} more` : shown
}

const activeIndex = ref(0)
const tablist = ref<HTMLElement | null>(null)
const paused = ref(false)
const tabs: HTMLElement[] = []
const setTabRef = (element: unknown, index: number) => {
 if (element instanceof HTMLElement) tabs[index] = element
}

const choose = (index: number) => {
 activeIndex.value = index
 stopRotation()
}

const previewOnHover = (index: number) => {
 if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) choose(index)
}

const onTabKeydown = (event: KeyboardEvent) => {
 const last = serviceLines.length - 1
 const next = { ArrowRight: activeIndex.value + 1, ArrowLeft: activeIndex.value - 1, Home: 0, End: last }[event.key]
 if (next === undefined) return
 event.preventDefault()
 choose(next < 0 ? last : next > last ? 0 : next)
 tabs[activeIndex.value]?.focus({ preventScroll: true })
}

// Keep the selected tab visible in the horizontally scrolling row on small screens without moving the page.
watch(activeIndex, (index) => {
 const row = tablist.value
 const tab = tabs[index]
 if (!row || !tab || row.scrollWidth <= row.clientWidth) return
 row.scrollTo({ left: tab.offsetLeft - 12, behavior: "smooth" })
})

// One slow pass through the record, paused on hover or focus and stopped for good once someone picks a tab.
// Skipped entirely for reduced motion.
let timer: ReturnType<typeof setInterval> | undefined
const stopRotation = () => clearInterval(timer)
onMounted(() => {
 if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
 timer = setInterval(() => {
  if (paused.value || document.visibilityState !== "visible") return
  if (activeIndex.value === serviceLines.length - 1) {
   activeIndex.value = 0
   stopRotation()
   return
  }
  activeIndex.value += 1
 }, 6500)
})
onBeforeUnmount(stopRotation)
</script>

<style scoped>
.home-hero-surface {
 background-image:
  radial-gradient(circle at 82% 18%, rgb(var(--primary) / 0.07), transparent 34%),
  linear-gradient(rgb(var(--line) / 0.09) 1px, transparent 1px),
  linear-gradient(90deg, rgb(var(--line) / 0.09) 1px, transparent 1px);
 background-size: auto, clamp(3.5rem, 7vw, 7rem) clamp(3.5rem, 7vw, 7rem), clamp(3.5rem, 7vw, 7rem) clamp(3.5rem, 7vw, 7rem);
 mask-image: linear-gradient(180deg, black 0%, black 55%, transparent 100%);
}

.hero-photo img {
 filter: saturate(0.88) contrast(1.02);
}

.evidence-tabs {
 scrollbar-width: none;
 mask-image: linear-gradient(90deg, black 85%, transparent);
}
.evidence-tabs::-webkit-scrollbar { display: none; }

@media (min-width: 640px) {
 .evidence-tabs { mask-image: none; }
}

.evidence-tab {
 display: inline-flex;
 flex-shrink: 0;
 align-items: center;
 gap: 0.5rem;
 min-height: 2.75rem;
 border-radius: 0.6rem;
 padding: 0.5rem 0.75rem;
 font-size: 0.8125rem;
 font-weight: 700;
 color: rgb(var(--mist) / 0.68);
 transition: color 200ms ease, background-color 200ms ease;
}

.evidence-tab:hover { color: rgb(var(--mist)); }

.evidence-tab.is-active {
 background: rgb(var(--primary) / 0.14);
 color: rgb(var(--mist));
}

.evidence-count {
 border-radius: 999px;
 background: rgb(var(--line) / 0.25);
 padding: 0.05rem 0.45rem;
 font-size: 0.6875rem;
 font-variant-numeric: tabular-nums;
}

.evidence-tab.is-active .evidence-count {
 background: rgb(var(--primary));
 color: rgb(var(--accent-ink));
}

.evidence-body { animation: evidence-in 420ms cubic-bezier(0.16, 1, 0.3, 1) both; }

.hero-copy > * { animation: hero-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
.hero-copy > :nth-child(2) { animation-delay: 0.06s; }
.hero-copy > :nth-child(3) { animation-delay: 0.12s; }
.hero-copy > :nth-child(4) { animation-delay: 0.18s; }
.hero-copy > :nth-child(5) { animation-delay: 0.24s; }
.hero-evidence { animation: hero-rise 0.9s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both; }

@keyframes hero-rise {
 from { opacity: 0; transform: translateY(24px); }
 to { opacity: 1; transform: translateY(0); }
}

@keyframes evidence-in {
 from { opacity: 0; transform: translateY(6px); }
 to { opacity: 1; transform: translateY(0); }
}
</style>
