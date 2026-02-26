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
                    {([
                        {
                            title: "Topics of Interest",
                            content: (
                                <>
                                    <p className="mb-4">ICSEMI 2027 invites original, unpublished research contributions in (but not limited to) the following thematic tracks:</p>
                                    <ul className="list-disc list-inside space-y-2 text-left">
                                        <li>Electric vehicles, power electronics, and energy storage (EEE)</li>
                                        <li>Instrumentation for energy and mobility systems (E&I)</li>
                                        <li>Embedded control systems (ECE)</li>
                                        <li>AI-based traffic management and optimization (CSE)</li>
                                        <li>Thermal systems, vehicle dynamics, and smart materials (ME)</li>
                                    </ul>
                                </>
                            )
                        },
                        {
                            title: "Manuscript / Submission Guidelines",
                            content: (
                                <ul className="list-disc list-inside space-y-2 text-left">
                                    <li>Original and unpublished papers in the prescribed conference format (maximum 6 pages; up to 8 pages permitted with additional charges) are to be submitted through:</li>
                                    <li>All submissions will undergo plagiarism check using standard plagiarism detection tools.</li>
                                    <li>Accepted and presented papers will be submitted for inclusion into IEEE Xplore Digital Library subject to meeting IEEE Xplore&apos;s scope and quality requirements.</li>
                                </ul>
                            )
                        },
                        //  { title: "Poster Sessions", desc: "Work-in-progress and late-breaking results" }
                    ] as any[]).map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group cursor-pointer shadow-sm hover:shadow-md"
                        >
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                            {item.content ? (
                                <div className="text-sm text-muted-foreground mb-4">
                                    {item.content}
                                </div>
                            ) : (
                                <p className="text-sm text-muted-foreground mb-4">
                                    Submit your {item.desc.toLowerCase()} for review by our expert panel.
                                </p>
                            )}
                            <div className="h-1 w-12 bg-border group-hover:bg-primary transition-all" />
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
