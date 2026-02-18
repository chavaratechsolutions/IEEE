"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { cn } from "@/lib/utils"; // Not used

// Imports removed as they are unused

interface FlipCardProps {
    digit: string | number;
    label?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ digit, label }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative flex flex-col items-center justify-center w-8 h-12 sm:w-12 sm:h-16 md:w-16 md:h-24 bg-[#1e293b] rounded-lg shadow-xl overflow-hidden perspective-1000 border border-[#334155]">
                <div className="relative w-full h-full text-lg sm:text-2xl md:text-4xl font-bold font-mono text-white flex items-center justify-center">
                    {/* Background Static Card */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#1e293b] rounded-lg z-0">
                        {digit}
                    </div>

                    {/* Top Half (Animated) */}
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={`top-${digit}`}
                            initial={{ rotateX: 0, zIndex: 10 }}
                            animate={{ rotateX: 0, zIndex: 10 }}
                            exit={{ rotateX: -90, zIndex: 20, transition: { duration: 0.3 } }}
                            className="absolute inset-x-0 top-0 h-1/2 bg-[#1e293b] flex items-end justify-center overflow-hidden origin-bottom border-b border-[#0f172a] backface-hidden z-10"
                        >
                            <span className="translate-y-1/2">{digit}</span>
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom Half (Animated) - Coming in */}
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={`bottom-${digit}`}
                            initial={{ rotateX: 90, zIndex: 20 }}
                            animate={{ rotateX: 0, zIndex: 20, transition: { duration: 0.3, delay: 0.3 } }}
                            exit={{ opacity: 0, transition: { duration: 0.1, delay: 0.5 } }} // Force persistence
                            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#1e293b] flex items-start justify-center overflow-hidden origin-top border-t border-[#0f172a] backface-hidden z-10"
                        >
                            <span className="-translate-y-1/2">{digit}</span>
                        </motion.div>
                    </AnimatePresence>

                    {/* Divider Line */}
                    <div className="absolute inset-x-0 top-1/2 h-px bg-[#0f172a] z-30 opacity-50"></div>
                </div>
            </div>
            {label && (
                <span className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-widest">
                    {label}
                </span>
            )}
        </div>
    );
};

export default FlipCard;
