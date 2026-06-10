"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY < 100);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <section className="relative min-h-[calc(100dvh-4.5rem)] flex items-center justify-center py-12 md:py-20 overflow-hidden bg-background">

            {/* Subtle static glow blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-3xl z-0 pointer-events-none" />

            {/* Pure CSS animated grid — GPU-composited via transform, no SVG filter cost */}
            <div
                className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
                style={{
                    maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                }}
            >
                <div
                    className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 opacity-[0.12]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                        animation: 'gridMove 8s linear infinite',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Call for Papers Open
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 heading-glow-subtle leading-tight"
                >
                    {/* <span className="block text-xl md:text-2xl mb-4 text-primary font-extrabold tracking-widest">ICSEMII 2027</span> */}
                    IEEE International Conference on <br className="hidden sm:block" />
                    <span className="text-gradient [text-shadow:none]">Smart Energy, Mobility, and Intelligent Infrastructure</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 px-2"
                >
                    Technically Co-Sponsored by IEEE Kerala Section.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10"
                >
                    <div className="flex items-center justify-center gap-2 text-muted-foreground w-full sm:w-auto">
                        <Calendar className="w-5 h-5 shrink-0 text-primary" />
                        <span className="text-sm sm:text-base">25-26 March, 2027</span>
                    </div>
                    <div className="hidden sm:block w-px h-6 bg-border" />
                    <div className="flex items-start justify-center gap-2 text-muted-foreground w-full sm:w-auto px-4 sm:px-0">
                        <MapPin className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                        <span className="text-sm sm:text-base text-center sm:text-left max-w-[280px] sm:max-w-none">
                            Carmel College of Engineering and Technology, Alappuzha, Kerala
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >

                    <a
                        href="#cfp"
                        className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all hover:-translate-y-1 active:scale-95 shadow-md"
                    >
                        Call for Paper
                    </a>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="text-xs sm:text-sm text-muted-foreground/85 max-w-none mx-auto mt-8 md:mt-12 leading-relaxed px-4 pb-16 md:pb-20"
                >
                    The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                </motion.p>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-10 md:bottom-12 right-6 md:right-12 text-muted-foreground z-20 pointer-events-none"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-[8px] md:text-xs uppercase tracking-widest font-medium">Scroll Down</span>
                    <ChevronDown className="w-3 h-3 md:w-5 md:h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
