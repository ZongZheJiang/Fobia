"use client"

import { useState } from 'react'
import Image from 'next/image'
import CardSwap, { Card } from '@/components/CardSwap'
import { PRODUCT_SUMMARY_CARDS } from '@/data/productSummaryCards'

function ProductSummary() {
    const [active, setActive] = useState(0)

    return (
        <div className="flex flex-col gap-16 items-center mx-[10%]">
            <h2
            className="text-2xl md:text-4xl font-bold mr-[10%] my-8"
            >
                Fobia empowers everyone, technical and non-technical users alike, to build their dream AI solution through a unifed platform.
            </h2>
            <div className="container w-full flex flex-col md:flex-row justify-between items-center relative h-[700px] mb-30 overflow-hidden">
                <div className="text-lg md:text-2xl w-full md:w-[35%]">
                    <p>{PRODUCT_SUMMARY_CARDS[active].caption}</p>
                </div>
                <CardSwap
                    cardDistance={50}
                    verticalDistance={60}
                    delay={5000}
                    pauseOnHover={false}
                    onCardChange={setActive}
                >
                    {PRODUCT_SUMMARY_CARDS.map((card) => (
                        <Card key={card.id}>
                            <Image
                                src={card.photoSrc}
                                alt={card.caption}
                                fill
                                sizes="(max-width: 768px) 100vw, 600px"
                                className="rounded-xl object-cover"
                            />
                        </Card>
                    ))}
                </CardSwap>
            </div>
        </div>
    )
}

export default ProductSummary
