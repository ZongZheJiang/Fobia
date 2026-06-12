import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

function CarouselDemo() {
  return (
    <div>
        <div className="text-left mt-20 mx-40">
            <h2 className="text-3xl font-bold">Cool Text to wow the user.</h2>
        </div>
        <div className="container mx-auto mt-20 flex items-center justify-center">
            <Carousel className="w-full max-w-[12rem] sm:max-w-xs flex justify-center">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2">
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
    </div>

  )
}

export default CarouselDemo
