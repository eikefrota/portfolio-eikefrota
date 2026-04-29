"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { SITE_IDENTITY } from "@/app/data/site-content";
import { useSiteLanguage } from "@/app/components/language-provider";
import { socialIconFor } from "@/app/components/social-icon";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const emailRef = useRef<HTMLAnchorElement>(null);
    const { content } = useSiteLanguage();

    const copyPrimaryContact = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(SITE_IDENTITY.whatsappNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        const root = containerRef.current;
        if (!root) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: root,
                start: "top 70%",
                end: "bottom 80%",
            },
        });

        tl.from(".contact-header-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
        });

        tl.from(
            ".contact-content",
            {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            },
            "-=0.5",
        );

        tl.from(
            ".email-card",
            {
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.2)",
            },
            "-=0.6",
        );

        const emailCard = emailRef.current;
        const onMouseEnter = () => {
            gsap.to(emailCard, { scale: 1.02, duration: 0.3, ease: "power2.out" });
            gsap.to(".email-icon", { x: 5, y: -5, duration: 0.3 });
        };
        const onMouseLeave = () => {
            gsap.to(emailCard, { scale: 1, duration: 0.3, ease: "power2.out" });
            gsap.to(".email-icon", { x: 0, y: 0, duration: 0.3 });
        };

        if (emailCard) {
            emailCard.addEventListener("mouseenter", onMouseEnter);
            emailCard.addEventListener("mouseleave", onMouseLeave);
        }

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
            if (emailCard) {
                emailCard.removeEventListener("mouseenter", onMouseEnter);
                emailCard.removeEventListener("mouseleave", onMouseLeave);
            }
        };
    }, []);

    return (
        <section ref={containerRef} id="contact" className="contact-section relative w-full py-32 bg-background overflow-hidden">
            <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-foreground/4 blur-[110px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-foreground/3 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div className="space-y-12">
                        <div className="space-y-2 overflow-hidden">
                            <div className="overflow-hidden">
                                <span className="contact-header-text block text-xs uppercase tracking-[0.3em] text-foreground/45 font-medium mb-4">
                                    {content.contact.label}
                                </span>
                            </div>
                            <div className="overflow-hidden">
                                <h2 className="contact-header-text block text-[clamp(2.6rem,6.9vw,6.2rem)] font-black uppercase leading-[0.9] text-foreground">
                                    {content.contact.titleLine1}
                                </h2>
                            </div>
                            <div className="overflow-hidden">
                                <h2 className="contact-header-text block text-[clamp(2.6rem,6.9vw,6.2rem)] font-black uppercase leading-[0.9] text-foreground/30">
                                    {content.contact.titleLine2}
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-8 max-w-md">
                            <p className="contact-content text-lg text-foreground/65 leading-relaxed font-light">
                                {content.contact.bodyText}
                            </p>

                            <div className="contact-content flex gap-4">
                                {content.contact.socials.map((link) => {
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.url ?? undefined}
                                            target={link.url?.startsWith("mailto:") ? undefined : "_blank"}
                                            rel={link.url?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                            className="group flex items-center justify-center w-12 h-12 rounded-full border border-border bg-muted/30 hover:bg-foreground hover:border-transparent transition-all duration-300"
                                            aria-label={link.name}
                                        >
                                            <span className="text-foreground/60 group-hover:text-background transition-colors duration-300">
                                                {socialIconFor(link.name)}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full flex flex-col justify-center lg:pt-12">
                        <a
                            ref={emailRef}
                            href={SITE_IDENTITY.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="email-card group relative block w-full h-[300px] lg:h-[400px] overflow-hidden bg-transparent border-t border-border hover:border-foreground/50 transition-colors duration-500 pt-8 sm:pt-12"
                        >
                            <div className="relative h-full flex flex-col justify-between z-10 px-2 sm:px-0">
                                <div className="flex justify-between items-start">
                                    <div className="p-0">
                                        <Mail className="w-8 h-8 text-foreground/50 group-hover:text-foreground transition-colors duration-500" />
                                    </div>
                                    <div className="email-icon">
                                        <ArrowUpRight className="w-8 h-8 text-foreground/35 group-hover:text-foreground group-hover:rotate-45 transition-all duration-300" />
                                    </div>
                                </div>

                                <div>
                                    <span className="text-xs uppercase tracking-[0.2em] text-foreground/45 mb-4 block">{content.contact.cardPrompt}</span>
                                    <h3 className="flex flex-col text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase text-foreground mb-8 leading-[0.9]">
                                        <span>{content.contact.cardLine1}</span>
                                        <span className="text-foreground/50">{content.contact.cardLine2}</span>
                                    </h3>

                                    <button
                                        onClick={copyPrimaryContact}
                                        className="inline-flex items-center gap-3 text-sm uppercase tracking-wider text-foreground/50 hover:text-foreground transition-all group/btn"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span className="text-green-400">{content.contact.cardCopiedText}</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4" />
                                                <span className="group-hover/btn:underline decoration-foreground/30 underline-offset-4">{content.contact.cardCopyText}</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
