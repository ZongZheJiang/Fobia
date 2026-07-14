import { NavigationMenuDemo } from "@/examples/navigation-menu"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

import { COMMUNITY_CHANNELS } from "@/data/communityChannels"
import { COMMUNITY_CONTRIBUTE } from "@/data/communityContribute"

function Community() {
    return (
        <main>
            <NavigationMenuDemo />

            {/* Hero */}
            <div className="flex flex-col items-center text-center space-y-6 pt-32 pb-16 px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
                    Join the Community
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Fobia is built in the open. Connect with users and contributors, share feedback, and help shape the future of the platform.
                </p>
            </div>

            {/* Community Channels */}
            <section className="flex justify-center w-full px-4 mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                    {COMMUNITY_CHANNELS.map((channel) => (
                        <div
                            key={channel.id}
                            className="flex flex-col items-start gap-4 p-6 rounded-xl border border-border bg-card"
                        >
                            <Image
                                src={channel.icon}
                                alt={channel.name}
                                width={32}
                                height={32}
                                className="dark:invert"
                            />
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-foreground">{channel.name}</h3>
                                <p className="text-sm text-muted-foreground">{channel.description}</p>
                            </div>
                            <Button variant="outline" size="sm" asChild className="mt-auto">
                                <Link href={channel.href} target="_blank" rel="noopener noreferrer">
                                    {channel.cta}
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ways to Contribute */}
            {/* <section className="flex flex-col items-center px-4 mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                    Ways to Get Involved
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                    {COMMUNITY_CONTRIBUTE.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="flex flex-col gap-3 p-6 rounded-xl border border-border bg-card hover:bg-accent transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </Link>
                    ))}
                </div>
            </section> */}

            <Footer />
        </main>
    )
}

export default Community
