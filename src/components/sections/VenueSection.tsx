"use client";

import { motion } from "framer-motion";
import { MapPin, Hotel, Plane } from "lucide-react";

export default function VenueSection() {
    return (
        <section id="venue" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold mb-2 block">LOCATION</span>
                    <h2 className="text-3xl font-bold mb-4">Venue & Travel</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Experience the vibrant city while attending the conference.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                            <h3 className="text-2xl font-bold mb-6">Grand Convention Center</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Conference Location</h4>
                                        <p className="text-muted-foreground">
                                            123 Innovation Avenue<br />
                                            New York, NY 10001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Hotel className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Accommodation</h4>
                                        <p className="text-muted-foreground">
                                            Special rates available at the Grand Hotel<br />
                                            Use code: IEEE2025
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Plane className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Getting There</h4>
                                        <p className="text-muted-foreground">
                                            20 mins from JFK Airport<br />
                                            Close to Central Station
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-8 w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                                View on Google Maps
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-[400px] bg-slate-200 rounded-2xl overflow-hidden relative"
                    >
                        {/* Placeholder for map */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-muted-foreground">
                            Map Visualization Placeholder
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
