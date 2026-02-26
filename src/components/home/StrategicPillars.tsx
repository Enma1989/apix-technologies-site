import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "../Section";

export default function StrategicPillars({ lang }: { lang: Locale }) {
    return (
        <Section className="bg-premium-zinc text-dark border-y border-zinc-100">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-outfit font-bold tracking-tight text-slate-900 uppercase">
                    {lang === "pt" ? "Pilares Estratégicos" : lang === "en" ? "Strategic Pillars" : "Pilares Estratégicos"}
                </h2>
                <div className="mt-6 w-20 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-20">
                {siteConfig.home.pillars.map((pillar, index) => (
                    <div
                        key={pillar.title[lang]}
                        className="group p-10 bg-white border border-[#FFD23F]/40 hover:border-[#FFD23F] rounded-3xl shadow-sm transition-all duration-300"
                    >
                        <div className="w-14 h-14 bg-white border border-[#FFD23F]/40 rounded-xl flex items-center justify-center mb-8 transition-all duration-300 text-[#FFD23F]">
                            {index === 0 && (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            )}
                            {index === 1 && (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            )}
                            {index === 2 && (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            )}
                        </div>
                        <h3 className="text-2xl font-outfit font-bold mb-4 text-slate-900 group-hover:text-secondary transition-colors">
                            {pillar.title[lang]}
                        </h3>
                        <p className="text-slate-600 font-inter leading-relaxed text-lg">
                            {pillar.text[lang]}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
