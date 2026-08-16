import { useEffect, useRef } from 'react'
import { Renderer, Program, Mesh, Triangle } from 'ogl'
import './MoltenMetal.css'

interface MoltenMetalProps {
  color1?: string
  color2?: string
  color3?: string
  speed?: number
  scale?: number
  detail?: number
  glow?: number
  coreSize?: number
  swirl?: number
  fold?: number
  blackPoint?: number
  brightness?: number
  colorMode?: string
  grain?: boolean
  grainIntensity?: number
  mouseInteraction?: boolean
  mouseStrength?: number
  opacity?: number
  className?: string
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [1, 1, 1]
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
}

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uScale;
uniform float uDetail;
uniform float uGlow;
uniform float uCoreSize;
uniform float uSwirl;
uniform float uFold;
uniform float uBlackPoint;
uniform float uBrightness;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform bool uEnableMouse;
uniform float uOpacity;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

mat2 rotate2D(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

float fbm(vec2 p, float detail) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  for (int i = 0; i < 6; i++) {
    if (float(i) >= detail) break;
    value += amplitude * sin(p.x * frequency + sin(p.y * frequency));
    p *= 2.0;
    p = rotate2D(0.5) * p;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / min(iResolution.x, iResolution.y);
  float T = iTime * uSpeed;

  if (uEnableMouse) {
    vec2 m = (uMouse - 0.5) * uMouseStrength;
    uv += m * 0.5;
  }

  vec2 p = uv * uScale;
  float r = length(p);
  float a = atan(p.y, p.x);

  a += sin(r * uSwirl - T) * uFold;
  p = vec2(cos(a), sin(a)) * r;

  float n = fbm(p + vec2(T * 0.2, T * 0.1), uDetail);
  float pattern = sin(r * 3.0 - T + n * 4.0);

  float core = smoothstep(uCoreSize + 0.5, uCoreSize, r);
  pattern = mix(pattern, core, 0.4);

  float mask = smoothstep(uBlackPoint, 1.0, pattern);

  vec3 col = mix(uColor1, uColor2, clamp(pattern * 0.5 + 0.5, 0.0, 1.0));
  col = mix(col, uColor3, clamp(core * uGlow, 0.0, 1.0));

  col *= uBrightness * mask;

  float alpha = clamp(mask, 0.0, 1.0) * uOpacity;
  if (uGrain > 0.5) {
    float g = hash21(gl_FragCoord.xy + mod(iTime, 64.0) * 11.0);
    alpha += (g - 0.5) * uGrainIntensity;
  }
  alpha = clamp(alpha, 0.0, 1.0);

  fragColor = vec4(col * alpha, alpha);
}
`

const ctxMap = new WeakMap<HTMLDivElement, any>()

export const MoltenMetal = ({
  color1 = '#5227FF',
  color2 = '#FF9FFC',
  color3 = '#FFFFFF',
  speed = 0.35,
  scale = 4,
  detail = 3,
  glow = 1.6,
  coreSize = 0.1,
  swirl = 1,
  fold = -0.2,
  blackPoint = 0.05,
  brightness = 1.3,
  grain = true,
  grainIntensity = 0.05,
  mouseInteraction = true,
  mouseStrength = 0.3,
  opacity = 1,
  className = ''
}: MoltenMetalProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const enableMouseRef = useRef(mouseInteraction)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    })

    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    const canvas = gl.canvas
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'
    container.appendChild(canvas)

    const geometry = new Triangle(gl)
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uSpeed: { value: speed },
        uScale: { value: scale },
        uDetail: { value: detail },
        uGlow: { value: glow },
        uCoreSize: { value: coreSize },
        uSwirl: { value: swirl },
        uFold: { value: fold },
        uBlackPoint: { value: blackPoint },
        uBrightness: { value: brightness },
        uGrain: { value: grain ? 1.0 : 0.0 },
        uGrainIntensity: { value: grainIntensity },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uMouseStrength: { value: mouseStrength },
        uEnableMouse: { value: mouseInteraction },
        uOpacity: { value: opacity },
        uColor1: { value: new Float32Array([1, 1, 1]) },
        uColor2: { value: new Float32Array([1, 1, 1]) },
        uColor3: { value: new Float32Array([1, 1, 1]) }
      }
    })

    const mesh = new Mesh(gl, { geometry, program })
    ctxMap.set(container, { renderer, program, mesh })

    const setSize = () => {
      const rect = container.getBoundingClientRect()
      const w = Math.max(1, Math.floor(rect.width))
      const h = Math.max(1, Math.floor(rect.height))
      renderer.setSize(w, h)
      const res = program.uniforms.iResolution.value
      res[0] = gl.drawingBufferWidth
      res[1] = gl.drawingBufferHeight
      renderer.render({ scene: mesh })
    }

    const ro = new ResizeObserver(setSize)
    ro.observe(container)
    setSize()

    const currentMouse = [0.5, 0.5]
    const targetMouse = [0.5, 0.5]

    const onPointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetMouse[0] = (e.clientX - rect.left) / rect.width
      targetMouse[1] = 1.0 - (e.clientY - rect.top) / rect.height
    }
    const onPointerLeave = () => {
      targetMouse[0] = 0.5
      targetMouse[1] = 0.5
    }
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerleave', onPointerLeave)

    let raf = 0
    let isVisible = true
    let isPageVisible = !document.hidden
    const t0 = performance.now()

    const loop = (t: number) => {
      program.uniforms.iTime.value = (t - t0) * 0.001
      const tx = enableMouseRef.current ? targetMouse[0] : 0.5
      const ty = enableMouseRef.current ? targetMouse[1] : 0.5
      currentMouse[0] += 0.05 * (tx - currentMouse[0])
      currentMouse[1] += 0.05 * (ty - currentMouse[1])
      program.uniforms.uMouse.value[0] = currentMouse[0]
      program.uniforms.uMouse.value[1] = currentMouse[1]
      renderer.render({ scene: mesh })
      raf = requestAnimationFrame(loop)
    }

    const tryStart = () => {
      if (isVisible && isPageVisible && raf === 0) raf = requestAnimationFrame(loop)
    }
    const tryStop = () => {
      if (raf !== 0) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        isVisible ? tryStart() : tryStop()
      },
      { threshold: 0 }
    )
    io.observe(container)

    const onVisibility = () => {
      isPageVisible = !document.hidden
      isPageVisible ? tryStart() : tryStop()
    }
    document.addEventListener('visibilitychange', onVisibility)

    tryStart()

    return () => {
      tryStop()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
      ctxMap.delete(container)
      try {
        container.removeChild(canvas)
      } catch {}
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const ctx = ctxMap.get(container)
    if (!ctx) return
    const { program } = ctx
    const u = program.uniforms

    enableMouseRef.current = mouseInteraction

    u.uSpeed.value = speed
    u.uScale.value = scale
    u.uDetail.value = detail
    u.uGlow.value = glow
    u.uCoreSize.value = coreSize
    u.uSwirl.value = swirl
    u.uFold.value = fold
    u.uBlackPoint.value = blackPoint
    u.uBrightness.value = brightness
    u.uGrain.value = grain ? 1.0 : 0.0
    u.uGrainIntensity.value = grainIntensity
    u.uMouseStrength.value = mouseStrength
    u.uEnableMouse.value = mouseInteraction
    u.uOpacity.value = opacity

    const c1 = u.uColor1.value
    const c2 = u.uColor2.value
    const c3 = u.uColor3.value
    const rgb1 = hexToRgb(color1)
    const rgb2 = hexToRgb(color2)
    const rgb3 = hexToRgb(color3)
    c1[0] = rgb1[0]; c1[1] = rgb1[1]; c1[2] = rgb1[2]
    c2[0] = rgb2[0]; c2[1] = rgb2[1]; c2[2] = rgb2[2]
    c3[0] = rgb3[0]; c3[1] = rgb3[1]; c3[2] = rgb3[2]
  }, [
    color1,
    color2,
    color3,
    speed,
    scale,
    detail,
    glow,
    coreSize,
    swirl,
    fold,
    blackPoint,
    brightness,
    grain,
    grainIntensity,
    mouseInteraction,
    mouseStrength,
    opacity
  ])

  return <div ref={containerRef} className={`molten-metal-container ${className}`.trim()} />
}

export default MoltenMetal
