import { Locale, siteConfig } from "@/config/siteConfig";
import Image from "next/image";
import StrategicStatement from "@/components/home/StrategicStatement";
import StrategicPillars from "@/components/home/StrategicPillars";
import AuditCTASection from "@/components/home/AuditCTASection";
import ServicesOverview from "@/components/home/ServicesOverview";
import Methodology from "@/components/home/Methodology";
import ConsultativeAuditCTA from "@/components/home/ConsultativeAuditCTA";
import CredibilitySection from "@/components/home/CredibilitySection";
import CaseStudies from "@/components/home/CaseStudies";
import FinalCTA from "@/components/home/FinalCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

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
          {/* Cinematic Radial Depth Overlay */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 80% 50%, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.12) 30%, rgba(0, 0, 0, 0.06) 55%, rgba(0, 0, 0, 0.00) 75%)'
            }}
          />
        </div>

        {/* Hero Background Overlay - Frosted Glass Effect (Left Side) */}
        <div
          className="absolute inset-y-0 left-0 w-full sm:w-[70%] lg:w-[55%] bg-white/10 backdrop-blur-lg z-10 pointer-events-none transition-all duration-700"
          style={{
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
          }}
        />

        <div className="container-premium relative z-20">
          <div className="max-w-4xl py-16 md:py-32 lg:-translate-x-12 transition-transform duration-500">
            {/* Eyebrow Tagline */}
            <div className="mb-8">
              <span className="text-[#FFD23F] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                {siteConfig.brand.slogan[lang]}
              </span>
            </div>

            <h1 className="font-outfit tracking-tight mb-12 flex flex-col text-white">
              <span className="text-3xl md:text-4xl lg:text-5xl opacity-80 font-light mb-2">
                {siteConfig.home.hero.headline.line1[lang]}
              </span>
              <span className="text-5xl md:text-6xl lg:text-8xl leading-[1.05] font-bold">
                {siteConfig.home.hero.headline.line2[lang]}
              </span>
            </h1>

            <div className="flex flex-wrap gap-6 items-center">
              <button className="inline-flex items-center justify-center bg-[#FFD23F] border-2 border-[#E6B800] text-[#111111] font-semibold py-4 px-8 md:px-12 rounded-xl hover:brightness-95 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/30 active:scale-[0.99] shadow-lg shadow-black/25 transition-all duration-200 ease-out min-h-[52px] min-w-[200px] md:min-w-[240px] whitespace-nowrap uppercase !tracking-wide !text-[11px] md:!text-[12px]">
                {siteConfig.home.hero.primaryCTA[lang]}
              </button>
              <button className="inline-flex items-center justify-center bg-black/35 border-2 border-white/25 text-white font-semibold py-4 px-8 md:px-12 rounded-xl hover:bg-black/45 hover:border-white/35 hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-black/20 transition-all duration-200 min-h-[52px] min-w-[200px] md:min-w-[240px] whitespace-nowrap uppercase !tracking-wide !text-[11px] md:!text-[12px]">
                {siteConfig.home.hero.secondaryCTA[lang]}
              </button>
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
        <CaseStudies lang={lang} />
        <FinalCTA lang={lang} />
      </div>
    </main>
  );
}
