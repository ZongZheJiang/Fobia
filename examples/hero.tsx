"use client"

import { useTheme } from "../components/theme-provider"
import PixelBlast from "@/components/pixelblast"
import TextGenerateEffect from "../components/text-generation"
import { Button } from "../components/ui/button"
import Link from "next/dist/client/link"
import FobiaLogo from "../components/fobia"
import IconCarousel from "../examples/icon-carousel"

function Hero() {
  const { theme } = useTheme()
  const pixelColor = theme === "dark" ? "#808080" : "#808080"

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <PixelBlast
          variant="square"
          color={pixelColor}
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

      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 pt-16 gap-8">
        <FobiaLogo
          size={140}
          iconSize={84}
          color="var(--foreground)"
          animate={true}
        />

        <TextGenerateEffect
          className="text-3xl/14 md:text-5xl/18 text-center text-foreground max-w-2xl"
          words="Turbocharge your computing capabilities now"
          filter={true}
          duration={0.5}
          staggerDelay={0.2}
        />

        <div className="flex items-center gap-4">
          <Button variant="modern" className="bg-background/100 text-foreground hover:bg-background/100 border border-border">
            <Link href="/documentation">Documentation</Link>
          </Button>
          <Button variant="modern" className="bg-purple-600 text-white hover:bg-purple-500 shadow-purple-600/25">
            <Link href="/download">Get Started</Link>
          </Button>
        </div>

        <IconCarousel />
      </div>
    </section>
  )
}

export default Hero