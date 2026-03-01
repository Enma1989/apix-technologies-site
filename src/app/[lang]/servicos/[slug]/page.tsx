import { notFound } from "next/navigation";
import { Locale, siteConfig, locales } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";

export async function generateStaticParams() {
    const params: { lang: Locale; slug: string }[] = [];

    const specializedSlugs = ["redes-wireless", "cabeamento-estruturado", "servidores", "ciberseguranca"];

    locales.forEach((lang) => {
        siteConfig.services
            .filter((service) => !specializedSlugs.includes(service.slug))
            .forEach((service) => {
                params.push({ lang, slug: service.slug });
            });
    });

    return params;
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const { lang: langParam, slug } = await params;
    const lang = langParam as Locale;
    const service = siteConfig.services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-premium-dark">
            {/* Service Hero */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-premium-dark text-white border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4 -z-0" />

                <div className="container-premium relative z-10">
                    <Link
                        href={`/${lang}/servicos`}
                        className="text-secondary text-xs font-bold uppercase tracking-widest mb-10 inline-block hover:opacity-70 transition-all"
                    >
                        ← {lang === "pt" ? "Todos os serviços" : "All services"}
                    </Link>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold mb-8 max-w-4xl tracking-tight leading-tight text-white">
                        {service.title[lang]}
                    </h1>
                    <div className="w-20 h-1 bg-secondary mb-10"></div>
                    <p className="text-xl md:text-2xl text-slate-400 font-inter max-w-2xl leading-relaxed">
                        {lang === "pt"
                            ? "Elevando o padrão de infraestrutura corporativa através de soluções consultivas focadas em previsibilidade e controle absoluto."
                            : "Elevating the standard of corporate infrastructure through consulting solutions focused on predictability and absolute control."
                        }
                    </p>
                </div>
            </section>

            {/* Business Impact Section */}
            <Section className="bg-premium-white text-dark">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-10 tracking-tight text-slate-900 uppercase">
                            {lang === "pt" ? "Impacto Estratégico" : "Strategic Impact"}
                        </h2>
                        <div className="space-y-8">
                            <div className="border-l-4 border-secondary pl-8 group">
                                <h4 className="font-outfit font-bold text-xl mb-3 text-slate-900 group-hover:text-secondary transition-colors">
                                    {lang === "pt" ? "Redução de Riscos" : "Risk Reduction"}
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
                                    {lang === "pt" ? "Inteligência de Custos" : "Cost Intelligence"}
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
                                    {lang === "pt" ? "Escalabilidade & Governança" : "Scalability & Governance"}
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
                            {lang === "pt" ? "Solução Consultiva" : "Consulting Solution"}
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

            {/* Final Summary/Credibility */}
            <Section className="bg-premium-zinc text-dark border-t border-zinc-200">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 tracking-tight text-slate-900">
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
                    <div className="w-20 h-1 bg-secondary" />
                </div>
            </Section>
        </main>
    );
}
