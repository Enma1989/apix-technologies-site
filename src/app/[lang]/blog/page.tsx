import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";

const blogPosts = [
    {
        slug: "governança-de-ti-em-medias-empresas",
        title: {
            pt: "Governança de TI: O pilar esquecido em médias empresas.",
            en: "IT Governance: The forgotten pillar in medium-sized companies.",
            es: "Gobernanza de TI: El pilar olvidado en las medianas empresas."
        },
        excerpt: {
            pt: "Como a falta de processos auditáveis compromete a escalabilidade e segurança do seu negócio.",
            en: "How the lack of auditable processes compromises the scalability and security of your business."
        },
        date: "2026-02-15"
    },
    {
        slug: "mitigacao-de-riscos-em-infraestrutura",
        title: {
            pt: "Estratégias de mitigação de riscos em infraestrutura legada.",
            en: "Risk mitigation strategies in legacy infrastructure.",
            es: "Estrategias de mitigación de riesgos en infraestructura heredada."
        },
        excerpt: {
            pt: "Passos práticos para identificar gargalos e blindar sua operação contra paradas não planejadas.",
            en: "Practical steps to identify bottlenecks and shield your operation against unplanned downtime."
        },
        date: "2026-02-10"
    },
    {
        slug: "custo-inteligente-nuvem-vs-on-premise",
        title: {
            pt: "Custo Inteligente: Cloud Computing vs. On-Premise em 2026.",
            en: "Intelligent Cost: Cloud Computing vs. On-Premise in 2026.",
            es: "Costo Inteligente: Cloud Computing vs. On-Premise en 2026."
        },
        excerpt: {
            pt: "Análise financeira e operacional para tomar a melhor decisão para o seu faturamento.",
            en: "Financial and operational analysis to make the best decision for your revenue."
        },
        date: "2026-02-05"
    }
];

export default async function BlogPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;

    return (
        <main className="min-h-screen bg-premium-dark">
            {/* Hero Section */}
            <section className="pt-40 pb-32 bg-premium-dark text-white border-b border-white/5 relative">
                <div className="container-premium relative z-10">
                    <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-8 max-w-4xl tracking-tight leading-tight uppercase">
                        {lang === "pt" ? "Perspectiva Consultiva" : "Consulting Perspective"}
                    </h1>
                    <p className="text-xl text-white/50 font-inter max-w-2xl">
                        {lang === "pt"
                            ? "Artigos e insights sobre infraestrutura, governança e a interseção entre tecnologia e eficiência de custo."
                            : "Articles and insights on infrastructure, governance and the intersection between technology and cost efficiency."
                        }
                    </p>
                </div>
            </section>

            {/* Blog Listing */}
            <Section className="bg-premium-white text-dark">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="group cursor-pointer">
                            <Link href={`/${lang}/blog/${post.slug}`}>
                                <div className="mb-6 aspect-[16/9] bg-dark/5 overflow-hidden flex items-center justify-center border border-dark/5 group-hover:border-secondary transition-all">
                                    <div className="w-12 h-12 bg-dark text-white flex items-center justify-center font-bold text-xl group-hover:bg-secondary group-hover:text-dark transition-all">A</div>
                                </div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-dark/30 mb-4 font-inter">
                                    {new Date(post.date).toLocaleDateString(lang, { day: '2-digit', month: 'short', year: 'numeric' })}
                                </p>
                                <h3 className="text-2xl font-outfit font-bold mb-4 tracking-tight group-hover:text-secondary transition-colors">
                                    {post.title[lang]}
                                </h3>
                                <p className="text-dark/50 text-sm leading-relaxed font-inter line-clamp-3 mb-6">
                                    {post.excerpt[lang as 'pt' | 'en']}
                                </p>
                                <div className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    {lang === "pt" ? "Ler artigo" : "Read Article"}
                                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </Section>

            {/* Subscription */}
            <Section className="bg-premium-dark text-white border-t border-white/5 py-32">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-outfit font-bold mb-6 tracking-tight uppercase">
                        {lang === "pt" ? "Inscreva-se na nossa newsletter executiva" : "Subscribe to our executive newsletter"}
                    </h2>
                    <p className="text-white/40 mb-10 font-inter">
                        {lang === "pt"
                            ? "Receba mensalmente insights estratégicos sobre gestão de TI e segurança."
                            : "Receive monthly strategic insights on IT management and security."
                        }
                    </p>
                    <form className="flex gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="Seu email corporativo" className="flex-grow bg-white/5 border border-white/10 px-6 py-4 text-sm focus:border-secondary outline-none transition-all" />
                        <button className="bg-secondary text-dark font-bold px-8 uppercase tracking-widest text-xs hover:brightness-110 transition-all">
                            OK
                        </button>
                    </form>
                </div>
            </Section>
        </main>
    );
}
