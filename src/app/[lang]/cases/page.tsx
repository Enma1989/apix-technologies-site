import { Locale, siteConfig } from "@/config/siteConfig";
import { getDictionary } from "@/dictionaries";
import { Section } from "@/components/Section";
import CaseStudies from "@/components/home/CaseStudies";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang: langParam } = await params;
    const lang = (langParam as Locale) || "pt";
    const dict = await getDictionary(lang);
    return {
        title: `Cases | Apix Technologies`,
        description: dict.casesPage.methodology.desc
    };
}

export default async function CasesPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;
    const dict = await getDictionary(lang);
    const { casesPage: t } = dict;

    return (
        <main className="min-h-screen bg-premium-dark">

            {/* Case studies list (using the component we built) */}
            <CaseStudies lang={lang} />

            {/* Methodology summary */}
            <Section className="bg-premium-white text-dark">
                <div className="max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-8 uppercase tracking-tight">
                        {t.methodology.title}
                    </h2>
                    <p className="text-lg text-dark/60 font-inter leading-relaxed mb-10">
                        {t.methodology.desc}
                    </p>
                    <div className="flex flex-wrap gap-12">
                        <div>
                            <p className="text-3xl font-outfit font-bold text-dark">99.9%</p>
                            <p className="text-xs uppercase tracking-widest text-dark/40 font-bold mt-2">{t.methodology.metrics.m1Label}</p>
                        </div>
                        <div>
                            <p className="text-3xl font-outfit font-bold text-dark">100%</p>
                            <p className="text-xs uppercase tracking-widest text-dark/40 font-bold mt-2">{t.methodology.metrics.m2Label}</p>
                        </div>
                        <div>
                            <p className="text-3xl font-outfit font-bold text-dark">&lt; 2h</p>
                            <p className="text-xs uppercase tracking-widest text-dark/40 font-bold mt-2">{t.methodology.metrics.m3Label}</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-premium-dark text-white border-t border-white/5 py-40 text-center">
                <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-10 max-w-3xl mx-auto uppercase tracking-tight leading-tight">
                    {t.cta.title}
                </h2>
                <button className="bg-secondary text-dark font-bold py-5 px-12 rounded-sm hover:-translate-y-1 transition-all uppercase tracking-widest text-sm">
                    {dict.home.hero.primaryCTA}
                </button>
            </Section>
        </main>
    );
}
