"use client";

import Image from "next/image";
import { useState } from "react";

const VIDEO_URL = "https://www.youtube-nocookie.com/embed/rYMAlFFZcCY?autoplay=1&mute=1&loop=1&playlist=rYMAlFFZcCY&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&vq=hd1080";

export default function AboutHeroVideo() {
    const [isReady, setIsReady] = useState(false);

    return (
        <div className="hero-bg-filter absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#080b0e]">
            <link rel="preconnect" href="https://www.youtube-nocookie.com" />
            <link rel="preconnect" href="https://www.youtube.com" />
            <link rel="preconnect" href="https://i.ytimg.com" />

            <Image
                src="/images/about-video-poster.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                aria-hidden="true"
                className="object-cover object-center"
            />

            <iframe
                className={`pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 motion-reduce:hidden ${isReady ? "opacity-100" : "opacity-0"}`}
                src={VIDEO_URL}
                title="Apix Tech Institutional"
                loading="eager"
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                aria-hidden="true"
                tabIndex={-1}
                onLoad={() => setIsReady(true)}
            />
        </div>
    );
}
