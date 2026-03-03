import { Locale } from "@/config/siteConfig";
import Link from "next/link";
import { Metadata } from "next";
import MaaSPillarsSection from "@/components/about/MaaSPillarsSection";
import OperationalPresenceSection from "@/components/about/OperationalPresenceSection";

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
    return {
        title: "Sobre a Apix | Governância Tecnológica Estruturada",
        description: "Estrutura antes de ferramenta. Método antes de improviso.",
    };
}

export default async function AboutPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;

    return (
        <main className="min-h-screen bg-white text-zinc-900 selection:bg-[#FFD23F] selection:text-black">
            {/* Bloco 1 - HERO SECTION (Dark / Video) */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <iframe
                        className="absolute w-[300vw] h-[300vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none md:w-[150vw] md:h-[150vh] lg:w-[120vw] lg:h-[120vh]"
                        src="https://www.youtube.com/embed/rYMAlFFZcCY?autoplay=1&mute=1&loop=1&playlist=rYMAlFFZcCY&controls=0&showinfo=0&modestbranding=1&rel=0"
                        title="Apix Tech Institutional"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/65 z-10 pointer-events-none"></div>

                <div className="container-premium relative z-20 w-full">
                    <div className="max-w-4xl">
                        <div className="mb-6 md:mb-10">
                            <Link
                                href={`/${lang}`}
                                className="text-white/60 text-xs md:text-sm font-semibold uppercase tracking-widest hover:text-[#FFD23F] transition-colors"
                            >
                                ← INSTITUCIONAL
                            </Link>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-bold uppercase tracking-tight text-white mb-6">
                            SOBRE A <span className="text-[#FFD23F]">APIX</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-inter font-light text-slate-300 tracking-wide leading-relaxed max-w-3xl">
                            Arquitetura, governança e responsabilidade tecnológica aplicada.
                        </h2>
                    </div>
                </div>
            </section>

            {/* Bloco 2 — Identidade (Fundo Cinza) */}
            <section className="py-24 md:py-32 bg-zinc-50">
                <div className="container-premium max-w-5xl mx-auto">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-tight text-zinc-900 mb-6 uppercase">
                            A APIX NÃO É SUPORTE TÉCNICO.
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-inter font-light text-zinc-500 mb-12">
                            É governança e arquitetura aplicada.
                        </h3>

                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl font-outfit font-medium text-zinc-800 leading-snug">
                                A Apix é uma empresa dedicada à estruturação e governança de ambientes tecnológicos corporativos.
                            </p>
                            <p className="text-lg md:text-xl font-inter font-light text-zinc-600 leading-relaxed">
                                Não executamos apenas serviços técnicos. Projetamos arquitetura, organizamos infraestrutura e sustentamos operações sob método contínuo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bloco 3 — Origem do Nome (Fundo Branco) */}
            <section className="py-24 md:py-32 bg-white border-y border-zinc-200">
                <div className="container-premium max-w-5xl mx-auto">
                    <div className="border-b border-zinc-200 pb-12 mb-12">
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-zinc-900 uppercase tracking-tight">
                            A Origem da Apix
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                        <div>
                            <p className="text-xl md:text-2xl font-inter font-light text-zinc-600 leading-relaxed">
                                O nome nasce da inspiração em <strong className="font-semibold text-zinc-900">Apis</strong> (a abelha operária), símbolo universal de trabalho árduo, estruturação matemática e lealdade à colmeia.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <p className="text-lg font-inter text-zinc-600 leading-relaxed">
                                Assim como a colmeia é uma verdadeira maravilha da engenharia orgânica sustentada pelo esforço coletivo e organizado, os ambientes tecnológicos exigem rigor e método para funcionar perfeitamente.
                            </p>
                            <p className="text-lg font-inter text-zinc-600 leading-relaxed">
                                O <strong className="font-bold text-zinc-900">X</strong> no final representa o elemento de tecnologia, exatidão e a constante busca pela excelência na integração estrutural.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bloco 4 — Arquitetura MaaS™ (Interativo) */}
            <MaaSPillarsSection />

            {/* Bloco 5 — Missão e Visão (Fundo Branco) */}
            <section className="py-24 md:py-32 bg-white border-y border-zinc-200">
                <div className="container-premium max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Card Missão */}
                        <div className="group relative bg-zinc-50 border border-zinc-100 rounded-[16px] p-10 md:p-12 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[#FFD23F]/30 overflow-hidden flex flex-col h-full">
                            <div className="mb-10">
                                <h3 className="text-xs md:text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4">
                                    Nossa Missão
                                </h3>
                                <div className="w-12 h-px bg-[#FFD23F]/80"></div>
                            </div>

                            <p className="text-2xl md:text-3xl font-outfit font-semibold text-zinc-900 leading-snug mb-8 flex-grow max-w-[650px]">
                                <span className="group-hover:text-[#FFD23F] transition-colors duration-300">Estruturar</span> e governar ambientes tecnológicos corporativos, eliminando o improviso e transformando tecnologia em base previsível, segura e estratégica.
                            </p>

                            <p className="text-sm font-inter text-zinc-500 font-light mt-auto">
                                Acreditamos que tecnologia deve operar com responsabilidade, método e continuidade.
                            </p>

                            {/* Micro-link hover */}
                            <div className="absolute bottom-10 right-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                <span className="text-zinc-400 group-hover:text-zinc-600 transition-colors font-semibold text-xs tracking-widest uppercase flex items-center gap-1">
                                    &rarr; Estratégia
                                </span>
                            </div>
                        </div>

                        {/* Card Visão */}
                        <div className="group relative bg-zinc-50 border border-zinc-100 rounded-[16px] p-10 md:p-12 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[#FFD23F]/30 overflow-hidden flex flex-col h-full">
                            <div className="mb-10">
                                <h3 className="text-xs md:text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4">
                                    Nossa Visão
                                </h3>
                                <div className="w-12 h-px bg-[#FFD23F]/80"></div>
                            </div>

                            <p className="text-2xl md:text-3xl font-outfit font-semibold text-zinc-900 leading-snug mb-8 flex-grow max-w-[650px]">
                                <span className="group-hover:text-[#FFD23F] transition-colors duration-300">Ser referência</span> em Governança Tecnológica Estruturada, reconhecida por elevar a maturidade operacional das empresas.
                            </p>

                            <p className="text-sm font-inter text-zinc-500 font-light mt-auto">
                                Acreditamos que tecnologia deve operar com responsabilidade, método e continuidade.
                            </p>

                            {/* Micro-link hover */}
                            <div className="absolute bottom-10 right-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                <span className="text-zinc-400 group-hover:text-zinc-600 transition-colors font-semibold text-xs tracking-widest uppercase flex items-center gap-1">
                                    &rarr; Direção
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bloco 6 — Valores (Fundo Cinza) */}
            <section className="py-24 md:py-32 bg-zinc-50">
                <div className="container-premium max-w-5xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-zinc-900 uppercase tracking-tight">
                            Valores Inegociáveis
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            "Trabalho Árduo",
                            "Honestidade",
                            "Proatividade",
                            "Lealdade",
                            "Estrutura",
                            "Responsabilidade"
                        ].map((valor, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center p-8 border border-zinc-100 bg-white rounded-2xl hover:shadow-xl hover:border-zinc-200 transition-all duration-300">
                                <span className="text-xl md:text-2xl font-outfit font-semibold text-zinc-900 text-center">
                                    {valor}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bloco 7 — Presença Operacional (Fundo Branco - Componente Interativo) */}
            <OperationalPresenceSection lang={lang} />

            {/* Bloco 8 — Seção Final (Fundo Cinza) */}
            <section className="py-32 md:py-40 bg-zinc-50 border-t border-zinc-200">
                <div className="container-premium max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-zinc-900 uppercase tracking-tight mb-10 leading-tight">
                        Tecnologia deve operar com confiança.
                    </h2>

                    <div className="text-xl md:text-2xl font-inter font-light text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-16 space-y-4">
                        <p>A Apix existe para restaurar a confiança entre empresa e tecnologia.</p>
                        <p>Não através de promessas.</p>
                        <p className="font-semibold text-zinc-900">Mas através de estrutura, método e governança permanente.</p>
                    </div>

                    <Link
                        href={`/${lang}/contato`}
                        className="inline-flex items-center justify-center h-14 md:h-16 bg-zinc-900 text-white font-bold px-10 md:px-14 rounded-full hover:bg-[#FFD23F] hover:text-black hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest text-sm md:text-base border border-transparent"
                    >
                        {lang === "pt" ? "INICIAR DIAGNÓSTICO ESTRUTURAL" : lang === "es" ? "INICIAR DIAGNÓSTICO ESTRUCTURAL" : "START STRUCTURAL DIAGNOSTIC"}
                    </Link>
                </div>
            </section>
        </main>
    );
}

