export type DocumentaryPhoto = {
 src: string
 alt: string
 position: string
 sourcePage: string
 license: string
 location: string
}

export const photography = {
 fieldResearchHero: {
  src: "/images/dansom/field-research.webp",
  alt: "Dansom facilitators and participants taking part in a professional workshop",
  position: "50% 47%",
  sourcePage: "",
  license: "Dansom Research & Consultancy archive",
  location: "Mogadishu, Somalia",
 },
 communityDialogue: {
  src: "/images/dansom/community-dialogue.webp",
  alt: "A Dansom researcher listening during a community consultation",
  position: "52% 46%",
  sourcePage: "",
  license: "Dansom Research & Consultancy archive",
  location: "Mandera County, Kenya",
 },
 fieldMonitoring: {
  src: "/images/dansom/field-monitoring.webp",
  alt: "Dansom field researchers meeting members of a pastoralist community",
  position: "55% 48%",
  sourcePage: "",
  license: "Dansom Research & Consultancy archive",
  location: "Mandera County, Kenya",
 },
 researchWorkshop: {
  src: "/images/dansom/research-workshop.webp",
  alt: "Researchers reviewing evidence together during a Dansom workshop",
  position: "52% 50%",
  sourcePage: "",
  license: "Dansom Research & Consultancy archive",
  location: "Mogadishu, Somalia",
 },
 programmeAnalysis: {
  src: "/images/dansom/programme-analysis.webp",
  alt: "A facilitator presenting programme analysis during a Dansom workshop",
  position: "47% 48%",
  sourcePage: "",
  license: "Dansom Research & Consultancy archive",
  location: "Mogadishu, Somalia",
 },
 fieldOperations: {
  src: "/images/dansom/field-operations.webp",
  alt: "A field researcher documenting operations at a local agricultural supply business",
  position: "50% 45%",
  sourcePage: "",
  license: "Dansom Research & Consultancy archive",
  location: "Dadajabula, Kenya",
 },
 livelihoodsResearch: {
  src: "/images/dansom/livelihoods-research.webp",
  alt: "A livestock practitioner working with local assistants during field research",
  position: "48% 50%",
  sourcePage: "",
  license: "Dansom Research & Consultancy archive",
  location: "Kenya",
 },
} as const satisfies Record<string, DocumentaryPhoto>
