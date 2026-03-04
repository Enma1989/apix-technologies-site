import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import { Locale, locales } from "@/config/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/legal/CookieConsent";
import BackToTopButton from "@/components/BackToTopButton";
import { getDictionary } from "@/dictionaries";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (langParam as Locale) || "pt";
  const dict = await getDictionary(lang);

  return {
    title: {
      default: dict.siteMetadata.title,
      template: "%s | Apix Technologies",
    },
    description: dict.siteMetadata.description,
    openGraph: {
      title: dict.siteMetadata.title,
      description: dict.siteMetadata.description,
      url: "https://apixtech.com.br",
      siteName: "Apix Technologies",
      images: [
        {
          url: "/images/og-apix.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: lang === "pt" ? "pt_BR" : lang === "en" ? "en_US" : "es_ES",
      type: "website",
    },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png"
    }
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased font-executive bg-dark text-white`}>
        <Navbar lang={lang} dict={dict} />
        {children}
        <Footer lang={lang} dict={dict} />
        <CookieConsent lang={lang} dict={dict} />
        <BackToTopButton label={dict.common.backToTop} />
      </body>
    </html>
  );
}
