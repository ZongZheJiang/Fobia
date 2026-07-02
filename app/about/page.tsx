import { NavigationMenuDemo } from "@/examples/navigation-menu"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

function About() {
    return (
        <main>
            <NavigationMenuDemo />
            <div className="flex flex-col items-center text-center space-y-6 mb-16 mt-8">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black">
                    Working in Progress
                </h1>
                <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto">
                    This page is currently under development. Please check back later for updates!
                </p>
                <Button variant="outline" size="lg" className="mt-4">
                    <a href="/">Back to Home</a>
                </Button>
            </div>
            <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-6xl justify-center content-center">
                    {/* Placeholder for future content */}
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default About