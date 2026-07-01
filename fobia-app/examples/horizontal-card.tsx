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

function HorizontalCard() {
    return (
        <div className="flex w-[80%] justify-between items-start gap-8 my-8 mx-[10%]">
            <div className="w-[50%]">
                <Card variant="borderless">
                    <CardHeader>
                        <CardAction>
                        <Badge variant="secondary">Featured</Badge>
                        </CardAction>
                        <CardTitle>Design systems meetup</CardTitle>
                        <CardDescription>
                        A practical talk on component APIs, accessibility, and shipping
                        faster.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter variant="borderless">
                        <Button className="w-[20%]">View Event</Button>
                    </CardFooter>
                </Card>
            </div>
            <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            width="400"
            height="200"
            alt="Sample Image"
            className="rounded-xl"
            ></Image>
        </div>
    )
}

export default HorizontalCard