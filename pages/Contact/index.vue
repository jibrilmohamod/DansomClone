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

  <section class="container mx-auto space-y-6 px-4 py-10 md:space-y-10 md:px-6 md:py-16">
   <div class="grid gap-4 md:grid-cols-3 md:gap-8">
    <div class="rounded-none border-0 bg-transparent p-0 shadow-none md:col-span-2 md:dansom-card md:p-8">
     <p class="text-xs uppercase tracking-[0.2em] text-primary md:text-sm md:tracking-[0.25em]">We can help</p>
     <h2 class="font-display text-2xl font-semibold md:text-3xl">Let&apos;s navigate what&apos;s next together</h2>
     <p class="mt-2 font-body text-sm leading-relaxed text-slate-700 md:mt-3 md:text-lg">
      Contact Dansom today to discuss your needs and discover how our services can benefit you. Our team is ready to assist and provide guidance for your next mission.
     </p>
     <p class="font-body text-sm leading-relaxed text-slate-700 md:text-base">
      Please reach out at the addresses below or fill out the form and we will get back to you quickly.
     </p>

     <form class="mt-5 grid gap-3 md:mt-8 md:gap-4">
      <div class="grid gap-4 md:grid-cols-2">
       <input
        type="text"
        id="name"
        placeholder="Name"
        class="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm placeholder:text-slate-500 focus:border-primary focus:outline-none md:rounded-xl md:px-4 md:py-3 md:text-lg"
       />
       <input
        type="email"
        id="email"
        placeholder="Email"
        class="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm placeholder:text-slate-500 focus:border-primary focus:outline-none md:rounded-xl md:px-4 md:py-3 md:text-lg"
       />
      </div>
      <textarea
       id="message"
       placeholder="How can we help?"
       class="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm placeholder:text-slate-500 focus:border-primary focus:outline-none md:h-48 md:rounded-xl md:px-4 md:py-4 md:text-lg"
      ></textarea>
      <button
       type="submit"
       class="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-none transition hover:-translate-y-0.5 md:px-6 md:py-3 md:shadow-lg md:shadow-primary/30"
      >
       Submit
       <Icon name="ic:sharp-double-arrow" />
      </button>
     </form>
    </div>

    <div class="space-y-3 rounded-xl bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 p-5 text-white shadow-none md:space-y-4 md:rounded-3xl md:p-8 md:shadow-lg md:shadow-slate-500/30">
     <h3 class="text-lg font-semibold md:text-xl">Our Offices</h3>
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
