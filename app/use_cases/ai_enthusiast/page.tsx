import { NavigationMenuDemo } from "@/examples/navigation-menu"
import { Footer } from "@/components/footer"
import UseCaseSummaryCard from "@/examples/use-case-summary-card"
import CardTriplets from "@/examples/card-triplets"

import { USE_CASE_AI_ENTHUSIAST } from "@/data/useCaseAIEnthusiast"
import { CARD_TRIPLET_AI_ENTHUSIAST } from "@/data/cardTripletAIEnthusiast"

function Use_Case_2_AI_Enthusiast() {
    return (
        <main>
            <NavigationMenuDemo />
            <div className="mt-24">
                <UseCaseSummaryCard cardProps={USE_CASE_AI_ENTHUSIAST} />
            </div>
            <CardTriplets useCaseCardsProps={CARD_TRIPLET_AI_ENTHUSIAST} />
            <Footer />
        </main>
    )
}

export default Use_Case_2_AI_Enthusiast