"use client"

import { motion } from "motion/react"
import { useTheme } from "../components/theme-provider"
import PixelBlast from "@/components/pixelblast"
import TextGenerateEffect from "../components/text-generation"
import HeroReactor from "@/components/hero-reactor"
import { Button } from "../components/ui/button"
import Link from "next/link"
import IconCarousel from "./icon-carousel"
import { HERO_CONTENT } from "@/data/heroContent"

function Hero() {
  const { theme } = useTheme()
  const accent = theme === "dark" ? "#ffffff" : "#000000"

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <PixelBlast
          variant="square"
          color={accent}
          className="h-full w-full"
          transparent
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          speed={0.5}
          edgeFade={0.5}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--background))]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-40 pt-32 md:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {HERO_CONTENT.badge}
            </motion.span>

            <TextGenerateEffect
              className="mt-6 max-w-2xl bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent text-4xl/11 font-[family-name:var(--font-noto-sans-hebrew)] font-semibold tracking-tight md:text-6xl/16"
              words={HERO_CONTENT.headline}
              filter={true}
              duration={0.5}
              staggerDelay={0.18}
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-6 max-w-xl text-base/7 text-muted-foreground md:text-lg/8"
            >
              {HERO_CONTENT.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
            >
              {HERO_CONTENT.ctas.map((cta) => (
                <Button
                  key={cta.label}
                  asChild
                  variant={cta.primary ? "modern" : "ghost"}
                  className={
                    cta.primary
                      ? "h-13 rounded-full bg-foreground px-9 py-4 text-base text-background hover:bg-foreground/90"
                      : "h-13 rounded-full border-border px-8 py-4 text-base"
                  }
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ))}
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-start"
            >
              {HERO_CONTENT.stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <span className="h-9 w-px bg-border" />}
                  <div className="text-center lg:text-left">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-2xl font-semibold tracking-tight text-foreground">
                      {stat.value}
                    </dd>
                    <dd className="mt-0.5 text-xs text-muted-foreground">
                      {stat.label}
                    </dd>
                  </div>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto w-full max-w-[340px] lg:max-w-[500px]"
          >
            <HeroReactor apps={HERO_CONTENT.orbitApps} color={accent} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="pointer-events-none absolute bottom-28 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-9 w-6 items-start justify-center rounded-full border border-border p-1.5"
          >
            <div className="h-2 w-1 rounded-full bg-foreground/60" />
          </motion.div>
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <IconCarousel />
      </div>
    </section>
  )
}

export default Hero
