import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "../Section";
import Image from "next/image";

export default function ConsultativeAuditCTA({ lang }: { lang: Locale }) {
    const { audit } = siteConfig.home;

    return (
        <Section className="bg-premium-dark text-white overflow-hidden relative" id="consultative-cta">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square opacity-[0.03] blur-[2px] select-none pointer-events-none -z-0">
                <Image
                    src="/images/APIX-09.png"
                    alt="Apix logo watermark"
                    fill
                    className="object-contain grayscale brightness-200"
                />
            </div>

            <div className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-8 leading-tight tracking-tight text-white">
                        {audit.headline[lang]}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto mb-10"></div>
                    <p className="text-xl md:text-2xl text-white/80 font-inter mb-16 max-w-3xl mx-auto leading-relaxed">
                        {audit.subheadline[lang]}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <button className="h-12 md:h-14 inline-flex items-center justify-center bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-12 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/40 active:scale-[0.98] shadow-xl shadow-black/20 transition-all duration-300 ease-out uppercase tracking-widest text-xs lg:text-sm min-w-[280px]">
                            {audit.cta.primary[lang]}
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
