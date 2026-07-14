import { NavigationMenuDemo } from "@/examples/navigation-menu"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ABOUT_VALUES } from "@/data/aboutValues"
import { ABOUT_FOUNDER, ABOUT_TEAM } from "@/data/aboutTeam"

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
                    {ABOUT_VALUES.map((value) => (
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
                    <Avatar className="size-32">
                        <AvatarImage src="/fine_shyt.jpeg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                            {ABOUT_FOUNDER.role}
                        </p>
                        <p className="text-sm text-muted-foreground max-w-xs">{ABOUT_FOUNDER.description}</p>
                    </div>
                </div>

                {/* Rest of team — smaller avatars */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl w-full">
                    {ABOUT_TEAM.map((member) => (
                        <div key={member.role} className="flex flex-col items-center text-center gap-4">
                            <Avatar className="size-32">
                                <AvatarImage src="http://www.w3.org/2000/svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                                    {member.role}
                                </p>
                                <p className="text-sm text-muted-foreground">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div> */}
            </section>

            <Footer />
        </main>
    )
}

export default About
