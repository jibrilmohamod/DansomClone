<template>
  <div
    class="md:pt-0 pl-6 pr-3 pb-4 md:container md:m-auto md:flex md:gap-x-6 2xl:px-0 md:px-6 flex-col"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="py-4 flex flex-col gap-2">
      <h4
        class="hidden md:block leading-tight 2xl:text-6xl font-DM text-5xl w-1/2"
      >
        Our Expertise and Services
      </h4>
      <p
        class="font-Zilla text-[18px] leading-relaxed tracking-wide text-black 2xl:w-3/4 2xl:pb-7 w-2/3"
      >
        With access to various locations within Somalia, DANSOM provides high
        quality tailor made services to the clients’ needs, goals and
        objectives. We provide an array of services including but not limited to
        third party monitoring and evaluation, political economy analysis
        ,security advisory and formative research and policy advisory services
      </p>
    </div>
    <div class="md:flex flex-wrap justify-center">
      <ServiceCard
        data-aos="fade-up"
        data-aos-duration="1000"
        class="basis-1/2"
        v-for="service in services"
        :key="service.title"
        :icon="service.icon"
        :title="service.title"
        :subtitle="service.subtitle"
      />
    </div>
  </div>
</template>

<script setup>
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

<style lang="scss" scoped></style>
