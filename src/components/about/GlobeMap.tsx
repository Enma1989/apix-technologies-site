"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3-geo";
import * as topojson from "topojson-client";

// Import the topology data directly (you need to make sure the build handles this JSON)
import worldData from "@/data/world-50m.json";

interface GlobeMapProps {
    activeCountry: string | null;
    isHoveringMap: boolean;
}

// Convert alpha-2 codes from OperationalPresenceSection to ISO-3166-1 numeric IDs found in world-50m
const COUNTRY_CODES: Record<string, string> = {
    br: "076",
    pe: "604",
    es: "724"
};

// Coordinates [longitude, latitude] for centering the globe on specific countries
const COUNTRY_COORDS: Record<string, [number, number]> = {
    br: [-55, -10],
    pe: [-75, -9],
    es: [-3, 40]
};

// 1. Pre-process GeoJSON ONCE outside the component
const worldFeatures = (topojson.feature(worldData as any, (worldData as any).objects.countries) as any).features;
const baseMapCollection = { type: "FeatureCollection", features: worldFeatures };

export default function GlobeMap({ activeCountry, isHoveringMap }: GlobeMapProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Refs for animation state
    const rotationRef = useRef<[number, number, number]>([0, -10, 0]);
    const animationFrameRef = useRef<number>(0);
    const targetRotationRef = useRef<[number, number, number] | null>(null);

    // Track active interactions without triggering canvas re-renders
    const activeCountryRef = useRef(activeCountry);
    const isHoveringMapRef = useRef(isHoveringMap);

    // Easing helpers
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const prevTargetRef = useRef<[number, number, number] | null>(null);
    const transitionStartRef = useRef<number>(0);
    const startRotationRef = useRef<[number, number, number] | null>(null);

    // 2. React to prop changes ONLY by updating refs
    useEffect(() => {
        activeCountryRef.current = activeCountry;
        isHoveringMapRef.current = isHoveringMap;

        if (activeCountry && COUNTRY_COORDS[activeCountry]) {
            const coords = COUNTRY_COORDS[activeCountry];
            const newTarget: [number, number, number] = [-coords[0], -coords[1], 0];

            if (!prevTargetRef.current ||
                prevTargetRef.current[0] !== newTarget[0] ||
                prevTargetRef.current[1] !== newTarget[1]) {
                startRotationRef.current = [...rotationRef.current] as [number, number, number];
                transitionStartRef.current = performance.now();
                targetRotationRef.current = newTarget;
                prevTargetRef.current = newTarget;
            }
        } else {
            targetRotationRef.current = null;
            prevTargetRef.current = null;
        }
    }, [activeCountry, isHoveringMap]);

    // 3. Canvas setup and animation loop (Runs ONLY once)
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let projection = d3.geoOrthographic();
        let pathGenerator = d3.geoPath(projection, ctx);

        const resize = () => {
            if (!container) return;
            width = container.clientWidth;
            height = container.clientHeight;

            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";

            // Reset and scale
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const size = Math.min(width, height);
            projection
                .translate([width / 2, height / 2])
                .scale(size * 0.42);
        };

        let resizeTimeout: NodeJS.Timeout;
        const resizeObserver = new ResizeObserver(() => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resize, 100);
        });
        resizeObserver.observe(container);
        resize();

        let lastTime = performance.now();

        const render = (time: number) => {
            if (document.hidden) {
                lastTime = time;
                animationFrameRef.current = requestAnimationFrame(render);
                return;
            }

            const deltaTime = time - lastTime;
            lastTime = time;

            if (!ctx) return;

            ctx.clearRect(0, 0, width, height);

            const currentRotation = rotationRef.current;
            const _activeCountry = activeCountryRef.current;
            const _isHoveringMap = isHoveringMapRef.current;

            if (_activeCountry && targetRotationRef.current && startRotationRef.current) {
                const DURATION = 900;
                let progress = (time - transitionStartRef.current) / DURATION;

                if (progress >= 1) {
                    currentRotation[0] = targetRotationRef.current[0];
                    currentRotation[1] = targetRotationRef.current[1];
                } else {
                    const easedProgress = easeInOutCubic(progress);
                    const deltaX = targetRotationRef.current[0] - startRotationRef.current[0];
                    const deltaY = targetRotationRef.current[1] - startRotationRef.current[1];

                    currentRotation[0] = startRotationRef.current[0] + deltaX * easedProgress;
                    currentRotation[1] = startRotationRef.current[1] + deltaY * easedProgress;
                }
            } else if (!_isHoveringMap) {
                currentRotation[0] += 0.003 * deltaTime;
            }

            rotationRef.current = currentRotation;
            projection.rotate(currentRotation);

            const radius = projection.scale();
            const cx = width / 2;
            const cy = height / 2;

            // Halo
            const outerHalo = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.5);
            outerHalo.addColorStop(0, "rgba(0, 0, 0, 0.1)");
            outerHalo.addColorStop(0.5, "rgba(0, 0, 0, 0.03)");
            outerHalo.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.beginPath();
            ctx.arc(cx, cy, radius * 1.5, 0, 2 * Math.PI);
            ctx.fillStyle = outerHalo;
            ctx.fill();

            // Ocean
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
            ctx.fillStyle = "#f4f4f5";
            ctx.fill();

            // Base Map Lines - Fast FeatureCollection pathing!
            pathGenerator = d3.geoPath(projection, ctx);
            ctx.lineJoin = "round";
            ctx.lineCap = "round";

            ctx.beginPath();
            ctx.fillStyle = "#A1A1AA";
            // @ts-ignore
            pathGenerator(baseMapCollection);
            ctx.fill();

            ctx.beginPath();
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 0.5;
            // @ts-ignore
            pathGenerator(baseMapCollection);
            ctx.stroke();

            // Highlighted Country Filter
            const activeIsoCode = _activeCountry ? COUNTRY_CODES[_activeCountry] : null;
            if (activeIsoCode) {
                const activeFeature = worldFeatures.find((f: any) => f.id === activeIsoCode);
                if (activeFeature) {
                    ctx.save();
                    ctx.shadowColor = "rgba(255, 210, 63, 0.4)";
                    ctx.shadowBlur = 10;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;

                    ctx.beginPath();
                    pathGenerator(activeFeature);
                    ctx.fillStyle = "#FFD23F";
                    ctx.fill();

                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#ffffff";
                    ctx.stroke();
                    ctx.restore();
                }
            }

            // Terminator Shadow
            const innerShadow = ctx.createRadialGradient(
                cx - radius * 0.4, cy - radius * 0.4, radius * 0.1,
                cx, cy, radius * 1.05
            );
            innerShadow.addColorStop(0, "rgba(255,255,255,0.5)");
            innerShadow.addColorStop(0.5, "rgba(0,0,0,0)");
            innerShadow.addColorStop(1, "rgba(0,0,0,0.25)");

            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
            ctx.fillStyle = innerShadow;
            ctx.fill();

            // Pulse Marker
            if (_activeCountry && targetRotationRef.current) {
                const coords = COUNTRY_COORDS[_activeCountry];
                const projected = projection(coords);

                if (projected) {
                    const [px, py] = projected;
                    const t = time / 1000;
                    const pulseRadius = 3 + Math.sin(t * 4) * 1;
                    const ringRadius = 6 + (t % 2) * 10;
                    const ringOpacity = Math.max(0, 1 - (t % 2));

                    ctx.beginPath();
                    ctx.arc(px, py, ringRadius, 0, 2 * Math.PI);
                    ctx.strokeStyle = `rgba(255, 210, 63, ${ringOpacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(px, py, pulseRadius, 0, 2 * Math.PI);
                    ctx.fillStyle = "#FFD23F";
                    ctx.shadowColor = "rgba(255, 210, 63, 0.8)";
                    ctx.shadowBlur = 8;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }

            animationFrameRef.current = requestAnimationFrame(render);
        };

        animationFrameRef.current = requestAnimationFrame(render);

        return () => {
            resizeObserver.disconnect();
            clearTimeout(resizeTimeout);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, []); // Only run ONCE! No dependencies.

    return (
        <div ref={containerRef} className="w-full aspect-square relative flex justify-center items-center">
            <canvas
                ref={canvasRef}
                className={`transition-transform duration-1000 ease-out z-10 ${activeCountry ? "scale-[1.02]" : "scale-100"}`}
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.06))" }}
            />
        </div>
    );
}
