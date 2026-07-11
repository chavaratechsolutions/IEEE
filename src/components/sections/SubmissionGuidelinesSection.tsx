"use client";

import { motion } from "framer-motion";
import { FileText, Download, UploadCloud } from "lucide-react";

export default function SubmissionGuidelinesSection() {
    return (
        <section id="submission" className="pt-12 pb-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <span className="text-primary font-semibold mb-3 block uppercase tracking-[0.2em] text-sm">Guidelines</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-glow">Paper Submission</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden p-10 md:p-12 bg-primary/5 rounded-[2.5rem] border border-primary/20 backdrop-blur-xl max-w-5xl mx-auto"
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

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-8 bg-muted/20 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm group"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Download className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold mb-4">Paper Template</h4>
                        <p className="text-muted-foreground mb-8">
                            All submissions must use the official IEEE conference template.
                        </p>
                        <a
                            href="https://www.ieee.org/conferences/publishing/templates"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-primary/10 text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all hover:-translate-y-1 active:scale-95 shadow-sm mt-auto"
                        >
                            Download Template
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="p-8 bg-muted/20 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm group"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <UploadCloud className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold mb-4">Paper Submission</h4>
                        <p className="text-muted-foreground mb-8">
                            Submit your papers through our online submission system.
                        </p>
                        <button
                            className="px-6 py-3 bg-primary/10 text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all hover:-translate-y-1 active:scale-95 shadow-sm mt-auto"
                        >
                            Submit Paper
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
