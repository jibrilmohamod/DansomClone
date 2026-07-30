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
     <Icon v-if="partner.icon" :name="partner.icon" class="partner-icon" />
     <img
      v-else
      :src="partner.src"
      :alt="copy === 1 ? partner.name : ''"
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
 width: clamp(9.5rem, 13vw, 11rem);
 height: 5.75rem;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 border: 1px solid rgb(16 34 47 / 0.1);
 border-radius: 0.75rem;
 background: #f7f8f6;
 padding: 1rem 1.1rem;
 color: #10222f;
 box-shadow: 0 14px 34px -28px rgb(8 19 31 / 0.5);
 transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms ease;
}

.partner-mark img {
 width: 100%;
 height: 100%;
 max-width: 8.5rem;
 max-height: 3.35rem;
 object-fit: contain;
}

.partner-icon {
 width: 3.35rem;
 height: 3.35rem;
}

.partner-mark:hover {
 transform: translateY(-2px);
 border-color: rgb(var(--primary) / 0.7);
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

 .partner-mark {
  transition: none;
 }
}
</style>
