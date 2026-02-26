import Link from "next/link";
import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "../Section";

export default function ServicesOverview({ lang }: { lang: Locale }) {
    return (
        <Section className="bg-premium-zinc text-dark border-t border-zinc-100">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6 tracking-tight text-slate-900 uppercase">
                        {lang === "pt" ? "Especialidades Estratégicas" : lang === "en" ? "Strategic Specialties" : "Especialidades Estratégicas"}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mb-6"></div>
                    <p className="text-slate-600 text-xl font-inter leading-relaxed">
                        {lang === "pt"
                            ? "Não executamos apenas tarefas. Estruturamos ambientes de alto impacto com governança e previsibilidade total."
                            : lang === "en"
                                ? "We don't just execute tasks. We structure high-impact environments with full governance and predictability."
                                : "No ejecutamos solo tareas. Estructuramos entornos de alto impacto con gobernanza y previsibilidad total."
                        }
                    </p>
                </div>
                <Link href={`/${lang}/servicos`} className="text-slate-700 font-bold uppercase tracking-widest text-sm border-b-2 border-slate-200 pb-1 hover:text-secondary hover:border-secondary transition-all flex items-center gap-2">
                    {lang === "pt" ? "Catálogo de Serviços" : lang === "en" ? "Service Catalog" : "Catálogo de Servicios"}
                    <span>→</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {siteConfig.services.map((service) => (
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01" />
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
                            {!["redes-wireless", "cabeamento-estruturado", "servidores", "ciberseguranca", "gestao-de-backup", "cftv-seguranca-eletronica", "microsoft-365", "google-workspace", "suporte-tecnico"].includes(service.slug) && (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
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
                ))}
            </div>
        </Section>
    );
}
