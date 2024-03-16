<template>
  <div class="">
    <TheHero />
    <OurExpertise />

    <!-- About Us Card  -->
    <TheCard>
      <template #One>
        <TheTitle title="Who We Are"
                  subtitle="We are a research and consultancy firm that was established in 2009 to work with humanitarian and development partners and ensure powerful transformations in the development of the horn of Africa. Dansom has since developed a network of thematic and regional experts based in Somalia and Kenya, with a unique level of access to hard-to-reach areas and a strong focus on security and socio-political and economic development in Eastern Africa." />
      </template>
      <template #Image>
        <ImageCard />
        <!-- learn more button  -->
        <div class="flex pt-8 pb-0">
          <Button navigateTo="/"
                  class="bg-primary text-white font-Montserrat px-6 h-12 text-lg">
            Learn More
          </Button>
        </div>
      </template>
    </TheCard>

    <!-- services card -->
    <TheCard>
      <template #One>
        <TheTitle title="Our Expertise and Solutions"
                  subtitle="With access to various locations within Somalia, DANSOM provides high quality tailor made services to the clients’ needs, goals and objectives. We provide an array of services including but not limited to third party monitoring and evaluation, political economy analysis ,security advisory and formative research and policy advisory services" />
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

<script setup
        lang="ts">
        import { Button } from '@/components/ui/button'

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
            icon: "material-symbols-light:chart-data-outline-rounded",
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
            title: "Organizational Capacity Building & HR",
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
