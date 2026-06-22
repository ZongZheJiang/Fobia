// components/video-demo.tsx
'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap'; // Removed ScrollSmoother import
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

        // 1. TEMPORARILY COMMENTED OUT FOR DIAGNOSTIC
        /*
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.2
        });
        */

        // 2. Standard Pinning (Works automatically via position: fixed)
        ScrollTrigger.create({
            trigger: ".panel",
            start: "center center",
            end: "+=50",
            pin: box,
            pinSpacing: true
        });

        // 3. Scaling Animation
        gsap.to(box, {
            scale: targetScale,
            scrollTrigger: {
                trigger: panel,
                start: "center center",
                endTrigger: ".end-panel",
                end: "top top",
                scrub: true,
                // markers: true
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

// // components/video-demo.tsx
// 'use client';

// import { useRef } from 'react';
// import { gsap, ScrollTrigger, ScrollSmoother } from '@/lib/gsap';
// import { useGSAP } from '@gsap/react';
// import VideoAutoplay from "../components/ui/video-autoplay";

// export default function VideoDemo() {
//     const containerRef = useRef<HTMLDivElement>(null);

//     useGSAP(() => {
//         // 1. Query the box element once mounted
//         const box = containerRef.current?.querySelector<HTMLElement>(".box");
        
//         if (!box) return;

//         // 2. Exact scale calculation from your vanilla code
//         const targetScale = Math.max(
//             window.innerWidth / box.offsetWidth,
//             window.innerHeight / box.offsetHeight
//         ) - 0.5;

//         // 3. Initialize ScrollSmoother
//         // ScrollSmoother.create({
//         //     wrapper: "#smooth-wrapper",
//         //     content: "#smooth-content",
//         //     smooth: 1.2
//         // });

//         // 4. Exact Pinning ScrollTrigger
//         ScrollTrigger.create({
//             trigger: ".panel",
//             start: "center center",
//             end: "+=50",
//             pin: box,
//             pinSpacing: true
//         });

//         // 5. Exact Scaling Animation
//         gsap.to(box, {
//             scale: targetScale,
//             scrollTrigger: {
//                 trigger: ".panel",
//                 start: "center center",
//                 endTrigger: ".end-panel",
//                 end: "top top",
//                 scrub: true,
//                 markers: true
//             }
//         });

//     }, { scope: containerRef }); // Scopes GSAP queries to this component

//     return (
//         <div id="smooth-wrapper" ref={containerRef}>
//             <div id="smooth-content">
                
//                 {/* Top Spacer */}
//                 <div style={{ height: '80vh' }} />

//                 {/* Panel Container */}
//                 <div 
//                     className="panel" 
//                     style={{ 
//                         height: '100vh', 
//                         width: '100vw', 
//                         display: 'flex', 
//                         position: 'relative' 
//                     }}
//                 >
//                     {/* Animated Box */}
//                     <div 
//                         className="box" 
//                         style={{ 
//                             margin: 'auto', 
//                             background: '#000', 
//                             width: '40vw', 
//                             height: '40vh', 
//                             transformOrigin: 'center center'
//                         }}
//                     >
//                         <VideoAutoplay
//                             className="w-full h-full object-cover" 
//                             youtubeId="eHHQaoEW30Q"
//                             previewVideoUrl="null"
//                         />
//                     </div>
//                 </div>

//                 {/* Bottom Spacer */}
//                 <div className="end-panel" style={{ height: '80vh' }} />

//             </div>
//         </div>
//     );
// }