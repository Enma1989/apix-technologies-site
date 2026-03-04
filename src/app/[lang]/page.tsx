import { Locale, siteConfig } from "@/config/siteConfig";
import { getDictionary } from "@/dictionaries";
import Image from "next/image";
import Link from "next/link";
import StrategicStatement from "@/components/home/StrategicStatement";
import StrategicPillars from "@/components/home/StrategicPillars";
import AuditCTASection from "@/components/home/AuditCTASection";
import ServicesOverview from "@/components/home/ServicesOverview";
import Methodology from "@/components/home/Methodology";
import ConsultativeAuditCTA from "@/components/home/ConsultativeAuditCTA";
import CredibilitySection from "@/components/home/CredibilitySection";
import FinalCTA from "@/components/home/FinalCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen text-white pt-24 relative flex items-center bg-transparent overflow-hidden">
        {/* Fixed Background Layer for Parallax Effect (Contained in Hero) */}
        <div className="absolute inset-0 -z-10 h-[120%]">
          <Image
            src="/images/whiteserver.jpg"
            alt="Data Center Background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-right saturate-[0.85] brightness-[0.9]"
          />
        </div>

        {/* Custom Hero Overlay - Horizontal Gradient for Home */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.70) 20%, rgba(0,0,0,0.50) 35%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.00) 60%)'
          }}
        />

        <div className="container-premium relative z-20">
          <div className="max-w-4xl py-16 md:py-32 lg:-translate-x-12 transition-transform duration-500">
            {/* Eyebrow Tagline */}
            <div className="mb-8">
              <span className="text-[#FFD23F] font-bold tracking-[0.2em] uppercase text-xs md:text-sm drop-shadow-[0_0_15px_rgba(255,210,63,0.3)]">
                {dict.brand.slogan}
              </span>
            </div>

            <h1 className="font-outfit tracking-tight mb-8 flex flex-col text-white text-shadow-premium">
              <span className="text-3xl md:text-4xl lg:text-5xl opacity-80 font-light mb-2">
                {dict.home.hero.headline.line1}
              </span>
              <span className="text-5xl md:text-6xl lg:text-8xl leading-[1.05] font-bold">
                {dict.home.hero.headline.line2}
              </span>
            </h1>

            {/* Subheadline Segment */}
            <p className="text-lg md:text-xl text-white/85 text-shadow-premium font-inter mb-12 max-w-2xl leading-relaxed">
              {dict.home.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Link
                href={`/${lang}/contato`}
                className="inline-flex items-center justify-center bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-semibold py-4 px-8 md:px-12 rounded-full hover:brightness-95 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/30 active:scale-[0.99] shadow-lg shadow-black/25 transition-all duration-200 ease-out min-h-[52px] min-w-[200px] md:min-w-[240px] whitespace-nowrap uppercase !tracking-wide !text-[11px] md:!text-[12px]"
              >
                {dict.home.hero.primaryCTA}
              </Link>
              <Link
                href="https://wa.me/5541991934437"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black/35 border-2 border-white/25 text-white font-semibold py-4 px-8 md:px-12 rounded-full hover:bg-black/45 hover:border-white/35 hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-black/20 transition-all duration-200 min-h-[52px] min-w-[200px] md:min-w-[240px] whitespace-nowrap uppercase !tracking-wide !text-[11px] md:!text-[12px]"
              >
                {dict.home.hero.secondaryCTA}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-dark flex flex-col">
        <StrategicStatement lang={lang} />
        <StrategicPillars lang={lang} />
        <AuditCTASection lang={lang} />
        <ServicesOverview lang={lang} />
        <Methodology lang={lang} />
        <ConsultativeAuditCTA lang={lang} />
        <CredibilitySection lang={lang} />
        <FinalCTA lang={lang} />
      </div>
    </main>
  );
}
