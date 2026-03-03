"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Locale } from "@/config/siteConfig";

import SvgWorldMap from "@/components/about/SvgWorldMap";

export default function OperationalPresenceSection({ lang }: { lang: Locale }) {
    const [activeCountry, setActiveCountry] = useState<string | null>(null);
    const [isHoveringMap, setIsHoveringMap] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Intersection Observer for Scroll Reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const countries = [
        {
            id: "br",
            name: { pt: "Brasil", en: "Brazil", es: "Brasil" },
            items: [
                { text: { pt: "Curitiba — Atendimento presencial", en: "Curitiba — On-site service", es: "Curitiba — Atención presencial" }, type: "primary" },
                { text: { pt: "Brasil — Operação remota", en: "Brazil — Remote operation", es: "Brasil — Operación remota" }, type: "secondary" }
            ]
        },
        {
            id: "pe",
            name: { pt: "Peru", en: "Peru", es: "Perú" },
            items: [
                { text: { pt: "Lima — Atendimento presencial", en: "Lima — On-site service", es: "Lima — Atención presencial" }, type: "primary" },
                { text: { pt: "Peru — Operação remota", en: "Peru — Remote operation", es: "Perú — Operación remota" }, type: "secondary" }
            ]
        },
        {
            id: "es",
            name: { pt: "Espanha", en: "Spain", es: "España" },
            items: [
                { text: { pt: "Operação remota", en: "Remote operation", es: "Operación remota" }, type: "secondary" }
            ]
        }
    ];

    const getDynamicCtaText = () => {
        if (!activeCountry) return { pt: "FALAR COM UM ESPECIALISTA", en: "TALK TO AN EXPERT", es: "HABLAR CON UN ESPECIALISTA" }[lang];

        switch (activeCountry) {
            case "br":
                return { pt: "Falar com especialista no Brasil", en: "Talk to expert in Brazil", es: "Hablar con experto en Brasil" }[lang];
            case "pe":
                return { pt: "Falar com especialista no Peru", en: "Talk to expert in Peru", es: "Hablar con experto en Perú" }[lang];
            case "es":
                return { pt: "Falar com especialista na Espanha", en: "Talk to expert in Spain", es: "Hablar con experto en España" }[lang];
            default:
                return { pt: "FALAR COM UM ESPECIALISTA", en: "TALK TO AN EXPERT", es: "HABLAR CON UN ESPECIALISTA" }[lang];
        }
    };

    return (
        <section
            id="presenca"
            ref={sectionRef}
            className="py-24 md:py-32 bg-white border-t border-zinc-200 scroll-mt-24 overflow-hidden"
        >
            <div className="container-premium max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Column: Texts & Cards */}
                    <div
                        className={`w-full lg:w-5/12 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    >
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-zinc-900 uppercase tracking-tight mb-4">
                                {lang === "pt" ? "Presença Operacional" : lang === "es" ? "Presencia Operativa" : "Operational Presence"}
                            </h2>
                            <p className="text-xl font-inter font-light text-zinc-600">
                                {lang === "pt" ? "Atuação presencial e remota sob modelo de governança estruturada." :
                                    lang === "es" ? "Atención presencial y remota bajo modelo de gobernanza estructurada." :
                                        "On-site and remote operations under a structured governance model."}
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {countries.map((country) => (
                                <div
                                    key={country.id}
                                    onMouseEnter={() => { setActiveCountry(country.id); setIsHoveringMap(true); }}
                                    onMouseLeave={() => { setActiveCountry(null); setIsHoveringMap(false); }}
                                    onClick={() => { setActiveCountry(country.id); setIsHoveringMap(true); }} // For mobile tap
                                    onFocus={() => { setActiveCountry(country.id); setIsHoveringMap(true); }} // Accessibility
                                    onBlur={() => { setActiveCountry(null); setIsHoveringMap(false); }}
                                    tabIndex={0}
                                    className={`relative bg-white border rounded-[16px] p-6 lg:p-8 cursor-pointer transition-all duration-300 outline-none
                                        ${activeCountry === country.id
                                            ? "border-[#FFD23F]/80 shadow-[0_8px_30px_rgba(255,210,63,0.15)] -translate-y-1"
                                            : "border-zinc-200 shadow-sm hover:border-[#FFD23F]/40 hover:shadow-md hover:-translate-y-1"
                                        }`}
                                >
                                    <h3 className={`text-2xl font-outfit font-bold uppercase tracking-tight mb-6 transition-colors duration-300 ${activeCountry === country.id ? "text-[#FFD23F]" : "text-zinc-900"}`}>
                                        {country.name[lang]}
                                    </h3>

                                    <div className="space-y-3">
                                        {country.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${item.type === "primary" || activeCountry === country.id ? "bg-[#FFD23F]" : "bg-zinc-300"}`}></div>
                                                <span className={`text-base font-inter transition-colors duration-300 ${activeCountry === country.id ? "text-zinc-900 font-medium" : "text-zinc-600"}`}>
                                                    {item.text[lang]}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Map & CTA */}
                    <div
                        className={`w-full lg:w-7/12 flex flex-col items-center transition-all duration-1000 delay-150 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                    >
                        <div
                            className="w-full relative mb-12"
                            onMouseEnter={() => setIsHoveringMap(true)}
                            onMouseLeave={() => setIsHoveringMap(false)}
                        >
                            <SvgWorldMap activeCountry={activeCountry} isHoveringMap={isHoveringMap} />
                        </div>

                        {/* CTA Dinâmico */}
                        <div className="text-center">
                            <p className="text-sm font-semibold tracking-widest text-[#FFD23F] uppercase mb-6">
                                {lang === "pt" ? "Operamos localmente. Governamos globalmente." :
                                    lang === "es" ? "Operamos localmente. Gobernamos globalmente." :
                                        "We operate locally. We govern globally."}
                            </p>

                            <Link
                                href={`/${lang}/contato`}
                                className="inline-flex items-center justify-center h-14 min-w-[280px] px-8 rounded-full border border-[#FFD23F] text-zinc-900 bg-transparent hover:bg-[#FFD23F] font-bold text-sm tracking-widest uppercase transition-all duration-300 group"
                            >
                                <span className={activeCountry ? "normal-case tracking-normal" : ""}>
                                    {getDynamicCtaText()}
                                </span>
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
