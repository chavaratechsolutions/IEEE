"use client";

import React from "react";
import FlipCard from "./FlipCard";

interface UnitGroupProps {
    value: number;
    label: string;
}

const UnitGroup: React.FC<UnitGroupProps> = ({ value, label }) => {
    // Pad with leading zero and split into characters
    const digits = value.toString().padStart(2, "0").split("");

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2">
                {digits.map((digit, index) => (
                    <FlipCard key={`${label}-${index}`} digit={digit} />
                ))}
            </div>
            <span className="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-[0.2em]">
                {label}
            </span>
        </div>
    );
};

export default UnitGroup;
