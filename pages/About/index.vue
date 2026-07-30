<template>
 <div>
  <TheHeader
   title="Inside Dansom"
   eyebrow="Independent since 2009"
   intro="A regional research institution built around access, judgement, and the people who know the context."
  >
   <template #image>
    <img
     loading="eager"
     fetchpriority="high"
     width="1570"
     height="1002"
     alt="Research specialists reviewing a fieldwork plan together"
     src="/dansom-research-workshop.jpg"
     class="h-full w-full object-cover"
    />
   </template>
  </TheHeader>

  <section class="atlas-grid py-24 md:py-40">
   <div class="atlas-shell grid gap-14 lg:grid-cols-12">
    <p class="atlas-label lg:col-span-2">The premise</p>
    <RevealBlock class="lg:col-span-9 lg:col-start-4">
     <h2 class="atlas-display text-[clamp(3.5rem,8.8vw,9rem)] leading-[0.84]">
      Evidence is only useful when it understands where it came from.
     </h2>
     <p class="mt-10 max-w-3xl text-lg leading-relaxed text-mist/[0.65] md:ml-auto md:text-2xl">
      We partner with humanitarian and development actors across Somalia and Kenya. Multidisciplinary teams connect rigorous research, contextual understanding, and secure access to produce evidence that informs policies, strengthens programmes, and amplifies community voices.
     </p>
    </RevealBlock>
   </div>
  </section>

  <section class="relative min-h-[125dvh]">
   <div class="sticky top-0 min-h-[100dvh] overflow-hidden">
    <img
     loading="lazy"
     width="1586"
     height="992"
     src="/dansom-community-dialogue.jpg"
     alt="Community members sharing local knowledge with researchers"
     class="atlas-photo absolute inset-0 h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/45 to-ink/95"></div>
    <div class="atlas-shell relative flex min-h-[100dvh] flex-col justify-between py-28 text-white md:py-36">
     <div class="grid gap-6 lg:grid-cols-12">
      <p class="atlas-label text-primary lg:col-span-2">Our vision</p>
      <p class="max-w-sm text-base leading-relaxed text-white/[0.68] lg:col-span-3 lg:col-start-10">
       Increase understanding through innovative socio-political engagement and strategic field-based research.
      </p>
     </div>
     <h2 class="atlas-display max-w-[12ch] text-[clamp(4.2rem,12vw,12rem)] leading-[0.78]">Knowledge that strengthens the region.</h2>
    </div>
   </div>
  </section>

  <section class="atlas-grid py-24 md:py-40">
   <div class="atlas-shell">
    <div class="grid gap-8 lg:grid-cols-12">
     <p class="atlas-label lg:col-span-2">Operating code</p>
     <h2 class="atlas-display text-[clamp(3rem,7vw,7rem)] leading-[0.86] lg:col-span-8 lg:col-start-4">Four commitments. Every assignment.</h2>
    </div>
    <div class="mt-20">
     <RevealBlock
      v-for="(service, index) in services"
      :key="service.title"
      class="group grid min-h-[42dvh] items-center border-t border-line/55 py-10 md:grid-cols-12"
     >
      <span class="atlas-label md:col-span-2">0{{ index + 1 }}</span>
      <h3 class="atlas-display mt-8 text-[clamp(3.5rem,8vw,8rem)] leading-none transition-colors group-hover:text-primary md:col-span-5 md:mt-0">{{ service.title }}</h3>
      <p class="mt-7 max-w-xl text-lg leading-relaxed text-mist/[0.62] md:col-span-4 md:col-start-9 md:mt-0">{{ service.subtitle }}</p>
     </RevealBlock>
    </div>
   </div>
  </section>

  <OurTeam>
   <template #vfor>
    <TeamCard
     v-for="member in team"
     :key="member.name"
     :name="member.name"
     :role="member.role"
     :about="member.about"
     :aboutBig="member.aboutBig"
    />
   </template>
  </OurTeam>

  <section class="atlas-grid py-24 md:py-40">
   <div class="atlas-shell grid gap-10 lg:grid-cols-12 lg:items-end">
    <h2 class="atlas-display text-[clamp(3.8rem,9vw,9rem)] leading-[0.82] lg:col-span-9">Local access. Actionable intelligence.</h2>
    <div class="lg:col-span-3">
     <p class="mb-7 text-base leading-relaxed text-mist/[0.62]">Tell us about your objectives and we will assemble the right team.</p>
     <NuxtLink to="/Contact" class="button-primary">Start a project <Icon name="mdi:arrow-right" /></NuxtLink>
    </div>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
 useSeoMeta({
  title: "About",
  description:
   "Learn about Dansom Research & Consultancy, our Horn of Africa expertise, values, and multidisciplinary team supporting research, monitoring, evaluation, and advisory work.",
  ogTitle: "About Dansom Research & Consultancy",
  ogDescription:
   "Meet the Dansom team and learn how our regional access, research expertise, and values support partners across Somalia and Kenya.",
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })

 let services = [
  {
   title: "Respect",
   icon: "fluent-emoji-high-contrast:handshake",
   subtitle:
    "We uphold integrity and professionalism in every engagement, ensuring ethical research and respectful partnerships.",
  },
  {
   title: "Creativity",
   icon: "mdi:lightbulb-on-outline",
   subtitle:
    "We design innovative approaches tailored to complex environments, delivering solutions that work on the ground.",
  },
  {
   title: "Commitment",
   icon: "ic:twotone-favorite",
   subtitle:
    "We are dedicated to meeting client needs, exceeding expectations, and following through on our promises.",
  },
  {
   title: "Accountability",
   icon: "streamline:legal-justice-scale-2-office-work-legal-scale-justice-unequal-company-arbitration-unbalance-court",
   subtitle:
    "Transparency and responsibility guide our work, from data collection to programme recommendations.",
  },
 ]

 let team = [
  {
   name: "Mahamed M. Dirir",
   role: "Managing Director",
   about:
    "Over 20 years of experience leading M&E, conflict management, and development cooperation across Somalia.",
   aboutBig:
    "<p>Mahamad Mahab Dirir is a programming, management, social economic, development policy, conflict management, leadership, security and Monitoring and Evaluation Expert with over 20 years of experience in development cooperation and extensive experience working with donors and stakeholders throughout Somalia. As Founder and Executive Director of Dansom Research and Consultancy, he has worked since 2014 supervising numerous projects focused on M&E, including Third Party M&E, research, and project reviews. Mr. Dirir’s specific sector experience additionally includes governance, gender, agriculture, security and economics.</p><p>In his role as Deputy Country Director at Solidarites International, he worked closely with stakeholders, including the Federal Government of Somalia and MOPIC, supporting authorities and administration officials with capacity building and improving access to service delivery in the humanitarian sector.</p><p>He has also previously served as an Evaluation Consultant on an EC-funded project in Puntland, assessing achievement of project targets, recommending corrective measures, and developing guidance for EC support programming.</p><p>As a native Somali, he has a keen understanding of the Somalia context, culture and the development needs of the country. In addition to his top-notch interpersonal skills, his established relationships with local actors help him to access difficult field locations and obtain needed information.</p><p>In addition to his rich experience, Mr. Dirir holds a Master of Science degree in Agriculture Science/Land Use in Developing Countries and is fluent in Somali and English</p>",
  },
  {
   name: "Abdifatah Abdullahi Ali",
   role: "M&E Coordinator",
   about:
    "Dynamic M&E professional with expertise across food security, livelihoods, WASH, health, governance, and resilience.",
   aboutBig:
    "<p>Mr Abdifatah Abdullahi is a dynamic M&E and evaluation professional with 10 years of combined experience in the horn of Africa across various sectors of food security and livelihood, education, WASH, shelter, health, Nutrition, governance, climate adaptation and resilience. He has practical experience in implementing projects and designing robust M&E systems suited to the needs of all the stakeholders with a clear consideration to the operational context. Before joining Dansom as head of projects, M&E and Research Abdifatah served as the M&E specialist for Mercy corps Kenya for the building Resilience Adaptation to Climate Extremes and Disaster (BRACED) project based in Wajir, he also worked with Solidarities international as the Senior M&E Officer for Kenya-Somalia program overseeing over 10 projects from different donors including ECHO, EU, OFDA, AUSAID and DFID) Over the years he has amassed practical experience in Qualitative and Quantitative data collection and analysis including participatory impact assessment (PIA), most significant change, appreciative inquiry, in-depth interviews sampling and data quality assurance, and developing research frameworks. Mr Abdifatah holds bachelor in Development studies, he is also currently pursuing a master degree in project planning and management and he Speaks fluent Somali, Arabic, Swahili and English.</p>",
  },
  {
   name: "Jama Mahamed",
   role: "Business Development & Reporting Expert",
   about:
    "Business development and reporting specialist with healthcare operations and programme management experience.",
   aboutBig:
    "<p>Jama has over 3 years of experience in healthcare operations, programme management, strategic planning, and reporting. He has extensive experience producing accurate and timely performance reports, KPIs, and analytical insights that support strategic decision-making in complex, organisational and multi-stakeholder environments, including senior operational roles in hospital services and consultancy projects.</p><p>As an alumni of the NHS Graduate Management Training Scheme in the UK, he brings broad international perspective to Dansom. His strengths include advanced analytical and problem-solving skills, strong stakeholder communication, and proven success in synthesizing complex data into actionable reports.</p><p>He holds a Bachelor’s degree in Biochemistry, a Postgraduate Diploma in Healthcare Leadership from the University of Birmingham, and a Master’s degree in Medical Biotechnology and Business Management.</p>",
  },
  {
   name: "Douglas Nzioka",
   role: "Administration & Operations Manager",
   about:
    "Operations, logistics, finance, and HR leader with extensive donor compliance and M&E experience.",
   aboutBig:
    "<p>Douglas has over 12 years of senior level experience in management (Operations, Financial, Logistics and Human Resources), Procurement and M&E. He has extensive experience conducting M&E assessment and compliance in funded projects in Somalia. He also possesses in-depth knowledge of rules and regulations working on donor funded projects i.e., EU, USAID, UN agency plus others. His strengths include analytical and problem-solving skills, and proven success in planning/implementing proactive organizational procedures and systems. He holds a bachelor degree in business management (Accounting option) from Moi University, and also a certified public accountant (CPA-K) from Strathmore University and is currently pursuing his Master of Business Administration from Jomo Kenyatta University of Agriculture and Technology (JKUAT).</p>",
  },
  {
   name: "Brian O. Mauwa",
   role: "Statistician Data Scientist & ME Specialist",
   about:
    "Statistician and data scientist with deep experience in monitoring, verification, and learning across Africa.",
   aboutBig:
    "<p>Brian is an experienced Statistician, Data Scientist and M&E Specialist, with widespread experience in monitoring, verification, evaluation and learning. He has expert knowledge in participatory methodologies, research design (qualitative and quantitative); survey programming and data management; and tools (SPSS, STATA, SAS, R, CSPro, Askia, Advanced Excel, NVivo, Power BI etc.). Brian has over 12 years of professional work experience in his field of specialization. He is also experienced in the development of data collection tools for computer-aided interviews using various platforms including ODK, CSPro, Askia, Survey CTO, SurveyToGo, Google Forms etc. in the fields of livelihood, health, education, governance, entrepreneurship, agriculture etc., working with international and national private and public organizations across Kenya and the African continent, not limited to marginalized and hard to reach areas and marginalized rural communities. Prior to joining Dansom, Brian worked with International Business & Technical Consultants, Inc. (IBTCI) as a Data Manager under the USAID Somalia Program Support Services (USAID - SPSS). The main roles cut across Design, Field, Analysis and Reporting (DFAR) of the Monitoring, Verification, Evaluation and Learning activities; management of the indicator data by developing and maintaining Indicator Performance Tracking Table (IPTT) summarizing indicator analysis and reports; and Data Quality Assessment (DQA) for IP systems, structures and processes. Brian holds a Bachelor’s Degree in Applied Statistics with Computing and other post graduate trainings in Data Science. At Dansom, he is the Analysis and Reporting Expert and has a knack for what he calls the 3-Ds (discipline of time, discipline of execution and attention to detail).</p>",
  },
  {
   name: "Mumina Hassan",
   role: "Gender Expert",
   about:
    "Gender specialist and M&E expert advancing inclusive, accountable, and community-centered programming.",
   aboutBig:
    "<p>Mumina Hassan is a Gender Specialist and Monitoring and Evaluation expert with strong experience in gender-transformative programming, youth engagement, and inclusive development. She has solid MEAL expertise, including indicator development, data collection, analysis, and reporting, and is proficient in digital tools such as KOBO and Excel.</p><p>She has worked with national, regional, and international organizations in Kenya, coordinating multi-stakeholder programs across SRHR, SGBV, youth advocacy, and community empowerment. Her work prioritizes the meaningful participation of women, girls, young people, and marginalized groups, with a focus on trauma-informed and gender-responsive approaches.</p><p>Mumina holds a Bachelor of Arts in Social Work and Development Studies and is currently pursuing a Master’s in Development Communication.</p>",
  },
  {
   name: "Jibril Mohamud",
   role: "ICT Expert",
   about:
    "IT specialist and data analyst supporting digital systems, analytics, and evidence-based decision-making.",
   aboutBig:
    "<p>Jibril Mohamud is an IT Specialist and Data Analyst with strong experience in digital data systems, data analysis, and research support for development projects in Somalia. He specializes in designing and managing digital data collection, data cleaning and validation, statistical analysis, and data visualization using tools including ODK, KoboToolbox, Power BI, Tableau, R, Python, SPSS, and STATA.</p><p>He has supported NGO and donor-funded programs, including the World Bank’s Global Education Policy Dashboard, across education, governance, livelihoods, and humanitarian sectors. His work covers survey design, field data coordination, enumerator training, data quality assurance, and monitoring and evaluation in fragile and hard-to-reach contexts.</p><p>Jibril holds a Bachelor’s degree in Business Information Technology and professional certifications in Cloud Computing, Software Engineering, and Data Analysis.</p>",
  },
 ]
</script>
