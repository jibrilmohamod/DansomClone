<template>
  <div class="">
    <TheHero />
    <OurExpertise />
    <TheCard>
      <template #One>
        <!-- services vfor loop -->
        <ServiceCard v-for="service in services"
                     :key="service.title"
                     :icon="service.icon"
                     :title="service.title"
                     :subtitle="service.subtitle" />
      </template>
    </TheCard>
  </div>
</template>

<script setup>
let services = [
  {
    icon: "arcticons:adobe-analytics",
    title: "Political Economy Analysis",
    subtitle: "Political Economy Analysis (PEA) in Somalia to inform programming and policy development."
  },
  {
    icon: "carbon:data-analytics",
    title: "Third Party Monitoring and Evaluation",
    subtitle: "Third Party Monitoring and Evaluation (TPME) of humanitarian and development projects in Somalia."
  },
  {
    icon: "fluent-mdl2:analytics-report",
    title: "Formative Research and Policy Advisory Services",
    subtitle: "Formative Research and Policy Advisory Services to inform programming and policy development."
  },
  {
    icon: "ph:leaf-thin",
    title: "Environmental Impact Assessment (EIA) & Monitoring",
    subtitle: "Environmental Impact Assessment (EIA) & Monitoring of humanitarian and development projects in Somalia."
  },
  {
    icon: "pepicons-pencil:people",
    title: "Organizational Capacity Building & Human Resource Management",
    subtitle: "Organizational Capacity Building & Human Resource Management for local and international organizations in Somalia."
  },
  {
    icon: "ph:gear-six-thin",
    title: "Operational and Logistics Management",
    subtitle: "Operational and Logistics Management for local and international organizations in Somalia."
  },
  {
    icon: "la:people-carry",
    title: "Community Engagement Strategies",
    subtitle: "Community Engagement Strategies for local and international organizations in Somalia."
  },

]
</script>

<style lang="scss"
       scoped></style>
