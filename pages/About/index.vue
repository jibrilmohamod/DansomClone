<template>
 <div class="bg-tertiary min-h-screen text-quinary">
  <TheHeader title="Who We Are">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="Dansom team in the field"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="h-full w-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <section class="container mx-auto px-6 py-16">
   <div class="grid gap-10 md:grid-cols-2 items-center">
    <div class="space-y-4">
     <p class="text-sm uppercase tracking-[0.25em] text-primary">About Dansom</p>
     <h2 class="text-3xl font-bold leading-tight font-Playfair">Research and consultancy rooted in the Horn of Africa</h2>
     <p class="text-lg leading-relaxed text-slate-700 font-Montserrat">
      We partner with humanitarian and development actors to unlock meaningful change across Somalia and Kenya. Our teams combine rigorous research, contextual understanding, and secure access to deliver evidence that informs policies, strengthens programmes, and amplifies community voices.
     </p>
     <div class="grid gap-4 sm:grid-cols-2">
      <div class="rounded-2xl bg-white p-4 shadow-md shadow-slate-200 ring-1 ring-tertiary">
       <p class="text-3xl font-bold text-primary">2009</p>
       <p class="text-sm text-slate-600">Founded to connect global partners with local insight</p>
      </div>
      <div class="rounded-2xl bg-white p-4 shadow-md shadow-slate-200 ring-1 ring-tertiary">
       <p class="text-3xl font-bold text-primary">Full access</p>
       <p class="text-sm text-slate-600">Teams positioned across hard-to-reach regions</p>
      </div>
     </div>
    </div>
    <div class="rounded-[28px] bg-white shadow-xl shadow-slate-200 ring-1 ring-tertiary p-6 space-y-4">
     <h3 class="text-xl font-semibold">What drives us</h3>
     <p class="text-slate-700 leading-relaxed">
      Dansom is built on trust, cultural fluency, and a commitment to ethical research. We work with international consultancies and donor agencies to design tailored engagement strategies, deliver political economy analyses, and provide third-party monitoring and evaluation services.
     </p>
     <p class="text-slate-700 leading-relaxed">
      Our specialists span security, socio-political and economic development, agriculture, health, and policy advisory. Together, we deliver strategies and evidence that ensure programmes succeed in fragile and rapidly changing environments.
     </p>
     <div class="flex flex-wrap gap-2">
      <span class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Ethical research</span>
      <span class="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">Secure access</span>
      <span class="rounded-full bg-quaternary/10 px-3 py-1 text-xs font-semibold text-quaternary">Actionable insight</span>
     </div>
    </div>
   </div>
  </section>

  <section class="bg-white py-16">
   <div class="container mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
    <div class="rounded-[28px] bg-tertiary p-6 shadow-inner shadow-slate-200 ring-1 ring-tertiary">
     <NuxtImg
      provider="cloudinary"
      loading="lazy"
      format="webp"
      sizes="sm:100vw md:50vw lg:1200px"
      src="v1713943514/Community_Mobilization_Bula_jiray-2_vzzaja.jpg"
      class="w-full rounded-2xl object-cover"
     />
    </div>
    <div class="space-y-5">
     <p class="text-sm uppercase tracking-[0.25em] text-primary">Vision</p>
     <h3 class="text-3xl font-bold font-Playfair">Building knowledge that strengthens the Horn of Africa</h3>
     <p class="text-lg text-slate-700 leading-relaxed font-Montserrat">
      Our vision is to support the region by increasing understanding and knowledge through innovative socio-political engagement and strategic field-based research. We aim to be the trusted partner for institutions seeking clarity, accountability, and resilient programme design.
     </p>
     <div class="grid gap-4 sm:grid-cols-2">
      <div class="rounded-2xl bg-tertiary p-4 ring-1 ring-tertiary">
       <p class="text-lg font-semibold text-primary">Informed decisions</p>
       <p class="text-sm text-slate-700">Political economy analysis and security advisory to guide policy and programming.</p>
      </div>
      <div class="rounded-2xl bg-tertiary p-4 ring-1 ring-tertiary">
       <p class="text-lg font-semibold text-primary">Community-first</p>
       <p class="text-sm text-slate-700">Approaches that elevate local voices and prioritize inclusion across every engagement.</p>
      </div>
     </div>
    </div>
   </div>
  </section>

  <section class="bg-gradient-to-r from-primary via-quinary to-primary text-white py-16">
   <div class="container mx-auto px-6">
    <OurExpertise
     title="Our Values"
     subtitle="Our values guide how we work with partners, communities, and one another."
    >
     <template #vfor>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
       <ServiceCard
        v-for="service in services"
        :key="service.title"
        class="bg-white/10 text-white"
        :icon="service.icon"
        :title="service.title"
        :subtitle="service.subtitle"
       />
      </div>
     </template>
    </OurExpertise>
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

  <section class="bg-white py-16">
   <div class="container mx-auto px-6 grid gap-8 md:grid-cols-3">
    <div class="rounded-2xl bg-tertiary p-6 ring-1 ring-tertiary">
     <p class="text-xs uppercase tracking-[0.2em] text-primary">Where we work</p>
     <h4 class="mt-2 text-xl font-semibold">Somalia &amp; Kenya</h4>
     <p class="mt-2 text-sm text-slate-700">Local teams with deep networks and trusted access.</p>
    </div>
    <div class="rounded-2xl bg-tertiary p-6 ring-1 ring-tertiary">
     <p class="text-xs uppercase tracking-[0.2em] text-primary">What we deliver</p>
     <h4 class="mt-2 text-xl font-semibold">Actionable intelligence</h4>
     <p class="mt-2 text-sm text-slate-700">Structured analysis, secure data, and clear recommendations.</p>
    </div>
    <div class="rounded-2xl bg-tertiary p-6 ring-1 ring-tertiary">
     <p class="text-xs uppercase tracking-[0.2em] text-primary">How to start</p>
     <h4 class="mt-2 text-xl font-semibold">Partner with us</h4>
     <p class="mt-2 text-sm text-slate-700">Tell us about your objectives and we will assemble the right team.</p>
     <NuxtLink
      to="/Contact"
      class="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
     >
      Contact Dansom
      <Icon name="mdi:arrow-right" />
     </NuxtLink>
    </div>
   </div>
  </section>
 </div>
