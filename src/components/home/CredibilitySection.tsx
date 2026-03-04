import { Locale } from "@/config/siteConfig";
import { getDictionary } from "@/dictionaries";
import { Section } from "../Section";
import Image from "next/image";

export default async function CredibilitySection({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);
    const { credibility } = dict.home;
    return (
        <Section className="bg-premium-zinc text-dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 uppercase tracking-tight text-dark">
                        {credibility.headline}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mb-8"></div>
                    <p className="text-dark/80 text-xl mb-12 leading-relaxed font-inter">
                        {credibility.desc}
                    </p>
                    <div className="space-y-8">
                        {credibility.items.map((item) => (
                            <div key={item.title} className="flex gap-6 group">
                                <div className="mt-1 w-6 h-6 bg-zinc-50 border border-zinc-100 rounded-lg flex-shrink-0 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                                    <div className="w-2 h-2 bg-secondary rounded-full group-hover:bg-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className="font-outfit font-bold text-xl mb-2 text-dark group-hover:text-secondary transition-colors">{item.title}</h4>
                                    <p className="text-dark/70 text-base leading-relaxed font-inter">{item.desc}</p>
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
                        <h3 className="text-white font-outfit font-bold text-2xl md:text-3xl mb-4 uppercase tracking-[0.2em]">{credibility.badgeTitle}</h3>
                        <p className="text-slate-400 text-sm md:text-base uppercase tracking-widest leading-relaxed max-w-[280px]">
                            {credibility.badgeDesc}
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
