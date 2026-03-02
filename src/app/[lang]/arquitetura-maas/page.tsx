import { notFound } from "next/navigation";
import { Locale, locales } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
    return {
        title: "Arquitetura MaaS™ | Apix Technologies",
        description: "Governança Tecnológica por Camadas Estruturadas.",
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

    const servicesGrid = [
        { title: "Redes Wireless", slug: "redes-wireless" },
        { title: "Cabeamento Estruturado", slug: "cabeamento-estruturado" },
        { title: "Servidores & Virtualização", slug: "servidores" },
        { title: "Cibersegurança", slug: "ciberseguranca" },
        { title: "Gestão de Backup", slug: "gestao-de-backup" },
        { title: "Business Continuity & Resilience", slug: "continuidade-resiliencia" },
        { title: "Microsoft 365", slug: "microsoft-365" },
        { title: "Google Workspace", slug: "google-workspace" },
        { title: "Operação & Suporte", slug: "suporte-tecnico" }
    ];

    return (
        <main className="min-h-screen bg-premium-white">
            {/* 1. HERO SECTION (Dark Premium) */}
            <section className="relative min-h-[75vh] flex items-center overflow-hidden border-b border-white/5 bg-zinc-950">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black"></div>

                {/* Overlay glass discreto */}
                <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-[2px]" />

                {/* Content */}
                <div className="container-premium relative z-30 pt-32 pb-20 md:pt-40 md:pb-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link
                            href={`/${lang}`}
                            className="text-white/60 text-sm font-medium uppercase tracking-widest mb-8 inline-block hover:text-apix-yellow transition-all"
                        >
                            ← {lang === "pt" ? "HOME" : "HOME"}
                        </Link>

                        <div className="flex justify-center mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFD23F] text-xs md:text-sm font-medium tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F] shadow-[0_0_8px_rgba(255,210,63,0.5)]"></span>
                                MÉTODO PROPRIETÁRIO
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-bold mb-6 tracking-tight leading-tight text-white uppercase">
                            ARQUITETURA <span className="text-[#FFD23F] drop-shadow-[0_0_20px_rgba(255,210,63,0.2)]">MaaS™</span>
                        </h1>

                        <h2 className="text-xl md:text-2xl lg:text-3xl font-outfit font-semibold text-slate-300 mb-8 max-w-3xl mx-auto leading-snug">
                            Governança Tecnológica por Camadas Estruturadas
                        </h2>

                        <p className="text-lg md:text-xl text-slate-400 font-inter leading-relaxed max-w-2xl mx-auto mb-12">
                            A Arquitetura MaaS™ organiza tecnologia em camadas estratégicas, conectando infraestrutura, segurança, continuidade e operação sob governança contínua.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href={`/${lang}/contato`}
                                className="inline-flex items-center justify-center h-12 md:h-14 bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-8 md:px-10 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,210,63,0.4)] hover:-translate-y-[1px] transition-all duration-300 uppercase tracking-widest text-xs md:text-sm"
                            >
                                {lang === "pt" ? "INICIAR DIAGNÓSTICO ESTRUTURAL" : lang === "es" ? "INICIAR DIAGNÓSTICO ESTRUCTURAL" : "START STRUCTURAL DIAGNOSTIC"}
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
            </section>

            {/* 2. O PROBLEMA (Fundo Claro) */}
            <Section className="bg-premium-white text-dark py-24 border-b border-zinc-200">
                <div className="container-premium max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-16">
                        O que acontece quando tecnologia <br className="hidden md:block" />
                        <span className="text-secondary">cresce sem estrutura?</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            "Infraestrutura fragmentada",
                            "Segurança reativa",
                            "Backup sem estratégia",
                            "Operação sem indicadores"
                        ].map((problem, idx) => (
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
                            Crescimento sem arquitetura gera <span className="text-red-600 font-bold">risco invisível.</span>
                        </p>
                    </div>
                </div>
            </Section>

            {/* 3. O MODELO MAAS™ (Fundo Claro) */}
            <Section className="bg-white text-dark py-24 border-b border-zinc-200">
                <div className="container-premium max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none mb-6">
                            O Modelo MaaS™ organiza <br className="hidden md:block" />
                            <span className="text-secondary">tecnologia por camadas</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 font-inter max-w-3xl mx-auto leading-relaxed">
                            A Arquitetura MaaS™ estrutura infraestrutura corporativa em camadas interdependentes, conectando base técnica, proteção e governança sob método formal.
                        </p>
                    </div>

                    <div className="max-w-[900px] mx-auto my-16">
                        <Image
                            src="/images/Diagrama.png"
                            alt="Diagrama do Modelo MaaS™"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="text-center">
                        <p className="text-2xl md:text-3xl font-outfit text-slate-800 leading-normal tracking-wide">
                            Arquitetura não é ferramenta.<br />
                            <span className="text-slate-500 font-light">É estrutura organizada sob método.</span>
                        </p>
                    </div>
                </div>
            </Section>

            {/* 4. COMO FUNCIONA (Fundo Claro) */}
            <Section className="bg-premium-white text-dark py-24 border-b border-zinc-200">
                <div className="container-premium max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight leading-none">
                            Como aplicamos a <span className="text-secondary">Arquitetura MaaS™</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            { step: "01", title: "Diagnóstico Estrutural", desc: "Mapeamento profundo do baseline tecnológico atual e de suas vulnerabilidades." },
                            { step: "02", title: "Definição de Prioridades", desc: "Alinhamento das necessidades técnicas reais com os objetivos de negócio." },
                            { step: "03", title: "Estruturação por Camadas", desc: "Desenho arquitetônico formal de como cada camada deve interagir e operar." },
                            { step: "04", title: "Implementação Técnica", desc: "Execução disciplinada das melhorias, integrações e implantações projetadas." },
                            { step: "05", title: "Operação Contínua", desc: "Monitoramento 24/7, gestão de incidentes e suporte sob SLA rigoroso." },
                            { step: "06", title: "Evolução Controlada", desc: "Auditoria contínua, comitês executivos mensais e adequação frente a novas tecnologias." }
                        ].map((item, idx) => (
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
                            O que diferencia a <span className="text-secondary">Arquitetura MaaS™</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 lg:space-y-8">
                            {[
                                "Método formal, não improviso",
                                "Governança contínua",
                                "Indicadores executivos",
                                "Responsabilidade operacional clara",
                                "Evolução estruturada"
                            ].map((item, idx) => (
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
                                    Não vendemos ferramentas.<br />
                                    <span className="text-[#FFD23F] mt-2 block">Projetamos estrutura.</span>
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
                            Cada serviço é uma <span className="text-secondary">aplicação do MaaS™</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 font-inter max-w-2xl mx-auto">Conheça as competências técnicas suportadas pela nossa arquitetura de governança.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesGrid.map((svc, idx) => (
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
                        Sua tecnologia está <span className="text-[#FFD23F] drop-shadow-[0_0_15px_rgba(255,210,63,0.3)]">estruturada</span><br className="hidden md:block" /> ou apenas funcionando?
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-300 font-inter leading-relaxed mb-12 max-w-3xl mx-auto">
                        Empresas que crescem precisam de método. A Arquitetura MaaS™ transforma infraestrutura em ativo estratégico.
                    </p>

                    <Link
                        href={`/${lang}/contato`}
                        className="inline-flex items-center justify-center h-14 bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-10 md:px-12 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,210,63,0.4)] hover:-translate-y-[1px] transition-all duration-300 uppercase tracking-widest text-sm"
                    >
                        {lang === "pt" ? "INICIAR DIAGNÓSTICO ESTRUTURAL" : lang === "es" ? "INICIAR DIAGNÓSTICO ESTRUCTURAL" : "START STRUCTURAL DIAGNOSTIC"}
                    </Link>
                </div>
            </section>
        </main>
    );
}
