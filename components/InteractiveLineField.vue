<script setup lang="ts">
const props = withDefaults(
 defineProps<{
  variant?: "home"
  strength?: number
  density?: number
 }>(),
 {
  variant: "home",
  strength: 1,
  density: 1,
 },
)

const canvas = ref<HTMLCanvasElement | null>(null)
const ready = ref(false)
const dragging = ref(false)

onMounted(() => {
 const element = canvas.value
 if (!element) return

 const context = element.getContext("2d")
 if (!context) return

 const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
 const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
 const root = document.documentElement
 const hero = element.closest<HTMLElement>(".home-cinema")

 let width = 0
 let height = 0
 let pixelRatio = 1
 let frame = 0
 let visible = true
 let pageVisible = document.visibilityState === "visible"
 let lastTime = 0
 let lineColor = [69, 91, 104]
 let accentColor = [197, 224, 96]
 let darkTheme = true

 const pointer = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
  influence: 0,
  targetInfluence: 0,
 }

 const drag = {
  pointerId: -1,
  line: -1,
  anchorX: 0,
  offset: 0,
  velocity: 0,
  lastY: 0,
  lastAt: 0,
 }

 const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value))

 const parseColor = (name: string, fallback: number[]) => {
  const values = getComputedStyle(root)
   .getPropertyValue(name)
   .trim()
   .split(/\s+/)
   .map(Number)
   .filter(Number.isFinite)

  return values.length >= 3 ? values.slice(0, 3) : fallback
 }

 const readTheme = () => {
  const ink = parseColor("--ink", [5, 14, 23])
  lineColor = parseColor("--line", [69, 91, 104])
  accentColor = parseColor("--primary", [197, 224, 96])
  darkTheme = ink[0] + ink[1] + ink[2] < 230
 }

 const lineCount = () => {
  const viewportDensity = width < 640 ? 0.72 : width < 900 ? 0.86 : 1
  return Math.round(Math.min(16, Math.max(7, 13 * props.density * viewportDensity)))
 }

 const naturalY = (line: number, x: number, time: number) => {
  const progress = (line + 0.5) / lineCount()
  const baseY = progress * height
  const amplitude = 24 * clamp(props.strength, 0.55, 1.25)
  const drift = reduceMotion.matches ? 0 : time * 0.00016
  const wave =
   Math.sin(x * 0.006 + 0.4 + line * 0.31 + drift) * amplitude +
   Math.sin(x * 0.0022 - line * 0.18 - drift * 0.7) * amplitude * 0.24

  return baseY - 0.08 * (x - width / 2) + wave
 }

 const draw = (time = 0) => {
  context.clearRect(0, 0, width, height)

  const count = lineCount()
  const hoverRadius = Math.min(230, Math.max(150, width * 0.18))
  const regularOpacity = darkTheme ? 0.2 : 0.23
  const accentOpacity = darkTheme ? 0.28 : 0.25
  const dragRadius = Math.min(260, Math.max(170, width * 0.22))

  for (let line = 0; line < count; line += 1) {
   const accentLine = line === Math.floor(count * 0.7)
   const selected = line === drag.line

   context.beginPath()
   context.lineWidth = selected ? 1.9 : accentLine ? 1.2 : 1
   context.strokeStyle = selected
    ? `rgba(${accentColor.join(",")},${darkTheme ? 0.68 : 0.58})`
    : accentLine
      ? `rgba(${accentColor.join(",")},${accentOpacity})`
      : `rgba(${lineColor.join(",")},${regularOpacity})`

   for (let x = -32; x <= width + 32; x += 12) {
    let y = naturalY(line, x, time)

    if (pointer.influence > 0.001 && drag.pointerId < 0) {
     const dx = x - pointer.x
     const dy = y - pointer.y
     const distance = Math.sqrt(dx * dx + dy * dy)

     if (distance < hoverRadius) {
      const falloff = Math.pow(1 - distance / hoverRadius, 2)
      const direction = dy === 0 ? (line % 2 === 0 ? -1 : 1) : dy / Math.max(distance, 1)
      y += direction * falloff * 28 * pointer.influence
     }
    }

    if (drag.line >= 0 && Math.abs(drag.offset) > 0.01) {
     const horizontal = Math.exp(-Math.pow((x - drag.anchorX) / dragRadius, 2))
     const neighbouring = Math.exp(-Math.abs(line - drag.line) * 0.9)
     y += drag.offset * horizontal * neighbouring
    }

    if (x === -32) context.moveTo(x, y)
    else context.lineTo(x, y)
   }

   context.stroke()
  }

  if (!ready.value) ready.value = true
 }

 const requestFrame = () => {
  if (frame || !visible || !pageVisible || reduceMotion.matches) return
  frame = window.requestAnimationFrame(animate)
 }

 const animate = (time: number) => {
  frame = 0
  const elapsedMs = Math.min(32, time - lastTime || 16)
  const elapsed = elapsedMs / 1000
  lastTime = time
  const ease = 1 - Math.pow(0.001, elapsedMs / 1000)

  pointer.x += (pointer.targetX - pointer.x) * Math.min(0.2, ease * 10)
  pointer.y += (pointer.targetY - pointer.y) * Math.min(0.2, ease * 10)
  pointer.influence +=
   (pointer.targetInfluence - pointer.influence) * Math.min(0.16, ease * 8)

  if (drag.pointerId < 0 && drag.line >= 0) {
   const acceleration = -drag.offset * 42 - drag.velocity * 10
   drag.velocity += acceleration * elapsed
   drag.offset += drag.velocity * elapsed

   if (Math.abs(drag.offset) < 0.08 && Math.abs(drag.velocity) < 0.08) {
    drag.offset = 0
    drag.velocity = 0
    drag.line = -1
   }
  }

  draw(time)
  requestFrame()
 }

 const resize = () => {
  const rect = element.getBoundingClientRect()
  width = Math.max(1, rect.width)
  height = Math.max(1, rect.height)
  pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75)

  element.width = Math.round(width * pixelRatio)
  element.height = Math.round(height * pixelRatio)
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

  if (!pointer.x && !pointer.y) {
   pointer.x = pointer.targetX = width * 0.7
   pointer.y = pointer.targetY = height * 0.45
  }

  draw(performance.now())
  requestFrame()
 }

 const localPoint = (event: PointerEvent) => {
  const rect = element.getBoundingClientRect()
  return {
   x: event.clientX - rect.left,
   y: event.clientY - rect.top,
   inside:
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom,
  }
 }

 const nearestLine = (x: number, y: number, time: number) => {
  let selected = -1
  let closest = Number.POSITIVE_INFINITY

  for (let line = 0; line < lineCount(); line += 1) {
   const distance = Math.abs(naturalY(line, x, time) - y)
   if (distance < closest) {
    closest = distance
    selected = line
   }
  }

  return closest <= 52 ? selected : -1
 }

 const isControl = (target: EventTarget | null) =>
  target instanceof Element &&
  Boolean(target.closest("a, button, input, textarea, select, label, [role='button']"))

 const updateHover = (event: PointerEvent) => {
  if (!finePointer.matches || event.pointerType === "touch") return
  const point = localPoint(event)

  if (!point.inside) {
   pointer.targetInfluence = 0
   hero?.classList.remove("line-field-can-grab")
   return
  }

  pointer.targetX = point.x
  pointer.targetY = point.y

  if (drag.pointerId >= 0) {
   if (event.pointerId !== drag.pointerId) return
   const now = performance.now()
   const natural = naturalY(drag.line, point.x, now)
   const nextOffset = clamp(point.y - natural, -height * 0.25, height * 0.25)
   const elapsed = Math.max(0.008, (now - drag.lastAt) / 1000)

   drag.anchorX = point.x
   drag.velocity = clamp((nextOffset - drag.offset) / elapsed, -900, 900)
   drag.offset = nextOffset
   drag.lastY = point.y
   drag.lastAt = now
   event.preventDefault()
   requestFrame()
   return
  }

  const canGrab = nearestLine(point.x, point.y, performance.now()) >= 0
  pointer.targetInfluence = canGrab ? 1 : 0.65
  hero?.classList.toggle("line-field-can-grab", canGrab)
  requestFrame()
 }

 const beginDrag = (event: PointerEvent) => {
  if (!finePointer.matches || event.pointerType === "touch" || event.button !== 0 || isControl(event.target)) return

  const point = localPoint(event)
  if (!point.inside) return

  const selected = nearestLine(point.x, point.y, performance.now())
  if (selected < 0) return

  event.preventDefault()
  drag.pointerId = event.pointerId
  drag.line = selected
  drag.anchorX = point.x
  drag.offset = point.y - naturalY(selected, point.x, performance.now())
  drag.velocity = 0
  drag.lastY = point.y
  drag.lastAt = performance.now()
  dragging.value = true
  pointer.targetInfluence = 0
  hero?.classList.add("line-field-dragging")
  requestFrame()
 }

 const endDrag = (event: PointerEvent) => {
  if (event.pointerId !== drag.pointerId) return

  drag.pointerId = -1
  dragging.value = false
  pointer.targetInfluence = 0
  hero?.classList.remove("line-field-dragging")
  requestFrame()
 }

 const resetPointer = () => {
  if (drag.pointerId >= 0) return
  pointer.targetInfluence = 0
  hero?.classList.remove("line-field-can-grab")
  requestFrame()
 }

 const handlePreferenceChange = () => {
  pointer.targetInfluence = 0
  drag.pointerId = -1
  drag.line = -1
  drag.offset = 0
  drag.velocity = 0
  dragging.value = false
  hero?.classList.remove("line-field-can-grab", "line-field-dragging")

  if (frame) {
   window.cancelAnimationFrame(frame)
   frame = 0
  }

  draw(performance.now())
  requestFrame()
 }

 const handleVisibilityChange = () => {
  pageVisible = document.visibilityState === "visible"
  if (pageVisible) requestFrame()
  else if (frame) {
   window.cancelAnimationFrame(frame)
   frame = 0
  }
 }

 const resizeObserver = new ResizeObserver(resize)
 const visibilityObserver = new IntersectionObserver(
  ([entry]) => {
   visible = Boolean(entry?.isIntersecting)
   if (visible) requestFrame()
   else if (frame) {
    window.cancelAnimationFrame(frame)
    frame = 0
   }
  },
  { threshold: 0.01 },
 )
 const themeObserver = new MutationObserver(() => {
  readTheme()
  draw(performance.now())
 })

 readTheme()
 resizeObserver.observe(element)
 visibilityObserver.observe(element)
 themeObserver.observe(root, {
  attributes: true,
  attributeFilter: ["data-theme"],
 })
 window.addEventListener("pointermove", updateHover, { passive: false })
 window.addEventListener("pointerdown", beginDrag, { passive: false })
 window.addEventListener("pointerup", endDrag)
 window.addEventListener("pointercancel", endDrag)
 window.addEventListener("blur", resetPointer)
 document.addEventListener("mouseleave", resetPointer)
 document.addEventListener("visibilitychange", handleVisibilityChange)
 reduceMotion.addEventListener("change", handlePreferenceChange)
 finePointer.addEventListener("change", handlePreferenceChange)
 resize()

 onBeforeUnmount(() => {
  if (frame) window.cancelAnimationFrame(frame)
  resizeObserver.disconnect()
  visibilityObserver.disconnect()
  themeObserver.disconnect()
  hero?.classList.remove("line-field-interactive", "line-field-can-grab", "line-field-dragging")
  window.removeEventListener("pointermove", updateHover)
  window.removeEventListener("pointerdown", beginDrag)
  window.removeEventListener("pointerup", endDrag)
  window.removeEventListener("pointercancel", endDrag)
  window.removeEventListener("blur", resetPointer)
  document.removeEventListener("mouseleave", resetPointer)
  document.removeEventListener("visibilitychange", handleVisibilityChange)
  reduceMotion.removeEventListener("change", handlePreferenceChange)
  finePointer.removeEventListener("change", handlePreferenceChange)
 })

 hero?.classList.add("line-field-interactive")
})
</script>

<template>
 <div
  class="interactive-line-field"
  :class="{
   'interactive-line-field--ready': ready,
   'interactive-line-field--dragging': dragging,
  }"
  aria-hidden="true"
 >
  <canvas ref="canvas" />
 </div>
</template>

<style scoped>
.interactive-line-field {
 position: absolute;
 inset: 0;
 z-index: 0;
 pointer-events: none;
 background-image: repeating-radial-gradient(
  ellipse at 72% 46%,
  transparent 0,
  transparent 48px,
  rgb(var(--line) / 0.16) 49px,
  transparent 50px,
  transparent 68px
 );
}

.interactive-line-field--ready {
 background-image: none;
}

.interactive-line-field canvas {
 display: block;
 width: 100%;
 height: 100%;
}

:global(.line-field-interactive) {
 cursor: default;
}

:global(.line-field-interactive.line-field-can-grab) {
 cursor: grab;
}

:global(.line-field-interactive.line-field-dragging) {
 cursor: grabbing;
 user-select: none;
}

:global(.line-field-interactive a),
:global(.line-field-interactive button) {
 cursor: pointer;
}
</style>
