export interface DansomService {
 title: string
 slug: string
 fullTitle: string
 category: string
 icon: string
 description: string
 subtitle: string
 deliveryModel: string
 about: string
 areasOfWork: string[]
 methods: string[]
}

export const services: DansomService[] = [
 {
  title: "Political Economy Analysis",
  slug: "Political Economy Analysis",
  fullTitle: "Political Economy Analysis and Security Advisory",
  category: "Advisory",
  icon: "mdi:chart-timeline-variant-shimmer",
  description:
   "Grounded analysis of power, incentives, economic conditions, security risks, and stakeholder networks.",
  subtitle:
   "Political economy, economic growth, and security analysis for policy and programme decisions in Somalia and East Africa.",
  deliveryModel: "Political economy research and security advisory",
  about:
   "<p>Dansom provides international development agencies, including the World Bank, EU, DFID, FCO, and the UN, with in-depth political economy analysis, economic growth research, and security advisory services in Somalia and the broader East African context.</p><p>Our teams collect current, triangulated information, analyse local networks and power structures, and design strategies that support responsible access to civil society actors and strategic stakeholders in insecure and non-permissive areas.</p><p>We also provide security risk analysis, management planning, and ongoing advisory services, supported by established relationships with private-sector actors, government stakeholders, civil society organisations, and NGOs across Somalia.</p>",
  areasOfWork: ["Political economy research", "Stakeholder and power mapping", "Security risk analysis", "Access strategy and advisory"],
  methods: ["Current information gathering and triangulation", "Local network and incentive analysis", "Stakeholder consultation", "Ongoing contextual and security advice"],
 },
 {
  title: "Third Party Monitoring and Evaluation",
  slug: "Third Party Monitoring and Evaluation",
  fullTitle: "Third Party Monitoring and Performance Evaluation",
  category: "Monitoring and evaluation",
  icon: "mdi:clipboard-check-outline",
  description:
   "Independent monitoring, verification, performance evaluation, programme review, and field-based evidence.",
  subtitle:
   "Independent monitoring and performance evaluation for humanitarian and development programmes across Somalia.",
  deliveryModel: "Field monitoring, verification, and performance evaluation",
  about:
   "<p>Third-party monitoring and performance evaluation are core Dansom services. Our multidisciplinary experts deliver monitoring, verification, process efficiency reviews, performance and impact evaluations, and programme reviews.</p><p>Using qualitative and quantitative methods alongside a region-wide network of field monitors and data collectors, we provide reliable analysis on time so partners can make informed decisions in complex operating environments.</p><p>Our experts have delivered this work for international development agencies including the World Bank, EU, DFID, FCO, UN agencies, and international and local NGOs.</p>",
  areasOfWork: ["Independent field monitoring", "Programme verification", "Performance and impact evaluation", "Process and programme reviews"],
  methods: ["Qualitative and quantitative research", "Field-monitor and data-collector networks", "Evidence verification and triangulation", "Structured analysis and reporting"],
 },
 {
  title: "Formative Research and Policy Advisory Services",
  slug: "Formative Research and Policy Advisory Services",
  fullTitle: "Formative Research and Policy Advisory Services",
  category: "Research",
  icon: "mdi:text-box-search-outline",
  description:
   "Baseline assessments, qualitative research, quantitative surveys, and specialist policy advice.",
  subtitle:
   "Mixed-method formative research that supports programme design, policy development, and strategic decision-making.",
  deliveryModel: "Mixed-method research and policy advisory",
  about:
   "<p>Dansom has built an extensive network of multidisciplinary researchers working across Somalia. We deliver formative baseline assessments on strategically important themes to support international partners and Somali public institutions as they design programmes in newly recovered areas and emerging sectors.</p><p>Our research combines in-depth qualitative assessment with quantitative surveys, systematic ground-truthing, and triangulation so analysis and programme design are based on dependable evidence.</p><p>Our specialist consultants bring expertise in law, economics, financial management, public policy, security advice, and related disciplines.</p>",
  areasOfWork: ["Formative and baseline assessments", "Qualitative research", "Quantitative surveys", "Policy and programme advisory"],
  methods: ["Mixed-method research design", "Systematic ground-truthing", "Evidence triangulation", "Specialist technical review"],
 },
 {
  title: "Organizational Capacity Building and HR",
  slug: "Organizational Capacity Building & HR",
  fullTitle: "Organizational Capacity Building and Human Resource Management",
  category: "Institutional development",
  icon: "mdi:account-group-outline",
  description:
   "Organisational development, capacity-building methods, job evaluation, recruitment, and HR management.",
  subtitle:
   "Practical organisational and human-resource support that strengthens institutions and their people.",
  deliveryModel: "Capacity development and human-resource management",
  about:
   "<p>Through our professional networks, Dansom brings together experienced specialists in organisational development, management, and capacity-building methods. We equip individuals and institutions with practical skills and systems that help them respond to social and development challenges in Somalia.</p><p>Our human-resource support includes staffing, administrative management, job analysis, job descriptions, evaluation and grading exercises, and recruitment designed around the needs of each client.</p><p>Dansom maintains a developed HR policy and draws on an experienced management team and field data-collection network to deliver assignments responsibly.</p>",
  areasOfWork: ["Organisational development", "Institutional capacity building", "Job analysis, evaluation and grading", "Recruitment and HR management"],
  methods: ["Institutional and staffing diagnostics", "Practical training and skills transfer", "Policy and systems support", "Client-specific recruitment processes"],
 },
 {
  title: "Operational and Logistics Management",
  slug: "Operational and Logistics Management",
  fullTitle: "Operational and Logistics Management",
  category: "Operations",
  icon: "mdi:truck-fast-outline",
  description:
   "End-to-end operational, procurement, transport, facilities, security, and coordination support.",
  subtitle:
   "Reliable ground operations and logistics for partners working in difficult and hard-to-reach locations.",
  deliveryModel: "Managed field operations and logistics",
  about:
   "<p>As a full-service consultancy, Dansom can arrange and manage the operational and logistical requirements that accompany technical assignments. Our experience in difficult regions gives us a close understanding of the Somali context and the practical demands of secure delivery.</p><p>We support international organisations that may not otherwise have the same level of access or operational reach.</p><ul><li>Procurement and supply-chain management</li><li>Transportation and fleet management</li><li>Facilities and infrastructure management</li><li>Security and risk management</li><li>Coordination and communication</li></ul>",
  areasOfWork: ["Procurement and supply chains", "Transport and fleet management", "Facilities and infrastructure", "Security, coordination and communication"],
  methods: ["Managed field operations", "Local access and coordination", "Secure logistics planning", "On-site implementation support"],
 },
 {
  title: "Environmental Impact Assessment and Monitoring",
  slug: "Environmental Impact Assessment (EIA) & Monitoring",
  fullTitle: "Environmental Impact Assessment and Monitoring",
  category: "Environmental safeguards",
  icon: "mdi:leaf-circle-outline",
  description:
   "Environmental impact assessment, mitigation planning, compliance monitoring, inspection, and reporting.",
  subtitle:
   "Environmental safeguards and monitoring across agriculture, construction, livestock, water, health, and irrigation.",
  deliveryModel: "Environmental assessment and compliance monitoring",
  about:
   "<p>Dansom combines experience in Environmental Impact Assessment with monitoring of environmental mitigation measures across agriculture, construction, livestock, water supply, health, irrigation, and other funded sectors.</p><p>Our Environmental Mitigation and Monitoring Plans define mitigation measures, monitoring indicators, reporting frequency, responsible parties, and field-monitoring requirements. Each plan and toolset is adapted to the activities being monitored.</p><p>Our teams conduct inspections, collect and analyse environmental data, and work with clients to reduce risk, support compliance, and promote sustainable practice.</p>",
  areasOfWork: ["Environmental impact assessment", "Mitigation planning", "Compliance monitoring", "Field inspection and reporting"],
  methods: ["Activity-specific monitoring plans", "Environmental data collection and analysis", "Field inspections", "Risk reduction and compliance support"],
 },
]
