"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const speakers = [
    { name: "Dr. Elena Rodriguez", role: "AI Research Director", org: "Tech Institute", image: "/placeholder-speaker-1.jpg" },
    { name: "Prof. James Chen", role: "Chair of Computer Science", org: "University of Innovation", image: "/placeholder-speaker-2.jpg" },
    { name: "Sarah Williams", role: "Chief Technology Officer", org: "Future Systems", image: "/placeholder-speaker-3.jpg" },
    { name: "Dr. Michael Change", role: "Head of Robotics", org: "Global Dynamics", image: "/placeholder-speaker-4.jpg" },
];

export default function SpeakersSection() {
    return (
        <section id="speakers" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold mb-2 block">KEYNOTES</span>
                    <h2 className="text-3xl font-bold mb-4">Distinguished Speakers</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Meet the industry leaders and academic pioneers shaping the future of technology.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-background border border-border shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                                {/* 
                 * In a real implementation, we would use proper images.
                 * For now, using a colored placeholder with initials.
                 */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-4xl font-bold text-muted-foreground">
                                    {speaker.name.split(' ').map(n => n[0]).join('')}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <p className="text-white text-sm font-medium">View Biography &rarr;</p>
                                </div>
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-bold text-lg">{speaker.name}</h3>
                                <p className="text-primary text-sm font-medium mb-1">{speaker.role}</p>
                                <p className="text-muted-foreground text-xs">{speaker.org}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
