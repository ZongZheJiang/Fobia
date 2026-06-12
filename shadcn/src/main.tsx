import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

// Import from components
import { Footer2 } from './components/footer2.tsx'
import VideoDemo from './components/ui/video-autoplay.tsx'

// Import from examples
import { NavigationMenuDemo } from './examples/navigation-menu.tsx'
import Hero from './examples/hero.tsx'
import CarouselDemo from './examples/carousel.tsx'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../src/components/ui/navigation-menu"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavigationMenuDemo />
      <Hero />
      <VideoDemo 
        className="aspect-video mx-auto mt-20 rounded-lg w-full max-w-4xl"
      />
      <CarouselDemo />
      <Footer2 />

    </BrowserRouter>
  </StrictMode>,
)
