<template>
 <footer class="border-t border-slate-200 bg-slate-100 text-slate-800">
  <div class="container px-6 py-12">
   <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
    <div>
     <NuxtImg src="/dansom-logo.png" alt="Dansom Research & Consultancy" class="w-44" />
     <p class="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
      Regional research and consultancy expertise supporting accountable decisions across Somalia, Kenya, and the Horn of Africa.
     </p>
    </div>

    <div>
     <h2 class="font-semibold text-slate-900">Company</h2>
     <nav aria-label="Footer navigation" class="mt-4 grid gap-2 text-sm text-slate-600">
      <NuxtLink to="/About" class="hover:text-primary">About</NuxtLink>
      <NuxtLink to="/Services" class="hover:text-primary">Services</NuxtLink>
      <NuxtLink to="/Portfolio" class="hover:text-primary">Portfolio</NuxtLink>
      <NuxtLink to="/Careers" class="hover:text-primary">Careers</NuxtLink>
      <NuxtLink to="/Contact" class="hover:text-primary">Contact</NuxtLink>
     </nav>
    </div>

    <div>
     <h2 class="font-semibold text-slate-900">Offices</h2>
     <div class="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
      <div>
       <p class="font-semibold text-slate-800">Mogadishu</p>
       <p>Dirir Building on Balcad Road</p>
      </div>
      <div>
       <p class="font-semibold text-slate-800">Nairobi</p>
       <p>Nas Apartments, No. 4, Milimani Road</p>
      </div>
     </div>
    </div>

    <div>
     <h2 class="font-semibold text-slate-900">Contact</h2>
     <div class="mt-4 space-y-3 text-sm text-slate-600">
      <a href="mailto:info@dansomconsultancy.org" class="flex items-center gap-2 hover:text-primary">
       <Icon name="mdi:email-outline" />
       info@dansomconsultancy.org
      </a>
      <a href="tel:+254745276911" class="flex items-center gap-2 hover:text-primary">
       <Icon name="mdi:phone-outline" />
       +254 745 276 911
      </a>
      <a
       href="https://so.linkedin.com/company/dansom-research-and-consultancy"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Dansom Research & Consultancy on LinkedIn"
       class="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80"
      >
       <Icon name="ri:linkedin-fill" class="text-lg" />
       LinkedIn
      </a>
     </div>
    </div>
   </div>

   <div class="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
    &copy; {{ year }} Dansom Research &amp; Consultancy. All rights reserved.
   </div>
  </div>
 </footer>
</template>

<script setup>
 const year = new Date().getFullYear()
</script>
