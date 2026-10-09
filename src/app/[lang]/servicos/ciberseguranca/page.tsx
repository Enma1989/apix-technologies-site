import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, TriangleAlert } from "lucide-react";
import { notFound } from "next/navigation";
import { CommercialHero, FaqList, FinalCommercialCta, SectionHeading } from "@/components/commercial/CommercialPrimitives";
import { Locale, locales } from "@/config/siteConfig";
import { getCommercialContent } from "@/content/commercial";

const baseUrl = "https://apixtech.com.br";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang: param } = await params;
    const lang = locales.includes(param as Locale) ? param as Locale : "pt";
    const { security } = getCommercialContent(lang);
    const path = `/${lang}/servicos/ciberseguranca`;

    return {
        title: security.metadata.title,
        description: security.metadata.description,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                "pt-BR": `${baseUrl}/pt/servicos/ciberseguranca`,
                en: `${baseUrl}/en/servicos/ciberseguranca`,
                es: `${baseUrl}/es/servicos/ciberseguranca`,
                "x-default": `${baseUrl}/pt/servicos/ciberseguranca`,
            },
        },
        openGraph: {
            title: security.metadata.title,
            description: security.metadata.description,
            url: `${baseUrl}${path}`,
            images: [{ url: "/images/security-threat-map-hero.png", width: 1800, height: 900 }],
        },
    };
}

export default async function InformationSecurityPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang: param } = await params;
    if (!locales.includes(param as Locale)) notFound();
    const lang = param as Locale;
    const { security, shared } = getCommercialContent(lang);
    const whatsappText = encodeURIComponent(
        lang === "pt"
            ? "Olá, gostaria de solicitar uma avaliação de Segurança da Informação com a Apix Technologies."
            : lang === "es"
                ? "Hola, quisiera solicitar una evaluación de Seguridad de la Información con Apix Technologies."
                : "Hello, I would like to request an Information Security assessment with Apix Technologies."
    );

    return (
        <main className="min-h-screen overflow-x-hidden bg-white">
            <CommercialHero
                eyebrow={security.hero.eyebrow}
                title={security.hero.title}
                subtitle={security.hero.subtitle}
                primary={security.hero.primary}
                primaryHref={`/${lang}/contato?origem=seguranca-da-informacao`}
                secondary={security.hero.secondary}
                secondaryHref="#frentes"
                image="/images/security-threat-map-hero.png"
                imageAlt=""
                imageClassName="object-right"
            />

            <section className="bg-white py-24 md:py-32">
                <div className="container-premium">
                    <SectionHeading eyebrow={security.risks.eyebrow} title={security.risks.title} intro={security.risks.intro} />
                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {security.risks.items.map((risk) => (
                            <li key={risk} className="flex min-h-24 items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 font-medium text-slate-800">
                                <TriangleAlert aria-hidden="true" className="h-5 w-5 shrink-0 text-[#A77D00]" />
                                {risk}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="frentes" className="scroll-mt-24 bg-[#F4F5F6] py-24 md:py-32">
                <div className="container-premium">
                    <SectionHeading eyebrow={security.practices.eyebrow} title={security.practices.title} intro={security.practices.intro} />
                    <div className="grid gap-6 lg:grid-cols-2">
                        {security.practices.items.map((practice, index) => (
                            <article key={practice.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
                                <div className="flex items-start gap-4">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-[#FFD23F]">{String(index + 1).padStart(2, "0")}</span>
                                    <h3 className="font-outfit text-2xl font-bold leading-tight text-slate-950">{practice.title}</h3>
                                </div>
                                <div className="mt-7 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">{security.practices.problem}</h4>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-700">{practice.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">{security.practices.possible}</h4>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-700">{practice.deliverables}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0B0F14] py-24 text-white md:py-32">
                <div className="container-premium">
                    <SectionHeading eyebrow={security.method.eyebrow} title={security.method.title} intro={security.method.intro} dark />
                    <ol className="grid gap-3 md:grid-cols-5">
                        {security.method.steps.map((step, index) => (
                            <li key={step} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                <span className="text-sm font-bold text-[#FFD23F]">0{index + 1}</span>
                                <p className="mt-3 font-outfit font-bold text-white">{step}</p>
                                {index < security.method.steps.length - 1 ? <ArrowRight aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-[#FFD23F] md:block" /> : null}
                            </li>
                        ))}
                    </ol>
                    <h3 className="mt-16 font-outfit text-2xl font-bold">{security.method.layersTitle}</h3>
                    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {security.method.layers.map((layer) => (
                            <article key={layer.title} className="rounded-2xl border border-white/10 p-6">
                                <ShieldCheck aria-hidden="true" className="h-6 w-6 text-[#FFD23F]" />
                                <h4 className="mt-5 font-outfit text-lg font-bold">{layer.title}</h4>
                                <p className="mt-3 text-sm leading-relaxed text-slate-400">{layer.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-24 md:py-32">
                <div className="container-premium grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
                    <SectionHeading eyebrow={security.evidence.eyebrow} title={security.evidence.title} intro={security.evidence.intro} />
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 md:p-10">
                        <ul className="grid gap-4 sm:grid-cols-2">
                            {security.evidence.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#9A7400]" />{item}</li>)}
                        </ul>
                        <p className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-slate-700">{security.evidence.note}</p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F4F5F6] py-24 md:py-32">
                <div className="container-premium">
                    <SectionHeading eyebrow={security.engagement.eyebrow} title={security.engagement.title} centered />
                    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                        <article className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A7400]">01</span>
                            <h3 className="mt-4 font-outfit text-3xl font-bold text-slate-950">{security.engagement.projectTitle}</h3>
                            <p className="mt-5 leading-relaxed text-slate-600">{security.engagement.projectText}</p>
                            <Link href={`/${lang}/projetos`} className="mt-7 inline-flex items-center gap-2 font-bold text-slate-950 underline decoration-[#FFD23F] decoration-2 underline-offset-4 hover:text-[#8A6800]">{shared.projects}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
                        </article>
                        <article className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFD23F]">02</span>
                            <h3 className="mt-4 font-outfit text-3xl font-bold">{security.engagement.continuousTitle}</h3>
                            <p className="mt-5 leading-relaxed text-slate-300">{security.engagement.continuousText}</p>
                            <Link href={`/${lang}/servicos/suporte-tecnico`} className="mt-7 inline-flex items-center gap-2 font-bold text-white underline decoration-[#FFD23F] decoration-2 underline-offset-4 hover:text-[#FFD23F]">{shared.optionalContinuity}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
                        </article>
                    </div>
                    <p className="mx-auto mt-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600">{security.engagement.automationNote}</p>
                </div>
            </section>

            <section className="bg-white py-24 md:py-32">
                <div className="container-premium">
                    <SectionHeading eyebrow={security.faq.eyebrow} title={security.faq.title} centered />
                    <FaqList items={security.faq.items} />
                </div>
            </section>

            <FinalCommercialCta title={security.final.title} text={security.final.text} primary={security.final.primary} primaryHref={`/${lang}/contato?origem=seguranca-da-informacao`} secondary={security.final.secondary} secondaryHref={`https://wa.me/5541991934437?text=${whatsappText}`} />
        </main>
    );
}

