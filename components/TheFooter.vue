<template>
 <footer class="atlas-grid border-t border-line/45 bg-panel py-16 text-mist md:py-24">
  <div class="atlas-shell">
   <div class="grid gap-12 lg:grid-cols-12">
    <div class="lg:col-span-7">
     <p class="atlas-label">Research and advisory enquiries</p>
     <h2 class="atlas-display mt-6 max-w-4xl text-[clamp(3.3rem,7vw,7rem)] leading-[0.88]">Discuss your next assignment with our team.</h2>
     <NuxtLink to="/Contact" class="button-primary mt-9">Start a project <Icon name="mdi:arrow-top-right" /></NuxtLink>
    </div>
    <div class="grid gap-10 border-t border-line/50 pt-8 sm:grid-cols-2 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
     <nav aria-label="Footer navigation" class="grid content-start gap-3 text-sm text-mist/60">
      <p class="mb-2 font-semibold text-mist">Explore</p>
      <NuxtLink to="/About">About</NuxtLink><NuxtLink to="/Services">Services</NuxtLink><NuxtLink to="/Portfolio">Work</NuxtLink><NuxtLink to="/Careers">Careers</NuxtLink><NuxtLink to="/Contact">Contact</NuxtLink>
     </nav>
     <div class="text-sm leading-relaxed text-mist/60">
      <p class="font-semibold text-mist">Mogadishu</p><p class="mt-1">Dirir Building on Balcad Road</p>
      <p class="mt-5 font-semibold text-mist">Nairobi</p><p class="mt-1">Nas Apartments, No. 4, Milimani Road</p>
      <a href="mailto:info@dansomconsultancy.org" class="mt-5 block text-primary">info@dansomconsultancy.org</a>
      <a href="tel:+254745276911" class="mt-2 block">+254 745 276 911</a>
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
