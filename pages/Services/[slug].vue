<template>
 <div>
  <TheHeader :projTitle="service.fullTitle">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="eager"
     format="webp"
     alt="Dansom research team working in the Horn of Africa"
     sizes="sm:100vw md:50vw lg:760px"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="h-full w-full object-cover"
    />
   </template>
  </TheHeader>

  <main class="py-16 md:py-24">
   <div class="shell grid gap-10 lg:grid-cols-12">
    <aside class="lg:col-span-4">
     <div class="surface-soft lg:sticky lg:top-28">
      <div class="flex min-h-52 items-center justify-center border-b border-mist/10 p-8">
       <Icon :name="service.icon" class="h-24 w-24 text-primary" />
      </div>
      <dl class="grid gap-6 p-6 text-sm">
       <div>
        <dt class="font-semibold text-mist">Delivery model</dt>
        <dd class="mt-2 leading-relaxed text-mist/[0.55]">Mixed-method research with local field teams</dd>
       </div>
       <div>
        <dt class="font-semibold text-mist">Coverage</dt>
        <dd class="mt-2 text-mist/[0.55]">Somalia and Kenya</dd>
       </div>
      </dl>
     </div>
    </aside>

    <article class="lg:col-span-7 lg:col-start-6">
     <p class="text-sm font-semibold text-primary">{{ service.title }}</p>
     <h2 class="display-title mt-4 text-4xl leading-tight md:text-5xl">{{ service.fullTitle }}</h2>
     <p class="mt-5 text-lg leading-relaxed text-mist/[0.65]">{{ service.subtitle }}</p>
     <div class="service-body mt-10 space-y-6 text-base leading-8 text-mist/[0.65]" v-html="service.about"></div>
     <NuxtLink to="/Contact" class="button-primary mt-10">Contact <Icon name="mdi:arrow-right" /></NuxtLink>
    </article>
   </div>
  </main>
 </div>
</template>

<style>
.service-body p + p {
 margin-top: 1.5rem;
}
</style>

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
  {
   icon: "mdi:account-group",
   title: "Socio-Political and Economic Development",
   fullTitle: "Socio-Political and Economic Development",
   subtitle: "Research and advisory support for governance, economic growth, and community resilience.",
   about:
    "<p>Dansom delivers socio-political and economic research grounded in local context and direct regional access. The work helps partners understand governance dynamics, economic conditions, community priorities, and the risks that shape programme delivery.</p><p>Our multidisciplinary teams combine qualitative and quantitative methods to turn complex findings into practical recommendations for policy, programme design, and implementation.</p>",
  },
  {
   icon: "mdi:security",
   title: "Security and Access Advisory",
   fullTitle: "Security and Access Advisory",
   subtitle: "Risk analysis and access strategies for programmes operating in complex environments.",
   about:
    "<p>Dansom supports organisations with contextual risk assessments, access strategies, and operational advice for work in hard-to-reach and non-permissive areas. Our local networks help partners understand changing conditions and plan responsible field activity.</p><p>Advisory support is tailored to programme objectives, stakeholder needs, and the realities of each operating location.</p>",
  },
  {
   icon: "mdi:file-document-edit",
   title: "Research and Knowledge Management",
   fullTitle: "Research and Knowledge Management",
   subtitle: "Knowledge products, learning agendas, and evidence synthesis for adaptive programmes.",
   about:
    "<p>Dansom designs and delivers research that helps partners capture, organise, and apply knowledge. This includes learning agendas, evidence reviews, analytical reports, and products designed for operational and policy audiences.</p><p>We translate technical findings into clear, usable outputs that support reflection, adaptation, and institutional learning.</p>",
  },
  {
   icon: "mdi:clipboard-list",
   title: "Monitoring and Performance Evaluation",
   fullTitle: "Monitoring and Performance Evaluation",
   subtitle: "MEL systems, performance tracking, and data quality assurance tailored to partner needs.",
   about:
    "<p>Dansom supports monitoring and performance evaluation across programme cycles. Our teams develop practical frameworks, indicators, collection tools, and quality assurance processes suited to the operating context.</p><p>We combine field verification with structured analysis so partners can track performance, identify risks, and make timely improvements.</p>",
  },
  {
   icon: "mdi:account-voice",
   title: "Community Engagement & Inclusion",
   fullTitle: "Community Engagement and Inclusion",
   subtitle: "Meaningful participation of communities, women, and minority groups across programme cycles.",
   about:
    "<p>Dansom designs engagement approaches that bring community knowledge and lived experience into research and programme decisions. We help partners create safe, inclusive processes for participation, feedback, and accountability.</p><p>Our teams adapt methods to local language, culture, access conditions, and the needs of groups that are often underrepresented.</p>",
  },
  {
   icon: "ph:chart-line-up",
   title: "Economic Growth & Market Systems",
   fullTitle: "Economic Growth and Market Systems",
   subtitle: "Market analysis and growth strategies connecting public, private, and community stakeholders.",
   about:
    "<p>Dansom provides market and economic analysis that helps partners understand constraints, incentives, and opportunities across local systems. The work combines field evidence with stakeholder insight from businesses, government, and communities.</p><p>Findings inform practical strategies for livelihoods, private-sector engagement, resilience, and inclusive growth.</p>",
  },
  {
   icon: "mdi:security",
   title: "Security & Access Advisory",
   fullTitle: "Security and Access Advisory",
   subtitle: "Risk analysis, access strategies, and secure field operations in fragile contexts.",
   about:
    "<p>Dansom supports organisations with contextual risk assessments, access strategies, and operational advice for work in hard-to-reach and non-permissive areas. Our local networks help partners understand changing conditions and plan responsible field activity.</p><p>Advisory support is tailored to programme objectives, stakeholder needs, and the realities of each operating location.</p>",
  },
  {
   icon: "mdi:chart-bell-curve",
   title: "Program Design & Learning",
   fullTitle: "Program Design and Learning",
   subtitle: "Evidence-backed design support, MEL frameworks, and adaptive learning systems.",
   about:
    "<p>Dansom helps partners apply evidence throughout programme design and delivery. We support theories of change, results frameworks, learning questions, review processes, and practical mechanisms for adaptation.</p><p>The approach connects field evidence with programme decisions so teams can learn, respond, and improve in complex environments.</p>",
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
