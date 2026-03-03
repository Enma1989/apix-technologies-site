"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Locale, siteConfig } from "@/config/siteConfig";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ lang }: { lang: Locale }) {
    const { links } = siteConfig.navigation;
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-white/5 py-4 lg:py-5">
            <div className="container-premium flex items-center justify-between">
                {/* Logo */}
                <Link
                    href={`/${lang}`}
                    className="group flex items-center gap-3 hover:opacity-95 transition-opacity"
                >
                    <Image
                        src="/images/apix-07.png"
                        alt="Apix Technologies"
                        width={56}
                        height={56}
                        priority
                        className="object-contain"
                    />

                    <div className="flex items-baseline leading-none">
                        <span className="text-white font-semibold tracking-wide text-[26px] group-hover:text-white transition-colors">
                            APIX
                        </span>
                        <span className="text-gray-300 font-light tracking-wide text-[26px] ml-1 group-hover:text-gray-300 transition-colors">
                            TECH
                        </span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-x-8 xl:gap-x-10">
                    {links.map((link) => {
                        const href = `/${lang}${link.href === "/" ? "" : link.href}`;
                        const isActive = pathname === href || (link.href === "/" && pathname === `/${lang}`);

                        return (
                            <Link
                                key={link.href}
                                href={href}
                                className={`relative text-sm font-semibold tracking-wide transition-all duration-300 py-2 group/link ${isActive
                                    ? "text-[#FFD23F] drop-shadow-[0_0_8px_rgba(255,210,63,0.3)]"
                                    : "text-white/60 hover:text-white"
                                    }`}
                            >
                                {link.name[lang]}
                                {/* Hover subtle underline effect */}
                                <span className={`absolute left-0 bottom-0 w-full h-px bg-[#FFD23F] transform origin-left transition-transform duration-300 ease-out ${isActive ? "scale-x-100 opacity-60" : "scale-x-0 group-hover/link:scale-x-100 opacity-40"
                                    }`}></span>
                            </Link>
                        );
                    })}
                </div>

                {/* Language Switcher & Extras */}
                <div className="flex items-center gap-6 md:gap-8 ml-4 pl-4 md:ml-8 md:pl-8 border-l border-white/10 h-10">
                    <LanguageSwitcher currentLang={lang} />
                </div>
            </div>
        </nav>
    );
}
