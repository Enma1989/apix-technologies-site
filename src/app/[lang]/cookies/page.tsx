import { Locale } from "@/config/siteConfig";
import Image from "next/image";

export default async function CookiesPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;

    const content = {
        pt: {
            title: "Política de Cookies",
            subtitle: "Versão: 1.0 | Última atualização: 26 de fevereiro de 2026",
            intro: "A presente Política de Cookies explica como a Apix Technologies utiliza cookies e tecnologias similares em seu site, em conformidade com a Lei Geral de Proteção de Dados (LGPD). Ao continuar navegando, você concorda com o uso de cookies conforme descrito aqui.",
            sections: [
                {
                    title: "1. O que são Cookies?",
                    text: "Cookies são pequenos arquivos de texto armazenados em seu dispositivo que permitem **reconhecer preferências**, melhorar a experiência de navegação e coletar *estatísticas de uso* da plataforma."
                },
                {
                    title: "2. Como utilizamos os Cookies?",
                    text: "Utilizamos cookies para **garantir o funcionamento adequado**, melhorar o desempenho, memorizar preferências e reforçar a segurança. *Não vendemos nem comercializamos* seus dados pessoais."
                },
                {
                    title: "3. Tipos de Cookies Utilizados",
                    text: "Utilizamos **Cookies Necessários** (essenciais para o site), *Cookies de Análise* (como Google Analytics para dados estatísticos anônimos) e Cookies de Funcionalidade (idioma, região, preferências)."
                },
                {
                    title: "4. Base Legal para Uso",
                    text: "O tratamento ocorre com base no **legítimo interesse** (cookies necessários) ou no *consentimento do usuário* (cookies não essenciais), que pode ser revogado a qualquer momento."
                },
                {
                    title: "5. Como Gerenciar os Cookies?",
                    text: "Você pode **controlar, bloquear ou excluir cookies** nas configurações do seu navegador (Chrome, Firefox, Edge, Safari). O bloqueio de cookies pode *afetar algumas funcionalidades* do site."
                },
                {
                    title: "6. Alterações nesta Política",
                    text: "Esta política poderá ser **atualizada periodicamente**. Recomendamos que você revise esta página regularmente para acompanhar eventuais alterações em nossas práticas de privacidade."
                },
                {
                    title: "7. Contato",
                    text: "Para dúvidas relacionadas ao uso de cookies ou ao tratamento de dados pessoais, entre em contato com nosso DPO pelo e-mail: **dpo@apixtech.com.br**"
                }
            ]
        },
        en: {
            title: "Cookies Policy",
            subtitle: "Version: 1.0 | Last updated: February 26, 2026",
            intro: "This Cookies Policy explains how Apix Technologies uses cookies and similar technologies on its website, in compliance with the General Data Protection Law (LGPD). By continuing to browse, you agree to the use of cookies as described here.",
            sections: [
                {
                    title: "1. What are Cookies?",
                    text: "Cookies are small text files stored on your device that allow **recognizing preferences**, improving browsing experience, and collecting platform *usage statistics*."
                },
                {
                    title: "2. How do we use Cookies?",
                    text: "We use cookies to **ensure proper operation**, improve performance, memorize preferences, and enhance security. *We do not sell or trade* your personal data."
                },
                {
                    title: "3. Types of Cookies Used",
                    text: "We use **Necessary Cookies** (essential for the site), *Analytical Cookies* (such as Google Analytics for anonymous statistical data), and Functionality Cookies (language, region, preferences)."
                },
                {
                    title: "4. Legal Basis for Use",
                    text: "The processing occurs based on **legitimate interest** (necessary cookies) or *user consent* (non-essential cookies), which can be revoked at any time."
                },
                {
                    title: "5. How to Manage Cookies?",
                    text: "You can **control, block, or delete cookies** in your browser settings (Chrome, Firefox, Edge, Safari). Blocking cookies may *affect some site functionalities*."
                },
                {
                    title: "6. Changes to this Policy",
                    text: "This policy may be **updated periodically**. We recommend that you review this page regularly to keep track of any changes in our privacy practices."
                },
                {
                    title: "7. Contact",
                    text: "For questions related to the use of cookies or processing of personal data, contact our DPO by email: **dpo@apixtech.com.br**"
                }
            ]
        },
        es: {
            title: "Política de Cookies",
            subtitle: "Versión: 1.0 | Última actualización: 26 de febrero de 2026",
            intro: "Esta Política de Cookies explica cómo Apix Technologies utiliza cookies e tecnologías similares en su sitio web, de conformidad con la Ley General de Protección de Datos (LGPD). Al continuar navegando, usted acepta el uso de cookies como se describe aquí.",
            sections: [
                {
                    title: "1. ¿Qué son as Cookies?",
                    text: "Las cookies son pequeños archivos de texto almacenados en su dispositivo que permiten **reconocer preferencias**, mejorar la experiencia de navegación y recopilar *estadísticas de uso* de la plataforma."
                },
                {
                    title: "2. ¿Cómo utilizamos as Cookies?",
                    text: "Utilizamos cookies para **garantizar el funcionamiento adecuado**, mejorar el rendimiento, memorizar preferencias y reforzar la seguridad. *No vendemos ni comercializamos* sus datos personales."
                },
                {
                    title: "3. Tipos de Cookies Utilizadas",
                    text: "Utilizamos **Cookies Necesarias** (esenciales para el sitio), *Cookies de Análisis* (como Google Analytics para datos estadísticos anónimos) y Cookies de Funcionalidad (idioma, región, preferencias)."
                },
                {
                    title: "4. Base Legal para el Uso",
                    text: "El tratamiento ocurre sobre la base del **interés legítimo** (cookies necesarias) o del *consentimiento del usuario* (cookies no esenciales), el cual puede ser revocado en cualquier momento."
                },
                {
                    title: "5. ¿Cómo Administrar as Cookies?",
                    text: "Puede **controlar, bloquear o eliminar cookies** en la configuración de su navegador (Chrome, Firefox, Edge, Safari). El bloqueo de cookies puede *afectar algunas funcionalidades* del sitio."
                },
                {
                    title: "6. Cambios en esta Política",
                    text: "Esta política podrá **actualizarse periódicamente**. Le recomendamos revisar esta página regularmente para estar al tanto de eventuales cambios en nuestras prácticas de privacidad."
                },
                {
                    title: "7. Contacto",
                    text: "Para dudas relacionadas con el uso de cookies o el tratamiento de datos personales, contacte a nuestro DPO por correo electrónico: **dpo@apixtech.com.br**"
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
