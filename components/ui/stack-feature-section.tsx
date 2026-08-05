"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedGpuFanIcon from "@/components/animated-gpu-fan-icon";
import { HERO_CONTENT } from "@/data/heroContent";

const orbitCount = 3;
const orbitGap = 8;
const iconsPerOrbit = Math.ceil(HERO_CONTENT.orbitApps.length / orbitCount);

export default function FeatureSection() {
  return (
    <section className="relative flex h-[30rem] w-full items-center justify-between overflow-hidden border-y border-gray-200 bg-white pl-6 md:pl-16 lg:pl-24 dark:border-gray-700 dark:bg-black">
      <div className="z-10 w-1/2">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-6xl dark:text-white">
          Every open-source app. One install.
        </h1>
        <p className="mb-6 max-w-lg text-gray-500 dark:text-gray-300">
          Fobia bundles the best open-source AI tools into a single, native
          launcher. Browse the store, install in one click, and run everything
          locally.
        </p>
        <div className="flex items-center gap-3">
          <Button variant="default">
            <Link href="/download">Download Beta</Link>
          </Button>
          <Button variant="outline">
            <Link href="/community">Explore apps</Link>
          </Button>
        </div>
      </div>

      <div className="relative flex h-full w-1/2 items-center justify-start overflow-hidden">
        <div className="relative flex h-[50rem] w-[50rem] translate-x-[50%] items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-50 shadow-lg dark:bg-gray-800">
            <AnimatedGpuFanIcon size={52} color="var(--foreground)" />
          </div>

          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-gray-300 dark:border-gray-600"
                style={{
                  width: size,
                  height: size,
                  animation: `orbit-spin ${12 + orbitIdx * 6}s linear infinite`,
                }}
              >
                {HERO_CONTENT.orbitApps
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((app, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={app.src}
                        className="absolute h-12 w-12 overflow-hidden rounded-full bg-white shadow-md dark:bg-gray-800"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Image
                          src={app.src}
                          alt={app.label}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
