"use client"

import { useState, useEffect, useRef } from "react"
import AnimatedGpuFanIcon from "./animated-gpu-fan-icon"

const ACCELERATE_MS = 3000
const ACCEL_TARGET = -1080
const COAST_VELOCITY = -1080

interface FobiaLogoProps {
  size?: number
  iconSize?: number
  color?: string
  animate?: boolean
}

export default function FobiaLogo({
  size,
  iconSize,
  color = "currentColor",
  animate = true,
}: FobiaLogoProps) {
  const [bladeRotation, setBladeRotation] = useState(0)
  const startRef = useRef<number | null>(null)
  const fontSize = size ? `${size}px` : undefined
  const fanSize = iconSize ?? (size ? Math.round(size * 0.55) : 88)

  useEffect(() => {
    if (!animate) return
    const frame = requestAnimationFrame(function tick(ts) {
      if (startRef.current === null) startRef.current = ts
      const elapsed = ts - startRef.current
      if (elapsed < ACCELERATE_MS) {
        const p = elapsed / ACCELERATE_MS
        setBladeRotation(ACCEL_TARGET * (0.2 * p + 0.8 * p * p * p))
      } else {
        const coastSec = (elapsed - ACCELERATE_MS) / 1000
        setBladeRotation(ACCEL_TARGET + COAST_VELOCITY * coastSec)
      }
      requestAnimationFrame(tick)
    })
    return () => cancelAnimationFrame(frame)
  }, [animate])

  return (
    <div className="flex items-baseline justify-center gap-0.5 select-none">
      <span
        className="font-sans font-light tracking-tighter leading-none"
        style={{
          fontSize: fontSize ?? "clamp(4rem,10vw,8rem)",
          color,
        }}
      >
        f
      </span>
      <AnimatedGpuFanIcon
        size={fanSize}
        animate={false}
        bladeRotation={bladeRotation}
        color={color}
        style={{ display: "inline-block", verticalAlign: "middle" }}
      />
      <span
        className="font-sans font-light tracking-tighter leading-none -ml-1"
        style={{
          fontSize: fontSize ?? "clamp(4rem,10vw,8rem)",
          color,
        }}
      >
        bia
      </span>
    </div>
  )
}
