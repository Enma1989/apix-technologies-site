import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale, siteConfig } from "@/config/siteConfig";

type ServiceCopy = {
    eyebrow: string;
    benefits: string[];
    impacts: { title: string; description: string }[];
};

type Labels = {
    allServices: string;
    governed: string;
    modelApplication: string;
    modelDescription: string;
    strategicImpact: string;
    contact: string;
    startDiagnostic: string;
};

const labels: Record<Locale, Labels> = {
    pt: {
        allServices: "TODOS OS SERVIÇOS",
        governed: "GOVERNADO",
        modelApplication: "APLICAÇÃO NO MODELO MaaS™",
        modelDescription: "Tecnologia, processos e indicadores integrados sob governança contínua, documentação formal e responsabilidade operacional clara.",
        strategicImpact: "IMPACTO ESTRATÉGICO",
        contact: "FALAR COM ESPECIALISTA",
        startDiagnostic: "INICIAR DIAGNÓSTICO",
    },
    en: {
        allServices: "ALL SERVICES",
        governed: "GOVERNED",
        modelApplication: "APPLICATION WITHIN THE MaaS™ MODEL",
        modelDescription: "Technology, processes, and indicators integrated under continuous governance, formal documentation, and clear operational accountability.",
        strategicImpact: "STRATEGIC IMPACT",
        contact: "TALK TO AN EXPERT",
        startDiagnostic: "START DIAGNOSTIC",
    },
    es: {
        allServices: "TODOS LOS SERVICIOS",
        governed: "BAJO GOBERNANZA",
        modelApplication: "APLICACIÓN EN EL MODELO MaaS™",
        modelDescription: "Tecnología, procesos e indicadores integrados bajo gobernanza continua, documentación formal y responsabilidad operativa clara.",
        strategicImpact: "IMPACTO ESTRATÉGICO",
        contact: "HABLAR CON UN EXPERTO",
        startDiagnostic: "INICIAR DIAGNÓSTICO",
    },
};

