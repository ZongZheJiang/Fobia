"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image";

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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Documentation",
    href: "/documentation",
    description:
      "Description for Documentation",
  },
  {
    title: "Blog",
    href: "/blog",
    description:
      "Description for Blog",
  },
  {
    title: "Community",
    href: "/community",
    description:
      "Description for Community",
  },
  {
    title: "About",
    href: "/about",
    description: "Description for About Team",
  },
]

export const NavigationMenuDemo = () => {
  return (
    <NavigationMenu className="my-2">
      <NavigationMenuList>
        <NavigationMenuItem className="mx-4">
          <Link href="/">
            <Image src={ReactImg} alt="Description" width={60} height={40}></Image>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/docs">
                Item 1
              </ListItem>
              <ListItem href="/docs/installation">
                Item 2
              </ListItem>
              <ListItem href="/docs/primitives/typography">
                Item 3
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/documentation">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Button className="mr-4">
        <Link href="/download">Download</Link>
      </Button>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
