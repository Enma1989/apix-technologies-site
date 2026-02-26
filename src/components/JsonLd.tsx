import { siteConfig } from "@/config/siteConfig";

export default function JsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteConfig.brand.name,
        "url": "https://apixtech.com.br",
        "logo": "https://apixtech.com.br/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": siteConfig.contact.brasil.phone,
            "contactType": "sales",
            "areaServed": ["BR", "PE", "ES"],
            "availableLanguage": ["Portuguese", "English", "Spanish"]
        },
        "sameAs": [
            "https://www.linkedin.com/company/apix-technologies"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteConfig.brand.name,
        "image": "https://apixtech.com.br/hero-bg.jpg",
        "telephone": siteConfig.contact.brasil.phone,
        "email": siteConfig.contact.brasil.email,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -25.4284,
            "longitude": -49.2733
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, localBusinessSchema]) }}
        />
    );
}
