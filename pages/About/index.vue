<template>
 <div class="h-fit w-full overflow-hidden">
  <TheHeader>
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="image"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg"
     class="w-full h-full object-cover object-center"
    />
   </template>
  </TheHeader>

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
    <ImageCard />
   </template>
  </TheCard>

  <!-- Our Vision and Values  -->
  <div
   class="px-6 pt-6 md:container m-auto md:pt-10 bg-secondary bg-opacity-35"
   data-aos="fade-up"
   data-aos-anchor-placement="top-bottom"
   data-aos-duration="1000"
  >
   <TheTitle
    title="Our Vision"
    subtitle="Our vision is To support the development of the horn of Africa by increasing understanding and knowledge through innovative approaches in socio-political engagement and strategic field-based research."
   />

   <ImageCard />
  </div>

  <div
   class="px-6 pt-6 md:container m-auto md:pt-10 bg-secondary bg-opacity-35"
   data-aos="fade-up"
   data-aos-anchor-placement="top-bottom"
   data-aos-duration="1000"
  >
   <TheTitle
    title="Our Values"
    subtitle="Our values are the guiding principles that shape our work and define our approach to research and consultancy. We are committed to the following values:"
   />

   <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ServiceCard
     v-for="value in values"
     :key="value.title"
     :icon="value.icon"
     :title="value.title"
     :subtitle="value.subtitle"
    />
   </div>
  </div>

  <!-- <UiComp
   header="About Us"
   small-text="Refreshing and delicious"
   paragraph="We are a research and consultancy firm that was established in 2009 to work with humanitarian and development partners and ensure powerful transformations in the development of the horn of Africa. Dansom has since developed a network of thematic and regional experts based in Somalia and Kenya, with a unique level of access to hard-to-reach areas and a strong focus on security and socio-political and economic development in Eastern Africa."
  >
   
   <template #button>
    <div class="py-6">
     <button class="px-10 bg-primary py-3 w-fit">
      <nuxt-link to="" class="text-xl text-black font-Josefinsans">
       About Us
      </nuxt-link>
     </button>
    </div>
   </template>

   
   <template #image>
    <div
     class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
     data-aos="fade-up"
     data-aos-duration="1000"
    >
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      :modifiers="{ effect: 'colorize:30', color: 'black' }"
      src="v1713240714/smiling-young-african-girl-wearing-traditional-clothing-classroom-with-students_996993-23087_ygimi3.jpg"
      class="w-full h-full object-cover object-top rounded-md"
     />
    </div>
    <div
     class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12 md:hidden"
     data-aos="fade-up"
     data-aos-duration="1000"
    >
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      :modifiers="{ effect: 'colorize:30', color: 'black' }"
      src="v1713240777/countryside-women-out-field-posing_23-2148761775_wo8svm.jpg"
      class="w-full h-full object-cover object-top rounded-md"
     />
    </div>
   </template>
   <template #image2>
    <div
     class="w-full px-2 flex gap-2"
     data-aos="fade-up"
     data-aos-duration="1000"
    >
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      :modifiers="{ effect: 'colorize:10', color: 'black' }"
      sizes="sm:100px md:50vw lg:600px"
      provider="cloudinary"
      src="v1713240887/countryside-worker-pushing-wheelbarrow-with-peanuts_23-2148761782_qigkes.jpg"
      class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
     />
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      :modifiers="{ effect: 'colorize:20', color: 'black' }"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      src="v1713240956/medium-shot-people-selling-bananas_23-2150830598_epjgud.jpg"
      class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
     />
    </div>
   </template>
  </UiComp> -->
  <!-- <UiComp
   small-text="quality & balance"
   header="Our Vision"
   paragraph="Our vision is To support the development of the horn of Africa by increasing understanding and knowledge through innovative approaches in socio-political engagement and strategic field-based research."
  >
   <template #button>
    <div class="py-6">
     <button class="px-10 bg-primary py-3 w-fit">
      <nuxt-link to="" class="text-xl text-black font-Josefinsans">
       About Us
      </nuxt-link>
     </button>
    </div>
   </template>

   <template #image>
    <div
     class="pt-8 h-[80vh] md:hidden"
     data-aos="fade-up"
     data-aos-duration="1000"
    >
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      :modifiers="{ effect: 'colorize:30', color: 'black' }"
      src="v1713241445/young-black-men-discussing-some-business-plans-be-executed-farmland_216356-75_gll7g5.jpg"
      class="w-full h-full object-cover rounded-md"
     />
    </div>

    <div
     class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
     data-aos="fade-up"
     data-aos-duration="1000"
    >
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      :modifiers="{ effect: 'colorize:30', color: 'black' }"
      src="v1713241445/young-black-men-discussing-some-business-plans-be-executed-farmland_216356-75_gll7g5.jpg"
      class="w-full h-full object-cover object-top rounded-md"
     />
    </div>
   </template>

   <template #image2>
    <div
     class="w-full px-2 flex gap-2"
     data-aos="fade-up"
     data-aos-duration="1000"
    >
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      :modifiers="{ effect: 'colorize:10', color: 'black' }"
      sizes="sm:100px md:50vw lg:600px"
      provider="cloudinary"
      src="v1713240843/countryside-women-browsing-phone-together_23-2148761794_udpxoc.jpg"
      class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
     />
     <NuxtImg
      loading="lazy"
      format="webp"
      alt="image"
      :modifiers="{ effect: 'colorize:10', color: 'black' }"
      sizes="sm:100vw md:50vw lg:800px"
      provider="cloudinary"
      src="v1713241586/young-boy-holding-bunch-vegetables-field_662214-181069_urmsm3.jpg"
      class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
     />
    </div>
   </template>
  </UiComp> -->

  <OurTeam />
 </div>
</template>

<script>
 let values = [
  {
   //respect
   title: "Respect",
   icon: "fas fa-handshake",
   subtitle:
    "To ensure our research is ethical and respectful to all stakeholders, we are committed to the highest standards of integrity and professionalism.",
  },
  //creativity
  {
   title: "Creativity",
   icon: "fas fa-lightbulb",
   subtitle:
    "We are committed to innovative approaches in our research and consultancy work, ensuring that we provide our clients with the best possible solutions.",
  },
  //commitment
  {
   title: "Commitment",
   icon: "fas fa-heart",
   subtitle:
    "We are dedicated to providing our clients with the highest quality of service, ensuring that we meet their needs and exceed their expectations.",
  },
  //Accountability
  {
   title: "Accountability",
   icon: "fas fa-balance-scale",
   subtitle:
    "We are committed to being transparent and accountable in all our work, ensuring that we deliver on our promises and meet our commitments.",
  },
 ]

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
 })
</script>

<style lang="scss" scoped></style>
