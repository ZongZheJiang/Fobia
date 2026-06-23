import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

function CarouselAudiences() {
  return (
    <div className="mx-[10%]">
        <div className="text-left mt-20">
            <h1 className="text-xl md:text-3xl font-bold mb-8">Use Cases: Cool Text to wow the user.</h1>
            <h2 className="text-md md:text-xl text-right">Cool description that blows them off their feet</h2>
        </div>
        <div className="container mx-auto my-20 flex items-center justify-center">
            <Carousel 
            className="w-full max-w-6xl flex justify-center"
            opts={{
                align: "start",
                loop: true,
            }}
            >
                <CarouselContent className="w-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem 
                    key={index} 
                    className="w-full basis-[85%] md:basis-[70%]"
                    >
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-video items-center justify-center p-6">
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

export default CarouselAudiences
