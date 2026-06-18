"use client"

import "./index.css"

// Import from components 
import { Footer2 } from "../components/footer2"
import VideoDemo from "../components/ui/video-autoplay"

// Import from examples
import { NavigationMenuDemo } from "../examples/navigation-menu"
import Hero from "../examples/hero"
import CarouselProduct from "../examples/carousel-product"
import CarouselBlog from "../examples/carousel-blog"

export function Home () {
  return (
    <div>
      <NavigationMenuDemo />
      <Hero />
      <VideoDemo 
        className="aspect-video mx-auto mt-20 rounded-lg w-full max-w-4xl"
      />
      <CarouselProduct />
      <CarouselBlog />
      <Footer2 />
    </div>
  )
}

export default Home