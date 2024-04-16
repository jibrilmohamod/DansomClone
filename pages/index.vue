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
      <template #image2>
        <div class="w-full px-2 flex gap-2  items-center">
          <Image2Card
                      image="https://res.cloudinary.com/dckmlqzgd/image/upload/v1713241586/young-boy-holding-bunch-vegetables-field_662214-181069_urmsm3.jpg" />
          <Image3Card
                      image="https://res.cloudinary.com/dckmlqzgd/image/upload/v1713241556/medium-shot-boy-working-with-plants_23-2149142895_bl3vbr.jpg" />
        </div>

      </template>

    </UiComp>
    <!-- services card -->

    <UiComp header="Our Expertise and Solutions"
            paragraph="With access to various locations within Somalia, DANSOM provides high quality tailor made services to the clients’ needs, goals and objectives. We provide an array of services including but not limited to third party monitoring and evaluation, political economy analysis ,security advisory and formative research and policy advisory services">
      <template #image>
        <ServiceCard v-for="service in services"
                     :key="service.title"
                     :icon="service.icon"
                     :title="service.title"
                     :subtitle="service.subtitle" />
      </template>
      <template #image2>
        <div class="w-full px-2 flex gap-2  items-center">

          <Image2Card
                      image="https://res.cloudinary.com/dckmlqzgd/image/upload/v1713241348/front-view-woman-sitting-near-fruits_23-2149522151_uy1b2y.jpg" />
          <Image3Card
                      image="https://res.cloudinary.com/dckmlqzgd/image/upload/v1713240887/countryside-worker-pushing-wheelbarrow-with-peanuts_23-2148761782_qigkes.jpg" />
        </div>

      </template>
    </UiComp>
    <!-- Patners and Portfolio card -->

    <UiComp header="Our Partners and Portfolio"
            paragraph="We have worked with a number of partners and clients in the horn of Africa. Our portfolio includes work with the United Nations, the European Union, the World Bank, the Swiss Agency for Development, the Government of Somalia, and a number of international and local NGOs.">
      <template #image>
        <LogoCarousel />
        <!-- learn more button  -->
        <div class="flex pt-8 pb-0">
          <Button navigateTo="/"
                  class="bg-primary text-white font-Montserrat px-6 h-12 text-lg">
            Our Projects
          </Button>
        </div>
      </template>

      <template #image2>
        <div class="w-full px-2 flex gap-2  items-center">

          <Image3Card
                      image="https://img.freepik.com/free-photo/view-woman-working-agricultural-sector-celebrate-labour-day-women_23-2151252044.jpg?t=st=1713241743~exp=1713245343~hmac=07c24fed27d76d5827409399df2f0a1c0475920088583e76dc98245115b8f436&w=740" />
          <Image2Card />
        </div>

      </template>

    </UiComp>



    <!-- Contact Us Card  -->

    <UiComp header="We can help you navigate what's next"
            paragraph="With more than 10 years of experience in the horn of Africa, we have the expertise and the network to help you navigate the complex socio-political and economic landscape of the region. CONTACT US today to learn more about our services and how we can help you achieve your goals.">
      <template #image>
        <Button navigateTo="/"
                class="bg-primary text-white font-Montserrat px-6 h-12 text-lg">
          Get in Touch
        </Button>
        <ImageCard image="https://res.cloudinary.com/dckmlqzgd/image/upload/v1713240777/countryside-women-out-field-posing_23-2148761775_wo8svm.jpg"
                   class="pt-5" />
      </template>
      <template #image2>
        <div class="w-full px-2 flex gap-2  items-center">

          <Image3Card
                      image="https://res.cloudinary.com/dckmlqzgd/image/upload/v1713240843/countryside-women-browsing-phone-together_23-2148761794_udpxoc.jpg" />
          <Image2Card
                      image="https://res.cloudinary.com/dckmlqzgd/image/upload/v1713240956/medium-shot-people-selling-bananas_23-2150830598_epjgud.jpg" />
        </div>
      </template>
    </UiComp>



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
