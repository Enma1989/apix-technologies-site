import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "../Section";

export default function Methodology({ lang }: { lang: Locale }) {
    const { methodology } = siteConfig.home;

    return (
        <Section className="bg-premium-white text-dark border-t border-zinc-100 relative">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6 tracking-tight text-dark uppercase">
                    {methodology.title[lang]}
                </h2>
                <p className="text-dark/90 text-xl font-inter max-w-3xl mx-auto leading-relaxed">
                    {methodology.subtitle[lang]}
                </p>
                <div className="mt-8 w-20 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="relative">
                {/* Desktop Connection Line */}
                <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-zinc-200 -z-0" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {methodology.steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                            <div className="w-24 h-24 bg-white border-2 border-zinc-100 rounded-full flex items-center justify-center mb-8 group-hover:border-secondary group-hover:shadow-xl group-hover:shadow-secondary/10 transition-all duration-500 relative">
                                <span className="text-3xl font-outfit font-bold text-slate-700 group-hover:text-secondary transition-colors">
                                    {step.number}
                                </span>
                                {/* Small indicator dot */}
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-300 rounded-full group-hover:bg-secondary transition-colors" />
                            </div>
                            <h3 className="text-xl font-outfit font-bold mb-4 text-dark tracking-tight group-hover:text-secondary transition-colors">
                                {step.title[lang]}
                            </h3>
                            <p className="text-dark/90 font-inter leading-relaxed">
                                {step.desc[lang]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
