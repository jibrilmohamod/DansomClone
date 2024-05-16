<template>
 <div>
  <TheHeader title="Contact Us">
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
  <TheCard
   data-aos="fade-up"
   data-aos-anchor-placement="top-bottom"
   data-aos-duration="1000"
  >
   <template #One>
    <TheTitle
     title="We Can Help You Navigate what's Next"
     subtitle="  Contact Dansom today to discuss your needs and discover how our services can benefit you. Our team is ready to assist you and provide the guidance and solutions you require. Don't hesitate to reach out and start your journey towards success with Dansom."
     subtitle2="Please contact us at the addresses and numbers listed or fill out the form below and we will get back to you as soon as possible."
    />
   </template>
   <template #Image>
    <div class="w-full h-full flex md:flex-col justify-center md:px-10">
     <div>
      <h3 class="font-Zilla text-2xl font-bold md:py-5 text-pretty">
       Mogadishu
      </h3>
      <div>
       <p class="hover:text-primary hover:duration-200 hover:ease-linear">
        Address: Dirir Building on Balcad Road
       </p>

       <p class="hover:text-primary hover:duration-200 hover:ease-linear">
        Email:
        <a href="mailto:info@dansomconsultancy.org"
         >info@dansomconsultancy.org</a
        >
       </p>
      </div>
     </div>
     <div>
      <h3 class="font-Zilla text-2xl font-bold md:py-5 text-pretty">Nairobi</h3>
      <p class="hover:text-primary hover:duration-200 hover:ease-linear">
       Address: Nas Apartments, No. 4, Milimani Road
      </p>

      <p class="hover:text-primary hover:duration-200 hover:ease-linear">
       Email:
       <a href="mailto:info@dansomconsultancy.org"
        >info@dansomconsultancy.org</a
       >
      </p>
     </div>
    </div>
   </template>
  </TheCard>
  <div class="container mx-auto py-10">
   <div class="flex flex-col gap-2"></div>
   <h2 class="font-DM text-5xl md:text-3xl py-10">Send Us a Message</h2>
   <form>
    <div class="mb-8 flex gap-4">
     <input
      type="text"
      id="name"
      placeholder="Name"
      class="w-full border-b border-gray-300 focus:outline-none focus:border-primary text-lg md:text-xl placeholder:text-quaternary py-4"
     />
     <input
      type="email"
      id="email"
      placeholder="Email"
      class="w-full border-b border-gray-300 focus:outline-none focus:border-primary text-lg md:text-xl placeholder:text-quaternary"
     />
    </div>
    <div class="mb-4 py-5">
     <textarea
      id="message"
      placeholder="Message"
      class="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-lg md:text-xl md:h-52 placeholder:text-quaternary"
     ></textarea>
    </div>
    <button
     type="submit"
     class="bg-primary py-2 px-4 rounded-md md:text-xl hover:bg-quaternary hover:duration-700 transition-all"
    >
     <!-- submit icon  -->
     <div class="flex text-white gap-2 justify-center items-center">
      <p class="font-Montserrat">Submit</p>
      <Icon name="ic:sharp-double-arrow" class="" />
     </div>
    </button>
   </form>
  </div>
 </div>
</template>

<script lang="ts" setup>
 useHead({
  title: "Contact Us | Dansom Consultancy",
  meta: [
   {
    name: "description",
    content:
     "Contact Dansom today to discuss your needs and discover how our services can benefit you. Our team is ready to assist you and provide the guidance and solutions you require. Don't hesitate to reach out and start your journey towards success with Dansom.",
   },
  ],
 })
</script>

<style></style>
