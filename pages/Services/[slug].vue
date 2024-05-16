<template>
 <div>
  <TheHeader :projTitle="slug">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="image"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="w-full h-full object-cover object-center"
    />
   </template>
  </TheHeader>
  <div class="container m-auto">
   <!-- div with icon to the left and text to the right -->
   <div class="flex py-5">
    <!-- icon  -->
    <div class="h-fit flex bg-primary w-1/3 justify-center rounded-md p-2">
     <Icon :name="service.icon" class="text-black h-60 w-60" />
    </div>
    <!-- text  -->
    <div class="w-2/3 flex flex-col md:py-5 md:px-10 mx-auto gap-3">
     <div class="w-11/12">
      <h5 class="font-DM text-3xl md:text-4xl 2xl:text-7xl">
       {{ service.fullTitle }}
      </h5>
     </div>
     <!-- <div>
      <p class="font-Zilla md:w-10/12 2xl:text-xl text-left">
       {{ service.subtitle }}
      </p>
     </div> -->
     <div class="about">
      <p
       class="font-Zilla md:w-10/12 2xl:text-xl text-left"
       v-html="service.about"
      ></p>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script lang="ts" setup>
 const route = useRoute()
 const slug = ref(route.params.slug)
 const service = ref(null)

 let services = [
  {
   icon: "arcticons:adobe-analytics",
   title: "Political Economy Analysis",
   fullTitle: "Political Economy Analysis and Security Advisory",
   subtitle:
    "Political Economy Analysis (PEA) in Somalia to inform programming and policy development.",
   about:
    "<p>Dansom has developed a unique expertise in providing international development agencies such as the World Bank, EU, DFID, FCO and the UN with in-depth political economy analysis, economic growth and security advisory services in the Somali and broader East-African context. The firm has experience in collecting up-to-date, triangulated information on the ground, analysing local networks and power structures, and in designing effective strategies to guarantee access to civil society actors and strategic stakeholders in insecure and non-permissive areas.</p><p>Dansom also provides security risk analysis, management planning and on-going advisory services to international organisations that aim to deliver impact in some of the most volatile environments in the region.</p><p>Dansom has also worked on providing detailed economic analysis for international and national organizations that has informed them on the design and development of economic growth programs. Dansom has an extensive network of private sector actors as well as government stakeholders. Additionally, the firm has, through various other projects expanded its working relationship with numerous civil society organizations and NGO’s across Somalia.</p>",
  },
  {
   icon: "carbon:data-analytics",
   title: "Third Party Monitoring and Evaluation",
   fullTitle: "Third Party Monitoring and Performance Evaluation",
   subtitle:
    "Third Party Monitoring and Evaluation (TPME) of humanitarian and development projects in Somalia.",
   about:
    "<p>DANSOM core expertise lies also in third-party monitoring and performance evaluation. Across our network of multi-disciplinary experts, we combine extensive experience in providing third-party monitoring, verification and evaluation, process efficiency, performance and impact evaluations, as well as programme reviews. Using both qualitative and quantitative methods and leveraging our region-wide network of field monitors and data collectors, we ensure reliable analytical results are provided on time to our clients and allow them to make rapid decisions to steer their programmes in the right direction despite the complexity of their environment of operation.</p><p>Our team of experts have experience in providing third-party monitoring and evaluation services to a range of international development agencies, including the World Bank, EU, DFID, FCO, UN, and other international and local NGOs. Our team has also worked on providing detailed economic analysis for international and national organizations that has informed them on the design and development of economic growth programs.</p>",
  },
  {
   icon: "carbon:data-analytics",
   title: "Formative Research and Policy Advisory Services",
   fullTitle: "Formative Research and Policy Advisory Services",
   subtitle:
    "Formative Research and Policy Advisory Services to inform programming and policy development.",
   about:
    "<p>Dansom has built one of the most extensive and effective networks of multi-disciplinary researchers working in Somalia and has delivered formative baseline assessments on strategically themed areas to support the international community and the Somali government in designing appropriate programmes in newly recovered areas and emerging sectors of interest. Our research services combine in-depth qualitative assessments and quantitative surveys to ensure with systematic ground-truthing and triangulation of information to ensure only the highest quality of data is taken into account for the analysis and programme design phases.</p><p>Our specialized consultants represent a diversity of fields with expertise in law, economics, financial management, public policy, security advice and many other areas.</p>",
  },
  {
   icon: "ph:leaf-thin",
   title: "Environmental Impact Assessment (EIA) & Monitoring",
   fullTitle: "Environmental Impact Assessment (EIA) & Monitoring",
   subtitle:
    "Environmental Impact Assessment (EIA) & Monitoring of humanitarian and development projects in Somalia.",
   about:
    "<p>For years, Dansom has combined its extensive experience in Environmental Impact Assessment (EIA) as well as monitoring the implementation and effectiveness of environmental mitigation measures under all the sectors being funded including agriculture, construction, livestock, water supply, health, irrigation etc. Therefore, Dansom has a well elaborate Environmental Mitigation and Monitoring Plans (EMMPs) and tools that check on Environmental Compliance. The Dansom EMMPs clearly define mitigation measures; monitoring indicators; frequency of reporting; responsible parties; and field monitoring issues. From time to time, the EMMPs are usually customized to fit the needs of the activities being monitored.</p><p>Dansom also provides environmental monitoring services to ensure compliance with environmental regulations and standards. Our team of experts conducts regular inspections, collects data, and analyzes the environmental impact of projects. We work closely with clients to develop effective strategies for minimizing environmental risks and promoting sustainable practices.</p>",
  },
  {
   icon: "pepicons-pencil:people",
   title: "Organizational Capacity Building & HR",
   fullTitle: "Organizational Capacity Building & Human Resource Management",
   subtitle:
    "Organizational Capacity Building & Human Resource Management for local and international organizations in Somalia.",
   about:
    "<p>Through our linkages and networks we are able to tap into a wide range of experienced professionals to undertake given assignments. We recognize that dignity is the most constant element in today’s globalized and highly dynamic work environment. For individuals to be able to perform better, we believe that they must be empowered in a creative way.</p><p>Dansom consists of a network of professionals with several years of hands-on experience in the field of organisational development and management, and capacity development methodologies necessary for efficient and effective management and institutional development as well as website development. We provide expertise, skills and techniques that will enable individuals and organizations to effectively respond to social development challenges in Somalia.</p><p>When it comes to management of human resources, Dansom can utilize its network of consultants and also use its staff as human resource managers to ensure all administrative responsibilities are executed. Dansom can meet staffing needs and deal with all HR related issues as they arise.</p><p>Dansom maintains a fully developed HR policy. We currently employ 12 permanent staff and 30 data collectors as part of our skeleton staff who are a well experienced management team. We carry out job evaluation and grading exercises to meet the specific needs of our clients. We normally require four to six weeks to finalize recruitment assignments depending on the recruitment methodology applied. As part of this exercise, individual jobs are analysed and job descriptions outlined.</p>",
  },
  {
   icon: "ph:gear-six-thin",
   title: "Operational and Logistics Management",
   fullTitle: "Operational and Logistics Management",
   subtitle:
    "Operational and Logistics Management for local and international organizations in Somalia.",
   about:
    "<p>DANSOM as a full-service consultancy firm, in addition to providing technical expertise, is able to arrange and manage all operations and logistical needs on the ground. With over eight years of experience implementing a range of projects in difficult regions, we understand the Somali context intimately and absorb responsibility in operations, logistics and security management. We also have a strong track record and history working with international organizations that otherwise wouldn’t be able to access certain areas with the same level of ease.</p><p>We can provide comprehensive support in areas such as:</p><ul><li>Procurement and supply chain management</li><li>Transportation and fleet management</li><li>Facilities and infrastructure management</li><li>Security and risk management</li><li>Coordination and communication</li></ul>",
  },
  {
   icon: "la:people-carry",
   title: "Community Engagement Strategies",
   fullTitle: "Community Engagement Strategies",
   subtitle:
    "Community Engagement Strategies for local and international organizations in Somalia.",
   about:
    "<p>DANSOM has worked extensively with INGOs such as ACTED and Solidarites International to design bespoke community engagement strategies in order to ensure positive collaboration around humanitarian aid, community-driven governance and development programmes in rural and disenfranchised areas of Somalia.</p><p>Through coordination with district level authorities, community dialogues and in-depth needs assessments, DANSOM was able to define comprehensive plans to resolve local disputes and ensure local buy-in for international initiatives in the WASH, Nutrition and Protection sectors, among other broader security, stabilisation, governance and resilience programming areas. Many of these assessments also outline ways to engage meaningfully with the local community and develop a holistic approach in eradicating poverty and encouraging economic growth as a sustainable measure.</p>",
  },
 ]

 service.value = services.find((service) => service.title === slug.value)
</script>

<style>
 .about p {
  text-align: justify;
  padding: 0px 10px 10px 0px;
 }
</style>
