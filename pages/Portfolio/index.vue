<template>
 <div>
  <TheHeader title="Our Portfolio">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="image"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="w-full h-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <!-- page intro -->
  <OurExpertise
   title="Our Portfolio"
   subtitle="Dansom Consultancy isn't just about expertise – it's about impact. We leverage our unique access and understanding of the Horn of Africa to deliver transformative results for our clients.  We've undertaken a wide range of projects focused on strengthening security and socio-political development across the region. These projects include providing monitoring and evaluation services for organizations like the United Nations Support Office in Somalia (UNSOS) and the European Union Delegation to Somalia, ensuring transparency and accountability in critical development efforts"
  />

  <!-- projects -->
  <div class="bg-tertiary container m-auto pb-5">
   <OurExpertise title="Our Projects" />
   <div class="">
    <!-- search and filter bar -->
    <div class="flex justify-between items-center gap-5 py-5 z-50 px-5">
     <input
      type="text"
      v-model="searchTerm"
      placeholder="Search Projects"
      class="border-2 border-slate-300 rounded-md px-3 py-2 w-1/2"
     />
     <div class="flex items-center gap-5">
      <p class="text-white">Filter by:</p>
      <select
       v-model="classification"
       class="border-2 border-slate-300 rounded-md px-3 py-2"
      >
       <option value="All">All</option>
       <option value="Third Party Monitoring & Evaluation">
        Third Party Monitoring & Evaluation
       </option>

       <option value="Political Economy Analysis & Security Advisory">
        Political Economy Analysis & Security Advisory
       </option>
       <option value="Formative Research & Policy Analysis">
        Formative Research & Policy Analysis
       </option>
      </select>
     </div>
    </div>
   </div>
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-5">
    <ProjectCard
     v-for="project in filteredProjects"
     :key="project.title"
     :title="project.title"
     :icon="project.icon"
     :slug="`/portfolio/${project.title}`"
    />
    <Button
     v-if="displayedProjects.length < projects.length"
     @click="loadMore()"
     class="bg-primary my-3 w-1/2 text-lg py-5 hover:bg-quaternary hover:duration-200 transition-all hover:ease-linear font-Zilla"
    >
     Load More
    </Button>
   </div>
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
    " Consortium of CMC & Dansom consultancy conducted a peace and conflict assessment (PCA) in Kismayo, Somalia for the Somali Re integration Programme (GIZ SRP) and Fish for Nutrition project (GIZ FNP)",
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
   classification: "Operational & Logistics Management",
   description:
    "DANSOM is providing various services to IFC as part of this project, including the provision of qualified consultants, arranging consultant travel, organizing logistics, managing payments of fees and expenses related to the contract, and obtaining prior approval from the IFC project manager for any relevant subcontracting arrangements.",
   Location: "Somalia",
   timeframes: "March 2017 - December 2018",
   classification2: "Operational & Logistics Management",
   description2:
    "Dansom has partnered with IFC, World Bank Group to facilitate and support Public Private Dialogue in Somalia’s economic recovery sector. The recent support being to the Telecommunication sector and providing strategic advice in moving the National Communication Act towards submission and approval by the National Federal Parliament. Dansom also gives advice to IFC-World Bank on Somalia context, political economic analysis and Business development.",
   icon: "International_Finance_Corporation_logo.svg.png",
  },
  {
   title: "Horumarinta Elmiga II-Save the Children",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "Final Evaluation of Horumarinta Elmiga II(Education for Empowerment through Cohesive and Harmonized System) was funded by the European Union and  implemented by Save the Children  as the lead agency ,Care International and Norwegian Refugees Council (NRC), in partnership with the MOEHS of Somaliland.",
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
   icon: "care-social-image-400x210.jpg",
  },
  {
   title: "Solidarites International",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "External Evaluation of the Emergency response to disaster affected population of IDPs and host community Implemented by Solidarites International in Lower Juba.",
   Location: "Lower Juba, Somalia",
   timeframes: "May 2016 - July 2016",
   classification2: "Political Economy Analysis & Security Advisory",
   description2:
    "Consultancy Conflict Mediation and Resolution for ensuring the release of Solidarites International’s staff that were arrested by Armed Group in Gedo, Somalia.",
   icon: "solidarites.jpg",
  },
  {
   title: "ACTED",
   classification: "Political Economy Analysis & Security Advisory",
   description: "Security Advisory on Need Basis for Jubbaland, Somalia.",
   Location: "Jubbaland, Somalia",
   timeframes: "January 2016 - December 2017",
   classification2: "Political Economy Analysis & Security Advisory",
   description2:
    "Consultancy Conflict Mediation and Resolution for the release of ACTED’s staff that were arrested by Local Authority in Jubaland, Somalia.",
   icon: "Acted_logo_2023.png",
  },
  {
   title:
    "DFID / Mott MacDonalds - Implementation & Analysis in Action for Accountability Project",
   classification: "Formative Research & Policy Analysis",
   description:
    "Consortium of ALTAI and Dansom implemented an Accountability Perception Survey in Somalia. DFID / Mott McDonalds – Implementation and Analysis in Action for Accountability Programme (IAAAP) in Somalia.",
   Location: "Somalia",
   timeframes: " December 2015 -January 2017 ",
   classification2: "Formative Research & Policy Analysis",
   description2:
    "Consortium of INTEGRITY, AXIOM and Dansom implemented an Accountability Research on accountability mechanisms along the supply chains of sesame and sugar in the context of Kismayo, Somalia. DFID / Mott Mc Donalds – Implementation and Analysis in Action of Accountability Programme (IAAAP) in Somalia.",
   icon: "DFID-400x162.png",
  },
 ])
 let displayedProjects = ref(projects.value.slice(0, 6))

 let loadMore = () => {
  let nextProjects = projects.value.slice(
   displayedProjects.value.length,
   displayedProjects.value.length + 6
  )
  displayedProjects.value = [...displayedProjects.value, ...nextProjects]
 }
 let searchTerm = ref("")
 let classification = ref("")

 let filteredProjects = computed(() => {
  return displayedProjects.value.filter((project) => {
   let matchesSearchTerm =
    !searchTerm.value ||
    project.title.toLowerCase().includes(searchTerm.value.toLowerCase())
   let matchesClassification =
    !classification.value || project.classification === classification.value
   return matchesSearchTerm && matchesClassification
  })
 })

 useHead({
  title: "Our Portfolio | Dansom Consultancy & Research",
  meta: [
   {
    name: "description",
    content:
     "Dansom Consultancy isn't just about expertise – it's about impact. We leverage our unique access and understanding of the Horn of Africa to deliver transformative results for our clients.  We've undertaken a wide range of projects focused on strengthening security and socio-political development across the region. These projects include providing monitoring and evaluation services for organizations like the United Nations Support Office in Somalia (UNSOS) and the European Union Delegation to Somalia, ensuring transparency and accountability in critical development efforts",
   },
   //    og tags
   {
    property: "og:title",
    content: "Our Portfolio | Dansom Consultancy & Research",
   },
   {
    property: "og:description",
    content:
     "Dansom Consultancy isn't just about expertise – it's about impact. We leverage our unique access and understanding of the Horn of Africa to deliver transformative results for our clients.  We've undertaken a wide range of projects focused on strengthening security and socio-political development across the region. These projects include providing monitoring and evaluation services for organizations like the United Nations Support Office in Somalia (UNSOS) and the European Union Delegation to Somalia, ensuring transparency and accountability in critical development efforts",
   },
   {
    property: "og:image",
    content:
     "https://res.cloudinary.com/dansom/image/upload/v1713880776/Banner-3-1600x699_ewoaq4.jpg",
   },
   {
    property: "og:url",
    content: "https://dansomconsultancy.org/portfolio",
   },
   {
    property: "og:type",
    content: "website",
   },
  ],
 })
</script>

<style></style>
