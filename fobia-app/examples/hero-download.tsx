import PixelBlast from "../components/pixelblast"

function HeroDownload() {
    return(
        <div className="relative mx-[10%] rounded-xl bg-black h-120 w-[80%]">
            <div className="absolute inset-0">
                <PixelBlast
                    variant="square"
                    color="white"
                    className="h-120 w-[80%]"
                />
            </div>
            <div className="relative z-10">
                <h1 className="text-white text-xl">Hello Lorum Ipsum Dolor</h1>
            </div>
        </div>
    )
}

export default HeroDownload