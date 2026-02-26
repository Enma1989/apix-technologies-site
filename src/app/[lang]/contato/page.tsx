import { Locale } from "@/config/siteConfig";
import { ContactForm } from "@/components/contact/ContactForm";
import Image from "next/image";

const content = {
    pt: {
        headline: "Vamos agendar seu diagnóstico estratégico.",
        subheadline: "60 minutos para mapear riscos críticos e estruturar um plano claro e objetivo para sua TI evoluir com segurança.",
        howItWorks: "Como funciona",
        steps: [
            {
                num: "01",
                title: "Reunião técnica inicial (60 min)",
                desc: "Alinhamento de expectativas e entendimento do modelo de negócio."
            },
            {
                num: "02",
                title: "Coleta estruturada de informações",
                desc: "Análise profunda de infraestrutura, segurança e processos."
            },
            {
                num: "03",
                title: "Análise interna e priorização",
                desc: "Identificação de riscos críticos e definição de urgências."
            },
            {
                num: "04",
                title: "Entrega do relatório executivo",
                desc: "Apresentação do roadmap estratégico e próximos passos."
            }
        ]
    },
    en: {
        headline: "Let's schedule your strategic diagnosis.",
        subheadline: "60 minutes to map critical risks and structure a clear and objective plan for your IT to evolve securely.",
        howItWorks: "How it works",
        steps: [
            {
                num: "01",
                title: "Initial technical meeting (60 min)",
                desc: "Alignment of expectations and understanding of the business model."
            },
            {
                num: "02",
                title: "Structured information collection",
                desc: "Deep analysis of infrastructure, security, and processes."
            },
            {
                num: "03",
                title: "Internal analysis and prioritization",
                desc: "Identification of critical risks and definition of urgencies."
            },
            {
                num: "04",
                title: "Executive report delivery",
                desc: "Presentation of the strategic roadmap and next steps."
            }
        ]
    },
    es: {
        headline: "Programemos su diagnóstico estratégico.",
        subheadline: "60 minutos para mapear riesgos críticos y estructurar un plan claro y objetivo para que su TI evolucione con seguridad.",
        howItWorks: "Cómo funciona",
        steps: [
            {
                num: "01",
                title: "Reunión técnica inicial (60 min)",
                desc: "Alineación de expectativas y comprensión do modelo de negocio."
            },
            {
                num: "02",
                title: "Recopilación estructurada de información",
                desc: "Análisis profundo de infraestructura, seguridad y procesos."
            },
            {
                num: "03",
                title: "Análisis interno y priorización",
                desc: "Identificación de riesgos críticos y definición de urgencias."
            },
            {
                num: "04",
                title: "Entrega del informe ejecutivo",
                desc: "Presentación del roadmap estratégico y próximos pasos."
            }
        ]
    }
};

export default async function ContactPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;
    const t = content[lang];

    return (
        <main className="min-h-screen bg-white">
            {/* Section: Contact & Diagnosis (Minimalist Executive) */}
            <section className="py-20 lg:py-28 px-6">
                <div className="max-w-[1100px] mx-auto text-center">

                    {/* Part 1: Headline */}
                    <div className="mb-16 lg:mb-20">
                        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 max-w-3xl mx-auto leading-tight">
                            {t.headline}
                        </h1>
                        <p className="text-base md:text-lg text-neutral-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                            {t.subheadline}
                        </p>
                    </div>

                    {/* Part 2: Form Container */}
                    <div className="max-w-2xl mx-auto mt-16 mb-28">
                        <ContactForm lang={lang} />
                    </div>

                    {/* Part 3: How it Works */}
                    <div className="mt-28">
                        <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-neutral-400 mb-12">
                            {t.howItWorks}
                        </h2>

                        <div className="max-w-2xl mx-auto space-y-0 relative">
                            {/* Vertical line connector */}
                            {/* <div className="absolute left-5 top-0 bottom-0 w-px bg-neutral-200 z-0" /> */}

                            <div className="flex flex-col gap-y-12">
                                {t.steps.map((step, idx) => (
                                    <div key={step.num} className="flex items-start gap-8 text-left group">
                                        <div className="relative flex flex-col items-center">
                                            <span className="text-neutral-300 font-semibold w-10 text-lg leading-none z-10 bg-white py-1">
                                                {step.num}
                                            </span>
                                            {idx !== t.steps.length - 1 && (
                                                <div className="w-px h-16 bg-neutral-200 mt-4" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-xl font-medium text-neutral-900 group-hover:text-black transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
