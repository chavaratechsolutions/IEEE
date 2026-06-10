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
    { name: "Paper Submission", href: "#submission" },
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

        // Run once on mount — wrapped in timeout to avoid hydration mismatch
        const initScroll = () => {
            setScrolled(window.scrollY > 20);
            setIsOverHero(window.scrollY < window.innerHeight - 80);
        };
        initScroll();

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

        window.addEventListener("scroll", handleScroll, { passive: true });
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
            suppressHydrationWarning
            transition={{ duration: 1, ease: "easeInOut" }}
            style={
                !isInitialLoading
                    ? {
                        backgroundColor: forceBelow
                            ? (scrolled ? undefined : "rgba(255,255,255,0)")
                            : "rgb(255,255,255)",
                        transition: "background-color 0.8s ease, box-shadow 0.3s ease",
                    }
                    : undefined
            }
            className={cn(
                "sticky top-0 w-full flex flex-col z-50",
                isInitialLoading
                    ? "overflow-hidden h-[100dvh] justify-center bg-white"
                    : cn(
                        "overflow-visible h-auto backdrop-blur-sm",
                        !forceBelow
                            ? cn(scrolled ? "shadow-md py-4" : "py-4")
                            : (scrolled
                                ? "glass shadow-md py-4"
                                : "py-4 border-b border-transparent")
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
                                "mr-4 transition-transform hover:scale-105",
                                isInitialLoading ? "hidden" : "block"
                            )}>
                            <img
                                src="/ieee.jpg"
                                alt="IEEE Logo"
                                className="h-10 w-auto rounded-xl object-cover shadow-sm"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInitialLoading ? 0 : 1 }}
                            transition={{ duration: 0.3, delay: isInitialLoading ? 0 : 0.8 }}
                            className={cn(
                                "mr-4 transition-transform hover:scale-105",
                                isInitialLoading ? "hidden" : "block"
                            )}>
                            <img
                                src="/ieee_kerala.png"
                                alt="IEEE Kerala Logo"
                                className="h-10 w-auto object-contain"
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
                            <div className="relative flex items-center justify-center">
                                <motion.img
                                    layout
                                    src="/icesmi27.png"
                                    alt="ICSEMI 2027 Logo Background"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isInitialLoading ? [0.2, 0.2, 0] : 0 }}
                                    transition={{ 
                                        opacity: isInitialLoading ? { duration: 2, times: [0, 0.75, 1], ease: "easeInOut" } : { duration: 0.5 },
                                        layout: { duration: 1, ease: "easeInOut" }
                                    }}
                                    className={cn(
                                        "absolute object-contain grayscale",
                                        isInitialLoading
                                            ? "h-20 sm:h-28 md:h-36 lg:h-48 w-auto"
                                            : "h-10 w-auto"
                                    )}
                                />
                                <motion.img
                                    layout
                                    src="/icesmi27.png"
                                    alt="ICSEMI 2027 Logo"
                                    animate={{
                                        clipPath: isInitialLoading ? ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"] : "inset(0% 0% 0% 0%)"
                                    }}
                                    transition={{
                                        clipPath: { duration: 1.5, ease: "easeInOut" },
                                        layout: { duration: 1, ease: "easeInOut" }
                                    }}
                                    className={cn(
                                        "relative object-contain z-10",
                                        isInitialLoading
                                            ? "h-20 sm:h-28 md:h-36 lg:h-48 w-auto"
                                            : "h-10 w-auto"
                                    )}
                                />
                            </div>
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
                            style={{
                                color: activeSection === item.href.substring(1)
                                    ? undefined
                                    : (!forceBelow ? "#475569" : undefined),
                                transition: "color 0.8s ease, background-color 0.2s ease",
                            }}
                            className={cn(
                                "px-3 py-2 text-sm font-medium rounded-md relative group",
                                activeSection === item.href.substring(1)
                                    ? "text-primary bg-primary/10"
                                    : (forceBelow
                                        ? "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                        : "hover:text-slate-900 hover:bg-slate-100")
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
