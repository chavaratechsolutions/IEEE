"use client";

import { motion } from "framer-motion";
import { Receipt, TreeDeciduous, Database, Shield, Smartphone, Cloud } from "lucide-react";

const tracks = [
    { icon: Receipt, title: "", desc: "" },
    { icon: TreeDeciduous, title: "", desc: "" },
    { icon: Database, title: "", desc: "" },
    { icon: Shield, title: "", desc: "" },
    { icon: Smartphone, title: "", desc: "" },
    { icon: Cloud, title: "", desc: "" },
];

export default function TracksSection() {
    return (
        <section id="tracks" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold mb-2 block">TOPICS</span>
                    <h2 className="text-3xl font-bold mb-4 heading-glow">Conference Tracks</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        ICSEMI 2027 welcomes original contributions across the following thematic tracks.                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-xl"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                <track.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                            <p className="text-muted-foreground text-sm">{track.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
