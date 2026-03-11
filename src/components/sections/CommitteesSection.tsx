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
        { name: "Dr. Sarath K S", designation: "General Chair", affiliation: "Associate Professor, CCET" },
        { name: "Ms. Anet Jose", designation: "Co-General Chair", affiliation: "Assistant Professor, CCET" },
        { name: "Dr. Sreedivya K M", designation: "TPC Chair", affiliation: "Associate Professor, CCET" },
        { name: "Dr. Syamala S", designation: "TCP Chair", affiliation: "Assistant Professor, IIIT Kottayam" },
        { name: "Dr Ragesh G K", designation: "TCP Chair", affiliation: "Assistant Professor, IIIT Kottayam" },
        { name: "Dr. Nisha R", designation: "Publication Chair", affiliation: "Assistant Professor, CCET" },
        { name: "Ms. Reethu Dhanya", designation: "Publication Chair", affiliation: "Assistant Professor, CCET" },
        { name: "Dr. Parvathy A K", designation: "Publication Chair", affiliation: "Professor, VIT Chennai" },
        { name: "Dr. Rahul Satheesh", designation: "Publication Chair", affiliation: "Assistant Professor, Amrita Vishwa Vidyapeetham, Coimbatore" },
        { name: "Ms. Shani S J", designation: "Publicity Chair", affiliation: "Assistant Professor, CCET" },
        { name: "Ms. Geethu Krishnan", designation: "Finance Committee Chair", affiliation: "Assistant Professor, CCET" },
    ];
    const advisoryCommitteeMembers: CommitteeMember[] = [
        { name: "Dr Suneesh Kumar", designation: "Professor", affiliation: "Ulster University UK" },
        { name: "Dr BS Manoj", designation: "IEEE Kerala Section", affiliation: "" },
        { name: "Dr Bijuna Kunju K", designation: "IEEE Kerala Section", affiliation: "" },
        { name: "Dr Jaison Mathew", designation: "Professor", affiliation: "GEC Thrissur" },
        { name: "Dr Biju K", designation: "Assistant Director", affiliation: "APJ Abdul Kalam Technological University, Kerala" },
        { name: "Dr Josephkutty Jacob", designation: "Principal", affiliation: "Carmel College of Engineering and Technology, Alappuzha" },
        { name: "Dr P S Saikumar", designation: "Professor", affiliation: "IIT Tirupathi" },
        { name: "Dr Venkatakrithiga", designation: "Professor", affiliation: "NIT Trichy" },
        { name: "Dr. Sheik Mohammed Sulthan", designation: "Assistant Professor, Deputy Director of Centre for Transport Research", affiliation: "Faculty of engineering, Universiti Teknologi Brunei" },
        { name: "Dr Stella Morris", designation: "Associate Professor", affiliation: "Lee Kong Chian Faculty of Engineering and Science, Department of Electrical and Electronic Engineering, Universiti TunkuAbdul Rahman, Malaysia" }
    ];

    const technicalCommitteeMembers: CommitteeMember[] = [
        { name: "Dr P Aruna Jeyanthy", designation: "Professor", affiliation: "Kalasalingam Academy of Research and Education, Madurai" },
        { name: "Dr Vijay Ananad", designation: "Associate Professor", affiliation: "Jain University Bangalore" },
        { name: "Dr Suganthi S T", designation: "Asst. Professor Senior grade", affiliation: "Kumaragura College of Technology, Coimbatore" },
        { name: "Dr Dolly Mary Abraham", designation: "Professor", affiliation: "GEC Idukki" },
        { name: "Dr Sreelekha V", designation: "Associate Professor", affiliation: "GEC Idukki" },
        { name: "Dr. Surya Natarajan", designation: "Asst. Professor Senior grade", affiliation: "FISAT Angamaly" },
        { name: "Dr Jinu Ann George", designation: "Professor", affiliation: "St Joseph College of Engineering and Technology Pala" },
        { name: "Dr Thomson Thomas", designation: "Associate Professor", affiliation: "St Joseph College of Engineering and Technology Pala" },
        { name: "Dr Renjith Thomas", designation: "Associate Professor", affiliation: "St Joseph College of Engineering and Technology Pala" },
        { name: "Dr Felic M Philip", designation: "Associate Professor", affiliation: "JAIN (Deemed to be University) Kochi" },
        { name: "Dr. Gnana Sheela K", designation: "Professor", affiliation: "Toc H institute of science and technology" },
        { name: "Dr. Vijayalekshmy S", designation: "Professor", affiliation: "Marian Engineering College, Trivandrum" },
        { name: "Dr Sheeja Augustine", designation: "Professor", affiliation: "Marian Engineering College, Trivandrum" },
        { name: "Dr Mercelin Francis", designation: "Professor", affiliation: "Marian Engineering College, Trivandrum" },
        { name: "Dr. Radhika R.", designation: "Associate Professor", affiliation: "RIT, Kottayam" },
        { name: "Dr Meera Khalid", designation: "Assistant Professor", affiliation: "RIT, Kottayam" },
        { name: "Dr Michael George", designation: "Assistant Professor", affiliation: "RIT, Kottayam" },
        { name: "Dr Tinu P Saju", designation: "Assistant Professor", affiliation: "TKM Kollam" },
        { name: "Dr. Ramesh U", designation: "Professor", affiliation: "College of Engineering, Munnar" },
        { name: "Dr Radhika R.", designation: "Professor", affiliation: "College of Engineering, Munnar" },
        { name: "Dr Vidya Sojan", designation: "Professor", affiliation: "College of Engineering, Munnar" },
        { name: "Dr. Ramesh P.", designation: "Professor", affiliation: "College of Engineering, Munnar" },
        { name: "Dr Manju Manuel", designation: "Professor", affiliation: "GEC Idukki" },
        { name: "Dr. Felix M Philip", designation: "Associate Professor", affiliation: "JAIN (Deemed to be University) Kochi" },
        { name: "Dr. Anu V R", designation: "Associate Professor", affiliation: "JAIN (Deemed to be University) Kochi" },
        { name: "Dr. Arshey M", designation: "Assistant Professor", affiliation: "JAIN (Deemed to be University) Kochi" },
        { name: "Dr. Ansith S", designation: "Assistant Professor", affiliation: "IIIT Kottayam" },
        { name: "Dr. Nanda Kishore P V R", designation: "Assistant Professor", affiliation: "RIT, Kottayam" },
        { name: "Dr Anish Mathew", designation: "Assistant Professor", affiliation: "FISAT, Angamaly" },
        { name: "Dr Sujith Kumar P S", designation: "Professor", affiliation: "Sree Buddha College of Engineering, Pattor" },
        { name: "Dr Anna Thomas", designation: "Post Doctoral Researcher under Visvesvaraya Scheme", affiliation: "Goa University, Goa" }
    ];

    return (
        <section id="committees" className="py-20 bg-secondary/5">
            <div className="container mx-auto px-4">
                {/* Advisory Committee */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold mb-2 block">GUIDANCE</span>
                    <h2 className="text-3xl font-bold mb-4 heading-glow">Advisory Committee</h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto mb-20">
                    {advisoryCommitteeMembers.map((member, index) => (
                        <motion.div
                            key={'adv-' + index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all group border border-border w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                        >
                            <div className="p-4 text-center relative flex flex-col justify-center h-full min-h-[140px]">
                                <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-primary transition-colors leading-tight">{member.name}</h3>
                                {member.designation && <p className="text-xs sm:text-sm font-medium text-primary mb-1">{member.designation}</p>}
                                {member.affiliation && <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{member.affiliation}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Committee */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold mb-2 block">EXPERTISE</span>
                    <h2 className="text-3xl font-bold mb-4 heading-glow">Technical Committee</h2>
                </motion.div>

                <div className="max-w-6xl mx-auto mb-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-card rounded-xl shadow-md border border-border w-full overflow-hidden"
                    >
                        <div className="w-full">
                            <table className="w-full text-left text-sm sm:text-base border-collapse">
                                <thead className="bg-primary/10 text-primary border-b border-border">
                                    <tr>
                                        <th className="p-3 sm:p-4 font-bold w-12 text-center">#</th>
                                        <th className="p-3 sm:p-4 font-bold">Name</th>
                                        <th className="p-3 sm:p-4 font-bold hidden md:table-cell">Designation</th>
                                        <th className="p-3 sm:p-4 font-bold hidden md:table-cell">Affiliation</th>
                                        <th className="p-3 sm:p-4 font-bold md:hidden">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {technicalCommitteeMembers.map((member, index) => (
                                        <tr key={'tech-' + index} className="hover:bg-primary/5 transition-colors">
                                            <td className="p-3 sm:p-4 text-muted-foreground font-medium text-center align-top md:align-middle">{index + 1}</td>
                                            <td className="p-3 sm:p-4 font-semibold align-top md:align-middle">{member.name}</td>
                                            <td className="p-3 sm:p-4 text-muted-foreground hidden md:table-cell align-middle">{member.designation}</td>
                                            <td className="p-3 sm:p-4 text-muted-foreground leading-snug hidden md:table-cell align-middle">{member.affiliation}</td>
                                            <td className="p-3 sm:p-4 md:hidden align-top">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-muted-foreground text-xs font-medium">{member.designation}</span>
                                                    <span className="text-muted-foreground text-xs leading-snug">{member.affiliation}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>

                {/* Conference Committees */}
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
                            <div className="p-4 text-center relative flex flex-col justify-center h-full min-h-[140px]">
                                <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-primary transition-colors leading-tight">{member.name}</h3>
                                {member.designation && <p className="text-xs sm:text-sm font-medium text-primary mb-1">{member.designation}</p>}
                                {member.affiliation && <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{member.affiliation}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
