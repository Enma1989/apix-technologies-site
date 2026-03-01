import Link from "next/link";
import Image from "next/image";
import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "../Section";

export default function ServicesOverview({ lang }: { lang: Locale }) {
    const { methodologyPage } = siteConfig;

    return (
        <Section className="bg-premium-zinc text-dark border-t border-zinc-100 py-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-3xl">
                    <div className="inline-block px-3 py-1 border border-secondary/30 bg-secondary/5 rounded-full mb-6">
                        <span className="text-[10px] font-bold tracking-widest text-[#E6B800] uppercase">
                            {methodologyPage.intro.badge[lang]}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6 tracking-tight text-slate-900 uppercase">
                        {lang === "pt" ? "Componentes Operacionais MaaS™" : lang === "en" ? "MaaS™ Operational Components" : "Componentes Operativos MaaS™"}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mb-6"></div>
                    <p className="text-slate-600 text-xl font-inter leading-relaxed">
                        {lang === "pt"
                            ? "Cada solução técnica é um componente integrado ao nosso método de governança, garantindo que a infraestrutura opere sob rigor executivo."
                            : lang === "en"
                                ? "Each technical solution is a component integrated into our governance method, ensuring that infrastructure operates under executive rigor."
                                : "Cada solución técnica es un componente integrado en nuestro método de gobernanza, asegurando que la infraestructura opere bajo rigor ejecutivo."
                        }
                    </p>
                </div>
                <Link href={`/${lang}/servicos`} className="text-slate-700 font-bold uppercase tracking-widest text-sm border-b-2 border-slate-200 pb-1 hover:text-secondary hover:border-secondary transition-all flex items-center gap-2 mb-2">
                    {lang === "pt" ? "Método MaaS™" : lang === "en" ? "MaaS™ Method" : "Método MaaS™"}
                    <span>→</span>
                </Link>
            </div>

            <div className="space-y-16">
                {methodologyPage.layers.map((layer) => (
                    <div key={layer.id}>
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                                {layer.title[lang]}
                            </h3>
                            <div className="h-px flex-grow bg-slate-100"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {layer.services.map((slug) => {
                                const service = siteConfig.services.find(s => s.slug === slug);
                                if (!service) return null;
                                return (
                                    <Link
                                        key={service.slug}
                                        href={`/${lang}/servicos/${service.slug}`}
                                        className="group p-8 bg-white border border-zinc-100 shadow-sm hover:border-secondary hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 rounded-2xl flex flex-col items-start"
                                    >
                                        <div className="w-12 h-12 bg-white border border-[#FFD23F]/40 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FFD23F]/10 hover:border-[#FFD23F] transition-all duration-300 text-[#FFD23F]">
                                            {service.slug === "redes-wireless" && (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.06 6.929a16.5 16.5 0 0121.88 0" />
                                                </svg>
                                            )}
                                            {service.slug === "cabeamento-estruturado" && (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            )}
                                            {service.slug === "servidores" && (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                                </svg>
                                            )}
                                            {service.slug === "ciberseguranca" && (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            )}
                                            {service.slug === "gestao-de-backup" && (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                                </svg>
                                            )}
                                            {service.slug === "continuidade-resiliencia" && (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )}
                                            {service.slug === "microsoft-365" && (
                                                <div className="w-6 h-6 relative group-hover:brightness-110 transition-all">
                                                    <Image
                                                        src="/images/office-365.png"
                                                        alt="Microsoft 365"
                                                        fill
                                                        className="object-contain"
                                                        style={{
                                                            filter: 'brightness(0) invert(87%) sepia(48%) saturate(1814%) hue-rotate(320deg) brightness(105%) contrast(101%)'
                                                        }}
                                                    />
                                                </div>
                                            )}
                                            {service.slug === "google-workspace" && (
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M22.18 12.24c0-.78-.07-1.53-.21-2.25H12.18v4.26h5.89c-.25 1.34-1.01 2.47-2.14 3.23v2.68h3.47c2.03-1.87 3.2-4.63 3.2-7.92H22.18z" />
                                                    <path d="M12.18 22.42c2.75 0 5.06-.91 6.75-2.47l-3.23-2.5c-.9.6-2.04.96-3.47.96-2.67 0-4.93-1.8-5.74-4.23H3.01v2.79C4.69 20.15 8.16 22.42 12.18 22.42z" />
                                                    <path d="M6.44 14.18c-.21-.62-.33-1.28-.33-1.97s.12-1.35.33-1.97V7.45H3.01C2.31 8.85 1.91 10.4 1.91 12.01c0 1.61.4 3.16 1.1 4.56l3.43-2.39z" />
                                                    <path d="M12.18 5.4c1.47 0 2.79.51 3.83 1.5l2.87-2.87C17.24 2.44 14.93 1.58 12.18 1.58 8.16 1.58 4.69 3.85 3.01 7.45l3.43 2.39c.81-2.43 3.07-4.44 5.74-4.44z" />
                                                </svg>
                                            )}
                                            {service.slug === "suporte-tecnico" && (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-outfit font-bold mb-4 text-slate-900 group-hover:text-secondary transition-colors">
                                            {service.title[lang]}
                                        </h3>
                                        <p className="text-sm text-slate-500 font-inter leading-relaxed group-hover:text-slate-600 transition-colors">
                                            {service.desc[lang]}
                                        </p>
                                        <div className="mt-8 pt-6 border-t border-zinc-50 w-full text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-secondary flex items-center gap-2 transition-all duration-300">
                                            {lang === "pt" ? "Saiba mais" : lang === "en" ? "Learn more" : "Saber más"}
                                            <span className="transform transition-transform group-hover:translate-x-2">→</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
