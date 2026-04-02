<template>
 <div class="text-slate-900">
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

  <section class="container mx-auto px-4 py-10 md:px-6 md:py-16">
   <div class="grid items-center gap-5 rounded-none border-0 bg-transparent p-0 shadow-none backdrop-blur-none md:dansom-card md:gap-10 md:p-10 md:backdrop-blur-xl md:grid-cols-2">
    <div class="space-y-3 md:space-y-4">
     <p class="text-xs uppercase tracking-[0.2em] text-secondary md:text-sm md:tracking-[0.25em]">About Dansom</p>
     <h2 class="font-display text-2xl font-semibold leading-tight md:text-3xl">Research and consultancy rooted in the Horn of Africa</h2>
     <p class="font-body text-sm leading-relaxed text-slate-700 md:text-lg">
      We partner with humanitarian and development actors to unlock meaningful change across Somalia and Kenya. Our teams combine rigorous research, contextual understanding, and secure access to deliver evidence that informs policies, strengthens programmes, and amplifies community voices.
     </p>
     <div class="grid gap-3 sm:grid-cols-2 md:gap-4">
      <div class="rounded-lg border border-slate-200/80 bg-white/90 p-3 shadow-none md:dansom-card-soft md:p-4">
       <p class="text-2xl font-semibold text-slate-900 md:text-3xl">2009</p>
       <p class="text-sm text-slate-600">Founded to connect global partners with local insight</p>
      </div>
      <div class="rounded-lg border border-slate-200/80 bg-white/90 p-3 shadow-none md:dansom-card-soft md:p-4">
       <p class="text-2xl font-semibold text-slate-900 md:text-3xl">Full access</p>
       <p class="text-sm text-slate-600">Teams positioned across hard-to-reach regions</p>
      </div>
     </div>
    </div>
    <div class="rounded-lg border border-slate-200/80 bg-white p-4 shadow-none md:dansom-card md:p-6 md:shadow-inner md:shadow-slate-200">
     <h3 class="text-lg font-semibold md:text-xl">What drives us</h3>
     <p class="mt-2 text-sm leading-relaxed text-slate-700 md:mt-3 md:text-base">
      Dansom is built on trust, cultural fluency, and a commitment to ethical research. We work with international consultancies and donor agencies to design tailored engagement strategies, deliver political economy analyses, and provide third-party monitoring and evaluation services.
     </p>
     <p class="mt-2 text-sm leading-relaxed text-slate-700 md:mt-3 md:text-base">
      Our specialists span security, socio-political and economic development, agriculture, health, and policy advisory. Together, we deliver strategies and evidence that ensure programmes succeed in fragile and rapidly changing environments.
     </p>
     <div class="mt-3 flex flex-wrap gap-1.5 md:mt-4 md:gap-2">
      <span class="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">Ethical research</span>
      <span class="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">Secure access</span>
      <span class="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">Actionable insight</span>
     </div>
    </div>
   </div>
  </section>

  <section class="py-10 md:py-16">
   <div class="container mx-auto grid items-center gap-6 px-4 md:grid-cols-2 md:gap-10 md:px-6">
    <div class="relative rounded-xl border border-slate-200 bg-white p-3 shadow-none md:rounded-[28px] md:p-6 md:shadow-2xl md:shadow-slate-300/50">
     <NuxtImg
      provider="cloudinary"
      loading="lazy"
      format="webp"
      sizes="sm:100vw md:50vw lg:1200px"
      src="v1713943514/Community_Mobilization_Bula_jiray-2_vzzaja.jpg"
      class="w-full rounded-lg object-cover md:rounded-2xl"
     />
     <div class="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_20%_20%,rgba(124,248,255,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(156,123,255,0.14),transparent_30%)] md:block"></div>
    </div>
    <div class="space-y-3 md:space-y-5">
     <p class="text-xs uppercase tracking-[0.2em] text-secondary md:text-sm md:tracking-[0.25em]">Vision</p>
     <h3 class="font-display text-2xl font-semibold md:text-3xl">Building knowledge that strengthens the Horn of Africa</h3>
     <p class="font-body text-sm leading-relaxed text-slate-700 md:text-lg">
      Our vision is to support the region by increasing understanding and knowledge through innovative socio-political engagement and strategic field-based research. We aim to be the trusted partner for institutions seeking clarity, accountability, and resilient programme design.
     </p>
     <div class="grid gap-3 sm:grid-cols-2 md:gap-4">
      <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 md:rounded-2xl md:p-4">
       <p class="text-base font-semibold text-slate-900 md:text-lg">Informed decisions</p>
       <p class="text-sm text-slate-600">Political economy analysis and security advisory to guide policy and programming.</p>
      </div>
      <div class="rounded-lg border border-slate-200 bg-slate-50 p-3 md:rounded-2xl md:p-4">
       <p class="text-base font-semibold text-slate-900 md:text-lg">Community-first</p>
       <p class="text-sm text-slate-600">Approaches that elevate local voices and prioritize inclusion across every engagement.</p>
      </div>
     </div>
    </div>
   </div>
  </section>

  <section class="py-10 md:py-16">
   <div class="container mx-auto px-4 md:px-6">
    <OurExpertise
     title="Our Values"
     subtitle="Our values guide how we work with partners, communities, and one another."
     variant="light"
    >
     <template #vfor>
      <div class="grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
       <article
        v-for="service in services"
        :key="service.title"
        class="dansom-card group relative overflow-hidden p-4 md:p-6"
       >
        <div class="absolute inset-0 hidden bg-gradient-to-br from-secondary/10 via-transparent to-slate-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block"></div>
        <div class="relative flex items-start justify-between gap-4">
         <span class="dansom-chip">Value</span>
         <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-xl text-secondary ring-1 ring-secondary/20 md:h-12 md:w-12 md:rounded-2xl md:text-2xl">
          <Icon :name="service.icon" />
         </div>
        </div>
        <h4 class="relative mt-4 text-lg font-semibold leading-tight text-slate-900 md:mt-5 md:text-xl">{{ service.title }}</h4>
        <p class="relative mt-2 text-sm leading-relaxed text-slate-600 md:mt-3 md:text-base">{{ service.subtitle }}</p>
        <div class="relative mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200 md:mt-6">
         <div class="h-full w-2/3 bg-secondary transition-all duration-500 group-hover:w-full"></div>
        </div>
       </article>
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
     :image="member.image"
     :alt="member.alt"
     :about="member.about"
     :aboutBig="member.aboutBig"
    />
   </template>
  </OurTeam>

  <section class="py-10 md:py-16">
   <div class="container mx-auto grid gap-3 px-4 md:grid-cols-3 md:gap-8 md:px-6">
    <div class="rounded-lg border border-slate-200 bg-white p-4 shadow-none md:rounded-2xl md:p-6 md:shadow-glow">
     <p class="text-xs uppercase tracking-[0.2em] text-secondary">Where we work</p>
     <h4 class="mt-1.5 text-lg font-semibold md:mt-2 md:text-xl">Somalia &amp; Kenya</h4>
     <p class="mt-2 text-sm text-slate-600">Local teams with deep networks and trusted access.</p>
    </div>
    <div class="rounded-lg border border-slate-200 bg-white p-4 shadow-none md:rounded-2xl md:p-6 md:shadow-glow">
     <p class="text-xs uppercase tracking-[0.2em] text-secondary">What we deliver</p>
     <h4 class="mt-1.5 text-lg font-semibold md:mt-2 md:text-xl">Actionable intelligence</h4>
     <p class="mt-2 text-sm text-slate-600">Structured analysis, secure data, and clear recommendations.</p>
    </div>
    <div class="rounded-lg border border-slate-200 bg-white p-4 shadow-none md:rounded-2xl md:p-6 md:shadow-glow">
     <p class="text-xs uppercase tracking-[0.2em] text-secondary">How to start</p>
     <h4 class="mt-1.5 text-lg font-semibold md:mt-2 md:text-xl">Partner with us</h4>
     <p class="mt-2 text-sm text-slate-600">Tell us about your objectives and we will assemble the right team.</p>
     <NuxtLink
      to="/Contact"
      class="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-surface shadow-none transition hover:-translate-y-1 md:mt-4 md:shadow-glow"
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
  {
   name: "Asha Noor",
   role: "Socio-political Development Expert",
   image: "v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg",
   alt: "Asha Noor",
   about:
    "Socio-political development specialist anchoring community engagement, gender, and governance work.",
   aboutBig:
    "<p>Ms Asha Noor is a consultant in development programming focusing on social and political development, policy and community engagement and participatory programming. Her specialized experience in conflict transformation, governance and community development with a focus on community relations and legal empowerment in complex political and conflict affected contexts led her to develop a broad understanding of socio political development issues, and the significance of change management strategies across all levels of community engagement and development programs.</p><p>Ms Asha’s decade experience in transition, post conflict and post disaster settings in East Africa (Somalia, Kenya and Tanzania, Djibouti) with long standing experience in the Somali context. She is conversant in Somali and conducts real time translation in some of her engagements. Having traveled widely across Europe and Australia she has developed an appreciation for multiculturalism and cross-country environments.</p><p>Ms Asha has been involved with international nonprofit institutions, bilateral organizations, and UN organizations, such as Somali Aid, Somali Peace Line, UN Habitat, HIJRA, GIZ Kenya (Officer), GIZ regional office- Ethiopia (int advisor), and IOM sub regional office for east and horn of Africa (programme officer) and now consults on various projects with the embassies, ministries, UN Agencies and NGOs in the horn of Africa region. Asha holds a master’s degree in Sociology from Moi University and a bachelor’s degree in political science from the University of Hyderabad. She also completed a course in community and policy change from Institute of Social studies, The Hague Netherlands and a Certificate in Humanitarian policy from humanitarian policy group of overseas development institute UK.</p>",
  },
 ]
</script>
