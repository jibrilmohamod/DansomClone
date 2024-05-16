<template>
 <div class="">
  <TheHero />

  <!-- about us card -->
  <TheCard>
   <template #One>
    <div class="h-full flex flex-col items-center justify-center">
     <TheTitle
      title="Who We are"
      subtitle="DANSOM is a research and consultancy firm that was established in 2009 to work with humanitarian and development partners and ensure powerful transformations in the development of the horn of Africa. Dansom has since developed a network of thematic and regional experts based in Somalia and Kenya, with a unique level of access to hard-to-reach areas and a strong focus on security and socio-political and economic development in Eastern Africa."
      link="/About"
      LinkText="About Us"
      icon="ic:sharp-double-arrow"
     >
     </TheTitle>
    </div>
   </template>
   <template #Image>
    <div class="w-full">
     <ImageCard image="v1713946564/expertise-1000x757_1_ha2eyx.jpg" />
    </div>
   </template>
  </TheCard>

  <!-- Services Card  -->
  <div
   style="border-radius: 32% 25% 25% 0% / 0% 46% 42% 47%"
   class="bg-primary bg-opacity-50"
  >
   <OurExpertise
    class="border-primary"
    title="Our Expertise and Services"
    subtitle="With access to various locations within Somalia, DANSOM provides high quality tailor made services to the clients’ needs, goals and objectives. We provide an array of services including but not limited to third party monitoring and evaluation, political economy analysis ,security advisory and formative research and policy advisory services"
   >
    <template #vfor>
     <div class="md:flex flex-wrap justify-center">
      <!-- nuxtlink to service pages for each service -->
      <ServiceCard
       data-aos="fade-up"
       data-aos-duration="1000"
       class="basis-1/3"
       v-for="(service, index) in services.slice(0, 6)"
       :key="service.title"
       :icon="service.icon"
       :title="service.title"
       :subtitle="service.subtitle"
       :link="`/Services/${service.title}`"
      />
     </div>
    </template>
   </OurExpertise>
  </div>

  <!-- Patners and Portfolio card -->
  <TheCard>
   <template #One>
    <div class="h-full flex flex-col items-center justify-center">
     <TheTitle
      title="Our Partners and Portfolio"
      subtitle="We have worked with a number of partners and clients in the horn of Africa. Our portfolio includes work with the United Nations, the European Union, the World Bank, the Swiss Agency for Development, the Government of Somalia, and a number of international and local NGOs."
      link="/Portfolio"
      LinkText="Our Projects"
      icon="ic:sharp-double-arrow"
     >
     </TheTitle>
    </div>
   </template>
   <template #Image>
    <LogoCarousel />
   </template>
  </TheCard>
 </div>
</template>

<script setup lang="ts">
 import { Button } from "@/components/ui/button"

 let services = [
  {
   icon: "arcticons:adobe-analytics",
   title: "Political Economy Analysis",
   subtitle:
    "Political Economy Analysis (PEA) in Somalia to inform programming and policy development.",
  },
  {
   icon: "carbon:data-analytics",
   title: "Third Party Monitoring and Evaluation",
   subtitle:
    "Third Party Monitoring and Evaluation (TPME) of humanitarian and development projects in Somalia.",
  },
  {
   icon: "carbon:data-analytics",
   title: "Formative Research and Policy Advisory Services",
   subtitle:
    "Formative Research and Policy Advisory Services to inform programming and policy development.",
  },
  {
   icon: "ph:leaf-thin",
   title: "Environmental Impact Assessment (EIA) & Monitoring",
   subtitle:
    "Environmental Impact Assessment (EIA) & Monitoring of humanitarian and development projects in Somalia.",
  },
  {
   icon: "pepicons-pencil:people",
   title: "Organizational Capacity Building & HR",
   subtitle:
    "Organizational Capacity Building & Human Resource Management for local and international organizations in Somalia.",
  },
  {
   icon: "ph:gear-six-thin",
   title: "Operational and Logistics Management",
   subtitle:
    "Operational and Logistics Management for local and international organizations in Somalia.",
  },
  {
   icon: "la:people-carry",
   title: "Community Engagement Strategies",
   subtitle:
    "Community Engagement Strategies for local and international organizations in Somalia.",
  },
 ]

 // SEO and Meta tags
 useHead({
  title: "Dansom Consultancy & Research",
  meta: [
   {
    name: "description",
    content:
     "DANSOM is a research and consultancy firm that was established in 2009 to work with humanitarian and development partners and ensure powerful transformations in the development of the horn of Africa.",
   },
   {
    name: "keywords",
    content:
     "DANSOM, research, consultancy, firm, humanitarian, development, partners, transformations, horn of Africa, thematic, regional, experts, Somalia, Kenya, access, hard-to-reach areas, security, socio-political, economic development, Eastern Africa",
   },
   //og tags
  ],
 })
</script>

<style lang="scss" scoped></style>
