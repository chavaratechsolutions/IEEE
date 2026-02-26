"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import ScrollProgress from "@/components/ui/ScrollProgress";

const navItems = [
    { name: "About", href: "#about" },
    { name: "CFP", href: "#cfp" },
    { name: "Tracks", href: "#tracks" },
    { name: "Dates", href: "#dates" },
    { name: "Speakers", href: "#speakers" },
    { name: "Committees", href: "#committees" },
    { name: "Venue", href: "#venue" },
    { name: "Brochure", href: "#brochure" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isOverHero, setIsOverHero] = useState(true);
    const [activeSection, setActiveSection] = useState("");
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [showProgress, setShowProgress] = useState(false);
    const [forceBelow, setForceBelow] = useState(false);

    useEffect(() => {
        // Handle loading screen timeout
        const timer = setTimeout(() => {
            setIsInitialLoading(false);
        }, 2000);

        // Show progress bar only after the full 2-second navbar animation
        const progressTimer = setTimeout(() => {
            setShowProgress(true);
        }, 3000);

        // 0.3 seconds after loading completes, switch to Below Hero style
        const forceBelowTimer = setTimeout(() => {
            setForceBelow(true);
        }, 3300);

        // Run once on mount
        setIsOverHero(window.scrollY < window.innerHeight - 80);

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            setIsOverHero(window.scrollY < window.innerHeight - 80);

            // Simple active section detection
            const sections = navItems.map(item => item.href.substring(1));

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
            clearTimeout(progressTimer);
            clearTimeout(forceBelowTimer);
        };
    }, []);

    useEffect(() => {
        if (isInitialLoading) {
            document.body.style.overflow = "hidden";
            window.scrollTo(0, 0); // ensure at top while loading
        } else {
            document.body.style.overflow = "auto";
        }

        return () => { document.body.style.overflow = "auto"; }
    }, [isInitialLoading]);

    return (
        <motion.nav
            layout
            transition={{ duration: 1, ease: "easeInOut" }}
            className={cn(
                "sticky top-0 w-full flex flex-col z-50",
                isInitialLoading ? "overflow-hidden h-[100dvh] justify-center bg-white"
                    : cn(
                        "overflow-visible h-auto transition-colors duration-300",
                        isOverHero && !forceBelow
                            ? cn("bg-white", scrolled ? "shadow-md py-4" : "py-4")
                            : (scrolled
                                ? "glass shadow-md py-4"
                                : "bg-background/80 backdrop-blur-sm py-4 border-b border-transparent")
                    )
            )}
        >
            <motion.div
                layout
                transition={{ duration: 1, ease: "easeInOut" }}
                className={cn(
                    "container mx-auto px-4 flex items-center w-full",
                    isInitialLoading ? "justify-center" : "justify-between"
                )}
            >
                <motion.div layout transition={{ duration: 1, ease: "easeInOut" }}>
                    <Link href="/" className="flex items-center group cursor-pointer" onClick={(e) => {
                        e.preventDefault();
                        if (isInitialLoading) return;

                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInitialLoading ? 0 : 1 }}
                            transition={{ duration: 0.3, delay: isInitialLoading ? 0 : 0.8 }}
                            className={cn(
                                "mr-2 transition-transform hover:scale-105",
                                isInitialLoading ? "hidden" : "block"
                            )}>
                            <img
                                src="/ieee.jpg"
                                alt="IEEE Logo"
                                className="h-10 w-auto rounded-xl object-cover shadow-sm"
                            />
                        </motion.div>
                        <motion.div
                            layout
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className={cn(
                                "flex items-center justify-center",
                                isInitialLoading
                                    ? "fixed inset-0 m-auto w-fit h-fit z-[100]"
                                    : "relative left-auto top-auto z-auto"
                            )}
                        >
                            <motion.span
                                layout
                                transition={{ duration: 1, ease: "easeInOut" }}
                                style={{
                                    backgroundImage: isInitialLoading
                                        ? "linear-gradient(to right, #000 50%, #e2e8f0 50%)"
                                        : (isOverHero && !forceBelow ? "linear-gradient(to right, #000 100%, #000 100%)" : "linear-gradient(to right, currentColor 100%, currentColor 100%)"),
                                    backgroundSize: "200% 100%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                                animate={{
                                    backgroundPosition: isInitialLoading ? ["100% 0", "0% 0"] : "0% 0",
                                    transition: isInitialLoading ? { duration: 1.5, ease: "easeInOut" } : undefined
                                }}
                                className={cn(
                                    "font-bold tracking-tight inline-block whitespace-nowrap",
                                    isInitialLoading
                                        ? "text-[8.5vw]"
                                        : cn("text-2xl scale-100", isOverHero ? "" : "")
                                )}>
                                ICSEMII 2027
                            </motion.span>
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInitialLoading ? 0 : 1 }}
                    transition={{ duration: 0.3, delay: isInitialLoading ? 0 : 0.8 }}
                    className={cn(
                        isInitialLoading ? "hidden" : "hidden lg:flex items-center gap-1"
                    )}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative group",
                                activeSection === item.href.substring(1)
                                    ? "text-primary bg-primary/10"
                                    : (isOverHero && !forceBelow
                                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50")
                            )}
                        >
                            {item.name}
                            {activeSection === item.href.substring(1) && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full mb-1" />
                            )}
                        </a>
                    ))}
                    {/* <a
                        href="#register"
                        className="ml-4 px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                        Register
                    </a> */}
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInitialLoading ? 0 : 1 }}
                    transition={{ duration: 0.3, delay: isInitialLoading ? 0 : 0.8 }}
                    className={cn(
                        "p-2 rounded-md transition-colors",
                        isInitialLoading ? "hidden" : "lg:hidden",
                        isOverHero && !forceBelow
                            ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                            : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
            </motion.div>

            {/* Mobile Navigation */}
            {isOpen && !isInitialLoading && (
                <div className={cn(
                    "lg:hidden absolute top-full left-0 w-full border-b shadow-lg animate-in slide-in-from-top-5",
                    isOverHero ? "bg-white border-slate-200" : "bg-background/95 backdrop-blur-md border-border"
                )}>
                    <div className="flex flex-col p-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                    activeSection === item.href.substring(1)
                                        ? "bg-primary/10 text-primary"
                                        : (isOverHero
                                            ? "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                                            : "hover:bg-muted text-muted-foreground hover:text-foreground")
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                                <ChevronRight className="w-4 h-4 opacity-50" />
                            </a>
                        ))}
                        <div className={cn("h-px my-2", isOverHero ? "bg-slate-200" : "bg-border")} />
                        {/* <a
                            href="#register"
                            className="w-full text-center px-4 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Register Now
                        </a> */}
                    </div>
                </div>
            )}

            {/* Show progress bar only after loading animation completes */}
            {showProgress && <ScrollProgress />}
        </motion.nav>
    );
}
