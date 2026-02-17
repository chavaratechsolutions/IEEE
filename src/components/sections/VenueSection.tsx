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
                    <h2 className="text-3xl font-bold mb-4">Venue</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Experience the vibrant college campus while attending the conference.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-border relative h-[600px] w-full">
                    <div className="absolute inset-0">
                        {/* Placeholder for map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.807622285138!2d76.34009927582944!3d9.438263782446711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089b46e2347a05%3A0xf49b9fc5a41d110a!2sCarmel%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1771311397640!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="bg-gray-100 dark:bg-gray-800"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-96 bg-card/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-border"
                    >
                        <div className="flex flex-col justify-center">
                            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Carmel College of Engineering and Technology</h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm mb-1">Conference Location</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Punnapra, Alappuzha, Kerala - 688004
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/Bgf5BHDddSpdGhKi7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center mt-6 w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                            >
                                View on Google Maps
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
