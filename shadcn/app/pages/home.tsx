import "../index.css"

// Import from components
import { Footer2 } from "../components/footer2.tsx"
import VideoDemo from "../components/ui/video-autoplay.tsx"

// Import from examples
import { NavigationMenuDemo } from "../examples/navigation-menu.tsx"
import Hero from "../examples/hero.tsx"
import CarouselProduct from "../examples/carousel-product.tsx"
import CarouselBlog from "../examples/carousel-blog.tsx"

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