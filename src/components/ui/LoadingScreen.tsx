"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 2200);

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-blue-900/20 radial-gradient"
            />

            <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Lightning Bolt SVG */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="w-48 h-48 text-primary drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]"
                >
                    <motion.path
                        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1, 1],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            times: [0, 0.4, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 0.5
                        }}
                        fill="currentColor"
                        className="text-yellow-400"
                        style={{ filter: "drop-shadow(0 0 10px #fbbf24)" }}
                    />
                    <motion.path
                        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                        initial={{ pathLength: 0, opacity: 0.2 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        stroke="currentColor"
                        className="text-primary absolute"
                    />
                </svg>

                {/* Electric Arcs */}
                <motion.div
                    className="absolute inset-0 border-4 border-transparent rounded-full"
                    animate={{
                        borderColor: ["transparent", "rgba(56,189,248,0.5)", "transparent"],
                        rotate: 360
                    }}
                    transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                    style={{ borderTopColor: "rgba(56,189,248,0.8)" }}
                />
                <motion.div
                    className="absolute inset-4 border-2 border-transparent rounded-full"
                    animate={{
                        borderColor: ["transparent", "rgba(251,191,36,0.5)", "transparent"],
                        rotate: -360
                    }}
                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                    style={{ borderBottomColor: "rgba(251,191,36,0.8)" }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
            >
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-400 tracking-wider">
                    ICSCST 2025
                </h2>
                <div className="mt-4 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-yellow-400"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="mt-2 text-primary/80 text-sm font-mono animate-pulse">
                    INITIALIZING SYSTEMS... {progress}%
                </p>
            </motion.div>
        </motion.div>
    );
}
