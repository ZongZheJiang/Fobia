import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

// Import from examples
import { NavigationMenuDemo } from './examples/navigation-menu.tsx'
import Hero from './examples/hero.tsx'
import CarouselDemo from './examples/carousel.tsx'
import { Footer2 } from './components/footer2.tsx'

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
      <CarouselDemo />
      <Footer2 />

    </BrowserRouter>
  </StrictMode>,
)
