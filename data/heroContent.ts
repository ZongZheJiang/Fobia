import type { HeroContent } from "@/types/hero"

export const HERO_CONTENT: HeroContent = {
  badge: "Open beta - free, forever",
  headline: "Bringing open source apps to everyone.",
  subheadline:
    "Fobia is a fast, native store and launcher for open-source AI. Install apps in one click and run everything locally - your data never leaves your machine.",
  ctas: [
    { label: "Download Beta", href: "/download", primary: true },
    { label: "Join the community", href: "/community", primary: false },
  ],
  stats: [
    { value: "25+", label: "curated apps" },
    { value: "100%", label: "open source" },
    { value: "Free", label: "forever" },
  ],
  orbitApps: [
    { src: "/icons/open-webui-icon.png", label: "Open WebUI" },
    { src: "/icons/anything-llm-icon.png", label: "Anything LLM" },
    { src: "/icons/n8n-icon.png", label: "n8n" },
    { src: "/icons/dify-icon.png", label: "Dify" },
    { src: "/icons/jan-banner.png", label: "Jan" },
    { src: "/icons/lobehub-icon.png", label: "LobeHub" },
    { src: "/icons/librechat-logo.svg", label: "LibreChat" },
    { src: "/icons/flowise-icon.png", label: "Flowise" },
    { src: "/icons/agentzero-icon.png", label: "Agent Zero" },
    { src: "/icons/hermes-icon.png", label: "Hermes" },
    { src: "/icons/chatbot-ui-icon.png", label: "Chatbot UI" },
    { src: "/icons/nanoclaw-icon.png", label: "NanoClaw" },
    { src: "/icons/openclaw-icon.png", label: "OpenClaw" },
    { src: "/icons/zeroclaw-icon.png", label: "ZeroClaw" },
    { src: "/icons/cadam-icon.png", label: "Cadam" },
    { src: "/icons/harper-icon.svg", label: "Harper" },
    { src: "/icons/jscad-icon.png", label: "JSCAD" },
    { src: "/icons/stack-icon.svg", label: "Stack" },
    { src: "/icons/voicebox-icon.webp", label: "Voicebox" },
  ],
}
