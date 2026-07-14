import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Button } from "../components/ui/button"
import Image from "next/image"
import Link from "next/link"

import { CARD_ITEMS } from "@/data/cardDatas"
import { BLOGPOSTS } from "@/data/blogPosts"

function HorizontalCardGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Grid container: 1 column on mobile, 2 columns on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {BLOGPOSTS.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-8 border-b border-neutral-100 last:border-b-0 lg:border-b-0"
          >
            {/* Left side text container */}
            <div className="flex-1 min-w-0 w-[30%]">
              <Card variant="borderless">
                <CardHeader>
                  <CardAction>
                    <Badge variant="secondary">{item.blogType}</Badge>
                  </CardAction>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                {/* Overriding the default CardFooter background and borders downstream */}
                <CardFooter variant="borderless">
                  <Button className="w-full sm:w-auto px-6">
                    <Link href={item.href}>
                      View Blog Post
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Right side image container (Responsive sizing) */}
            <div className="relative w-full sm:w-[240px] aspect-[16/10] shrink-0 rounded-xl overflow-hidden">
              <Image
                src={item.mediaUrl}
                fill
                alt=""
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw, 240px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalCardGrid