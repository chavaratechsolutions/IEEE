"use client";

import { motion } from "framer-motion";

const committee = {
    generalChairs: [
        { name: "Prof. Alan Turing", affiliation: "University of Cambridge, UK" },
        { name: "Dr. Grace Hopper", affiliation: "Yale University, USA" }
    ],
    programChairs: [
        { name: "Prof. Donald Knuth", affiliation: "Stanford University, USA" },
        { name: "Dr. Ada Lovelace", affiliation: "University of London, UK" }
    ],
    steering: [
        { name: "Dr. Tim Berners-Lee", affiliation: "W3C / MIT, USA" },
        { name: "Prof. Vint Cerf", affiliation: "Google, USA" }
    ]
};

export default function CommitteesSection() {
    return (
        <section id="committees" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold mb-2 block">ORGANIZERS</span>
                    <h2 className="text-3xl font-bold mb-4">Conference Committees</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        The dedicated team behind the success of this international conference.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-bold mb-6 text-primary border-b border-primary/20 pb-2 inline-block">General Chairs</h3>
                        <ul className="space-y-4">
                            {committee.generalChairs.map((member, index) => (
                                <li key={index}>
                                    <p className="font-semibold text-lg">{member.name}</p>
                                    <p className="text-muted-foreground text-sm">{member.affiliation}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-bold mb-6 text-primary border-b border-primary/20 pb-2 inline-block">Program Chairs</h3>
                        <ul className="space-y-4">
                            {committee.programChairs.map((member, index) => (
                                <li key={index}>
                                    <p className="font-semibold text-lg">{member.name}</p>
                                    <p className="text-muted-foreground text-sm">{member.affiliation}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-bold mb-6 text-primary border-b border-primary/20 pb-2 inline-block">Steering Committee</h3>
                        <ul className="space-y-4">
                            {committee.steering.map((member, index) => (
                                <li key={index}>
                                    <p className="font-semibold text-lg">{member.name}</p>
                                    <p className="text-muted-foreground text-sm">{member.affiliation}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
