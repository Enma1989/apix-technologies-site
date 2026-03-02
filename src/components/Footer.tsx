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
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
                            {/* Método MaaS™ */}
                            <div>
                                <Link
                                    href={`/${lang}`}
                                    className="group flex items-center gap-3 mb-6 hover:opacity-95 transition-opacity"
                                >
                                    <Image
                                        src="/images/apix-07.png"
                                        alt="Apix Technologies"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                    <div className="flex items-baseline leading-none">
                                        <span className="text-white font-semibold tracking-wide text-xl">APIX</span>
                                        <span className="text-gray-500 font-light tracking-wide text-xl ml-1">TECH</span>
                                    </div>
                                </Link>
                                <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-4">
                                    Método MaaS™
                                </h4>
                                <p className="text-white/50 text-xs leading-relaxed">
                                    {siteConfig.home.hero.headline.line1[lang]}<br />
                                    {siteConfig.home.hero.headline.line2[lang]}
                                </p>
                            </div>

                            {/* Governança */}
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">
                                    {lang === "pt" ? "Governança" : lang === "en" ? "Governance" : "Gobernanza"}
                                </h4>
                                <ul className="space-y-4">
                                    {siteConfig.home.pillars.map((pillar) => (
                                        <li key={pillar.title[lang]}>
                                            <Link
                                                href={`/${lang}/servicos`}
                                                className="text-white/60 hover:text-secondary text-sm transition-colors"
                                            >
                                                {pillar.title[lang]}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Soluções */}
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">
                                    {lang === "pt" ? "Soluções" : lang === "en" ? "Solutions" : "Soluciones"}
                                </h4>
                                <ul className="space-y-4">
                                    {siteConfig.services.slice(0, 5).map((service) => (
                                        <li key={service.slug}>
                                            <Link
                                                href={`/${lang}/servicos/${service.slug}`}
                                                className="text-white/60 hover:text-secondary text-sm transition-colors"
                                            >
                                                {service.title[lang]}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Institucional */}
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">
                                    {lang === "pt" ? "Institucional" : lang === "en" ? "Corporate" : "Institucional"}
                                </h4>
                                <ul className="space-y-4">
                                    {siteConfig.navigation.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={`/${lang}${link.href}`}
                                                className="text-white/60 hover:text-secondary text-sm transition-colors"
                                            >
                                                {link.name[lang]}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link
                                            href={`/${lang}/privacidade`}
                                            className="text-white/60 hover:text-secondary text-sm transition-colors"
                                        >
                                            {lang === "pt" ? "Privacidade" : "Privacy"}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Contato */}
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">
                                    {lang === "pt" ? "Contato" : "Contact"}
                                </h4>
                                <p className="text-white/50 text-xs mb-6 break-all">
                                    {siteConfig.contact.brasil.email}
                                </p>
                                <a
                                    href="https://wa.me/5541991934437"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block border border-secondary/40 text-secondary text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-secondary hover:text-dark transition-all transform hover:-translate-y-1"
                                >
                                    WhatsApp
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
