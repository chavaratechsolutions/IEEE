"use client";

import { motion } from "framer-motion";
import { Zap, Settings, Brain, CheckCircle2 } from "lucide-react";

const tracks = [
    {
        icon: Zap,
        title: "Track 1: Smart Energy Systems and Embedded Technologies",
        points: [
            "Electric vehicles and hybrid propulsion systems",
            "Advanced power electronics for energy conversion and storage",
            "Embedded controllers for mobility and energy systems",
            "IoT-enabled instrumentation and monitoring for sustainable mobility"
        ]
    },
    {
        icon: Settings,
        title: "Track 2: Thermal Systems, Vehicle Dynamics, and Smart Materials",
        points: [
            "Thermal management in electric and hybrid vehicles",
            "Vehicle dynamics and performance optimization",
            "Smart materials for lightweight and efficient mobility solutions",
            "Simulation and modelling of mechanical systems for energy efficiency"
        ]
    },
    {
        icon: Brain,
        title: "Track 3: AI, Machine Learning, and Data Science for Smart Systems",
        points: [
            "AI-driven traffic management and optimization",
            "Machine learning for predictive mobility and safety",
            "Data science applications in intelligent transportation and smart cities",
            "Digital twins and simulation for smart infrastructure"
        ]
    }
];

export default function TracksSection() {
    return (
        <section id="tracks" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold mb-2 block uppercase tracking-wider">Conference Tracks</span>
                    <h2 className="text-3xl font-bold mb-4 heading-glow">Core Themes</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        ICSEMI 2027 welcomes original contributions across the following thematic tracks.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-2xl flex flex-col h-full"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <track.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-6 min-h-[3.5rem] leading-snug">{track.title}</h3>
                            <ul className="space-y-3 mt-auto">
                                {track.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group/item">
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 transition-transform group-hover/item:scale-110" />
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
