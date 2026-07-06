import { CSSProperties, useId } from "react";


type GradientStop = {
    offset: string;
    color: string;
    opacity?: number;
};

type LinearGradientConfig = {
    type?: "linear";
    stops: GradientStop[];
    x1?: string;
    y1?: string;
    x2?: string;
    y2?: string;
};

type RadialGradientConfig = {
    type: "radial";
    stops: GradientStop[];
    cx?: string;
    cy?: string;
    r?: string;
    fx?: string;
    fy?: string;
};

type GradientConfig = LinearGradientConfig | RadialGradientConfig;

type AnimatedGpuFanIconProps = {
    /** Width of the SVG. Accepts number px or any CSS size string. */
    width?: number | string;

    /** Height of the SVG. Accepts number px or any CSS size string. */
    height?: number | string;

    /** Shortcut for square-ish responsive sizing. Overridden by width/height when provided. */
    size?: number | string;

    /** Solid fill color used when gradient is not provided. */
    color?: string;

    /** Optional gradient fill for the entire SVG. */
    gradient?: GradientConfig;

    /** Enables/disables the original SVG fan rotation animation. */
    animate?: boolean;

    /** Fan rotation duration in seconds. Original SVG speed is 1.4 seconds. */
    speed?: number;

    /** Controls how the cropped SVG fills its box. */
    preserveAspectRatio?: string;

    /** Optional className for styling from parent components. */
    className?: string;

    /** Optional inline style. */
    style?: CSSProperties;

    /** Accessible title. */
    title?: string;

    /** Accessible description. */
    desc?: string;

    /** Optional click handler. */
    onClick?: () => void;

    /** External blade rotation angle in degrees. Overrides CSS animation when set. */
    bladeRotation?: number;
};

function toCssSize(value?: number | string) {
    if (typeof value === "number") return `${value}px`;
    return value;
}

