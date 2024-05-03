import { useState } from "react";
import Link from 'next/link';

function BoardImage({ src, alt, text, vidSrc, color}) {
    const [currentSrc, setCurrentSrc] = useState(src);

    const handleMouseOver = () => {
        setCurrentSrc(vidSrc);
    };

    const handleMouseOut = () => {
        setCurrentSrc(src);
    };

    color = color === 1 ? "hover:border-red-600" : color === 2 ? "hover:border-amber-500" : "hover:border-green-600";

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

export default BoardImage;
