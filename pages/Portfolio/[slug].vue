<template>
 <div>
  <TheHeader :projTitle="slug">
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
  <div class="container m-auto">
   <div class="w-full flex flex-col md:flex-row">
    <div class="md:w-1/2 py-10 h-96 grid place-content-center">
     <!-- Image -->
     <div class="md:w-1/2">
      <Image2Card :image="project.icon" />
     </div>
    </div>
    <div class="md:w-1/2 px-6 py-5 font-Roboto">
     <div class="flex flex-col gap-3 md:gap-6">
      <!-- classification -->
      <div>
       <h3 class="text-2xl font-DM pb-4">Classification</h3>
       <p class="text-base">
        {{ project.classification }}
       </p>
      </div>
     </div>
     <div class="flex flex-col gap-3 md:gap-6 py-4">
      <!-- description -->
      <div>
       <h3 class="text-2xl font-DM pb-4">Description</h3>
       <p class="text-base">
        {{ project.description }}
       </p>
      </div>
      <!-- location and timeframes with icons -->
      <div
       class="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-0"
      >
       <!-- location -->
       <div class="flex items-center">
        <Icon name="mdi:location" class="text-primary text-2xl" />
        <p class="">{{ project.Location }}</p>
       </div>
       <!-- timeframes -->
       <div class="flex items-center">
        <Icon name="mdi:calendar" class="text-primary text-2xl" />
        <p class="">{{ project.timeframes }}</p>
       </div>
      </div>
     </div>
     <div v-if="project?.classification2">
      <h3 class="text-2xl font-DM pb-4">Classification</h3>
      <p class="text-base">
       {{ project.classification2 }}
      </p>
     </div>
     <div v-if="project?.description2">
      <h3 class="text-2xl font-DM pb-4">Description</h3>
      <p class="text-base">
       {{ project?.description2 }}
      </p>
     </div>
     <div
      class="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-0"
      v-if="project?.description2"
     >
      <!-- location -->
      <div class="flex items-center">
       <Icon name="mdi:location" class="text-primary text-2xl" />
       <p class="">{{ project.Location }}</p>
      </div>
      <!-- timeframes -->
      <div class="flex items-center">
       <Icon name="mdi:calendar" class="text-primary text-2xl" />
       <p class="">{{ project?.timeframes2 }}</p>
      </div>
     </div>
     <div class="">
      <div v-if="project?.classification3">
       <h3 class="text-2xl font-DM pb-4">Classification</h3>
       <p class="text-base">
        {{ project.classification3 }}
       </p>
      </div>
      <div v-if="project?.description3">
       <h3 class="text-2xl font-DM pb-4">Description</h3>
       <p class="text-base">
        {{ project?.description3 }}
       </p>
      </div>
      <div
       class="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-0"
       v-if="project?.description3"
      >
       <!-- location -->
       <div class="flex items-center">
        <Icon name="mdi:location" class="text-primary text-2xl" />
        <p class="">{{ project.Location }}</p>
       </div>
       <!-- timeframes -->
       <div class="flex items-center">
        <Icon name="mdi:calendar" class="text-primary text-2xl" />
        <p class="">{{ project?.timeframes2 }}</p>
       </div>
      </div>
     </div>
     <div class="">
      <div v-if="project?.classification4">
       <h3 class="text-2xl font-DM pb-4">Classification</h3>
       <p class="text-base">
        {{ project.classification4 }}
       </p>
      </div>
      <div v-if="project?.description4">
       <h3 class="text-2xl font-DM pb-4">Description</h3>
       <p class="text-base">
        {{ project?.description4 }}
       </p>
      </div>
      <div
       class="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-0"
       v-if="project?.description4"
      >
       <!-- location -->
       <div class="flex items-center">
        <Icon name="mdi:location" class="text-primary text-2xl" />
        <p class="">{{ project.Location }}</p>
       </div>
       <!-- timeframes -->
       <div class="flex items-center">
        <Icon name="mdi:calendar" class="text-primary text-2xl" />
        <p class="">{{ project?.timeframes4 }}</p>
       </div>
      </div>
     </div>
     <div class="">
      <div v-if="project?.classification5">
       <h3 class="text-2xl font-DM pb-4">Classification</h3>
       <p class="text-base">
        {{ project.classification5 }}
       </p>
      </div>
      <div v-if="project?.description5">
       <h3 class="text-2xl font-DM pb-4">Description</h3>
       <p class="text-base">
        {{ project?.description5 }}
       </p>
      </div>
      <div
       class="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-0"
       v-if="project?.description5"
      >
       <!-- location -->
       <div class="flex items-center">
        <Icon name="mdi:location" class="text-primary text-2xl" />
        <p class="">{{ project.Location }}</p>
       </div>
       <!-- timeframes -->
       <div class="flex items-center">
        <Icon name="mdi:calendar" class="text-primary text-2xl" />
        <p class="">{{ project?.timeframes5 }}</p>
       </div>
      </div>
     </div>
     <div class="">
      <div v-if="project?.classification6">
       <h3 class="text-2xl font-DM pb-4">Classification</h3>
       <p class="text-base">
        {{ project.classification6 }}
       </p>
      </div>
      <div v-if="project?.description6">
       <h3 class="text-2xl font-DM pb-4">Description</h3>
       <p class="text-base">
        {{ project?.description6 }}
       </p>
      </div>
      <div
       class="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-0"
       v-if="project?.description6"
      >
       <!-- location -->
       <div class="flex items-center">
        <Icon name="mdi:location" class="text-primary text-2xl" />
        <p class="">{{ project.Location }}</p>
       </div>
       <!-- timeframes -->
       <div class="flex items-center">
        <Icon name="mdi:calendar" class="text-primary text-2xl" />
        <p class="">{{ project?.timeframes6 }}</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script lang="ts" setup>
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
   classification: "Third Party Monitoring and Evaluation IV ",
   description:
    "The overall objective is to conduct regular, independent and objective monitoring of all activities or interventions funded under the NDICI funding instrument in various regions in Somalia. The main scope of the Third-Party Monitoring and Evaluation (TPME) is to monitor the execution & implementation of EU funded projects in Somalia by carrying out monitoring missions in all the regions of Somalia.",
   timeframes: "January 2024 - January 2027",
   classification2: "Third Party Monitoring & Evaluation III – EUTF",
   description2:
    "Independent and objective monitoring activities of EU Priority projects implemented in in Somalia funded under the EUTF funding.Specific monitoring reports on thematic issues, including access to water service delivery, integrated land and water resource management, economic development as part of the livelihood with durable solutions, etc.",
   timeframes2: "July 2022 - June 2024",
   classification3: "Third Party Monitoring & Evaluation III – EDF",
   description3:
    "Independent and objective monitoring activities of EU Priority projects implemented in in Somalia funded under the EDF funding.Specific monitoring reports on the thematic issues including livelihood through expanded supply of drinking water, resilient agriculture value-chain, etc.",
   timeframes3: "December 2021 - January 2024",
   classification4: "Third Party Monitoring & Evaluation II",
   description4:
    "Independent and objective monitoring activities of EU Priority projects implemented in in Somalia funded under the EUD-Somalia funding.The European Union Delegation to Somalia (EUD-Somalia) has contracted Dansom Consultancy to provide Third Party Monitoring and Evaluation services in support of the EU’s development cooperation in Somalia.",
   timeframes4: "December 2018 - June 2021",
   classification5: "Third Party Monitoring & Evaluation",
   description5:
    "The European Union Delegation to Somalia (EUD-Somalia) has contracted Dansom Consultancy to provide Third Party Monitoring and Evaluation services in support of the EU’s development cooperation in Somalia.",
   Location: "Somalia",
   timeframes5: "July 2016 - April 2018",
   icon: "EU.jpg",
   Ngo: "EU",
   classification6: "Political Economy Analysis & Security Advisory",
   description6:
    "Consortium of IDC, Hoplite and Dansom carried out Somalia Maritime Security Actors Mapping.",
   timeframes6: "December 2015 - July 2016  ",
  },
  {
   title:
    "Monitoring & Evaluation of Somalia Country Programme & Peace and Stabilisation Programme",
   classification: "Third Party Monitoring & Evaluation",
   description:
    "Establish and facilitae a functioning Monitoring, Evaluation, Accountability and Learning (MEAL) including risk management system for Monitoring & Evaluation of Somalia Country Programme (2019-2023)  and its engagement documents, and communication of findigns to both the Somalia and Danish general public and other identified recipients.",
   Ngo: "DANIDA",
   Location: "Somalia , Kenya , Ethiopia",
   timeframes: "September 2021 - September 2022",
   icon: "Danida.png",
   classification2: "Third Party Monitoring & Evaluation",
   description2:
    "Establish and facilitate a functioning Monitoring, Evaluation, Accountability and Learning (MEAL) including risk management system for the Peace and Stabilisation Programme (2018-2022) and its engagement documents, and communication of findings to both the Somalia and Danish general public and other identified recipients.",
   timeframes2: "September 2021 - September 2022",
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
   classification2: "Political Economy Analysis & Security Advisory",
   timeframes2: "August 2017 - January 2018",
   description2:
    "Consortium of Dansom consultancy & CMC conducted a peace and conflict assessment (PCA) in Kismayo, Somalia for the Somali Re integration Programme (GIZ SRP) and Fish for Nutrition project (GIZ FNP)",
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

 let route = useRoute()
 let slug = ref(route.params.slug)
 let project = computed(() => {
  return projects.value.find((project) => project.title === route.params.slug)
 })

 useHead({
  title: slug.value,
  meta: [
   {
    name: "description",
    content: "Dansom Consultancy | " + slug.value,
   },
  ],
 })
</script>

<style></style>
