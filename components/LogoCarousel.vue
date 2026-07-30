<template>
 <div class="partner-carousel" role="region" aria-label="Selected partners">
  <div class="partner-track">
   <div
    v-for="copy in 2"
    :key="copy"
    class="partner-set"
    :aria-hidden="copy === 2 ? 'true' : undefined"
   >
    <div
     v-for="partner in partners"
     :key="`${copy}-${partner.name}`"
     class="partner-mark"
     :role="copy === 1 && partner.icon ? 'img' : undefined"
     :aria-label="copy === 1 && partner.icon ? partner.name : undefined"
    >
     <Icon v-if="partner.icon" :name="partner.icon" class="text-5xl" />
     <img
      v-else
      :src="partner.src"
      :alt="copy === 1 ? partner.name : ''"
      :class="partner.invert ? 'logo-invert' : ''"
      loading="lazy"
     />
    </div>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
 const partners = [
  { name: "United Nations", icon: "flag:un-1x1" },
  { name: "United Nations Support Office in Somalia", src: "/Capture1.PNG-removebg-preview.png" },
  { name: "World Bank", src: "/The_World_Bank_logo.svg", invert: true },
  { name: "World Food Programme", src: "/wfp-logo-standard-blue-en.svg" },
  { name: "Federal Republic of Somalia", src: "/Coat_of_arms_of_Somalia.svg" },
  { name: "Food and Agriculture Organization", src: "/FAO_logo.svg" },
  { name: "GIZ", src: "/GIZ.svg", invert: true },
  { name: "African Development Bank", src: "/download (1).png" },
  { name: "International Finance Corporation", src: "/International_Finance_Corporation_logo.svg", invert: true },
 ]
</script>

<style scoped>
.partner-carousel {
 overflow: hidden;
 mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
}

.partner-track {
 display: flex;
 width: max-content;
 animation: partner-loop 34s linear infinite;
}

.partner-set {
 display: flex;
 flex-shrink: 0;
 align-items: center;
 gap: clamp(2.5rem, 5vw, 5.5rem);
 padding-right: clamp(2.5rem, 5vw, 5.5rem);
}

.partner-mark {
 display: flex;
 width: clamp(7.5rem, 11vw, 10.5rem);
 flex-shrink: 0;
 justify-content: center;
 color: rgb(var(--mist) / 0.68);
 filter: grayscale(1);
 opacity: 0.68;
 transition: filter 300ms ease, opacity 300ms ease;
}

.partner-mark img {
 height: 3rem;
 max-width: 100%;
 object-fit: contain;
}

.partner-mark:hover {
 filter: grayscale(0);
 opacity: 1;
}

.partner-carousel:hover .partner-track,
.partner-carousel:focus-within .partner-track {
 animation-play-state: paused;
}

@keyframes partner-loop {
 to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
 .partner-carousel {
  overflow-x: auto;
  mask-image: none;
 }

 .partner-track {
  animation: none;
 }

 .partner-set:last-child {
  display: none;
 }
}
</style>
