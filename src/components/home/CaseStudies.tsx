import { Locale } from "@/config/siteConfig";
import { getDictionary } from "@/dictionaries";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default async function CaseStudies({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);
    const { caseStudies } = dict.home;
    return (
        <>
            {/* 1. HERO — Full Screen Estratégico */}
            <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#080808]">
                <Image
                    src="/images/cases-monitoring-hero.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    aria-hidden="true"
                    className="object-cover object-[66%_center] md:object-center"
                />

                {/* Contraste dirigido: protege o texto sem esconder a fotografia. */}
                <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.90)_0%,rgba(0,0,0,0.76)_36%,rgba(0,0,0,0.28)_64%,rgba(0,0,0,0.08)_100%)] max-md:bg-[linear-gradient(90deg,rgba(0,0,0,0.90)_0%,rgba(0,0,0,0.78)_70%,rgba(0,0,0,0.35)_100%)]" />
                <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.08)_34%,rgba(0,0,0,0.24)_100%)]" />

                <div className="relative z-10 flex min-h-[100svh] items-center">
                    <div className="container-premium w-full pt-20 text-left text-white md:translate-y-16">
                        <div className="mb-7 h-px w-14 bg-[#FFD23F]" />
                        <h1 className="max-w-2xl whitespace-pre-line text-4xl font-semibold leading-[1.05] tracking-tight text-shadow-premium md:text-5xl lg:text-7xl">
                            {caseStudies.heroTitle}
                        </h1>
                        <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/80 text-shadow-premium md:text-xl">
                            {caseStudies.heroSubtitle}
                        </p>
                    </div>
                </div>
            </section>

            <div className="bg-white text-slate-900 overflow-hidden font-inter border-t border-zinc-200">
                {/* 2. BLOCO DE MÉTRICAS — Forte e Silencioso */}
                <div className="max-w-6xl mx-auto px-6 lg:px-0 pt-32 pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
                        {caseStudies.metrics.map((metric, idx) => (
                            <div key={idx} className="flex flex-col items-start border-l-2 border-slate-900 pl-8">
                                <span className="text-6xl md:text-8xl font-outfit font-bold text-slate-900 mb-6 tracking-tighter">
                                    {metric.value}
                                </span>
                                <span className="text-sm md:text-base text-slate-500 uppercase tracking-[0.2em] font-medium leading-relaxed max-w-xs">
                                    {metric.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. SEPARADOR ESTRUTURAL */}
                <div className="w-full border-t border-zinc-200 my-10 max-w-screen-xl mx-auto"></div>

                {/* 4. CASO ANALÍTICO — Estrutura Consultiva */}
                <div className="max-w-6xl mx-auto px-6 lg:px-0 py-24">

                    <div className="mb-20">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">
                            {caseStudies.case1.badge}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 tracking-tight">
                            {caseStudies.case1.title}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        <div className="lg:col-span-7 space-y-16">
                            <div>
                                <h4 className="text-[11px] uppercase tracking-[0.2em] text-slate-900 mb-6 font-bold border-b border-zinc-200 pb-4">
                                    {caseStudies.case1.contextLabel}
                                </h4>
                                <p className="text-lg text-slate-600 font-light leading-relaxed">
                                    {caseStudies.case1.contextDesc}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[11px] uppercase tracking-[0.2em] text-slate-900 mb-6 font-bold border-b border-zinc-200 pb-4">
                                    {caseStudies.case1.riskLabel}
                                </h4>
                                <p className="text-lg text-slate-600 font-light leading-relaxed">
                                    {caseStudies.case1.riskDesc}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[11px] uppercase tracking-[0.2em] text-slate-900 mb-6 font-bold border-b border-zinc-200 pb-4">
                                    {caseStudies.case1.interventionLabel}
                                </h4>
                                <p className="text-lg text-slate-900 font-medium leading-relaxed">
                                    {caseStudies.case1.interventionDesc}
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 bg-zinc-50 p-10 lg:p-14 rounded-sm border border-zinc-100">
                            <h4 className="text-[11px] uppercase tracking-[0.2em] text-slate-900 mb-10 font-bold">
                                {caseStudies.case1.resultsLabel}
                            </h4>

                            <ul className="space-y-6">
                                {caseStudies.case1.results.map((res, i) => (
                                    <li key={i} className={`text-base md:text-lg font-light border-b border-zinc-200 pb-6 ${i === caseStudies.case1.results.length - 1 ? 'font-medium text-slate-900 pt-2 border-b-0 pb-0' : 'text-slate-700'}`}>
                                        <span className={`block mb-1 ${i === caseStudies.case1.results.length - 1 ? 'text-slate-500 font-light' : 'font-medium text-slate-900'}`}>{res.label}</span>
                                        {res.value}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* SEPARADOR ESTRUTURAL */}
                <div className="w-full border-t border-zinc-200 mt-10 mb-20 max-w-screen-xl mx-auto"></div>

                {/* 5. CAMADAS DE GOVERNANÇA APLICADAS */}
                <div className="max-w-6xl mx-auto px-6 lg:px-0 pb-32">
                    <h3 className="text-3xl md:text-4xl font-outfit font-bold text-slate-900 tracking-tight text-center mb-20">
                        {caseStudies.layersTitle}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
                        {caseStudies.layers.map((layer, idx) => (
                            <div key={idx}>
                                <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-900 mb-8 border-b border-slate-900 pb-4">
                                    {layer.title}
                                </h4>
                                <ul className="space-y-5 text-base text-slate-600 font-light">
                                    {layer.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. BLOCO DE POSICIONAMENTO ESTRATÉGICO */}
                <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#050505] text-white py-40 px-6 lg:px-0 mt-10">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-8 leading-tight">
                            {caseStudies.disclaimer.headline}
                            <br className="max-md:hidden" />
                            <span className="text-zinc-500 font-medium">
                                {caseStudies.disclaimer.highlight}
                            </span>
                        </h3>

                        <p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl leading-relaxed mb-16">
                            {caseStudies.disclaimer.desc}
                        </p>

                        <Link
                            href={`/${lang}/contato`}
                            className="inline-flex items-center justify-center h-16 border border-zinc-700 hover:border-white px-12 md:px-16 text-white font-medium text-sm tracking-[0.2em] uppercase transition-all duration-300 group"
                        >
                            {caseStudies.disclaimer.cta}
                            <ArrowRight size={18} className="ml-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}
