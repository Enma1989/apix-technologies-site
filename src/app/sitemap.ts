import { MetadataRoute } from "next";
import { siteConfig, locales } from "@/config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://apixtech.com.br"; // Base URL for the site

    const routes = [
        "",
        "/servicos",
        "/sobre",
        "/cases",
        "/contato",
        "/blog",
        "/privacidade",
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    locales.forEach((lang) => {
        routes.forEach((route) => {
            sitemapEntries.push({
                url: `${baseUrl}/${lang}${route}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: route === "" ? 1 : 0.8,
            });
        });

        // Dynamic services
        siteConfig.services.forEach((service) => {
            sitemapEntries.push({
                url: `${baseUrl}/${lang}/servicos/${service.slug}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.7,
            });
        });

        // Dynamic blog posts (mocking slugs)
        ["governança-de-ti-em-medias-empresas", "mitigacao-de-riscos-em-infraestrutura", "custo-inteligente-nuvem-vs-on-premise"].forEach((slug) => {
            sitemapEntries.push({
                url: `${baseUrl}/${lang}/blog/${slug}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.6,
            });
        });
    });

    return sitemapEntries;
}
