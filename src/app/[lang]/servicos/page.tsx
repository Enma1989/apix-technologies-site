import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;
    const { methodologyPage } = siteConfig;

    return (
        <main className="min-h-screen bg-premium-dark overflow-x-hidden">
            {/* Services Hero / Intro */}
            <section className="pt-48 pb-24 bg-premium-dark text-white relative overflow-hidden border-b border-white/5">
                {/* Background watermark - Centered and non-clipped */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-0">
                    <div className="relative w-full h-full max-w-4xl max-h-[80vh] opacity-[0.06] blur-[1px]">
                        <Image
                            src="/images/APIX-09.png"
                            alt="Apix logo watermark"
                            fill
                            className="object-contain"
                            priority
                        />
                        {/* Smooth gradient mask to fade edges */}
                        <div className="absolute inset-0 bg-gradient-to-b from-premium-dark/80 via-transparent to-premium-dark/80"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-premium-dark/80 via-transparent to-premium-dark/80"></div>
                    </div>
                </div>

                <div className="container-premium relative z-10 text-center">
                    {/* Glass Premium Badge */}
                    <div className="inline-block px-6 py-2 border border-yellow-500/30 bg-black/40 backdrop-blur-md rounded-full mb-10 shadow-2xl">
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#FFD23F] uppercase">
                            {methodologyPage.intro.badge[lang]}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold mb-8 tracking-tighter leading-[1.1] text-white uppercase max-w-5xl mx-auto">
                        {(() => {
                            const headline = methodologyPage.intro.headline[lang];
                            const maasText = "MaaS™";
                            if (headline.includes(maasText)) {
                                const parts = headline.split(maasText);
                                return (
                                    <>
                                        {parts[0]}
                                        <br className="hidden lg:block" />
                                        <span className="text-[#FFD23F]">{maasText}</span>
                                        {parts[1]}
                                    </>
                                );
                            }
                            return headline;
                        })()}
                    </h1>

                    <p className="text-lg md:text-xl text-white/75 font-inter max-w-2xl mx-auto leading-relaxed mt-6">
                        {methodologyPage.intro.subheadline[lang]}
                    </p>
                </div>
            </section>

            {/* Combined Services & Methodology section */}
            <Section className="bg-premium-white text-dark py-24">
                <div className="space-y-24">
                    {methodologyPage.layers.map((layer) => (
                        <div key={layer.id} className="relative">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                                <div className="max-w-xl">
                                    <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-4 text-slate-900 tracking-tight uppercase">
                                        {layer.title[lang]}
                                    </h2>
                                    <p className="text-slate-500 font-inter text-lg">
                                        {layer.text[lang]}
                                    </p>
                                </div>
                                <div className="hidden md:block h-px flex-grow bg-slate-100 mx-8 mb-4"></div>
                                <div className="text-[10rem] font-bold text-black/[0.02] absolute -right-4 -top-12 select-none pointer-events-none">
                                    0{layer.id}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {layer.services.map((slug) => {
                                    const service = siteConfig.services.find(s => s.slug === slug);
                                    if (!service) return null;
                                    return (
                                        <Link
                                            key={service.slug}
                                            href={`/${lang}/servicos/${service.slug}`}
                                            className="group p-8 border border-black/[0.03] bg-white hover:border-[#FFD23F] hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-full rounded-2xl relative overflow-hidden"
                                        >
                                            <div className="w-12 h-12 bg-white border border-[#FFD23F]/30 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#FFD23F]/10 group-hover:border-[#FFD23F] transition-all duration-300 text-[#FFD23F]">
                                                {/* Icons remain as SVGs or component based on slug */}
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
                                            <h3 className="text-xl font-outfit font-bold mb-4 tracking-tight text-slate-900 group-hover:text-secondary transition-colors">
                                                {service.title[lang]}
                                            </h3>
                                            <p className="text-slate-600 font-inter text-sm leading-relaxed flex-grow">
                                                {service.desc[lang]}
                                            </p>
                                            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-secondary transition-colors">
                                                {lang === "pt" ? "Saiba mais" : lang === "es" ? "Saber más" : "Learn more"}
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

            {/* Deliverables Section */}
            <Section className="bg-premium-zinc border-y border-zinc-100 py-24">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6 tracking-tight text-slate-900 uppercase">
                        {methodologyPage.deliverables.title[lang]}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-4">
                    {methodologyPage.deliverables.items.map((item, index) => (
                        <div key={index} className="flex gap-6 items-start group">
                            <div className="w-12 h-12 shrink-0 bg-white shadow-sm border border-zinc-100 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-dark transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xl font-outfit font-bold mb-2 text-slate-900 uppercase tracking-tight">
                                    {item.title[lang]}
                                </h4>
                                <p className="text-slate-500 font-inter leading-relaxed">
                                    {item.desc[lang]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Plans Section */}
            <Section className="bg-premium-white py-24">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6 tracking-tight text-slate-900 uppercase">
                        {methodologyPage.plans.title[lang]}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 items-center">
                    {methodologyPage.plans.items.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl border flex flex-col h-full transition-all duration-300 ${index === 1
                                ? "p-12 bg-premium-dark border-secondary shadow-2xl shadow-black/20 md:scale-105 z-10 text-white hover:-translate-y-2 hover:shadow-black/40"
                                : "p-10 bg-white border-zinc-100 text-slate-900 hover:border-secondary/40 hover:-translate-y-1"
                                }`}
                        >
                            {index === 1 && (
                                <div className="mb-6">
                                    <span className="bg-yellow-500/15 text-yellow-500 border border-yellow-500/40 uppercase tracking-widest rounded-full px-3 py-1 text-[10px] font-bold">
                                        {lang === "pt" ? "MAIS CONTRATADO" : lang === "es" ? "MÁS CONTRATADO" : "RECOMMENDED"}
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`${index === 1 ? "text-2xl font-bold" : "text-xl font-bold"} font-outfit uppercase tracking-tight mb-2`}>
                                    {plan.name}
                                </h3>
                                <div className={`font-bold uppercase tracking-wider ${index === 1 ? "text-[10px] opacity-70 text-secondary" : "text-[10px] text-slate-500"
                                    }`}>
                                    {plan.focus[lang]}
                                </div>
                                {(plan as any).desc && (
                                    <p className={`mt-4 text-sm leading-relaxed ${index === 1 ? "text-white/60" : "text-slate-500"
                                        }`}>
                                        {(plan as any).desc[lang]}
                                    </p>
                                )}
                            </div>

                            <ul className="space-y-4 flex-grow mb-10">
                                {plan.features[lang].map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3 text-sm">
                                        <svg className="w-5 h-5 shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className={index === 1 ? "text-white/80" : "text-slate-600"}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={`/${lang}/contato`}
                                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 ${index === 1
                                    ? "bg-transparent border border-white/30 text-white hover:bg-secondary hover:text-dark hover:border-secondary hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20"
                                    : "border border-slate-900/10 bg-slate-50 text-slate-900 hover:bg-secondary hover:text-dark hover:border-secondary hover:scale-105"
                                    }`}
                            >
                                {lang === "pt" ? "Selecionar Plano" : lang === "es" ? "Seleccionar Plan" : "Select Plan"}
                            </Link>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Final CTA within Services */}
            <Section className="bg-premium-dark text-white py-32 relative overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square opacity-[0.05] grayscale brightness-200 pointer-events-none">
                    <Image
                        src="/images/APIX-09.png"
                        alt="Apix logo watermark"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-10 tracking-tight uppercase leading-tight">
                        {lang === "pt"
                            ? "Sua infraestrutura merece rigor executivo. Vamos começar?"
                            : lang === "es"
                                ? "Su infraestructura merece rigor ejecutivo. ¿Comencemos?"
                                : "Your infrastructure deserves executive rigor. shall we begin?"}
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href={`/${lang}/contato`}
                            className="h-14 inline-flex items-center justify-center bg-secondary border-2 border-[#E6B800] text-dark font-bold px-12 rounded-full hover:brightness-110 hover:scale-[1.02] transition-all uppercase tracking-widest text-sm min-w-[280px]"
                        >
                            {lang === "pt" ? "INICIAR DIAGNÓSTICO" : lang === "es" ? "INICIAR DIAGNÓSTICO" : "START DIAGNOSIS"}
                        </Link>
                        <a
                            href="https://wa.me/5541991934437"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-14 inline-flex items-center justify-center border-2 border-white/20 text-white font-bold px-12 rounded-full hover:bg-white/5 hover:border-white/40 transition-all uppercase tracking-widest text-sm min-w-[280px]"
                        >
                            {lang === "pt" ? "FALAR COM CONSULTOR" : lang === "es" ? "HABLAR CON CONSULTOR" : "TALK TO CONSULTANT"}
                        </a>
                    </div>
                </div>
            </Section>
        </main>
    );
}
