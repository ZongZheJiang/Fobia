import { NavigationMenuDemo } from "@/examples/navigation-menu"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const COMMUNITY_CHANNELS = [
    {
        id: 1,
        name: "Discord",
        description: "Join our Discord server to chat with the team and other Fobia users in real time.",
        icon: "/discord.svg",
        href: "https://discord.gg/fobia",
        cta: "Join Server",
    },
    {
        id: 2,
        name: "GitHub",
        description: "Browse the source, open issues, and contribute to Fobia directly on GitHub.",
        icon: "/file.svg",
        href: "https://github.com/fobia-ai",
        cta: "View Repository",
    },
    {
        id: 3,
        name: "LinkedIn",
        description: "Follow us on LinkedIn for product updates, announcements, and company news.",
        icon: "/linkedin.svg",
        href: "https://www.linkedin.com/company/fobia-ai/",
        cta: "Follow Us",
    },
    {
        id: 4,
        name: "X / Twitter",
        description: "Stay up to date with the latest from Fobia on X.",
        icon: "/x-twitter.svg",
        href: "https://x.com/fobia_ai",
        cta: "Follow on X",
    },
]

const WAYS_TO_CONTRIBUTE = [
    {
        id: 1,
        title: "Report a Bug",
        description: "Found something broken? Open an issue on GitHub and help us squash it.",
        href: "https://github.com/fobia-ai/fobia/issues",
    },
    {
        id: 2,
        title: "Request a Feature",
        description: "Have an idea for Fobia? Share it with the community and vote on what ships next.",
        href: "https://github.com/fobia-ai/fobia/discussions",
    },
    {
        id: 3,
        title: "Read the Docs",
        description: "Learn how to get the most out of Fobia through our official documentation.",
        href: "/documentation",
    },
]

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
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
            <section className="flex flex-col items-center px-4 mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                    Ways to Get Involved
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                    {WAYS_TO_CONTRIBUTE.map((item) => (
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
            </section>

            <Footer />
        </main>
    )
}

export default Community
