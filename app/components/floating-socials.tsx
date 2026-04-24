"use client";

import { useState, useEffect } from "react";
import { useSiteLanguage } from "@/app/components/language-provider";
import { socialIconFor } from "./social-icon";

export default function FloatingSocials() {
    const [visible, setVisible] = useState(false);
    const { content } = useSiteLanguage();

    useEffect(() => {
        let raf = 0;
        let lastShown: boolean | null = null;

        const apply = (): void => {
            raf = 0;
            const next = window.scrollY > 300;
            if (next !== lastShown) {
                lastShown = next;
                setVisible(next);
            }
        };

        const onScroll = (): void => {
            if (raf !== 0) return;
            raf = window.requestAnimationFrame(apply);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        apply();
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (raf !== 0) window.cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div
            className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4 transition-all duration-500 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
            }`}
        >
            {content.floatingSocials.map((social) => {
                const disabled = social.url === null;
                const className = disabled
                    ? "group flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground/30 bg-muted/20 cursor-default"
                    : "group flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground/55 hover:text-foreground hover:border-foreground/40 hover:bg-muted transition-all duration-300";

                return disabled ? (
                    <span
                        key={social.name}
                        aria-label={`${social.name} ${content.floatingSocialsUnavailableLabel}`}
                        className={className}
                    >
                        {socialIconFor(social.name)}
                    </span>
                ) : (
                    <a
                        key={social.name}
                        href={social.url ?? undefined}
                        target={social.url?.startsWith("mailto:") ? undefined : "_blank"}
                        rel={social.url?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        aria-label={social.name}
                        className={className}
                    >
                        {socialIconFor(social.name)}
                    </a>
                );
            })}
        </div>
    );
}
