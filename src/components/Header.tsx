import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";

export default function Header() {
    return (
        <div className="bg-primary text-primary-foreground py-2 px-4 shadow-sm z-50 relative">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                <div className="flex items-center gap-6 mb-2 md:mb-0">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>October 15-17, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>New York City, USA</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-semibold hidden md:inline">IEEE International Conference on Smart Computing</span>
                    {/* <Link href="/login" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                        Member Login
                    </Link> */}
                </div>
            </div>
        </div>
    );
}
