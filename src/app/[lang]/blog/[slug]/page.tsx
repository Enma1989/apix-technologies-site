import { notFound } from "next/navigation";
import { Locale, siteConfig, locales } from "@/config/siteConfig";
import { Section } from "@/components/Section";
import Link from "next/link";

type ArticleCopy = {
    intro: string;
    heading1: string;
    paragraph1: string;
    quote: string;
    heading2: string;
    paragraph2: string;
    cta: string;
};

const ui: Record<Locale, { back: string; share: string }> = {
    pt: { back: "Voltar ao blog", share: "Compartilhar artigo" },
    en: { back: "Back to blog", share: "Share article" },
    es: { back: "Volver al blog", share: "Compartir artículo" },
};

const articles: Record<string, Record<Locale, ArticleCopy>> = {
    "governanca-de-ti-pilar-operacional": {
        pt: {
            intro: "A ausência de uma estrutura clara de governança costuma ser um dos maiores riscos invisíveis para empresas em expansão.",
            heading1: "O que é governança técnica?",
            paragraph1: "Governança não é suporte reativo. Ela define responsabilidades, prioridades, padrões e indicadores para que a tecnologia sirva ao negócio de forma previsível.",
            quote: "Tecnologia previsível nasce de processos claros, documentação atualizada e decisões que podem ser auditadas.",
            heading2: "O risco da falta de padrões",
            paragraph2: "Sem documentação e métricas, cada mudança vira um risco. Uma arquitetura governada reduz dependências individuais e sustenta a continuidade operacional.",
            cta: "Sua TI está sob controle estratégico?",
        },
        en: {
            intro: "The absence of a clear governance structure is often one of the largest invisible risks for growing companies.",
            heading1: "What is technical governance?",
            paragraph1: "Governance is not reactive support. It defines responsibilities, priorities, standards, and indicators so technology can serve the business predictably.",
            quote: "Predictable technology comes from clear processes, current documentation, and decisions that can be audited.",
            heading2: "The risk of missing standards",
            paragraph2: "Without documentation and metrics, every change becomes a risk. Governed architecture reduces individual dependencies and supports operational continuity.",
            cta: "Is your IT under strategic control?",
        },
        es: {
            intro: "La ausencia de una estructura clara de gobernanza suele ser uno de los mayores riesgos invisibles para las empresas en crecimiento.",
            heading1: "¿Qué es la gobernanza técnica?",
            paragraph1: "La gobernanza no es soporte reactivo. Define responsabilidades, prioridades, estándares e indicadores para que la tecnología sirva al negocio de forma previsible.",
            quote: "La tecnología previsible nace de procesos claros, documentación actualizada y decisiones que pueden auditarse.",
            heading2: "El riesgo de no tener estándares",
            paragraph2: "Sin documentación ni métricas, cada cambio se convierte en un riesgo. Una arquitectura gobernada reduce dependencias individuales y sostiene la continuidad operativa.",
            cta: "¿Su TI está bajo control estratégico?",
        },
    },
    "rto-nao-e-backup": {
        pt: {
            intro: "Ter cópias dos dados não significa estar preparado para recuperar uma operação dentro do tempo exigido pelo negócio.",
            heading1: "Backup, RTO e RPO são coisas diferentes",
            paragraph1: "O backup preserva dados. O RTO define quanto tempo um serviço pode ficar indisponível; o RPO estabelece quanta informação a empresa pode perder entre cópias.",
            quote: "Uma cópia sem objetivo de recuperação testado é apenas uma expectativa, não um plano de continuidade.",
            heading2: "Recuperação precisa ser comprovada",
            paragraph2: "Testes periódicos, dependências mapeadas e responsáveis definidos transformam arquivos armazenados em uma capacidade real de recuperação.",
            cta: "Seu plano de recuperação funciona quando é necessário?",
        },
        en: {
            intro: "Having copies of data does not mean an operation can be recovered within the timeframe required by the business.",
            heading1: "Backup, RTO, and RPO are different",
            paragraph1: "Backup preserves data. RTO defines how long a service may remain unavailable, while RPO establishes how much information the company can lose between copies.",
            quote: "A copy without a tested recovery objective is only an expectation, not a continuity plan.",
            heading2: "Recovery must be proven",
            paragraph2: "Periodic tests, mapped dependencies, and assigned owners turn stored files into a real recovery capability.",
            cta: "Will your recovery plan work when needed?",
        },
        es: {
            intro: "Tener copias de los datos no significa poder recuperar una operación dentro del plazo que exige el negocio.",
            heading1: "Backup, RTO y RPO son conceptos diferentes",
            paragraph1: "El backup conserva datos. El RTO define cuánto tiempo puede permanecer indisponible un servicio y el RPO establece cuánta información puede perder la empresa entre copias.",
            quote: "Una copia sin un objetivo de recuperación probado es solo una expectativa, no un plan de continuidad.",
            heading2: "La recuperación debe comprobarse",
            paragraph2: "Pruebas periódicas, dependencias mapeadas y responsables definidos convierten los archivos almacenados en una capacidad real de recuperación.",
            cta: "¿Su plan de recuperación funcionará cuando sea necesario?",
        },
    },
    "cloud-vs-on-premise-2026": {
        pt: {
            intro: "A melhor arquitetura não é definida por tendência, mas por risco, desempenho, dependências e custo total de propriedade.",
            heading1: "A decisão não é binária",
            paragraph1: "Nuvem e infraestrutura local resolvem problemas diferentes. Em muitos cenários, uma arquitetura híbrida oferece o melhor equilíbrio entre flexibilidade, controle e continuidade.",
            quote: "Migrar sem medir dependências apenas transfere complexidade — e pode transformar custo técnico em custo financeiro recorrente.",
            heading2: "Compare o custo completo",
            paragraph2: "Licenciamento, conectividade, operação, segurança, recuperação e crescimento devem entrar na mesma análise antes de qualquer decisão arquitetônica.",
            cta: "Sua arquitetura está alinhada ao modelo do negócio?",
        },
        en: {
            intro: "The best architecture is defined not by trends, but by risk, performance, dependencies, and total cost of ownership.",
            heading1: "The decision is not binary",
            paragraph1: "Cloud and on-premises infrastructure solve different problems. In many scenarios, a hybrid architecture offers the best balance of flexibility, control, and continuity.",
            quote: "Migrating without measuring dependencies only moves complexity and may turn technical cost into recurring financial cost.",
            heading2: "Compare the complete cost",
            paragraph2: "Licensing, connectivity, operations, security, recovery, and growth must be included in the same analysis before any architectural decision.",
            cta: "Is your architecture aligned with your business model?",
        },
        es: {
            intro: "La mejor arquitectura no se define por tendencias, sino por el riesgo, el rendimiento, las dependencias y el costo total de propiedad.",
            heading1: "La decisión no es binaria",
            paragraph1: "La nube y la infraestructura local resuelven problemas diferentes. En muchos escenarios, una arquitectura híbrida ofrece el mejor equilibrio entre flexibilidad, control y continuidad.",
            quote: "Migrar sin medir las dependencias solo traslada la complejidad y puede convertir el costo técnico en un costo financiero recurrente.",
            heading2: "Compare el costo completo",
            paragraph2: "Licencias, conectividad, operación, seguridad, recuperación y crecimiento deben formar parte del mismo análisis antes de cualquier decisión arquitectónica.",
            cta: "¿Su arquitectura está alineada con el modelo de negocio?",
        },
    },
};

