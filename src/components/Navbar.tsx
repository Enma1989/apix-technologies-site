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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/75 backdrop-blur-md border-b border-white/10">
            <div className="container-premium h-20 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href={`/${lang}`}
                    className="group flex items-center gap-3 hover:opacity-95 transition-opacity"
                >
                    {/* Logo um pouco maior, premium, sem exagero */}
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
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => {
                        const href = `/${lang}${link.href === "/" ? "" : link.href}`;
                        const isActive = pathname === href || (link.href === "/" && pathname === `/${lang}`);

                        return (
                            <Link
                                key={link.href}
                                href={href}
                                className={`text-[14px] font-bold tracking-wide transition-all duration-300
                                    ${isActive
                                        ? "text-secondary drop-shadow-[0_0_8px_rgba(255,210,63,0.45)]"
                                        : "text-white/70 hover:text-secondary"
                                    }
                                `}
                            >
                                {link.name[lang]}
                            </Link>
                        );
                    })}
                </div>

                {/* Language Switcher */}
                <div className="flex items-center gap-8">
                    <LanguageSwitcher currentLang={lang} />
                </div>
            </div>
        </nav>
    );
}
