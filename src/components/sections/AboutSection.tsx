"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6 text-primary">About the Conference</h2>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            The IEEE International Conference on Smart Computing Benefit (ICSCST 2025) brings together researchers, engineers, and practitioners from around the world to present their latest research findings, ideas, developments, and applications in the broad area of smart computing.
                        </p>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            This conference will feature a comprehensive technical program including several special sessions and workshops. The program will also feature keynote speakers, panel discussions, and poster sessions.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                                <div className="text-sm text-muted-foreground">Attendees</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                                <div className="text-sm text-muted-foreground">Countries</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-secondary mb-1">100+</div>
                                <div className="text-sm text-muted-foreground">Speakers</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-purple-600 mb-1">20+</div>
                                <div className="text-sm text-muted-foreground">Workshops</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl relative">
                            {/* Placeholder for About Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-50">
                                Conference Atmosphere Image
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