const serviceCopy: Record<string, Record<Locale, ServiceCopy>> = {
    ciberseguranca: {
        pt: {
            eyebrow: "Proteção contínua e gestão executiva de riscos digitais.",
            benefits: ["Hardening contínuo de ambientes", "Monitoramento e resposta a incidentes", "Políticas de acesso e identidade", "Gestão de vulnerabilidades", "DRP documentado e testado", "Relatórios executivos de risco"],
            impacts: [
                { title: "Redução de riscos", description: "Mitigação proativa de ameaças antes que afetem a operação." },
                { title: "Continuidade do negócio", description: "Infraestrutura resiliente diante de incidentes de segurança." },
                { title: "Conformidade", description: "Controles alinhados às melhores práticas e normas aplicáveis." },
                { title: "Visibilidade executiva", description: "Indicadores claros para decisões baseadas em risco." },
            ],
        },
        en: {
            eyebrow: "Continuous protection and executive management of digital risks.",
            benefits: ["Continuous environment hardening", "Incident monitoring and response", "Access and identity policies", "Vulnerability management", "Documented and tested disaster recovery", "Executive risk reporting"],
            impacts: [
                { title: "Risk reduction", description: "Proactive threat mitigation before operations are affected." },
                { title: "Business continuity", description: "Infrastructure that remains resilient during security incidents." },
                { title: "Compliance", description: "Controls aligned with best practices and applicable standards." },
                { title: "Executive visibility", description: "Clear indicators for risk-based decisions." },
            ],
        },
        es: {
            eyebrow: "Protección continua y gestión ejecutiva de riesgos digitales.",
            benefits: ["Hardening continuo de entornos", "Monitoreo y respuesta a incidentes", "Políticas de acceso e identidad", "Gestión de vulnerabilidades", "Recuperación ante desastres documentada y probada", "Informes ejecutivos de riesgo"],
            impacts: [
                { title: "Reducción de riesgos", description: "Mitigación proactiva de amenazas antes de que afecten la operación." },
                { title: "Continuidad del negocio", description: "Infraestructura resiliente ante incidentes de seguridad." },
                { title: "Cumplimiento", description: "Controles alineados con buenas prácticas y normas aplicables." },
                { title: "Visibilidad ejecutiva", description: "Indicadores claros para decisiones basadas en riesgo." },
            ],
        },
    },
    "gestao-de-backup": {
        pt: {
            eyebrow: "Proteção estratégica de dados com retenção estruturada e recuperação testada.",
            benefits: ["Políticas de retenção por criticidade", "Backup local e em nuvem", "Monitoramento automatizado", "Criptografia em trânsito e repouso", "Testes periódicos de restauração", "Proteção contra ransomware"],
            impacts: [
                { title: "Continuidade", description: "Recuperação previsível para serviços e dados críticos." },
                { title: "Menor risco operacional", description: "Falhas detectadas e tratadas antes de uma emergência." },
                { title: "Conformidade", description: "Evidências e políticas de retenção auditáveis." },
                { title: "Resiliência", description: "Camadas de proteção contra exclusão, falha e ataque." },
            ],
        },
        en: {
            eyebrow: "Strategic data protection with structured retention and tested recovery.",
            benefits: ["Criticality-based retention policies", "Local and cloud backup", "Automated monitoring", "Encryption in transit and at rest", "Periodic restoration tests", "Ransomware protection"],
            impacts: [
                { title: "Continuity", description: "Predictable recovery for critical services and data." },
                { title: "Lower operational risk", description: "Failures detected and handled before an emergency." },
                { title: "Compliance", description: "Auditable evidence and retention policies." },
                { title: "Resilience", description: "Layers of protection against deletion, failure, and attack." },
            ],
        },
        es: {
            eyebrow: "Protección estratégica de datos con retención estructurada y recuperación probada.",
            benefits: ["Políticas de retención según criticidad", "Backup local y en la nube", "Monitoreo automatizado", "Cifrado en tránsito y en reposo", "Pruebas periódicas de restauración", "Protección contra ransomware"],
            impacts: [
                { title: "Continuidad", description: "Recuperación previsible de servicios y datos críticos." },
                { title: "Menor riesgo operativo", description: "Fallos detectados y tratados antes de una emergencia." },
                { title: "Cumplimiento", description: "Evidencias y políticas de retención auditables." },
                { title: "Resiliencia", description: "Capas de protección ante borrado, fallos y ataques." },
            ],
        },
    },
    "continuidade-resiliencia": {
        pt: {
            eyebrow: "Operação crítica protegida por planos formais de continuidade e recuperação.",
            benefits: ["Análise de impacto no negócio", "Mapeamento de dependências críticas", "Planos de continuidade e recuperação", "Definição de RTO e RPO", "Testes e simulações periódicas", "Gestão executiva de crise"],
            impacts: [
                { title: "Operação previsível", description: "Prioridades e responsabilidades definidas antes da crise." },
                { title: "Recuperação mais rápida", description: "Procedimentos validados para reduzir indisponibilidade." },
                { title: "Decisão estruturada", description: "Planos claros para equipes técnicas e lideranças." },
                { title: "Evolução contínua", description: "Lições aprendidas incorporadas à governança." },
            ],
        },
        en: {
            eyebrow: "Critical operations protected by formal continuity and recovery plans.",
            benefits: ["Business impact analysis", "Critical dependency mapping", "Continuity and recovery plans", "RTO and RPO definition", "Periodic tests and simulations", "Executive crisis management"],
            impacts: [
                { title: "Predictable operations", description: "Priorities and responsibilities defined before a crisis." },
                { title: "Faster recovery", description: "Validated procedures to reduce downtime." },
                { title: "Structured decisions", description: "Clear plans for technical teams and leadership." },
                { title: "Continuous improvement", description: "Lessons learned incorporated into governance." },
            ],
        },
        es: {
            eyebrow: "Operaciones críticas protegidas por planes formales de continuidad y recuperación.",
            benefits: ["Análisis de impacto en el negocio", "Mapeo de dependencias críticas", "Planes de continuidad y recuperación", "Definición de RTO y RPO", "Pruebas y simulaciones periódicas", "Gestión ejecutiva de crisis"],
            impacts: [
                { title: "Operación previsible", description: "Prioridades y responsabilidades definidas antes de una crisis." },
                { title: "Recuperación más rápida", description: "Procedimientos validados para reducir la indisponibilidad." },
                { title: "Decisiones estructuradas", description: "Planes claros para equipos técnicos y líderes." },
                { title: "Mejora continua", description: "Lecciones aprendidas incorporadas a la gobernanza." },
            ],
        },
    },
    "microsoft-365": {
        pt: {
            eyebrow: "Produtividade governada, identidade protegida e dados corporativos sob controle.",
            benefits: ["Governança de tenant e licenças", "Identidade e acesso condicional", "Proteção de e-mail e colaboração", "Políticas de retenção e DLP", "Backup independente", "Adoção e suporte contínuo"],
            impacts: [
                { title: "Produtividade segura", description: "Colaboração sem abrir mão de controles corporativos." },
                { title: "Otimização de licenças", description: "Uso e custos acompanhados de forma contínua." },
                { title: "Proteção de identidade", description: "Acesso orientado por risco e menor superfície de ataque." },
                { title: "Conformidade de dados", description: "Retenção e classificação alinhadas ao negócio." },
            ],
        },
        en: {
            eyebrow: "Governed productivity, protected identities, and corporate data under control.",
            benefits: ["Tenant and license governance", "Identity and conditional access", "Email and collaboration protection", "Retention and DLP policies", "Independent backup", "Continuous adoption and support"],
            impacts: [
                { title: "Secure productivity", description: "Collaboration without giving up corporate controls." },
                { title: "License optimization", description: "Continuous visibility into usage and costs." },
                { title: "Identity protection", description: "Risk-based access and a smaller attack surface." },
                { title: "Data compliance", description: "Retention and classification aligned with the business." },
            ],
        },
        es: {
            eyebrow: "Productividad gobernada, identidades protegidas y datos corporativos bajo control.",
            benefits: ["Gobernanza del tenant y licencias", "Identidad y acceso condicional", "Protección del correo y la colaboración", "Políticas de retención y DLP", "Backup independiente", "Adopción y soporte continuos"],
            impacts: [
                { title: "Productividad segura", description: "Colaboración sin renunciar a controles corporativos." },
                { title: "Optimización de licencias", description: "Visibilidad continua del uso y los costos." },
                { title: "Protección de identidad", description: "Acceso basado en riesgo y menor superficie de ataque." },
                { title: "Cumplimiento de datos", description: "Retención y clasificación alineadas con el negocio." },
            ],
        },
    },
    "google-workspace": {
        pt: {
            eyebrow: "Colaboração segura com governança de acesso e proteção de ativos digitais.",
            benefits: ["Governança do ambiente Workspace", "Gestão de usuários e grupos", "Autenticação multifator", "Políticas de compartilhamento", "Retenção e proteção de dados", "Auditoria e suporte contínuo"],
            impacts: [
                { title: "Colaboração segura", description: "Controles consistentes para equipes e parceiros." },
                { title: "Menos exposição", description: "Compartilhamentos e acessos revisados continuamente." },
                { title: "Custos previsíveis", description: "Licenças e uso acompanhados com disciplina." },
                { title: "Visibilidade", description: "Auditoria centralizada de eventos relevantes." },
            ],
        },
        en: {
            eyebrow: "Secure collaboration with access governance and digital asset protection.",
            benefits: ["Workspace environment governance", "User and group management", "Multi-factor authentication", "Sharing policies", "Data retention and protection", "Continuous auditing and support"],
            impacts: [
                { title: "Secure collaboration", description: "Consistent controls for teams and partners." },
                { title: "Lower exposure", description: "Sharing and access reviewed continuously." },
                { title: "Predictable costs", description: "Licenses and usage managed with discipline." },
                { title: "Visibility", description: "Centralized auditing of relevant events." },
            ],
        },
        es: {
            eyebrow: "Colaboración segura con gobernanza de acceso y protección de activos digitales.",
            benefits: ["Gobernanza del entorno Workspace", "Gestión de usuarios y grupos", "Autenticación multifactor", "Políticas de uso compartido", "Retención y protección de datos", "Auditoría y soporte continuos"],
            impacts: [
                { title: "Colaboración segura", description: "Controles consistentes para equipos y socios." },
                { title: "Menor exposición", description: "Accesos y elementos compartidos revisados continuamente." },
                { title: "Costos previsibles", description: "Licencias y uso gestionados con disciplina." },
                { title: "Visibilidad", description: "Auditoría centralizada de eventos relevantes." },
            ],
        },
    },
    "suporte-tecnico": {
        pt: {
            eyebrow: "Sustentação proativa com SLA, processos documentados e acompanhamento executivo.",
            benefits: ["Central de atendimento estruturada", "Gestão de incidentes e requisições", "Monitoramento proativo", "SLA e indicadores operacionais", "Base de conhecimento documentada", "Revisões executivas periódicas"],
            impacts: [
                { title: "Menos interrupções", description: "Problemas recorrentes tratados pela causa." },
                { title: "SLA transparente", description: "Prioridades e tempos de resposta mensuráveis." },
                { title: "Conhecimento preservado", description: "Procedimentos e decisões formalmente documentados." },
                { title: "Evolução contínua", description: "Indicadores orientam melhorias operacionais." },
            ],
        },
        en: {
            eyebrow: "Proactive operations with SLAs, documented processes, and executive follow-up.",
            benefits: ["Structured service desk", "Incident and request management", "Proactive monitoring", "SLAs and operational indicators", "Documented knowledge base", "Periodic executive reviews"],
            impacts: [
                { title: "Fewer interruptions", description: "Recurring problems addressed at their root cause." },
                { title: "Transparent SLAs", description: "Measurable priorities and response times." },
                { title: "Preserved knowledge", description: "Procedures and decisions formally documented." },
                { title: "Continuous improvement", description: "Indicators guide operational enhancements." },
            ],
        },
        es: {
            eyebrow: "Operación proactiva con SLA, procesos documentados y seguimiento ejecutivo.",
            benefits: ["Mesa de servicio estructurada", "Gestión de incidentes y solicitudes", "Monitoreo proactivo", "SLA e indicadores operativos", "Base de conocimiento documentada", "Revisiones ejecutivas periódicas"],
            impacts: [
                { title: "Menos interrupciones", description: "Problemas recurrentes tratados desde su causa raíz." },
                { title: "SLA transparentes", description: "Prioridades y tiempos de respuesta medibles." },
                { title: "Conocimiento preservado", description: "Procedimientos y decisiones documentados formalmente." },
                { title: "Mejora continua", description: "Los indicadores orientan mejoras operativas." },
            ],
        },
    },
    "cftv-seguranca-eletronica": {
        pt: {
            eyebrow: "Proteção física integrada à governança de dados e à continuidade operacional.",
            benefits: ["Projeto técnico de cobertura", "Gravação e retenção dimensionadas", "Acesso seguro às imagens", "Monitoramento e alertas", "Documentação do ambiente", "Manutenção preventiva"],
            impacts: [
                { title: "Proteção integrada", description: "Segurança física conectada aos processos da empresa." },
                { title: "Evidências disponíveis", description: "Retenção e consulta definidas conforme criticidade." },
                { title: "Operação confiável", description: "Monitoramento e manutenção reduzem pontos cegos." },
                { title: "Governança", description: "Acessos, ativos e responsabilidades documentados." },
            ],
        },
        en: {
            eyebrow: "Physical protection integrated with data governance and operational continuity.",
            benefits: ["Technical coverage design", "Properly sized recording and retention", "Secure access to footage", "Monitoring and alerts", "Environment documentation", "Preventive maintenance"],
            impacts: [
                { title: "Integrated protection", description: "Physical security connected to company processes." },
                { title: "Available evidence", description: "Retention and retrieval defined by criticality." },
                { title: "Reliable operation", description: "Monitoring and maintenance reduce blind spots." },
                { title: "Governance", description: "Access, assets, and responsibilities documented." },
            ],
        },
        es: {
            eyebrow: "Protección física integrada con la gobernanza de datos y la continuidad operativa.",
            benefits: ["Diseño técnico de cobertura", "Grabación y retención dimensionadas", "Acceso seguro a las imágenes", "Monitoreo y alertas", "Documentación del entorno", "Mantenimiento preventivo"],
            impacts: [
                { title: "Protección integrada", description: "Seguridad física conectada con los procesos de la empresa." },
                { title: "Evidencias disponibles", description: "Retención y consulta definidas según criticidad." },
                { title: "Operación confiable", description: "Monitoreo y mantenimiento reducen puntos ciegos." },
                { title: "Gobernanza", description: "Accesos, activos y responsabilidades documentados." },
            ],
        },
    },
};

