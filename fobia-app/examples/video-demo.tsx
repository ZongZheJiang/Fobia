// components/video-demo.tsx
'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap'; 
import { useGSAP } from '@gsap/react';
import VideoAutoplay from "../components/ui/video-autoplay";

export default function VideoDemo() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const box = containerRef.current?.querySelector<HTMLElement>(".box");
        const panel = containerRef.current?.querySelector<HTMLElement>(".panel");
        
        if (!box || !panel) return;

        const targetScale = Math.max(
            window.innerWidth / box.offsetWidth,
            window.innerHeight / box.offsetHeight
        ) - 0.5;

        ScrollTrigger.create({
            trigger: ".panel",
            start: "center center",
            end: "+=50",
            pin: box,
            pinSpacing: true
        });

        // Scaling Animation
        gsap.to(box, {
            scale: targetScale,
            scrollTrigger: {
                trigger: panel,
                start: "top center",
                endTrigger: ".end-panel",
                end: "+=200",
                scrub: true,
                markers: true
            }
        });

    }, { scope: containerRef });

    return (
        // Wrapper IDs kept for layout structure
        <div id="smooth-wrapper" ref={containerRef}>
            <div id="smooth-content">
                <div 
                    className="panel" 
                    style={{ 
                        height: '0vh', 
                        width: '100vw', 
                        display: 'flex', 
                        position: 'relative'
                    }}
                >
                    <div 
                        className="box" 
                        style={{ 
                            margin: 'auto', 
                            width: '40vw', 
                            height: '40vh', 
                            transformOrigin: 'center center'
                        }}
                    >
                        <VideoAutoplay
                            className="w-full h-full object-cover" 
                            youtubeId="eHHQaoEW30Q"
                            previewVideoUrl="null"
                        />
                    </div>
                </div>

                <div className="end-panel" />

            </div>
        </div>
    );
}