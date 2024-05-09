"use client"
import { useState, useEffect } from "react";
export default function SponsorsCorrousel({imagesSrc}) {
    const [active, setActive] = useState(0);
    const [activeSrc, setActiveSrc] = useState(imagesSrc[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(active => (active + 1) % imagesSrc.length);
            setActiveSrc(imagesSrc[active]);
        }, 3000);
        return () => clearInterval(interval);
    }, [active, imagesSrc]);

    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex items-center justify-center">
                <img src={activeSrc} alt="razer image" className={active} />
            </div>
        </div>
    );
}

