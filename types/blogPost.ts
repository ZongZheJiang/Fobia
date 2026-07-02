export interface BlogPost {
  id: number
  title: string
  blogType: string
  mediaType: "image" | "video"
  mediaUrl: string
  href: string
}