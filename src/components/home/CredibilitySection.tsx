import { Locale } from "@/config/siteConfig";
import { Section } from "../Section";
import Image from "next/image";

const credibilityItems = [
    {
        title: { pt: "Documentação & Padrão", en: "Documentation & Standard", es: "Documentación y Estándar" },
        desc: {
            pt: "Entregamos topologias detalhadas e inventários completos integrados ao método MaaS™. Sua TI nunca mais será uma 'caixa preta'.",
            en: "We deliver detailed topologies and complete inventories integrated into the MaaS™ method. Your IT will never be a 'black box' again.",
            es: "Entregamos topologías detalladas e inventarios completos integrados al método MaaS™. Su TI nunca más será una 'caja negra'."
        }
    },
    {
        title: { pt: "Governança & Controle", en: "Governance & Control", es: "Gobernanza y Control" },
        desc: {
            pt: "Gestão rigorosa de mudanças e processos auditáveis que garantem conformidade e segurança.",
            en: "Rigorous change management and auditable processes that ensure compliance and security.",
            es: "Gestión rigurosa de cambios y procesos auditables que garantizan cumplimiento y seguridad."
        }
    },
    {
        title: { pt: "Segurança por Design", en: "Security by Design", es: "Seguridad por Diseño" },
        desc: {
            pt: "A segurança não é um opcional, é o alicerce de cada arquitetura que projetamos e executamos.",
            en: "Security is not an option, it is the foundation of every architecture we design and execute.",
            es: "La seguridad no es una opción, es la base de cada arquitectura que diseñamos y ejecutamos."
        }
    },
    {
        title: { pt: "Acompanhamento Contínuo", en: "Continuous Support", es: "Acompañamiento Continuo" },
        desc: {
            pt: "Não apenas implementamos; acompanhamos a evolução do seu negócio com suporte consultivo.",
            en: "We don't just implement; we follow your business evolution with consulting support.",
            es: "No solo implementamos; acompañamos la evolución de su negocio con soporte consultivo."
        }
    }
];

export default function CredibilitySection({ lang }: { lang: Locale }) {
    return (
        <Section className="bg-premium-zinc text-dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 uppercase tracking-tight text-dark">
                        {lang === "pt" ? "Excelência Técnica com Rigor Executivo" : lang === "en" ? "Technical Excellence with Executive Rigor" : "Excelencia Técnica con Rigor Ejecutivo"}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mb-8"></div>
                    <p className="text-dark/80 text-xl mb-12 leading-relaxed font-inter">
                        {lang === "pt"
                            ? "Na Apix Technologies, transformamos infraestrutura técnica em ativos estratégicos. Nosso foco é eliminar o amadorismo e substituir a incerteza por processos previsíveis e auditáveis."
                            : lang === "en"
                                ? "At Apix Technologies, we transform technical infrastructure into strategic assets. Our focus is to eliminate amateurism and replace uncertainty with predictable and auditable processes."
                                : "En Apix Technologies, transformamos la infraestructura técnica en activos estratégicos. Nuestro enfoque es eliminar el amateurismo y reemplazar la incertidumbre por procesos previsibles y auditables."
                        }
                    </p>
                    <div className="space-y-8">
                        {credibilityItems.map((item) => (
                            <div key={item.title[lang]} className="flex gap-6 group">
                                <div className="mt-1 w-6 h-6 bg-zinc-50 border border-zinc-100 rounded-lg flex-shrink-0 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                                    <div className="w-2 h-2 bg-secondary rounded-full group-hover:bg-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className="font-outfit font-bold text-xl mb-2 text-dark group-hover:text-secondary transition-colors">{item.title[lang]}</h4>
                                    <p className="text-dark/70 text-base leading-relaxed font-inter">{item.desc[lang]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative aspect-square bg-slate-950 rounded-3xl overflow-hidden flex items-center justify-center border border-white/5 shadow-2xl shadow-black/30 group">
                    <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center relative z-10">
                        <div className="w-36 h-36 rounded-full border border-white/20 flex items-center justify-center mb-6 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-secondary/50 group-hover:bg-secondary/10 group-hover:shadow-[0_0_50px_-12px_rgba(255,210,63,0.4)]">
                            <Image
                                src="/images/APIX-09.png"
                                alt="Apix Certified"
                                width={100}
                                height={100}
                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-white font-outfit font-bold text-2xl md:text-3xl mb-4 uppercase tracking-[0.2em]">Apix Certified</h3>
                        <p className="text-slate-400 text-sm md:text-base uppercase tracking-widest leading-relaxed max-w-[280px]">
                            {lang === "pt" ? "Protocolos de governança e rigor técnico em cada entrega." : "Governance protocols and technical rigor in every delivery."}
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
