import { useState } from "react";
import Link from 'next/link';

export default function FancyVideoEffect({imgSrc, vidSrc, alt}){
    const [currentSrc, setCurrentSrc] = useState(imgSrc);

    const handleMouseOver = () => {
        setCurrentSrc(vidSrc);
    };

    const handleMouseOut = () => {
        setCurrentSrc(imgSrc);
    };

    return (
        <li
            className = "p-5 w-[30%] h-11/12 flex items-center gap-10 rounded-2xl"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <Link href="/" className="w-full h-11/12 flex flex-col items-center gap-10">
                <div className = "w-full h-11/12 flex flex-col items-center gap-10">
                    <img
                        src={currentSrc}
                        alt={alt}
                        className={`rounded-xl w-11/12 h-6/12 object-cover border-2 transition-all duration-500 ease-in-out ${color}`}
                    />
                    <p className="w-11/12  text-black text-2xl font-bold">{text}</p>
                </div>
            </Link>
        </li>
    );

}