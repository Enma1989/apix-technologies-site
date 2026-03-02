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

export default async function Microsoft365Page({ params }: PageProps) {
    const { lang } = await params;
    if (!locales.includes(lang)) notFound();

    return (
        <main className="min-h-screen bg-premium-dark">
            {/* Service Hero Full-Bleed */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-white/5">
                {/* Layer A: Background Image */}
                <div className="absolute inset-0 z-0 bg-zinc-950">
                    <Image
                        src="/images/Microsoft.jpg"
                        alt="Microsoft 365"
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
                                MICROSOFT 365
                            </h1>

                            <div className="w-20 h-1 bg-apix-yellow mb-10 drop-shadow-[0_0_10px_rgba(255,210,63,0.5)]"></div>

                            <h2 className="text-2xl font-outfit font-semibold text-white mb-4 drop-shadow-sm leading-snug">
                                Estruturação, segurança e governança da plataforma Microsoft sob o modelo MaaS™.
                            </h2>

                            <p className="text-lg md:text-xl text-slate-300 font-inter leading-relaxed max-w-xl drop-shadow-sm">
                                A Apix Tech implementa e opera ambientes Microsoft 365 com políticas estruturadas, controle de acesso, compliance e monitoramento contínuo, transformando produtividade em ativo estratégico.
                            </p>

                            <div className="mt-8 border-l-4 border-apix-yellow pl-6 py-2 bg-gradient-to-r from-apix-yellow/10 to-transparent">
                                <p className="text-lg text-white font-medium italic">
                                    <span className="text-apix-yellow">Não vendemos licença. Entregamos governança aplicada.</span>
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
                                    {lang === "pt" ? "CONTATO" : "CONTACT"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 2 – O QUE ESTRUTURAMOS (FUNDO CLARO) */}
            <Section className="bg-premium-white text-dark py-24 border-b border-zinc-200">
                <div className="container-premium">
                    <div className="mb-16 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-6">
                            ARQUITETURA MICROSOFT 365 <span className="text-secondary">SOB GOVERNANÇA</span>
                        </h2>
                        <p className="text-xl text-slate-600 font-inter">
                            Produtividade com controle, segurança e rastreabilidade.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-[24px] border border-zinc-200 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-shadow duration-500 group flex flex-col">
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-slate-900 mb-4 xl:h-14 lg:h-20">Identidade & Acesso</h3>
                            <ul className="space-y-3 mt-auto">
                                {["Entra ID (Azure AD) configurado", "MFA obrigatório", "Conditional Access", "Privilégios mínimos (Least Privilege)"].map((i, idx) => (
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
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-slate-900 mb-4 xl:h-14 lg:h-20">Segurança & Compliance</h3>
                            <ul className="space-y-3 mt-auto">
                                {["DLP (Data Loss Prevention)", "Políticas de retenção", "Proteção contra phishing", "Auditoria e logs"].map((i, idx) => (
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
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-slate-900 mb-4 xl:h-14 lg:h-20">Colaboração Governada</h3>
                            <ul className="space-y-3 mt-auto">
                                {["Estruturação de Teams", "Governança de SharePoint", "Controle de permissões", "Ciclo de vida de grupos"].map((i, idx) => (
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
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" /></svg>
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-slate-900 mb-4 xl:h-14 lg:h-20">Monitoramento & Relatórios</h3>
                            <ul className="space-y-3 mt-auto">
                                {["Alertas automatizados", "Relatórios executivos", "Análise de uso e risco", "Revisões periódicas"].map((i, idx) => (
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

            {/* SEÇÃO 3 – IMPACTO ESTRATÉGICO (FUNDO CLARO) */}
            <Section className="bg-zinc-50 text-dark py-24 border-b border-zinc-200">
                <div className="container-premium max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-10">
                                IMPACTO ESTRATÉGICO
                            </h2>
                            <div className="space-y-6">
                                {[
                                    "Redução de risco interno",
                                    "Proteção de dados corporativos",
                                    "Conformidade regulatória (LGPD)",
                                    "Visibilidade executiva",
                                    "Padronização operacional"
                                ].map((impact, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-5 bg-white border border-zinc-100 rounded-xl group hover:shadow-md transition-all duration-300 hover:border-secondary/30">
                                        <svg className="w-6 h-6 text-secondary shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-slate-700 font-inter font-medium text-lg leading-snug">{impact}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Callout Box */}
                        <div className="bg-slate-900 p-10 md:p-14 text-white flex flex-col justify-center rounded-[24px] border border-white/5 shadow-2xl shadow-black/20 text-center md:text-left relative overflow-hidden h-full min-h-[300px]">
                            <div className="absolute -top-10 -right-10 opacity-20 pointer-events-none">
                                <Image
                                    src="/images/APIX-09.png"
                                    alt="Apix Logo"
                                    width={240}
                                    height={240}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-6 text-white tracking-tight leading-snug relative z-10">
                                &quot;Microsoft 365 sem governança é custo.<br />
                                <span className="text-secondary drop-shadow-[0_0_15px_rgba(255,210,63,0.3)]">Com governança, é vantagem competitiva.</span>&quot;
                            </h3>
                            <div className="w-16 h-1 bg-secondary mx-auto md:mx-0 relative z-10"></div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* SEÇÃO 4 – APLICAÇÃO NO MODELO MaaS™ */}
            <Section className="bg-premium-zinc text-dark border-t border-zinc-200">
                <div className="container-premium max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-6">
                            APLICAÇÃO NO <span className="text-secondary">MODELO MaaS™</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 text-left mb-16">
                        {[
                            "Diagnóstico do ambiente atual",
                            "Definição de políticas e baseline de segurança",
                            "Implementação técnica estruturada",
                            "Monitoramento contínuo",
                            "Revisões periódicas",
                            "Relatórios executivos recorrentes"
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
