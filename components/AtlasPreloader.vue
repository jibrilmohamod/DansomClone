<script setup lang="ts">
const visible = ref(false)
const leaving = ref(false)

let leaveTimer = 0
let removeTimer = 0
const storageKey = "dansom-atlas-intro-v1"

const finish = () => {
 leaving.value = true
 leaveTimer = window.setTimeout(() => {
  visible.value = false
  document.documentElement.classList.remove("is-preloading")
 }, 700)
}

onMounted(() => {
 const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
 let hasPlayed = false

 try {
  hasPlayed = sessionStorage.getItem(storageKey) === "complete"
 } catch {}

 if (reduceMotion || hasPlayed) return

 visible.value = true
 document.documentElement.classList.add("is-preloading")

 try {
  sessionStorage.setItem(storageKey, "complete")
 } catch {}

 removeTimer = window.setTimeout(finish, 900)
})

onBeforeUnmount(() => {
 window.clearTimeout(leaveTimer)
 window.clearTimeout(removeTimer)
 document.documentElement.classList.remove("is-preloading")
})
</script>

<template>
 <Transition name="atlas-loader">
  <div
   v-if="visible"
   class="site-preloader"
   :class="{ 'site-preloader--leaving': leaving }"
   role="status"
   aria-label="Preparing Dansom Research and Consultancy"
  >
   <div class="site-preloader__grid" aria-hidden="true" />
   <div class="site-preloader__panels" aria-hidden="true">
    <span /><span /><span />
   </div>

   <div class="site-preloader__content">
    <div class="site-preloader__identity">
     <img src="/dansom-green-mark.svg" alt="" width="54" height="54" />
     <div>
      <p class="site-preloader__name">Dansom</p>
      <p class="site-preloader__descriptor">Research · Monitoring · Advisory</p>
     </div>
    </div>

    <div class="site-preloader__measure" aria-hidden="true">
     <span class="site-preloader__coordinate">02°02′N</span>
     <span class="site-preloader__progress" />
     <span class="site-preloader__coordinate">45°20′E</span>
    </div>
   </div>
  </div>
 </Transition>
</template>

<style scoped>
.site-preloader {
 position: fixed;
 inset: 0;
 z-index: 100;
 display: grid;
 place-items: center;
 overflow: hidden;
 background: transparent;
 color: rgb(var(--mist));
 isolation: isolate;
}

.site-preloader__grid {
 position: absolute;
 inset: 0;
 z-index: -2;
 background-image:
  linear-gradient(rgb(var(--line) / 0.14) 1px, transparent 1px),
  linear-gradient(90deg, rgb(var(--line) / 0.14) 1px, transparent 1px);
 background-size: clamp(4rem, 8vw, 7.5rem) clamp(4rem, 8vw, 7.5rem);
 opacity: 0;
 animation: atlas-grid-in 520ms 100ms cubic-bezier(.16,1,.3,1) forwards;
}

.site-preloader__grid::after {
 content: "";
 position: absolute;
 inset: 0;
 background: radial-gradient(circle at 50% 50%, transparent 0 20%, rgb(var(--ink) / .72) 74%);
}

.site-preloader__panels {
 position: absolute;
 inset: 0;
 z-index: -1;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
}

.site-preloader__panels span {
 background: rgb(var(--ink) / .96);
 border-right: 1px solid rgb(var(--line) / .38);
 transform: translateY(0);
}

.site-preloader__panels span:last-child { border-right: 0; }

.site-preloader__content {
 width: min(36rem, calc(100vw - 2rem));
 transform: translateY(0);
 opacity: 1;
 transition:
  transform 520ms cubic-bezier(.16,1,.3,1),
  opacity 300ms ease;
}

.site-preloader__identity {
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 1rem;
}

.site-preloader__identity img {
 width: 3.25rem;
 height: 3.25rem;
 object-fit: contain;
 opacity: 0;
 transform: rotate(-14deg) scale(.78);
 animation: atlas-mark-in 560ms 90ms cubic-bezier(.16,1,.3,1) forwards;
}

.site-preloader__name {
 font-family: "Space Grotesk", sans-serif;
 font-size: clamp(2rem, 5vw, 3.5rem);
 font-weight: 700;
 line-height: .9;
 letter-spacing: -.055em;
 opacity: 0;
 transform: translateY(18px);
 animation: atlas-copy-in 520ms 170ms cubic-bezier(.16,1,.3,1) forwards;
}

.site-preloader__descriptor {
 margin-top: .55rem;
 color: rgb(var(--primary));
 font-size: .62rem;
 font-weight: 700;
 letter-spacing: .19em;
 text-transform: uppercase;
 opacity: 0;
 animation: atlas-copy-in 480ms 250ms cubic-bezier(.16,1,.3,1) forwards;
}

.site-preloader__measure {
 margin-top: 2.4rem;
 display: grid;
 grid-template-columns: auto minmax(4rem, 1fr) auto;
 align-items: center;
 gap: .85rem;
 color: rgb(var(--mist) / .46);
 font-family: "Manrope", sans-serif;
 font-size: .6rem;
 font-weight: 700;
 letter-spacing: .14em;
}

.site-preloader__progress {
 position: relative;
 height: 1px;
 overflow: hidden;
 background: rgb(var(--line) / .45);
}

.site-preloader__progress::after {
 content: "";
 position: absolute;
 inset: 0;
 background: rgb(var(--primary));
 transform: scaleX(0);
 transform-origin: left;
 animation: atlas-progress 720ms 130ms cubic-bezier(.65,0,.35,1) forwards;
}

.site-preloader--leaving .site-preloader__grid {
 opacity: 0;
 transition: opacity 320ms ease;
}

.site-preloader--leaving .site-preloader__content {
 opacity: 0;
 transform: translateY(-16px);
}

.site-preloader--leaving .site-preloader__panels span {
 transform: translateY(-101%);
 transition: transform 560ms cubic-bezier(.76,0,.24,1);
}

.site-preloader--leaving .site-preloader__panels span:nth-child(2) { transition-delay: 55ms; }
.site-preloader--leaving .site-preloader__panels span:nth-child(3) { transition-delay: 110ms; }

.atlas-loader-leave-active { transition: opacity 140ms linear; }
.atlas-loader-leave-to { opacity: 0; }

@keyframes atlas-grid-in {
 from { opacity: 0; transform: scale(1.08); }
 to { opacity: 1; transform: scale(1); }
}

@keyframes atlas-mark-in {
 to { opacity: 1; transform: rotate(0) scale(1); }
}

@keyframes atlas-copy-in {
 to { opacity: 1; transform: translateY(0); }
}

@keyframes atlas-progress {
 to { transform: scaleX(1); }
}

@media (max-width: 520px) {
 .site-preloader__identity { gap: .8rem; }
 .site-preloader__identity img { width: 2.65rem; height: 2.65rem; }
 .site-preloader__descriptor { letter-spacing: .13em; }
 .site-preloader__coordinate { display: none; }
 .site-preloader__measure { grid-template-columns: 1fr; width: 68%; margin-inline: auto; }
}

@media (prefers-reduced-motion: reduce) {
 .site-preloader { display: none; }
}
</style>

<style>
html.is-preloading,
html.is-preloading body {
 overflow: hidden;
}
</style>
