<template>
 <div class="min-h-screen text-slate-900">
  <TheHeader :projTitle="service.title">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="Service header"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="w-full h-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <div class="container m-auto px-4 py-6 md:px-6 md:py-14">
   <article class="grid gap-4 rounded-none border-0 bg-transparent p-0 shadow-none md:dansom-card md:grid-cols-3 md:gap-8 md:p-8">
    <div class="flex items-start gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200 md:block md:space-y-4 md:rounded-2xl md:bg-gradient-to-br md:from-secondary/20 md:via-white md:to-quinary/25 md:p-6 md:ring-secondary/20">
     <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary md:h-20 md:w-20 md:bg-white/70">
      <Icon :name="service.icon" class="text-2xl md:text-5xl" />
     </span>
     <div>
      <p class="text-[10px] uppercase tracking-[0.18em] text-slate-500 md:text-xs md:tracking-[0.2em]">{{ service.category }}</p>
      <p class="mt-1 text-sm font-semibold leading-snug text-primary md:text-lg">{{ service.title }}</p>
     </div>
    </div>

    <div class="space-y-4 md:col-span-2 md:space-y-6">
     <div class="space-y-2 md:space-y-3">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-secondary md:text-sm">Service focus</p>
      <h1 class="font-DM text-2xl font-bold leading-tight text-primary md:text-4xl">{{ service.title }}</h1>
      <div class="max-w-3xl space-y-3 font-Zilla text-base leading-relaxed text-slate-700 md:text-lg">
       <p v-for="paragraph in service.about" :key="paragraph">{{ paragraph }}</p>
      </div>
     </div>

     <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-none md:rounded-2xl md:p-6 md:shadow-sm">
      <h2 class="text-base font-semibold text-primary md:text-xl">What this includes</h2>
      <ul class="mt-3 grid gap-2 text-sm leading-relaxed text-slate-700 md:grid-cols-2 md:gap-3 md:text-base">
       <li v-for="point in service.points" :key="point" class="flex gap-2">
        <Icon name="mdi:check-circle" class="mt-0.5 shrink-0 text-base text-secondary md:text-lg" />
        <span>{{ point }}</span>
       </li>
      </ul>
     </div>

     <NuxtLink
      to="/Services"
      class="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary md:text-base"
     >
      Back to services
      <Icon name="mdi:arrow-right" />
     </NuxtLink>
    </div>
   </article>
  </div>
 </div>
</template>

