import { 
  Card,   
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from "../components/ui/card"

import { Button } from "../components/ui/button"
import Link from "next/link"
import Image from 'next/image'

import { DOWNLOAD_CARDS } from "@/data/downloadCards"

function DownloadCards() {
    return (
        <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-6xl justify-center content-center">
            {DOWNLOAD_CARDS.map((card) => (
                <Card key={card.id} variant="backdropBlur">
                    <CardHeader>
                        <Image src={card.imageUrl} alt={`${card.title} logo`} width={16} height={16} className="object-contain" />
                        <CardTitle className="text-2xl flex items-center gap-2 text-zinc-800 group-hover:text-black transition-colors">
                            {card.title}
                        </CardTitle>
                        <CardDescription className="text-zinc-500 h-8">{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <Button>
                            <Link href={card.downloadLink1} target="_blank" rel="noopener noreferrer">
                                {card.downloadLink1Text}
                            </Link>
                        </Button>
                        <Button variant="outline">
                            <Link href={card.downloadLink2} target="_blank" rel="noopener noreferrer">
                                {card.downloadLink2Text}
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
        </div>
    )
}

export default DownloadCards;