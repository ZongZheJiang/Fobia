import { NavigationMenuDemo } from "@/examples/navigation-menu"
import { Footer } from "@/components/footer"
import UseCaseSummaryCard from "@/examples/use-case-summary-card"
import CardTriplets from "@/examples/card-triplets"

import { USE_CASE_ENTERPRISE_PROFESSIONAL } from "@/data/useCaseEnterpriseProfessional"
import { CARD_TRIPLET_ENTERPRISE_PROFESSIONAL } from "@/data/cardTripletEnterpriseProfessional"

function Use_Case_2_AI_Enthusiast() {
    return (
        <main>
            <NavigationMenuDemo />
            <div className="mt-24">
                <UseCaseSummaryCard cardProps={USE_CASE_ENTERPRISE_PROFESSIONAL} />
            </div>
            <CardTriplets useCaseCardsProps={CARD_TRIPLET_ENTERPRISE_PROFESSIONAL} />
            <Footer />
        </main>
    )
}

export default Use_Case_2_AI_Enthusiast