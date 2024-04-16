<template>
  <div class="">
    <TheHero />

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

<script setup
        lang="ts">
        import { Button } from "@/components/ui/button";

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
            icon: "material-symbols-light:chart-data-outline-rounded",
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
        ];
</script>

<style lang="scss"
       scoped></style>
