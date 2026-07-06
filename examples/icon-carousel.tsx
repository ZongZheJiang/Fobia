"use client"

import { Box, Cpu, Database, HardDrive, Layers, Network, Terminal, Cloud, GitBranch, Container } from "lucide-react"

const PLACEMENT_ICONS = [
  { Icon: Box, label: "Containers" },
  { Icon: Cpu, label: "GPU Compute" },
  { Icon: Database, label: "Databases" },
  { Icon: HardDrive, label: "Storage" },
  { Icon: Layers, label: "Runtimes" },
  { Icon: Network, label: "Networking" },
  { Icon: Terminal, label: "CLI Tools" },
  { Icon: Cloud, label: "Cloud Sync" },
  { Icon: GitBranch, label: "Versioning" },
  { Icon: Container, label: "Packages" },
]

function IconStrip() {
  return (
    <div className="flex shrink-0 items-center gap-10 px-5">
      {PLACEMENT_ICONS.map(({ Icon, label }, i) => (
        <div key={i} className="flex flex-col items-center gap-2 min-w-[88px]">
          <div className="h-14 w-14 rounded-2xl border border-border flex items-center justify-center bg-foreground/5">
            <Icon className="h-7 w-7 text-foreground/70" />
          </div>
          <span className="text-xs text-muted-foreground font-medium">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default function IconCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-background/50 py-8 border-y border-border">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-0 will-change-transform">
        <IconStrip />
        <IconStrip />
      </div>
    </div>
  )
}