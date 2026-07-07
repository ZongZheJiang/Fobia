import { NavigationMenuDemo } from "@/examples/navigation-menu"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

function Blog_1_Introducing_Fobia() {
    return (
        <main className="min-h-screen">
            <NavigationMenuDemo />

            {/* Article Container */}
            <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                
                {/* Back to Home Button */}
                <div className="mb-8">
                    <Button variant="ghost" size="sm" asChild>
                        <a href="/" className="flex items-center gap-2 text-zinc-500 hover:text-black">
                            <span>← Back to Home</span>
                        </a>
                    </Button>
                </div>

                {/* Blog Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-zinc-500 mb-3">
                        <span className="font-semibold text-blue-600 uppercase tracking-wider">Product</span>
                        <span>•</span>
                        <time dateTime="2026-02-15">June 29, 2026</time>
                        <span>•</span>
                        <span>10 min read</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                        Introducing Fobia
                    </h1>
                    <div className="flex items-center gap-3 border-t border-b border-zinc-100 py-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-zinc-700">
                            
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Fobia</p>
                            <p className="text-xs"></p>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="space-y-8 leading-relaxed text-lg">
                    <p>
                        Open source is public, but it is not always accessible.
                    </p>
                    <p>
                        In the age of AI, powerful new tools are being released every day: agents, model interfaces, robotics systems, research assistants, education tools, security platforms, automation systems, and more.
                    </p>
                    <p>                    
                        But too many of them are still trapped behind Docker commands, GitHub setup instructions, dependency errors, GPU configuration, and technical documentation.
                    </p>
                    <p>                        
                        FOBIA is building the bridge between open-source innovation and the people, businesses, schools, labs, and communities that need it.
                    </p>
                    <p>
                        Open source should not stop at developers.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold pt-4">
                        Our Mission
                    </h2>
                    <p>
                        Fobia’s mission is to make open-source and AI-powered software accessible, usable, and deployable by anyone, regardless of technical background.
                    </p>
                    {/* <br /> */}
                    <blockquote className="border-l-4 border-zinc-900 pl-4 italic my-6">
                        "Developer experience isn't just about fast compilation; it's about reducing the cognitive load required to deliver value."
                    </blockquote>
                    <p>
                        We bridge the gap between public code and practical use by turning open-source projects into simple, discoverable, app-like experiences.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold pt-4">
                        Our Vision
                    </h2>
                    <p>
                        Our vision is a world where the best public software is not limited to developers, but available to every person, business, school, lab, and community that can benefit from it.
                    </p>
                    <p>
                        Fobia aims to decentralize access to open-source innovation by making powerful tools usable from home, from small teams, and from everyday devices.
                    </p>
                    {/* <ul className="list-disc pl-6 space-y-3 text-zinc-700">
                        <li>
                            <strong className="text-zinc-900">Zero-Config Pipelines:</strong> Automatically detects 
                            your framework (Next.js, Remix, or SvelteKit) and configures the optimized build container.
                        </li>
                        <li>
                            <strong className="text-zinc-900">Edge-Native Routing:</strong> Deploy code closer to your 
                            users with global edge caching configured by default.
                        </li>
                        <li>
                            <strong className="text-zinc-900">Environment Parity:</strong> Run the exact same production 
                            environment configuration locally to eliminate the "works on my machine" class of bugs.
                        </li>
                    </ul> */}
                </div>

                {/* Footer Section of Article */}
                <footer className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex gap-2">
                        <span className="bg-zinc-100 text-zinc-600 text-xs font-medium px-2.5 py-0.5 rounded-full">DevOps</span>
                        <span className="bg-zinc-100 text-zinc-600 text-xs font-medium px-2.5 py-0.5 rounded-full">NextJS</span>
                        <span className="bg-zinc-100 text-zinc-600 text-xs font-medium px-2.5 py-0.5 rounded-full">WebDev</span>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" className="sm:self-auto self-start">
                            <a href="/blog">Back to Blog</a>
                        </Button>
                        <Button variant="outline" className="sm:self-auto self-start">
                            <a href="https://www.linkedin.com/pulse/bringing-open-source-ai-everyone-fobia-ai-g7gfe/">Link to full article</a>
                        </Button>
                    </div>
                </footer>

            </article>

            <Footer />
        </main>
    )
}

export default Blog_1_Introducing_Fobia