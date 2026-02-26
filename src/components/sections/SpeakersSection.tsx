"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const speakers = [
    { name: "aaaa", role: "aaaaa", org: "aaaa", image: "/placeholder-speaker-1.jpg" },
    { name: "bbbb", role: "bbbb", org: "aaaaa", image: "/placeholder-speaker-2.jpg" },
    { name: "cccc", role: "ccccc", org: "aaa", image: "/placeholder-speaker-3.jpg" },
    { name: "dddd", role: "ddddd", org: "aaaaa", image: "/placeholder-speaker-4.jpg" },
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
                    <h2 className="text-3xl font-bold mb-4 heading-glow">Distinguished Speakers</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Meet the industry leaders and academic pioneers shaping the future of technology.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all group border border-border w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                {/* Using standard img as placeholders are local paths, similar logic to next/image over a colored div */}
                                {speaker.image.startsWith('/') ? (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-4xl font-bold text-muted-foreground transition-transform duration-500 group-hover:scale-110">
                                        {speaker.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                ) : (
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-4 text-center relative">
                                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{speaker.name}</h3>
                                <p className="text-sm font-medium text-primary mb-1">{speaker.role}</p>
                                <p className="text-xs text-muted-foreground">{speaker.org}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
