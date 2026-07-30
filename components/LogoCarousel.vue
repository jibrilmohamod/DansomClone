<template>
 <div class="partner-carousel" role="region" aria-label="Selected partners">
  <div class="partner-track">
   <div
    v-for="copy in 2"
    :key="copy"
    class="partner-set"
    :aria-hidden="copy === 2 ? 'true' : undefined"
   >
    <div v-for="partner in partners" :key="`${copy}-${partner.name}`" class="partner-mark">
     <img
      :src="partner.src"
      :alt="copy === 1 ? partner.name : ''"
      width="220"
      height="72"
      loading="eager"
      fetchpriority="low"
      class="partner-logo-mark"
     />
    </div>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
 const partners = [
  { name: "World Bank", src: "/The_World_Bank_logo.svg" },
  { name: "World Food Programme", src: "/wfp-logo-standard-blue-en.svg" },
  { name: "Federal Republic of Somalia", src: "/Coat_of_arms_of_Somalia.svg" },
  { name: "Food and Agriculture Organization", src: "/FAO_logo.svg" },
  { name: "GIZ", src: "/GIZ.svg" },
  { name: "International Finance Corporation", src: "/International_Finance_Corporation_logo.svg" },
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
 animation: partner-loop 30s linear infinite;
}

.partner-set {
 display: flex;
 flex-shrink: 0;
 align-items: center;
 gap: clamp(3.5rem, 7vw, 7.5rem);
 padding-right: clamp(3.5rem, 7vw, 7.5rem);
}

.partner-mark {
 display: flex;
 width: clamp(10rem, 13vw, 12rem);
 height: 5rem;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
}

.partner-mark img {
 width: 100%;
 height: 100%;
 object-fit: contain;
 opacity: 0.92;
 transition: opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.partner-mark:hover img {
 opacity: 1;
 transform: translateY(-2px);
}

:global(:root[data-theme="dark"]) .partner-logo-mark {
 filter: brightness(2.35) saturate(0.9) contrast(0.84) drop-shadow(0 0 1px rgb(255 255 255 / 0.42));
}

@media (prefers-color-scheme: dark) {
 :global(:root:not([data-theme])) .partner-logo-mark {
  filter: brightness(2.35) saturate(0.9) contrast(0.84) drop-shadow(0 0 1px rgb(255 255 255 / 0.42));
 }
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

 .partner-track { animation: none; }
 .partner-set:last-child { display: none; }
 .partner-mark img { transition: none; }
}
</style>
