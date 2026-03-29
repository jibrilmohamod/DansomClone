<template>
 <div class="min-h-screen text-slate-900">
  <TheHeader title="Contact Us">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="Contact header"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="w-full h-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <section class="container mx-auto px-6 py-16 space-y-10">
   <div class="grid gap-8 md:grid-cols-3">
    <div class="md:col-span-2 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200 ring-1 ring-slate-200">
     <p class="text-sm uppercase tracking-[0.25em] text-primary">We can help</p>
     <h2 class="text-3xl font-bold font-Playfair">Let&apos;s navigate what&apos;s next together</h2>
     <p class="mt-3 text-lg text-slate-700 font-Montserrat leading-relaxed">
      Contact Dansom today to discuss your needs and discover how our services can benefit you. Our team is ready to assist and provide guidance for your next mission.
     </p>
     <p class="text-slate-700 leading-relaxed">
      Please reach out at the addresses below or fill out the form and we will get back to you quickly.
     </p>

     <form class="mt-8 grid gap-4">
      <div class="grid gap-4 md:grid-cols-2">
       <input
        type="text"
        id="name"
        placeholder="Name"
        class="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-lg placeholder:text-slate-500 focus:border-primary focus:outline-none"
       />
       <input
        type="email"
        id="email"
        placeholder="Email"
        class="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-lg placeholder:text-slate-500 focus:border-primary focus:outline-none"
       />
      </div>
      <textarea
       id="message"
       placeholder="How can we help?"
       class="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-lg placeholder:text-slate-500 focus:border-primary focus:outline-none md:h-48"
      ></textarea>
      <button
       type="submit"
       class="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
      >
       Submit
       <Icon name="ic:sharp-double-arrow" />
      </button>
     </form>
    </div>

    <div class="space-y-4 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 text-white p-8 shadow-lg shadow-slate-500/30">
     <h3 class="text-xl font-semibold">Our Offices</h3>
     <div class="space-y-3 text-sm text-white/80">
      <div>
       <p class="text-white font-semibold">Mogadishu</p>
       <p>Dirir Building on Balcad Road</p>
       <a href="mailto:info@dansomconsultancy.org" class="hover:text-white">info@dansomconsultancy.org</a>
      </div>
      <div class="h-px bg-white/20"></div>
      <div>
       <p class="text-white font-semibold">Nairobi</p>
       <p>Nas Apartments, No. 4, Milimani Road</p>
       <a href="mailto:info@dansomconsultancy.org" class="hover:text-white">info@dansomconsultancy.org</a>
      </div>
     </div>
     <div class="space-y-2 text-sm text-white/80">
      <div class="flex items-center gap-2">
       <Icon name="mdi:phone" />
       <span>+254 745 276 911</span>
      </div>
      <div class="flex items-center gap-2">
       <Icon name="mdi:email-outline" />
       <a href="mailto:info@dansomconsultancy.org" class="hover:text-white">info@dansomconsultancy.org</a>
      </div>
     </div>
    </div>
   </div>
  </section>
 </div>
</template>

<script lang="ts" setup>
 useHead({
  title: "Contact Us | Dansom Consultancy",
  meta: [
   {
    name: "description",
    content:
     "Contact Dansom today to discuss your needs and discover how our services can benefit you. Our team is ready to assist you and provide the guidance and solutions you require.",
   },
  ],
 })
</script>

<style></style>
