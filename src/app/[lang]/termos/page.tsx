import { Locale } from "@/config/siteConfig";
import Image from "next/image";

export default async function TermsPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;

    const content = {
        pt: {
            title: "Termos de Uso",
            subtitle: "Versão: 1.0 | Última atualização: 26 de fevereiro de 2026",
            intro: "Estes Termos de Uso regulam o acesso e utilização do site da Apix Technologies. Ao acessar ou utilizar este site, você declara que leu, compreendeu e concorda integralmente com as condições abaixo.",
            sections: [
                {
                    title: "1. Aceitação dos Termos",
                    text: "O acesso implica na **aceitação plena** destes termos. A Apix Technologies poderá atualizar estas disposições a qualquer momento, sendo *responsabilidade do usuário* consultá-las periodicamente."
                },
                {
                    title: "2. Uso do Site",
                    text: "O conteúdo é informativo e institucional. É **expressamente proibido** o uso para fins ilícitos, tentativas de acesso não autorizado, interferência no funcionamento ou *cópia de conteúdo* sem autorização formal."
                },
                {
                    title: "3. Propriedade Intelectual",
                    text: "Todo o conteúdo, incluindo marca, logo, identidade visual, textos e imagens, é de **propriedade exclusiva da Apix Technologies**, sendo protegida por leis nacionais e internacionais de direitos autorais."
                },
                {
                    title: "4. Links para Terceiros",
                    text: "Podemos fornecer links para sites externos para sua conveniência. No entanto, **não possuímos controle** nem nos responsabilizamos por conteúdos, políticas ou práticas de sites de terceiros."
                },
                {
                    title: "5. Isenção de Garantias",
                    text: "As informações são fornecidas *'como estão'*. **Não garantimos** atualização contínua, ausência de erros técnicos ou disponibilidade ininterrupta da plataforma no ar."
                },
                {
                    title: "6. Limitação de Responsabilidade",
                    text: "O uso é de **inteira responsabilidade do usuário**. Não seremos responsáveis por danos decorrentes do uso do site, perda de dados ou *falhas técnicas* fora de nosso controle razoável."
                },
                {
                    title: "7. Lei Aplicável e Foro",
                    text: "Estes Termos são regidos pelas leis da **República Federativa do Brasil**, sendo eleito o foro da comarca de domicílio da Apix Technologies para dirimir controvérsias."
                },
                {
                    title: "8. Contato",
                    text: "Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: **contato@apixtech.com.br**"
                }
            ]
        },
        en: {
            title: "Terms of Use",
            subtitle: "Version: 1.0 | Last updated: February 26, 2026",
            intro: "These Terms of Use govern the access and use of the Apix Technologies website. By accessing or using this site, you declare that you have read, understood, and fully agree to the conditions below.",
            sections: [
                {
                    title: "1. Acceptance of Terms",
                    text: "Access implies **full acceptance** of these terms. Apix Technologies may update these provisions at any time, and it is the *user's responsibility* to consult them periodically."
                },
                {
                    title: "2. Use of the Site",
                    text: "The content is informative and institutional. Use for illegal purposes, unauthorized access attempts, interference with functioning, or **copying content** without formal authorization is **strictly prohibited**."
                },
                {
                    title: "3. Intellectual Property",
                    text: "All content, including brand, logo, visual identity, texts, and images, is the **exclusive property of Apix Technologies**, protected by copyright laws."
                },
                {
                    title: "4. Third-Party Links",
                    text: "We may provide links to external sites for your convenience. However, we have **no control over** and are not responsible for the content, policies, or practices of third-party sites."
                },
                {
                    title: "5. Disclaimer of Warranties",
                    text: "Information is provided *'as is'*. **We do not guarantee** continuous updates, absence of technical errors, or uninterrupted availability of the platform."
                },
                {
                    title: "6. Limitation of Liability",
                    text: "Use is the **sole responsibility of the user**. We will not be liable for damages arising from the use of the site, loss of data, or technical failures outside our control."
                },
                {
                    title: "7. Applicable Law and Jurisdiction",
                    text: "These Terms are governed by the laws of the **Federative Republic of Brazil**, with the jurisdiction of Apix Technologies' domicile elected to resolve controversies."
                },
                {
                    title: "8. Contact",
                    text: "For questions about these Terms of Use, contact us by email: **contato@apixtech.com.br**"
                }
            ]
        },
        es: {
            title: "Términos de Uso",
            subtitle: "Versión: 1.0 | Última actualización: 26 de febrero de 2026",
            intro: "Estos Términos de Uso regulan el acceso y uso del sitio web de Apix Technologies. Al acceder o utilizar este sitio, usted declara que ha leído, comprendido y acepta plenamente las condiciones a continuación.",
            sections: [
                {
                    title: "1. Aceptación de los Términos",
                    text: "El acceso implica la **aceptación plena** de estos términos. Apix Technologies podrá actualizar estas disposiciones en cualquier momento, siendo *responsabilidad del usuario* consultarlas periódicamente."
                },
                {
                    title: "2. Uso del Sitio",
                    text: "El contenido es informativo e institucional. Está **expresamente prohibido** el uso para fines ilícitos, intentos de acceso no autorizado, interferencia en el funcionamiento o copia de contenido sin autorización formal."
                },
                {
                    title: "3. Propiedad Intelectual",
                    text: "Todo el contenido, incluyendo marca, logo, identidad visual, textos e imágenes, es **propiedad exclusiva de Apix Technologies**, estando protegida por las leyes de derechos de autor."
                },
                {
                    title: "4. Enlaces a Terceros",
                    text: "Podemos proporcionar enlaces a sitios externos para su conveniencia. Sin embargo, **no tenemos control** ni nos responsabilizamos por contenidos, políticas o prácticas de sitios de terceros."
                },
                {
                    title: "5. Exención de Garantías",
                    text: "La información se proporciona *'tal cual'*. **No garantizamos** la actualización continua, la ausencia de errores técnicos o la disponibilidad ininterrumpida de la plataforma."
                },
                {
                    title: "6. Limitación de Responsabilidad",
                    text: "El uso es **responsabilidad exclusiva del usuario**. No seremos responsables por daños derivados del uso del sitio, pérdida de datos o fallas técnicas fuera de nuestro control."
                },
                {
                    title: "7. Ley Aplicable y Jurisdicción",
                    text: "Estos Términos se rigen por las leyes de la **República Federativa de Brasil**, eligiéndose el foro de la comarca del domicilio de Apix Technologies para dirimir controversias."
                },
                {
                    title: "8. Contacto",
                    text: "Para dudas sobre estos Términos de Uso, contacte por correo electrónico: **contato@apixtech.com.br**"
                }
            ]
        }
    }

    const t = content[lang] || content.pt;

    return (
        <main className="min-h-screen bg-premium-dark pt-32 pb-20">
            <div className="container-premium max-w-5xl">
                {/* Document Header */}
                <div className="bg-premium-white p-8 md:p-16 rounded-t-[2.5rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-12 bg-secondary" />
                            <span className="text-secondary font-outfit font-bold uppercase tracking-[0.3em] text-xs">Apix Document Official</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-outfit font-bold text-dark mb-6 tracking-tight">
                            {t.title}
                        </h1>
                        <p className="text-dark/40 font-inter text-sm md:text-base uppercase tracking-widest font-bold">
                            {t.subtitle}
                        </p>
                    </div>
                </div>

                {/* Document Body */}
                <div className="bg-[#FCFCFC] p-8 md:p-16 border-x border-dark/5 relative text-dark">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-slate max-w-none">
                            <p className="text-[#333333] text-lg md:text-xl mb-16 leading-relaxed font-inter italic border-l-4 border-secondary/30 pl-8 bg-secondary/[0.02] py-6 rounded-r-xl">
                                {t.intro}
                            </p>

                            <div className="space-y-16">
                                {t.sections.map((section, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="absolute -left-8 top-0 bottom-0 w-px bg-dark/5 group-hover:bg-secondary/30 transition-colors" />
                                        <h2 className="text-2xl font-outfit font-bold mb-6 text-[#111111] tracking-tight flex items-center gap-4">
                                            <span className="text-secondary/20 text-4xl font-black tabular-nums">0{idx + 1}</span>
                                            {section.title.split('. ')[1] || section.title}
                                        </h2>
                                        <div
                                            className="text-[#333333] font-inter leading-relaxed text-base md:text-lg"
                                            dangerouslySetInnerHTML={{ __html: section.text.replace(/\*\*(.*?)\*\*/g, '<b class="text-[#111111] font-bold font-outfit">$1</b>').replace(/\*(.*?)\*/g, '<i class="text-[#222222] font-medium">$1</i>') }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Document Footer */}
                <div className="bg-premium-white p-8 md:p-12 rounded-b-[2.5rem] border-t border-dark/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 relative flex shrink-0 items-center justify-center bg-dark/5 rounded-xl">
                            <Image
                                src="/images/APIX-08.png"
                                alt="Apix Compliance"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-dark font-outfit font-bold text-sm uppercase tracking-wider">Validado por Apix Compliance</p>
                            <p className="text-dark/40 text-xs font-inter max-w-[240px]">Este documento tem validade digital e jurídica para todos os fins.</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-dark/30 text-[10px] font-inter uppercase tracking-[0.2em]">© 2026 Apix Technologies - Todos os direitos reservados</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
