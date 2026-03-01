import { notFound } from "next/navigation";
import { Locale, siteConfig, locales } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export default async function CabeamentoEstruturadoPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;

    // Content for MaaS application section
    const maaSApplication = {
        title: {
            pt: "Base Física Auditável do MaaS™",
            en: "MaaS™ Auditable Physical Foundation",
            es: "Base Física Auditable MaaS™"
        },
        text: {
            pt: "O Cabeamento Estruturado é o alicerce da Camada 1 — Infra & Rede. Na Apix, projetamos sistemas que transcendem a simples conectividade, criando uma infraestrutura física auditável e resiliente.",
            en: "Structured Cabling is the foundation of Layer 1 — Infra & Network. At Apix, we design systems that transcend simple connectivity, creating an auditable and resilient physical infrastructure.",
            es: "El Cableado Estructurado es el cimiento de la Capa 1 — Infra & Red. En Apix, diseñamos sistemas que trascienden la simple conectividad, creando una infraestructura física audible y resiliente."
        },
        items: {
            pt: [
                "Site Survey e Design Normativo",
                "Identificação e Rotulagem Padrão MaaS™",
                "Certificação com Relatórios Técnicos",
                "Gestão de Ativos e Topologia Documentada",
                "Organização de Racks e Distribuição Inteligente"
            ],
            en: [
                "Normative Site Survey and Design",
                "MaaS™ Standard Labeling and Identification",
                "Certification with Technical Reports",
                "Asset Management and Documented Topology",
                "Rack Organization and Intelligent Distribution"
            ],
            es: [
                "Site Survey y Diseño Normativo",
                "Identificación y Etiquetado Estándar MaaS™",
                "Certificación con Informes Técnicos",
                "Gestión de Activos y Topología Documentada",
                "Organización de Racks y Distribución Inteligente"
            ]
        }
    };

    return (
        <main className="min-h-screen bg-premium-dark">
            {/* Service Hero Full-Bleed */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-white/5">
                {/* Layer A: Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/cabeamento.jpg"
                        alt="Infraestrutura de Cabeamento Estruturado"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        sizes="100vw"
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
                            {lang === "pt" ? "Cabeamento Estruturado Governado" : lang === "es" ? "Cableado Estructurado Gobernado" : "Governed Structured Cabling"}
                        </h1>
                        <div className="w-20 h-1 bg-secondary mb-10 drop-shadow-[0_0_10px_rgba(255,210,63,0.5)]"></div>
                        <p className="text-xl md:text-2xl text-slate-200 font-inter leading-relaxed max-w-xl drop-shadow-sm">
                            {lang === "pt"
                                ? "A base física auditável do MaaS™: padronização, documentação e previsibilidade para eliminar falhas na camada 1."
                                : lang === "es"
                                    ? "La base física auditable de MaaS™: estandarización, documentación y previsibilidad para eliminar fallas en la capa 1."
                                    : "The auditable physical foundation of MaaS™: standardization, documentation, and predictability to eliminate layer 1 failures."
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

            {/* Business Impact Section */}
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
                                        ? "Eliminação de interferências e gargalos físicos que podem comprometer a estabilidade de toda a rede corporativa."
                                        : "Elimination of interference and physical bottlenecks that can compromise the stability of the entire corporate network."
                                    }
                                </p>
                            </div>
                            <div className="border-l-4 border-secondary pl-8 group">
                                <h4 className="font-outfit font-bold text-xl mb-3 text-slate-900 group-hover:text-secondary transition-colors">
                                    {lang === "pt" ? "Manutenibilidade Eficiente" : lang === "en" ? "Efficient Maintainability" : "Mantenibilidad Eficiente"}
                                </h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-inter">
                                    {lang === "pt"
                                        ? "Padronização técnica que permite diagnósticos rápidos e mudanças estruturadas, evitando desperdício de tempo e recursos."
                                        : "Technical standardization that allows for quick diagnostics and structured changes, avoiding waste of time and resources."
                                    }
                                </p>
                            </div>
                            <div className="border-l-4 border-secondary pl-8 group">
                                <h4 className="font-outfit font-bold text-xl mb-3 text-slate-900 group-hover:text-secondary transition-colors">
                                    {lang === "pt" ? "Longevidade da Infraestrutura" : lang === "en" ? "Infrastructure Longevity" : "Longevidad de la Infraestructura"}
                                </h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-inter">
                                    {lang === "pt"
                                        ? "Certificação normativa que garante o desempenho dos ativos de rede por décadas, protegendo o investimento tecnológico."
                                        : "Normative certification that guarantees the performance of network assets for decades, protecting the technological investment."
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
                                ? "Nossa entrega técnica não se encerra na passagem dos cabos. Entregamos um ambiente certificado, rotulado e totalmente mapeado, transformando a Camada 1 em um ativo estratégico de alta confiabilidade."
                                : "Our technical delivery doesn't end with cable pulling. We deliver a certified, labeled, and fully mapped environment, transforming Layer 1 into a highly reliable strategic asset."
                            }
                        </p>
                        <button className="h-12 md:h-14 bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-10 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 uppercase tracking-widest text-xs md:text-sm w-full md:w-auto">
                            {siteConfig.home.hero.primaryCTA[lang]}
                        </button>
                    </div>
                </div>
            </Section>

            {/* Final Summary/Credibility */}
            <Section className="bg-premium-zinc text-dark border-t border-zinc-200">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 tracking-tight text-slate-900 leading-tight">
                        {lang === "pt"
                            ? "Sua base física está pronta para a próxima fase?"
                            : "Is your physical foundation ready for the next phase?"
                        }
                    </h2>
                    <p className="text-xl text-slate-600 font-inter mb-10 leading-relaxed">
                        {lang === "pt"
                            ? "A Apix Technologies aplica rigor normativo em cada conexão. Se sua empresa busca escala e governança real, a jornada começa com uma infraestrutura física auditável e impecável."
                            : "Apix Technologies applies normative rigor in every connection. If your company seeks scale and real governance, the journey begins with an auditable and impeccable physical infrastructure."
                        }
                    </p>
                    <div className="w-20 h-1 bg-secondary drop-shadow-[0_0_8px_rgba(255,210,63,0.5)]" />
                </div>
            </Section>
        </main>
    );
}
