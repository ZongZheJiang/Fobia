import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import { Button } from "../components/ui/button"

function CarouselBlog() {
  return (
    <div>
        <div className="text-left mt-20 mx-40">
            <h2 className="text-3xl font-bold">Blog Posts</h2>
        </div>
        <div className="container mx-auto mt-20 flex items-center justify-center">
            <Carousel 
            className="w-full  max-w-6xl flex justify-center"
            opts={{
                align: "start",
                loop: true,
                slidesToScroll: 3,
            }}
            >
                <CarouselContent className="w-full">
                    {Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem 
                    key={index} 
                    className="basis-1/3"
                    >
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                        </Card>
                        <h1>Sample Heading</h1>
                        <h2>Sample Text</h2>
                        <Button>Go to Blogpost</Button>
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

export default CarouselBlog
