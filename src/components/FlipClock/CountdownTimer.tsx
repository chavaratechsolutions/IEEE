"use client";

import React, { useEffect, useState } from "react";
import UnitGroup from "./UnitGroup";
import { differenceInSeconds } from "date-fns";

const TARGET_DATE = new Date("2027-03-26T12:01:00");

const calculateTotalTimeLeft = () => {
    const now = new Date();
    const totalSeconds = differenceInSeconds(TARGET_DATE, now);

    if (totalSeconds <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
}

const CountdownTimer: React.FC = () => {
    // Since we are using ssr: false, we can safely initialize with the current time
    const [timeLeft, setTimeLeft] = useState(calculateTotalTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTotalTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown flex flex-col md:flex-row flex-nowrap items-center justify-center gap-4 md:gap-6 px-1 md:px-4 w-full max-w-full overflow-hidden pb-4 no-scrollbar">
            <div className="flex justify-center md:contents">
                <UnitGroup value={timeLeft.days} label="Days" />
            </div>
            <div className="flex justify-center gap-3 sm:gap-5 md:contents">
                <UnitGroup value={timeLeft.hours} label="Hours" />
                <UnitGroup value={timeLeft.minutes} label="Minutes" />
                <UnitGroup value={timeLeft.seconds} label="Seconds" />
            </div>
        </div>
    );
};

export default CountdownTimer;
