"use client";

import React from "react";

interface ScrollButtonProps {
    targetId: string;
    label?: string;
}

export function ScrollButton({ targetId, label = "Scroll" }: ScrollButtonProps) {
    const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 80; // Account for navbar/header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <button
            onClick={handleScroll}
            className="group flex flex-col items-center gap-4 text-white/40 hover:text-secondary transition-all duration-500"
        >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center 
                          group-hover:border-secondary group-hover:bg-secondary/10 group-hover:shadow-[0_0_20px_rgba(255,210,63,0.3)] 
                          transition-all duration-500 hover:scale-110 active:scale-95 animate-bounce">
                <svg
                    className="w-6 h-6 text-white group-hover:text-secondary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </button>
    );
}
