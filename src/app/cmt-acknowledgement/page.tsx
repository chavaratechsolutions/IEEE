"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";

export default function CmtAcknowledgementPage() {
    return (
        <main className="min-h-screen bg-muted/30 flex flex-col justify-between">
            <div>
                <Navbar />

                <div className="container mx-auto px-4 pt-36 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-3xl mx-auto"
                    >
                        {/* Breadcrumb / Back Navigation */}
                        <div className="mb-8">
                            <a
                                href="/"
                                className="text-sm font-medium text-primary hover:underline flex items-center gap-2 group transition-all"
                            >
                                <span className="inline-block transition-transform group-hover:-translate-x-1">&larr;</span> Back to Home
                            </a>
                        </div>

                        {/* Premium Card */}
                        <div className="bg-background border border-secondary-foreground/10 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                            {/* Decorative background gradients */}
                            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-12 -left-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />

                            <div className="space-y-6">
                                <h1 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                                    CMT Acknowledgement
                                </h1>

                                <p className="text-base text-muted-foreground leading-relaxed">
                                    The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
            <BackToTop />
        </main>
    );
}
