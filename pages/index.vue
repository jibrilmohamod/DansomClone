<template>
  <div class="">
    <TheHero />
    <OurExpertise />
    <!-- About Us Card  -->
    <UiComp header="Who We are"
            small-text="Dansom"
            paragraph="We are a research and consultancy firm that was established in 2009 to work with humanitarian and development partners and ensure powerful transformations in the development of the horn of Africa. Dansom has since developed a network of thematic and regional experts based in Somalia and Kenya, with a unique level of access to hard-to-reach areas and a strong focus on security and socio-political and economic development in Eastern Africa.">

      <template #image>
        <ImageCard class="pt-10" />
      </template>
      <template #button>
        <div class="flex pt-8 pb-0">
          <Button navigateTo="/"
                  class="bg-primary text-white font-Montserrat px-6 h-12 text-lg">
            Learn More
          </Button>
        </div>
      </template>

    </UiComp>
    <!-- services card -->

    <UiComp header="Our Expertise and Solutions"
            paragraph="With access to various locations within Somalia, DANSOM provides high quality tailor made services to the clients’ needs, goals and objectives. We provide an array of services including but not limited to third party monitoring and evaluation, political economy analysis ,security advisory and formative research and policy advisory services">
      <div>
        <ServiceCard v-for="service in services"
                     :key="service.title"
                     :icon="service.icon"
                     :title="service.title"
                     :subtitle="service.subtitle" />
      </div>
    </UiComp>









    <TheCard>
      <template #One>
        <TheTitle title="Our Expertise and Solutions"
                  subtitle="With access to various locations within Somalia, DANSOM provides high quality tailor made services to the clients’ needs, goals and objectives. We provide an array of services including but not limited to third party monitoring and evaluation, political economy analysis ,security advisory and formative research and policy advisory services" />
        <!-- services vfor loop -->
        <div>
          <ServiceCard v-for="service in services"
                       :key="service.title"
                       :icon="service.icon"
                       :title="service.title"
                       :subtitle="service.subtitle" />
        </div>

      </template>
    </TheCard>
    <!-- Patners and Portfolio card -->
    <TheCard>
      <template #One>
        <TheTitle title="Our Partners and Portfolio"
                  subtitle="We have worked with a number of partners and clients in the horn of Africa. Our portfolio includes work with the United Nations, the European Union, the World Bank, the Swiss Agency for Development, the Government of Somalia, and a number of international and local NGOs." />
      </template>
      <template #Image>
        <LogoCarousel />
        <!-- learn more button  -->
        <div class="flex pt-8 pb-0">
          <Button navigateTo="/"
                  class="bg-primary text-white font-Montserrat px-6 h-12 text-lg">
            Our Projects
          </Button>
        </div>
      </template>
    </TheCard>

    <!-- Contact Us Card  -->
    <TheCard>
      <template #One>
        <TheTitle title="We can help you navigate what's next."
                  subtitle="
        With more than 10 years of experience in the horn of Africa, we have the expertise and the network to help you navigate the complex socio-political and economic landscape of the region. CONTACT US today to learn more about our services and how we can help you achieve your goals." />

      </template>
      <template #Image>
        <Button navigateTo="/"
                class="bg-primary text-white font-Montserrat px-6 h-12 text-lg">
          Get in Touch
        </Button>
        <ImageCard class="pt-5" />
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
