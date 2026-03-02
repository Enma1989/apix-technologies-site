import { notFound } from "next/navigation";
import { Locale, locales } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

interface PageProps {
    params: Promise<{
        lang: Locale;
    }>;
}

export default async function OperacaoSuportePage({ params }: PageProps) {
    const { lang } = await params;
    if (!locales.includes(lang)) notFound();

    return (
        <main className="min-h-screen bg-premium-dark">
            {/* Service Hero Full-Bleed */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-white/5">
                {/* Layer A: Background Image */}
                <div className="absolute inset-0 z-0 bg-zinc-950">
                    <Image
                        src="/images/Suporte.jpg"
                        alt="Operação e Suporte MaaS"
                        fill
                        priority
                        quality={100}
                        className="object-cover opacity-60 lg:opacity-80 object-[65%_center]"
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
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-bold mb-8 tracking-tight leading-tight text-white uppercase">
                                OPERAÇÃO &<br />
                                SUPORTE <span className="text-apix-yellow drop-shadow-[0_0_30px_rgba(255,210,63,0.3)]">MaaS™</span>
                            </h1>

                            <div className="w-20 h-1 bg-apix-yellow mb-10 drop-shadow-[0_0_10px_rgba(255,210,63,0.5)]"></div>

                            <h2 className="text-2xl font-outfit font-semibold text-white mb-4 drop-shadow-sm leading-snug">
                                Infraestrutura crítica exige execução estruturada, SLA definido e monitoramento contínuo.
                            </h2>

                            <p className="text-lg md:text-xl text-slate-300 font-inter leading-relaxed max-w-xl drop-shadow-sm">
                                A Apix Tech opera ambientes corporativos sob modelo MaaS™, com processos formalizados, gestão de incidentes estruturada e responsabilidade operacional clara. Não tratamos chamados isolados. Garantimos previsibilidade, controle e continuidade.
                            </p>

                            <div className="mt-8 border-l-4 border-apix-yellow pl-6 py-2 bg-gradient-to-r from-apix-yellow/10 to-transparent">
                                <p className="text-lg text-white font-medium italic">
                                    <span className="text-apix-yellow">Operação não é suporte. É responsabilidade executiva.</span>
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-8">
                                <Link
                                    href={`/${lang}/contato`}
                                    className="inline-flex items-center justify-center h-12 md:h-14 bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-8 md:px-10 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,210,63,0.4)] hover:-translate-y-[1px] transition-all duration-300 uppercase tracking-widest text-xs md:text-sm"
                                >
                                    {lang === "pt" ? "INICIAR DIAGNÓSTICO" : lang === "es" ? "INICIAR DIAGNÓSTICO" : "START DIAGNOSTIC"}
                                </Link>
                                <Link
                                    href={`/${lang}/contato`}
                                    className="inline-flex items-center justify-center h-12 md:h-14 bg-transparent border-2 border-white/20 text-white font-bold px-8 md:px-10 rounded-full hover:bg-white/5 hover:border-white/40 hover:-translate-y-[1px] transition-all duration-300 uppercase tracking-widest text-xs md:text-sm"
                                >
                                    {lang === "pt" ? "FALAR COM ESPECIALISTA" : lang === "es" ? "HABLAR CON UN EXPERTO" : "TALK TO AN EXPERT"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 2 – O QUE SIGNIFICA OPERAÇÃO (FUNDO CLARO) */}
            <Section className="bg-premium-white text-dark py-24 border-b border-zinc-200">
                <div className="container-premium">
                    <div className="mb-16 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-6">
                            OPERAÇÃO ESTRUTURADA, <span className="text-secondary">NÃO ATENDIMENTO REATIVO.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-[24px] border border-zinc-200 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-shadow duration-500 group flex flex-col">
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg>
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-slate-900 mb-4 xl:h-14 lg:h-14">SLA Formalizado</h3>
                            <ul className="space-y-3 mt-auto">
                                {["Definição de tempos de resposta", "Priorização por criticidade", "Acordo de nível de serviço documentado"].map((i, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></div>
                                        <span className="text-slate-600 font-inter text-sm leading-relaxed">{i}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-[24px] border border-zinc-200 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-shadow duration-500 group flex flex-col">
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-slate-900 mb-4 xl:h-14 lg:h-14">Monitoramento Contínuo</h3>
                            <ul className="space-y-3 mt-auto">
                                {["Infraestrutura", "Serviços críticos", "Alertas inteligentes", "Ação antes da falha"].map((i, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></div>
                                        <span className="text-slate-600 font-inter text-sm leading-relaxed">{i}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-[24px] border border-zinc-200 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-shadow duration-500 group flex flex-col">
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-slate-900 mb-4 xl:h-14 lg:h-14">Gestão de Incidentes</h3>
                            <ul className="space-y-3 mt-auto">
                                {["Tratativa formal", "RCA (Root Cause Analysis)", "Plano de ação documentado", "Histórico auditável"].map((i, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></div>
                                        <span className="text-slate-600 font-inter text-sm leading-relaxed">{i}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 rounded-[24px] border border-zinc-200 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-shadow duration-500 group flex flex-col">
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-slate-900 mb-4 xl:h-14 lg:h-14">Governança Operacional</h3>
                            <ul className="space-y-3 mt-auto">
                                {["Indicadores mensais", "Relatórios executivos", "Reuniões de acompanhamento", "Evolução contínua"].map((i, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></div>
                                        <span className="text-slate-600 font-inter text-sm leading-relaxed">{i}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SEÇÃO 3 – IMPACTO EXECUTIVO (FUNDO ESCURO PREMIUM) */}
            <Section className="bg-zinc-950 text-white py-24 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>

                <div className="container-premium relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-white uppercase tracking-tight leading-none mb-6">
                            IMPACTO EXECUTIVO DA <span className="text-secondary drop-shadow-[0_0_15px_rgba(255,210,63,0.3)]">OPERAÇÃO MaaS™</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                        {[
                            "Redução de indisponibilidade",
                            "Previsibilidade operacional",
                            "Controle real sobre ativos tecnológicos",
                            "Decisão baseada em dados"
                        ].map((impact, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl group hover:border-secondary/40 hover:bg-white/10 transition-all duration-300">
                                <svg className="w-8 h-8 text-secondary shrink-0 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(255,210,63,0.3)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white font-inter font-medium text-xl leading-snug">{impact}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* SEÇÃO 4 – CTA ESTRATÉGICO FINAL */}
            <Section className="bg-premium-zinc text-dark py-24 border-t border-zinc-200">
                <div className="container-premium max-w-5xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-6">
                            SUA OPERAÇÃO ESTÁ <span className="text-secondary">SOB CONTROLE</span> OU APENAS FUNCIONANDO?
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 font-inter leading-relaxed max-w-3xl mx-auto mb-10">
                            Empresas entre 10 e 80 colaboradores precisam mais que suporte técnico. Precisam de previsibilidade, governança e responsabilidade formal sobre seus ativos tecnológicos.
                        </p>

                        <div className="flex justify-center">
                            <Link
                                href={`/${lang}/contato`}
                                className="inline-flex items-center justify-center h-14 bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-12 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 uppercase tracking-widest text-sm"
                            >
                                {lang === "pt" ? "INICIAR DIAGNÓSTICO ESTRUTURAL" : lang === "es" ? "INICIAR DIAGNÓSTICO ESTRUCTURAL" : "START STRUCTURAL DIAGNOSTIC"}
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
