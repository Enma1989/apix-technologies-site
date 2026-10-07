import { Locale, locales, siteConfig } from "@/config/siteConfig";
import { LocalizedServiceDetail } from "@/components/services/LocalizedServiceDetail";

export async function generateStaticParams() {
    return locales.flatMap((lang) =>
        siteConfig.services
            .filter((service) => service.slug === "cftv-seguranca-eletronica")
            .map((service) => ({ lang, slug: service.slug }))
    );
}

export default async function ServiceDetailPage({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>;
}) {
    const { lang, slug } = await params;
    return <LocalizedServiceDetail lang={lang} slug={slug} />;
}
