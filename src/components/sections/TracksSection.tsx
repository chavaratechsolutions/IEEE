"use client";

import { motion } from "framer-motion";
import { Zap, Settings, Brain, CheckCircle2, Activity, Cpu } from "lucide-react";

const tracks = [
    {
        icon: Zap,
        title: "Electric Vehicles, Power Electronics, and Energy Storage (EEE)",
        points: [
            "Electric and hybrid propulsion technologies",
            "Battery management systems and advanced energy storage",
            "Power converters, inverters, and grid integration",
            "Charging infrastructure and smart energy distribution"
        ]
    },
    {
        icon: Activity,
        title: "Instrumentation for Energy and Mobility Systems (E&I)",
        points: [
            "Sensors and measurement systems for vehicles and energy grids",
            "Condition monitoring and diagnostics for mobility systems",
            "IoT-based instrumentation for smart mobility",
            "Reliability, calibration, and standards in instrumentation"
        ]
    },
    {
        icon: Cpu,
        title: "Embedded Control Systems (ECE)",
        points: [
            "Embedded controllers for automotive and industrial applications",
            "Real-time operating systems and hardware-software co-design",
            "IoT-enabled embedded systems for energy efficiency",
            "Cybersecurity and resilience in embedded mobility systems"
        ]
    },
    {
        icon: Brain,
        title: "AI, Machine Learning, and Data Science for Smart Systems (CSE)",
        points: [
            "AI-driven traffic management and optimization",
            "Machine learning for predictive maintenance and safety",
            "Data science applications in intelligent transportation and smart cities",
            "Digital twins, simulation, and decision support systems"
        ]
    },
    {
        icon: Settings,
        title: "Thermal Systems, Vehicle Dynamics, and Smart Materials (ME)",
        points: [
            "Thermal management in electric and hybrid vehicles",
            "Vehicle dynamics, control, and performance optimization",
            "Smart materials for lightweight and efficient mobility solutions",
            "Modelling and simulation of mechanical systems for energy efficiency"
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
