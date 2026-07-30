<template>
 <footer class="border-t border-mist/10 bg-panel text-mist">
  <div class="shell py-14 md:py-20">
   <div class="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_1fr]">
    <div>
     <div class="inline-flex rounded-xl border border-[#10222f]/10 bg-[#f7f8f6] px-4 py-3">
      <img src="/dansom-logo.png" alt="Dansom Research & Consultancy" class="w-44" />
     </div>
     <h2 class="mt-8 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
      Evidence built close to the context.
     </h2>
     <NuxtLink to="/Contact" class="button-primary mt-7">
      Contact
      <Icon name="mdi:arrow-top-right" />
     </NuxtLink>
    </div>

    <nav aria-label="Footer navigation" class="grid content-start gap-3 text-sm text-mist/60">
     <p class="mb-2 font-semibold text-mist">Explore</p>
     <NuxtLink to="/About" class="hover:text-primary">About</NuxtLink>
     <NuxtLink to="/Services" class="hover:text-primary">Services</NuxtLink>
     <NuxtLink to="/Portfolio" class="hover:text-primary">Portfolio</NuxtLink>
     <NuxtLink to="/Careers" class="hover:text-primary">Careers</NuxtLink>
     <NuxtLink to="/Contact" class="hover:text-primary">Contact</NuxtLink>
    </nav>

    <div class="text-sm leading-relaxed text-mist/60">
     <p class="font-semibold text-mist">Mogadishu</p>
     <p class="mt-1">Dirir Building on Balcad Road</p>
     <p class="mt-6 font-semibold text-mist">Nairobi</p>
     <p class="mt-1">Nas Apartments, No. 4, Milimani Road</p>
     <div class="mt-6 grid gap-2">
      <a href="mailto:info@dansomconsultancy.org" class="hover:text-primary">info@dansomconsultancy.org</a>
      <a href="tel:+254745276911" class="hover:text-primary">+254 745 276 911</a>
      <a
       href="https://so.linkedin.com/company/dansom-research-and-consultancy"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Dansom Research & Consultancy on LinkedIn"
       class="inline-flex items-center gap-2 font-semibold text-primary"
      >
       <Icon name="ri:linkedin-fill" />
       LinkedIn
      </a>
     </div>
    </div>
   </div>

   <div class="mt-14 flex flex-col gap-2 border-t border-mist/10 pt-6 text-xs text-mist/40 sm:flex-row sm:items-center sm:justify-between">
    <p>&copy; {{ year }} Dansom Research &amp; Consultancy. All rights reserved.</p>
    <p>Research, monitoring, evaluation, and advisory.</p>
   </div>
  </div>
 </footer>
</template>

<script setup>
 const year = new Date().getFullYear()
</script>
