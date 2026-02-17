"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, MapPin, ChevronDown } from "lucide-react";

export default function HeroSection() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
            {/* Background Elements */}
            <motion.div
                style={{ y: y1, opacity: 0.5 }}
                className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0"
            />
            <motion.div
                style={{ y: y2, opacity: 0.3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl z-0"
            />

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
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                >
                    IEEE International Conference on <br />
                    <span className="text-gradient">Smart Energy, Mobility, and Intelligent Infrastructure</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
                >
                    Join leading researchers and practitioners to explore the future of smart computing technologies and their applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>25-26 March, 2027</span>
                    </div>
                    <div className="hidden sm:block w-px h-6 bg-border" />
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Carmel College of Engineering and Technology, Alappuzha, Kerala</span>
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
                        className="px-8 py-4 bg-background border border-input text-foreground font-semibold rounded-full hover:bg-muted/50 transition-all hover:-translate-y-1 active:scale-95"
                    >
                        Call for Paper
                    </a>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1, duration: 1 },
                    y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 text-muted-foreground"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest">Scroll Down</span>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </motion.div>
        </section>
    );
}
