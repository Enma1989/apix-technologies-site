"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
    label: string;
}

export default function BackToTopButton({ label }: BackToTopProps) {
    const [isVisible, setIsVisible] = useState(false);

    const checkScroll = useCallback(() => {
        const scrolled = window.scrollY;
        const viewportHeight = window.innerHeight;

        // Mostrar quando rolar aproximadamente 40% da tela (viewport)
        if (scrolled > viewportHeight * 0.4) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    checkScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Initial detection
        checkScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [checkScroll]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label={label}
            className={`
                fixed bottom-[32px] right-[32px] z-[99]
                flex items-center justify-center
                w-[56px] h-[56px] rounded-full
                bg-[#111111] border border-white/15
                shadow-[0_10px_25px_rgba(0,0,0,0.35)]
                text-white transition-all duration-250 ease
                hover:bg-[#FFD23F] hover:text-black hover:scale-105
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[10px] opacity-0 pointer-events-none"}
            `}
        >
            <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
        </button>
    );
}
