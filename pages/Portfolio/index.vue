<template>
 <div class="relative min-h-screen overflow-hidden text-slate-900">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_16%,rgba(80,174,211,0.15),transparent_30%),radial-gradient(circle_at_88%_8%,rgba(191,217,98,0.14),transparent_30%)]"></div>
  <div class="relative">
  <TheHeader title="Our Portfolio">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="Portfolio banner"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="w-full h-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <section class="container m-auto px-6 py-16 space-y-10">
   <OurExpertise
    title="Our Portfolio"
    subtitle="Explore how Dansom delivers transparency, accountability, and evidence-backed recommendations across the Horn of Africa."
   />

   <div class="dansom-card p-6">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
     <div class="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-4">
      <input
       type="text"
       v-model="searchTerm"
       placeholder="Search projects"
       class="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm placeholder:text-slate-500 focus:border-primary focus:outline-none md:w-1/2"
      />
      <div class="flex items-center gap-3 text-sm font-semibold text-primary">
       <p class="text-slate-700">Filter by:</p>
       <select
        v-model="classification"
        class="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm focus:border-primary focus:outline-none"
       >
        <option value="All">All</option>
        <option value="Third Party Monitoring & Evaluation">Third Party Monitoring & Evaluation</option>
        <option value="Political Economy Analysis & Security Advisory">Political Economy Analysis & Security Advisory</option>
        <option value="Formative Research & Policy Analysis">Formative Research & Policy Analysis</option>
        <option value="Organizational Capacity Building & Human Resource Management">Organizational Capacity Building</option>
       </select>
      </div>
     </div>
    </div>

    <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
     <ProjectCard
      v-for="project in filteredProjects"
      :key="project.title"
      :title="project.title"
      :icon="project.icon"
      :slug="`/Portfolio/${project.title}`"
     />
    </div>

    <div class="mt-6 flex justify-center" v-if="displayedProjects.length < projects.length">
     <Button
      @click="loadMore()"
      class="bg-primary my-3 w-48 text-lg py-3 hover:bg-quaternary hover:duration-200 transition-all hover:ease-linear font-Zilla text-white"
     >
      Load More
     </Button>
    </div>
   </div>
  </section>
  </div>
 </div>
</template>

