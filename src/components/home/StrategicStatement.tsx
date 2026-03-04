import { Locale } from "@/config/siteConfig";
import { getDictionary } from "@/dictionaries";
import { Section } from "../Section";

export default async function StrategicStatement({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);

    return (
        <Section className="bg-premium-white text-dark">
            <div className="max-w-4xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold mb-6 leading-tight tracking-tight text-dark">
                    {dict.home.statement.headline}
                </h2>
                <div className="w-20 h-1 bg-secondary mb-10"></div>
                <p className="text-xl md:text-2xl text-dark/90 font-inter leading-relaxed max-w-3xl">
                    {dict.home.statement.text}
                </p>
            </div>
        </Section>
    );
}
