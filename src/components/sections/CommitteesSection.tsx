"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Import images
import SarathImg from "@/img/sararth.jpg";
import AnetImg from "@/img/anet.jpg";
import SreedivyaImg from "@/img/sreedivya.jpg";
import NishaImg from "@/img/nisha.jpg";
import ShaniImg from "@/img/shani.jpg";
import GeethuImg from "@/img/geethu.jpg";
import ReethuImg from "@/img/reethu.jpg";

interface CommitteeMember {
    name: string;
    designation: string;
    affiliation: string;
    image: string | StaticImageData;
}

const committee = {
    generalChairs: [], // Deprecated
    programChairs: [], // Deprecated
    steering: []       // Deprecated
};

export default function CommitteesSection() {
    // Combine all committee members into a single array
    const allMembers: CommitteeMember[] = [
        { name: "Dr. Sarath K S", designation: "General Chair", affiliation: "Associate Professor", image: SarathImg },
        { name: "Ms. Anet Jose", designation: "Co-General Chair", affiliation: "Assistant Professor", image: AnetImg },
        { name: "Dr. Sreedivya K M", designation: "TPC Chair", affiliation: "Associate Professor", image: SreedivyaImg },
        { name: "Dr. Nisha R", designation: "Publication Chair", affiliation: "Assistant Professor", image: NishaImg },
        { name: "Ms. Reethu Dhanya", designation: "Publication Chair", affiliation: "Assistant Professor", image: ReethuImg },
        { name: "Ms. Shani S J", designation: "Publicity Chair", affiliation: "Assistant Professor", image: ShaniImg },
        { name: "Ms. Geethu Krishnan", designation: "Finance Committee Chair", affiliation: "Assistant Professor", image: GeethuImg },
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
                    <h2 className="text-3xl font-bold mb-4">Conference Committees</h2>
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
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-4 text-center relative">
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
