import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Layers3 } from "lucide-react";
import { notFound } from "next/navigation";
import { CommercialHero, Eyebrow, FaqList, FinalCommercialCta, SectionHeading } from "@/components/commercial/CommercialPrimitives";
import { Locale, locales } from "@/config/siteConfig";
import { getCommercialContent } from "@/content/commercial";

const baseUrl = "https://apixtech.com.br";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang: param } = await params;
    const lang = locales.includes(param as Locale) ? param as Locale : "pt";
    const { projects } = getCommercialContent(lang);
    const path = `/${lang}/projetos`;

    return {
        title: projects.metadata.title,
        description: projects.metadata.description,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                "pt-BR": `${baseUrl}/pt/projetos`,
                en: `${baseUrl}/en/projetos`,
                es: `${baseUrl}/es/projetos`,
                "x-default": `${baseUrl}/pt/projetos`,
            },
        },
        openGraph: {
            title: projects.metadata.title,
            description: projects.metadata.description,
            url: `${baseUrl}${path}`,
            images: [{ url: "/images/projects-architecture-hero.png", width: 1800, height: 900 }],
        },
    };
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang: param } = await params;
    if (!locales.includes(param as Locale)) notFound();
    const lang = param as Locale;
    const { projects, shared } = getCommercialContent(lang);
    const whatsappText = encodeURIComponent(
        lang === "pt"
            ? "Olá, gostaria de solicitar um diagnóstico para um projeto de TI com a Apix Technologies."
            : lang === "es"
                ? "Hola, quisiera solicitar un diagnóstico para un proyecto de TI con Apix Technologies."
                : "Hello, I would like to request a diagnostic for an IT project with Apix Technologies."
    );

    return (
        <main className="min-h-screen overflow-x-hidden bg-white">
            <CommercialHero
                eyebrow={projects.hero.eyebrow}
                title={projects.hero.title}
                subtitle={projects.hero.subtitle}
                primary={projects.hero.primary}
                primaryHref={`/${lang}/contato?origem=projetos`}
                secondary={projects.hero.secondary}
                secondaryHref="#catalogo"
                image="/images/projects-architecture-hero.png"
                imageAlt=""
                imageClassName="object-[69%_center] md:object-right"
            />

            <section className="bg-white py-24 md:py-32">
                <div className="container-premium">
                    <SectionHeading eyebrow={projects.benefits.eyebrow} title={projects.benefits.title} intro={projects.benefits.intro} />
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {projects.benefits.items.map((item) => (
                            <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD23F]/20 text-[#8A6800]">
                                    <Check aria-hidden="true" className="h-5 w-5" />
                                </div>
                                <h3 className="font-outfit text-xl font-bold text-slate-950">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="catalogo" className="scroll-mt-24 bg-[#F4F5F6] py-24 md:py-32">
                <div className="container-premium">
                    <SectionHeading eyebrow={projects.catalog.eyebrow} title={projects.catalog.title} intro={projects.catalog.intro} />
                    <div className="grid gap-6 lg:grid-cols-2">
                        {projects.catalog.projects.map((project, index) => (
                            <details key={project.name} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm open:border-[#D4A900] md:p-8">
                                <summary className="cursor-pointer list-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B88900]">
                                    <div className="flex items-start justify-between gap-5">
                                        <div>
                                            <span className="text-xs font-bold tracking-[0.18em] text-[#9A7400]">{String(index + 1).padStart(2, "0")}</span>
                                            <h3 className="mt-3 font-outfit text-2xl font-bold leading-tight text-slate-950">{project.name}</h3>
                                            <p className="mt-4 leading-relaxed text-slate-600">{project.problem}</p>
                                        </div>
                                        <span aria-hidden="true" className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-2xl text-[#9A7400] transition group-open:rotate-45 group-open:border-[#D4A900]">+</span>
                                    </div>
                                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-bold text-white"><Layers3 aria-hidden="true" className="h-4 w-4 text-[#FFD23F]" />{project.layer}</span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{projects.catalog.expand}</span>
                                    </div>
                                </summary>
                                <div className="mt-7 border-t border-slate-200 pt-7">
                                    <div className="grid gap-7 sm:grid-cols-2">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{projects.catalog.audience}</h4>
                                            <p className="mt-3 leading-relaxed text-slate-700">{project.audience}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{projects.catalog.deliverables}</h4>
                                            <ul className="mt-3 space-y-2">
                                                {project.deliverables.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#9A7400]" />{item}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    {project.note ? <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-slate-700">{project.note}</p> : null}
                                    <div className="mt-7 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                        <p className="text-xs text-slate-500">{shared.scopeNote}</p>
                                        <Link href={`/${lang}/contato?projeto=${encodeURIComponent(project.name)}`} className="inline-flex shrink-0 items-center gap-2 font-bold text-slate-950 underline decoration-[#FFD23F] decoration-2 underline-offset-4 hover:text-[#8A6800] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B88900]">
                                            {shared.talkProject}<ChevronRight aria-hidden="true" className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0B0F14] py-24 text-white md:py-32">
                <div className="container-premium">
                    <SectionHeading eyebrow={projects.layers.eyebrow} title={projects.layers.title} intro={projects.layers.intro} dark />
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {projects.layers.items.map((layer, index) => (
                            <article key={layer.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                                <span className="text-sm font-bold text-[#FFD23F]">0{index + 1}</span>
                                <h3 className="mt-4 font-outfit text-xl font-bold">{layer.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-400">{layer.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-24 md:py-32">
                <div className="container-premium">
                    <SectionHeading eyebrow={projects.process.eyebrow} title={projects.process.title} />
                    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {projects.process.items.map((item, index) => (
                            <li key={item.title} className="rounded-2xl border border-slate-200 p-7">
                                <span className="text-3xl font-bold text-[#D4A900]">{String(index + 1).padStart(2, "0")}</span>
                                <h3 className="mt-5 font-outfit text-xl font-bold text-slate-950">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="bg-[#F4F5F6] py-24 md:py-32">
                <div className="container-premium grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                    <SectionHeading eyebrow={projects.deliverables.eyebrow} title={projects.deliverables.title} intro={projects.deliverables.intro} />
                    <div className="rounded-3xl bg-slate-950 p-7 text-white md:p-10">
                        <ul className="grid gap-4 sm:grid-cols-2">
                            {projects.deliverables.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-200"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#FFD23F]" />{item}</li>)}
                        </ul>
                        <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-slate-400">{projects.deliverables.note}</p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-24 md:py-32">
                <div className="container-premium">
                    <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#fff_0%,#f6f3e7_100%)] p-8 md:p-14">
                        <Eyebrow>{projects.continuity.eyebrow}</Eyebrow>
                        <h2 className="max-w-3xl font-outfit text-3xl font-bold text-slate-950 md:text-5xl">{projects.continuity.title}</h2>
                        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{projects.continuity.text}</p>
                        <Link href={`/${lang}/servicos/suporte-tecnico`} className="mt-8 inline-flex items-center gap-2 font-bold text-slate-950 underline decoration-[#FFD23F] decoration-2 underline-offset-4 hover:text-[#8A6800]">{projects.continuity.link}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
                    </div>
                </div>
            </section>

            <section className="bg-[#F4F5F6] py-24 md:py-32">
                <div className="container-premium">
                    <SectionHeading eyebrow={projects.faq.eyebrow} title={projects.faq.title} centered />
                    <FaqList items={projects.faq.items} />
                </div>
            </section>

            <FinalCommercialCta title={projects.final.title} text={projects.final.text} primary={projects.final.primary} primaryHref={`/${lang}/contato?origem=projetos`} secondary={projects.final.secondary} secondaryHref={`https://wa.me/5541991934437?text=${whatsappText}`} />
        </main>
    );
}

