<template>
 <div class="min-h-[100dvh] text-slate-900">
  <TheHeader :projTitle="service.fullTitle">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="Dansom research team working in the Horn of Africa"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="h-full w-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <main class="container px-4 py-10 md:px-6 md:py-16">
   <div class="grid gap-8 lg:grid-cols-[0.75fr_1.75fr] lg:gap-12">
    <aside class="space-y-4">
     <div class="flex min-h-44 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-primary">
      <Icon :name="service.icon" class="h-20 w-20" />
     </div>
     <dl class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm">
      <div>
       <dt class="font-semibold text-slate-900">Delivery model</dt>
       <dd class="mt-1 text-slate-600">Mixed-method research with local field teams</dd>
      </div>
      <div class="mt-4 border-t border-slate-200 pt-4">
       <dt class="font-semibold text-slate-900">Coverage</dt>
       <dd class="mt-1 text-slate-600">Somalia and Kenya</dd>
      </div>
     </dl>
    </aside>

    <article>
     <p class="text-sm font-semibold text-primary">{{ service.title }}</p>
     <h2 class="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
      {{ service.fullTitle }}
     </h2>
     <p class="mt-4 text-lg leading-relaxed text-slate-600">{{ service.subtitle }}</p>
     <div
      class="service-body prose prose-slate mt-8 max-w-none prose-headings:font-display prose-headings:text-slate-900 prose-p:leading-8 prose-a:text-primary"
      v-html="service.about"
     ></div>
     <NuxtLink
      to="/Contact"
      class="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 active:translate-y-px"
     >
      Contact
      <Icon name="mdi:arrow-right" />
     </NuxtLink>
    </article>
   </div>
  </main>
 </div>
</template>

<script lang="ts" setup>
 const route = useRoute()
 const services = [
  {
   icon: "arcticons:adobe-analytics",
   title: "Political Economy Analysis",
   fullTitle: "Political Economy Analysis and Security Advisory",
   subtitle:
    "Political economy analysis in Somalia to inform programming and policy development.",
   about:
    "<p>Dansom has developed a unique expertise in providing international development agencies such as the World Bank, EU, DFID, FCO and the UN with in-depth political economy analysis, economic growth and security advisory services in the Somali and broader East-African context. The firm has experience in collecting up-to-date, triangulated information on the ground, analysing local networks and power structures, and in designing effective strategies to guarantee access to civil society actors and strategic stakeholders in insecure and non-permissive areas.</p><p>Dansom also provides security risk analysis, management planning and on-going advisory services to international organisations that aim to deliver impact in some of the most volatile environments in the region.</p><p>Dansom has also worked on providing detailed economic analysis for international and national organizations that has informed them on the design and development of economic growth programs. Dansom has an extensive network of private sector actors as well as government stakeholders. Additionally, the firm has, through various other projects expanded its working relationship with numerous civil society organizations and NGO’s across Somalia.</p>",
  },
  {
   icon: "carbon:data-analytics",
   title: "Third Party Monitoring and Evaluation",
   fullTitle: "Third Party Monitoring and Performance Evaluation",
   subtitle:
    "Third party monitoring and evaluation of humanitarian and development projects in Somalia.",
   about:
    "<p>DANSOM core expertise lies also in third-party monitoring and performance evaluation. Across our network of multi-disciplinary experts, we combine extensive experience in providing third-party monitoring, verification and evaluation, process efficiency, performance and impact evaluations, as well as programme reviews. Using both qualitative and quantitative methods and leveraging our region-wide network of field monitors and data collectors, we ensure reliable analytical results are provided on time to our clients and allow them to make rapid decisions to steer their programmes in the right direction despite the complexity of their environment of operation.</p><p>Our team of experts have experience in providing third-party monitoring and evaluation services to a range of international development agencies, including the World Bank, EU, DFID, FCO, UN, and other international and local NGOs. Our team has also worked on providing detailed economic analysis for international and national organizations that has informed them on the design and development of economic growth programs.</p>",
  },
  {
   icon: "carbon:data-analytics",
   title: "Formative Research and Policy Advisory Services",
   fullTitle: "Formative Research and Policy Advisory Services",
   subtitle:
    "Formative Research and Policy Advisory Services to inform programming and policy development.",
   about:
    "<p>Dansom has built one of the most extensive and effective networks of multi-disciplinary researchers working in Somalia and has delivered formative baseline assessments on strategically themed areas to support the international community and the Somali government in designing appropriate programmes in newly recovered areas and emerging sectors of interest. Our research services combine in-depth qualitative assessments and quantitative surveys to ensure with systematic ground-truthing and triangulation of information to ensure only the highest quality of data is taken into account for the analysis and programme design phases.</p><p>Our specialized consultants represent a diversity of fields with expertise in law, economics, financial management, public policy, security advice and many other areas.</p>",
  },
 ]

 const requestedService = decodeURIComponent(String(route.params.slug || ""))
 const service = services.find((item) => item.title === requestedService)

 if (!service) {
  throw createError({ statusCode: 404, statusMessage: "Service not found" })
 }

 useSeoMeta({
  title: () => service.fullTitle,
  description: () => service.subtitle,
  ogTitle: () => `${service.fullTitle} | Dansom Research & Consultancy`,
  ogDescription: () => service.subtitle,
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })
</script>
