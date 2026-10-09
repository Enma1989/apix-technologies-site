import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
    return (
        <p className={`mb-5 text-xs font-bold uppercase tracking-[0.22em] ${dark ? "text-[#FFD23F]" : "text-[#B88900]"}`}>
            {children}
        </p>
    );
}

export function SectionHeading({
    eyebrow,
    title,
    intro,
    centered = false,
    dark = false,
}: {
    eyebrow: string;
    title: string;
    intro?: string;
    centered?: boolean;
    dark?: boolean;
}) {
    return (
        <div className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
            <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
            <h2 className={`font-outfit text-3xl font-bold tracking-tight md:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>
                {title}
            </h2>
            {intro ? <p className={`mt-6 text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{intro}</p> : null}
        </div>
    );
}

export function CommercialHero({
    eyebrow,
    title,
    subtitle,
    primary,
    primaryHref,
    secondary,
    secondaryHref,
    image,
    imageAlt,
    imageClassName = "object-center",
}: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    primaryHref: string;
    secondary: string;
    secondaryHref: string;
    image: string;
    imageAlt: string;
    imageClassName?: string;
}) {
    return (
        <section className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-white/10 bg-[#0B0F14] pt-24 text-white">
            <Image src={image} alt={imageAlt} fill priority sizes="100vw" className={`object-cover opacity-80 ${imageClassName}`} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,13,.96)_0%,rgba(3,8,13,.84)_42%,rgba(3,8,13,.36)_68%,rgba(3,8,13,.12)_100%)] max-md:bg-[linear-gradient(90deg,rgba(3,8,13,.94)_0%,rgba(3,8,13,.82)_72%,rgba(3,8,13,.48)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,13,.46)_0%,transparent_34%,rgba(3,8,13,.28)_100%)]" />
            <div className="container-premium relative z-10 py-20 md:py-28">
                <div className="max-w-4xl">
                    <Eyebrow dark>{eyebrow}</Eyebrow>
                    <h1 className="font-outfit text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-6xl lg:text-7xl">
                        {title}
                    </h1>
                    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80 md:text-2xl">{subtitle}</p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                        <Link href={primaryHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-[#E6B800] bg-[#FFD23F] px-8 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#111] transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD23F]">
                            {primary}<ArrowRight aria-hidden="true" className="h-4 w-4" />
                        </Link>
                        <Link href={secondaryHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-black/20 px-8 text-center text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                            {secondary}<ArrowDown aria-hidden="true" className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function FaqList({ items }: { items: Array<{ question: string; answer: string }> }) {
    return (
        <div className="mx-auto max-w-4xl divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-6 shadow-sm md:px-10">
            {items.map((item) => (
                <details key={item.question} className="group py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-outfit text-lg font-bold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B88900]">
                        {item.question}
                        <span aria-hidden="true" className="text-2xl font-light text-[#B88900] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="max-w-3xl pt-4 leading-relaxed text-slate-600">{item.answer}</p>
                </details>
            ))}
        </div>
    );
}

export function FinalCommercialCta({
    title,
    text,
    primary,
    primaryHref,
    secondary,
    secondaryHref,
}: {
    title: string;
    text: string;
    primary: string;
    primaryHref: string;
    secondary: string;
    secondaryHref: string;
}) {
    return (
        <section className="relative overflow-hidden bg-[#0B0F14] py-24 text-white md:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,210,63,.12),transparent_48%)]" />
            <div className="container-premium relative z-10 text-center">
                <h2 className="mx-auto max-w-4xl font-outfit text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{text}</p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link href={primaryHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-[#E6B800] bg-[#FFD23F] px-8 text-xs font-bold uppercase tracking-[0.12em] text-[#111] transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD23F]">
                        {primary}<ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                    <Link href={secondaryHref} className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 px-8 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                        {secondary}
                    </Link>
                </div>
            </div>
        </section>
    );
}

