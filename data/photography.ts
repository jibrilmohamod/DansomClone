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
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Women%20Political%20Participation%20Forum%20-%20Mogadishu%20(51667300629).jpg?width=2200",
  alt: "Somali women taking part in a professional forum in Mogadishu",
  position: "50% 44%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:Women_Political_Participation_Forum_-_Mogadishu_(51667300629).jpg",
  license: "CC0 1.0",
  location: "Mogadishu, Somalia",
 },
 communityDialogue: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Somali%20women%20participate%20in%20political%20forum%20-%2051618325414.jpg?width=2200",
  alt: "Somali women and civil society participants in a public forum in Dhusamareb",
  position: "50% 46%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:Somali_women_participate_in_political_forum_-_51618325414.jpg",
  license: "CC0 1.0",
  location: "Dhusamareb, Somalia",
 },
 fieldMonitoring: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/A%20man%20collects%20water%20from%20a%20well%20in%20Garbahaarey%20town%20in%20the%20Gedo%20region%20of%20Somalia%20on%20August%2011.%20AMISOM's%20Humanitarian%20Unit%20today%20conducted%20an%20assesment%20of%20Garbahaarey%20town%20in%20the%20Gedo%20region%20of%20(14700908410).jpg?width=2200",
  alt: "A Somali resident collecting water during a field assessment in Gedo",
  position: "52% 46%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:A_man_collects_water_from_a_well_in_Garbahaarey_town_in_the_Gedo_region_of_Somalia_on_August_11._AMISOM%27s_Humanitarian_Unit_today_conducted_an_assesment_of_Garbahaarey_town_in_the_Gedo_region_of_(14700908410).jpg",
  license: "CC0 1.0",
  location: "Garbahaarey, Somalia",
 },
 researchWorkshop: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/A%20Group%20of%20Women%20Meets%20at%20a%20Health%20Post%20to%20Discuss%20Issues%20of%20Common%20Concern%20(9502333198).jpg?width=2200",
  alt: "An Ethiopian health extension worker leading a community discussion with women",
  position: "50% 48%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:A_Group_of_Women_Meets_at_a_Health_Post_to_Discuss_Issues_of_Common_Concern_(9502333198).jpg",
  license: "CC BY 2.0",
  location: "SNNP Region, Ethiopia",
 },
 programmeAnalysis: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/2016%2003%2026%20Roundtable%20Discussions%20-12%20(25953128652).jpg?width=2200",
  alt: "Somali students and officials participating in a roundtable discussion in Mogadishu",
  position: "50% 42%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:2016_03_26_Roundtable_Discussions_-12_(25953128652).jpg",
  license: "CC0 1.0",
  location: "Mogadishu, Somalia",
 },
 fieldOperations: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mogadishu%20Daily%20Life%20one%20year%20after%20Al%20Shabaab%2003%20(7731056752).jpg?width=2200",
  alt: "Somali dock workers handling supplies at Mogadishu seaport",
  position: "50% 50%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:Mogadishu_Daily_Life_one_year_after_Al_Shabaab_03_(7731056752).jpg",
  license: "CC0 1.0",
  location: "Mogadishu, Somalia",
 },
 livelihoodsResearch: {
  src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Resilience%20Enhanced%20through%20Adaptation%2C%20Action-learning%20and%20Partnerships%20(REAAP)%20(26960423946).jpg?width=2200",
  alt: "Ethiopian pastoralist women conducting community resource mapping",
  position: "58% 50%",
  sourcePage: "https://commons.wikimedia.org/wiki/File:Resilience_Enhanced_through_Adaptation,_Action-learning_and_Partnerships_(REAAP)_(26960423946).jpg",
  license: "Public domain (USAID)",
  location: "Mieso Woreda, Ethiopia",
 },
} as const satisfies Record<string, DocumentaryPhoto>
