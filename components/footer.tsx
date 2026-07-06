"use client"

import { cn } from "../lib/utils";
import FobiaLogo from "./fobia";

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterBasicProps {
  description?: string;
  sections?: FooterSection[];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

interface FooterProps extends FooterBasicProps {
}
type Props = Partial<FooterProps>;

const defaultProps: FooterProps = {
  description: "From developers, for the world.",
  sections: [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "/" },
        // { name: "Pricing", href: "#" },
        // { name: "Marketplace", href: "#" },
        { name: "Download", href: "/download" },
        // { name: "Integrations", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        // { name: "Team", href: "#" },
        { name: "Blog", href: "/blog" },
        // { name: "Careers", href: "#" },
        // { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        // { name: "Help center", href: "#" },
        { name: "Documentation", href: "/documentation" },
        // { name: "Status", href: "#" },
        { name: "Community", href: "/community" },
      ],
    },
    // {
    //   title: "Resources",
    //   links: [
    //     { name: "Guides", href: "#" },
    //     { name: "Templates", href: "#" },
    //     { name: "Sales", href: "#" },
    //     { name: "Advertise", href: "#" },
    //   ],
    // },
  ],
  copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
  legalLinks: [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const MAX_SECTIONS = 4;

const Footer = (props: Props) => {
  const { description, sections, copyright, legalLinks, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center lg:justify-start">
                  <FobiaLogo size={72} iconSize={44} color="var(--foreground)" animate={false} />
              </div>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                {description}
              </p>
            </div>
            {visibleSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {legalLinks?.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
