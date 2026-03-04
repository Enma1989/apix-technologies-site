import { Locale } from "@/config/siteConfig";
import { ContactForm } from "@/components/contact/ContactForm";
import Image from "next/image";

import { getDictionary } from "@/dictionaries";

export default async function ContactPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;
    const dict = await getDictionary(lang);
    const t = dict.contactPage;

    return (
        <main className="min-h-screen bg-white">
            {/* Section: Contact & Diagnosis (Minimalist Executive) */}
            <section className="py-20 lg:py-28 px-6">
                <div className="max-w-[1100px] mx-auto text-center">

                    {/* Part 1: Headline */}
                    <div className="mb-16 lg:mb-20">
                        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 max-w-3xl mx-auto leading-tight">
                            {t.headline}
                        </h1>
                        <p className="text-base md:text-lg text-neutral-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                            {t.subheadline}
                        </p>
                    </div>

                    {/* Part 2: Form Container */}
                    <div className="max-w-2xl mx-auto mt-16 mb-28">
                        <ContactForm lang={lang} />
                    </div>

                    {/* Part 3: How it Works */}
                    <div className="mt-28">
                        <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-neutral-400 mb-12">
                            {t.howItWorks}
                        </h2>

                        <div className="max-w-2xl mx-auto space-y-0 relative">
                            {/* Vertical line connector */}
                            {/* <div className="absolute left-5 top-0 bottom-0 w-px bg-neutral-200 z-0" /> */}

                            <div className="flex flex-col gap-y-12">
                                {t.steps.map((step, idx) => (
                                    <div key={step.num} className="flex items-start gap-8 text-left group">
                                        <div className="relative flex flex-col items-center">
                                            <span className="text-neutral-300 font-semibold w-10 text-lg leading-none z-10 bg-white py-1">
                                                {step.num}
                                            </span>
                                            {idx !== t.steps.length - 1 && (
                                                <div className="w-px h-16 bg-neutral-200 mt-4" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-xl font-medium text-neutral-900 group-hover:text-black transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
