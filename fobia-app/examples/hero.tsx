"use client"

import { BackgroundBeams } from "../components/ui/background-beam"
import PixelBlast from "@/components/pixelblast"
import TextGenerateEffect from "../components/text-generation"
import { Button } from "../components/ui/button"
import Link from "next/dist/client/link"

function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <PixelBlast
          variant="square"
          color="#701bbf"
          className="h-120 w-[80%]"
        />
      </div>
      <div className="relative z-10 text-center">
        <div>
          <TextGenerateEffect 
          className="text-4xl/16 md:text-6xl/20 text-center mx-[10%] text-white"
          words="Turbocharge your computing capabilities now" 
          filter={true}
          duration={0.5}
          staggerDelay={0.2}
          />
        </div>
        <div className="container mx-auto px-4 flex items-center justify-center gap-6 mt-10 relative z-10">
          <Button variant={"modern"} className="bg-zinc-950 text-white hover:bg-zinc-800">
            <Link href="/documentation">Documentation</Link>
          </Button>
          <Button variant={"modern"} className="bg-zinc-950 text-white hover:bg-zinc-800">
            <Link href="/download">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero