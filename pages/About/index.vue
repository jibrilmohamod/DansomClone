<template>
  <div class="h-fit w-full overflow-hidden">
    <TheHeader title="Who We Are"> </TheHeader>

    <!-- introduction on Dansom -->

    <TheCard
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
    >
      <template #One>
        <TheTitle
          title="About Us"
          subtitle="We are a research and consultancy firm that was established in 2009 to work with humanitarian and development partners and ensure powerful transformations in the development of the horn of Africa. Dansom has since developed a network of thematic and regional experts based in Somalia and Kenya, with a unique level of access to hard-to-reach areas and a strong focus on security and socio-political and economic development in Eastern Africa."
          subtitle2="We have notably worked with international consultancies and international donor agencies on developing tailored community engagement strategies, political economy analysis and third party monitoring and evaluation programmes. Dansom is one of the very few organizations that have demonstrated their capacity to access any part of Somalia and engage meaningfully with, Federal, State, Regional and Local leaders. Our team includes subject matter experts and specialised practitioners combining experience in economic growth, agriculture, health, policy and strategic advisory, conflict and security, programme and organisational management, technical assistance, capacity building and third party monitoring and performance evaluation."
          link="/contact"
          -link-text="Contact Us"
        />
      </template>

      <template #Image>
        <ImageCard
          image="v1713943561/Interview_with_Midnimo_Micro-Finance-Baidoa_zfty83.jpg"
        />
      </template>
    </TheCard>

    <!-- Our Vision and Values  -->
    <div
      style="border-radius: 32% 25% 25% 0% / 0% 46% 42% 47%"
      class="bg-primary bg-opacity-50 border-primary"
    >
      <TheCard>
        <template #One>
          <ImageCard
            image="v1713943514/Community_Mobilization_Bula_jiray-2_vzzaja.jpg"
          />
        </template>

        <template #Image>
          <TheTitle
            title="Our Vision"
            subtitle="Our vision is To support the development of the horn of Africa by increasing understanding and knowledge through innovative approaches in socio-political engagement and strategic field-based research."
            subtitle2="We aim to be the leading research and consultancy firm in the horn of Africa, providing high-quality services to our clients and partners, and contributing to the development of the region. Our vision is to be a trusted partner for our clients, providing them with the best possible solutions to their needs and challenges."
          />
        </template>
      </TheCard>
    </div>

    <!-- Our Values -->
    <OurExpertise
      title="Our Values"
      subtitle="Our values are the guiding principles that shape our work and define our approach to research and consultancy. We are committed to the following core values:"
    >
      <template #vfor>
        <div class="md:flex flex-wrap justify-center">
          <ServiceCard
            data-aos="fade-up"
            data-aos-duration="1000"
            class="basis-1/3"
            v-for="(service, index) in services"
            :key="service.title"
            :icon="service.icon"
            :title="service.title"
            :subtitle="service.subtitle"
          />
        </div>
      </template>
    </OurExpertise>

    <!-- inclusivity and diversity statement -->
    <div
      style="border-radius: 32% 25% 25% 0% / 0% 46% 42% 47%"
      class="bg-primary bg-opacity-50 border-primary flex items-center"
    >
      <TheCard class="">
        <template #One>
          <div class="flex items-center justify-center h-full">
            <TheTitle
              title="COMMUNITY AND MINORITY INCLUSION STATEMENT"
              subtitle="At DANSOM we are committed to fostering an inclusive and diverse environment that embraces individuals regardless of gender and from all backgrounds, including ethnic and religious minorities. Ourx Minority Inclusion Policy reflects our dedication to promoting equality, understanding, and respect among all members within the environment we work in."
            />
          </div>
        </template>

        <template #Image>
          <ImageCard
            image="v1713943547/During_Community_Mobilization_Bula_Jiray-1_gosybn.jpg"
          />
        </template>
      </TheCard>
    </div>

    <OurTeam data-aos="fade-up" data-aos-duration="1000" class="basis-1/3">
      <template #vfor>
        <TeamCard
          data-aos="fade-up"
          data-aos-duration="1000"
          class="basis-1/3"
          v-for="(member, index) in team"
          :key="index"
          :name="member.name"
          :role="member.role"
          :about="member.about"
          :aboutBig="member.aboutBig"
        />
      </template>
    </OurTeam>

    <!-- org chart -->
  </div>
