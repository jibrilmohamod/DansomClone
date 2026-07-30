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
     <BrandMark :src="partner.src" :alt="copy === 1 ? partner.name : ''" :shape="partner.shape" context="carousel" loading="eager" />
    </div>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
 const partners = [
  { name: "World Bank", src: "/The_World_Bank_logo.svg", shape: "wide" as const },
  { name: "World Food Programme", src: "/wfp-logo-standard-blue-en.svg", shape: "medium" as const },
  { name: "Federal Republic of Somalia", src: "/Coat_of_arms_of_Somalia.svg", shape: "crest" as const },
  { name: "Food and Agriculture Organization", src: "/FAO_logo.svg", shape: "crest" as const },
  { name: "GIZ", src: "/GIZ.svg", shape: "wide" as const },
  { name: "International Finance Corporation", src: "/International_Finance_Corporation_logo.svg", shape: "wide" as const },
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

.partner-mark:hover :deep(img) { opacity: 1; transform: translateY(-2px); }

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
 .partner-mark :deep(img) { transition: none; }
}
</style>
