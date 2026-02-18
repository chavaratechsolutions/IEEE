import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">ICSEMII 2027</h3>
                        <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                            International Conference on Smart Energy, Mobility, and Intelligent Infrastructure.
                        </p>
                        {/* <div className="flex gap-4 pt-2">
                            <a href="#" className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div> */}
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground/80">
                            <li><a href="#about" className="hover:text-white hover:underline decoration-primary">About Conference</a></li>
                            <li><a href="#cfp" className="hover:text-white hover:underline decoration-primary">Call for Papers</a></li>
                            <li><a href="#speakers" className="hover:text-white hover:underline decoration-primary">Keynote Speakers</a></li>
                            <li><a href="#registration" className="hover:text-white hover:underline decoration-primary">Registration</a></li>
                            <li><a href="#contact" className="hover:text-white hover:underline decoration-primary">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Information</h4>
                        <ul className="space-y-2 text-sm text-secondary-foreground/80">
                            <li><a href="#" className="hover:text-white hover:underline decoration-primary">Program Schedule</a></li>
                            <li><a href="#" className="hover:text-white hover:underline decoration-primary">Venue Guidelines</a></li>
                            <li><a href="#" className="hover:text-white hover:underline decoration-primary">Code of Conduct</a></li>
                            <li><a href="#" className="hover:text-white hover:underline decoration-primary">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white hover:underline decoration-primary">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* <div>
                        <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
                        <p className="text-sm text-secondary-foreground/80 mb-4">
                            Subscribe to stay updated with the latest news and announcements.
                        </p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-md focus:outline-none focus:border-primary text-sm placeholder:text-secondary-foreground/50"
                            />
                            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div> */}
                </div>

                <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60">
                    <p>© 2027 IEEE ICSEMII. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Powered by IEEE
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
