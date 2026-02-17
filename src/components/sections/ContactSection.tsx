"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold mb-2 block">GET IN TOUCH</span>
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have questions? We're here to help. Reach out to the organizing committee.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-sm">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Email Us</h4>
                                <p className="text-muted-foreground text-sm mb-2">General Inquiries</p>
                                <a href="mailto:info@icscst2025.org" className="text-primary hover:underline">info@icscst2025.org</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-sm">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Call Us</h4>
                                <p className="text-muted-foreground text-sm mb-2">Mon-Fri from 9am to 6pm</p>
                                <a href="tel:+1 (555) 123-4567" className="text-primary hover:underline">+1 (555) 123-4567</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-sm">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Visit Us</h4>
                                <p className="text-muted-foreground text-sm">
                                    IEEE Section Office<br />
                                    123 Tech Park, Suite 400<br />
                                    New York, NY 10001
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card p-8 rounded-xl border border-border shadow-sm"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                    <input id="first-name" className="w-full px-3 py-2 border border-input rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                    <input id="last-name" className="w-full px-3 py-2 border border-input rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input id="email" type="email" className="w-full px-3 py-2 border border-input rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input id="subject" className="w-full px-3 py-2 border border-input rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Question about registration" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-input rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Your message here..." />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
