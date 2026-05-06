<template>
  <div class="min-h-screen text-slate-900">
    <TheHeader title="Our Portfolio">
      <template #image>
        <NuxtImg provider="cloudinary"
                 loading="lazy"
                 format="webp"
                 alt="Portfolio banner"
                 sizes="sm:100vw md:50vw lg:1500px"
                 :modifiers="{ effect: 'colorize:60', color: 'black' }"
                 src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
                 class="w-full h-full object-cover object-center" />
      </template>
    </TheHeader>

    <section class="container m-auto space-y-6 px-4 py-10 md:space-y-10 md:px-6 md:py-16">
      <OurExpertise title="Our Portfolio"
                    subtitle="Explore how Dansom delivers transparency, accountability, and evidence-backed recommendations across the Horn of Africa." />

      <div class="rounded-none border-0 bg-transparent p-0 shadow-none md:dansom-card md:p-6">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div class="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <input type="text"
                   v-model="searchTerm"
                   placeholder="Search projects"
                   class="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm placeholder:text-slate-500 focus:border-primary focus:outline-none md:w-1/2 md:rounded-xl md:px-4 md:py-3" />
            <div class="flex items-center gap-2 text-sm font-semibold text-primary md:gap-3">
              <p class="text-xs text-slate-700 md:text-sm">Filter by:</p>
              <select v-model="classification"
                      class="rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-2 text-xs focus:border-primary focus:outline-none md:rounded-xl md:px-3 md:text-sm">
                <option value="All">All</option>
                <option value="Third Party Monitoring & Evaluation">Third Party Monitoring & Evaluation</option>
                <option value="Political Economy Analysis & Security Advisory">Political Economy Analysis & Security
                  Advisory</option>
                <option value="Formative Research & Policy Analysis">Formative Research & Policy Analysis</option>
                <option value="Organizational Capacity Building & Human Resource Management">Organizational Capacity
                  Building</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-5 grid gap-3 md:mt-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <ProjectCard v-for="project in filteredProjects"
                       :key="project.title"
                       :title="project.title"
                       :icon="project.icon"
                       :slug="`/Portfolio/${project.title}`" />
        </div>

        <div class="mt-4 flex justify-center md:mt-6"
             v-if="displayedProjects.length < projects.length">
          <Button @click="loadMore()"
                  class="my-2 w-44 bg-primary py-2.5 font-Zilla text-base text-white transition-all hover:bg-quaternary hover:duration-200 hover:ease-linear md:my-3 md:w-48 md:py-3 md:text-lg">
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
   "Review Dansom project portfolio across monitoring and evaluation, political economy analysis, and advisory assignments in Somalia and the region.",
 })

 let projects = ref([
import Button from "~/components/ui/button/Button.vue"

useSeoMeta({
  title: "Portfolio",
  description:
    "Review Dansom project portfolio across monitoring and evaluation, political economy analysis, and advisory assignments in Somalia and the region.",
})


let projects = ref([
  {
    title: "IFC Workshop and Training Support in Hargeisa and Mogadishu",
    classification: "Operational & Logistics Management",
    description:
      "Dansom is providing various services to the IFC, including organising workshops in Hargeisa and Mogadishu and providing field support during trainings, including preparation of meeting minutes.",
    Location: "Somalia",
    timeframes: "May 2025 - November 2025",
    icon: "ifc.png",
    Ngo: "IFC",
  },
  {
    title: "Independent Assessment of Teacher Training Centers and Teacher Training Programme",
    classification: "Independent Evaluation",
    description:
      "The assignment conducts an independent assessment of Teacher Training Centers and the teacher training programme implemented under SEHCDP. It reviews governance, funding, human resource policies, coordination mechanisms, and the outcomes of training provided to 2,600 selected teachers.",
    Location: "Somalia",
    timeframes: "July 2025 - September 2025",
    icon: "The_World_Bank_logo.svg",
    Ngo: "World Bank",
  },
  {
    title: "Global Education Policy Dashboard Project in Somalia",
    classification: "Formative Research & Policy Advisory",
    description:
      "A consortium led by Dansom, in partnership with Particip, implemented the Global Education Policy Dashboard project in Somalia, providing formative research and policy advisory services to support the World Bank in assessing education policies, regional capacities, and learning outcomes.",
    Location: "Somalia",
    timeframes: "July 2024 - October 2025",
    icon: "The_World_Bank_logo.svg",
    Ngo: "World Bank",
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
    title: "Monitoring and Evaluation Services in Support of UNSOS",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "A consortium comprising Dansom and Particip is facilitating the provision of monitoring and evaluation services in support of UNSOS throughout Somalia.",
    Location: "Somalia",
    timeframes: "December 2022 - Current",
    icon: "Capture1.PNG-removebg-preview.png",
    Ngo: "UNSOS",
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
    title: "Research and Evaluation Services for Resilient Smallholder Farming Systems",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "Dansom provided research and evaluation services for resilient smallholder farming systems in Somalia, offering an independent perspective and expanding access to areas sometimes inaccessible to WFP and FAO staff due to security constraints.",
    Location: "Somalia",
    timeframes: "November 2022 - May 2023",
    icon: "wfpfao.png",
    Ngo: "WFP / FAO",
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
    title: "World Bank Somalia High Frequency Survey Support",
    classification: "Operational & Logistics Management",
    description:
      "Dansom facilitated cooperation between the Government of Somalia and the Somalia High Frequency Survey team, including Altai and the World Bank.",
    Location: "Somalia",
    timeframes: "September 2017 - Present",
    icon: "The_World_Bank_logo.svg",
    Ngo: "World Bank",
  },
  {
    title: "Somali Investment Climate Reform Programme Support",
    classification: "Operational & Logistics Management",
    description:
      "Dansom provided technical support and capacity building services to support implementation of the Somali Investment Climate Reform Programme, including qualified consultants, travel logistics, and management of fees and expenses.",
    Location: "Somalia",
    timeframes: "September 2019 - December 2020",
    icon: "ifc.png",
    Ngo: "IFC",
  },
  {
    title: "IFC Public Private Dialogue Support",
    classification: "Operational & Logistics Management",
    description:
      "Dansom partnered with IFC and the World Bank Group to facilitate and support Public Private Dialogue in Somalia’s economic recovery sector, including support to the telecommunications sector and strategic advice on moving the National Communication Act toward submission and approval by the National Federal Parliament.",
    Location: "Somalia",
    timeframes: "October 2017 - November 2018",
    icon: "ifc.png",
    Ngo: "IFC",
  },
  {
    title: "District Baseline Assessment and Conflict Mapping in Jubaland",
    classification: "Community Engagement Strategy",
    description:
      "Dansom conducted a district baseline assessment involving conflict and clan mapping in Kismayo and Garbaharey districts of Jubaland State of Somalia.",
    Location: "Jubaland, Somalia",
    timeframes: "March 2017 - December 2018",
    icon: "ministry-of-planning-400x162.png",
    Ngo: "Jubaland",
  },
  {
    title: "Final Evaluation of Horumarinta Elmiga II",
    classification: "Operational & Logistics Management",
    description:
      "Dansom supported the final evaluation of Horumarinta Elmiga II, an education project funded by the European Union and implemented by Save the Children as lead agency, with CARE International and Norwegian Refugee Council in partnership with the Somaliland Ministry of Education and Higher Studies.",
    Location: "Somaliland",
    timeframes: "September 2017 - November 2018",
    icon: "EU.jpg",
    Ngo: "EU / Save the Children / CARE / NRC",
  },
  {
    title: "Peace and Conflict Assessment for GIZ SRP and Fish for Nutrition Project",
    classification: "Political Economy Analysis",
    description:
      "A consortium of CMC and Dansom Consultancy conducted a peace and conflict assessment in Kismayo, Somalia for the Somali Reintegration Programme and the Fish for Nutrition Project.",
    Location: "Kismayo, Somalia",
    timeframes: "August 2017 - January 2018",
    icon: "giz-400x173.jpg",
    Ngo: "GIZ",
  },
  {
    title: "Final Evaluation of SCOPES Civil Society Project",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "Dansom conducted a final evaluation of the Strengthening Civil Society and Public Engagement in Somalia project to assess performance and achievements against objectives and identify success and failure factors using OECD DAC Evaluation Criteria.",
    Location: "Somalia",
    timeframes: "May 2018 - August 2018",
    icon: "EU.jpg",
    Ngo: "SCOPES",
  },
  {
    title: "External Evaluation of Emergency Response for IDPs and Host Communities",
    classification: "Third Party Monitoring & Evaluation",
    description:
      "Dansom conducted an external evaluation of an emergency response to disaster-affected IDPs and host communities implemented by Solidarités International in Lower Juba.",
    Location: "Lower Juba, Somalia",
    timeframes: "May 2016 - July 2016",
    icon: "EU.jpg",
    Ngo: "Solidarités International",
  },
  {
    title: "Conflict Mediation for Release of Solidarités International Staff",
    classification: "Political Economy Analysis",
    description:
      "Dansom provided consultancy support for conflict mediation and resolution related to the release of Solidarités International staff arrested by an armed group in Gedo, Somalia.",
    Location: "Gedo, Somalia",
    timeframes: "April 2015 - May 2015",
    icon: "EU.jpg",
    Ngo: "Solidarités International",
  },
  {
    title: "Conflict Mediation for Release of ACTED Staff in Jubaland",
    classification: "Political Economy Analysis",
    description:
      "Dansom provided consultancy support for conflict mediation and resolution related to the release of ACTED staff arrested by local authorities in Jubaland, Somalia.",
    Location: "Jubaland, Somalia",
    timeframes: "May 2015 - January 2016",
    icon: "EU.jpg",
    Ngo: "ACTED",
  },
  {
    title: "Security Advisory Support for Jubaland",
    classification: "Political Economy Analysis",
    description:
      "Dansom provided need-based security advisory services for Jubaland, Somalia.",
    Location: "Jubaland, Somalia",
    timeframes: "January 2016 - December 2017",
    icon: "ministry-of-planning-400x162.png",
    Ngo: "Jubaland",
  },
  {
    title: "Accountability Perception Survey in Somalia",
    classification: "Formative Research & Policy Advisory",
    description:
      "A consortium of Altai and Dansom implemented an Accountability Perception Survey in Somalia under the Implementation and Analysis in Action for Accountability Programme.",
    Location: "Somalia",
    timeframes: "December 2015 - January 2017",
    icon: "UKaid_logo.png",
    Ngo: "DFID / Mott MacDonald",
  },
  {
    title: "Accountability Research on Sesame and Sugar Supply Chains",
    classification: "Formative Research & Policy Advisory",
    description:
      "A consortium of Integrity, Axiom, and Dansom implemented accountability research on accountability mechanisms along the supply chains of sesame and sugar in the context of Kismayo, Somalia.",
    Location: "Kismayo, Somalia",
    timeframes: "August 2015",
    icon: "UKaid_logo.png",
    Ngo: "DFID / Mott MacDonald",
  },
]);

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
