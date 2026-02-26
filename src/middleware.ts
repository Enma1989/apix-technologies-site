import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./config/siteConfig";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Allow static assets, api routes and internal files
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/images") ||
        pathname.startsWith("/favicon.ico") ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }

    // Check if the pathname is missing a locale
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = defaultLocale;
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, req.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    // Matcher ignoring `/_next/`, `/api/`, and `/images/`
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