</template>

<script setup lang="ts">
let services = [
  {
    //respect
    title: "Respect",
    icon: "fluent-emoji-high-contrast:handshake",
    subtitle:
      "To ensure our research is ethical and respectful to all stakeholders, we are committed to the highest standards of integrity and professionalism.",
  },
  //creativity
  {
    title: "Creativity",
    icon: "mdi:lightbulb-on-outline",
    subtitle:
      "We are committed to innovative approaches in our research and consultancy work, ensuring that we provide our clients with the best possible solutions.",
  },
  //commitment
  {
    title: "Commitment",
    icon: "ic:twotone-favorite",
    subtitle:
      "We are dedicated to providing our clients with the highest quality of service, ensuring that we meet their needs and exceed their expectations.",
  },
  //Accountability
  {
    title: "Accountability",
    icon: "streamline:legal-justice-scale-2-office-work-legal-scale-justice-unequal-company-arbitration-unbalance-court",
    subtitle:
      "We are committed to being transparent and accountable in all our work, ensuring that we deliver on our promises and meet our commitments.",
  },
];

let team = [
  {
    name: "Mahamed M. Dirir",
    role: "Managing Director",
    image:
      "v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg",
    alt: "Mahamed M. Dirir",
    about:
      "Mahamad Mahab Dirir is a programming, management, social economic, development policy, conflict management, leadership, security  M&E Expert with over 20 years of experience in development cooperation & extensive experience working with donors & stakeholders throughout Somalia.",
    aboutBig:
      "<p>M M Dirir is a seasoned Monitoring & Evaluation (M&E) expert with over two decades of experience, specializing in conflict-affected areas like Somalia. As the CEO of Dansom Research and Consultancy, he has steered the organization towards becoming a reputable player in the field of third-party monitoring and evaluation.</p><p>His leadership has been instrumental in overseeing various projects aimed at resilience-building, humanitarian interventions, and post-conflict recovery, particularly in Somalia. Mr. Dirir has demonstrated strong stakeholder management skills, liaising with governmental bodies, international organizations, NGOs, and local communities to ensure effective project implementation</p><p>His ability to navigate complex socio-political landscapes, coupled with his expertise in security protocols, has enabled him to undertake fieldwork in Somalia with confidence and efficacy./p>",
  },
  {
    name: "Abdifatah Abdullahi Ali",
    role: "Head of programmes",
    image:
      "v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg",
    alt: "Abdifatah Abdullahi Ali",
    about:
      "Mr Abdifatah Abdullahi is a dynamic M&E and evaluation professional with 10 years of combined experience in the horn of Africa across various sectors of food security and livelihood, education, WASH, shelter, health, Nutrition, governance, climate adaptation and resilience.",
    aboutBig:
      "<p>Mr Abdifatah Abdullahi is a dynamic M&E and evaluation professional with 10 years of combined experience in the horn of Africa across various sectors of food security and livelihood, education, WASH, shelter, health, Nutrition, governance, climate adaptation and resilience. He has practical experience in implementing projects and designing robust M&E systems suited to the needs of all the stakeholders with a clear consideration to the operational context. Before joining Dansom as head of projects, M&E and Research Abdifatah served as the M&E specialist for Mercy corps Kenya for the building Resilience Adaptation to Climate Extremes and Disaster (BRACED) project based in Wajir, he also worked with Solidarities international as the Senior M&E Officer for Kenya-Somalia program overseeing over 10 projects from different donors including ECHO, EU, OFDA, AUSAID and DFID) Over the years he has amassed practical experience in Qualitative and Quantitative data collection and analysis including participatory impact assessment (PIA), most significant change, appreciative inquiry, in-depth interviews sampling and data quality assurance, and developing research frameworks. Mr Abdifatah holds bachelor in Development studies, he is also currently pursuing a master degree in project planning and management and he Speaks fluent Somali, Arabic, Swahili and English.</p>",
  },
  {
    name: "Dr. Zainab Ahmed",
    role: "Health Domain Expert",
    image:
      "v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg",
    alt: "Dr. Zainab Ahmed",
    about:
      "Dr. Zainab Ahmed is the Health Domain Manager at Dansom Research and Consultancy. As a medical doctor and experienced researcher and M&E expert, she brings a wealth of knowledge to her role. Zainab has worked as a GBV advisor for the federal Ministry of Women",
    aboutBig:
      "<p>Dr. Zainab Ahmed is the Health Domain Manager at Dansom Research and Consultancy. As a medical doctor and experienced researcher and M&E expert, she brings a wealth of knowledge to her role. Zainab has worked as a GBV advisor for the federal Ministry of Women and Human Rights Development, as well as with humanitarian NGOs such as CARE International and FCA. Her expertise in MEAL and technical proficiency as a technocrat has been instrumental in the success of multiple SDC-funded projects at Dansom, including HEAL and Chasp. Zainab also plays a critical role in coordinating with international partners and contextualizing their efforts in Somalia. Zainab’s dedication and passion for improving healthcare outcomes make her an invaluable member of the Dansom team.</p>",
  },
  {
    name: "Douglas Nzioka",
    role: "Adminitration & Operations Manager",
    image:
      "v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg",
    alt: "Douglas Nzioka",
    about:
      "Douglas has over 12 years of senior level experience in management (Operations, Financial, Logistics and Human Resources), Procurement and M&E. He has extensive experience conducting M&E assessment and compliance in funded projects in Somalia.",
    aboutBig:
      "<p>Douglas has over 12 years of senior level experience in management (Operations, Financial, Logistics and Human Resources), Procurement and M&E. He has extensive experience conducting M&E assessment and compliance in funded projects in Somalia. He also possesses in-depth knowledge of rules and regulations working on donor funded projects i.e., EU, USAID, UN agency plus others. His strengths include analytical and problem-solving skills, and proven success in planning/implementing proactive organizational procedures and systems. He holds a bachelor degree in business management (Accounting option) from Moi University, and also a certified public accountant (CPA-K) from Strathmore University and is currently pursuing his Master of Business Administration from Jomo Kenyatta University of Agriculture and Technology (JKUAT).</p>",
  },
  {
    name: "Brian O. Mauwa",
    role: "Statistician Data Scientist & ME Specialist",
    image:
      "v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg",
    alt: "Brian O. Mauwa",
    about:
      "Brian is an experienced Statistician, Data Scientist and M&E Specialist, with widespread experience in monitoring, verification, evaluation and learning. He has expert knowledge in participatory methodologies and research design.",
    aboutBig:
      "<p>Brian is an experienced Statistician, Data Scientist and M&E Specialist, with widespread experience in monitoring, verification, evaluation and learning. He has expert knowledge in participatory methodologies, research design (qualitative and quantitative); survey programming and data management; and tools (SPSS, STATA, SAS, R, CSPro, Askia, Advanced Excel, NVivo, Power BI etc.). Brian has over 12 years of professional work experience in his field of specialization. He is also experienced in the development of data collection tools for computer-aided interviews using various platforms including ODK, CSPro, Askia, Survey CTO, SurveyToGo, Google Forms etc. in the fields of livelihood, health, education, governance, entrepreneurship, agriculture etc., working with international and national private and public organizations across Kenya and the African continent, not limited to marginalized and hard to reach areas and marginalized rural communities. Prior to joining Dansom, Brian worked with International Business & Technical Consultants, Inc. (IBTCI) as a Data Manager under the USAID Somalia Program Support Services (USAID – SPSS). The main roles cut across Design, Field, Analysis and Reporting (DFAR) of the Monitoring, Verification, Evaluation and Learning activities; management of the indicator data by developing and maintaining Indicator Performance Tracking Table (IPTT) summarizing indicator analysis and reports; and Data Quality Assessment (DQA) for IP systems, structures and processes. Brian holds a Bachelor’s Degree in Applied Statistics with Computing and other post graduate trainings in Data Science. At Dansom, he is the Analysis and Reporting Expert and has a knack for what he calls the 3-Ds (discipline of time, discipline of execution and attention to detail).</p>",
  },
  {
    name: "Sagal Mohamoud",
    role: "Operations Coordinator",
    about:
      "Sagal has 15 years of experience in operations, financial management, logistics, HR, procurement, and M&E. She holds an MBA from Marymount University and has led USAID/EU projects and Cash-for-Work programs in Somalia,Iraq and Afghanistan.",
    aboutBig:
      "<p>With over 15 years of senior-level experience in operations, financial management, logistics, human resources, procurement, and monitoring and evaluation (M&E), she brings a wealth of expertise to her roles. Her extensive background includes conducting M&E assessments in Somalia and a deep understanding of EU & USAID rules and regulations, gained through over 10 years of work on USAID/EU-funded projects.</p><p>Her strengths lie in analytical and problem-solving skills, complemented by a proven track record in planning and implementing proactive organizational procedures and systems. She is highly people-oriented, with excellent communication and organizational abilities. She holds a Master of Business Administration (MBA) from Marymount University in Arlington, Virginia, USA.</p><p>Throughout her career, she has successfully led and managed multifaceted projects, ensuring efficient and effective delivery of outcomes. Her experience in operations includes overseeing complex supply chain logistics, optimizing resource allocation, and improving operational workflows to enhance productivity and cost-efficiency.</p><p>As a Cash-for-Work expert, she has worked on projects in Somalia, Iraq, and Afghanistan. In Somalia, she managed the Cash-for-Work program in Puntland, which was established following the Tsunami that struck the Bender Bayla region in 2004. Her role involved designing and executing cash transfer mechanisms, coordinating with local stakeholders, and ensuring the successful rehabilitation of community infrastructure while providing livelihoods for affected populations.</p><p>Her experience across diverse geographies and challenging environments has equipped her with a unique perspective and the ability to adapt to dynamic and complex situations.</p>",
  },
];
useHead({
  title: "About Us | Dansom Research & Consultancy",
  meta: [
    {
      name: "keywords",
      content:
        "Dansom Research & Consultancy, Dansom Research & Consultancy Nairobi, Dansom Research & Consultancy Kenya, Dansom Research & Consultancy Banda Street, Dansom Research & Consultancy Menu, Dansom Research & Consultancy Contact, Dansom Research & Consultancy Location, Dansom Research & Consultancy About Us, Dansom Research & Consultancy, Dansom Research & Consultancy Cuisine, Dansom Research & Consultancy Dining, Dansom Research & Consultancy Ambiance, Dansom Research & Consultancy Menu, Dansom Research & Consultancy Philosophy, Dansom Research & Consultancy Come and Visit Us Today",
    },
    //   description
    {
      name: "description",
      content:
        "Dansom Research & Consultancy is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "googlebot",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Dansom Research & Consultancy",
    },
    {
      name: "page-topic",
      content: "Dansom Research & Consultancy",
    },
    {
      name: "page-type",
      content: "Restaurant",
    },
    {
      name: "audience",
      content: "all",
    },
    {
      name: "distribution",
      content: "global",
    },
    {
      name: "rating",
      content: "general",
    },
    {
      name: "revisit-after",
      content: "7 days",
    },
    {
      name: "language",
      content: "en-us",
    },
    // og meta
    {
      name: "og:title",
      content: "About Us | Dansom Research & Consultancy",
    },
    {
      name: "og:url",
      content: "https://zaman-restaurant.vercel.app/aboutus",
    },
    {
      name: "og:description",
      content:
        "Dansom Research & Consultancy is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.",
    },
    {
      name: "og:image",
      content:
        "https://res.cloudinary.com/dq6hflqwx/image/upload/v1629277449/2O0A8677_x3a9xc.webp",
    },
    {
      name: "og:site_name",
      content: "Dansom Research & Consultancy",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:locale",
      content: "en_US",
    },
  ],
});
</script>

<style scoped>
.bg {
  background: radial-gradient(
        farthest-side at -33.33% 50%,
        #0000 52%,
        #474bff 54% 57%,
        #0000 59%
      )
      0 calc(40px / 2),
    radial-gradient(
        farthest-side at 50% 133.33%,
        #0000 52%,
        #474bff 54% 57%,
        #0000 59%
      )
      calc(40px / 2) 0,
    radial-gradient(
      farthest-side at 133.33% 50%,
      #0000 52%,
      #474bff 54% 57%,
      #0000 59%
    ),
    radial-gradient(
      farthest-side at 50% -33.33%,
      #0000 52%,
      #474bff 54% 57%,
      #0000 59%
    ),
    #47d3ff;
  background-size: calc(40px / 4.667) 40px, 40px calc(40px / 4.667);
}
</style>
