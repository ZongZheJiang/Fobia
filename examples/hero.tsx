"use client"

import { useTheme } from "../components/theme-provider"
import PixelBlast from "@/components/pixelblast"
import TextGenerateEffect from "../components/text-generation"
import { Button } from "../components/ui/button"
import Link from "next/link"
import FobiaLogo from "../components/fobia"
import IconCarousel from "./icon-carousel"

function Hero() {
  const { theme } = useTheme()
  const pixelColor = theme === "dark" ? "#ffffff" : "#000000"

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

      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-start px-6 pt-32 md:pt-44">
        <FobiaLogo
          size={100}
          iconSize={60}
          color="var(--foreground)"
          animate={true}
        />

        <TextGenerateEffect
          className="mt-4 text-3xl/12 md:text-5xl/16 text-center text-foreground max-w-3xl font-[family-name:var(--font-noto-sans-hebrew)] tracking-tight"
          words="Bringing open source apps to everyone."
          filter={true}
          duration={0.5}
          staggerDelay={0.2}
        />

        <div className="mt-8">
          <Button
            variant="modern"
            className="bg-foreground text-background hover:bg-foreground/90 text-lg px-10 py-7 rounded-full"
          >
            <Link href="/download">Download</Link>
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <IconCarousel />
        </div>
      </div>
    </section>
  )
}

export default Hero