"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="sticky top-20 z-10 bg-background rounded-3xl p-8 shadow-xl mb-12 about">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col lg:flex-row gap-12 items-center mb-16"
                    >
                        <div className="w-full lg:flex-1">
                            <h2 className="text-3xl font-bold mb-6 text-white text-center">About the Conference</h2>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-muted-foreground mb-4 leading-relaxed"
                            >
                                The IEEE International Conference on Smart Energy, Mobility, and Intelligent Infrastructure (ICSEMII) serves as an interdisciplinary platform focused on developing sustainable and intelligent technological systems. It brings together researchers, academicians, industry professionals, and practitioners to address emerging challenges in future infrastructure and mobility. The conference emphasizes advancements in smart energy systems, including renewable integration, smart grids, energy storage, and efficient power management. It promotes research that enhances energy reliability, efficiency, and environmental sustainability.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-muted-foreground mb-4 leading-relaxed"
                            >
                                ICSEMII also highlights intelligent mobility solutions such as electric vehicles, autonomous transportation, connected systems, and traffic optimization technologies. It explores the role of sensing, embedded systems, control engineering, and artificial intelligence in transforming transportation systems. The theme of intelligent infrastructure covers smart cities, cyber-physical systems, industrial automation, IoT-based monitoring, and resilient urban development. The conference underscores the importance of digital control, communication technologies, and predictive system management.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-muted-foreground mb-4 leading-relaxed"
                            >
                                It encourages interdisciplinary collaboration among EEE, E&I, ECE, CSE, and Mechanical Engineering to develop integrated engineering solutions. Overall, ICSEMII provides a forum for knowledge exchange, innovation, and collaborative research aimed at building energy-efficient, intelligent, and sustainable systems for future societies.
                            </motion.p>
                            {/* <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                                <div className="text-sm text-muted-foreground">Attendees</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                                <div className="text-sm text-muted-foreground">Countries</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-secondary mb-1">100+</div>
                                <div className="text-sm text-muted-foreground">Speakers</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-purple-600 mb-1">20+</div>
                                <div className="text-sm text-muted-foreground">Workshops</div>
                            </div>
                        </div> */}
                        </div>


                    </motion.div>
                </div>

                <div className="sticky top-24 z-20 bg-background rounded-3xl p-8 shadow-xl mb-12 about2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-16"
                    >
                        <div className="w-full lg:flex-1">
                            <h2 className="text-3xl font-bold mb-6 text-primary">Carmel College of Engineering and Technology</h2>
                            <div className="block lg:hidden w-full relative mb-8">
                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl relative">
                                    {/* Placeholder for About Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-50">
                                        Conference Atmosphere Image
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
                            </div>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-muted-foreground mb-4 leading-relaxed"
                            >
                                Carmel College of Engineering & Technology (CCET), located in Punnapra, Alappuzha, stands as a beacon of quality education and innovation in the field of engineering and technology. Owned and managed by St. Joseph’s Carmel Educational & Charitable Trust of CMI, the institution was established in the academic year 2014-15 with a mission to make engineering education accessible to students from all social backgrounds. The trust, which was registered on 13-09-2012, is dedicated to fostering academic excellence and holistic development.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-muted-foreground mb-4 leading-relaxed"
                            >
                                CCET is a self-financing institution, approved by the All India Council for Technical Education (AICTE) and affiliated to APJ Abdul Kalam Technological University, Kerala. This affiliation ensures that the curriculum is contemporary and in alignment with industry standards, thereby enhancing the employability of its graduates.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-muted-foreground mb-4 leading-relaxed"
                            >
                                At CCET, students can pursue 4-year Bachelor of Technology (B.Tech) degree programs in four major disciplines: Civil Engineering, Mechanical Engineering, Electrical and Electronics Engineering, and Computer Science and Engineering. Each program is designed to equip students with the theoretical knowledge and practical skills needed to excel in their chosen fields. The college boasts state-of-the-art laboratories, a well-stocked library, and modern classrooms, all of which contribute to a conducive learning environment.
                            </motion.p>
                            {/* <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                                <div className="text-sm text-muted-foreground">Attendees</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                                <div className="text-sm text-muted-foreground">Countries</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-secondary mb-1">100+</div>
                                <div className="text-sm text-muted-foreground">Speakers</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-purple-600 mb-1">20+</div>
                                <div className="text-sm text-muted-foreground">Workshops</div>
                            </div>
                        </div> */}
                        </div>

                        <div className="hidden lg:block w-full lg:flex-1 relative">
                            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl relative">
                                {/* Placeholder for About Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-50">
                                    Conference Atmosphere Image
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
                        </div>
                    </motion.div>
                </div>

                <div className="sticky top-28 z-30 bg-background rounded-3xl p-8 shadow-xl mb-12 about3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col lg:flex-row gap-12 items-center mb-16"
                    >
                        <div className="w-full lg:flex-1">
                            <h2 className="text-3xl font-bold mb-6 text-primary">Department of Electrical and Electronics Engineering</h2>
                            <div className="block lg:hidden w-full relative mb-8">
                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl relative">
                                    {/* Placeholder for About Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-50">
                                        Conference Atmosphere Image
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
                            </div>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-muted-foreground mb-4 leading-relaxed"
                            >
                                The Department of Electrical and Electronics Engineering was started in 2014 with an intake of 60 students and is affiliated with APJ Abdul Kalam Technological University, Kerala. From the beginning, the department has focused on providing quality education and practical learning experiences to help students build a strong foundation in engineering. The faculty team is highly qualified and experienced, with 25% holding Ph.D. degrees and 50% currently pursuing their doctoral studies. This creates a strong academic environment that supports both learning and research. The curriculum is updated regularly according to the guidelines of the university, ensuring that students learn the latest developments and technologies in the field. The department also encourages innovative thinking, problem-solving, and teamwork, which helps students develop the skills needed to succeed in the real world.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-muted-foreground mb-4 leading-relaxed"
                            >
                                The department has also made great progress in research and innovation. Over the years, it has completed several government-funded projects, giving students opportunities to gain hands-on experience and work on real-world problems. It has a very active Institute of Electrical and Electronics Engineers (IEEE) student branch along with the Power and Energy Society (PES), where students participate in workshops, seminars, and competitions that help them improve their technical knowledge and leadership skills. Many events have been conducted in collaboration with IEEE, which gives students the chance to connect with professionals and experts in the field. The department has also received financial support and recognition from agencies such as Kerala Development and Innovation Strategic Council (K-DISC), Kerala State Council for Science, Technology and Environment (KSCSTE), and IEEE PES. These achievements show the department's commitment to promoting innovation, research, and student development.
                            </motion.p>
                            {/* <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                                <div className="text-sm text-muted-foreground">Attendees</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                                <div className="text-sm text-muted-foreground">Countries</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-secondary mb-1">100+</div>
                                <div className="text-sm text-muted-foreground">Speakers</div>
                            </div>
                            <div className="p-4 bg-background rounded-xl shadow-sm border border-border">
                                <div className="text-3xl font-bold text-purple-600 mb-1">20+</div>
                                <div className="text-sm text-muted-foreground">Workshops</div>
                            </div>
                        </div> */}
                        </div>

                        <div className="hidden lg:block w-full lg:flex-1 relative">
                            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl relative">
                                {/* Placeholder for About Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-50">
                                    Conference Atmosphere Image
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    );
}