export default function AnimatedGpuFanIcon({
    width,
    height,
    size,
    color = "currentColor",
    gradient,
    animate = true,
    speed = 1.4,
    preserveAspectRatio = "xMidYMid meet",
    className,
    style,
    title,
    desc,
    onClick,
    bladeRotation,
}: AnimatedGpuFanIconProps) {
    const defaultTitle = title ?? "GPU Fan Icon";
    const defaultDesc = desc ?? "Animated GPU fan icon";
    const rawId = useId().replace(/:/g, "");
    const clipId = `gpu-fan-clip-${rawId}`;
    const gradientId = `gpu-fan-gradient-${rawId}`;
    const fill = gradient ? `url(#${gradientId})` : color;
    const duration = `${Math.max(speed, 0.05)}s`;

    const svgWidth = toCssSize(width ?? size ?? "100%");
    const svgHeight = toCssSize(height ?? size);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="45 15 370 400"
            preserveAspectRatio={preserveAspectRatio}
            role="img"
            width={svgWidth}
            height={svgHeight}
            className={className}
            style={style}
            onClick={onClick}
        >
            <title>{defaultTitle}</title>
            <desc>{defaultDesc}</desc>

            <defs>
                <style>{`
                    @keyframes gpu-fan-spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}</style>
                <clipPath id={clipId}>
                    <circle cx="245.8" cy="208.1" r="109" />
                </clipPath>

                {gradient?.type === "radial" ? (
                    <radialGradient
                        id={gradientId}
                        cx={gradient.cx ?? "50%"}
                        cy={gradient.cy ?? "50%"}
                        r={gradient.r ?? "50%"}
                        fx={gradient.fx}
                        fy={gradient.fy}
                    >
                        {gradient.stops.map((stop, index) => (
                            <stop
                                key={`${stop.offset}-${stop.color}-${index}`}
                                offset={stop.offset}
                                stopColor={stop.color}
                                stopOpacity={stop.opacity}
                            />
                        ))}
                    </radialGradient>
                ) : gradient ? (
                    <linearGradient
                        id={gradientId}
                        x1={gradient.x1 ?? "0%"}
                        y1={gradient.y1 ?? "0%"}
                        x2={gradient.x2 ?? "100%"}
                        y2={gradient.y2 ?? "0%"}
                    >
                        {gradient.stops.map((stop, index) => (
                            <stop
                                key={`${stop.offset}-${stop.color}-${index}`}
                                offset={stop.offset}
                                stopColor={stop.color}
                                stopOpacity={stop.opacity}
                            />
                        ))}
                    </linearGradient>
                ) : null}
            </defs>

            <g transform="matrix(0.263416, 0, 0, 1, 139.196884, 114.498528)" fill={fill}>
                <path d="M 805.066 -49.665 L -134.54 -51.012 L -134.54 -93.731 L -330.63 -93.731 L -330.63 -83.873 L -171.3 -83.873 L -171.3 16.351 L -201.94 16.351 L -201.94 68.927 L -165.18 68.927 L -165.18 119.86 L -201.94 119.86 L -201.94 172.436 L -165.18 172.436 L -165.18 294.019 L -128.4 294.019 L -128.4 238.156 L 781.353 237.023 C 893.059 238.085 1012.139 216.203 1006.81 181.984 L 999.69 4.143 C 1006.016 -20.531 899.987 -48.9 805.066 -49.665 Z M 404.726 205.296 C 171.868 205.296 -11.965 156.007 -11.965 93.573 C -11.965 31.137 171.868 -18.152 404.726 -18.152 C 637.589 -18.152 821.432 31.137 821.432 93.573 C 821.432 156.007 637.589 205.296 404.726 205.296 Z" />
                <rect x="-88.721" y="245.671" width="617.761" height="14.839" />
            </g>

            <g clipPath={`url(#${clipId})`} fill={fill}>
                <g
                    style={
                        bladeRotation !== undefined
                            ? {
                                  transform: `rotate(${bladeRotation}deg)`,
                                  transformOrigin: "245.8px 208.1px",
                              }
                            : animate
                            ? {
                                  animation: `gpu-fan-spin ${duration} linear infinite`,
                                  transformOrigin: "245.8px 208.1px",
                              }
                            : undefined
                    }
                >

                    <path d="M 249.341 185.245 C 256.388 186.42 262.469 190.593 265.827 196.557 C 297.121 201.725 323.849 188.377 338.612 160.026 C 323.338 132.914 295.688 113.952 263.651 108.62 C 283.308 139.396 263.123 160.644 249.341 185.245 Z" />
                    <path d="M 268.59 205.04 C 269.531 211.745 267.333 218.509 262.63 223.38 C 266.85 253.14 287.39 273.06 318.73 277.57 C 340.118 255.427 350.114 224.666 345.83 194.18 C 322.24 221.4 296.07 209.82 268.59 205.04 Z" />
                    <path d="M 255.44 228.87 C 249.356 231.836 242.244 231.836 236.16 228.87 C 209.16 242.09 196.56 267.78 201.96 298.98 C 229.629 312.476 261.971 312.476 289.64 298.98 C 256.46 284.95 259.39 256.49 255.44 228.87 Z" />
                    <path d="M 228.97 223.38 C 224.267 218.509 222.069 211.745 223.01 205.04 C 202.1 183.45 173.78 179.41 145.77 194.18 C 141.486 224.666 151.482 255.427 172.87 277.57 C 175.95 241.68 203.93 235.67 228.97 223.38 Z" />
                    <path d="M 226.38 196.77 C 229.558 190.791 235.312 186.608 241.98 185.43 C 256.05 158.88 251.14 130.69 228.44 108.62 C 198.126 113.964 171.962 132.972 157.51 160.15 C 192.59 152 206.95 176.75 226.38 196.77 Z" />
                </g>
            </g>

            <ellipse cx="246.17" cy="208.091" rx="19.14" ry="19.619" fill={fill} />
        </svg>
    );
}

export function AnimatedGpuFanIconExamples() {
    return (
        <div className="grid gap-8 p-6">
            <AnimatedGpuFanIcon size={180} color="#111827" />

            <AnimatedGpuFanIcon
                width={320}
                color="#2563eb"
                speed={0.8}
            />

            <AnimatedGpuFanIcon
                width={360}
                speed={2.2}
                gradient={{
                    type: "linear",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "0%",
                    stops: [
                        { offset: "0%", color: "#22c55e" },
                        { offset: "50%", color: "#06b6d4" },
                        { offset: "100%", color: "#6366f1" },
                    ],
                }}
            />

            <AnimatedGpuFanIcon
                width={360}
                animate={false}
                gradient={{
                    type: "radial",
                    stops: [
                        { offset: "0%", color: "#f97316" },
                        { offset: "100%", color: "#7c3aed" },
                    ],
                }}
            />
        </div>
    );
}

