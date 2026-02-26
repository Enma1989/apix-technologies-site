import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "../Section";

export default function ConsultativeAuditCTA({ lang }: { lang: Locale }) {
    const { audit } = siteConfig.home;

    return (
        <Section className="bg-premium-dark text-white overflow-hidden relative" id="consultative-cta">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-bold text-white/[0.02] select-none -z-0">
                APIX
            </div>

            <div className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-8 leading-tight tracking-tight text-white">
                        {lang === "pt"
                            ? "Sessão Estratégica de Infra & Segurança."
                            : lang === "en"
                                ? "Strategic Infrastructure & Security Session."
                                : "Sesión Estratégica de Infraestructura y Seguridad."
                        }
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto mb-10"></div>
                    <p className="text-xl md:text-2xl text-white/80 font-inter mb-16 max-w-3xl mx-auto leading-relaxed">
                        {lang === "pt"
                            ? "60 minutos para identificar riscos críticos e definir as próximas ações com visão executiva. Em 1 hora, coletamos sinais críticos do seu ambiente e entregamos um diagnóstico objetivo com prioridades."
                            : lang === "en"
                                ? "60 minutes to identify critical risks and define next actions with executive vision. In 1 hour, we collect critical signals from your environment and deliver an objective diagnosis with priorities."
                                : "60 minutos para identificar riesgos críticos y definir las próximas acciones con visión ejecutiva. En 1 hora, recolectamos señales críticas de su entorno y entregamos un diagnóstico objetivo con prioridades."
                        }
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <button className="h-12 md:h-14 inline-flex items-center justify-center bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-12 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/40 active:scale-[0.98] shadow-xl shadow-black/20 transition-all duration-300 ease-out uppercase tracking-widest text-xs lg:text-sm min-w-[280px]">
                            {lang === "pt" ? "SOLICITAR SESSÃO GRATUITA" : lang === "en" ? "REQUEST FREE SESSION" : "SOLICITAR SESIÓN GRATUITA"}
                        </button>
                        <button className="h-12 md:h-14 inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white font-bold px-12 rounded-full hover:bg-white/5 hover:border-white/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 uppercase tracking-widest text-xs lg:text-sm min-w-[280px]">
                            {audit.cta.secondary[lang]}
                        </button>
                    </div>

                    <p className="text-slate-500 font-inter tracking-wide text-sm">
                        {audit.trustLine[lang]}
                    </p>
                </div>
            </div>
        </Section>
    );
}
