<template>
 <RevealBlock as="article" class="project-record border-t border-line/55 first:border-t-0">
  <NuxtLink :to="slug" class="group relative grid min-h-72 gap-8 overflow-hidden py-10 md:grid-cols-12 md:items-center md:py-14">
   <span class="font-display text-sm text-mist/35 md:col-span-1">{{ String(index + 1).padStart(2,"0") }}</span>
   <div class="md:col-span-2"><img v-if="icon" :src="icon" :alt="title+' project partner logo'" class="project-logo max-h-16 max-w-[10rem] object-contain object-left" loading="lazy" /></div>
   <div class="relative z-10 md:col-span-6">
    <p class="atlas-label">{{ classification }}</p>
    <h3 class="atlas-display mt-4 text-[clamp(2.25rem,4.4vw,4.8rem)] leading-[0.9] transition duration-300 group-hover:text-primary">{{ title }}</h3>
    <p class="mt-5 text-sm text-mist/55">{{ location }}<span v-if="timeframe">, {{ timeframe }}</span></p>
   </div>
   <div class="flex justify-end md:col-span-3"><span class="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-line/60 text-xl transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-accent-ink"><Icon name="mdi:arrow-top-right" /></span></div>
  </NuxtLink>
 </RevealBlock>
</template>

<script setup lang="ts">
 defineProps({ index:{type:Number,default:0}, title:{type:String,required:true},icon:String,slug:{type:String,required:true},classification:{type:String,required:true},location:{type:String,required:true},timeframe:String })
</script>

<style scoped>
.project-record { background:linear-gradient(90deg,transparent,rgb(var(--panel)/0)); transition:background 350ms ease; }
.project-record:hover { background:linear-gradient(90deg,transparent,rgb(var(--panel)/.8)); }
:global(:root[data-theme="dark"]) .project-logo { filter:drop-shadow(0 0 .75px rgba(255,255,255,.9)); }
@media(prefers-color-scheme:dark){:global(:root:not([data-theme])) .project-logo{filter:drop-shadow(0 0 .75px rgba(255,255,255,.9));}}
</style>
