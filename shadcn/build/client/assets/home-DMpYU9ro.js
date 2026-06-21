import { UNSAFE_withComponentProps } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as React$1 from "react";
import React from "react";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";
import { NavigationMenu, Slot } from "radix-ui";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { motion as motion$1, stagger, useAnimate } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
//#region app/lib/utils.ts
function cn$1(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region app/components/footer2.tsx
var defaultProps = {
	logo: {
		url: "",
		src: "/fobia-logo.jpeg",
		alt: "logo",
		title: "Shadcnblocks.com"
	},
	description: "Finely crafted blocks built with Shadcn UI.",
	sections: [
		{
			title: "Product",
			links: [
				{
					name: "Overview",
					href: "#"
				},
				{
					name: "Pricing",
					href: "#"
				},
				{
					name: "Marketplace",
					href: "#"
				},
				{
					name: "Features",
					href: "#"
				},
				{
					name: "Integrations",
					href: "#"
				}
			]
		},
		{
			title: "Company",
			links: [
				{
					name: "About",
					href: "#"
				},
				{
					name: "Team",
					href: "#"
				},
				{
					name: "Blog",
					href: "#"
				},
				{
					name: "Careers",
					href: "#"
				},
				{
					name: "Contact",
					href: "#"
				}
			]
		},
		{
			title: "Support",
			links: [
				{
					name: "Help center",
					href: "#"
				},
				{
					name: "Documentation",
					href: "#"
				},
				{
					name: "Status",
					href: "#"
				},
				{
					name: "Community",
					href: "#"
				}
			]
		},
		{
			title: "Resources",
			links: [
				{
					name: "Guides",
					href: "#"
				},
				{
					name: "Templates",
					href: "#"
				},
				{
					name: "Sales",
					href: "#"
				},
				{
					name: "Advertise",
					href: "#"
				}
			]
		}
	],
	copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
	legalLinks: [{
		name: "Terms and Conditions",
		href: "#"
	}, {
		name: "Privacy Policy",
		href: "#"
	}]
};
var MAX_SECTIONS = 4;
var Footer2 = (props) => {
	const { logo, description, sections, copyright, legalLinks, className } = {
		...defaultProps,
		...props
	};
	const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);
	return /* @__PURE__ */ jsx("section", {
		className: cn$1("py-32", className),
		children: /* @__PURE__ */ jsx("div", {
			className: "container mx-auto",
			children: /* @__PURE__ */ jsxs("footer", { children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 gap-8 lg:grid-cols-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "col-span-2 mb-8 lg:mb-0",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex items-center lg:justify-start",
						children: /* @__PURE__ */ jsx("a", {
							href: logo?.url,
							children: /* @__PURE__ */ jsx("img", {
								src: logo?.src,
								alt: logo?.alt,
								title: logo?.title,
								className: "h-20 dark:invert"
							})
						})
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-4 text-sm font-medium text-muted-foreground",
						children: description
					})]
				}), visibleSections.map((section, sectionIdx) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "mb-4 text-sm font-semibold tracking-tight",
					children: section.title
				}), /* @__PURE__ */ jsx("ul", {
					className: "space-y-4 text-sm text-muted-foreground",
					children: section.links.map((link, linkIdx) => /* @__PURE__ */ jsx("li", {
						className: "font-medium hover:text-primary",
						children: /* @__PURE__ */ jsx("a", {
							href: link.href,
							children: link.name
						})
					}, linkIdx))
				})] }, sectionIdx))]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center",
				children: [/* @__PURE__ */ jsx("p", { children: copyright }), /* @__PURE__ */ jsx("ul", {
					className: "flex gap-4",
					children: legalLinks?.map((link, linkIdx) => /* @__PURE__ */ jsx("li", {
						className: "underline hover:text-primary",
						children: /* @__PURE__ */ jsx("a", {
							href: link.href,
							children: link.name
						})
					}, linkIdx))
				})]
			})] })
		})
	});
};
//#endregion
//#region lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region app/components/ui/video-autoplay.tsx
function VideoDemo({ className }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("w-full", className),
		children: /* @__PURE__ */ jsxs("video", {
			className: "h-full w-full rounded-lg",
			controls: true,
			children: [/* @__PURE__ */ jsx("source", {
				src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
				type: "video/mp4"
			}), "Your browser does not support the video tag."]
		})
	});
}
//#endregion
//#region app/components/ui/navigation-menu.tsx
function NavigationMenu$1({ className, children, viewport = true, ...props }) {
	return /* @__PURE__ */ jsxs(NavigationMenu.Root, {
		"data-slot": "navigation-menu",
		"data-viewport": viewport,
		className: cn("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", className),
		...props,
		children: [children, viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})]
	});
}
function NavigationMenuList({ className, ...props }) {
	return /* @__PURE__ */ jsx(NavigationMenu.List, {
		"data-slot": "navigation-menu-list",
		className: cn("group flex flex-1 list-none items-center justify-center gap-0", className),
		...props
	});
}
function NavigationMenuItem({ className, ...props }) {
	return /* @__PURE__ */ jsx(NavigationMenu.Item, {
		"data-slot": "navigation-menu-item",
		className: cn("relative", className),
		...props
	});
}
var navigationMenuTriggerStyle = cva("group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted");
function NavigationMenuTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(NavigationMenu.Trigger, {
		"data-slot": "navigation-menu-trigger",
		className: cn(navigationMenuTriggerStyle(), "group", className),
		...props,
		children: [
			children,
			" ",
			/* @__PURE__ */ jsx(ChevronDownIcon, {
				className: "relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180",
				"aria-hidden": "true"
			})
		]
	});
}
function NavigationMenuContent({ className, ...props }) {
	return /* @__PURE__ */ jsx(NavigationMenu.Content, {
		"data-slot": "navigation-menu-content",
		className: cn("top-0 left-0 w-full p-1 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10 group-data-[viewport=false]/navigation-menu:duration-300 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none md:absolute md:w-auto group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95", className),
		...props
	});
}
function NavigationMenuViewport({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("absolute top-full left-0 isolate z-50 flex justify-center"),
		children: /* @__PURE__ */ jsx(NavigationMenu.Viewport, {
			"data-slot": "navigation-menu-viewport",
			className: cn("origin-top-center relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 duration-100 md:w-(--radix-navigation-menu-viewport-width) data-open:animate-in data-open:zoom-in-90 data-closed:animate-out data-closed:zoom-out-90", className),
			...props
		})
	});
}
function NavigationMenuLink({ className, ...props }) {
	return /* @__PURE__ */ jsx(NavigationMenu.Link, {
		"data-slot": "navigation-menu-link",
		className: cn("flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4", className),
		...props
	});
}
//#endregion
//#region app/examples/navigation-menu.tsx
var components = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description: "A modal dialog that interrupts the user with important content and expects a response."
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description: "For sighted users to preview content available behind a link."
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content."
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description: "A set of layered sections of content—known as tab panels—that are displayed one at a time."
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
	}
];
var NavigationMenuDemo = () => {
	return /* @__PURE__ */ jsx(NavigationMenu$1, { children: /* @__PURE__ */ jsxs(NavigationMenuList, { children: [
		/* @__PURE__ */ jsxs(NavigationMenuItem, { children: [/* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Getting started" }), /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxs("ul", {
			className: "w-96",
			children: [
				/* @__PURE__ */ jsx(ListItem, {
					href: "/docs",
					title: "Introduction",
					children: "Re-usable components built with Tailwind CSS."
				}),
				/* @__PURE__ */ jsx(ListItem, {
					href: "/docs/installation",
					title: "Installation",
					children: "How to install dependencies and structure your app."
				}),
				/* @__PURE__ */ jsx(ListItem, {
					href: "/docs/primitives/typography",
					title: "Typography",
					children: "Styles for headings, paragraphs, lists...etc"
				})
			]
		}) })] }),
		/* @__PURE__ */ jsxs(NavigationMenuItem, {
			className: "hidden md:flex",
			children: [/* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Components" }), /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("ul", {
				className: "grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
				children: components.map((component) => /* @__PURE__ */ jsx(ListItem, {
					title: component.title,
					href: component.href,
					children: component.description
				}, component.title))
			}) })]
		}),
		/* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuLink, {
			asChild: true,
			className: navigationMenuTriggerStyle(),
			children: /* @__PURE__ */ jsx(Link, {
				to: "/docs",
				children: "Docs"
			})
		}) })
	] }) });
};
function ListItem({ title, children, href, ...props }) {
	return /* @__PURE__ */ jsx("li", {
		...props,
		children: /* @__PURE__ */ jsx(NavigationMenuLink, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Link, {
				to: href,
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-1 text-sm",
					children: [/* @__PURE__ */ jsx("div", {
						className: "leading-none font-medium",
						children: title
					}), /* @__PURE__ */ jsx("div", {
						className: "line-clamp-2 text-muted-foreground",
						children
					})]
				})
			})
		})
	});
}
//#endregion
//#region app/components/ui/background-beam.tsx
var pathData = [
	"M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
	"M-358 -213C-358 -213 -290 192 174 319C638 446 706 851 706 851",
	"M-336 -237C-336 -237 -268 168 196 295C660 422 728 827 728 827",
	"M-314 -261C-314 -261 -246 144 218 271C682 398 750 803 750 803",
	"M-292 -285C-292 -285 -224 120 240 247C704 374 772 779 772 779",
	"M-270 -309C-270 -309 -202 96 262 223C726 350 794 755 794 755",
	"M-248 -333C-248 -333 -180 72 284 199C748 326 816 731 816 731",
	"M-226 -357C-226 -357 -158 48 306 175C770 302 838 707 838 707",
	"M-204 -381C-204 -381 -136 24 328 151C792 278 860 683 860 683",
	"M-182 -405C-182 -405 -114 0 350 127C814 254 882 659 882 659",
	"M-160 -429C-160 -429 -92 -24 372 103C836 230 904 635 904 635",
	"M-138 -453C-138 -453 -70 -48 394 79C858 206 926 611 926 611",
	"M-116 -477C-116 -477 -48 -72 416 55C880 182 948 587 948 587",
	"M-94 -501C-94 -501 -26 -96 438 31C902 158 970 563 970 563",
	"M-72 -525C-72 -525 -4 -120 460 7C924 134 992 539 992 539",
	"M-50 -549C-50 -549 18 -144 482 -17C946 110 1014 515 1014 515",
	"M-28 -573C-28 -573 40 -168 504 -41C968 86 1036 491 1036 491",
	"M-6 -597C-6 -597 62 -192 526 -65C990 62 1058 467 1058 467",
	"M16 -621C16 -621 84 -216 548 -89C1012 38 1080 443 1080 443",
	"M38 -645C38 -645 106 -240 570 -113C1034 14 1102 419 1102 419"
];
var animations = pathData.map((_, i) => ({
	duration: 4 + i % 5 * .8,
	delay: i * .15,
	initialProgress: i * 5 % 100
}));
var BackgroundBeams = React.memo(({ className }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn("pointer-events-none absolute inset-0 h-full w-full", className),
		children: /* @__PURE__ */ jsxs("svg", {
			"aria-hidden": "true",
			className: "absolute h-full w-full",
			fill: "none",
			viewBox: "0 0 696 316",
			xmlns: "http://www.w3.org/2000/svg",
			preserveAspectRatio: "xMidYMid slice",
			children: [
				/* @__PURE__ */ jsx("g", {
					opacity: "0.03",
					children: pathData.map((d, i) => /* @__PURE__ */ jsx("path", {
						d,
						stroke: "white",
						strokeWidth: "0.5"
					}, `static-${i}`))
				}),
				pathData.map((d, i) => /* @__PURE__ */ jsx(motion.path, {
					d,
					stroke: `url(#gradient-${i})`,
					strokeWidth: "1",
					strokeLinecap: "round",
					initial: {
						pathLength: 0,
						opacity: 0
					},
					animate: {
						pathLength: [0, 1],
						opacity: [
							0,
							.6,
							.6,
							0
						]
					},
					transition: {
						duration: animations[i].duration,
						delay: animations[i].delay,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut"
					}
				}, `beam-${i}`)),
				/* @__PURE__ */ jsx("defs", { children: pathData.map((_, i) => /* @__PURE__ */ jsxs("linearGradient", {
					id: `gradient-${i}`,
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%",
					children: [
						/* @__PURE__ */ jsx("stop", {
							offset: "0%",
							stopColor: "#18CCFC",
							stopOpacity: "0"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "20%",
							stopColor: "#18CCFC",
							stopOpacity: "1"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "50%",
							stopColor: "#6344F5",
							stopOpacity: "1"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "80%",
							stopColor: "#AE48FF",
							stopOpacity: "1"
						}),
						/* @__PURE__ */ jsx("stop", {
							offset: "100%",
							stopColor: "#AE48FF",
							stopOpacity: "0"
						})
					]
				}, `gradient-${i}`)) })
			]
		})
	});
});
BackgroundBeams.displayName = "BackgroundBeams";
//#endregion
//#region app/components/text-generation.tsx
function TextGenerateEffect({ ref, words, className, filter = true, duration = .5, staggerDelay = .2, ...props }) {
	const localRef = React$1.useRef(null);
	React$1.useImperativeHandle(ref, () => localRef.current);
	const [scope, animate] = useAnimate();
	const wordsArray = React$1.useMemo(() => words.split(" "), [words]);
	React$1.useEffect(() => {
		if (scope.current) animate("span", {
			opacity: 1,
			filter: filter ? "blur(0px)" : "none"
		}, {
			duration,
			delay: stagger(staggerDelay)
		});
	}, [
		animate,
		duration,
		filter,
		scope,
		staggerDelay
	]);
	return /* @__PURE__ */ jsx("div", {
		className: cn("font-bold", className),
		"data-slot": "text-generate-effect",
		ref: localRef,
		...props,
		children: /* @__PURE__ */ jsx(motion$1.div, {
			ref: scope,
			children: wordsArray.map((word, idx) => /* @__PURE__ */ jsxs(motion$1.span, {
				className: "opacity-0 will-change-transform will-change-opacity will-change-filter",
				style: { filter: filter ? "blur(10px)" : "none" },
				children: [word, " "]
			}, `${word}-${idx}`))
		})
	});
}
//#endregion
//#region app/components/ui/button.tsx
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot.Root : "button", {
		"data-slot": "button",
		"data-variant": variant,
		"data-size": size,
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region app/examples/hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-950",
		children: [/* @__PURE__ */ jsx(BackgroundBeams, {}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 text-center",
			children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(TextGenerateEffect, {
				className: "text-6xl text-center mx-40 text-white",
				words: "We provide free decentralised computing power to empower communities of builders and coders.",
				filter: true,
				duration: .5,
				staggerDelay: .2
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "container mx-auto px-4 flex items-center justify-center gap-6 mt-10 relative z-10",
				children: [/* @__PURE__ */ jsx(Button, {
					className: "bg-white text-black hover:bg-gray-200 flex items-center mr-10",
					children: "Documentations"
				}), /* @__PURE__ */ jsx(Button, {
					className: "bg-white text-black hover:bg-gray-200 flex items-center ml-10",
					children: "Get Started"
				})]
			})]
		})]
	});
}
//#endregion
//#region app/components/ui/card.tsx
function Card({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card",
		"data-size": size,
		className: cn("group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-content",
		className: cn("px-(--card-spacing)", className),
		...props
	});
}
//#endregion
//#region app/components/ui/carousel.tsx
var CarouselContext = React$1.createContext(null);
function useCarousel() {
	const context = React$1.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
function Carousel({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }) {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = React$1.useState(false);
	const [canScrollNext, setCanScrollNext] = React$1.useState(false);
	const onSelect = React$1.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = React$1.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = React$1.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = React$1.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	React$1.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	React$1.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ jsx(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ jsx("div", {
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			"data-slot": "carousel",
			...props,
			children
		})
	});
}
function CarouselContent({ className, ...props }) {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		"data-slot": "carousel-content",
		children: /* @__PURE__ */ jsx("div", {
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
}
function CarouselItem({ className, ...props }) {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"aria-roledescription": "slide",
		"data-slot": "carousel-item",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
}
function CarouselPrevious({ className, variant = "outline", size = "icon-sm", ...props }) {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		"data-slot": "carousel-previous",
		variant,
		size,
		className: cn("absolute touch-manipulation rounded-full", orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ jsx(ChevronLeftIcon, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
}
function CarouselNext({ className, variant = "outline", size = "icon-sm", ...props }) {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		"data-slot": "carousel-next",
		variant,
		size,
		className: cn("absolute touch-manipulation rounded-full", orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ jsx(ChevronRightIcon, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
}
//#endregion
//#region app/examples/carousel-product.tsx
function CarouselProduct() {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
		className: "text-left mt-20 mx-40",
		children: /* @__PURE__ */ jsx("h2", {
			className: "text-3xl font-bold",
			children: "Use Cases: Cool Text to wow the user."
		})
	}), /* @__PURE__ */ jsx("div", {
		className: "container mx-auto mt-20 flex items-center justify-center",
		children: /* @__PURE__ */ jsxs(Carousel, {
			className: "w-full max-w-[12rem] sm:max-w-2xl flex justify-center",
			children: [
				/* @__PURE__ */ jsx(CarouselContent, {
					className: "w-full",
					children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ jsx(CarouselItem, {
						className: "basis-1/2",
						children: /* @__PURE__ */ jsx("div", {
							className: "p-1",
							children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, {
								className: "flex aspect-square items-center justify-center p-6",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-4xl font-semibold",
									children: index + 1
								})
							}) })
						})
					}, index))
				}),
				/* @__PURE__ */ jsx(CarouselPrevious, {}),
				/* @__PURE__ */ jsx(CarouselNext, {})
			]
		})
	})] });
}
//#endregion
//#region app/examples/carousel-blog.tsx
function CarouselBlog() {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
		className: "text-left mt-20 mx-40",
		children: /* @__PURE__ */ jsx("h2", {
			className: "text-3xl font-bold",
			children: "Blog Posts"
		})
	}), /* @__PURE__ */ jsx("div", {
		className: "container mx-auto mt-20 flex items-center justify-center",
		children: /* @__PURE__ */ jsxs(Carousel, {
			className: "w-full max-w-[12rem] sm:max-w-2xl flex justify-center",
			children: [
				/* @__PURE__ */ jsx(CarouselContent, {
					className: "w-full",
					children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ jsx(CarouselItem, {
						className: "basis-1/2",
						children: /* @__PURE__ */ jsx("div", {
							className: "p-1",
							children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, {
								className: "flex aspect-square items-center justify-center p-6",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-4xl font-semibold",
									children: index + 1
								})
							}) })
						})
					}, index))
				}),
				/* @__PURE__ */ jsx(CarouselPrevious, {}),
				/* @__PURE__ */ jsx(CarouselNext, {})
			]
		})
	})] });
}
//#endregion
//#region app/pages/home.tsx
function Home() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx(NavigationMenuDemo, {}),
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(VideoDemo, { className: "aspect-video mx-auto mt-20 rounded-lg w-full max-w-4xl" }),
		/* @__PURE__ */ jsx(CarouselProduct, {}),
		/* @__PURE__ */ jsx(CarouselBlog, {}),
		/* @__PURE__ */ jsx(Footer2, {})
	] });
}
var home_default = UNSAFE_withComponentProps(Home);
//#endregion
export { home_default as default };
