import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import { Locale, locales } from "@/config/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/legal/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Apix Technologies | Consultoria Estratégica em TI",
    template: "%s | Apix Technologies",
  },
  description: "Especialistas em infraestrutura, segurança e continuidade operacional para empresas que buscam previsibilidade e controle.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

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

  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${outfit.variable} antialiased font-executive bg-dark text-white`}>
        <Navbar lang={lang} />
        {children}
        <Footer lang={lang} />
        <CookieConsent lang={lang} />
      </body>
    </html>
  );
}