const images: Record<string, string> = {
    ciberseguranca: "/images/cybersecurity.jpg",
    "gestao-de-backup": "/images/Server.jpg",
    "continuidade-resiliencia": "/images/BCR.jpg",
    "microsoft-365": "/images/Microsoft.jpg",
    "google-workspace": "/images/Google.jpg",
    "suporte-tecnico": "/images/Suporte.jpg",
    "operacao-suporte": "/images/Suporte.jpg",
    "cftv-seguranca-eletronica": "/images/arquitectura.jpg",
};

export function LocalizedServiceDetail({ lang, slug }: { lang: Locale; slug: string }) {
    const serviceSlug = slug === "operacao-suporte" ? "suporte-tecnico" : slug;
    const service = siteConfig.services.find((item) => item.slug === serviceSlug);
    const copy = serviceCopy[serviceSlug]?.[lang];

    if (!service || !copy) notFound();

    const t = labels[lang];

    return (
        <main className="min-h-screen bg-premium-dark">
            <section className="relative min-h-[78vh] flex items-center overflow-hidden border-b border-white/5">
                <Image
                    src={images[slug] || "/images/arquitectura.jpg"}
                    alt={service.title[lang]}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-55 hero-bg-filter"
                />
                <div className="hero-overlay-premium" />
                <div className="container-premium relative z-20 pt-32 pb-24">
                    <div className="max-w-3xl">
                        <Link href={`/${lang}/servicos`} className="text-white/60 text-sm font-medium uppercase tracking-widest mb-10 inline-block hover:text-apix-yellow transition-colors">
                            ← {t.allServices}
                        </Link>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold tracking-tight leading-tight text-white uppercase">
                            {service.title[lang]}<br />
                            <span className="text-apix-yellow">{t.governed}</span>
                        </h1>
                        <div className="w-20 h-1 bg-apix-yellow my-9" />
                        <p className="text-xl md:text-2xl text-white/85 font-inter leading-relaxed max-w-2xl">{service.desc[lang]}</p>
                        <p className="mt-5 text-base md:text-lg text-white/65 font-inter max-w-2xl">{copy.eyebrow}</p>
                        <div className="flex flex-wrap gap-4 pt-10">
                            <Link href={`/${lang}/contato`} className="inline-flex items-center justify-center min-h-14 bg-apix-yellow border-2 border-[#E6B800] text-[#111111] font-bold px-8 rounded-full hover:brightness-95 transition-all uppercase tracking-widest text-sm">
                                {t.startDiagnostic}
                            </Link>
                            <Link href={`/${lang}/contato`} className="inline-flex items-center justify-center min-h-14 border-2 border-white/25 text-white font-bold px-8 rounded-full hover:bg-white/5 transition-all uppercase tracking-widest text-sm">
                                {t.contact}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-premium-white text-dark py-24">
                <div className="container-premium grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 uppercase tracking-tight mb-6">
                            {t.modelApplication}
                        </h2>
                        <p className="text-lg text-slate-600 font-inter leading-relaxed mb-10">{t.modelDescription}</p>
                        <ul className="grid gap-4">
                            {copy.benefits.map((item) => (
                                <li key={item} className="flex items-start gap-4 p-5 bg-white border border-zinc-200 rounded-xl shadow-sm">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-apix-yellow text-[11px] font-black text-black">✓</span>
                                    <span className="text-slate-700 font-inter font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-900 p-9 md:p-12 rounded-3xl text-white shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-outfit font-bold text-apix-yellow uppercase tracking-tight mb-9">{t.strategicImpact}</h2>
                        <div className="grid gap-7">
                            {copy.impacts.map((impact) => (
                                <div key={impact.title} className="border-l-4 border-apix-yellow/40 pl-5">
                                    <h3 className="font-outfit font-bold text-lg mb-2">{impact.title}</h3>
                                    <p className="text-slate-300 font-inter leading-relaxed">{impact.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
