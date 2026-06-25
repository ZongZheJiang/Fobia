export interface BlogPost {
  id: number
  title: string
  description: string
  mediaType: "image" | "video"
  mediaUrl: string
}