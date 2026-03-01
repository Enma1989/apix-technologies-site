import { notFound } from "next/navigation";
import { Locale, siteConfig, locales } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export default async function ServidoresPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;

    // Content for MaaS application section
    const maaSApplication = {
        title: {
            pt: "Arquitetura Computacional MaaS™",
            en: "MaaS™ Computational Architecture",
            es: "Arquitectura Computacional MaaS™"
        },
        text: {
            pt: "Servidores & Virtualização formam o núcleo de processamento da organização. No modelo MaaS™, eliminamos a fragilidade técnica através de ambientes redundantes, auditáveis e desenhados para a continuidade absoluta do negócio.",
            en: "Servers & Virtualization form the processing core of the organization. In the MaaS™ model, we eliminate technical fragility through redundant, auditable environments designed for absolute business continuity.",
            es: "Servidores y Virtualización forman el núcleo de procesamiento de la organización. En el modelo MaaS™, eliminamos la fragilidad técnica a través de entornos redundantes, audibles y diseñados para la continuidad absoluta del negocio."
        },
        items: {
            pt: [
                "Alta Disponibilidade e Cloud Híbrida",
                "Virtualização Governada e Padronizada",
                "Monitoramento de Recursos e Performance",
                "Políticas de Atualização e Hardening",
                "Gestão de Ciclo de Vida de Ativos"
            ],
            en: [
                "High Availability and Hybrid Cloud",
                "Governed and Standardized Virtualization",
                "Resource and Performance Monitoring",
                "Update and Hardening Policies",
                "Asset Lifecycle Management"
            ],
            es: [
                "Alta Disponibilidad y Cloud Híbrida",
                "Virtualización Gobernada y Estandarizada",
                "Monitoreo de Recursos y Rendimiento",
                "Políticas de Actualización y Hardening",
                "Gestión del Ciclo de Vida de Activos"
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
                        src="/images/Servers.jpg"
                        alt="Infraestrutura de Servidores e Virtualização"
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
                            {lang === "pt" ? "Servidores & Virtualização Governados" : lang === "es" ? "Servidores y Virtualización Gobernados" : "Governed Servers & Virtualization"}
                        </h1>
                        <div className="w-20 h-1 bg-secondary mb-10 drop-shadow-[0_0_10px_rgba(255,210,63,0.5)]"></div>
                        <p className="text-xl md:text-2xl text-slate-200 font-inter leading-relaxed max-w-xl drop-shadow-sm">
                            {lang === "pt"
                                ? "Infraestrutura computacional estruturada sob o modelo MaaS™, com alta disponibilidade, padronização operacional e escalabilidade controlada."
                                : lang === "es"
                                    ? "Infraestructura computacional estructurada bajo el modelo MaaS™, con alta disponibilidad, estandarización técnica y escalabilidad controlada."
                                    : "Computational infrastructure structured under the MaaS™ model, with high availability, operational standardization, and controlled scalability."
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
                                    {lang === "pt" ? "Continuidade de Negócio" : lang === "en" ? "Business Continuity" : "Continuidad de Negocio"}
                                </h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-inter">
                                    {lang === "pt"
                                        ? "Implementação de failover e alta disponibilidade para garantir que seus servidores nunca parem de processar o que é vital."
                                        : "Implementation of failover and high availability to ensure your servers never stop processing what is vital."
                                    }
                                </p>
                            </div>
                            <div className="border-l-4 border-secondary pl-8 group">
                                <h4 className="font-outfit font-bold text-xl mb-3 text-slate-900 group-hover:text-secondary transition-colors">
                                    {lang === "pt" ? "Escalabilidade Previsível" : lang === "en" ? "Predictable Scalability" : "Escalabilidad Previsible"}
                                </h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-inter">
                                    {lang === "pt"
                                        ? "Design de ambientes virtualizados que permitem o crescimento rápido e organizado da carga de trabalho sem perda de controle."
                                        : "Design of virtualized environments that allow for rapid and organized growth of workload without loss of control."
                                    }
                                </p>
                            </div>
                            <div className="border-l-4 border-secondary pl-8 group">
                                <h4 className="font-outfit font-bold text-xl mb-3 text-slate-900 group-hover:text-secondary transition-colors">
                                    {lang === "pt" ? "Governança de Recursos" : lang === "en" ? "Resource Governance" : "Gobernanza de Recursos"}
                                </h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-inter">
                                    {lang === "pt"
                                        ? "Visibilidade total sobre o uso de CPU, memória e armazenamento, otimizando custos e evitando subutilização técnica."
                                        : "Total visibility into CPU, memory, and storage usage, optimizing costs and avoiding technical underutilization."
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
                                ? "Não apenas instalamos servidores. Nós desenhamos a arquitetura computacional que sustenta sua operação crítica, garantindo que cada VM e cada ativo físico estejam alinhados ao rigor do método MaaS™."
                                : "We don't just install servers. We design the computational architecture that sustains your critical operation, ensuring that every VM and every physical asset is aligned with the rigor of the MaaS™ method."
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
                            ? "Sua infraestrutura computacional é segura e resiliente?"
                            : "Is your computational infrastructure secure and resilient?"
                        }
                    </h2>
                    <p className="text-xl text-slate-600 font-inter mb-10 leading-relaxed">
                        {lang === "pt"
                            ? "A Apix Technologies entrega ambientes de servidores projetados para o futuro. Se sua empresa precisa de previsibilidade e alta disponibilidade real, o MaaS™ é o caminho."
                            : "Apix Technologies delivers server environments designed for the future. If your company needs predictability and real high availability, MaaS™ is the way."
                        }
                    </p>
                    <div className="w-20 h-1 bg-secondary drop-shadow-[0_0_8px_rgba(255,210,63,0.5)]" />
                </div>
            </Section>
        </main>
    );
}
