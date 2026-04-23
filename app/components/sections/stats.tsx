"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT_CONTENT, TECH_STACKS } from "@/app/data/site-content";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Stats() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const root = sectionRef.current;
            if (!root) return;

            const leftPanel = root.querySelector<HTMLElement>(".stats-panel-left");
            const rightPanel = root.querySelector<HTMLElement>(".stats-panel-right");

            const statsItems = gsap.utils.toArray<HTMLElement>(".stats-anim", root);
            const techItems = gsap.utils.toArray<HTMLElement>(".tech-anim", root);

            const panels: HTMLElement[] = [leftPanel, rightPanel].filter((el): el is HTMLElement => !!el);

            gsap.set(panels, { autoAlpha: 0, y: 40 });
            gsap.set(statsItems, { autoAlpha: 0, y: 22 });
            gsap.set(techItems, { autoAlpha: 0, y: 26 });

            const master = gsap.timeline({ paused: true });

            if (panels.length > 0) {
                master.to(panels, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power2.out",
                });
            }

            if (statsItems.length > 0) {
                master.to(
                    statsItems,
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.36,
                        stagger: 0.03,
                        ease: "power2.out",
                    },
                    panels.length > 0 ? "-=0.18" : 0,
                );
            }

            if (techItems.length > 0) {
                master.to(
                    techItems,
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.32,
                        stagger: 0.018,
                        ease: "power2.out",
                    },
                    statsItems.length > 0 ? "-=0.22" : panels.length > 0 ? "-=0.12" : 0,
                );
            }

            ScrollTrigger.create({
                trigger: root,
                start: "top 78%",
                once: true,
                invalidateOnRefresh: true,
                onEnter: () => {
                    master.play(0);
                },
                onRefresh: (self) => {
                    if (self.progress > 0) {
                        master.progress(1);
                    } else {
                        master.pause(0).progress(0);
                    }
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative min-w-0 overflow-x-clip  bg-background py-12 text-foreground sm:py-16 md:py-20 lg:py-24 xl:py-28"
        >
            <div className="w-full min-w-0 max-w-[min(100%,1920px)] mx-auto px-3 min-[375px]:px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-28">
                <div className="flex min-w-0 flex-col lg:flex-row lg:justify-between lg:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
                    <div className="stats-panel-left w-full min-w-0 max-w-full lg:w-[42%] lg:max-w-none xl:w-5/12 space-y-4 sm:space-y-5 md:space-y-6">
                        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                            <span className="stats-anim shrink-0 font-mono text-[9px] uppercase tracking-[0.28em] text-foreground/55 min-[375px]:text-[10px] sm:text-xs sm:tracking-[0.35em]">
                                {ABOUT_CONTENT.label}
                            </span>
                            <div className="h-px min-w-0 flex-1 bg-border" />
                        </div>

                        <h2 className="stats-anim wrap-anywhere text-[clamp(1.625rem,calc(0.9rem+4.2vw),5rem)] font-black uppercase leading-[0.95] tracking-tight text-foreground">
                            {ABOUT_CONTENT.title}
                        </h2>

                        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                            <p
                                key={paragraph}
                                className={`stats-anim max-w-full leading-relaxed wrap-anywhere sm:max-w-lg ${
                                    index === 0
                                        ? "text-[0.9375rem] text-foreground/70 sm:text-base md:text-lg"
                                        : "text-[0.8125rem] text-foreground/55 sm:text-sm md:text-base"
                                }`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="stats-panel-right w-full min-w-0 max-w-full lg:w-[58%] lg:max-w-none xl:w-7/12 lg:self-center">
                        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                            {TECH_STACKS.map((group) => (
                                <div
                                    key={group.label}
                                    className="grid min-w-0 grid-cols-1 min-[480px]:grid-cols-12 items-start sm:items-center gap-4 min-[480px]:gap-5 sm:gap-6 md:gap-8"
                                >
                                    <div className="min-w-0 min-[480px]:col-span-12 sm:col-span-4">
                                        <div className="stats-anim wrap-anywhere text-xl font-black uppercase leading-[1.05] tracking-tight text-foreground/45 min-[400px]:text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-4xl 2xl:text-5xl">
                                            {group.label}
                                        </div>
                                    </div>

                                    <div className="min-w-0 min-[480px]:col-span-12 sm:col-span-8">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-2 md:gap-4">
                                            {group.items.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="tech-anim flex min-w-0 max-w-full flex-wrap items-center gap-x-1.5 gap-y-0.5 sm:gap-x-2 sm:gap-y-0 sm:gap-3 pr-1 sm:pr-2 md:pr-3"
                                                    title={item.name}
                                                >
                                                    <Image
                                                        src={item.iconSrc}
                                                        alt={item.name}
                                                        width={40}
                                                        height={40}
                                                        sizes="(max-width: 400px) 24px, (max-width: 640px) 28px, (max-width: 1024px) 32px, 40px"
                                                        className={`opacity-100 size-6 min-[400px]:size-7 sm:size-8 md:size-9 lg:size-10 shrink-0 transition-[filter] ${
                                                            item.invertInDark ? "dark:invert" : ""
                                                        }`}
                                                    />
                                                    <span className="min-w-0 max-w-full font-mono text-[10px] uppercase leading-snug tracking-wide text-foreground/60 wrap-break-word min-[400px]:text-[11px] sm:text-xs sm:tracking-wider sm:whitespace-nowrap sm:break-normal md:text-sm">
                                                        {item.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
