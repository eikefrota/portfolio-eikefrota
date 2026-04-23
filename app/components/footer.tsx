"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { FOOTER_CONTENT, FOOTER_NAV, FOOTER_SOCIALS, SITE_IDENTITY } from "@/app/data/site-content";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const socialIconMap = {
    Email: Mail,
    GitHub: Github,
    LinkedIn: Linkedin,
    Instagram: Instagram,
} as const;

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const containerRef = useGSAP(() => {
        gsap.from(".footer-content", {
            scrollTrigger: {
                trigger: ".footer-content",
                start: "top 95%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
        });
    }, []);

    return (
        <footer ref={containerRef} className="relative bg-background w-full overflow-hidden border-t border-border pt-20 pb-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-foreground/5 blur-[90px] rounded-full pointer-events-none" />

            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col gap-16 mb-16">
                    <div className="footer-content flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-xs uppercase tracking-[0.3em] text-foreground/45 font-medium mb-6 block">
                                {FOOTER_CONTENT.navigationLabel}
                            </span>
                            <nav className="flex flex-col gap-3">
                                {FOOTER_NAV.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="text-lg md:text-xl uppercase font-bold text-foreground/60 hover:text-foreground transition-colors tracking-wide w-fit"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="group flex flex-col items-center gap-2 text-foreground/45 hover:text-foreground transition-colors"
                        >
                            <div className="p-3 rounded-full border border-border group-hover:border-foreground/40 group-hover:bg-muted transition-all duration-300">
                                <ArrowUp className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest">{FOOTER_CONTENT.backToTopLabel}</span>
                        </button>
                    </div>

                    <div className="footer-content border-y border-border py-12">
                        <h1 className="text-[clamp(3rem,10vw,12rem)] font-black uppercase text-foreground/5 leading-none text-center select-none pointer-events-none">
                            {SITE_IDENTITY.name}
                        </h1>
                    </div>
                </div>

                <div className="footer-content flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-0">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
                        <p className="text-foreground/45 text-xs uppercase tracking-wider">
                            &copy; {currentYear} {SITE_IDENTITY.name}
                        </p>
                        <span className="hidden md:block text-foreground/15">|</span>
                        <p className="text-foreground/45 text-xs uppercase tracking-wider">
                            {FOOTER_CONTENT.rights}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {FOOTER_SOCIALS.map((link) => {
                            const Icon = socialIconMap[link.name as keyof typeof socialIconMap];
                            if (!Icon) return null;

                            return (
                                <a
                                    key={link.name}
                                    href={link.url ?? "#"}
                                    target={link.url?.startsWith("mailto:") ? undefined : "_blank"}
                                    rel={link.url?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                    className="group p-2 rounded-full border border-border bg-muted/40 hover:bg-muted hover:border-foreground/25 transition-all duration-300"
                                    aria-label={link.name}
                                >
                                    <Icon className="w-4 h-4 text-foreground/55 group-hover:text-foreground transition-colors" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
