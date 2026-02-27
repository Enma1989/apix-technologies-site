import { Locale } from "@/config/siteConfig";
import { Section } from "../Section";

const cases = [
    {
        title: { pt: "Reestruturação de Infraestrutura Multi-Base", en: "Multi-Base Infrastructure Restructuring", es: "Reestructuración de Infraestructura Multi-Base" },
        context: { pt: "Expansão rápida com infraestrutura legada e descentralizada.", en: "Rapid expansion with legacy and decentralized infrastructure.", es: "Rápida expansión con infraestructura heredada y descentralizada." },
        risk: { pt: "Paradas operacionais frequentes e falta de visibilidade de custos.", en: "Frequent operational downtime and lack of cost visibility.", es: "Frecuentes tiempos de inactividad operativos y falta de visibilidad de costos." },
        approach: { pt: "Arquitetura de rede unificada e governança Centralizada.", en: "Unified network architecture and centralized governance.", es: "Arquitectura de red unificada y gobernanza centralizada." },
        outcome: { pt: "Estabilidade de 99.9% e controle total do capex tecnológico.", en: "99.9% stability and total control of technology capex.", es: "Estabilidad del 99.9% y control total del capex tecnológico." }
    },
    {
        title: { pt: "Blindagem de Segurança e Continuidade", en: "Security Shielding and Continuity", es: "Blindaje de Seguridad y Continuidad" },
        context: { pt: "Empresa do setor logístico com vulnerabilidades críticas expostas.", en: "Logistics company with critical vulnerabilities exposed.", es: "Empresa de logística con vulnerabilidades críticas expuestas." },
        risk: { pt: "Risco iminente de ransomware e perda de dados operacionais.", en: "Imminent risk of ransomware and loss of operational data.", es: "Riesgo inminente de ransomware y pérdida de datos operativos." },
        approach: { pt: "Implementação de Zero Trust e Gestão de Backup Offline.", en: "Zero Trust implementation and Offline Backup Management.", es: "Implementación de Zero Trust y gestión de respaldo fuera de línea." },
        outcome: { pt: "Vulnerabilidades sanadas e recuperação garantida em < 2h.", en: "Vulnerabilities mitigated and guaranteed recovery in < 2h.", es: "Vulnerabilidades mitigadas y recuperación garantizada en < 2h." }
    },
    {
        title: { pt: "Governança 365 e Eficiência de Custo", en: "365 Governance and Cost Efficiency", es: "Gobernanza 365 y Eficiencia de Costos" },
        context: { pt: "Uso ineficiente de licenciamento e falta de controle de acesso.", en: "Inefficient licensing use and lack of access control.", es: "Uso ineficiente de licencias y falta de control de acceso." },
        risk: { pt: "Gastos desnecessários e vazamento de informações sensíveis.", en: "Unnecessary spending and sensitive information leakage.", es: "Gastos innecesarios y fuga de información sensible." },
        approach: { pt: "Auditoria de licenciamento e implementação de políticas DLP.", en: "Licensing audit and DLP policy implementation.", es: "Auditoría de licencias e implementación de políticas DLP." },
        outcome: { pt: "Redução de 30% nos custos e conformidade total de dados.", en: "30% cost reduction and total data compliance.", es: "Reducción de costos del 30% y total cumplimiento de datos." }
    }
];

export default function CaseStudies({ lang }: { lang: Locale }) {
    return (
        <Section className="bg-premium-white text-dark border-y border-zinc-100">
            <div className="mb-16 text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6 tracking-tight text-slate-900 uppercase">
                    {lang === "pt" ? "Método MaaS™ em Ação" : lang === "en" ? "MaaS™ Method in Action" : "Método MaaS™ en Acción"}
                </h2>
                <div className="mt-8 w-20 h-1 bg-secondary mx-auto lg:mx-0 mb-8"></div>
                <p className="text-slate-800 text-xl font-inter max-w-2xl leading-relaxed">
                    {lang === "pt"
                        ? "Estudos de caso que demonstram a eficiência do nosso framework de governança em ambientes complexos."
                        : "Case studies demonstrating the efficiency of our governance framework in complex environments."
                    }
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {cases.map((item, index) => (
                    <div key={index} className="bg-white p-10 border border-zinc-100 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-black/5 hover:border-secondary/30 transition-all duration-500 flex flex-col h-full">
                        <h3 className="text-xl font-outfit font-bold mb-8 text-slate-900 leading-snug h-14 overflow-hidden">
                            {item.title[lang]}
                        </h3>

                        <div className="space-y-6 flex-grow">
                            <div className="border-l-2 border-zinc-100 pl-6 group">
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 group-hover:text-secondary transition-colors">Context</p>
                                <p className="text-sm font-inter text-slate-800 leading-relaxed">{item.context[lang]}</p>
                            </div>
                            <div className="border-l-2 border-zinc-100 pl-6 group">
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 group-hover:text-secondary transition-colors">Risk</p>
                                <p className="text-sm font-inter text-slate-600 leading-relaxed">{item.risk[lang]}</p>
                            </div>
                            <div className="border-l-2 border-zinc-100 pl-6 group">
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 group-hover:text-secondary transition-colors">Approach</p>
                                <p className="text-sm font-inter text-slate-600 leading-relaxed">{item.approach[lang]}</p>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-zinc-50">
                            <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-1">
                                    Outcome
                                </p>
                                <p className="text-slate-900 font-bold text-sm">
                                    {item.outcome[lang]}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
