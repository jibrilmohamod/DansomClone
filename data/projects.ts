export interface DansomProject {
 title: string
 classification: string
 description: string
 Location: string
 timeframes?: string
 icon: string
 Ngo?: string
 classification2?: string
 description2?: string
 timeframes2?: string
}

export const projects: DansomProject[] = [
 {
  title: "IFC Hargeisa and Mogadishu Training Support",
  classification: "Operational and Logistics Management",
  description:
   "Dansom is providing workshop organisation and field support for IFC training activities in Hargeisa and Mogadishu, including on-site coordination and meeting documentation.",
  Location: "Hargeisa and Mogadishu",
  timeframes: "May 2025 - November 2025",
  icon: "partners/ifc.svg",
  Ngo: "International Finance Corporation",
 },
 {
  title: "Independent Evaluation of Teacher Training Centers",
  classification: "Third Party Monitoring and Evaluation",
  description:
   "An independent assessment of Teacher Training Centers and the teacher-training programme under the SEHCDP, covering governance, funding, human resources, coordination, and training outcomes for 2,600 selected teachers.",
  Location: "Somalia",
  timeframes: "July 2025 - September 2025",
  icon: "partners/world-bank.svg",
  Ngo: "World Bank",
 },
 {
  title: "Global Education Policy Dashboard Somalia",
  classification: "Formative Research and Policy Advisory Services",
  description:
   "Dansom and Particip are supporting the World Bank's Global Education Policy Dashboard in Somalia through formative research on education policies, regional capacity, service delivery, and learning outcomes.",
  Location: "Somalia",
  timeframes: "July 2024 - October 2025",
  icon: "partners/world-bank.svg",
  Ngo: "World Bank",
 },
 {
  title: "WFP Programme Monitoring, Learning and Evaluation Support",
  classification: "Third Party Monitoring and Evaluation",
  description:
   "Dansom and Particip provide coordinated field monitoring, reporting, and assessment support for WFP food-assistance and cash-based transfer activities.",
  Location: "Somalia",
  timeframes: "April 2025 - June 2026",
  icon: "partners/wfp.svg",
  Ngo: "World Food Programme",
 },
 {
  title: "EU Delegation to Somalia Monitoring Programme",
  classification: "Third Party Monitoring and Evaluation",
  description:
   "Independent monitoring of EU-funded interventions across Somalia, including regular field missions and thematic reporting on water services, land and water management, livelihoods, resilient agriculture, infrastructure, health, peacebuilding, and public-sector development.",
  Location: "Somalia",
  timeframes: "July 2016 - January 2027",
  icon: "partners/eu.svg",
  Ngo: "European Union Delegation to Somalia",
  classification2: "Political Economy Analysis and Security Advisory",
  description2:
   "Dansom also contributed to Somalia Maritime Security Actors Mapping through a consortium with IDC and Hoplite.",
  timeframes2: "December 2015 - July 2016",
 },
 {
  title: "UNSOS Monitoring and Evaluation Services",
  classification: "Third Party Monitoring and Evaluation",
  description:
   "A consortium comprising Dansom and Particip provides monitoring and evaluation services in support of UNSOS throughout Somalia.",
  Location: "Somalia",
  timeframes: "December 2020 - present",
  icon: "partners/unsos.svg",
  Ngo: "UNSOS",
 },
 {
  title: "Framework for Risk Governance and Adaptive Programming",
  classification: "Third Party Monitoring and Evaluation",
  description:
   "Support for the Swiss Horn of Africa programme through a framework for risk governance and adaptive programming, with an initial focus on Somalia and Somaliland.",
  Location: "Somalia and Somaliland",
  timeframes: "June 2021 - June 2024",
  icon: "partners/sdc.svg",
  Ngo: "Swiss Agency for Development and Cooperation",
 },
 {
  title: "Technical Assistance on Reorganization and Modernization of MDAs",
  classification: "Organizational Capacity Building and HR",
  description:
   "Technical assistance for a diagnostic review of government ministries, departments, and agencies, covering mandates, functions, organisational structures, staffing, policies, processes, and administrative systems.",
  Location: "Somalia",
  timeframes: "December 2020 - September 2021",
  icon: "partners/somaliland-csc-world-bank.svg",
  Ngo: "Federal Government of Somalia",
 },
 {
  title: "Somali Reintegration Programme Third Party Monitoring",
  classification: "Third Party Monitoring and Evaluation",
  description:
   "Third-party monitoring of a community-based reintegration programme supporting returnees, internally displaced people, and host-community members in Kismayo to establish sustainable livelihoods.",
  Location: "Kismayo, Somalia",
  timeframes: "August 2021 - July 2022",
  icon: "partners/giz.svg",
  Ngo: "GIZ",
 },
 {
  title: "Joint Police Programme Monitoring Services",
  classification: "Third Party Monitoring and Evaluation",
  description:
   "Regular independent analysis of the Joint Police Programme using quantitative and qualitative methods, including routine monitoring, baseline work, annual perception surveys, socio-political analysis, and efficiency measurement.",
  Location: "Somalia",
  timeframes: "December 2018 - December 2023",
  icon: "partners/unops.svg",
  Ngo: "UNOPS",
 },
 {
  title: "Peace and Conflict Assessment in Kismayo",
  classification: "Political Economy Analysis and Security Advisory",
  description:
   "CMC and Dansom conducted a peace and conflict assessment for the Somali Reintegration Programme and Fish for Nutrition project in Kismayo.",
  Location: "Kismayo, Somalia",
  timeframes: "August 2017 - January 2018",
  icon: "partners/giz.svg",
  Ngo: "GIZ",
 },
 {
  title: "Somalia Capacity Injection Project Pay and Grading Reform",
  classification: "Formative Research and Policy Advisory Services",
  description:
   "Fieldwork and diagnostic analysis of public-sector pay, grading trends, and living standards, followed by recommendations to strengthen civil-service incentives and improve management of the public wage bill.",
  Location: "Somalia",
  timeframes: "September 2019 - March 2020",
  icon: "partners/puntland-world-bank.svg",
  Ngo: "World Bank",
 },
 {
  title: "Somalia Maritime Security Actors Mapping",
  classification: "Political Economy Analysis and Security Advisory",
  description:
   "IDC, Hoplite, and Dansom mapped maritime-security actors and relationships to strengthen understanding of Somalia's maritime security landscape.",
  Location: "Somalia",
  timeframes: "December 2015 - July 2016",
  icon: "partners/idc-hoplite.svg",
  Ngo: "IDC and Hoplite",
 },
 {
  title: "Somalia Emergency Drought Response and Recovery Technical Review",
  classification: "Third Party Monitoring and Evaluation",
  description:
   "A third-party technical review of implementation and impact across Somaliland, Puntland, Jubaland, South West State, HirShabelle, and Galmudug.",
  Location: "Somalia",
  timeframes: "December 2017 - December 2018",
  icon: "partners/fao.svg",
  Ngo: "Food and Agriculture Organization",
 },
 {
  title: "World Bank Economic and Fiscal Management Programme Event Support",
  classification: "Operational and Logistics Management",
  description:
   "Event-management and operational support for a World Bank economic and fiscal management programme, including coordination with programme stakeholders.",
  Location: "Somalia",
  timeframes: "September 2016 - December 2016",
  icon: "partners/world-bank.svg",
  Ngo: "World Bank",
  classification2: "Operational and Logistics Management",
  description2:
   "Dansom also facilitated cooperation between the Government of Somalia and the Somalia High Frequency Survey team.",
 },
 {
  title: "Somalia Investment Climate Reform Programme",
  classification: "Political Economy Analysis and Security Advisory",
  description:
   "Political economy analysis of business licensing, the federal permit system, and the relationships among ministries, public institutions, donors, business associations, and emerging membership organisations in Jubaland, Puntland, and Benadir.",
  Location: "Somalia",
  timeframes: "December 2015 - May 2016",
  icon: "partners/ifc.svg",
  Ngo: "IFC and World Bank",
 },
 {
  title: "Somalia National Statistical Capacity Building Project",
  classification: "Organizational Capacity Building and HR",
  description:
   "Dansom and Particip supported statistical capacity-building for federal, Puntland, and South West State planning and statistics institutions so they could conduct, supervise, and coordinate statistical activity.",
  Location: "Somalia",
  timeframes: "February 2018 - August 2019",
  icon: "partners/somalia-planning.svg",
  Ngo: "Federal Government of Somalia",
 },
 {
  title: "Somalia Monitoring Programme",
  classification: "Third Party Monitoring and Evaluation",
  description:
   "Political economy analysis and third-party monitoring designed to strengthen accountability for UK-funded programmes in Puntland and South Central Somalia.",
  Location: "Somalia",
  timeframes: "2014 - 2015",
  icon: "partners/uk-aid.svg",
  Ngo: "DFID",
 },
 {
  title: "Improved Food Security and Enhanced Resilience Programme",
  classification: "Third Party Monitoring and Evaluation",
  description:
   "Field monitoring of selected WFP and FAO projects in Somalia, supported by timely site visits and structured evidence to improve programme implementation.",
  Location: "Somalia and Ethiopia",
  timeframes: "December 2015 - January 2017",
  icon: "partners/wfp-fao.svg",
  Ngo: "WFP and FAO",
  classification2: "Formative Research and Policy Advisory Services",
  description2:
   "Dansom also contributed to research on accountability mechanisms in sesame and sugar supply chains in Kismayo.",
 },
 {
  title: "Final Evaluation of the SCOPES Project",
  classification: "Formative Research and Policy Advisory Services",
  description:
   "Final evaluation of the Strengthening Civil Society and Public Engagement in Somalia project using OECD DAC criteria to assess performance, achievement, and the factors influencing success or failure.",
  Location: "Somalia",
  icon: "partners/care.svg",
  Ngo: "CARE International",
 },
 {
  title: "Multi-Stakeholder Value Chain Analysis and Baseline Study",
  classification: "Formative Research and Policy Advisory Services",
  description:
   "Dansom joined an ICF-led consortium for a multi-stakeholder value-chain analysis and baseline study.",
  Location: "Somalia",
  timeframes: "January 2018 - April 2020",
  icon: "partners/icf.svg",
  Ngo: "ICF International",
 },
 {
  title: "African Development Bank National Steering Committee Support",
  classification: "Operational and Logistics Management",
  description:
   "Logistics and operational support for the African Development Bank's second National Steering Committee meeting.",
  Location: "Somalia",
  timeframes: "February 2018 - March 2018",
  icon: "partners/afdb.svg",
  Ngo: "African Development Bank",
 },
]
