"use client";

import { motion } from "framer-motion";

interface CommitteeMember {
    name: string;
    designation: string;
    affiliation: string;
}

const committee = {
    generalChairs: [], // Deprecated
    programChairs: [], // Deprecated
    steering: []       // Deprecated
};

export default function CommitteesSection() {
    // Combine all committee members into a single array
    const allMembers: CommitteeMember[] = [
        { name: "Dr. Sarath K S", designation: "General Chair", affiliation: "Associate Professor" },
        { name: "Ms. Anet Jose", designation: "Co-General Chair", affiliation: "Assistant Professor" },
        { name: "Dr. Sreedivya K M", designation: "TPC Chair", affiliation: "Associate Professor" },
        { name: "Dr. SYAMALA S", designation: "TCP Chair", affiliation: "Assistant Professor, IIIT Kottayam" },
        { name: "Dr Ragesh G K", designation: "TCP Chair", affiliation: "Assistant Professor, IIIT Kottayam" },
        { name: "Dr. Nisha R", designation: "Publication Chair", affiliation: "Assistant Professor" },
        { name: "Ms. Reethu Dhanya", designation: "Publication Chair", affiliation: "Assistant Professor" },
        { name: "Dr. Parvathy A K", designation: "Publication Chair", affiliation: "Professor, VIT Chennai" },
        { name: "Dr. Rahul Satheesh", designation: "Publication Chair", affiliation: "Assistant Professor (Sr. Gd.), School of Artificial Intelligence, Center for Computational Engineering and Networking (CEN), Amrita Vishwa Vidyapeetham, Coimbatore" },
        { name: "Ms. Shani S J", designation: "Publicity Chair", affiliation: "Assistant Professor" },
        { name: "Ms. Geethu Krishnan", designation: "Finance Committee Chair", affiliation: "Assistant Professor" },
    ];

    return (
        <section id="committees" className="py-20 bg-secondary/5">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold mb-2 block">ORGANIZERS</span>
                    <h2 className="text-3xl font-bold mb-4 heading-glow">Conference Committees</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        The dedicated team behind the success of this international conference.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                    {allMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all group border border-border w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                        >
                            <div className="p-6 text-center relative flex flex-col justify-center h-full min-h-[140px]">
                                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="text-sm font-medium text-primary mb-1">{member.designation}</p>
                                <p className="text-xs text-muted-foreground">{member.affiliation}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
