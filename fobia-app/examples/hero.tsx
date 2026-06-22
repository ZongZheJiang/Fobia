"use client"

import { BackgroundBeams } from "../components/ui/background-beam"
import TextGenerateEffect from "../components/text-generation"
import { Button } from "../components/ui/button"
import Link from "next/dist/client/link"

function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-950">
      <BackgroundBeams />
      <div className="relative z-10 text-center">
        <div>
          <TextGenerateEffect 
          className="text-6xl text-center mx-40 text-white"
          words="We provide free decentralised computing power to empower communities of builders and coders." 
          filter={true}
          duration={0.5}
          staggerDelay={0.2}
          />
        </div>
        <div className="container mx-auto px-4 flex items-center justify-center gap-6 mt-10 relative z-10">
          <Button variant={"modern"} className="bg-zinc-950 text-white hover:bg-zinc-800">
            Documentations
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