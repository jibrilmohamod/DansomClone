<template>
 <div class="min-h-screen text-slate-900">
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

  <section class="container m-auto space-y-6 px-4 py-10 md:space-y-10 md:px-6 md:py-16">
   <OurExpertise
    title="Our Portfolio"
    subtitle="Explore how Dansom delivers transparency, accountability, and evidence-backed recommendations across the Horn of Africa."
   />

   <div class="rounded-none border-0 bg-transparent p-0 shadow-none md:dansom-card md:p-6">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
     <div class="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-4">
      <input
       type="text"
       v-model="searchTerm"
       placeholder="Search projects"
       class="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm placeholder:text-slate-500 focus:border-primary focus:outline-none md:w-1/2 md:rounded-xl md:px-4 md:py-3"
      />
      <div class="flex items-center gap-2 text-sm font-semibold text-primary md:gap-3">
       <p class="text-xs text-slate-700 md:text-sm">Filter by:</p>
       <select
        v-model="classification"
        class="rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-2 text-xs focus:border-primary focus:outline-none md:rounded-xl md:px-3 md:text-sm"
       >
        <option value="All">All</option>
        <option value="Third Party Monitoring & Evaluation">Third Party Monitoring & Evaluation</option>
        <option value="Political Economy Analysis & Security Advisory">Political Economy Analysis & Security Advisory</option>
        <option value="Formative Research & Policy Analysis">Formative Research & Policy Analysis</option>
        <option value="Independent Evaluation">Independent Evaluation</option>
        <option value="Operational & Logistics Management">Operational & Logistics Management</option>
        <option value="Organizational Capacity Building & Human Resource Management">Organizational Capacity Building</option>
       </select>
      </div>
     </div>
    </div>

    <div class="mt-5 grid gap-3 md:mt-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
     <ProjectCard
      v-for="project in filteredProjects"
      :key="project.title"
      :title="project.title"
      :icon="project.icon"
      :slug="getProjectPath(project)"
     />
    </div>

    <div class="mt-4 flex justify-center md:mt-6" v-if="displayedProjects.length < projects.length">
     <Button
      @click="loadMore()"
      class="my-2 w-44 bg-primary py-2.5 font-Zilla text-base text-white transition-all hover:bg-quaternary hover:duration-200 hover:ease-linear md:my-3 md:w-48 md:py-3 md:text-lg"
     >
      Load More
     </Button>
    </div>
   </div>
  </section>
 </div>
</template>

<script lang="ts" setup>
 import Button from "~/components/ui/button/Button.vue"

 useSeoMeta({
  title: "Portfolio",
  description:
   "Explore Dansom Research & Consultancy's portfolio of monitoring, evaluation, research, logistics, and advisory projects for partners across Somalia and the Horn of Africa.",
  ogTitle: "Portfolio | Dansom Research & Consultancy",
  ogDescription:
   "Browse Dansom's project work with development, humanitarian, donor, and institutional partners across Somalia and the Horn of Africa.",
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })

 let projects = ref([
  {
   title: "IFC Hargeisa and Mogadishu Training Support",
   classification: "Operational & Logistics Management",
   description:
    "Dansom is providing various services to the IFC as part of this project, including organising workshops in both Hargeisa and Mogadishu for the project and providing field support during the trainings including meeting minutes.",
   Location: "Hargeisa and Mogadishu",
   timeframes: "May 2025 - November 2025",
   icon: "International_Finance_Corporation_logo.svg.png",
  },
  {
   title: "Independent Evaluation of Teacher Training Centers",
   classification: "Independent Evaluation",
   description:
    "The overall objective of this project was to conduct an independent assessment of the Teacher Training Centers (TTCs) and the teacher training program implemented under the SEHCDP. The assessment reviews governance, funding, human resource policies, coordination mechanisms, and training outcomes for 2,600 selected teachers, including interviews on subject-matter and pedagogical competencies of the Trainers of Teachers engaged by the TTCs.",
   Location: "Somalia",
   timeframes: "July 2025 - September 2025",
   icon: "The_World_Bank_logo.svg",
  },
  {
   title: "Global Education Policy Dashboard Somalia",
   classification: "Formative Research & Policy Analysis",
   description:
    "A consortium led by Dansom, in partnership with Particip, was implementing the Global Education Policy Dashboard (GEPD) project in Somalia, providing formative research and policy advisory services to support the World Bank in assessing education policies, regional capacities, and learning outcomes.",
   Location: "Somalia",
   timeframes: "July 2024 - October 2025",
   icon: "The_World_Bank_logo.svg",
  },
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
    title: "WFP Programme Monitoring, Learning and Evaluation Support",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "A consortium comprising Dansom and Particip implemented a Third-Party Monitoring project to support WFP’s Programme Monitoring, Learning and Evaluation functions, providing coordinated field monitoring, reporting, and assessments for food assistance and cash-based transfer activities.",
    Location: "Somalia",
    timeframes: "April 2025 - June 2026",
    icon: "wfpfao.png",
    Ngo: "WFP",
  },
    {
    title: "Framework for Risk Governance and Adaptive Programming",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "The assignment supports improvement of the Swiss Horn of Africa programme through the Framework for Risk Governance and Adaptive Programming, initially focusing on Somalia including Somaliland over a twelve-year timeframe.",
    Location: "Somalia",
    timeframes: "June 2021 - June 2024",
    icon: "2560px-Logo_der_Schweizerischen_Eidgenossenschaft.svg.png",
    Ngo: "SDC",
  },
  {
    title: "Technical Assistance on Reorganization and Modernization of MDAs",
    classification: "Formative Research & Policy Advisory",
    description:
      "The project provided technical assistance to support a diagnostic assessment of the organisational setup of MDAs, focusing on mandates, functions, organisational structures, staffing requirements, and administrative policies, processes, and systems.",
    Location: "Somalia",
    timeframes: "December 2020 - September 2021",
    icon: "Untitled design (1).png",
    Ngo: "Government of Somalia",
  },
  {
    title: "Somali Reintegration Programme Third Party Monitoring",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "The project supported third party monitoring of the Somali Reintegration Programme, which aimed to assist returnees, IDPs, and host community members in Kismayo to establish and secure sustainable livelihoods through a community-based approach.",
    Location: "Kismayo, Somalia",
    timeframes: "August 2021 - July 2022",
    icon: "giz-400x173.jpg",
    Ngo: "GIZ",
  },
  {
    title: "Third Party Monitoring of EU-Funded Projects Across Somalia",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "A consortium comprising Dansom, Particip, and partners facilitated third party monitoring and evaluation of EU-funded projects across Somalia, covering education, resilience, infrastructure, WASH, social policy, health, communication for development, peacebuilding, democratization, public sector development, and livelihoods.",
    Location: "Somalia",
    timeframes: "December 2021 - December 2023",
    icon: "EU.jpg",
    Ngo: "EU",
  },
  {
    title: "Third Party Monitoring Services for the Joint Police Programme",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "Dansom provided regular and independent analysis and assessments of the Joint Police Programme in Somalia through quantitative and qualitative methodologies, including routine monitoring, baseline survey, annual perception survey, sociopolitical analysis, and efficiency measurement.",
    Location: "Somalia",
    timeframes: "December 2018 - December 2023",
    icon: "unops.jpg",
    Ngo: "UNOPS",
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
    title: "EU-Funded Somalia Projects Monitoring Programme",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "A consortium comprising Dansom, Particip, and Axiom facilitated third party monitoring and evaluation of EU-funded projects across all regions and districts of Somalia, covering multiple programming areas including education, resilience, infrastructure, WASH, social policy, health, peacebuilding, democratization, public sector development, and livelihoods.",
    Location: "Somalia",
    timeframes: "November 2022 - May 2023",
    icon: "EU.jpg",
    Ngo: "EU",
  },
  {
    title: "Somalia Capacity Injection Project Pay and Grading Reform",
    classification: "Formative Research & Policy Advisory",
    description:
      "A consortium comprising Dansom and Particip facilitated field work and diagnostic analysis of public sector pay and grading trends and living standards in Somalia, proposing solutions to improve civil service incentives, public resource management, and alignment of the government wage bill with national strategies.",
    Location: "Somalia",
    timeframes: "November 2022 - May 2023",
    icon: "Untitled design.png",
    Ngo: "World Bank",
  },
  {
    title: "Somalia Maritime Security Actors Mapping",
    classification: "Political Economy Analysis & Security Advisory",
    description:
      "A consortium of IDC, Hoplite, and Dansom carried out Somalia Maritime Security Actors Mapping to support understanding of maritime security stakeholders and dynamics.",
    Location: "Somalia",
    timeframes: "May 2018 - August 2018",
    icon: "ifc.png",
    Ngo: "IDC / Hoplite",
  },
  {
    title: "Final Evaluation of the SCOPES Project",
    classification: "Formative Research & Policy Advisory",
    description:
      "Dansom supported the final evaluation of the Strengthening Civil Society and Public Engagement in Somalia project, assessing performance and achievements against overall and specific objectives and identifying factors of success or failure using OECD DAC Evaluation Criteria.",
    Location: "Somalia",
    timeframes: "December 2015 - July 2016",
    icon: "EU.jpg",
    Ngo: "SCOPES",
  },
  {
    title: "Third Party Monitoring and Evaluation of EU Somalia Projects",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "A consortium of Particip, Axiom, and Dansom implemented a third party monitoring and evaluation programme covering EU-funded Somalia projects.",
    Location: "Somalia",
    timeframes: "July 2016 - April 2018",
    icon: "EU.jpg",
    Ngo: "EU",
  },
  {
    title: "Somalia Emergency Drought Response and Recovery Project Technical Review",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "Dansom conducted a third party technical review to assess implementation and impact of the Somalia Emergency Drought Response and Recovery Project across Somaliland, Puntland, Jubaland, South-West State, HirShabelle, and Galmudug.",
    Location: "Somalia",
    timeframes: "December 2017 - December 2018",
    icon: "FAO_logo.svg",
    Ngo: "FAO",
  },
  {
    title: "World Bank Microeconomic and Fiscal Management Programme Event Support",
    classification: "Operational & Logistics Management",
    description:
      "Dansom partnered with the World Bank Group to facilitate event management for the Microeconomic and Fiscal Management Programme implemented by the World Bank Group.",
    Location: "Somalia",
    timeframes: "September 2016 - December 2016",
    icon: "The_World_Bank_logo.svg",
    Ngo: "World Bank",
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
   icon: "International_Finance_Corporation_logo.svg.png",
  },
  {
   title: "Somalia Monitoring Programme (SMP)",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "Final Evaluation of Horumarinta Elmiga II(Education for Empowerment through Cohesive and Harmonized System) was funded by the European Union and implemented by Save the Children as the lead agency, Care International and Norwegian Refugees Council (NRC), in partnership with the MOEHS of Somaliland.",
   Location: "Somaliland",
   timeframes: "September 2018 - November 2018",
   icon: "He-1.png",
  },
  {
   title: "CARE International",
   classification: "Political Economy Analysis & Security Advisory",
   description:
    "Final Evaluation of the ‘Strengthening Civil Society and Public Engagement in Somalia’ (SCOPES) project to assess the project’s performance and achievements against the overall and specific objectives and to identify factors of success or failure, following the OECD DAC Evaluation Criteria.",
   Location: "Somalia",
   icon: "CARE_Logo_Orange.png",
  },
  {
   title: "Improved Food Security and Enhanced Resilience Programme",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "Third Party Monitoring Programme for WFP Djibouti Somalia Country Office and FAO Technical Support to the Resilience Programme in Jijiga, Ethiopia (in consortium with Altai Consulting for WFP). Field monitoring of select projects in Somalia for WFP and FAO, ensuring timely field visits to project sites and high quality information is collected and analyzed to improve the quality of program implementation.",
   Location: "Somalia",
   timeframes: "December 2015 - January 2017",
   classification2: "Formative Research & Policy Analysis",
   description2:
    "Consortium of INTEGRITY, AXIOM and Dansom implemented an Accountability Research on accountability mechanisms along the supply chains of sesame and sugar in the context of Kismayo, Somalia. DFID / Mott Mc Donalds – Implementation and Analysis in Action of Accountability Programme (IAAAP) in Somalia.",
   icon: "DFID-400x162.png",
  },
  {
   title: "ICF International",
   classification: "Organizational Capacity Building & Human Resource Management",
   description:
    "Incorporated Dansom alongside other firms in its bidding consortium for Multi-stakeholder Value Chain Analysis & Baseline Study",
   Location: "Somalia",
   timeframes: "January 2018 - April 2020",
   icon: "dansom-logo.png",
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
   icon: "download (1).png",
  },
  {
   title: "Somalia Monitoring Programme (SMP)",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "Political Economy Analysis: Puntland & South Central Somalia (In consortium with Itad, Altai Consulting and GTZ for DFID). Somalia monitoring Programme (SMP) is a Third Party Monitoring Programme contracted by DFID with the aim of enhancing the accountability of the British Government’s investments in Somalia (GBP 250m over four years)",
   Location: "Somalia",
   timeframes: "2014 - 2015",
   icon: "DFID-400x162.png",
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

 const getProjectPath = (project: { title: string; description: string; icon: string }) => {
  const projectIndex = projects.value.findIndex(
   (item) =>
    item.title === project.title &&
    item.description === project.description &&
    item.icon === project.icon,
  )

  return `/Portfolio/${projectIndex}-${encodeURIComponent(project.title)}`
 }
</script>
