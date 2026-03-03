"use client";

import { useState, useEffect } from "react";

// Minimalist Icons
const IconGovernance = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
);

const IconSecurity = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
);

const IconContinuity = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="4.93" x2="9.17" y1="4.93" y2="9.17" />
        <line x1="14.83" x2="19.07" y1="14.83" y2="19.07" />
        <line x1="14.83" x2="19.07" y1="9.17" y2="4.93" />
        <line x1="14.83" x2="19.07" y1="9.17" y2="4.93" />
        <line x1="4.93" x2="9.17" y1="19.07" y2="14.83" />
    </svg>
);

const IconScalability = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </svg>
);

const pillarsData = [
    {
        id: "governance",
        title: "Governança & Controle",
        desc: "Visibilidade executiva, gestão de inventário e processos mapeados. Fim do improviso lógico e físico.",
        icon: <IconGovernance />,
        modal: {
            resolves: "Elimina a dependência de conhecimento tácito, infraestrutura indocumentada e a falta de visibilidade sobre ativos críticos de TI.",
            deliverables: [
                "CMDB (Inventário de Ativos Estruturado)",
                "Mapeamento de Processos Críticos",
                "Matriz de Responsabilidades (RACI)"
            ],
            indicators: [
                "Redução drástica de indisponibilidade não planejada",
                "100% de precisão no ciclo de vida dos ativos"
            ]
        }
    },
    {
        id: "security",
        title: "Risco & Segurança",
        desc: "Postura defensiva permanente e blindagem estratégica. Compliance contínuo como norma, não exceção.",
        icon: <IconSecurity />,
        modal: {
            resolves: "Fechamento de brechas de segurança operacionais, redução da superfície de ataque e implementação de conformidade real.",
            deliverables: [
                "Vulnerability Assessment & Hardening",
                "Políticas de Acesso (Zero Trust Architecture)",
                "Documentação Normativa de Segurança"
            ],
            indicators: [
                "Zero incidentes críticos de vazamento ou intrusão",
                "Conformidade auditável com frameworks de proteção"
            ]
        }
    },
    {
        id: "continuity",
        title: "Continuidade & Resiliência",
        desc: "Previsibilidade de operação com tempo de resposta garantido, backups auditáveis e DRP formal.",
        icon: <IconContinuity />,
        modal: {
            resolves: "Mitiga paralisações prolongadas causadas por falta de backups testados e resposta improvisada a desastres técnicos.",
            deliverables: [
                "Disaster Recovery Plan (DRP) Formal",
                "Matriz de Backup Isolada e Imutável",
                "Testes de Restore Trimestrais Documentados"
            ],
            indicators: [
                "RTO (Recovery Time Objective) garantido em contrato",
                "100% de sucesso em validações de restore"
            ]
        }
    },
    {
        id: "scalability",
        title: "Escalabilidade & Performance",
        desc: "Base forte preparada para suportar o crescimento acelerado da operação sem acoplar gargalos de design.",
        icon: <IconScalability />,
        modal: {
            resolves: "Remove as limitações técnicas que impedem o crescimento da empresa e elimina a lentidão sistêmica estrutural.",
            deliverables: [
                "Capacity Planning Executivo",
                "Adequação de Camada 1 (Infra Física e Lógica)",
                "Migração e Otimização Cloud"
            ],
            indicators: [
                "Sustentação de crescimento em dobro sem dor",
                "Eficiência de TCO (Total Cost of Ownership)"
            ]
        }
    }
];

