import "../globals.css"

import { Button } from "../../components/ui/button"
import { NavigationMenuDemo } from "../../examples/navigation-menu"

export function Download () {
  return (
    <div className="container">
      <NavigationMenuDemo />
      <h1 className="title">Download Shadcn</h1>
      <p className="description">You can download the latest version of Shadcn from our official website.</p>
      <Button variant={"modern"} className="download-button" >Download Now</Button>
      <Button variant={"modern"} className="download-button" >Return to Home</Button>
    </div>
  )
}

export default Download