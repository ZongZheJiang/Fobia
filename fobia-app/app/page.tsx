import "./index.css"

import { gsap } from "gsap";

// Import from components 
import { Footer2 } from "../components/footer2"

// Import from examples
import { NavigationMenuDemo } from "../examples/navigation-menu"
import Hero from "../examples/hero"
import CarouselProduct from "../examples/carousel-product"
import CarouselBlog from "../examples/carousel-blog"
import DownloadCards from "@/examples/download-cards"
import VideoDemo from "@/examples/video-demo";

export function Home () {
  return (
    <div>
      <NavigationMenuDemo />
      <Hero />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <header className="h-[40vh]"></header>
          <VideoDemo />
          <footer className="h-[80vh]"></footer>
        </div>
      </div>
      <CarouselProduct />
      <DownloadCards />
      <CarouselBlog />
      <Footer2 />
    </div>
  )
}

export default Home