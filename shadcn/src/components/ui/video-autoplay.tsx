import { cn } from "../../../lib/utils"

function VideoDemo({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <video className="h-full w-full rounded-lg" controls>
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoDemo
