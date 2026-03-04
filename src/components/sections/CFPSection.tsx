"use client";

import { motion } from "framer-motion";
import { Download, Upload } from "lucide-react";

export default function CFPSection() {
    return (
        <section id="cfp" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <span className="text-primary font-semibold mb-2 block">SUBMISSIONS</span>
                    <h2 className="text-3xl font-bold mb-4 heading-glow">Call For Papers</h2>
                    <p className="text-muted-foreground mb-10 text-justify">
                        ICSEMI 2027 aspires to be a premier international forum for researchers, academicians, industry leaders, and practitioners to explore and exchange ideas on Smart Energy, Mobility, and Intelligent Infrastructure. The conference emphasizes innovation, sustainability, and resilience, fostering collaboration across disciplines to address global challenges and shape the future of intelligent systems. By bridging cutting-edge research with practical applications, ICSEMI 2027 seeks to inspire transformative solutions that advance sustainable societies and connected communities.                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {[
                        {
                            title: "Topics of Interest",
                            content: (
                                <div className="space-y-6">
                                    <p className="text-muted-foreground">ICSEMI 2027 invites original, unpublished research contributions in the following thematic tracks:</p>
                                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
                                        {[
                                            "Electric Vehicles, Power Electronics, and Energy Storage (EEE)",
                                            "Instrumentation for Energy and Mobility Systems (E&I)",
                                            "Embedded Control Systems (ECE)",
                                            "AI, Machine Learning, and Data Science (CSE)",
                                            "Thermal Systems and Vehicle Dynamics (ME)"
                                        ].map((track, i) => (
                                            <div key={i} className="flex items-start gap-2 group/track">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover/track:scale-125 transition-transform" />
                                                <span className="text-sm font-medium text-foreground/80 group-hover/track:text-primary transition-colors">{track}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        },
                        {
                            title: "Manuscript / Submission Guidelines",
                            content: (
                                <ul className="space-y-4 text-left">
                                    {[
                                        "Original and unpublished papers in the prescribed conference format (maximum 6 pages) are to be submitted.",
                                        "All submissions will undergo plagiarism check using standard plagiarism detection tools.",
                                        "Accepted and presented papers will be submitted for inclusion into IEEE Xplore Digital Library subject to meeting IEEE Xplore's requirements."
                                    ].map((guideline, i) => (
                                        <li key={i} className="flex items-start gap-3 group/item">
                                            <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary mt-0.5 shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                                {i + 1}
                                            </div>
                                            <span className="text-sm leading-relaxed">{guideline}</span>
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1"
                        >
                            <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors flex items-center gap-2">
                                <div className="w-1 h-6 bg-primary rounded-full" />
                                {item.title}
                            </h3>
                            <div className="text-sm text-muted-foreground">
                                {item.content}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#"
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                    >
                        <Download className="w-4 h-4" />
                        Download CFP Flyer
                    </a>
                    <a
                        href="#"
                        className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg flex items-center gap-2 hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                    >
                        <Upload className="w-4 h-4" />
                        Submit Paper via EasyChair
                    </a>
                </div> */}
            </div>
        </section>
    );
}
