import { notFound } from "next/navigation";
import { Locale, locales } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { getDictionary } from "@/dictionaries";

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;
    const dict = await getDictionary(lang);
    return {
        title: dict.architecturePage.meta.title,
        description: dict.architecturePage.meta.description,
    };
}

export default async function ArquiteturaMaaSPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;

    if (!locales.includes(lang)) {
        notFound();
    }

    const dict = await getDictionary(lang);
    const { architecturePage: t } = dict;

    const servicesGrid = dict.services;

    return (
        <main className="min-h-screen bg-premium-white">
            {/* 1. HERO SECTION (Dark Premium) */}
            <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950">
                {/* Background Image full cover */}
                <Image
                    src="/images/arquitectura.jpg"
                    alt="Arquitetura MaaS"
                    fill
                    priority
                    className="object-cover object-center z-0"
                />

                {/* Custom Overlay Premium Apix - Lighter Horizontal Gradient */}
                <div
                    className="absolute inset-0 z-[1] pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.50) 25%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.00) 90%)'
                    }}
                />

                {/* Content centralizado verticalmente */}
                <div className="relative z-10 flex min-h-screen items-center">
                    <div className="mx-auto w-full max-w-6xl px-6 pt-20 sm:pt-24 text-center">
                        <Link
                            href={`/${lang}`}
                            className="text-white/60 text-sm font-medium uppercase tracking-widest mb-8 inline-block hover:text-apix-yellow transition-all"
                        >
                            {t.hero.back}
                        </Link>

                        <div className="flex justify-center mb-8">
                            <div className="inline-flex items-center px-4 md:px-5 py-1.5 rounded-full border border-yellow-400/40 bg-black/30 backdrop-blur text-[#FFD23F] text-xs md:text-sm font-semibold uppercase tracking-wider">
                                {t.hero.badge}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-bold mb-6 tracking-tight leading-tight text-white text-shadow-premium uppercase">
                            {t.hero.title1} <span className="text-[#FFD23F] drop-shadow-[0_0_20px_rgba(255,210,63,0.4)]">{t.hero.title2}</span>
                        </h1>

                        <h2 className="text-xl md:text-2xl lg:text-3xl font-outfit font-semibold text-white text-shadow-premium mb-8 max-w-3xl mx-auto leading-snug">
                            {t.hero.subtitle}
                        </h2>

                        <p className="text-lg md:text-xl text-white/85 text-shadow-premium font-inter leading-relaxed max-w-2xl mx-auto mb-12">
                            {t.hero.desc}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href={`/${lang}/contato`}
                                className="inline-flex items-center justify-center h-12 md:h-14 bg-[#FFD23F] border border-[#FFD23F] text-[#111111] font-bold px-8 md:px-10 rounded-full hover:brightness-110 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm"
                            >
                                {t.hero.action1}
                            </Link>
                            <Link
                                href={`/${lang}/contato`}
                                className="inline-flex items-center justify-center h-12 md:h-14 bg-transparent border border-white/20 text-white font-bold px-8 md:px-10 rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm"
                            >
                                {t.hero.action2}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. O PROBLEMA (Fundo Claro) */}
            <Section className="bg-premium-white text-dark py-24 border-b border-zinc-200">
                <div className="container-premium max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-16">
                        {t.problem.title1} <br className="hidden md:block" />
                        <span className="text-secondary">{t.problem.title2}</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {t.problem.items.map((problem: string, idx: number) => (
                            <div key={idx} className="bg-white p-8 rounded-[24px] border border-zinc-200 shadow-xl shadow-black/5 flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:shadow-2xl hover:border-secondary/30 transition-all duration-500">
                                <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </div>
                                <h4 className="text-lg font-outfit font-bold text-slate-800 leading-snug">{problem}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="inline-block border-b-2 border-secondary pb-2">
                        <p className="text-xl md:text-2xl font-inter font-medium text-slate-700">
                            {t.problem.conclusion1} <span className="text-red-600 font-bold">{t.problem.conclusion2}</span>
                        </p>
                    </div>
                </div>
            </Section>

            {/* 3. O MODELO MAAS™ (Arquitetura Visual Premium) */}
            <section className="bg-zinc-950 text-white py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
                {/* Background Glows for Depth */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFD23F]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

                <div className="container-premium max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-20 md:mb-28">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-white uppercase tracking-tight leading-none mb-6">
                            {t.model.title1} <br className="hidden md:block" />
                            <span className="text-[#FFD23F] drop-shadow-[0_0_15px_rgba(255,210,63,0.15)]">{t.model.title2}</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 font-inter max-w-3xl mx-auto leading-relaxed">
                            {t.model.desc}
                        </p>
                    </div>

                    {/* Componente Arquitetônico Premium */}
                    <div className="max-w-4xl mx-auto my-16">
                        <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12 pl-4 md:pl-0">

                            {/* Linha Dourada Lateral (Conector Vertical) */}
                            <div className="hidden md:flex flex-col items-center relative py-8 ml-4">
                                <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#FFD23F]/40 to-transparent"></div>
                            </div>

                            {/* Camadas Empilhadas */}
                            <div className="w-full flex-1 flex flex-col gap-6 md:gap-8 relative">
                                {t.model.layers.map((layer: any, idx: number) => (
                                    <div
                                        key={idx}
                                        className="group relative flex items-center w-full"
                                    >
                                        {/* Elementos de Conexão Laterais (Desktop) */}
                                        <div className="hidden md:block absolute -left-12 w-8 h-px bg-gradient-to-r from-[#FFD23F]/20 to-transparent group-hover:from-[#FFD23F]/60 transition-colors duration-500"></div>
                                        <div className="hidden md:block absolute -left-[51px] w-1.5 h-1.5 rounded-full border border-[#FFD23F]/40 bg-zinc-950 group-hover:bg-[#FFD23F] group-hover:shadow-[0_0_10px_rgba(255,210,63,0.6)] group-hover:scale-150 transition-all duration-500"></div>

                                        {/* Bloco da Camada (Glassmorphism & Sombra 3D leve) */}
                                        <div className="w-full bg-zinc-900/40 border border-[#FFD23F]/10 p-6 md:p-8 rounded-xl backdrop-blur-sm 
                                            hover:bg-zinc-800/60 hover:border-[#FFD23F]/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),_0_0_20px_rgba(255,210,63,0.05)] 
                                            transition-all duration-500 ease-out relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-default">

                                            {/* Micro-glow interno na borda superior durante o hover */}
                                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/0 to-transparent group-hover:via-[#FFD23F]/40 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

                                            <div className="relative z-10 flex flex-col">
                                                <span className="text-[#FFD23F]/50 text-xs font-semibold uppercase tracking-widest mb-1 shadow-sm">
                                                    CAMADA {layer.id}
                                                </span>
                                                <h3 className="text-xl md:text-2xl font-outfit font-semibold text-slate-100 group-hover:text-white transition-colors duration-300 tracking-wide drop-shadow-sm">
                                                    {layer.title}
                                                </h3>
                                            </div>

                                            <div className="relative z-10 text-sm text-slate-400 font-inter md:max-w-[280px] lg:max-w-[340px] md:text-right group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                                                {layer.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-20">
                        <p className="text-xl md:text-2xl font-outfit text-slate-300 leading-normal tracking-wide uppercase font-light">
                            {t.model.footer1} <span className="text-[#FFD23F] font-bold mx-2">&gt;</span> {t.model.footerTool}
                            <span className="hidden md:inline mx-6 text-white/20">|</span>
                            <br className="md:hidden mt-2" />
                            {t.model.footer2} <span className="text-[#FFD23F] font-bold mx-2">&gt;</span> {t.model.footerService}
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. COMO FUNCIONA (Fundo Claro) */}
            <Section className="bg-premium-white text-dark py-24 border-b border-zinc-200">
                <div className="container-premium max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none">
                            {t.application.title1} <span className="text-secondary">{t.application.title2}</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {t.application.steps.map((item: any, idx: number) => (
                            <div key={idx} className="bg-white p-8 rounded-[24px] border border-zinc-200 shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-1 hover:border-secondary/30 transition-all duration-300 flex flex-col h-full group">
                                <div className="text-secondary font-outfit font-bold text-4xl mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-outfit font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 font-inter leading-relaxed mt-auto">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5. DIFERENCIAL ESTRATÉGICO (Fundo Claro) */}
            <Section className="bg-white text-dark py-24 border-b border-zinc-200">
                <div className="container-premium max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none">
                            {t.differentiator.title1} <span className="text-secondary">{t.differentiator.title2}</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 lg:space-y-8">
                            {t.differentiator.items.map((item: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-4 bg-premium-white border border-zinc-100 p-5 rounded-2xl hover:border-secondary/30 transition-colors duration-300">
                                    <div className="w-10 h-10 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                                        <div className="w-2.5 h-2.5 bg-secondary rounded-full"></div>
                                    </div>
                                    <span className="text-xl font-outfit font-bold text-slate-800">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-slate-900 p-12 md:p-16 rounded-[40px] border border-zinc-800 shadow-2xl relative overflow-hidden h-full flex items-center justify-center">
                            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#FFD23F]/10 rounded-full blur-[80px]"></div>
                            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#FFD23F]/10 rounded-full blur-[80px]"></div>

                            <div className="relative z-10 text-center flex flex-col items-center">
                                <svg className="w-16 h-16 text-[#FFD23F] mb-8 drop-shadow-[0_0_15px_rgba(255,210,63,0.3)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5zM11 10v5h2v-5h-2zm0 7v2h2v-2h-2z" /></svg>
                                <h3 className="text-3xl lg:text-4xl font-outfit font-bold text-white uppercase leading-tight tracking-tight">
                                    {t.differentiator.cardText1}<br />
                                    <span className="text-[#FFD23F] mt-2 block">{t.differentiator.cardText2}</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. CONEXÃO COM OS SERVIÇOS (Fundo Claro) */}
            <Section className="bg-premium-white text-dark py-24 border-b border-zinc-200">
                <div className="container-premium max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-6">
                            {t.services.title1} <span className="text-secondary">{t.services.title2}</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 font-inter max-w-2xl mx-auto">{t.services.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesGrid.map((svc: any, idx: number) => (
                            <Link
                                href={`/${lang}/servicos/${svc.slug}`}
                                key={idx}
                                className="group bg-white border border-zinc-200 p-6 md:p-8 rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-1 hover:border-secondary/50 transition-all duration-300 flex items-center justify-between"
                            >
                                <span className="font-outfit font-bold text-xl text-slate-800 group-hover:text-secondary transition-colors">
                                    {svc.title}
                                </span>
                                <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-colors">
                                    <svg className="w-5 h-5 text-slate-400 group-hover:text-secondary transform group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 7. CTA FINAL (Dark Premium) */}
            <section className="bg-zinc-950 text-white py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFD23F] via-transparent to-transparent blur-3xl"></div>

                <div className="container-premium max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-outfit font-bold text-white uppercase tracking-tight leading-none mb-8">
                        {t.finalCta.title1} <span className="text-[#FFD23F] drop-shadow-[0_0_15px_rgba(255,210,63,0.3)]">{t.finalCta.title2}</span><br className="hidden md:block" /> {t.finalCta.title3}
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-300 font-inter leading-relaxed mb-12 max-w-3xl mx-auto">
                        {t.finalCta.desc}
                    </p>

                    <Link
                        href={`/${lang}/contato`}
                        className="inline-flex items-center justify-center h-14 bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-10 md:px-12 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,210,63,0.4)] hover:-translate-y-[1px] transition-all duration-300 uppercase tracking-widest text-sm"
                    >
                        {t.finalCta.action}
                    </Link>
                </div>
            </section>
        </main>
    );
}
