import { NavigationMenuDemo } from "../../examples/navigation-menu"
import { Footer } from "../../components/footer"

import DownloadCards from "../../examples/download-cards"

export function Download() {
  return (
      <main>
        <NavigationMenuDemo />
        <div className="flex flex-col items-center text-center space-y-6 mb-16 mt-8 pt-16">
          <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            v0.1.0 is now available
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
            Download Fobia
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of our platform. Available on all platforms.
          </p>
        </div>
        
        <DownloadCards />
        <Footer />
      </main>
  )
}

export default Download