export default function MaaSPillarsSection() {
    const [selectedPillar, setSelectedPillar] = useState<typeof pillarsData[0] | null>(null);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedPillar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedPillar]);

    return (
        <section className="relative py-24 md:py-32 bg-[#F5F5F5] overflow-hidden">
            {/* Subtle premium paper/radial gradient background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>

            <div className="container-premium relative z-10 max-w-5xl mx-auto">
                <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Header hierarchy */}
                    <span className="text-zinc-500 font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
                        NOSSO BUQUE INSÍGNIA
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-zinc-900 tracking-tight">
                        ARQUITETURA MAAS™
                    </h2>
                    {/* Elegant thin line */}
                    <div className="w-24 h-[2px] bg-[#FFD23F] mt-8 mb-8 opacity-80"></div>

                    <div className="max-w-3xl space-y-6">
                        <p className="text-lg md:text-xl font-inter font-light text-zinc-600 leading-relaxed">
                            Com mais de 18 anos de experiência corporativa, identificamos um padrão letal: a falta de confiança e a insatisfação permanente com técnicos tradicionais, atrelados a uma desorganização operacional crônica.
                        </p>
                        <p className="text-xl font-inter font-medium text-zinc-800 leading-relaxed">
                            Foi dessa dor estrutural do mercado que nasceu o modelo estruturado de governança tecnológica.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {pillarsData.map((pillar) => (
                        <div
                            key={pillar.id}
                            onClick={() => setSelectedPillar(pillar)}
                            className="group relative bg-white border border-zinc-200/60 rounded-[16px] p-8 md:p-10 cursor-pointer overflow-hidden transition-all duration-350 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[#FFD23F]/60"
                        >
                            {/* Subtle Inner Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-zinc-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"></div>

                            {/* Subtle Yellow Margin Glow */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FFD23F]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="text-zinc-400 group-hover:text-[#FFD23F] transition-colors duration-300 mb-6">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-outfit font-bold text-zinc-900 mb-4 uppercase tracking-tight group-hover:text-[#FFD23F] transition-colors duration-300">
                                    {pillar.title}
                                </h3>
                                <p className="text-zinc-600 leading-relaxed font-inter font-light">
                                    {pillar.desc}
                                </p>
                            </div>

                            {/* Micro-link hover */}
                            <div className="absolute bottom-6 md:bottom-8 right-8 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 ease-out">
                                <span className="text-[#FFD23F] font-semibold text-sm tracking-wide flex items-center gap-1">
                                    Ver detalhes <span className="text-lg leading-none">&rarr;</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal / Drawer Overlay */}
            {selectedPillar && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 animate-in fade-in duration-200">
                    <div
                        className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm"
                        onClick={() => setSelectedPillar(null)}
                    ></div>

                    <div className="relative bg-white w-full max-w-2xl rounded-2xl md:rounded-[20px] shadow-2xl border border-zinc-200 overflow-hidden transform animate-in slide-in-from-bottom-8 md:slide-in-from-bottom-12 duration-300 z-10 max-h-[90vh] flex flex-col">
                        {/* Modal Header */}
                        <div className="flex items-start justify-between p-6 md:p-8 border-b border-zinc-100 bg-zinc-50">
                            <div>
                                <div className="text-zinc-400 mb-3">{selectedPillar.icon}</div>
                                <h3 className="text-2xl md:text-3xl font-outfit font-bold text-zinc-900 uppercase">
                                    {selectedPillar.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelectedPillar(null)}
                                className="p-2 -mr-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 md:p-8 overflow-y-auto w-full space-y-8">
                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                                    O que isso resolve
                                </h4>
                                <p className="text-lg text-zinc-800 font-inter leading-relaxed">
                                    {selectedPillar.modal.resolves}
                                </p>
                            </div>

                            <div className="w-full h-px bg-zinc-100"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold tracking-widest text-[#FFD23F] uppercase">
                                        Entregáveis Típicos
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedPillar.modal.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-zinc-600 font-inter text-sm md:text-base">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0"></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold tracking-widest text-zinc-900 uppercase">
                                        Indicadores de Maturidade
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedPillar.modal.indicators.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-zinc-600 font-inter text-sm md:text-base">
                                                <svg className="w-4 h-4 text-emerald-500 mt-1 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 md:p-6 bg-zinc-50 border-t border-zinc-100 text-center">
                            <span className="text-xs tracking-widest text-zinc-400 uppercase font-semibold">
                                Estrutura. Método. Governança.
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
