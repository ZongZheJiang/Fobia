import { DownloadCard } from "@/types/downloadCard";

export const DOWNLOAD_CARDS: DownloadCard[] = [
    {
        id: 1,
        imageUrl: "/applelogo.svg",
        title: "macOS",
        description: "Requires macOS 11.0 or later.",
        downloadLink1: "https://gateway.fobia.ai/v1/download/redirect?platform=macos&arch=arm64&format=dmg",
        downloadLink1Text: "Download for Apple Silicon",
        downloadLink2: "https://gateway.fobia.ai/v1/download/redirect?platform=macos&arch=x64&format=dmg",
        downloadLink2Text: "Download for Intel",
    },
    {
        id: 2,
        imageUrl: "/windowslogo.png",
        title: "Windows",
        description: "Windows 10 and 11 supported.",
        downloadLink1: "https://gateway.fobia.ai/v1/download/redirect?platform=windows&arch=x64&format=exe",
        downloadLink1Text: "Download for x64",
        downloadLink2: "https://gateway.fobia.ai/v1/download/redirect?platform=windows&arch=arm64&format=exe",
        downloadLink2Text: "Download for ARM64",
    },
    {
        id: 3,
        imageUrl: "/linuxlogo.png",
        title: "Linux",
        description: "Available via AppImage or DEB.",
        downloadLink1: "https://gateway.fobia.ai/v1/download/redirect?platform=linux&arch=x64&format=appimage",
        downloadLink1Text: "Download AppImage",
        downloadLink2: "https://gateway.fobia.ai/v1/download/redirect?platform=linux&arch=x64&format=deb",
        downloadLink2Text: "Download .deb",
    }
]