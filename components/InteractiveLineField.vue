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

type TrailPoint = { x: number; y: number; life: number; force: number }
type Pulse = { x: number; y: number; radius: number; life: number }

const canvas = ref<HTMLCanvasElement | null>(null)
const ready = ref(false)
const drawing = ref(false)

onMounted(() => {
 const element = canvas.value
 if (!element) return

 const context = element.getContext("2d")
 if (!context) return

 const hero = element.closest<HTMLElement>(".home-cinema")
 if (!hero) return

 const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
 const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
 const root = document.documentElement

 let width = 1
 let height = 1
 let pixelRatio = 1
 let cellSize = 72
 let frame = 0
 let lastTime = 0
 let visible = true
 let pageVisible = document.visibilityState === "visible"
 let destroyed = false
 let lastActivation = 0
 let lineColor = [69, 91, 104]
 let accentColor = [197, 224, 96]
 let mistColor = [242, 247, 248]
 let darkTheme = true
 let capturedPointer = -1

 const trail: TrailPoint[] = []
 const pulses: Pulse[] = []
 const activeNodes = new Map<string, number>()

 const pointer = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
  influence: 0,
  targetInfluence: 0,
  inside: false,
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
  mistColor = parseColor("--mist", [242, 247, 248])
  darkTheme = ink[0] + ink[1] + ink[2] < 230
 }

 const gridPoint = (column: number, row: number) => ({
  x: column * cellSize,
  y: row * cellSize,
 })

 const nodeKey = (column: number, row: number) => `${column}:${row}`

 const activateAt = (x: number, y: number, force: number) => {
  const column = Math.round(x / cellSize)
  const row = Math.round(y / cellSize)
  const radius = drawing.value ? 2 : 1

  for (let dx = -radius; dx <= radius; dx += 1) {
   for (let dy = -radius; dy <= radius; dy += 1) {
    const distance = Math.sqrt(dx * dx + dy * dy)
    if (distance > radius + 0.15) continue
    const energy = force * Math.max(0.18, 1 - distance / (radius + 0.7))
    const key = nodeKey(column + dx, row + dy)
    activeNodes.set(key, Math.max(activeNodes.get(key) || 0, energy))
   }
  }

  const previous = trail.at(-1)
  if (!previous || Math.hypot(previous.x - x, previous.y - y) > cellSize * 0.2) {
   trail.push({ x, y, life: 1, force })
   if (trail.length > 48) trail.shift()
  }
 }

 const drawGrid = (time: number) => {
  const baseOpacity = darkTheme ? 0.16 : 0.19
  const columns = Math.ceil(width / cellSize)
  const rows = Math.ceil(height / cellSize)

  context.lineWidth = 1
  context.strokeStyle = `rgba(${lineColor.join(",")},${baseOpacity})`
  context.beginPath()

  for (let column = 0; column <= columns; column += 1) {
   const x = Math.round(column * cellSize) + 0.5
   context.moveTo(x, 0)
   context.lineTo(x, height)
  }

  for (let row = 0; row <= rows; row += 1) {
   const y = Math.round(row * cellSize) + 0.5
   context.moveTo(0, y)
   context.lineTo(width, y)
  }

  context.stroke()

  const scanY = (time * 0.026) % (height + cellSize) - cellSize
  const scan = context.createLinearGradient(0, scanY - cellSize, 0, scanY + cellSize)
  scan.addColorStop(0, `rgba(${accentColor.join(",")},0)`)
  scan.addColorStop(0.5, `rgba(${accentColor.join(",")},${darkTheme ? 0.1 : 0.08})`)
  scan.addColorStop(1, `rgba(${accentColor.join(",")},0)`)
  context.fillStyle = scan
  context.fillRect(0, scanY - cellSize, width, cellSize * 2)

  const anchors = [
   [0.16, 0.26],
   [0.34, 0.7],
   [0.61, 0.22],
   [0.78, 0.58],
   [0.91, 0.34],
  ]

  anchors.forEach(([xRatio, yRatio], index) => {
   const x = Math.round((width * xRatio) / cellSize) * cellSize
   const y = Math.round((height * yRatio) / cellSize) * cellSize
   const pulse = 0.42 + Math.sin(time * 0.0014 + index * 1.7) * 0.18
   context.fillStyle = `rgba(${accentColor.join(",")},${pulse})`
   context.fillRect(x - 2, y - 2, 4, 4)
   context.strokeStyle = `rgba(${accentColor.join(",")},${pulse * 0.34})`
   context.strokeRect(x - 8, y - 8, 16, 16)
  })
 }

 const drawTrail = () => {
  if (trail.length > 1) {
   context.lineCap = "square"
   context.lineJoin = "miter"

   for (let index = 1; index < trail.length; index += 1) {
    const from = trail[index - 1]
    const to = trail[index]
    const life = Math.min(from.life, to.life)
    if (life <= 0.01) continue

    context.beginPath()
    context.moveTo(from.x, from.y)
    context.lineTo(to.x, to.y)
    context.strokeStyle = `rgba(${accentColor.join(",")},${life * 0.5})`
    context.lineWidth = 1 + life * 1.3
    context.stroke()
   }
  }

  activeNodes.forEach((energy, key) => {
   const [column, row] = key.split(":").map(Number)
   const { x, y } = gridPoint(column, row)
   if (x < -cellSize || x > width + cellSize || y < -cellSize || y > height + cellSize) return

   const size = cellSize * (0.16 + energy * 0.36)
   context.fillStyle = `rgba(${accentColor.join(",")},${energy * (darkTheme ? 0.1 : 0.08)})`
   context.fillRect(x - size / 2, y - size / 2, size, size)

   context.strokeStyle = `rgba(${accentColor.join(",")},${energy * 0.68})`
   context.lineWidth = 1
   context.strokeRect(x - size / 2, y - size / 2, size, size)

   context.fillStyle = `rgba(${accentColor.join(",")},${Math.min(0.95, energy)})`
   context.fillRect(x - 2, y - 2, 4, 4)
  })

  pulses.forEach((pulse) => {
   context.beginPath()
   context.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2)
   context.strokeStyle = `rgba(${accentColor.join(",")},${pulse.life * 0.38})`
   context.lineWidth = 1
   context.stroke()
  })

  if (pointer.inside && pointer.influence > 0.02) {
   const radius = 18 + pointer.influence * 9
   context.strokeStyle = `rgba(${mistColor.join(",")},${pointer.influence * (darkTheme ? 0.34 : 0.27)})`
   context.lineWidth = 1
   context.beginPath()
   context.moveTo(pointer.x - radius, pointer.y)
   context.lineTo(pointer.x - 6, pointer.y)
   context.moveTo(pointer.x + 6, pointer.y)
   context.lineTo(pointer.x + radius, pointer.y)
   context.moveTo(pointer.x, pointer.y - radius)
   context.lineTo(pointer.x, pointer.y - 6)
   context.moveTo(pointer.x, pointer.y + 6)
   context.lineTo(pointer.x, pointer.y + radius)
   context.stroke()
  }
 }

 const draw = (time = 0) => {
  context.clearRect(0, 0, width, height)
  drawGrid(time)
  drawTrail()
  if (!ready.value) ready.value = true
 }

 const requestFrame = () => {
  if (destroyed || frame || !visible || !pageVisible || reduceMotion.matches) return
  frame = window.requestAnimationFrame(animate)
 }

 const animate = (time: number) => {
  frame = 0
  const elapsed = Math.min(34, time - lastTime || 16)
  lastTime = time

  pointer.x += (pointer.targetX - pointer.x) * 0.16
  pointer.y += (pointer.targetY - pointer.y) * 0.16
  pointer.influence += (pointer.targetInfluence - pointer.influence) * 0.12

  trail.forEach((point) => {
   point.life = Math.max(0, point.life - elapsed * 0.00072)
  })
  while (trail.length && trail[0].life <= 0.01) trail.shift()

  activeNodes.forEach((energy, key) => {
   const next = energy - elapsed * 0.00068
   if (next <= 0.012) activeNodes.delete(key)
   else activeNodes.set(key, next)
  })

  pulses.forEach((pulse) => {
   pulse.radius += elapsed * 0.065
   pulse.life = Math.max(0, pulse.life - elapsed * 0.00105)
  })
  while (pulses.length && pulses[0].life <= 0.01) pulses.shift()

  draw(time)
  requestFrame()
 }

 const resize = () => {
  const rect = element.getBoundingClientRect()
  width = Math.max(1, rect.width)
  height = Math.max(1, rect.height)
  pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75)
  cellSize = clamp(width / (width < 640 ? 8 : 16), 52, 88) / clamp(props.density, 0.8, 1.25)

  element.width = Math.round(width * pixelRatio)
  element.height = Math.round(height * pixelRatio)
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

  pointer.x = pointer.targetX = width * 0.72
  pointer.y = pointer.targetY = height * 0.42
  activeNodes.clear()
  trail.length = 0
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

 const isControl = (target: EventTarget | null) =>
  target instanceof Element &&
  Boolean(target.closest("a, button, input, textarea, select, label, [role='button']"))

 const updatePointer = (event: PointerEvent) => {
  if (reduceMotion.matches || !finePointer.matches || event.pointerType === "touch") return

  if (drawing.value && event.buttons === 0) {
   endDrawing(event)
   return
  }

  if (isControl(event.target) && !drawing.value) {
   pointer.targetInfluence = 0
   return
  }

  const point = localPoint(event)
  pointer.inside = point.inside
  pointer.targetX = point.x
  pointer.targetY = point.y
  pointer.targetInfluence = point.inside ? 1 : 0

  const now = performance.now()
  if (point.inside && now - lastActivation > (drawing.value ? 18 : 42)) {
   activateAt(point.x, point.y, drawing.value ? 1 : 0.7 * clamp(props.strength, 0.6, 1.3))
   lastActivation = now
  }

  requestFrame()
 }

 const beginDrawing = (event: PointerEvent) => {
  if (
   reduceMotion.matches ||
   !finePointer.matches ||
   event.pointerType === "touch" ||
   event.button !== 0 ||
   isControl(event.target)
  ) return

  const point = localPoint(event)
  if (!point.inside) return

  event.preventDefault()
  drawing.value = true
  capturedPointer = event.pointerId
  pointer.inside = true
  pointer.targetInfluence = 1
  activateAt(point.x, point.y, 1)
  pulses.push({ x: point.x, y: point.y, radius: 8, life: 1 })
  hero.classList.add("evidence-field-drawing")

  try {
   hero.setPointerCapture(event.pointerId)
  } catch {}

  requestFrame()
 }

 function endDrawing(event?: PointerEvent) {
  if (event && capturedPointer >= 0 && event.pointerId !== capturedPointer) return

  if (capturedPointer >= 0) {
   try {
    hero.releasePointerCapture(capturedPointer)
   } catch {}
  }

  capturedPointer = -1
  drawing.value = false
  hero.classList.remove("evidence-field-drawing")
  requestFrame()
 }

 const leaveField = () => {
  if (drawing.value) return
  pointer.inside = false
  pointer.targetInfluence = 0
 }

 const resetInteraction = () => {
  endDrawing()
  pointer.inside = false
  pointer.targetInfluence = 0
 }

 const handlePreferenceChange = () => {
  resetInteraction()
  trail.length = 0
  pulses.length = 0
  activeNodes.clear()

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
  else {
   resetInteraction()
   if (frame) {
    window.cancelAnimationFrame(frame)
    frame = 0
   }
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
 themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] })
 hero.addEventListener("pointermove", updatePointer, { passive: true })
 hero.addEventListener("pointerdown", beginDrawing, { passive: false })
 hero.addEventListener("pointerup", endDrawing)
 hero.addEventListener("pointercancel", endDrawing)
 hero.addEventListener("pointerleave", leaveField)
 window.addEventListener("blur", resetInteraction)
 document.addEventListener("visibilitychange", handleVisibilityChange)
 reduceMotion.addEventListener("change", handlePreferenceChange)
 finePointer.addEventListener("change", handlePreferenceChange)
 hero.classList.add("evidence-field-interactive")
 resize()

 onBeforeUnmount(() => {
  destroyed = true
  resetInteraction()
  if (frame) window.cancelAnimationFrame(frame)
  frame = 0
  resizeObserver.disconnect()
  visibilityObserver.disconnect()
  themeObserver.disconnect()
  hero.classList.remove("evidence-field-interactive", "evidence-field-drawing")
  hero.removeEventListener("pointermove", updatePointer)
  hero.removeEventListener("pointerdown", beginDrawing)
  hero.removeEventListener("pointerup", endDrawing)
  hero.removeEventListener("pointercancel", endDrawing)
  hero.removeEventListener("pointerleave", leaveField)
  window.removeEventListener("blur", resetInteraction)
  document.removeEventListener("visibilitychange", handleVisibilityChange)
  reduceMotion.removeEventListener("change", handlePreferenceChange)
  finePointer.removeEventListener("change", handlePreferenceChange)
 })
})
</script>

<template>
 <div
  class="interactive-line-field"
  :class="{
   'interactive-line-field--ready': ready,
   'interactive-line-field--drawing': drawing,
  }"
  data-field-mode="evidence-grid"
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
 background-image:
  linear-gradient(rgb(var(--line) / .14) 1px, transparent 1px),
  linear-gradient(90deg, rgb(var(--line) / .14) 1px, transparent 1px);
 background-size: clamp(3.25rem, 6vw, 5.5rem) clamp(3.25rem, 6vw, 5.5rem);
 opacity: .92;
 transition: opacity 400ms ease;
}

.interactive-line-field--ready {
 background-image: none;
 opacity: 1;
}

.interactive-line-field canvas {
 display: block;
 width: 100%;
 height: 100%;
}

:global(.evidence-field-interactive) {
 cursor: crosshair;
}

:global(.evidence-field-interactive.evidence-field-drawing) {
 cursor: crosshair;
 user-select: none;
}

:global(.evidence-field-interactive a),
:global(.evidence-field-interactive button) {
 cursor: pointer;
}

@media (max-width: 767px), (hover: none), (pointer: coarse) {
 :global(.evidence-field-interactive) { cursor: default; }
}
</style>
