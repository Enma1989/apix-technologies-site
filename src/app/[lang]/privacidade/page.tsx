import { Locale } from "@/config/siteConfig";
import Image from "next/image";

export default async function PrivacyPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;

    const content = {
        pt: {
            title: "Política de Privacidade",
            subtitle: "Versão: 1.0 | Última atualização: 26 de fevereiro de 2026",
            intro: "A Apix Technologies valoriza a privacidade e a proteção dos dados pessoais de seus clientes, parceiros e visitantes. Esta Política de Privacidade descreve de forma transparente como coletamos, utilizamos, armazenamos e compartilhamos informações, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).",
            sections: [
                {
                    title: "1. Dados Coletados",
                    text: "Coletamos apenas os dados *estritamente necessários* para a prestação de nossos serviços de tecnologia, suporte e consultoria. Os dados podem incluir: **Nome completo, E-mail, Telefone, Empresa e Cargo**. Coletamos também informações técnicas como *endereço IP e cookies* para melhoria da experiência."
                },
                {
                    title: "2. Finalidade do Uso dos Dados",
                    text: "Os dados pessoais são utilizados com o objetivo de **prestar serviços com excelência**, gerenciar suporte técnico, enviar comunicações administrativas e, quando autorizado, *informações sobre novas soluções*. Não utilizamos dados para finalidades estranhas ao nosso core business."
                },
                {
                    title: "3. Compartilhamento de Informações",
                    text: "A Apix Technologies **não comercializa dados pessoais**. O compartilhamento só ocorre com parceiros estratégicos necessários para a execução dos serviços (ex: provedores de nuvem), sob *estritos contratos de confidencialidade*, ou por obrigação legal."
                },
                {
                    title: "4. Segurança e Armazenamento",
                    text: "Adotamos as **melhores práticas de segurança da informação**, incluindo criptografia e controle de acesso rigoroso. Os dados são armazenados em ambientes seguros e retidos apenas pelo tempo necessário para cumprir as finalidades descritas ou exigências legais."
                },
                {
                    title: "5. Seus Direitos (LGPD)",
                    text: "Em conformidade com a LGPD, você possui o direito de **acessar, corrigir, anonimizar ou excluir** seus dados. Para exercer esses direitos, basta entrar em contato com nosso encarregado de dados através dos canais oficiais."
                },
                {
                    title: "6. Contato",
                    text: "Para qualquer dúvida sobre esta Política ou sobre como tratamos seus dados, entre em contato pelo e-mail: **dpo@apixtech.com.br**."
                }
            ]
        },
        en: {
            title: "Privacy Policy",
            subtitle: "Version: 1.0 | Last updated: February 26, 2026",
            intro: "Apix Technologies values the privacy and protection of the personal data of its clients, partners, and visitors. This Privacy Policy transparently describes how we collect, use, store, and share information, in compliance with the General Data Protection Law (LGPD).",
            sections: [
                {
                    title: "1. Data Collected",
                    text: "We collect only the data *strictly necessary* for the provision of our technology, support, and consulting services. Data may include: **Full name, Email, Telephone, Company, and Position**. We also collect technical information such as *IP address and cookies* for experience improvement."
                },
                {
                    title: "2. Purpose of Data Use",
                    text: "Personal data is used with the goal of **providing services with excellence**, managing technical support, sending administrative communications, and, when authorized, *information about new solutions*. We do not use data for purposes outside our core business."
                },
                {
                    title: "3. Information Sharing",
                    text: "Apix Technologies **does not sell personal data**. Sharing only occurs with strategic partners necessary for the execution of services (e.g., cloud providers), under *strict confidentiality contracts*, or by legal obligation."
                },
                {
                    title: "4. Security and Storage",
                    text: "We adopt the **best information security practices**, including encryption and rigorous access control. Data is stored in secure environments and retained only for the time necessary to fulfill the described purposes or legal requirements."
                },
                {
                    title: "5. Your Rights (LGPD)",
                    text: "In compliance with LGPD, you have the right to **access, correct, anonymize, or delete** your data. To exercise these rights, simply contact our data officer through official channels."
                },
                {
                    title: "6. Contact",
                    text: "For any questions about this Policy or how we treat your data, contact us via email: **dpo@apixtech.com.br**."
                }
            ]
        },
        es: {
            title: "Política de Privacidad",
            subtitle: "Versión: 1.0 | Última actualización: 26 de febrero de 2026",
            intro: "Apix Technologies valora la privacidad y protección de los datos personales de sus clientes, socios y visitantes. Esta Política de Privacidad describe de forma transparente cómo recopilamos, utilizamos, almacenamos y compartimos información, de conformidad con la Ley General de Protección de Datos (LGPD).",
            sections: [
                {
                    title: "1. Datos Recopilados",
                    text: "Recopilamos solo los datos *estrictamente necesarios* para la prestación de nuestros servicios de tecnología, soporte y consultoría. Los datos pueden incluir: **Nome completo, Correo electrónico, Teléfono, Empresa y Cargo**. También recopilamos información técnica como *dirección IP y cookies* para mejorar la experiencia."
                },
                {
                    title: "2. Finalidad del Uso de los Datos",
                    text: "Los datos personales se utilizan con el objetivo de **prestar servicios con excelencia**, gestionar el soporte técnico, enviar comunicaciones administrativas y, cuando se autorice, *información sobre nuevas soluciones*. No utilizamos datos para fines ajenos a nuestro negocio principal."
                },
                {
                    title: "3. Intercambio de Información",
                    text: "Apix Technologies **no comercializa datos personales**. El intercambio solo ocurre con socios estratégicos necesarios para la ejecución de los servicios (ej: proveedores de nube), bajo *estrictos contratos de confidencialidade*, ou por obrigação legal."
                },
                {
                    title: "4. Seguridad y Almacenamiento",
                    text: "Adoptamos las **mejores práticas de segurança da informação**, incluindo criptografia e controle de acesso rigoroso. Os dados são armazenados em ambientes seguros e retidos apenas pelo tempo necessário para cumprir as finalidades descritas ou exigências legais."
                },
                {
                    title: "5. Sus Derechos (LGPD)",
                    text: "De conformidad con la LGPD, usted tiene el derecho de **acceder, corregir, anonimizar o eliminar** sus datos. Para ejercer estos derechos, simplemente póngase en contacto con nuestro oficial de datos a través de los canales oficiales."
                },
                {
                    title: "6. Contacto",
                    text: "Para cualquier duda sobre esta Política o sobre como tratamos sus datos, contacte por correo electrónico: **dpo@apixtech.com.br**."
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
