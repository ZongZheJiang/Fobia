"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { ThemeSwitcher } from "../components/theme-switcher"

export const NavigationMenuDemo = () => {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16">
        <Link href="/">
          <Image src="/favicon.svg" alt="Fobia" width={32} height={32} className="text-foreground" />
        </Link>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}


