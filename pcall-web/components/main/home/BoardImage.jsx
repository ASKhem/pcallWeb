import { useState } from "react";

function BoardImage({ src, alt, text, vidSrc }) {
    const [currentSrc, setCurrentSrc] = useState(src);

    const handleMouseOver = () => {
        setCurrentSrc(vidSrc);
    };

    const handleMouseOut = () => {
        setCurrentSrc(src);
    };

    return (
        <div
            className="w-[28vw] h-11/12 flex flex-col items-center justify-center gap-10"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <img
                src={currentSrc}
                alt={alt}
                className="rounded-xl"
            />
            <p className="w-full bg-opacity-50 text-black text-2xl font-bold">{text}</p>
        </div>
    );
}

export default BoardImage;
