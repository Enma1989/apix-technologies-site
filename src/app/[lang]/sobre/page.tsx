import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "@/components/Section";

export default async function AboutPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;

    return (
        <main className="min-h-screen bg-premium-dark">
            {/* Hero Section */}
            <section className="pt-40 pb-32 bg-premium-dark text-white relative flex items-center border-b border-white/5">
                <div className="container-premium relative z-10">
                    <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-8 max-w-4xl tracking-tight leading-tight">
                        {lang === "pt"
                            ? "Transformando T.I. em Ativo Estratégico e Previsível."
                            : lang === "en"
                                ? "Transforming I.T. into a Strategic and Predictable Asset."
                                : "Transformando la T.I. en un Activo Estratégico y Previsible."
                        }
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 font-inter max-w-2xl leading-relaxed">
                        {lang === "pt"
                            ? "Somos uma consultoria focada em empresas que demandam rigor técnico, governança clara e previsibilidade de custos."
                            : "We are a consultancy focused on companies that demand technical rigor, clear governance and cost predictability."
                        }
                    </p>
                </div>
            </section>

            {/* Strategic Vision */}
            <Section className="bg-premium-white text-dark">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-3xl font-outfit font-bold mb-8 uppercase tracking-tight">
                            {lang === "pt" ? "Nossa Filosofia Consultiva" : "Our Consulting Philosophy"}
                        </h2>
                        <p className="text-lg text-dark/70 mb-8 font-inter leading-relaxed">
                            {lang === "pt"
                                ? "Não acreditamos em soluções genéricas ou suporte reativo de 'apagamento de incêndios'. Para a Apix Technologies, infraestrutura é sobre continuidade operacional e blindagem de riscos."
                                : "We don't believe in generic solutions or reactive 'firefighting' support. For Apix Technologies, infrastructure is about operational continuity and risk shielding."
                            }
                        </p>
                        <p className="text-lg text-dark/70 font-inter leading-relaxed mb-10">
                            {lang === "pt"
                                ? "Nossa metodologia foi desenhada para diretores e proprietários de médias empresas que precisam de um parceiro estratégico que fale a língua do negócio, não apenas tecnicismos."
                                : "Our methodology was designed for directors and owners of medium-sized companies who need a strategic partner who speaks the language of business, not just technicalities."
                            }
                        </p>
                        <div className="w-20 h-1 bg-secondary" />
                    </div>

                    <div className="bg-dark p-12 text-white border border-dark/10 relative">
                        <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                        <h3 className="text-2xl font-outfit font-bold mb-6 text-secondary tracking-tight">
                            {lang === "pt" ? "Eficiência técnica. Custo inteligente. Execução impecável." : "Technical efficiency. Intelligent cost. Flawless execution."}
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="text-secondary font-bold">01.</span>
                                <p className="text-sm opacity-60 font-inter">
                                    {lang === "pt" ? "Diagnósticos baseados em dados, não em suposições." : "Data-driven diagnostics, not assumptions."}
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-secondary font-bold">02.</span>
                                <p className="text-sm opacity-60 font-inter">
                                    {lang === "pt" ? "Arquitetura planejada para crescimento sustentável." : "Architecture planned for sustainable growth."}
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-secondary font-bold">03.</span>
                                <p className="text-sm opacity-60 font-inter">
                                    {lang === "pt" ? "Governança e documentação como padrão inevitável." : "Governance and documentation as an inevitable standard."}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Global Presence */}
            <Section className="bg-premium-dark text-white border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-outfit font-bold mb-6 uppercase tracking-tight">
                        {lang === "pt" ? "Presença Internacional" : "International Presence"}
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto font-inter">
                        {lang === "pt"
                            ? "Operamos de forma estratégica para oferecer suporte local em centros-chave e atendimento remoto de alta consultoria."
                            : "We operate strategically to offer local support in key centers and high-consultancy remote service."
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <h4 className="font-outfit font-bold text-xl mb-4 text-secondary tracking-tight">Brasil</h4>
                        <p className="text-sm text-white/50 font-inter italic">{siteConfig.contact.brasil.subtitle[lang]}</p>
                    </div>
                    <div>
                        <h4 className="font-outfit font-bold text-xl mb-4 text-secondary tracking-tight">Peru</h4>
                        <p className="text-sm text-white/50 font-inter italic">{siteConfig.contact.peru.subtitle[lang]}</p>
                    </div>
                    <div>
                        <h4 className="font-outfit font-bold text-xl mb-4 text-secondary tracking-tight">Espanha</h4>
                        <p className="text-sm text-white/50 font-inter italic">{siteConfig.contact.spain.subtitle[lang]}</p>
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="bg-secondary text-dark text-center py-32">
                <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-10 max-w-4xl mx-auto tracking-tight">
                    {lang === "pt"
                        ? "Eleve o padrão da sua infraestrutura corporativa."
                        : "Elevate your corporate infrastructure standard."
                    }
                </h2>
                <button className="bg-dark text-white font-bold py-5 px-12 rounded-sm hover:-translate-y-1 transition-all uppercase tracking-widest text-sm">
                    {siteConfig.home.hero.primaryCTA[lang]}
                </button>
            </Section>
        </main>
    );
}