<script lang="ts" setup>
 import Button from "~/components/ui/button/Button.vue"
 let projects = ref([
  {
   title:
    "The Provision of Monitoring and Evaluation Services in support of UNSOS(Somalia)",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "A consortium comprising of DANSOM and Partcip are facilitating the provision of monitoring and evaluation services in support to unsos throughout Somalia.",
   Location: "Somalia",
   timeframes: "December 2020 - present",
   icon: "Capture1.PNG-removebg-preview.png",
   Ngo: "UNSOS",
  },
  {
   title: "Swiss Agency for Development and Cooperation (SDC)",
   classification: "Classification",
   description:
    "The current objective is to improve the performance of the Swiss HoA programme. This overall work to improve the programme is called the “Framework for Risk Gover- nance and Adaptive Programming” (FRAP). It will be implemented over a twelve year timeframe. FRAP will initially focus on Soma- lia (including Somaliland).",
   Location: "Somalia",
   timeframes: "June 2021 - December 2024",
   icon: "2560px-Logo_der_Schweizerischen_Eidgenossenschaft.svg.png",

   Ngo: "SDC",
  },
  {
   title: "EU Delegation to Somalia (EUD-Somalia)",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "The European Union Delegation to Somalia (EUD-Somalia) has contracted Dansom Consultancy to provide Third Party Monitoring and Evaluation services in support of the EU’s development cooperation in Somalia.",
   Location: "Somalia",
   timeframes: "July 2016 - April 2018",
   icon: "EU.jpg",
   Ngo: "EU",
   classification2: "Political Economy Analysis & Security Advisory",
   description2:
    "Consortium of IDC, Hoplite and Dansom carried out Somalia Maritime Security Actors Mapping.",
   timeframes2: "December 2015 - July 2016  ",
  },
  {
   title: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
   classification: "Political Economy Analysis & Security Advisory",
   description:
    " Consortium of CMC & Dansom consultancy conducted a peace and conflict assessment (PCA) in Kismayo, Somalia for the Somali Reintegration Programme (GIZ SRP) and Fish for Nutrition project (GIZ FNP)",
   Location: "Somalia",
   timeframes: "August 2017 - January 2018",
   icon: "giz-400x173.jpg",
   Ngo: "GIZ",
  },
  {
   title: "Somalia Capacity Injection Project Pay and Grading Reform",
   classification: "Formative Research & Policy Analysis",
   description:
    "The objective of the assignment is to carry out a combination of field work and diagnostic analysis of public sector pay and grading trends and living standard assessment in Somalia and propose solutions that will provide adequate incentive for improved performance of civil Servants and also enable efficient and effective management of public government’s wage bill as aligned to nation-al strategies and development aspirations to promote sustainable growth.",
   Location: "Somalia",
   timeframes: "September 2019 - March 2020",
   icon: "Untitled design.png",
   Ngo: "World Bank",
  },
  {
   title: "Technical Assistance on Reorganization & Modernization of MDA’s",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "provide technical assistance to support a diagnostic assessment of the organizational set up of MDAs focusing on their mandates, functions, and organizational structures, staffing requirements and administrative policies, processes and systems",
   Location: "Somalia",
   timeframes: "December 2020 - September 2021",
   icon: "Untitled design (1).png",
  },
  {
   title: "United Nations Office for Project Services (UNOPS)",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "Provide regular and independent analysis and assessments of the JPP in Somalia through quantitative and qualitative methodologies to undertake routine monitoring, baseline survey, annual perception survey, socio-political analysis, and measure efficiency.",
   Location: "Somalia",
   timeframes: "December 2019 - December 2023",
   icon: "unops.jpg",
  },
  {
   title: "World Food Programme",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "Research and evaluation services for supporting resilient small holder farming systems in Somalia.We are expected to provide an independent perspective and expand into areas sometimes inaccessible to WFP/FAO staff due to security reasons.",
   Location: "Somalia",
   timeframes: "November 2022 - May 2024",
   icon: "wfpfao.png",
  },
  {
   title:
    "The Ministry of Planning, Investment and Economic Development for the Federal Republic of Somalia",
   classification:
    "Organizational Capacity Building & Human Resource Management",
   description:
    "Consortium of Dansom and PARTICIP are implementing the Somalia National Statistical Capacity Building Project. The project seeks to build the capacity of the National Directorate for Statistics of the Federal Ministry of International Cooperation (FMoPIC) and Statistics Departments of Puntland Ministry of Planning and International Cooperation (PLMoPIC) and Southwest Administration Ministry of Planning and International Cooperation (SWAMoPIC) to enable these institutions to effectively conduct, supervise and coordinate the statistical activities in the areas under their jurisdiction.",
   Location: "Somalia",
   timeframes: "February 2018 - August 2019",
   icon: "ministry-of-planning-400x162.png",
  },
  {
   title: "The Food and Agriculture Organization of the United Nations (FAO)",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "Third party Technical Review to assess implementation and impact of the Somalia Emergency Drought Response and Recovery Project(SEDRP) in all regions in Somalia; Somaliland, Puntland, Jubaland, South-West State, HirShabelle and Galmudug.",
   Location: "Somalia",
   timeframes: "December 2017 - December 2018",
   icon: "FAO_logo.svg",
  },
  {
   title: "The World Bank Group",
   classification: "Operational & Logistics Management",
   description:
    "Dansom partnered with the World Bank Group to facilitate the event management of the Microeconomic and Fiscal Management Program Implemented by the World Bank Group.",
   Location: "Somalia",
   timeframes: "September 2016 - December 2016",
   classification2: "Operational & Logistics Management",
   description2:
    "World Bank – Somalia High Frequency Survey. Dansom facilitated cooperation between the government of Somalia and The SHFS team (Altai and World Bank).",
   icon: "The_World_Bank_logo.svg",
  },
  {
   title: "Somalia Invest Climate Reform Program, IFC-World Bank",
   classification: "Political Economy Analysis & Security Advisory",
   description:
    "Undertaking a political economy analysis of business licensing with a focus on the federal licensing structure and permit system. The assignment aims to understand the relationships and dynamics among various actors involved in the design, implementation, and administration of business licensing, including line Ministries and public institutions, international donors, national-level business associations, and newly formed Business Membership Organizations, with a focus on licensing actors in Jubaland, Puntland and Benadir Administration.",
   Location: "Somalia",
   timeframes: "December 2015 - May 2016",
   icon: "ifc.png",
  },
  {
   title: "ICF International",
   classification: "Organizational Capacity Building & Human Resource Management",
   description:
    "Incorporated Dansom alongside other firms in its bidding consortium for Multi-stakeholder Value Chain Analysis & Baseline Study",
   Location: "Somalia",
   timeframes: "January 2018 - April 2020",
   icon: "ICF.png",
  },
  {
   title:
    "The Ministry of Planning, Investment and Economic Development for the Federal Republic of Somalia",
   classification: "Organizational Capacity Building & Human Resource Management",
   description:
    "Consortium of Dansom and PARTICIP are implementing the Somalia National Statistical Capacity Building Project. The project seeks to build the capacity of the National Directorate for Statistics of the Federal Ministry of International Cooperation (FMoPIC) and Statistics Departments of Puntland Ministry of Planning and International Cooperation (PLMoPIC) and Southwest Administration Ministry of Planning and International Cooperation (SWAMoPIC) to enable these institutions to effectively conduct, supervise and coordinate the statistical activities in the areas under their jurisdiction.",
   Location: "Somalia",
   timeframes: "February 2018 - August 2019",
   icon: "ministry-of-planning-400x162.png",
  },
  {
   title: "African Development Bank (AfDB)",
   classification: "Operational & Logistics Management",
   description:
    "Dansom provided assistance to the AfDB during the 2nd National Steering Committee Meeting and was responsible for all logistics and operations",
   Location: "Somalia",
   timeframes: "February 2018 - March 2018",
   icon: "afdb.jpg",
  },
  {
   title: "Somalia Monitoring Programme (SMP)",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "Political Economy Analysis: Puntland & South Central Somalia (In consortium with Itad, Altai Consulting and GTZ for DFID). Somalia monitoring Programme (SMP) is a Third Party Monitoring Programme contracted by DFID with the aim of enhancing the accountability of the British Government’s investments in Somalia (GBP 250m over four years)",
   Location: "Somalia",
   timeframes: "2014 - 2015",
   icon: "UKaid_logo.png",
  },
  {
   title: "Improved Food Security and Enhanced Resilience Programme",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "Third Party Monitoring Programme for WFP Djibouti Somalia Country Office and FAO Technical Support to the Resilience Programme in Jijiga, Ethiopia (in consortium with Altai Consulting for WFP). Field monitoring of select projects in Somalia for WFP and FAO, ensuring timely field visits to project sites and high quality information is collected and analyzed to improve the quality of program implementation.",
   Location: "Somalia",
   timeframes: "2014 - 2015",
   icon: "wfpfao.png",
  },
 ])

 const searchTerm = ref("")
 const classification = ref("All")
 const displayedProjects = ref(projects.value.slice(0, 9))

 const filteredProjects = computed(() => {
  const search = searchTerm.value.toLowerCase()
  return displayedProjects.value.filter((project) => {
   const matchesSearch = project.title.toLowerCase().includes(search)
   const matchesClassification =
    classification.value === "All" ||
    project.classification === classification.value ||
    project.classification2 === classification.value

   return matchesSearch && matchesClassification
  })
 })

 const loadMore = () => {
  displayedProjects.value = projects.value.slice(
   0,
   displayedProjects.value.length + 6
  )
 }
</script>
