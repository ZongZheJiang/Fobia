import "../index.css"

import { NavigationMenuDemo } from "@/examples/navigation-menu"
import HorizontalCard from "../../examples/horizontal-card"
import {Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle} from "../../components/ui/card"
import {Button} from "../../components/ui/button"
import { Badge } from "@/components/ui/badge"
import HorizontalCardGrid from "../../examples/horizontal-card-grid"
import { Footer } from "@/components/footer"

function Blog() {
    return (
        <div>
            <NavigationMenuDemo />
            <h2 className="text-4xl/16 md:text-6xl/20 ml-[10%] my-8">Featured</h2>
            <HorizontalCard />
            <HorizontalCardGrid />
            <Footer />
        </div>
    )
}

export default Blog