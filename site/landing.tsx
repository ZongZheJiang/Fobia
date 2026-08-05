import ScrollMorphHero from "@/components/scroll-morph-hero"
import FeatureSection from "@/components/ui/stack-feature-section"

export default function Landing() {
  return (
    <main className="w-full">
      <section className="h-screen w-full">
        <ScrollMorphHero />
      </section>
      <FeatureSection />
    </main>
  )
}
