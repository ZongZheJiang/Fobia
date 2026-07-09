// examples/horizontal-card.tsx

import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
  CardTitle,
} from "../components/ui/card"

import { BlogPost } from "../types/blogPost"

import { Badge } from "@/components/ui/badge"
import { Button } from "../components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FEATURED_BLOGPOST } from "../data/featuredBlogPost"    
import { VariantProps } from "class-variance-authority"



function HorizontalCard({cardProps}: {cardProps: BlogPost}) {
    if (!cardProps) {
        console.error("No cardProps provided to HorizontalCard component.");
        return null; 
    }

    return (
        <div className="flex w-[80%] justify-between items-start gap-8 my-8 mx-[10%]">
            <div className="w-[50%]">
                <Card variant="borderless">
                    <CardHeader>
                        <CardAction>
                        <Badge variant="secondary">Featured</Badge>
                        </CardAction>
                        <CardTitle>{cardProps.title}</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter variant="borderless">
                        <Button className="w-full sm:w-auto px-6">
                            <Link href={cardProps.href}>
                                View Blog Post
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <Image
            src={cardProps.mediaUrl} 
            width="400"
            height="200"
            alt="Sample Image"
            className="rounded-xl"
            ></Image>
        </div>
    )
}

export default HorizontalCard