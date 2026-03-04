import { Locale } from "@/config/siteConfig";
import Link from "next/link";
import Image from "next/image";

import { getDictionary } from "@/dictionaries";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang: langParam } = await params;
    const lang = (langParam as Locale) || "pt";
    const dict = await getDictionary(lang);
    return {
        title: `Blog | Apix Technologies`,
        description: dict.blogPage.hero.desc
    };
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam as Locale;
    const dict = await getDictionary(lang);
    const { blogPage: t } = dict;

    return (
        <main className="min-h-screen bg-premium-dark overflow-x-hidden">
            {/* 1. HERO FULL-SCREEN */}
            <section className="relative min-h-[100svh] w-full flex items-center overflow-hidden bg-black">
                {/* 2. BACKGROUND IMAGE */}
                <Image
                    src="/images/blog.jpg"
                    alt="Blog Apix - Perspectiva Consultiva"
                    fill
                    priority
                    className="object-cover object-center scale-[1.02] hero-bg-filter"
                />

                {/* 3. OVERLAY APix (Lighter - Increased Transparency) */}
                <div
                    className="absolute inset-0 z-[1] backdrop-blur-md pointer-events-none"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.40) 100%)'
                    }}
                />

                {/* 4. CONTEÚDO DO HERO */}
                <div className="relative z-10 flex min-h-screen items-center pt-20 w-full">
                    <div className="mx-auto w-full max-w-6xl px-6">
                        <div className="max-w-3xl">
                            <div className="inline-block px-4 py-1.5 border border-white/20 bg-black/30 backdrop-blur-md rounded-full mb-8">
                                <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
                                    {t.hero.badge}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-bold uppercase tracking-tight text-white mb-6 leading-[1.1] text-shadow-premium">
                                {t.hero.title1} <br className="hidden md:block" />
                                <span className="text-[#FFD23F] drop-shadow-[0_0_20px_rgba(255,210,63,0.4)]">{t.hero.title2}</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/85 text-shadow-premium font-inter leading-relaxed max-w-2xl mb-12">
                                {t.hero.desc}
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <a href="#newsletter" className="inline-flex items-center justify-center h-12 md:h-14 bg-[#FFD23F] border border-[#FFD23F] text-[#111111] font-bold px-8 rounded-full hover:brightness-110 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm">
                                    {t.hero.action1}
                                </a>
                                <a href="#artigos" className="inline-flex items-center justify-center h-12 md:h-14 bg-transparent border border-white/20 text-white font-bold px-8 rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm">
                                    {t.hero.action2}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TRANSIÇÃO PARA LISTA DE POSTS */}
            <div className="h-24 w-full bg-gradient-to-b from-black to-white" id="artigos" />

            {/* 6. GRID EDITORIAL PREMIUM */}
            <section className="bg-white py-20 pb-40">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-12 md:grid-cols-3">
                        {t.posts.map((post: any) => (
                            <Link
                                href={`/${lang}/blog/${post.slug}`}
                                key={post.slug}
                                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD23F]/5 transition-all duration-500 relative"
                            >
                                {/* Opcional leve glow dourado no hover na borda inferior */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD23F]/0 to-transparent group-hover:via-[#FFD23F]/60 transition-all duration-700"></div>

                                {/* Thumbnail 16:9 Real */}
                                <div className="relative aspect-video w-full overflow-hidden bg-black">
                                    <Image
                                        src={post.image || "/images/blog.jpg"}
                                        alt={post.title}
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />

                                    {/* overlay Apix */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/70 pointer-events-none" />
                                    <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />

                                    {/* label categoria (Apix standard) */}
                                    <div className="absolute left-4 top-4 z-10">
                                        <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold tracking-widest text-white/90 backdrop-blur-md shadow-sm">
                                            {post.category.toUpperCase()}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <p className="text-[11px] uppercase tracking-widest font-semibold text-zinc-400 mb-4 font-inter">
                                        {post.date}
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-outfit font-bold mb-4 tracking-tight leading-snug text-slate-900 group-hover:text-secondary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed font-inter line-clamp-2 mb-8 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-800 mt-auto group-hover:text-secondary transition-colors">
                                        {post.readMore}
                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. NEWSLETTER SECTION */}
            <section id="newsletter" className="bg-premium-dark text-white border-t border-white/5 py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

                <div className="container-premium max-w-2xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6 tracking-tight uppercase">
                        {t.newsletter.title}
                    </h2>
                    <p className="text-white/60 mb-12 font-inter text-lg">
                        {t.newsletter.desc}
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD23F]/0 via-[#FFD23F]/20 to-[#FFD23F]/0 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
                        <input
                            type="email"
                            placeholder={t.newsletter.placeholder}
                            className="relative flex-grow bg-white/5 border border-white/15 backdrop-blur-md px-6 py-4 text-sm text-white placeholder-white/40 focus:border-[#FFD23F] focus:bg-white/10 outline-none transition-all rounded-md sm:rounded-r-none"
                        />
                        <button className="relative bg-[#FFD23F] text-dark font-bold px-8 py-4 uppercase tracking-widest text-xs hover:brightness-110 hover:shadow-[0_0_15px_rgba(255,210,63,0.3)] transition-all rounded-md sm:rounded-l-none">
                            {t.newsletter.action}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
