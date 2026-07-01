import "./index.css"

import { gsap } from "gsap";

// Import from components 
import { Footer2 } from "../components/footer"

// Import from examples
import { NavigationMenuDemo } from "../examples/navigation-menu"
import Hero from "../examples/hero"
import ProductSummary from "@/examples/product-summary"
import CarouselAudiences from "../examples/carousel-audiences"
import CarouselBlog from "../examples/carousel-blog"
import HeroDownload from "@/examples/hero-download"
import VideoDemo from "@/examples/video-demo"

export function Home () {
  return (
    <div>
      <NavigationMenuDemo variant="dark" overlay={true} />
      <Hero />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <header className="h-[40vh]"></header>
          <VideoDemo />
          <footer className="h-[80vh]"></footer>
        </div>
      </div>
      <ProductSummary />
      <CarouselAudiences />
      <HeroDownload />
      <CarouselBlog />
      <Footer2 />
    </div>
  )
}

export default Home