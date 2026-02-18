"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

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
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "sticky top-0 z-40 w-full transition-all duration-300",
                scrolled
                    ? "glass shadow-md py-2"
                    : "bg-background/80 backdrop-blur-sm py-4 border-b border-transparent"
            )}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary text-white p-1.5 rounded-md font-bold text-xl group-hover:bg-primary/90 transition-colors">
                        IEEE
                    </div>
                    <span className="font-bold text-xl tracking-tight text-foreground">ICSEMII 2027</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative group",
                                activeSection === item.href.substring(1)
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-in slide-in-from-top-5">
                    <div className="flex flex-col p-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                    activeSection === item.href.substring(1)
                                        ? "bg-primary/10 text-primary"
                                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                                <ChevronRight className="w-4 h-4 opacity-50" />
                            </a>
                        ))}
                        <div className="h-px bg-border my-2" />
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
        </nav>
    );
}
