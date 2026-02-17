"use client";

import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";

const dates = [
    { date: "December 15, 2026", event: "Call for Papers Announcement", type: "primary" },
    { date: "January 11, 2027", event: "Draft Paper Submission", type: "normal" },
    { date: "February 11, 2027", event: "Notification of Acceptance", type: "normal" },
    { date: "March 1, 2027", event: "Final Camera-ready Paper", type: "normal" },
];

export default function DatesSection() {
    return (
        <section id="dates" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold mb-2 block">SCHEDULE</span>
                    <h2 className="text-3xl font-bold mb-4">Important Dates</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Key deadlines for ICSEMI 2027                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {dates.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border -z-10" />

                            <div className={`md:flex items-center justify-between mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                                <div className="md:w-5/12" />

                                <div className="absolute left-0 md:left-1/2 -translate-x-1.5 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10" />

                                <div className={`md:w-5/12 p-6 rounded-xl border ${item.type === "urgent" ? "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900" :
                                    item.type === "primary" ? "bg-primary/5 border-primary/20" :
                                        "bg-card border-border"
                                    } shadow-sm hover:shadow-md transition-shadow`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <CalendarClock className={`w-4 h-4 ${item.type === "urgent" ? "text-red-500" : "text-primary"
                                            }`} />
                                        <span className="font-semibold">{item.date}</span>
                                    </div>
                                    <h3 className="text-lg font-medium">{item.event}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
