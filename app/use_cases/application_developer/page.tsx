import { NavigationMenuDemo } from "@/examples/navigation-menu"
import { Footer } from "@/components/footer"
import UseCaseSummaryCard from "@/examples/use-case-summary-card"
import CardTriplets from "@/examples/card-triplets"

import { USE_CASE_APPLICATION_DEVELOPER } from "@/data/useCaseApplicationDeveloper"
import { CARD_TRIPLET_APPLICATION_DEVELOPER } from "@/data/cardTripletApplicationDeveloper"

function Use_Case_3_Application_Developer() {
    return (
        <main>
            <NavigationMenuDemo />
            <div className="mt-24">
                <UseCaseSummaryCard cardProps={USE_CASE_APPLICATION_DEVELOPER} />
            </div>
            <CardTriplets useCaseCardsProps={CARD_TRIPLET_APPLICATION_DEVELOPER} />
            <Footer />
        </main>
    )
}

export default Use_Case_3_Application_Developer