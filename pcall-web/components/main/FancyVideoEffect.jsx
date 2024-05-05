"use client"
import { useRef, useEffect } from 'react';

function FancyVideoEffect({ videoSrc }) {
    const videoRef = useRef(null);
    let timerId = null;

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (timerId) {
            clearTimeout(timerId);
        }
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        const handleEnded = () => {
            if (video) {
                video.currentTime = 0;
            }
        };

        if (video) {
            video.addEventListener('ended', handleEnded);
        }

        return () => {
            if (video) {
                video.removeEventListener('ended', handleEnded);
            }
        };
    }, []);

    return (
        <video
            ref={videoRef}
            src={videoSrc}
            muted
            className="active:scale-125 transition-all duration-300 ease-in-out w-full h-full object-cover"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        ></video>
    );
}

export default FancyVideoEffect;