</template>

<script setup lang="ts">
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
   image: "v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg",
   alt: "Mahamed M. Dirir",
   about:
    "Over 20 years of experience leading M&E, conflict management, and development cooperation across Somalia.",
   aboutBig:
    "<p>Mahamad Mahab Dirir is a programming, management, social economic, development policy, conflict management, leadership, security and Monitoring and Evaluation Expert with over 20 years of experience in development cooperation and extensive experience working with donors and stakeholders throughout Somalia. As Founder and Executive Director of Dansom Research and Consultancy, he has worked since 2014 supervising numerous projects focused on M&E, including Third Party M&E, research, and project reviews. Mr. Dirir’s specific sector experience additionally includes governance, gender, agriculture, security and economics.</p><p>In his role as Deputy Country Director at Solidarites International, he worked closely with stakeholders, including the Federal Government of Somalia and MOPIC, supporting authorities and administration officials with capacity building and improving access to service delivery in the humanitarian sector.</p><p>He has also previously served as an Evaluation Consultant on an EC-funded project in Puntland, assessing achievement of project targets, recommending corrective measures, and developing guidance for EC support programming.</p><p>As a native Somali, he has a keen understanding of the Somalia context, culture and the development needs of the country. In addition to his top-notch interpersonal skills, his established relationships with local actors help him to access difficult field locations and obtain needed information.</p><p>In addition to his rich experience, Mr. Dirir holds a Master of Science degree in Agriculture Science/Land Use in Developing Countries and is fluent in Somali and English</p>",
  },
  {
   name: "Abdifatah Abdullahi Ali",
   role: "M&E Coordinator",
   image: "v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg",
   alt: "Abdifatah Abdullahi Ali",
   about:
    "Dynamic M&E professional with expertise across food security, livelihoods, WASH, health, governance, and resilience.",
   aboutBig:
    "<p>Mr Abdifatah Abdullahi is a dynamic M&E and evaluation professional with 10 years of combined experience in the horn of Africa across various sectors of food security and livelihood, education, WASH, shelter, health, Nutrition, governance, climate adaptation and resilience. He has practical experience in implementing projects and designing robust M&E systems suited to the needs of all the stakeholders with a clear consideration to the operational context. Before joining Dansom as head of projects, M&E and Research Abdifatah served as the M&E specialist for Mercy corps Kenya for the building Resilience Adaptation to Climate Extremes and Disaster (BRACED) project based in Wajir, he also worked with Solidarities international as the Senior M&E Officer for Kenya-Somalia program overseeing over 10 projects from different donors including ECHO, EU, OFDA, AUSAID and DFID) Over the years he has amassed practical experience in Qualitative and Quantitative data collection and analysis including participatory impact assessment (PIA), most significant change, appreciative inquiry, in-depth interviews sampling and data quality assurance, and developing research frameworks. Mr Abdifatah holds bachelor in Development studies, he is also currently pursuing a master degree in project planning and management and he Speaks fluent Somali, Arabic, Swahili and English.</p>",
  },
  {
   name: "Dr. Zainab Ahmed",
   role: "Health Domain Expert",
   image: "v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg",
   alt: "Dr. Zainab Ahmed",
   about:
    "Medical doctor and M&E expert guiding health domain research and contextualising partner efforts in Somalia.",
   aboutBig:
    "<p>Dr. Zainab Ahmed is the Health Domain Manager at Dansom Research and Consultancy. As a medical doctor and experienced researcher and M&E expert, she brings a wealth of knowledge to her role. Zainab has worked as a GBV advisor for the federal Ministry of Women and Human Rights Development, as well as with humanitarian NGOs such as CARE International and FCA. Her expertise in MEAL and technical proficiency as a technocrat has been instrumental in the success of multiple SDC-funded projects at Dansom, including HEAL and Chasp. Zainab also plays a critical role in coordinating with international partners and contextualizing their efforts in Somalia. Zainab’s dedication and passion for improving healthcare outcomes make her an invaluable member of the Dansom team.</p>",
  },
  {
   name: "Douglas Nzioka",
   role: "Administration & Operations Manager",
   image: "v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg",
   alt: "Douglas Nzioka",
   about:
    "Operations, logistics, finance, and HR leader with extensive donor compliance and M&E experience.",
   aboutBig:
    "<p>Douglas has over 12 years of senior level experience in management (Operations, Financial, Logistics and Human Resources), Procurement and M&E. He has extensive experience conducting M&E assessment and compliance in funded projects in Somalia. He also possesses in-depth knowledge of rules and regulations working on donor funded projects i.e., EU, USAID, UN agency plus others. His strengths include analytical and problem-solving skills, and proven success in planning/implementing proactive organizational procedures and systems. He holds a bachelor degree in business management (Accounting option) from Moi University, and also a certified public accountant (CPA-K) from Strathmore University and is currently pursuing his Master of Business Administration from Jomo Kenyatta University of Agriculture and Technology (JKUAT).</p>",
  },
  {
   name: "Brian O. Mauwa",
   role: "Statistician Data Scientist & ME Specialist",
   image: "v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg",
   alt: "Brian O. Mauwa",
   about:
    "Statistician and data scientist with deep experience in monitoring, verification, and learning across Africa.",
   aboutBig:
    "<p>Brian is an experienced Statistician, Data Scientist and M&E Specialist, with widespread experience in monitoring, verification, evaluation and learning. He has expert knowledge in participatory methodologies, research design (qualitative and quantitative); survey programming and data management; and tools (SPSS, STATA, SAS, R, CSPro, Askia, Advanced Excel, NVivo, Power BI etc.). Brian has over 12 years of professional work experience in his field of specialization. He is also experienced in the development of data collection tools for computer-aided interviews using various platforms including ODK, CSPro, Askia, Survey CTO, SurveyToGo, Google Forms etc. in the fields of livelihood, health, education, governance, entrepreneurship, agriculture etc., working with international and national private and public organizations across Kenya and the African continent, not limited to marginalized and hard to reach areas and marginalized rural communities. Prior to joining Dansom, Brian worked with International Business & Technical Consultants, Inc. (IBTCI) as a Data Manager under the USAID Somalia Program Support Services (USAID – SPSS). The main roles cut across Design, Field, Analysis and Reporting (DFAR) of the Monitoring, Verification, Evaluation and Learning activities; management of the indicator data by developing and maintaining Indicator Performance Tracking Table (IPTT) summarizing indicator analysis and reports; and Data Quality Assessment (DQA) for IP systems, structures and processes. Brian holds a Bachelor’s Degree in Applied Statistics with Computing and other post graduate trainings in Data Science. At Dansom, he is the Analysis and Reporting Expert and has a knack for what he calls the 3-Ds (discipline of time, discipline of execution and attention to detail).</p>",
  },
 ]

 useHead({
  title: "About Us | Dansom Research & Consultancy",
  meta: [
   {
    name: "description",
    content:
     "Learn how Dansom Research & Consultancy partners with humanitarian and development actors across Somalia and Kenya to deliver actionable evidence and resilient programmes.",
   },
  ],
 })
</script>
