"use client";

import { motion } from "framer-motion";
import { Zap, Activity, Cpu, Brain, Settings, CheckCircle2, FileText, Globe } from "lucide-react";

const topics = [
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

export default function CFPSection() {
    return (
        <section id="cfp" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <span className="text-primary font-semibold mb-3 block uppercase tracking-[0.2em] text-sm">Opportunities</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-glow">Call For Papers</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                        ICSEMI 2027 aspires to be a premier international forum for researchers, academicians, industry leaders, and practitioners to explore and exchange ideas on Smart Energy, Mobility, and Intelligent Infrastructure. The conference emphasizes innovation, sustainability, and resilience, fostering collaboration across disciplines to address global challenges and shape the future of intelligent systems. By bridging cutting-edge research with practical applications, ICSEMI 2027 seeks to inspire transformative solutions that advance sustainable societies and connected communities.
                    </p>
                </motion.div>

                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="h-px flex-1 bg-border" />
                        <h3 className="text-2xl font-bold px-4">Topics of Interest</h3>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {topics.map((topic, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -8 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 bg-muted/20 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col backdrop-blur-sm w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.35rem)]"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <topic.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-lg font-bold mb-6 leading-tight min-h-[3rem]">{topic.title}</h4>
                                <ul className="space-y-3 mt-auto">
                                    {topic.points.map((point, i) => (
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

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden p-10 md:p-12 bg-primary/5 rounded-[2.5rem] border border-primary/20 backdrop-blur-xl"
                >
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

                    <div className="relative z-10 grid md:grid-cols-[1fr_auto_1.5fr] gap-12 items-center">
                        <div className="text-center md:text-left">
                            <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-6">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Manuscript / Submission Guidelines</h3>
                            <p className="text-muted-foreground italic">Join us for transformative research and innovation.</p>
                        </div>

                        <div className="hidden md:block w-px h-32 bg-primary/20" />

                        <div className="space-y-6">
                            <ul className="space-y-4">
                                {[
                                    "Original and unpublished papers in the prescribed conference format (maximum 6 pages).",
                                    "All submissions will undergo plagiarism check using standard plagiarism detection tools.",
                                    "Accepted and presented papers will be submitted for inclusion into IEEE Xplore Digital Library subject to meeting IEEE Xplore's scope and quality requirements."
                                ].map((step, k) => (
                                    <li key={k} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                            {k + 1}
                                        </div>
                                        <span className="text-muted-foreground font-medium">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
