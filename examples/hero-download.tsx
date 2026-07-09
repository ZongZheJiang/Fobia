import Link from "next/link"
import PixelBlast from "../components/pixelblast"
import { BackgroundBeams } from "../components/ui/background-beam"
import { Button } from "../components/ui/button"

function HeroDownload() {
    return(
        <div className="relative mx-[10%] rounded-xl bg-black h-120 w-[80%]">
            <div className="absolute inset-0">
                <BackgroundBeams />
            </div>
            <div className="container relative z-10 items-center content-center justify-center h-120 mx-[5%]">
                <div>
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-[5%]">Download Fobia Now</h1>
                </div>
                <div className="flex relative z-20">
                    <Button variant={"modern"} className="bg-zinc-950 text-white hover:bg-zinc-800 mr-[2%]">
                        <Link href="/download">Download for Apple Silicon</Link>
                    </Button>
                    <Button variant={"modern"} className="bg-zinc-950 text-white hover:bg-zinc-800">
                        <Link href="/download">Download for Intel</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroDownload