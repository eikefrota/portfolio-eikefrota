"use client";

import { useRef } from "react";
import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Code, Sparkles } from "lucide-react";
import { useSiteLanguage } from "@/app/components/language-provider";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const iconMap = {
    briefcase: Briefcase,
    "graduation-cap": GraduationCap,
    code: Code,
    sparkles: Sparkles,
} as const;

export default function Achievements() {
    const sectionRef = useRef<HTMLElement>(null);
    const { content } = useSiteLanguage();

    useGSAP(() => {
        const isDesktop = window.innerWidth >= 1024;

        if (isDesktop) {
            gsap.from(".achievements-header", {
                y: 50,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                },
            });
        }

        if (isDesktop) {
            content.achievements.items.forEach((_, i) => {
                gsap.from(`.achievement-card-${i}`, {
                    scrollTrigger: {
                        trigger: `.achievement-card-${i}`,
                        start: "top 85%",
                        end: "top 50%",
                        scrub: 1,
                    },
                    x: 100,
                    opacity: 0,
                    scale: 0.9,
                    duration: 1,
                    ease: "power2.out",
                });
            });
        }

        if (!isDesktop) {
            gsap.from(".achievement-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out",
            });
        }
    }, [content.achievements.items]);

    return (
        <section ref={sectionRef} id="achievements" className="achievements-section relative bg-background overflow-hidden py-16 sm:py-20 lg:py-28">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                <div className="achievements-header mb-10 md:mb-14 lg:mb-16">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-foreground/45 mb-3 block">
                        {content.achievements.label}
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-foreground uppercase leading-[0.9] tracking-tighter italic mb-4">
                        {content.achievements.title}
                    </h2>
                    <p className="text-foreground/55 text-sm md:text-lg italic leading-relaxed max-w-2xl">
                        {content.achievements.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
                    {content.achievements.items.map((achievement, index) => {
                        const Icon = iconMap[achievement.icon as keyof typeof iconMap] ?? Code;

                        return (
                            <article
                                key={achievement.title}
                                className={`achievement-card achievement-card-${index} group relative p-5 md:p-6 lg:p-7 rounded-sm border border-border bg-muted/30 hover:bg-muted hover:border-foreground/25 transition-colors duration-300`}
                            >
                                <div className="flex items-center justify-between gap-4 text-foreground/50 font-mono text-[10px] uppercase tracking-widest mb-5">
                                    <span>{achievement.year}</span>
                                    <div className="flex-1 h-px bg-border" />
                                    <span className="text-foreground/55">{achievement.category}</span>
                                </div>

                                <div className="mb-5">
                                    <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center border border-border group-hover:border-foreground/25 transition-colors">
                                        <Icon className="w-6 h-6 text-foreground" />
                                    </div>
                                </div>

                                <h3 className="text-lg md:text-xl lg:text-2xl font-black text-foreground uppercase tracking-tight leading-tight mb-3 group-hover:text-foreground/90 transition-colors">
                                    {achievement.title}
                                </h3>

                                <p className="text-foreground/65 text-sm md:text-base leading-relaxed italic">
                                    {achievement.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
