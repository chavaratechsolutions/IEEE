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
                    <h2 className="text-3xl font-bold mb-4">Call For Papers</h2>
                    <p className="text-muted-foreground mb-10">
                        We invite high-quality original research papers in the following areas. All accepted papers will be published in the conference proceedings.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                        { title: "Technical Papers", desc: "Original research contributions" },
                        { title: "Workshop Proposals", desc: "Interactive sessions on specific topics" },
                        { title: "Poster Sessions", desc: "Work-in-progress and late-breaking results" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group cursor-pointer shadow-sm hover:shadow-md"
                        >
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Submit your {item.desc.toLowerCase()} for review by our expert panel.
                            </p>
                            <div className="h-1 w-12 bg-border group-hover:bg-primary transition-all" />
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
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
                </div>
            </div>
        </section>
    );
}
