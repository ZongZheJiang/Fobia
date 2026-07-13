import { NavigationMenuDemo } from "@/examples/navigation-menu"
import { Footer } from "@/components/footer"

const VALUES = [
    {
        id: 1,
        name: "Equity",
        description:
            "We believe everyone should have access to powerful AI tools to foster greater innovation and development in society by empowering even non-technical individuals to build anything.",
    },
    {
        id: 2,
        name: "Community",
        description:
            "We want to build a community that is curious and dares to dream — supporting each other in experimenting and testing new ideas with AI tools.",
    },
    {
        id: 3,
        name: "Transparency",
        description:
            "We are fully transparent with security, processes, and handling of consumer data.",
    },
]

const FOUNDER = {
    role: "Founder",
    description: "Visionary behind Fobia, driving the mission to democratise AI for everyone.",
}

const TEAM = [
    {
        role: "Head of Technology",
        description: "Leads engineering and infrastructure, ensuring Fobia stays reliable and on the cutting edge.",
    },
    {
        role: "Head of Marketing",
        description: "Shapes how Fobia communicates its value to the world and grows the community.",
    },
    {
        role: "Head of Accounting",
        description: "Keeps Fobia financially healthy so the team can focus on building.",
    },
]

function AvatarPlaceholder({ size = 96 }: { size?: number }) {
    return (
        <div
            style={{ width: size, height: size }}
            className="rounded-full bg-muted flex items-center justify-center shrink-0"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ width: size * 0.5, height: size * 0.5 }}
                className="text-muted-foreground"
            >
                <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    )
}

function About() {
    return (
        <main>
            <NavigationMenuDemo />

            {/* Hero */}
            <div className="flex flex-col items-center text-center pt-32 pb-16 px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
                    About Fobia
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                    We are a community-driven team building the bridge between AI and the people who need it most.
                </p>
            </div>

            {/* Mission & Vision */}
            <section className="flex justify-center px-4 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                    <div className="flex flex-col gap-4 p-8 rounded-xl border border-border bg-card">
                        <h2 className="text-xl font-bold text-foreground tracking-tight uppercase">
                            Mission
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            FOBIA serves as the community-driven bridge that repackages AI tools into one consolidated platform,
                            allowing non-technical individuals to build solutions to tackle issues they have always wanted to solve.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 p-8 rounded-xl border border-border bg-card">
                        <h2 className="text-xl font-bold text-foreground tracking-tight uppercase">
                            Vision
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            A world where building comes as natural as breathing for anyone and everyone —
                            and no one is restricted by resources or technical knowledge.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="flex flex-col items-center px-4 mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                    Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
                    {VALUES.map((value) => (
                        <div
                            key={value.id}
                            className="flex flex-col gap-3 p-6 rounded-xl border border-border bg-card"
                        >
                            <h3 className="text-lg font-semibold text-foreground">{value.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="flex flex-col items-center px-4 mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
                    The Team
                </h2>

                {/* Founder — centred, larger avatar */}
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <AvatarPlaceholder size={112} />
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                            {FOUNDER.role}
                        </p>
                        <p className="text-sm text-muted-foreground max-w-xs">{FOUNDER.description}</p>
                    </div>
                </div>

                {/* Rest of team — smaller avatars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl w-full">
                    {TEAM.map((member) => (
                        <div key={member.role} className="flex flex-col items-center text-center gap-4">
                            <AvatarPlaceholder size={72} />
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                                    {member.role}
                                </p>
                                <p className="text-sm text-muted-foreground">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default About
