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

export default async function GestaoBackupPage({ params }: PageProps) {
    const { lang } = await params;
    if (!locales.includes(lang)) notFound();

    return (
        <main className="min-h-screen bg-premium-dark">
            {/* Service Hero Full-Bleed */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-white/5">
                {/* Layer A: Background Image */}
                <div className="absolute inset-0 z-0 bg-zinc-950">
                    <Image
                        src="/images/Server.jpg"
                        alt="Gestão de Backup Governada"
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
                                GESTÃO DE BACKUP<br />
                                <span className="text-apix-yellow drop-shadow-[0_0_30px_rgba(255,210,63,0.3)]">GOVERNADA</span>
                            </h1>

                            <div className="w-20 h-1 bg-apix-yellow mb-10 drop-shadow-[0_0_10px_rgba(255,210,63,0.5)]"></div>

                            <h2 className="text-2xl font-outfit font-semibold text-white mb-4 drop-shadow-sm leading-snug">
                                Proteção estratégica de dados sob o modelo MaaS™, com políticas aplicadas, retenção estruturada e recuperação testada.
                            </h2>

                            <p className="text-lg md:text-xl text-slate-300 font-inter leading-relaxed max-w-xl drop-shadow-sm">
                                A Apix Technologies estrutura e opera ambientes de backup com governança, monitoramento contínuo e testes periódicos de restauração, transformando dados em ativos resilientes.
                            </p>

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
                                    {lang === "pt" ? "CONTATO" : "CONTACT"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 2 – ARQUITETURA DE PROTEÇÃO (FUNDO CLARO) */}
            <Section className="bg-premium-white text-dark py-24 border-b border-zinc-200">
                <div className="container-premium">
                    <div className="mb-16 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-6">
                            ARQUITETURA DE PROTEÇÃO <span className="text-secondary">E RESILIÊNCIA</span>
                        </h2>
                        <p className="text-xl text-slate-600 font-inter">
                            Backup não é apenas cópia — é governança de continuidade operacional.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Coluna Esquerda: Lista Estruturada */}
                        <div className="space-y-4">
                            {[
                                "Política de retenção definida por criticidade",
                                "Backup local + cloud (modelo híbrido)",
                                "Monitoramento automatizado de falhas",
                                "Criptografia em trânsito e repouso",
                                "Testes periódicos de restauração (DRP validado)",
                                "Versionamento e proteção contra ransomware"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-5 bg-white border border-zinc-100 rounded-xl group hover:shadow-md transition-all duration-300 hover:border-secondary/30">
                                    <svg className="w-6 h-6 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-slate-700 font-inter font-medium text-lg leading-snug pt-0.5">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Coluna Direita: Card Premium */}
                        <div className="bg-white p-10 md:p-14 text-slate-900 flex flex-col justify-center rounded-[24px] border border-zinc-200 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-shadow duration-500">
                            <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-8 text-slate-900 tracking-tight uppercase">
                                IMPACTO ESTRATÉGICO
                            </h3>
                            <div className="space-y-6">
                                {[
                                    "Continuidade de Negócio",
                                    "Redução de risco operacional",
                                    "Conformidade regulatória",
                                    "Visibilidade executiva",
                                    "Resiliência contra ataques"
                                ].map((impact, idx) => (
                                    <div key={idx} className="flex items-center gap-4 border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
                                        <div className="w-2 h-2 rounded-full bg-secondary shrink-0"></div>
                                        <h4 className="text-slate-700 font-semibold font-inter text-lg">{impact}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SEÇÃO 3 – APLICAÇÃO NO MODELO MaaS™ */}
            <Section className="bg-premium-zinc text-dark border-t border-zinc-200">
                <div className="container-premium max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-6">
                            APLICAÇÃO NO <span className="text-secondary">MODELO MaaS™</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 text-left mb-16">
                        {[
                            "Diagnóstico inicial de criticidade",
                            "Estruturação da arquitetura de backup",
                            "Políticas aplicadas em arquitetura Multi-Cloud governada",
                            "Monitoramento contínuo",
                            "Testes de recuperação documentados",
                            "Relatórios executivos periódicos"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 bg-white border border-zinc-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                                <div className="text-secondary font-outfit font-bold text-2xl lg:text-3xl opacity-30 group-hover:opacity-100 transition-opacity">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>
                                <span className="text-slate-700 font-inter font-medium leading-tight pt-1 md:pt-1.5 text-lg">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Link
                            href={`/${lang}/contato`}
                            className="inline-flex items-center justify-center h-14 bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-12 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 uppercase tracking-widest text-sm"
                        >
                            {lang === "pt" ? "INICIAR DIAGNÓSTICO" : lang === "es" ? "INICIAR DIAGNÓSTICO" : "START DIAGNOSTIC"}
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
