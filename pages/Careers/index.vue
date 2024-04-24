<template>
 <div>
  <TheHeader title="Careers">
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

  <!-- page intro -->
  <OurExpertise
   title="Careers at Dansom"
   subtitle="
Dansom is an Equal Opportunity Employer. We are committed to equal treatment of all employees without regard to race, national origin, religion, gender, age, sexual orientation, veteran status, physical or mental disability or other basis protected by law. While the Company is committed to following this principle in every facet of employment, all employees share in the responsibility to promote and foster a favorable work environment."
  >
   <template #vfor>
    <p
     class="text-black md:w-3/4 2xl:pb-7 py-5 font-Lora text-lg md:text-xl md:pr-3 pt-5 2xl:text-2xl -mt-5"
    >
     We are always looking for talented individuals to join our team. If you are
     interested in a career at Dansom, please send your resume to
     <a
      href="mailto:info@dansomconsultancy.org"
      class="underline font-DM text-quaternary"
     >
      info@dansomconsultancy.org
     </a>
     and we will get back to you as soon as possible.
    </p>
   </template>
  </OurExpertise>
 </div>
</template>

<script lang="ts" setup>
 useHead({
  title: "Careers | Dansom Consultancy",
  meta: [
   {
    name: "description",
    content:
     "Dansom is an Equal Opportunity Employer. We are committed to equal treatment of all employees without regard to race, national origin, religion, gender, age, sexual orientation, veteran status, physical or mental disability or other basis protected by law. While the Company is committed to following this principle in every facet of employment, all employees share in the responsibility to promote and foster a favorable work environment",
   },
  ],
 })
</script>

<style></style>
