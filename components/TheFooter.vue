<template>
 <footer class="atlas-grid border-t border-line/45 bg-panel py-16 text-mist md:py-24">
  <div class="atlas-shell">
   <div class="grid gap-12 lg:grid-cols-12">
    <div class="lg:col-span-7">
     <p class="atlas-label">Research and advisory enquiries</p>
     <h2 class="atlas-display mt-6 max-w-3xl text-[clamp(2.25rem,3.8vw,3.75rem)] leading-[0.98]">Discuss your next assignment with our team.</h2>
     <NuxtLink to="/Contact" class="button-primary mt-9">Start a project <Icon name="mdi:arrow-top-right" /></NuxtLink>
    </div>
    <div class="grid gap-10 border-t border-line/50 pt-8 sm:grid-cols-[8rem_1fr] lg:col-span-5 lg:col-start-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
     <nav aria-label="Footer navigation" class="grid content-start gap-3 text-sm text-mist/60">
      <p class="mb-2 font-semibold text-mist">Explore</p>
      <NuxtLink to="/About">About</NuxtLink><NuxtLink to="/Services">Services</NuxtLink><NuxtLink to="/Portfolio">Work</NuxtLink><NuxtLink to="/Careers">Careers</NuxtLink><NuxtLink to="/Contact">Contact</NuxtLink>
     </nav>
     <div class="text-sm leading-relaxed text-mist/62">
      <p class="font-semibold text-mist">Mogadishu</p><p class="mt-1">Airport Road, Waberi District,<br />Mogadishu, Somalia</p>
      <p class="mt-5 font-semibold text-mist">Nairobi</p><p class="mt-1">Milimani Road (next to Middle East Bank),<br />Nas Apartment No. 4, P.O.BOX 6334-00610,<br />Nairobi, Kenya</p>
      <p class="mt-5 font-semibold text-mist">Hargeisa</p><p class="mt-1">Shacab Mall, Shacab Street,<br />Second Road, Hargeisa</p>
      <p class="mt-6 font-semibold text-mist">Dansom Research &amp; Consultancy Ltd</p>
      <a href="mailto:info@dansomconsultancy.org" class="mt-2 block break-all text-primary">info@dansomconsultancy.org</a>
      <a href="tel:+254722853540" class="mt-2 block">+254-722-853-540 (Kenya)</a>
      <a href="tel:+252615570144" class="mt-1 block">+252-61-557-0144 (Somalia)</a>
     </div>
    </div>
   </div>
   <div class="mt-20 flex flex-col gap-4 border-t border-line/45 pt-6 text-xs text-mist/40 sm:flex-row sm:justify-between">
    <p>&copy; {{ new Date().getFullYear() }} Dansom Research & Consultancy</p>
    <a href="https://so.linkedin.com/company/dansom-research-and-consultancy" target="_blank" rel="noopener noreferrer" class="text-primary">LinkedIn</a>
   </div>
  </div>
 </footer>
</template>