export async function generateStaticParams() {
    return locales.flatMap((lang) =>
        siteConfig.blogPage.posts.map((post) => ({ lang, slug: post.slug }))
    );
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>;
}) {
    const { lang, slug } = await params;
    const post = siteConfig.blogPage.posts.find((item) => item.slug === slug);
    const content = articles[slug]?.[lang];

    if (!locales.includes(lang) || !post || !content) notFound();

    return (
        <main className="min-h-screen bg-premium-dark">
            <section className="pt-40 pb-32 bg-premium-dark text-white border-b border-white/5 relative">
                <div className="container-premium relative z-10">
                    <Link href={`/${lang}/blog`} className="text-secondary text-xs font-bold uppercase tracking-widest mb-12 inline-block hover:opacity-70 transition-all">
                        ← {ui[lang].back}
                    </Link>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4 font-inter">
                        {post.date[lang]} • Apix Engineering
                    </p>
                    <h1 className="text-3xl md:text-6xl font-outfit font-bold mb-8 max-w-4xl tracking-tight leading-tight">{post.title[lang]}</h1>
                </div>
            </section>

            <Section className="bg-premium-white text-dark">
                <article className="max-w-3xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none font-inter text-dark/70 leading-relaxed">
                        <p className="text-xl text-dark font-medium mb-8">{content.intro}</p>
                        <h2 className="text-2xl font-outfit font-bold text-dark mt-12 mb-6 uppercase tracking-tight">{content.heading1}</h2>
                        <p className="mb-6">{content.paragraph1}</p>
                        <blockquote className="bg-dark/5 p-8 border-l-4 border-secondary my-12 italic">“{content.quote}”</blockquote>
                        <h2 className="text-2xl font-outfit font-bold text-dark mt-12 mb-6 uppercase tracking-tight">{content.heading2}</h2>
                        <p className="mb-6">{content.paragraph2}</p>
                    </div>
                    <div className="mt-20 pt-10 border-t border-dark/5 flex justify-between items-center text-xs uppercase tracking-widest font-bold text-dark/30">
                        <div>#Infrastructure #Governance</div>
                        <span>{ui[lang].share}</span>
                    </div>
                </article>
            </Section>

            <Section className="bg-premium-dark text-white py-32 text-center">
                <h2 className="text-3xl font-outfit font-bold mb-8 max-w-2xl mx-auto uppercase tracking-tight">{content.cta}</h2>
                <Link href={`/${lang}/contato`} className="inline-flex bg-secondary text-dark font-bold py-4 px-10 rounded-sm hover:-translate-y-1 transition-all uppercase tracking-widest text-xs">
                    {siteConfig.home.hero.primaryCTA[lang]}
                </Link>
            </Section>
        </main>
    );
}
