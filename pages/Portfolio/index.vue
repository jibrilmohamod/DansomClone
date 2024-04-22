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
     src="v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg"
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
   <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-5 md:-mt-4"
   >
    <ProjectCard
     v-for="project in displayedProjects"
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
   title: "Swiss Agency for Development and Cooperation (SDC)",
   classification: "Classification",
   description:
    "The current objective is to improve the performance of the Swiss HoA programme. This overall work to improve the programme is called the “Framework for Risk Gover- nance and Adaptive Programming” (FRAP). It will be implemented over a twelve year timeframe. FRAP will initially focus on Soma- lia (including Somaliland).",
   Location: "Somalia",
   timeframes: "June 2021 - December 2024",
   icon: "/download (1).png",

   Ngo: "SDC",
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
   classification: " Political Economy Analysis & Security Advisory ",
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
   icon: "SomaliaWorldBank.jpg",
  },
  {
   title: "Technical Assistance on Reorganization & Modernization of MDA’s",
  },
  {
   title: "United Nations Office for Project Services (UNOPS)",
  },
  {
   title: "World Food Programme (WFP)/FAO",
  },
  {
   title:
    "The Ministry of Planning, Investment and Economic Development for the Federal Republic of Somalia",
  },
  {
   title: "Somalia Invest Climate Reform Program, IFC-World Bank",
  },
  {
   title: "Horumarinta Elmiga II-Save the Children",
  },
  {
   title: "CARE International",
  },
  {
   title: "Solidarites International",
  },
  {
   title: "ACTED",
  },
  {
   title:
    "DFID / Mott MacDonalds - Implementation & Analysis in Action for Accountability Project (IAAP)",
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

 let date = new Date()
 let year = date.getFullYear()
</script>

<style></style>
