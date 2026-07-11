"use client";

import dynamic from "next/dynamic";
import React from "react";

const CountdownTimer = dynamic(() => import("./CountdownTimer"), {
    ssr: false,
});

export default function CountdownWrapper() {
    return (
        <section className="py-12 bg-muted/20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Innovating at the IEEE International Conference on Smart Energy, Mobility, and Intelligent Infrastructure for a more sustainable future.
                </h2>
                <p className="text-lg md:text-2xl text-muted-foreground font-semibold mb-10">
                    March 26–27, 2027
                </p>
                <CountdownTimer />
            </div>
        </section>
    );
}
