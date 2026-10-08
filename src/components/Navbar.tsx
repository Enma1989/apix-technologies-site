"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Locale } from "@/config/siteConfig";
import LanguageSwitcher from "./LanguageSwitcher";
import { Dictionary } from "@/dictionaries";

const SOLUTION_HREFS = new Set(["/servicos", "/projetos", "/servicos/ciberseguranca"]);

export default function Navbar({ lang, dict }: { lang: Locale; dict: Dictionary }) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const solutionLinks = dict.navigation.links.filter((link) => SOLUTION_HREFS.has(link.href));
    const primaryLinks = dict.navigation.links.filter((link) => !SOLUTION_HREFS.has(link.href));
    const solutionsLabel = lang === "pt" ? "Soluções" : lang === "es" ? "Soluciones" : "Solutions";
    const menuOpenLabel = lang === "pt" ? "Abrir menu" : lang === "es" ? "Abrir menú" : "Open menu";
    const menuCloseLabel = lang === "pt" ? "Fechar menu" : lang === "es" ? "Cerrar menú" : "Close menu";

    // Lock body scroll and listen for ESC key when mobile menu is open
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5 h-16 lg:h-auto py-0 lg:py-5 flex items-center">
                <div className="container-premium flex items-center justify-between w-full">
                    {/* Logo */}
                    <Link
                        href={`/${lang}`}
                        className="group flex items-center gap-3 hover:opacity-95 transition-opacity"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Image
                            src="/images/apix-07.png"
                            alt="Apix Technologies"
                            width={48}
                            height={48}
                            priority
                            className="object-contain w-10 h-10 lg:w-14 lg:h-14"
                        />

                        <div className="flex items-baseline leading-none">
                            <span className="text-white font-semibold tracking-wide text-xl lg:text-[26px] group-hover:text-white transition-colors">
                                APIX
                            </span>
                            <span className="text-gray-300 font-light tracking-wide text-xl lg:text-[26px] ml-1 group-hover:text-gray-300 transition-colors">
                                TECH
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation & Extras */}
                    <div className="hidden lg:flex items-center">
                        <div className="flex items-center gap-x-7 xl:gap-x-9">
                            {primaryLinks.slice(0, 1).map((link) => {
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
                                        {link.name}
                                        {/* Hover subtle underline effect */}
                                        <span className={`absolute left-0 bottom-0 w-full h-px bg-[#FFD23F] transform origin-left transition-transform duration-300 ease-out ${isActive ? "scale-x-100 opacity-60" : "scale-x-0 group-hover/link:scale-x-100 opacity-40"
                                            }`}></span>
                                    </Link>
                                );
                            })}
                            <details className="group relative">
                                <summary className={`flex cursor-pointer list-none items-center gap-1.5 py-2 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD23F] ${solutionLinks.some((link) => pathname.startsWith(`/${lang}${link.href}`)) ? "text-[#FFD23F]" : "text-white/60 hover:text-white"}`}>
                                    {solutionsLabel}<ChevronDown aria-hidden="true" className="h-4 w-4 transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0B0F14]/95 p-3 shadow-2xl backdrop-blur-xl">
                                    {solutionLinks.map((link) => (
                                        <Link key={link.href} href={`/${lang}${link.href}`} className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/5 hover:text-[#FFD23F] focus-visible:outline-2 focus-visible:outline-[#FFD23F]">
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </details>
                            {primaryLinks.slice(1).map((link) => {
                                const href = `/${lang}${link.href === "/" ? "" : link.href}`;
                                const isActive = pathname === href;
                                return (
                                    <Link key={link.href} href={href} className={`relative py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${isActive ? "text-[#FFD23F]" : "text-white/60 hover:text-white"}`}>
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Desktop Language Switcher */}
                        <div className="flex items-center ml-4 pl-4 md:ml-8 md:pl-8 border-l border-white/10 h-10">
                            <LanguageSwitcher currentLang={lang} />
                        </div>
                    </div>

                    {/* Mobile Controls (Hamburger Only) */}
                    <div className="flex lg:hidden items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 -mr-2 text-white/90 hover:text-[#FFD23F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD23F]/50 rounded-md"
                            aria-label={menuOpenLabel}
                            aria-expanded={isMobileMenuOpen}
                        >
                            <Menu className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Drawer Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                {/* Drawer Panel */}
                <div
                    className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-[320px] backdrop-blur-xl border-l border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] transform transition-transform duration-300 ease-out flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    style={{ backgroundColor: 'rgba(10, 10, 10, 0.98)' }}
                    onClick={(e) => e.stopPropagation()} // Prevent clicking inside drawer from closing it
                >
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between p-5 border-b border-white/10 shrink-0">
                        <Link
                            href={`/${lang}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                        >
                            <Image
                                src="/images/apix-07.png"
                                alt="Apix Logo"
                                width={28}
                                height={28}
                                className="object-contain"
                            />
                            <div className="flex items-baseline leading-none">
                                <span className="text-white font-semibold tracking-wide text-[20px]">
                                    APIX
                                </span>
                                <span className="text-[#FFD23F] font-light tracking-wide text-[20px] ml-1">
                                    TECH
                                </span>
                            </div>
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 -mr-2 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded-md"
                            aria-label={menuCloseLabel}
                        >
                            <X className="w-7 h-7" />
                        </button>
                    </div>

                    {/* Language Switcher in Drawer Top */}
                    <div className="border-b border-white/5 py-4 px-6 shrink-0 flex justify-center bg-white/[0.02]">
                        <LanguageSwitcher currentLang={lang} />
                    </div>

                    {/* Drawer Links */}
                    <div className="flex flex-col px-6 py-8 gap-7">
                        {dict.navigation.links.map((link) => {
                            const href = `/${lang}${link.href === "/" ? "" : link.href}`;
                            const isActive = pathname === href || (link.href === "/" && pathname === `/${lang}`);

                            return (
                                <Link
                                    key={link.href}
                                    href={href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-xl font-outfit uppercase tracking-wider transition-colors ${isActive ? "text-[#FFD23F] font-bold" : "text-white/80 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Drawer Footer / CTA */}
                    <div className="mt-auto p-6 border-t border-white/10">
                        <Link
                            href={`/${lang}/contato`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center w-full py-4 bg-[#FFD23F] text-[#111] font-bold uppercase tracking-widest text-xs rounded-sm hover:-translate-y-1 transition-transform"
                        >
                            {dict.home.hero.primaryCTA || "Falar com Especialista"}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

