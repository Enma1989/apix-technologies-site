import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, ShieldCheck } from "lucide-react";
import { Locale } from "@/config/siteConfig";
import { getCommercialContent } from "@/content/commercial";

const copy = {
    pt: {
        eyebrow: "Duas formas de avançar",
        title: "Projeto definido ou segurança estruturada",
        intro: "Comece por uma necessidade específica e conecte a entrega à governança MaaS®.",
        projects: "Implemente melhorias de infraestrutura, nuvem e segurança com escopo, documentação e critérios de aceitação.",
        security: "Organize riscos, controles e evidências para proteger identidades, dispositivos e dados.",
        action: "Conhecer oferta",
    },
    en: {
        eyebrow: "Two ways to move forward",
        title: "A defined project or structured security",
        intro: "Start with a specific need and connect the delivery to MaaS® governance.",
        projects: "Implement infrastructure, cloud, and security improvements with scope, documentation, and acceptance criteria.",
        security: "Organize risks, controls, and evidence to protect identities, devices, and data.",
        action: "Explore offer",
    },
    es: {
        eyebrow: "Dos formas de avanzar",
        title: "Un proyecto definido o seguridad estructurada",
        intro: "Comienza con una necesidad específica y conecta la entrega con la gobernanza MaaS®.",
        projects: "Implementa mejoras de infraestructura, nube y seguridad con alcance, documentación y criterios de aceptación.",
        security: "Organiza riesgos, controles y evidencias para proteger identidades, dispositivos y datos.",
        action: "Conocer oferta",
    },
};

export default function CommercialOffers({ lang }: { lang: Locale }) {
    const text = copy[lang];
    const { shared } = getCommercialContent(lang);
    const cards = [
        { title: shared.projects, body: text.projects, href: `/${lang}/projetos`, icon: BriefcaseBusiness },
        { title: shared.security, body: text.security, href: `/${lang}/servicos/ciberseguranca`, icon: ShieldCheck },
    ];

    return (
        <section className="bg-[#0B0F14] py-24 text-white md:py-32">
            <div className="container-premium">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{text.eyebrow}</p>
                    <h2 className="font-outfit text-3xl font-bold tracking-tight md:text-5xl">{text.title}</h2>
                    <p className="mt-6 text-lg leading-relaxed text-slate-300">{text.intro}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {cards.map(({ title, body, href, icon: Icon }) => (
                        <Link key={href} href={href} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-[#FFD23F]/50 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD23F] md:p-10">
                            <Icon aria-hidden="true" className="h-8 w-8 text-[#FFD23F]" />
                            <h3 className="mt-7 font-outfit text-2xl font-bold md:text-3xl">{title}</h3>
                            <p className="mt-4 max-w-xl leading-relaxed text-slate-300">{body}</p>
                            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#FFD23F]">{text.action}<ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

