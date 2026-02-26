import { Locale, siteConfig } from "@/config/siteConfig";
import { Section } from "../Section";

export default function StrategicStatement({ lang }: { lang: Locale }) {
    return (
        <Section className="bg-premium-white text-dark">
            <div className="max-w-4xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold mb-6 leading-tight tracking-tight text-dark">
                    {siteConfig.home.statement.headline[lang]}
                </h2>
                <div className="w-20 h-1 bg-secondary mb-10"></div>
                <p className="text-xl md:text-2xl text-dark/90 font-inter leading-relaxed max-w-3xl">
                    {siteConfig.home.statement.text[lang]}
                </p>
            </div>
        </Section>
    );
}
