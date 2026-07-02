"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu"

import { Button } from "../components/ui/button"

import ReactImg from "../public/fobia-logo.jpeg"

import { NAVBAR_RESOURCES } from "@/data/navbarResources"
import { NAVBAR_USECASES } from "@/data/navbarUsecases"

interface NavigationMenuDemoProps {
  variant?: "light" | "dark",
  overlay?: boolean
}

export const NavigationMenuDemo = ({ variant = "light", overlay = false }: NavigationMenuDemoProps) => {
  return (
    <header className={overlay ? "absolute top-0 left-0 w-full z-50 bg-transparent" : ""}>
      <NavigationMenu variant={variant}>
        <NavigationMenuList variant={variant}>
          <NavigationMenuItem className="mx-4">
            <Link href="/">
              <Image src={ReactImg} alt="Description" width={60} height={40}></Image>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger variant={variant}>
              Use Cases
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                {NAVBAR_USECASES.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    variant={variant}
                  >
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger variant={variant}>
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {NAVBAR_RESOURCES.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    variant={variant}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle({variant})}>
              <Link href="/documentation">Docs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Button className="mr-4">
          <Link href="/download">Download</Link>
        </Button>
      </NavigationMenu>
    </header>
  )
}

const listItemVariants = cva(
  "leading-none font-medium",
  {
    variants: {
      variant: {
        light: "",
        dark: "text-white",
      },
    },
  }
)

function ListItem({
  title,
  children,
  variant = "light",
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string } & VariantProps<typeof listItemVariants>) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild variant={variant}>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className={listItemVariants({ variant })}>{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
