import { MetadataRoute } from "next";
import { siteConfig, locales } from "@/config/siteConfig";

const baseUrl = "https://apixtech.com.br";

function languageAlternates(path: string) {
    return Object.fromEntries(
        locales.map((locale) => [locale, `${baseUrl}/${locale}${path}`])
    );
}

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/arquitetura-maas",
        "/servicos",
        "/sobre",
        "/cases",
        "/contato",
        "/blog",
        "/privacidade",
        "/termos",
        "/cookies",
    ];

    const paths = [
        ...routes.map((path) => ({ path, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.8 })),
        ...siteConfig.services.map((service) => ({ path: `/servicos/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
        ...siteConfig.blogPage.posts.map((post) => ({ path: `/blog/${post.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ];

    return locales.flatMap((lang) =>
        paths.map(({ path, changeFrequency, priority }) => ({
            url: `${baseUrl}/${lang}${path}`,
            lastModified: new Date(),
            changeFrequency,
            priority,
            alternates: {
                languages: languageAlternates(path),
            },
        }))
    );
}
