import { 
  Card,   
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from "../components/ui/card"

import Link from "next/dist/client/link"
import { Button } from "../components/ui/button"

function DownloadCards() {
    return (
        <div className="flex justify-center items-center my-8 w-full">
            <Card className="w-md mx-4">
                <CardHeader>
                    <CardTitle className="text-center">Title</CardTitle>
                </CardHeader>
                <CardContent className="text-center">Content</CardContent>
                <CardFooter className="justify-center">
                    <Button variant="modern">
                        <Link href="/download">
                            Download for Apple Silicon
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
            <Card className="w-md mx-4">
                <CardHeader>
                    <CardTitle className="text-center">Title</CardTitle>
                </CardHeader>
                <CardContent className="text-center">Content</CardContent>
                <CardFooter className="justify-center">
                    <Button variant="modern">                        
                        <Link href="/download">
                            Download for Intel
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default DownloadCards;