<template>
 <div>
  <TheHeader
   title="Contact Dansom"
   eyebrow="Contact"
   intro="Contact our regional team to discuss research, monitoring, evaluation, advisory or field-support requirements."
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

  <section class="atlas-grid py-24 md:py-40">
   <div class="atlas-shell grid gap-16 lg:grid-cols-12">
    <div class="lg:col-span-7">
     <p class="atlas-label">Project enquiry</p>
     <h2 class="atlas-display mt-6 max-w-[18ch] text-[clamp(2.35rem,4.1vw,4rem)] leading-[0.98]">Discuss your research and advisory needs.</h2>

     <form class="mt-16 border-t border-line/55" @submit.prevent="sendEmail">
      <div class="grid border-b border-line/55 py-7 md:grid-cols-[10rem_1fr] md:items-center">
       <label for="name" class="atlas-label">Your name</label>
       <input
        id="name"
        v-model="form.name"
        name="name"
        type="text"
        autocomplete="name"
        required
        placeholder="Name"
        class="mt-3 w-full border-0 bg-transparent p-0 font-display text-2xl text-mist placeholder:text-mist/[0.28] focus:ring-0 md:mt-0 md:text-3xl"
       />
      </div>
      <div class="grid border-b border-line/55 py-7 md:grid-cols-[10rem_1fr] md:items-center">
       <label for="email" class="atlas-label">Email</label>
       <input
        id="email"
        v-model="form.email"
        name="email"
        type="email"
        autocomplete="email"
        required
        placeholder="you@organisation.org"
        class="mt-3 w-full border-0 bg-transparent p-0 font-display text-2xl text-mist placeholder:text-mist/[0.28] focus:ring-0 md:mt-0 md:text-3xl"
       />
      </div>
      <div class="border-b border-line/55 py-7">
       <label for="message" class="atlas-label">The assignment</label>
       <textarea
        id="message"
        v-model="form.message"
        name="message"
        required
        rows="6"
        placeholder="Describe the context, objectives, and timeline"
        class="mt-5 w-full resize-y border-0 bg-transparent p-0 font-display text-2xl leading-snug text-mist placeholder:text-mist/[0.28] focus:ring-0 md:text-3xl"
       ></textarea>
      </div>
      <div class="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
       <p class="max-w-sm text-sm leading-relaxed text-mist/[0.52]">Submitting opens your email application with the project brief prepared.</p>
       <button type="submit" class="button-primary">
        Prepare email
        <Icon name="mdi:arrow-top-right" />
       </button>
      </div>
     </form>
    </div>

    <aside class="h-fit lg:sticky lg:top-28 lg:col-span-3 lg:col-start-10">
     <p class="atlas-label">Regional presence</p>
     <div class="mt-8 border-t border-line/55">
     <div class="border-b border-line/55 py-7">
       <p class="font-display text-2xl font-semibold">Mogadishu</p>
       <p class="mt-3 text-sm leading-relaxed text-mist/[0.62]">Airport Road, Waberi District,<br />Mogadishu, Somalia</p>
      </div>
      <div class="border-b border-line/55 py-7">
       <p class="font-display text-2xl font-semibold">Nairobi</p>
       <p class="mt-3 text-sm leading-relaxed text-mist/[0.62]">Milimani Road (next to Middle East Bank),<br />Nas Apartment No. 4, P.O.BOX 6334-00610,<br />Nairobi, Kenya</p>
      </div>
      <div class="border-b border-line/55 py-7">
       <p class="font-display text-2xl font-semibold">Hargeisa</p>
       <p class="mt-3 text-sm leading-relaxed text-mist/[0.62]">Shacab Mall, Shacab Street,<br />Second Road, Hargeisa</p>
      </div>
     </div>
     <div class="mt-8 grid gap-4 text-sm">
      <p class="font-semibold text-mist">Dansom Research &amp; Consultancy Ltd</p>
      <a href="tel:+254722853540" class="group flex items-center justify-between border-b border-line/45 pb-3 hover:text-primary">
       <span>+254-722-853-540 <span class="text-mist/45">(Kenya)</span></span>
       <Icon name="mdi:arrow-top-right" class="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </a>
      <a href="tel:+252615570144" class="group flex items-center justify-between border-b border-line/45 pb-3 hover:text-primary">
       <span>+252-61-557-0144 <span class="text-mist/45">(Somalia)</span></span>
       <Icon name="mdi:arrow-top-right" class="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </a>
      <a href="mailto:info@dansomconsultancy.org" class="group flex items-center justify-between gap-4 border-b border-line/45 pb-3 hover:text-primary">
       <span class="break-all">info@dansomconsultancy.org</span>
       <Icon name="mdi:arrow-top-right" class="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </a>
      <a
       href="https://so.linkedin.com/company/dansom-research-and-consultancy"
       target="_blank"
       rel="noopener noreferrer"
       class="group flex items-center justify-between border-b border-line/45 pb-3 hover:text-primary"
      >
       LinkedIn
       <Icon name="mdi:arrow-top-right" class="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
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
   "Contact Dansom Research & Consultancy in Mogadishu, Nairobi, or Hargeisa to discuss monitoring, evaluation, research, security advisory, and programme support needs.",
  ogTitle: "Contact Dansom Research & Consultancy",
  ogDescription:
   "Reach Dansom's teams in Mogadishu, Nairobi, and Hargeisa for research, MEL, advisory, and programme support across the Horn of Africa.",
  ogImage: "/dansom-logo.png",
  twitterCard: "summary_large_image",
 })
</script>
