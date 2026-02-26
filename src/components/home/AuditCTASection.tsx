import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "../Section";

export default function AuditCTASection({ lang }: { lang: Locale }) {
    const { audit } = siteConfig.home;

    return (
        <Section className="bg-premium-white text-dark" id="audit">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold mb-6 leading-tight tracking-tight max-w-4xl text-slate-900">
                    {audit.headline[lang]}
                </h2>
                <div className="w-20 h-1 bg-secondary mb-8"></div>
                <p className="text-xl md:text-2xl text-slate-900 font-inter leading-relaxed max-w-3xl mb-12">
                    {audit.subheadline[lang]}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-16 items-start">
                {/* O que está incluso */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/[0.03]">
                    <h3 className="text-2xl font-outfit font-bold mb-8 text-slate-900">
                        {audit.included.title[lang]}
                    </h3>
                    <ul className="space-y-6">
                        {audit.included.items[lang].map((item, index) => (
                            <li key={index} className="flex items-start gap-4 text-lg text-slate-900 group">
                                <span className="text-[#FFD23F] mt-1 shrink-0">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="group-hover:text-slate-900 transition-colors">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Como funciona */}
                <div className="p-8">
                    <h3 className="text-2xl font-outfit font-bold mb-12 text-slate-900">
                        {audit.howItWorks.title[lang]}
                    </h3>
                    <div className="relative space-y-12">
                        {/* Vertical line (Mobile & Desktop) */}
                        <div className="absolute left-5 top-5 bottom-5 w-px bg-dark/10 -z-0" />

                        {audit.howItWorks.steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-6 group relative z-10">
                                <div className="relative">
                                    <span className="w-10 h-10 bg-white border-2 border-[#E6B800] rounded-full flex items-center justify-center text-slate-900 font-bold text-sm shadow-sm group-hover:bg-[#FFD23F] group-hover:border-[#FFD23F] transition-all duration-300">
                                        {step.number}
                                    </span>
                                </div>
                                <div className="pt-2">
                                    <p className="text-lg md:text-xl text-slate-900 font-inter font-medium leading-snug group-hover:text-black transition-colors">
                                        {step.text[lang]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Block */}
            <div className="flex flex-col items-center mt-12 md:mt-16">
                <div className="flex flex-wrap gap-6 justify-center items-center mb-8 w-full max-w-4xl px-4">
                    <button className="h-12 md:h-14 inline-flex items-center justify-center bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-bold px-10 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 active:scale-[0.98] shadow-xl shadow-black/10 transition-all duration-300 ease-out min-w-[280px] uppercase tracking-widest text-xs lg:text-sm">
                        {audit.cta.primary[lang]}
                    </button>
                    <button className="h-12 md:h-14 inline-flex items-center justify-center bg-transparent border-2 border-slate-400 text-slate-900 font-bold px-10 rounded-full hover:bg-slate-50 hover:border-slate-600 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 min-w-[280px] uppercase tracking-widest text-xs lg:text-sm">
                        {audit.cta.secondary[lang]}
                    </button>
                </div>
                <p className="text-sm text-slate-600 font-inter tracking-wide">
                    {audit.trustLine[lang]}
                </p>
            </div>
        </Section>
    );
}
