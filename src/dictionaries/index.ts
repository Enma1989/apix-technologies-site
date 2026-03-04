import { Locale, siteConfig } from "@/config/siteConfig";

// Recursive type to resolve localized string objects `{ pt: string, en: string, es: string }` into simple `string`
export type DeepResolveLocale<T> = T extends { pt: string; en: string; es: string }
    ? string
    : T extends { pt: string[]; en: string[]; es: string[] }
    ? string[]
    : T extends Array<infer U>
    ? Array<DeepResolveLocale<U>>
    : T extends object
    ? { [K in keyof T]: DeepResolveLocale<T[K]> }
    : T;

// Utility function that walks through an object and resolves `{ pt, en, es }` properties
function extractTranslations<T>(obj: T, locale: Locale): DeepResolveLocale<T> {
    if (obj === null || typeof obj !== "object") {
        return obj as any;
    }

    if ("pt" in obj && "en" in obj && "es" in obj) {
        const localizedObj = obj as any;
        return (localizedObj[locale] || localizedObj["pt"]) as any;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => extractTranslations(item, locale)) as any;
    }

    const resolvedObj: any = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            resolvedObj[key] = extractTranslations((obj as any)[key], locale);
        }
    }

    return resolvedObj;
}

// Extends the automatically inferred dictionary with extra UI fields
export type Dictionary = DeepResolveLocale<typeof siteConfig> & {
    legal: { cookieText: string; cookieLink: string; cookieAccept: string; };
    common: { talkToConsultant: string; learnMore: string; startDiagnostic: string; allServices: string; backToTop: string; };
    footerData: { governance: string; solutions: string; corporate: string; privacy: string; };
    homeData: { pillarsTitle: string; servicesOverviewTitle: string; servicesOverviewDesc: string; maasMethodLink: string; };
};

export const getDictionary = async (locale: Locale | string): Promise<Dictionary> => {
    const lang = (locale === "pt" || locale === "en" || locale === "es") ? locale : "pt";

    const baseDict = await Promise.resolve(extractTranslations((siteConfig as typeof siteConfig), lang));

    const extensions = {
        pt: {
            legal: { cookieText: "Valorizamos sua privacidade. Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego conforme nossa", cookieLink: "Política de Cookies", cookieAccept: "Aceitar" },
            common: { talkToConsultant: "Falar com Consultor", learnMore: "Saiba mais", startDiagnostic: "Iniciar Diagnóstico Estratégico", allServices: "Todos os serviços", backToTop: "Voltar ao topo" },
            footerData: { governance: "Governança", solutions: "Soluções", corporate: "Institucional", privacy: "Privacidade" },
            homeData: { pillarsTitle: "Pilares Estratégicos" }
        },
        en: {
            legal: { cookieText: "We value your privacy. We use cookies to improve your experience and analyze our traffic according to our", cookieLink: "Cookies Policy", cookieAccept: "Accept" },
            common: { talkToConsultant: "Talk to Consultant", learnMore: "Learn more", startDiagnostic: "Start Strategic Diagnostic", allServices: "All services", backToTop: "Back to top" },
            footerData: { governance: "Governance", solutions: "Solutions", corporate: "Corporate", privacy: "Privacy" },
            homeData: { pillarsTitle: "Strategic Pillars" }
        },
        es: {
            legal: { cookieText: "Valoramos su privacidad. Utilizamos cookies para mejorar su experiencia y analizar nuestro tráfico según nuestra", cookieLink: "Política de Cookies", cookieAccept: "Aceptar" },
            common: { talkToConsultant: "Hablar con Consultor", learnMore: "Saber más", startDiagnostic: "Iniciar Diagnóstico Estratégico", allServices: "Todos los servicios", backToTop: "Volver arriba" },
            footerData: { governance: "Gobernanza", solutions: "Soluciones", corporate: "Institucional", privacy: "Privacidad" },
            homeData: { pillarsTitle: "Pilares Estratégicos" }
        }
    };

    return {
        ...baseDict,
        ...extensions[lang as Locale],
    } as Dictionary;
};
