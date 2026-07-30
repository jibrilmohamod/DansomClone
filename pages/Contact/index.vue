<template>
 <div>
  <TheHeader
   title="Contact"
   eyebrow="Start a conversation"
   intro="Bring us the context, objectives, and uncertainty. We will bring the right regional and technical expertise."
  >
   <template #image>
    <img
     loading="eager"
     fetchpriority="high"
     width="1570"
     height="1002"
     alt="Research specialists collaborating around a regional fieldwork plan"
     src="/dansom-research-workshop.jpg"
     class="h-full w-full object-cover"
    />
   </template>
  </TheHeader>

  <section class="py-20 md:py-32">
   <div class="shell grid gap-12 lg:grid-cols-12">
    <div class="lg:col-span-7">
     <h2 class="display-title text-4xl leading-tight md:text-6xl">Tell us what you are working on.</h2>
     <p class="body-copy mt-5 text-base md:text-lg">
      Share your objectives, operating context, and timeline. Our team will respond with the right regional and technical expertise.
     </p>

     <form class="mt-12 grid gap-6 border-t border-line/55 pt-8" @submit.prevent="sendEmail">
      <div class="grid gap-6 md:grid-cols-2">
       <div class="grid gap-2">
        <label for="name" class="text-sm font-semibold text-mist">Name</label>
        <input
         id="name"
         v-model="form.name"
         name="name"
         type="text"
         autocomplete="name"
         required
         placeholder="Your name"
         class="w-full rounded-xl border border-line/70 bg-panel-soft px-4 py-3.5 text-base text-mist placeholder:text-mist/40 focus:border-primary"
        />
       </div>
       <div class="grid gap-2">
        <label for="email" class="text-sm font-semibold text-mist">Email</label>
        <input
         id="email"
         v-model="form.email"
         name="email"
         type="email"
         autocomplete="email"
         required
         placeholder="you@organisation.org"
         class="w-full rounded-xl border border-line/70 bg-panel-soft px-4 py-3.5 text-base text-mist placeholder:text-mist/40 focus:border-primary"
        />
       </div>
      </div>

      <div class="grid gap-2">
       <label for="message" class="text-sm font-semibold text-mist">How can we help?</label>
       <textarea
        id="message"
        v-model="form.message"
        name="message"
        required
        rows="7"
        placeholder="Briefly describe your project or research need"
        class="w-full rounded-xl border border-line/70 bg-panel-soft px-4 py-3.5 text-base text-mist placeholder:text-mist/40 focus:border-primary"
       ></textarea>
       <p class="text-sm text-mist/[0.45]">Submitting opens your email application with this message prepared.</p>
      </div>

      <button type="submit" class="button-primary w-fit">
       Email Dansom
       <Icon name="mdi:email-outline" />
      </button>
     </form>
    </div>

    <aside class="h-fit border-y border-line/55 py-8 lg:sticky lg:top-28 lg:col-span-4 lg:col-start-9">
     <h2 class="font-display text-3xl font-semibold tracking-tight text-mist">Our offices</h2>
     <div class="mt-7 grid gap-7 text-sm leading-relaxed text-mist/[0.58]">
      <div>
       <p class="font-semibold text-primary">Mogadishu</p>
       <p class="mt-2">Dirir Building on Balcad Road</p>
      </div>
      <div>
       <p class="font-semibold text-primary">Nairobi</p>
       <p class="mt-2">Nas Apartments, No. 4, Milimani Road</p>
      </div>
     </div>
     <div class="mt-8 grid gap-3 border-t border-mist/10 pt-7 text-sm">
      <a href="tel:+254745276911" class="flex items-center gap-3 text-mist/60 hover:text-primary">
       <Icon name="mdi:phone-outline" class="text-primary" />
       +254 745 276 911
      </a>
      <a href="mailto:info@dansomconsultancy.org" class="flex items-center gap-3 break-all text-mist/60 hover:text-primary">
       <Icon name="mdi:email-outline" class="shrink-0 text-primary" />
       info@dansomconsultancy.org
      </a>
      <a
       href="https://so.linkedin.com/company/dansom-research-and-consultancy"
       target="_blank"
       rel="noopener noreferrer"
       class="flex items-center gap-3 text-mist/60 hover:text-primary"
      >
       <Icon name="ri:linkedin-fill" class="text-primary" />
       LinkedIn
      </a>
     </div>
    </aside>
   </div>
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

