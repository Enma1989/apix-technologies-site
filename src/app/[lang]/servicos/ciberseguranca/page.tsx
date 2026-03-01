import { notFound } from "next/navigation";
import { Locale, siteConfig, locales } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

interface PageProps {
    params: {
        lang: Locale;
    };
}

export default async function CibersegurancaPage({ params }: PageProps) {
    const { lang } = await params;
    if (!locales.includes(lang)) notFound();

    return (
        <main className="min-h-screen bg-premium-dark">
            {/* Service Hero Full-Bleed */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-white/5">
                {/* Layer A: Background Image */}
                <div className="absolute inset-0 z-0 bg-zinc-950">
                    <Image
                        src="/images/cybersecurity.jpg"
                        alt="Cibersegurança Governada"
                        fill
                        className="object-cover opacity-60 lg:opacity-80"
                        priority
                        quality={75}
                        sizes="100vw"
                    />
                </div>

                {/* Layer B: Global Overlay */}
                <div className="absolute inset-0 z-10 bg-black/40" />

                {/* Layer C: Frosted Glass Lateral (Desktop) / Central Overlay (Mobile) */}
                <div
                    className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-zinc-950/70 lg:bg-gradient-to-r lg:from-zinc-950/90 lg:via-zinc-900/60 lg:to-transparent backdrop-blur-md lg:backdrop-blur-xl border-white/10 lg:border-r z-20 pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to right, black 85%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent)'
                    }}
                />

                {/* Layer D: Content */}
                <div className="container-premium relative z-30 pt-32 pb-20 md:pt-40 md:pb-32">
                    <div className="max-w-2xl">
                        {/* Back Link */}
                        <Link
                            href={`/${lang}/servicos`}
                            className="text-white/60 text-sm font-medium uppercase tracking-widest mb-10 inline-block hover:text-apix-yellow transition-all"
                        >
                            ← {lang === "pt" ? "TODOS OS SERVIÇOS" : lang === "es" ? "TODOS LOS SERVICIOS" : "ALL SERVICES"}
                        </Link>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold mb-8 tracking-tight leading-tight text-white uppercase">
                                CIBERSEGURANÇA<br />
                                <span className="text-apix-yellow drop-shadow-[0_0_30px_rgba(255,210,63,0.3)]">GOVERNADA</span>
                            </h1>

                            <div className="w-20 h-1 bg-apix-yellow mb-10 drop-shadow-[0_0_10px_rgba(255,210,63,0.5)]"></div>

                            <p className="text-xl md:text-2xl text-slate-200 font-inter leading-relaxed max-w-xl drop-shadow-sm">
                                Proteção contínua sob o modelo <span className="text-white font-medium">MaaS™</span>, com monitoramento, políticas aplicadas e controle executivo de riscos digitais.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                                    <span className="text-xs font-bold text-apix-yellow tracking-widest uppercase italic">Proteção 24/7</span>
                                </div>
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                                    <span className="text-xs font-bold text-apix-yellow tracking-widest uppercase italic">MaaS™ Model</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 2 – Panorama Global de Ameaças */}
            <section className="bg-premium-white text-dark pt-24 pb-0 overflow-hidden border-b border-white/5">
                <div className="container-premium max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight mb-6">
                        Panorama Global de Ameaças<br />
                        <span className="text-secondary">em Tempo Real</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-inter leading-relaxed">
                        A superfície de ataque cresce diariamente. Abaixo, uma visualização dinâmica de ataques globais reforça a necessidade de governança contínua.
                    </p>
                </div>

                <div className="w-full">
                    <div className="bg-[#0B0B0B] border-y border-white/10 p-2 md:p-6 lg:p-8 shadow-2xl shadow-black/10">
                        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[75vh] min-h-[500px] rounded-xl overflow-hidden border border-white/5 bg-black">
                            <iframe
                                src="https://cybermap.kaspersky.com/pt/widget/dynamic/dark"
                                className="absolute inset-0 w-full h-full"
                                frameBorder="0"
                                title="Kaspersky Cybermap"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 3 – Aplicação no Modelo MaaS™ */}
            <Section className="bg-premium-zinc text-dark border-t border-zinc-200">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-6">
                                Aplicação no<br />
                                <span className="text-secondary">Modelo MaaS™</span>
                            </h2>
                            <div className="w-12 h-1 bg-secondary mb-8"></div>
                        </div>

                        <ul className="grid gap-4">
                            {[
                                "Hardening contínuo de ambientes",
                                "Monitoramento e resposta a incidentes",
                                "Políticas de acesso e identidade",
                                "Gestão de vulnerabilidades",
                                "DRP documentado e testado",
                                "Relatórios executivos de risco"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 p-5 bg-white border border-zinc-100 rounded-xl group hover:shadow-lg transition-all duration-300 hover:border-secondary/30">
                                    <svg className="w-6 h-6 text-secondary shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-slate-700 font-inter font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-900 p-10 md:p-14 text-white flex flex-col justify-center rounded-3xl border border-white/5 shadow-2xl shadow-black/20">
                        <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-8 text-secondary tracking-tight uppercase">Impacto Estratégico</h3>
                        <div className="grid gap-8 mb-12">
                            {[
                                { title: "Redução de riscos operacionais", desc: "Mitigação proativa de ameaças antes que afetem a operação." },
                                { title: "Continuidade de negócio", desc: "Garantia de que a infraestrutura se mantenha resiliente." },
                                { title: "Conformidade regulatória", desc: "Alinhamento às melhores práticas e normas de segurança." },
                                { title: "Visibilidade executiva", desc: "Dashboards e relatórios que facilitam a tomada de decisão." }
                            ].map((impact, idx) => (
                                <div key={idx} className="space-y-2 border-l-4 border-secondary/30 hover:border-secondary pl-5 transition-colors">
                                    <h4 className="text-white font-bold font-outfit text-lg tracking-wide">{impact.title}</h4>
                                    <p className="text-slate-400 font-inter leading-relaxed">{impact.desc}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            href={`/${lang}/contato`}
                            className="inline-flex items-center justify-center h-14 bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-10 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 uppercase tracking-widest text-sm w-full lg:w-auto"
                        >
                            {lang === "pt" ? "INICIAR DIAGNÓSTICO" : lang === "es" ? "INICIAR DIAGNÓSTICO" : "START DIAGNOSTIC"}
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
