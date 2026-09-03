<script setup lang="ts">
type LineVariant =
  | "home"
  | "about"
  | "services"
  | "work"
  | "careers"
  | "contact"
  | "detail"

const props = withDefaults(
  defineProps<{
    variant?: LineVariant
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

const variantConfig: Record<
  LineVariant,
  { count: number; amplitude: number; slope: number; phase: number }
> = {
  home: { count: 13, amplitude: 24, slope: -0.08, phase: 0.4 },
  about: { count: 10, amplitude: 18, slope: 0.06, phase: 1.2 },
  services: { count: 11, amplitude: 20, slope: -0.04, phase: 2 },
  work: { count: 10, amplitude: 16, slope: 0.09, phase: 2.8 },
  careers: { count: 9, amplitude: 17, slope: -0.07, phase: 3.6 },
  contact: { count: 9, amplitude: 15, slope: 0.04, phase: 4.4 },
  detail: { count: 8, amplitude: 12, slope: -0.03, phase: 5.2 },
}

onMounted(() => {
  const element = canvas.value
  if (!element) return

  const context = element.getContext("2d")
  if (!context) return

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
  const root = document.documentElement

  let width = 0
  let height = 0
  let pixelRatio = 1
  let frame = 0
  let visible = true
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

  const draw = (time = 0) => {
    context.clearRect(0, 0, width, height)

    const config = variantConfig[props.variant]
    const viewportDensity = width < 640 ? 0.72 : width < 900 ? 0.86 : 1
    const lineCount = Math.round(
      Math.min(16, Math.max(6, config.count * props.density * viewportDensity)),
    )
    const amplitude = config.amplitude * Math.min(1.25, Math.max(0.55, props.strength))
    const radius = Math.min(220, Math.max(150, width * 0.17))
    const maxDisplacement = (props.variant === "home" ? 32 : 20) *
      Math.min(1, Math.max(0.35, props.strength))
    const regularOpacity = darkTheme ? 0.2 : 0.23
    const accentOpacity = darkTheme ? 0.22 : 0.2

    for (let line = 0; line < lineCount; line += 1) {
      const progress = (line + 0.5) / lineCount
      const baseY = progress * height
      const accentLine = line === Math.floor(lineCount * 0.7)

      context.beginPath()
      context.lineWidth = accentLine ? 1.15 : 1
      context.strokeStyle = accentLine
        ? `rgba(${accentColor.join(",")},${accentOpacity})`
        : `rgba(${lineColor.join(",")},${regularOpacity})`

      for (let x = -32; x <= width + 32; x += 14) {
        const wave =
          Math.sin(x * 0.006 + config.phase + line * 0.31) *
          amplitude
        let y = baseY + config.slope * (x - width / 2) + wave

        if (pointer.influence > 0.001) {
          const dx = x - pointer.x
          const dy = y - pointer.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < radius) {
            const falloff = Math.pow(1 - distance / radius, 2)
            const direction = dy === 0 ? (line % 2 === 0 ? -1 : 1) : dy / Math.max(distance, 1)
            y += direction * falloff * maxDisplacement * pointer.influence
          }
        }

        if (x === -32) context.moveTo(x, y)
        else context.lineTo(x, y)
      }

      context.stroke()
    }

    if (!ready.value) ready.value = true
  }

  const requestFrame = () => {
    if (frame || !visible || reduceMotion.matches || !finePointer.matches) return

    frame = window.requestAnimationFrame(animate)
  }

  const animate = (time: number) => {
    frame = 0
    const elapsed = Math.min(32, time - lastTime || 16)
    lastTime = time
    const ease = 1 - Math.pow(0.001, elapsed / 1000)

    pointer.x += (pointer.targetX - pointer.x) * Math.min(0.18, ease * 10)
    pointer.y += (pointer.targetY - pointer.y) * Math.min(0.18, ease * 10)
    pointer.influence +=
      (pointer.targetInfluence - pointer.influence) * Math.min(0.14, ease * 8)

    draw(time)

    const unsettled =
      Math.abs(pointer.targetX - pointer.x) > 0.1 ||
      Math.abs(pointer.targetY - pointer.y) > 0.1 ||
      Math.abs(pointer.targetInfluence - pointer.influence) > 0.002

    if (unsettled) requestFrame()
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

  const resetPointer = () => {
    pointer.targetInfluence = 0
    requestFrame()
  }

  const handlePointer = (event: PointerEvent) => {
    if (!finePointer.matches || event.pointerType === "touch") return

    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height

    if (!inside) {
      resetPointer()
      return
    }

    pointer.targetX = x
    pointer.targetY = y
    pointer.targetInfluence = 1
    requestFrame()
  }

  const handlePreferenceChange = () => {
    pointer.targetInfluence = 0
    if (frame) {
      window.cancelAnimationFrame(frame)
      frame = 0
    }
    draw(performance.now())
    requestFrame()
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
  window.addEventListener("pointermove", handlePointer, { passive: true })
  window.addEventListener("blur", resetPointer)
  document.addEventListener("mouseleave", resetPointer)
  reduceMotion.addEventListener("change", handlePreferenceChange)
  finePointer.addEventListener("change", handlePreferenceChange)
  resize()

  onBeforeUnmount(() => {
    if (frame) window.cancelAnimationFrame(frame)
    resizeObserver.disconnect()
    visibilityObserver.disconnect()
    themeObserver.disconnect()
    window.removeEventListener("pointermove", handlePointer)
    window.removeEventListener("blur", resetPointer)
    document.removeEventListener("mouseleave", resetPointer)
    reduceMotion.removeEventListener("change", handlePreferenceChange)
    finePointer.removeEventListener("change", handlePreferenceChange)
  })
})
</script>

<template>
  <div
    class="interactive-line-field"
    :class="{ 'interactive-line-field--ready': ready }"
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
</style>
