import "../globals.css"
import { Button } from "../../components/ui/button"
import { NavigationMenuDemo } from "../../examples/navigation-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../../components/ui/card"
import { Footer2 } from "../../components/footer2"
import Link from "next/link"

export function Download() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-200 selection:text-zinc-900 font-montserrat">
      <NavigationMenuDemo />

      <main className="container mx-auto px-4 py-24 md:py-32 max-w-6xl">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* macOS Card */}
          <Card className="bg-white/80 backdrop-blur-md border-zinc-200 shadow-xl hover:border-zinc-300 transition-all duration-300 group">
            <CardHeader>
              <img src="../applelogo.svg" alt="macOS logo" className="w-4 h-4 object-contain" />
              <CardTitle className="text-2xl flex items-center gap-2 text-zinc-800 group-hover:text-black transition-colors">
                macOS
              </CardTitle>
              <CardDescription className="text-zinc-500">Requires macOS 11.0 or later.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button className="w-full bg-black text-white hover:bg-zinc-800 transition-colors">
                Download for Apple Silicon
              </Button>
              <Button variant="outline" className="w-full border-zinc-200 bg-transparent hover:bg-zinc-100 text-zinc-700 transition-colors">
                Download for Intel
              </Button>
            </CardContent>
          </Card>

          {/* Windows Card */}
          <Card className="bg-white/80 backdrop-blur-md border-zinc-200 shadow-xl hover:border-zinc-300 transition-all duration-300 group">
            <CardHeader>
              <img src="fobia-app/app/download/windowslogo.png" alt="windows logo" className="w-4 h-4 object-contain" />
              <CardTitle className="text-2xl flex items-center gap-2 text-zinc-800 group-hover:text-black transition-colors">
                Windows
              </CardTitle>
              <CardDescription className="text-zinc-500">Windows 10 and 11 supported.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button className="w-full bg-black text-white hover:bg-zinc-800 transition-colors">
                Download for x64
              </Button>
              <Button variant="outline" className="w-full border-zinc-200 bg-transparent hover:bg-zinc-100 text-zinc-700 transition-colors">
                Download for ARM64
              </Button>
            </CardContent>
          </Card>

          {/* Linux Card */}
          <Card className="bg-white/80 backdrop-blur-md border-zinc-200 shadow-xl hover:border-zinc-300 transition-all duration-300 group">
            <CardHeader>
              <img src="fobia-app/app/download/linuxlogo.png" alt="linux logo" className="w-4 h-4 object-contain" />
              <CardTitle className="text-2xl flex items-center gap-2 text-zinc-800 group-hover:text-black transition-colors">
                Linux
              </CardTitle>
              <CardDescription className="text-zinc-500">Available via AppImage or DEB.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button className="w-full bg-black text-white hover:bg-zinc-800 transition-colors">
                Download AppImage
              </Button>
              <Button variant="outline" className="w-full border-zinc-200 bg-transparent hover:bg-zinc-100 text-zinc-700 transition-colors">
                Download .deb
              </Button>
            </CardContent>
          </Card>
        </div>

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

      </main>

      <Footer2 />
    </div>
  )
}

export default Download
