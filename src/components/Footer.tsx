import Link from "next/link";
import Image from "next/image";
import { Locale, siteConfig } from "@/config/siteConfig";

export default function Footer({ lang }: { lang: Locale }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-20 mt-24">
            {/* Separator premium pra NÃO misturar com a seção anterior */}
            <div className="h-10 bg-gradient-to-b from-transparent to-black/60" />

            {/* Fundo sólido (mata o vazamento do background) */}
            <div className="relative overflow-hidden bg-[#0B0F14]">
                {/* Overlay + vinheta pra profundidade */}
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />

                <div className="relative z-10 border-t border-white/10 pt-24 pb-12">
                    <div className="container-premium">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                            {/* Brand Info */}
                            <div className="lg:col-span-1">
                                <Link
                                    href={`/${lang}`}
                                    className="group flex items-center gap-3 mb-6 hover:opacity-95 transition-opacity"
                                >
                                    <Image
                                        src="/images/apix-07.png"
                                        alt="Apix Technologies"
                                        width={44}
                                        height={44}
                                        className="object-contain"
                                    />

                                    <div className="flex items-baseline leading-none">
                                        <span className="text-white font-semibold tracking-wide text-2xl group-hover:text-white transition-colors">
                                            APIX
                                        </span>
                                        <span className="text-gray-400 font-light tracking-wide text-2xl ml-1 group-hover:text-gray-400 transition-colors">
                                            TECH
                                        </span>
                                    </div>
                                </Link>
                                <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                                    {siteConfig.home.hero.subheadline[lang].substring(0, 120)}...
                                </p>
                            </div>

                            {/* Specialties */}
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                                    {lang === "pt" ? "Especialidades" : lang === "en" ? "Specialties" : "Especialidades"}
                                </h4>
                                <ul className="space-y-4">
                                    {siteConfig.services.slice(0, 5).map((service) => (
                                        <li key={service.slug}>
                                            <Link
                                                href={`/${lang}/servicos/${service.slug}`}
                                                className="text-white/65 hover:text-secondary text-sm transition-colors"
                                            >
                                                {service.title[lang]}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Corporate */}
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                                    {lang === "pt" ? "Institucional" : lang === "en" ? "Corporate" : "Institucional"}
                                </h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link
                                            href={`/${lang}/privacidade`}
                                            className="text-white/65 hover:text-secondary text-sm transition-colors"
                                        >
                                            {lang === "pt" ? "Política de Privacidade" : lang === "en" ? "Privacy Policy" : "Política de Privacidad"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={`/${lang}/termos`}
                                            className="text-white/65 hover:text-secondary text-sm transition-colors"
                                        >
                                            {lang === "pt" ? "Termos de Uso" : lang === "en" ? "Terms of Use" : "Términos de Uso"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={`/${lang}/cookies`}
                                            className="text-white/65 hover:text-secondary text-sm transition-colors"
                                        >
                                            {lang === "pt" ? "Política de Cookies" : lang === "en" ? "Cookies Policy" : "Política de Cookies"}
                                        </Link>
                                    </li>
                                    {siteConfig.navigation.links.slice(1).map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={`/${lang}${link.href}`}
                                                className="text-white/65 hover:text-secondary text-sm transition-colors"
                                            >
                                                {link.name[lang]}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Global */}
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                                    Global
                                </h4>
                                <p className="text-white/70 text-sm mb-4">{siteConfig.contact.brasil.email}</p>

                                <div className="mb-8 flex justify-start">
                                    <a
                                        href="https://cybermap.kaspersky.com/pt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-secondary/80 hover:text-secondary text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors whitespace-nowrap -ml-[14px]"
                                    >
                                        <span className="shrink-0 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                                        {lang === "pt" ? "Acompanhe Ameaças em Tempo Real" : lang === "en" ? "Track Threats in Real Time" : "Acompañe Amenazas en tiempo Real"}
                                    </a>
                                </div>

                                <a
                                    href="https://wa.me/5541919344437"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block border border-secondary/50 text-secondary text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-secondary hover:text-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-secondary/5"
                                >
                                    {lang === "pt" ? "CONTATO" : lang === "en" ? "CONTACT" : "CONTACTO"}
                                </a>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-white/50 text-[10px] md:text-xs tracking-wide uppercase">
                                {siteConfig.footer.presence[lang]}
                            </p>
                            <p className="text-white/40 text-[10px] uppercase tracking-widest">
                                © {currentYear} {siteConfig.brand.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
