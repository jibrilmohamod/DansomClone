<template>
 <div class="min-h-[100dvh] text-slate-900">
  <TheHeader title="Contact">
   <template #image>
    <NuxtImg
     provider="cloudinary"
     loading="lazy"
     format="webp"
     alt="Dansom fieldwork in the Horn of Africa"
     sizes="sm:100vw md:50vw lg:1500px"
     :modifiers="{ effect: 'colorize:60', color: 'black' }"
     src="v1713880776/Banner-3-1600x699_ewoaq4.jpg"
     class="h-full w-full object-cover object-center"
    />
   </template>
  </TheHeader>

  <section class="container grid gap-8 px-4 py-10 md:px-6 md:py-16 lg:grid-cols-[1.5fr_0.8fr] lg:gap-12">
   <div>
    <h2 class="font-display text-3xl font-semibold tracking-tight md:text-4xl">Tell us what you are working on</h2>
    <p class="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
     Share your objectives, operating context, and timeline. Our team will respond with the right regional and technical expertise.
    </p>

    <form class="mt-8 grid gap-5" @submit.prevent="sendEmail">
     <div class="grid gap-5 md:grid-cols-2">
      <div class="grid gap-2">
       <label for="name" class="text-sm font-semibold text-slate-800">Name</label>
       <input
        id="name"
        v-model="form.name"
        name="name"
        type="text"
        autocomplete="name"
        required
        placeholder="Your name"
        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 focus:border-primary focus:outline-none"
       />
      </div>
      <div class="grid gap-2">
       <label for="email" class="text-sm font-semibold text-slate-800">Email</label>
       <input
        id="email"
        v-model="form.email"
        name="email"
        type="email"
        autocomplete="email"
        required
        placeholder="you@organisation.org"
        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 focus:border-primary focus:outline-none"
       />
      </div>
     </div>

     <div class="grid gap-2">
      <label for="message" class="text-sm font-semibold text-slate-800">How can we help?</label>
      <textarea
       id="message"
       v-model="form.message"
       name="message"
       required
       rows="7"
       placeholder="Briefly describe your project or research need"
       class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 focus:border-primary focus:outline-none"
      ></textarea>
      <p class="text-sm text-slate-500">Submitting opens your email application with this message prepared.</p>
     </div>

     <button
      type="submit"
      class="inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 active:translate-y-px"
     >
      Email Dansom
      <Icon name="mdi:email-outline" />
     </button>
    </form>
   </div>

   <aside class="rounded-2xl border border-slate-200 bg-white p-6">
    <h2 class="font-display text-2xl font-semibold text-slate-900">Our offices</h2>
    <div class="mt-5 space-y-5 text-sm leading-relaxed text-slate-600">
     <div>
      <p class="font-semibold text-slate-900">Mogadishu</p>
      <p>Dirir Building on Balcad Road</p>
     </div>
     <div class="border-t border-slate-200 pt-5">
      <p class="font-semibold text-slate-900">Nairobi</p>
      <p>Nas Apartments, No. 4, Milimani Road</p>
     </div>
    </div>
    <div class="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm">
     <a href="tel:+254745276911" class="flex items-center gap-2 text-slate-600 hover:text-primary">
      <Icon name="mdi:phone-outline" />
      +254 745 276 911
     </a>
     <a href="mailto:info@dansomconsultancy.org" class="flex items-center gap-2 text-slate-600 hover:text-primary">
      <Icon name="mdi:email-outline" />
      info@dansomconsultancy.org
     </a>
    </div>
   </aside>
  </section>
 </div>
</template>

<script lang="ts" setup>
 const form = reactive({
  name: "",
  email: "",
  message: "",
 })

 const sendEmail = () => {
  const subject = encodeURIComponent(`Website enquiry from ${form.name}`)
  const body = encodeURIComponent(
   `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
  )
  window.location.href = `mailto:info@dansomconsultancy.org?subject=${subject}&body=${body}`
 }

 useSeoMeta({
  title: "Contact",
  description:
   "Contact Dansom Research & Consultancy in Mogadishu or Nairobi to discuss monitoring, evaluation, research, security advisory, and programme support needs.",
  ogTitle: "Contact Dansom Research & Consultancy",
  ogDescription:
   "Reach Dansom's team in Mogadishu and Nairobi for research, MEL, advisory, and programme support across the Horn of Africa.",
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })
</script>
