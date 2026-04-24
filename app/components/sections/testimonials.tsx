"use client";

import { useRef } from "react";
import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import { useSiteLanguage } from "@/app/components/language-provider";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonials() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const { content } = useSiteLanguage();
    const loopedTestimonials = [
        ...content.testimonials.items,
        ...content.testimonials.items,
        ...content.testimonials.items,
        ...content.testimonials.items,
    ];

    const containerRef = useGSAP(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        const section = slider.closest(".testimonials-section");
        if (!section) return;

        const totalWidth = slider.scrollWidth;
        const widthPerSet = totalWidth / 4;

        gsap.to(slider, {
            x: -widthPerSet,
            duration: 20,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % widthPerSet),
            },
        });

        gsap.from(".testimonial-header", {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, []);

    return (
        <section ref={containerRef} id="testimonials" className="testimonials-section relative w-full py-32 overflow-hidden bg-background">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-20">
                <div className="flex flex-col gap-4">
                    <span className="testimonial-header text-xs uppercase tracking-[0.3em] text-foreground/45 font-medium">
                        {content.testimonials.label}
                    </span>
                    <h2 className="testimonial-header text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-[0.9] text-foreground">
                        {content.testimonials.titleLine1} <br /> {content.testimonials.titleLine2}
                    </h2>
                    <p className="testimonial-header max-w-2xl text-sm leading-relaxed text-foreground/45 sm:text-base">
                        {content.testimonials.note}
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden mask-fade-sides">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-l from-background to-transparent pointer-events-none" />

                <div ref={sliderRef} className="flex gap-6 w-max items-stretch pl-4 sm:pl-6 md:pl-12 lg:pl-20">
                    {loopedTestimonials.map((testimonial, index) => (
                        <div key={`${testimonial.name}-${index}`} className="w-[350px] md:w-[500px] shrink-0 group relative">
                            <div className="h-full bg-transparent border-t border-border hover:border-foreground/40 transition-colors duration-500 pt-8 flex flex-col justify-between">
                                <div>
                                    <div className="mb-6 text-foreground/40">
                                        <Quote className="w-8 h-8 opacity-50" />
                                    </div>

                                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light mb-8">
                                        &quot;{testimonial.content}&quot;
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs font-mono border border-border">
                                        {testimonial.badge}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground uppercase tracking-wider text-xs">{testimonial.name}</h4>
                                        <p className="text-[10px] text-foreground/45 uppercase tracking-widest mt-1">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                    <div className="ml-auto flex gap-0.5 opacity-50" aria-label={`${testimonial.rating} ${content.testimonials.ratingLabel}`}>
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <span key={i} className="text-foreground text-[10px]">
                                                *
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
