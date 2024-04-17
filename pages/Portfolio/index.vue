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
  </div>
</template>

<script lang="ts" setup>
let projects = [
  {
    title: "Swiss Agency for Development and Cooperation (SDC)",
    classification: "Classification",
    description:
      "The current objective is to improve the performance of the Swiss HoA programme. This overall work to improve the programme is called the “Framework for Risk Gover- nance and Adaptive Programming” (FRAP). It will be implemented over a twelve year timeframe. FRAP will initially focus on Soma- lia (including Somaliland).",
    Location: "Somalia",
    timeframes: "June 2021 - December 2024",
    icon: "",
    icon2: "",
    Ngo: "SDC",
  },
  {
    title:
      "The Provision of Monitoring and Evaluation Services for the United Nations Support Office in Somalia (UNSOS)",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "A consortium comprising of DANSOM and Partcip are facilitating the provision of monitoring and evaluation services in support to unsos throughout Somalia.",
    Location: "Somalia",
    timeframes: "December 2020 - present",
    icon: "",
    icon2: "",
    Ngo: "UNSOS",
  },
  {
    title: "EU Delegation to Somalia (EUD-Somalia)",
  },
  {
    title: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
  },
  {
    title: "Somalia Capacity Injjection Project Pay and Grading Reform",
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
];

let date = new Date();
let year = date.getFullYear();
</script>

<style></style>
