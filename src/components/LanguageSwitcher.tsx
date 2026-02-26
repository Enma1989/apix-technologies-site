"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, locales } from "@/config/siteConfig";

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
    const pathname = usePathname();

    const redirectedPathname = (locale: string) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <div className="flex items-center">
            {locales.map((locale, index) => {
                const isActive = locale === currentLang;

                return (
                    <div key={locale} className="flex items-center">
                        <Link
                            href={redirectedPathname(locale)}
                            className={
                                "px-2.5 py-1 rounded-md text-[12px] font-bold tracking-widest uppercase transition-all duration-300 " +
                                (isActive
                                    ? "bg-[#FFD23F] text-[#111111] border border-[#E6B800] shadow-[0_10px_30px_rgba(255,210,63,0.18)]"
                                    : "text-white/70 border border-transparent hover:text-[#FFD23F] hover:bg-white/5 hover:border-[#FFD23F]/40 hover:shadow-[0_10px_30px_rgba(255,210,63,0.12)]"
                                )
                            }
                        >
                            {locale}
                        </Link>
                        {index < locales.length - 1 && (
                            <span className="mx-2 text-white/25">|</span>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
