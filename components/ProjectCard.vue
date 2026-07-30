<template>
 <RevealBlock as="article" class="project-record border-t border-line/55 first:border-t-0">
  <NuxtLink :to="slug" class="project-link group relative grid gap-7 overflow-hidden py-10 md:items-center md:py-12">
   <span class="font-display text-xs text-mist/35">{{ String(index + 1).padStart(2,"0") }}</span>
   <div class="project-logo-cell"><img v-if="icon" :src="icon" :alt="title+' project partner logo'" class="project-logo" loading="lazy" /></div>
   <div class="relative z-10">
    <p class="atlas-label">{{ classification }}</p>
    <h3 class="atlas-display mt-3 max-w-[22ch] text-[clamp(2rem,3.2vw,3.5rem)] leading-[0.96] transition duration-300 group-hover:text-primary">{{ title }}</h3>
    <p class="mt-5 text-sm text-mist/55">{{ location }}<span v-if="timeframe">, {{ timeframe }}</span></p>
   </div>
   <div class="flex justify-start md:justify-end"><span class="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line/60 text-lg transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-accent-ink"><Icon name="mdi:arrow-top-right" /></span></div>
  </NuxtLink>
 </RevealBlock>
</template>

<script setup lang="ts">
 defineProps({ index:{type:Number,default:0}, title:{type:String,required:true},icon:String,slug:{type:String,required:true},classification:{type:String,required:true},location:{type:String,required:true},timeframe:String })
</script>

<style scoped>
.project-record { background:linear-gradient(90deg,transparent,rgb(var(--panel)/0)); transition:background 350ms ease; }
.project-record:hover { background:linear-gradient(90deg,transparent,rgb(var(--panel)/.8)); }
.project-link { grid-template-columns:2.5rem minmax(8rem,10rem) minmax(0,1fr) 3rem; }
.project-logo-cell { display:flex; min-height:5rem; align-items:center; }
.project-logo { display:block; width:100%; max-width:10rem; max-height:4.75rem; object-fit:contain; object-position:left center; }
:global(:root[data-theme="dark"]) .project-logo { filter:brightness(1.55) saturate(.9) contrast(.94); }
@media(prefers-color-scheme:dark){:global(:root:not([data-theme])) .project-logo{filter:brightness(1.55) saturate(.9) contrast(.94);}}
@media(max-width:767px){.project-link{grid-template-columns:2.25rem minmax(0,1fr)}.project-logo-cell{min-height:4rem}.project-logo{max-width:9rem;max-height:4rem}.project-link>div:nth-of-type(2),.project-link>div:nth-of-type(3){grid-column:2}}
</style>