<script lang="ts" setup>
 type Service = {
  icon: string
  title: string
  category: string
  description: string
  about: string[]
  points: string[]
 }

 const services: Service[] = [
  {
   title: "Political Economy Analysis",
   category: "Advisory",
   icon: "arcticons:adobe-analytics",
   description:
    "Political Economy Analysis (PEA) in Somalia to inform programming and policy development.",
   about: [
    "Dansom has developed a unique expertise in providing international development agencies such as the World Bank, EU, DFID, FCO and the UN with in-depth political economy analysis, economic growth and security advisory services in the Somali and broader East-African context. The firm has experience in collecting up-to-date, triangulated information on the ground, analysing local networks and power structures, and in designing effective strategies to guarantee access to civil society actors and strategic stakeholders in insecure and non-permissive areas.",
    "Dansom also provides security risk analysis, management planning and on-going advisory services to international organisations that aim to deliver impact in some of the most volatile environments in the region.",
    "Dansom has also worked on providing detailed economic analysis for international and national organizations that has informed them on the design and development of economic growth programs. Dansom has an extensive network of private sector actors as well as government stakeholders. Additionally, the firm has, through various other projects expanded its working relationship with numerous civil society organizations and NGO’s across Somalia.",
   ],
   points: [
    "Political economy and stakeholder mapping",
    "Security and access risk analysis",
    "Programme strategy and adaptation support",
    "Ground-truthed evidence from local networks",
   ],
  },
  {
   title: "Third Party Monitoring and Evaluation",
   category: "MEL",
   icon: "carbon:data-analytics",
   description:
    "Third Party Monitoring and Evaluation (TPME) of humanitarian and development projects in Somalia.",
   about: [
    "DANSOM core expertise lies also in third-party monitoring and performance evaluation. Across our network of multi-disciplinary experts, we combine extensive experience in providing third-party monitoring, verification and evaluation, process efficiency, performance and impact evaluations, as well as programme reviews. Using both qualitative and quantitative methods and leveraging our region-wide network of field monitors and data collectors, we ensure reliable analytical results are provided on time to our clients and allow them to make rapid decisions to steer their programmes in the right direction despite the complexity of their environment of operation.",
    "Our team of experts have experience in providing third-party monitoring and evaluation services to a range of international development agencies, including the World Bank, EU, DFID, FCO, UN, and other international and local NGOs. Our team has also worked on providing detailed economic analysis for international and national organizations that has informed them on the design and development of economic growth programs.",
   ],
   points: [
    "Third-party monitoring and verification",
    "Performance and impact evaluations",
    "Field data collection and quality assurance",
    "Actionable reporting for adaptive decisions",
   ],
  },
  {
   title: "Socio-Political and Economic Development",
   category: "Research",
   icon: "mdi:account-group",
   description:
    "Research and advisory services addressing governance, economic growth, and community resilience in fragile contexts.",
   about: [
    "Dansom has built one of the most extensive and effective networks of multi-disciplinary researchers working in Somalia and has delivered formative baseline assessments on strategically themed areas to support the international community and the Somali government in designing appropriate programmes in newly recovered areas and emerging sectors of interest. Our research services combine in-depth qualitative assessments and quantitative surveys to ensure with systematic ground-truthing and triangulation of information to ensure only the highest quality of data is taken into account for the analysis and programme design phases.",
    "Our specialized consultants represent a diversity of fields with expertise in law, economics, financial management, public policy, security advice and many other areas.",
   ],
   points: [
    "Socio-political context analysis",
    "Economic development research",
    "Community resilience assessments",
    "Governance and institutional diagnostics",
   ],
  },
  {
   title: "Security and Access Advisory",
   category: "Advisory",
   icon: "mdi:security",
   description:
    "Risk assessments, access strategies, and operational support for secure delivery in hard-to-reach areas.",
   about: [
    "Dansom provides security risk analysis, access planning, management support, and on-going advisory services to organisations delivering programmes in volatile and hard-to-reach areas.",
   ],
   points: [
    "Operational risk assessments",
    "Access strategy and planning",
    "Security advisory for field delivery",
    "Local actor and route analysis",
   ],
  },
  {
   title: "Research and Knowledge Management",
   category: "Insights",
   icon: "mdi:file-document-edit",
   description:
    "Knowledge products, learning agendas, and evidence synthesis that drive adaptive programming.",
   about: [
    "Dansom supports partners to transform field evidence, programme learning, and research outputs into practical knowledge products that inform planning, adaptation, and decision-making.",
   ],
   points: [
    "Learning agendas and evidence reviews",
    "Knowledge products and briefs",
    "Research design and implementation",
    "Synthesis for partner decision-making",
   ],
  },
  {
   title: "Monitoring and Performance Evaluation",
   category: "MEL",
   icon: "mdi:clipboard-list",
   description:
    "End-to-end MEL systems, performance tracking, and data quality assurance tailored to partner needs.",
   about: [
    "Dansom designs and supports monitoring and performance evaluation systems that help partners track implementation quality, verify results, and use data for timely programme improvement.",
   ],
   points: [
    "MEL framework development",
    "Performance tracking systems",
    "Data quality assurance",
    "Outcome-focused evaluation reporting",
   ],
  },
 ]

 const route = useRoute()
 const slug = computed(() => decodeURIComponent(String(route.params.slug)))
 const service = computed(
  () => services.find((item) => item.title === slug.value) || services[0],
 )

 useSeoMeta({
  title: () => service.value.title,
  description: () => service.value.description,
  ogTitle: () => `${service.value.title} | Dansom Services`,
  ogDescription: () => service.value.description,
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })
</script>
