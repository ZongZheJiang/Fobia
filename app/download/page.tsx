import { Button } from "../../components/ui/button"
import { NavigationMenuDemo } from "../../examples/navigation-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../../components/ui/card"
import { Footer } from "../../components/footer"
import Link from "next/link"

import DownloadCards from "../../examples/download-cards"

export function Download() {
  return (
      <main>
        <NavigationMenuDemo />
        <div className="flex flex-col items-center text-center space-y-6 mb-16 mt-8">
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-600 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            v0.1.0 is now available
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black">
            Download Fobia
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto">
            Experience the next generation of our platform. Available on all platforms.
          </p>
        </div>
        
        <DownloadCards />

        {/* CLI Section */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Or install via CLI</h2>
          </div>
          <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 relative group shadow-xl">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="mt-8 flex items-center font-mono text-sm overflow-x-auto pb-2">
              <span className="text-emerald-600 select-none mr-4">$</span>
              <span className="text-zinc-700 font-medium">curl -fsSL https://fobia.dev/install | bash</span>
            </div>
            <div className="absolute right-4 top-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="outline" size="sm" className="h-8 border-zinc-300 bg-white hover:bg-zinc-100 text-xs text-zinc-600">
                Copy
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
  )
}

export default Download
