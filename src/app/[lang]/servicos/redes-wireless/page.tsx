import { notFound } from "next/navigation";
import { Locale, siteConfig, locales } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export default async function RedesWirelessPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;

    // Content for the new section
    const maaSApplication = {
        title: {
            pt: "Aplicação no Modelo MaaS™",
            en: "MaaS™ Model Application",
            es: "Aplicación en el Modelo MaaS™"
        },
        text: {
            pt: "Redes Wireless faz parte da Camada 1 — Infra & Rede do modelo MaaS™, garantindo conectividade governada, documentada e integrada ao controle operacional da organização.",
            en: "Wireless Networks is part of Layer 1 — Infra & Network of the MaaS™ model, ensuring governed, documented and integrated connectivity to the organization's operational control.",
            es: "Redes Inalámbricas forma parte de la Capa 1 — Infra & Red del modelo MaaS™, garantizando conectividad gobernada, documentada e integrada al control operativo de la organización."
        },
        items: {
            pt: [
                "Site Survey técnico documentado",
                "Engenharia de RF estruturada",
                "Segmentação e políticas de acesso",
                "Monitoramento contínuo",
                "Padronização e governança de conectividade"
            ],
            en: [
                "Documented technical Site Survey",
                "Structured RF engineering",
                "Segmentation and access policies",
                "Continuous monitoring",
                "Standardization and connectivity governance"
            ],
            es: [
                "Site Survey técnico documentado",
                "Ingeniería de RF estructurada",
                "Segmentación y políticas de acceso",
                "Monitoreo continuo",
                "Estandarización y gobernanza de conectividad"
            ]
        }
    };

    return (
        <main className="min-h-screen bg-premium-dark">
            {/* Service Hero Full-Bleed */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-white/5">
                {/* Layer A: Background Video (YouTube High-Res) */}
                <div className="absolute inset-0 z-0 bg-zinc-950 overflow-hidden">
                    <iframe
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto aspect-video -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60 lg:opacity-80 scale-110"
                        src="https://www.youtube.com/embed/isvNHMNNRPE?autoplay=1&mute=1&loop=1&playlist=isvNHMNNRPE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&vq=hd1080"
                        allow="autoplay; encrypted-media"
                        title="Background Video"
                    />
                </div>

                {/* Layer B: Global Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

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
                        <Link
                            href={`/${lang}/servicos`}
                            className="text-white/60 text-sm font-medium uppercase tracking-widest mb-10 inline-block hover:text-secondary transition-all"
                        >
                            ← {lang === "pt" ? "TODOS OS SERVIÇOS" : lang === "es" ? "TODOS LOS SERVICIOS" : "ALL SERVICES"}
                        </Link>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold mb-8 tracking-tight leading-tight text-white uppercase">
                            {lang === "pt" ? "Redes Wireless Governadas" : lang === "es" ? "Redes Inalámbricas Gobernadas" : "Governed Wireless Networks"}
                        </h1>
                        <div className="w-20 h-1 bg-secondary mb-10 drop-shadow-[0_0_10px_rgba(255,210,63,0.5)]"></div>
                        <p className="text-xl md:text-2xl text-slate-200 font-inter leading-relaxed max-w-xl drop-shadow-sm">
                            {lang === "pt"
                                ? "Engenharia de conectividade corporativa integrada ao modelo MaaS™, com previsibilidade, documentação e controle operacional."
                                : lang === "es"
                                    ? "Ingeniería de conectividad corporativa integrada al modelo MaaS™, con previsibilidad, documentación y control operativo."
                                    : "Corporate connectivity engineering integrated into the MaaS™ model, with predictability, documentation, and operational control."
                            }
                        </p>
                    </div>
                </div>
            </section>

            {/* Nova Seção: Aplicação no Modelo MaaS™ */}
            <Section className="bg-premium-zinc text-dark">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6 tracking-tight text-slate-900 uppercase">
                            {maaSApplication.title[lang]}
                        </h2>
                        <div className="w-12 h-1 bg-secondary mb-8"></div>
                        <p className="text-lg text-slate-600 font-inter leading-relaxed mb-10 max-w-xl">
                            {maaSApplication.text[lang]}
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.02]">
                        <ul className="space-y-6">
                            {maaSApplication.items[lang].map((item, index) => (
                                <li key={index} className="flex items-center gap-4 text-slate-700 font-medium group">
                                    <svg className="w-6 h-6 text-secondary shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-outfit font-bold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Business Impact Section (Impacto Estratégico - Inalterado) */}
            <Section className="bg-premium-white text-dark">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-10 tracking-tight text-slate-900 uppercase">
                            {lang === "pt" ? "Impacto Estratégico" : lang === "en" ? "Strategic Impact" : "Impacto Estratégico"}
                        </h2>
                        <div className="space-y-8">
                            <div className="border-l-4 border-secondary pl-8 group">
                                <h4 className="font-outfit font-bold text-xl mb-3 text-slate-900 group-hover:text-secondary transition-colors">
                                    {lang === "pt" ? "Redução de Riscos" : lang === "en" ? "Risk Reduction" : "Reducción de Riesgos"}
                                </h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-inter">
                                    {lang === "pt"
                                        ? "Eliminação de pontos únicos de falha e vulnerabilidades que podem comprometer a continuidade das suas operações."
                                        : "Elimination of single points of failure and vulnerabilities that can compromise the continuity of your operations."
                                    }
                                </p>
                            </div>
                            <div className="border-l-4 border-secondary pl-8 group">
                                <h4 className="font-outfit font-bold text-xl mb-3 text-slate-900 group-hover:text-secondary transition-colors">
                                    {lang === "pt" ? "Inteligência de Custos" : lang === "en" ? "Cost Intelligence" : "Inteligencia de Costos"}
                                </h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-inter">
                                    {lang === "pt"
                                        ? "Otimização de investimentos em tecnologia com base em diagnósticos precisos, evitando gastos desnecessários com infraestrutura subutilizada."
                                        : "Optimization of technology investments based on precise diagnostics, avoiding unnecessary spending on underutilized infrastructure."
                                    }
                                </p>
                            </div>
                            <div className="border-l-4 border-secondary pl-8 group">
                                <h4 className="font-outfit font-bold text-xl mb-3 text-slate-900 group-hover:text-secondary transition-colors">
                                    {lang === "pt" ? "Escalabilidade & Governança" : lang === "en" ? "Scalability & Governance" : "Escalabilidad y Gobernanza"}
                                </h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-inter">
                                    {lang === "pt"
                                        ? "Preparação da sua base tecnológica para o crescimento orgânico, mantendo o controle rigoroso sobre cada ativo e mudança."
                                        : "Preparation of your technological base for organic growth, maintaining strict control over each asset and change."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-10 md:p-14 text-white flex flex-col justify-center rounded-3xl border border-white/5 shadow-2xl shadow-black/20">
                        <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-6 text-secondary tracking-tight">
                            {lang === "pt" ? "Solução Consultiva" : lang === "en" ? "Consulting Solution" : "Solución Consultiva"}
                        </h3>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed font-inter">
                            {lang === "pt"
                                ? "Nossa abordagem para este serviço não é apenas técnica. Nós analisamos a fundo como esta camada de infraestrutura se conecta com seus objetivos de mercado, desenhando uma arquitetura que suporte a sua visão de futuro."
                                : "Our approach to this service is not just technical. We deeply analyze how this infrastructure layer connects with your market objectives, designing an architecture that supports your vision for the future."
                            }
                        </p>
                        <button className="h-12 md:h-14 bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-10 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 uppercase tracking-widest text-xs md:text-sm w-full md:w-auto">
                            {siteConfig.home.hero.primaryCTA[lang]}
                        </button>
                    </div>
                </div>
            </Section>

            {/* Final Summary/Credibility (CTA final - Inalterado) */}
            <Section className="bg-premium-zinc text-dark border-t border-zinc-200">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 tracking-tight text-slate-900 leading-tight">
                        {lang === "pt"
                            ? "Pronto para elevar o nível da sua infraestrutura?"
                            : "Ready to elevate your infrastructure level?"
                        }
                    </h2>
                    <p className="text-xl text-slate-600 font-inter mb-10 leading-relaxed">
                        {lang === "pt"
                            ? "A Apix Technologies combina rigor técnico com uma visão executiva clara. Se sua empresa tem entre 10 e 80 funcionários, você precisa de previsibilidade real sobre seus ativos tecnológicos."
                            : "Apix Technologies combines technical rigor with a clear executive vision. If your company has between 10 and 80 employees, you need real predictability over your technological assets."
                        }
                    </p>
                    <div className="w-20 h-1 bg-secondary drop-shadow-[0_0_8px_rgba(255,210,63,0.5)]" />
                </div>
            </Section>
        </main>
    );
}
