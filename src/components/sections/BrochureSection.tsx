"use client";

import { motion } from "framer-motion";
import { FileText, Download, ArrowRight } from "lucide-react";

export default function BrochureSection() {
    return (
        <section id="brochure" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-primary font-semibold mb-2 block">RESOURCES</span>
                        <h2 className="text-3xl font-bold mb-6">Conference Brochure</h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Get all the details about the conference, including the full schedule, speaker bios, and workshop descriptions in our comprehensive brochure.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <p>Complete Technical Program</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <p>Keynote Speaker Profiles</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <p>Venue Maps and Local Guide</p>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
                                <Download className="w-4 h-4" />
                                Download PDF
                            </button>
                            <button className="px-6 py-3 border border-input bg-background hover:bg-muted text-foreground rounded-lg font-medium transition-colors flex items-center gap-2">
                                View Online
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-64 md:w-80 aspect-[1/1.414] bg-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 rounded-lg overflow-hidden border border-gray-200">
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-white to-gray-50">
                                <div className="w-16 h-16 bg-primary rounded-full mb-4 flex items-center justify-center text-white">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">ICSCST 2025</h3>
                                <p className="text-sm text-gray-500">Conference Program</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
