import { notFound } from "next/navigation";
import { Locale, siteConfig, locales } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";

// Mock data for static params
export async function generateStaticParams() {
    const posts = ["governança-de-ti-em-medias-empresas", "mitigacao-de-riscos-em-infraestrutura", "custo-inteligente-nuvem-vs-on-premise"];
    const params: { lang: Locale; slug: string }[] = [];

    locales.forEach((lang) => {
        posts.forEach((slug) => {
            params.push({ lang, slug });
        });
    });

    return params;
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const { lang: langParam, slug } = await params;
    const lang = langParam as Locale;

    // In a real app, this would fetch from a CMS or local MDX files
    const post = {
        title: {
            pt: "Governança de TI: O pilar esquecido em médias empresas.",
            en: "IT Governance: The forgotten pillar in medium-sized companies.",
            es: "Gobernanza de TI: El pilar olvidado en las medianas empresas."
        },
        date: "2026-02-15",
        author: "Apix Engineering"
    };

    return (
        <main className="min-h-screen bg-premium-dark">
            {/* Article Hero */}
            <section className="pt-40 pb-32 bg-premium-dark text-white border-b border-white/5 relative">
                <div className="container-premium relative z-10">
                    <Link
                        href={`/${lang}/blog`}
                        className="text-secondary text-xs font-bold uppercase tracking-widest mb-12 inline-block hover:opacity-70 transition-all"
                    >
                        ← {lang === "pt" ? "Voltar ao blog" : "Back to blog"}
                    </Link>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4 font-inter">
                        {new Date(post.date).toLocaleDateString(lang, { day: '2-digit', month: 'short', year: 'numeric' })} • {post.author}
                    </p>
                    <h1 className="text-3xl md:text-6xl font-outfit font-bold mb-8 max-w-4xl tracking-tight leading-tight">
                        {post.title[lang as 'pt' | 'en' | 'es']}
                    </h1>
                </div>
            </section>

            {/* Article Content */}
            <Section className="bg-premium-white text-dark">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none font-inter text-dark/70 leading-relaxed">
                        <p className="text-xl text-dark font-medium mb-8">
                            {lang === "pt"
                                ? "Este artigo explora como a falta de uma estrutura de governança clara costuma ser o maior risco invisível para empresas em fase de expansão."
                                : "This article explores how the lack of a clear governance structure is often the biggest invisible risk for expanding companies."
                            }
                        </p>

                        <h2 className="text-2xl font-outfit font-bold text-dark mt-12 mb-6 uppercase tracking-tight">O que é Governança Técnica?</h2>
                        <p className="mb-6">
                            Muitas empresas confundem suporte técnico com governança. Enquanto o suporte reativo resolve problemas imediatos, a governança estabelece as regras de como a tecnologia deve servir ao negócio no longo prazo.
                        </p>

                        <div className="bg-dark/5 p-8 border-l-4 border-secondary my-12 italic">
                            &quot;A tecnologia deve ser previsível. Se a sua TI é uma surpresa constante, você não tem uma operação; você tem uma aposta.&quot;
                        </div>

                        <h2 className="text-2xl font-outfit font-bold text-dark mt-12 mb-6 uppercase tracking-tight">Riscos da Falta de Padrões</h2>
                        <p className="mb-6">
                            Sem documentação e métricas claras, cada mudança na infraestrutura torna-se um risco potencial. A continuidade operacional depende de processos que não dependem de uma única pessoa, mas sim de uma arquitetura sólida.
                        </p>
                    </div>

                    {/* Share / Tags section */}
                    <div className="mt-20 pt-10 border-t border-dark/5 flex justify-between items-center text-xs uppercase tracking-widest font-bold text-dark/30">
                        <div>#Infrastructure #Governance</div>
                        <button className="text-secondary hover:text-dark transition-colors">Share Article</button>
                    </div>
                </div>
            </Section>

            {/* CTA Band */}
            <Section className="bg-premium-dark text-white py-32 text-center">
                <h2 className="text-3xl font-outfit font-bold mb-8 max-w-2xl mx-auto uppercase tracking-tight">
                    {lang === "pt" ? "Sua TI está sob controle estratégico?" : "Is your IT under strategic control?"}
                </h2>
                <button className="bg-secondary text-dark font-bold py-4 px-10 rounded-sm hover:-translate-y-1 transition-all uppercase tracking-widest text-xs">
                    {siteConfig.home.hero.primaryCTA[lang]}
                </button>
            </Section>
        </main>
    );
}
