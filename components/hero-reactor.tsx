"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import Image from "next/image"
import AnimatedGpuFanIcon from "./animated-gpu-fan-icon"
import type { HeroOrbitApp } from "@/types/hero"

const ORBIT_RADIUS = 0.44

interface HeroReactorProps {
  apps: HeroOrbitApp[]
  color: string
  spinDuration?: number
}

export default function HeroReactor({
  apps,
  color,
  spinDuration = 80,
}: HeroReactorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 50,
    damping: 16,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 50,
    damping: 16,
  })

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onPointerLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative aspect-square w-full select-none"
      style={{ perspective: 1000 }}
      role="img"
      aria-label="Open-source apps orbiting the Fobia GPU fan"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${color}1f, transparent 65%)` }}
      />

      <motion.div
        className="absolute inset-0"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <svg
          className="absolute inset-[6%] h-[88%] w-[88%] text-foreground/10"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="50"
            stroke="currentColor"
            strokeWidth="0.4"
            strokeDasharray="2 3"
          />
        </svg>
        <svg
          className="absolute inset-[14%] h-[72%] w-[72%] text-foreground/10"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="50"
            stroke="currentColor"
            strokeWidth="0.4"
            strokeDasharray="0.7 2.2"
          />
        </svg>

        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: spinDuration, repeat: Infinity, ease: "linear" }}
          >
            {apps.map((app, i) => {
              const angle = (i / apps.length) * 360
              const rad = (angle * Math.PI) / 180
              const x = Math.cos(rad) * ORBIT_RADIUS * 100
              const y = Math.sin(rad) * ORBIT_RADIUS * 100
              return (
                <div
                  key={app.src}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ marginLeft: `${x}%`, marginTop: `${y}%` }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: spinDuration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-background/80 p-2 shadow-sm backdrop-blur-sm">
                      <Image
                        src={app.src}
                        alt={app.label}
                        width={28}
                        height={28}
                        className="h-auto w-auto object-contain"
                      />
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>
        </div>

        <div className="absolute inset-0 grid place-items-center">
          <AnimatedGpuFanIcon
            size="60%"
            animate
            speed={40}
            color={color}
            gradient={{
              type: "linear",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              stops: [
                { offset: "0%", color, opacity: 1 },
                { offset: "100%", color, opacity: 0.4 },
              ],
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
