"use client";

import { useState, useEffect } from "react";
import { Locale } from "@/config/siteConfig";
import Link from "next/link";

interface CookieConsentProps {
    lang: Locale;
}

export default function CookieConsent({ lang }: CookieConsentProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("apix-cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => {
                setShouldRender(true);
                setTimeout(() => setIsVisible(true), 100);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("apix-cookie-consent", "true");
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 500);
    };

    if (!shouldRender) return null;

    const content = {
        pt: {
            text: "Valorizamos sua privacidade. Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego conforme nossa",
            linkText: "Política de Cookies",
            button: "Aceitar",
        },
        en: {
            text: "We value your privacy. We use cookies to improve your experience and analyze our traffic according to our",
            linkText: "Cookies Policy",
            button: "Accept",
        },
        es: {
            text: "Valoramos su privacidad. Utilizamos cookies para mejorar su experiencia y analizar nuestro tráfico según nuestra",
            linkText: "Política de Cookies",
            button: "Aceptar",
        }
    };

    const t = content[lang] || content.pt;

    return (
        <div
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-3xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
        >
            <div className="bg-white/80 backdrop-blur-xl border border-neutral-200 p-5 md:p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center justify-between gap-5 ring-1 ring-black/5">
                <div className="flex-1">
                    <p className="text-neutral-600 font-inter text-sm leading-relaxed text-center md:text-left">
                        {t.text}{" "}
                        <Link
                            href={`/${lang}/cookies`}
                            className="text-neutral-900 font-semibold hover:text-black underline underline-offset-4 transition-all"
                        >
                            {t.linkText}
                        </Link>.
                    </p>
                </div>
                <div className="flex shrink-0 w-full md:w-auto">
                    <button
                        onClick={handleAccept}
                        className="bg-black hover:bg-neutral-800 text-white font-medium text-sm px-8 py-2.5 rounded-full transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md cursor-pointer w-full md:w-auto text-center"
                    >
                        {t.button}
                    </button>
                </div>
            </div>
        </div>
    );
}
