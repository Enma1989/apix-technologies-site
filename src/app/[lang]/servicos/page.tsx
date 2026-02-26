import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;

    return (
        <main className="min-h-screen bg-premium-dark">
            {/* Services Hero */}
            <section className="pt-40 pb-32 bg-premium-dark text-white border-b border-white/5 relative overflow-hidden">
                <div className="container-premium relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold mb-8 tracking-tight leading-tight text-white uppercase">
                        {lang === "pt" ? "Soluções Consultivas" : "Consulting Solutions"}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 font-inter max-w-3xl mx-auto leading-relaxed">
                        {lang === "pt"
                            ? "Infraestrutura corporativa projetada para previsibilidade, governança rigorosa e crescimento sustentável."
                            : "Corporate infrastructure designed for predictability, rigorous governance, and sustainable growth."
                        }
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <Section className="bg-premium-white text-dark">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteConfig.services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/${lang}/servicos/${service.slug}`}
                            className="group p-8 border border-[#FFD23F]/40 bg-white hover:border-[#FFD23F] hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 flex flex-col h-full rounded-3xl"
                        >
                            <div className="w-12 h-12 bg-white border border-[#FFD23F]/40 rounded-xl flex items-center justify-center mb-8 transition-all duration-300 text-[#FFD23F]">
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
                                {service.slug === "cftv-seguranca-eletronica" && (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )}
                                {service.slug === "microsoft-365" && (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                )}
                                {service.slug === "google-workspace" && (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                )}
                                {service.slug === "suporte-tecnico" && (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )}
                            </div>
                            <h3 className="text-2xl font-outfit font-bold mb-4 tracking-tight text-slate-900 group-hover:text-secondary transition-colors">
                                {service.title[lang]}
                            </h3>
                            <p className="text-slate-800 font-inter leading-relaxed flex-grow">
                                {service.desc[lang]}
                            </p>
                            <div className="mt-8 pt-6 border-t border-zinc-50 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark group-hover:text-secondary transition-colors">
                                {lang === "pt" ? "Saiba mais" : "Learn more"}
                                <span className="transform transition-transform group-hover:translate-x-2">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="bg-premium-dark text-white text-center py-32">
                <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-10 max-w-4xl mx-auto tracking-tight uppercase">
                    {lang === "pt"
                        ? "Sua operação merece rigor executivo."
                        : "Your operation deserves executive rigor."
                    }
                </h2>
                <Link
                    href={`/${lang}/contato`}
                    className="inline-block bg-secondary text-dark font-bold py-5 px-12 rounded-sm hover:-translate-y-1 transition-all uppercase tracking-widest text-sm"
                >
                    {siteConfig.home.hero.primaryCTA[lang]}
                </Link>
            </Section>
        </main>
    );
}
