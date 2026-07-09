//app/blog/page.tsx

import { NavigationMenuDemo } from "@/examples/navigation-menu"
import HorizontalCard from "../../examples/horizontal-card"
import HorizontalCardGrid from "../../examples/horizontal-card-grid"
import { Footer } from "@/components/footer"
import { FEATURED_BLOGPOST } from "@/data/featuredBlogPost"

function Blog() {
    const featuredBlogPost = FEATURED_BLOGPOST[0]
    console.log("Featured Blog Post:", featuredBlogPost) // Log the featured blog post data

    return (
        <div>
            <NavigationMenuDemo />
            <h2 className="text-4xl/16 md:text-6xl/20 ml-[10%] my-16">Featured</h2>
            <HorizontalCard cardProps={featuredBlogPost} />
            <HorizontalCardGrid />
            <Footer />
        </div>
    )
}

export default Blog