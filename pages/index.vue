<template>
 <div class="">
  <TheHero />

  <!-- about us card -->
  <TheCard>
   <template #One>
    <div class="h-full flex flex-col items-center">
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
      <ServiceCard
       data-aos="fade-up"
       data-aos-duration="1000"
       class="basis-1/3"
       v-for="(service, index) in services.slice(0, 6)"
       :key="service.title"
       :icon="service.icon"
       :title="service.title"
       :subtitle="service.subtitle"
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
      link="/"
      LinkText="Our Projects"
     >
     </TheTitle>
    </div>
   </template>
   <template #Image>
    <LogoCarousel />
   </template>
  </TheCard>

  <!-- <TheCard>
    
   <template #Image>
    <div class="h-full flex flex-col items-center justify-center">
     <TheTitle
      title="Our Expertise and Services"
      subtitle="With access to various locations within Somalia, DANSOM provides high quality tailor made services to the clients’ needs, goals and objectives. We provide an array of services including but not limited to third party monitoring and evaluation, political economy analysis ,security advisory and formative research and policy advisory services"
      link="/"
      LinkText="Our Services"
     >
     </TheTitle>
    </div>
   </template>
  </TheCard> -->

  <!-- About Us Card  -->
  <!-- <UiComp
      header="Who We are"
      small-text="Dansom"
      paragraph="We are a research and consultancy firm that was established in 2009 to work with humanitarian and development partners and ensure powerful transformations in the development of the horn of Africa. Dansom has since developed a network of thematic and regional experts based in Somalia and Kenya, with a unique level of access to hard-to-reach areas and a strong focus on security and socio-political and economic development in Eastern Africa."
    >
      <template #image>
        <ImageCard class="pt-10" />
      </template>
<template #button>
        <div class="flex pt-8 pb-0">
          <Button
            navigateTo="/"
            class="bg-primary text-white font-Montserrat px-6 h-12 text-lg"
          >
            Learn More
          </Button>
        </div>
      </template>
<template #image2>
        <div
          class="w-full px-2 flex gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:10', color: 'black' }"
            sizes="sm:100px md:50vw lg:600px"
            provider="cloudinary"
            src="v1713240887/countryside-worker-pushing-wheelbarrow-with-peanuts_23-2148761782_qigkes.jpg"
            class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
          />
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:20', color: 'black' }"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1713240956/medium-shot-people-selling-bananas_23-2150830598_epjgud.jpg"
            class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
          />
        </div>
      </template>
</UiComp> -->
  <!-- services card -->
  <!-- <OurExpertise /> -->

  <!-- Patners and Portfolio card -->

  <!-- <UiComp header="Our Partners and Portfolio"
            paragraph="We have worked with a number of partners and clients in the horn of Africa. Our portfolio includes work with the United Nations, the European Union, the World Bank, the Swiss Agency for Development, the Government of Somalia, and a number of international and local NGOs.">
      <template #image>
        <LogoCarousel />
        <div class="flex pt-8 pb-0">
          <Button navigateTo="/"
                  class="bg-primary text-white font-Montserrat px-6 h-12 text-lg">
            Our Projects
          </Button>
        </div>
      </template>

      <template #image2>
        <div class="w-full px-2 flex gap-2"
             data-aos="fade-up"
             data-aos-duration="1000">
          <NuxtImg loading="lazy"
                   format="webp"
                   alt="image"
                   :modifiers="{ effect: 'colorize:10', color: 'black' }"
                   sizes="sm:100px md:50vw lg:600px"
                   provider="cloudinary"
                   src="v1713240887/countryside-worker-pushing-wheelbarrow-with-peanuts_23-2148761782_qigkes.jpg"
                   class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black" />
          <NuxtImg loading="lazy"
                   format="webp"
                   alt="image"
                   :modifiers="{ effect: 'colorize:20', color: 'black' }"
                   sizes="sm:100vw md:50vw lg:800px"
                   provider="cloudinary"
                   src="v1713240956/medium-shot-people-selling-bananas_23-2150830598_epjgud.jpg"
                   class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black" />
        </div>
      </template>
    </UiComp> -->

  <!-- Contact Us Card  -->

  <!-- <UiComp header="We can help you navigate what's next"
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
        <div class="w-full px-2 flex gap-2"
             data-aos="fade-up"
             data-aos-duration="1000">
          <NuxtImg loading="lazy"
                   format="webp"
                   alt="image"
                   :modifiers="{ effect: 'colorize:10', color: 'black' }"
                   sizes="sm:100px md:50vw lg:600px"
                   provider="cloudinary"
                   src="v1713240887/countryside-worker-pushing-wheelbarrow-with-peanuts_23-2148761782_qigkes.jpg"
                   class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black" />
          <NuxtImg loading="lazy"
                   format="webp"
                   alt="image"
                   :modifiers="{ effect: 'colorize:20', color: 'black' }"
                   sizes="sm:100vw md:50vw lg:800px"
                   provider="cloudinary"
                   src="v1713240956/medium-shot-people-selling-bananas_23-2150830598_epjgud.jpg"
                   class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black" />
        </div>
      </template>
    </UiComp> -->
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
