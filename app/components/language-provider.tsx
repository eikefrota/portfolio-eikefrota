"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import {
    DEFAULT_SITE_LOCALE,
    getSiteContent,
    type SiteLocale,
} from "@/app/data/site-content";
import { getProjects } from "@/app/data/projects";

const LANGUAGE_STORAGE_KEY = "portfolio-site-locale";

type LanguageContextValue = {
    locale: SiteLocale;
    setLocale: (locale: SiteLocale) => void;
    toggleLocale: () => void;
    content: ReturnType<typeof getSiteContent>;
    projects: ReturnType<typeof getProjects>;
    isPortuguese: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): SiteLocale {
    if (typeof window === "undefined") {
        return DEFAULT_SITE_LOCALE;
    }

    try {
        const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (stored === "en" || stored === "pt-BR") {
            return stored;
        }
    } catch {
        //
    }

    return DEFAULT_SITE_LOCALE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<SiteLocale>(DEFAULT_SITE_LOCALE);

    useEffect(() => {
        const storedLocale = getInitialLocale();
        if (storedLocale === DEFAULT_SITE_LOCALE) {
            return;
        }

        const id = window.setTimeout(() => {
            setLocaleState(storedLocale);
        }, 0);

        return () => window.clearTimeout(id);
    }, []);

    useEffect(() => {
        try {
            window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
        } catch {
            //
        }

        document.documentElement.lang = locale === "pt-BR" ? "pt-BR" : "en";
    }, [locale]);

    const value = useMemo<LanguageContextValue>(() => {
        const setLocale = (nextLocale: SiteLocale) => {
            setLocaleState(nextLocale);
        };

        return {
            locale,
            setLocale,
            toggleLocale: () =>
                setLocaleState((current) => (current === "en" ? "pt-BR" : "en")),
            content: getSiteContent(locale),
            projects: getProjects(locale),
            isPortuguese: locale === "pt-BR",
        };
    }, [locale]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useSiteLanguage(): LanguageContextValue {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useSiteLanguage must be used within LanguageProvider");
    }
    return context;
}
