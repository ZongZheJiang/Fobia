import { Card } from "../components/ui/card"
import { AspectRatio } from "../components/ui/aspect-ratio"

function ProductSummary() {
    return (
        <div className="w-max-2xl items-center mx-40">
            <h2
            className="text-5xl font-bold mb-40 mr-80"
            >
                Fobia provides free decentralised computing power to empower communities of builders and coders.</h2>
            <div className="container flex justify-between items-center">
                <h2>Description of Subproduct</h2>
                <div className="rounded-lg bg-muted h-120 w-120"></div>
            </div>
        </div>
    )
}

export default ProductSummary