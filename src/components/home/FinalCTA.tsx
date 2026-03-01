import Link from "next/link";
import Image from "next/image";
import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "../Section";

export default function FinalCTA({ lang }: { lang: Locale }) {
    const waLink = "https://wa.me/5541991934437?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20o%20Diagn%C3%B3stico%20MaaS%20da%20Apix%20Technologies%20para%20avaliar%20minha%20infraestrutura";

    return (
        <Section className="bg-premium-dark text-white overflow-hidden relative border-t border-white/5" id="contato">
            {/* Decorative background logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px] aspect-square opacity-[0.04] blur-[1px] select-none pointer-events-none -z-0">
                <Image
                    src="/images/APIX-09.png"
                    alt="Apix logo watermark"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold mb-8 max-w-5xl leading-tight tracking-tight text-white">
                    {lang === "pt"
                        ? "Sua infraestrutura merece rigor executivo. Vamos começar?"
                        : lang === "en"
                            ? "Your infrastructure deserves executive rigor. Shall we begin?"
                            : "Su infraestructura merece rigor ejecutivo. ¿Comenzamos?"
                    }
                </h2>
                <div className="w-24 h-1 bg-secondary mb-12"></div>
                <p className="text-xl md:text-2xl mb-16 max-w-2xl font-inter text-slate-400 leading-relaxed">
                    {lang === "pt"
                        ? "Agende um diagnóstico estratégico e tome o controle da previsibilidade do seu negócio."
                        : "Schedule a strategic diagnosis and take control of your business predictability."
                    }
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <Link
                        href={`/${lang}/contato`}
                        className="h-12 md:h-14 inline-flex items-center justify-center bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-12 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm"
                    >
                        {siteConfig.home.hero.primaryCTA[lang]}
                    </Link>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 md:h-14 inline-flex items-center justify-center border-2 border-white/20 text-white font-bold px-12 rounded-full hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm"
                    >
                        {lang === "pt" ? "Falar com Consultor" : lang === "en" ? "Talk to Consultant" : "Hablar con Consultor"}
                    </a>
                </div>
            </div>
        </Section>
    );
}
