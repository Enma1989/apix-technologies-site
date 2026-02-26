import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import CaseStudies from "@/components/home/CaseStudies";

export default async function CasesPage({
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
                            ? "Impacto Estratégico em Números e Resultados."
                            : lang === "en"
                                ? "Strategic Impact in Numbers and Results."
                                : "Impacto Estratégico en Números y Resultados."
                        }
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 font-inter max-w-2xl leading-relaxed">
                        {lang === "pt"
                            ? "Estudos de caso que demonstram como o rigor técnico e a governança transformam a continuidade de médias empresas."
                            : "Case studies demonstrating how technical rigor and governance transform the continuity of medium-sized companies."
                        }
                    </p>
                </div>
            </section>

            {/* Case studies list (using the component we built) */}
            <CaseStudies lang={lang} />

            {/* Methodology summary */}
            <Section className="bg-premium-white text-dark">
                <div className="max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-8 uppercase tracking-tight">
                        {lang === "pt" ? "Nossa Abordagem Metodológica" : "Our Methodological Approach"}
                    </h2>
                    <p className="text-lg text-dark/60 font-inter leading-relaxed mb-10">
                        {lang === "pt"
                            ? "Cada um dos resultados acima foi alcançado através de um diagnóstico profundo e da aplicação de padrões de governança rigorosos. Não entregamos apenas tecnologia; entregamos previsibilidade."
                            : "Each of the results above was achieved through deep diagnosis and the application of rigorous governance standards. We don't just deliver technology; we deliver predictability."
                        }
                    </p>
                    <div className="flex flex-wrap gap-12">
                        <div>
                            <p className="text-3xl font-outfit font-bold text-dark">99.9%</p>
                            <p className="text-xs uppercase tracking-widest text-dark/40 font-bold mt-2">Uptime standard</p>
                        </div>
                        <div>
                            <p className="text-3xl font-outfit font-bold text-dark">100%</p>
                            <p className="text-xs uppercase tracking-widest text-dark/40 font-bold mt-2">Documented IT</p>
                        </div>
                        <div>
                            <p className="text-3xl font-outfit font-bold text-dark">&lt; 2h</p>
                            <p className="text-xs uppercase tracking-widest text-dark/40 font-bold mt-2">Disaster Recovery</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-premium-dark text-white border-t border-white/5 py-40 text-center">
                <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-10 max-w-3xl mx-auto uppercase tracking-tight leading-tight">
                    {lang === "pt"
                        ? "Quer resultados similares na infraestrutura da sua empresa?"
                        : "Want similar results in your company's infrastructure?"
                    }
                </h2>
                <button className="bg-secondary text-dark font-bold py-5 px-12 rounded-sm hover:-translate-y-1 transition-all uppercase tracking-widest text-sm">
                    {siteConfig.home.hero.primaryCTA[lang]}
                </button>
            </Section>
        </main>
    );
}
