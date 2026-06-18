import { BackgroundBeams } from "../components/ui/background-beam"
import App from "../App"
import TextGenerateEffect from "../components/text-generation"
import { Button } from "../components/ui/button"
import VideoDemo from "../components/ui/video-autoplay"

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
          <Button className="bg-white text-black hover:bg-gray-200 flex items-center mr-10">
            Documentations
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 flex items-center ml-10">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero