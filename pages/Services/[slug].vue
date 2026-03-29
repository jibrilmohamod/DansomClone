<template>
 <div class="min-h-screen text-slate-900">
  <TheHeader :projTitle="slug">
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

  <div class="container m-auto px-6 py-14">
   <div class="grid gap-8 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200 ring-1 ring-slate-200 md:grid-cols-3">
    <div class="flex items-center justify-center rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
     <Icon :name="service.icon" class="text-primary h-20 w-20" />
    </div>
    <div class="md:col-span-2 space-y-4">
     <h5 class="font-DM text-3xl md:text-4xl font-bold">{{ service.fullTitle }}</h5>
     <p class="font-Zilla text-slate-700 text-lg leading-relaxed">{{ service.subtitle }}</p>
     <div class="prose prose-slate max-w-none" v-html="service.about"></div>
    </div>
   </div>
  </div>
 </div>
</template>

<script lang="ts" setup>
 const route = useRoute()
 const slug = ref(route.params.slug)
const service = ref(null)

 const services = [
  {
   icon: "arcticons:adobe-analytics",
   title: "Political Economy Analysis",
   fullTitle: "Political Economy Analysis and Security Advisory",
   subtitle:
    "Political Economy Analysis (PEA) in Somalia to inform programming and policy development.",
   about:
    "<p>Dansom has developed a unique expertise in providing international development agencies such as the World Bank, EU, DFID, FCO and the UN with in-depth political economy analysis, economic growth and security advisory services in the Somali and broader East-African context. The firm has experience in collecting up-to-date, triangulated information on the ground, analysing local networks and power structures, and in designing effective strategies to guarantee access to civil society actors and strategic stakeholders in insecure and non-permissive areas.</p><p>Dansom also provides security risk analysis, management planning and on-going advisory services to international organisations that aim to deliver impact in some of the most volatile environments in the region.</p><p>Dansom has also worked on providing detailed economic analysis for international and national organizations that has informed them on the design and development of economic growth programs. Dansom has an extensive network of private sector actors as well as government stakeholders. Additionally, the firm has, through various other projects expanded its working relationship with numerous civil society organizations and NGO’s across Somalia.</p>",
  },
  {
   icon: "carbon:data-analytics",
   title: "Third Party Monitoring and Evaluation",
   fullTitle: "Third Party Monitoring and Performance Evaluation",
   subtitle:
    "Third Party Monitoring and Evaluation (TPME) of humanitarian and development projects in Somalia.",
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

service.value =
 services.find((item) => item.title === slug.value) || services[0]
</script>
