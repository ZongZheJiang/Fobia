import { NavigationMenuDemo } from "@/examples/navigation-menu"
import HorizontalCard from "../../examples/horizontal-card"
import HorizontalCardGrid from "../../examples/horizontal-card-grid"
import { Footer } from "@/components/footer"

function Blog() {
    return (
        <div>
            <NavigationMenuDemo />
            <h2 className="text-4xl/16 md:text-6xl/20 ml-[10%] my-16">Featured</h2>
            <HorizontalCard />
            <HorizontalCardGrid />
            <Footer />
        </div>
    )
}

export default Blog