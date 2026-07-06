// Import from components 
import { Footer } from "../components/footer"

// Import from examples
import { NavigationMenuDemo } from "../examples/navigation-menu"
import Hero from "../examples/hero"
import IconCarousel from "../examples/icon-carousel"
import ProductSummary from "@/examples/product-summary"
import CarouselAudiences from "../examples/carousel-audiences"
import CarouselBlog from "../examples/carousel-blog"
import HeroDownload from "@/examples/hero-download"
import VideoDemo from "@/examples/video-demo"

export function Home () {
  return (
    <main className="w-full">
      <NavigationMenuDemo />
      <Hero />
      <IconCarousel />
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
      <Footer />
    </main>
  )
}

export default Home