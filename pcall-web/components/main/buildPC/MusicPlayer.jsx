"use client"
import './musicPlayer.css'
import { FaPlay } from "react-icons/fa6";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import { FaDotCircle } from "react-icons/fa";
import { useState, useRef } from 'react';
import { FaStop } from "react-icons/fa6";

const songs = [
    { name: "Rainny Day", musicUrl: "/music/lofiNight.mp3", coverImg: "/img/musicPlayer/lofiNightCover.png" },
    { name: "Cloudy Day", musicUrl: "/music/lofiCloudy.mp3", coverImg: "/img/musicPlayer/lofiCloudyCover.png" },
    { name: "Sunny Day", musicUrl: "/music/lofiSunny.mp3", coverImg: "/img/musicPlayer/lofiSunnyCover.png" },
    { name: "jazz Vibes", musicUrl: "/music/jazzVibes.mp3", coverImg: "/img/musicPlayer/jazzVibesCover.png" }
]

export default function MusicPlayer() {
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [active, setActive] = useState(false)
    const audioRef = useRef(null);

    const nextSong = () => {
        stopMusic();
        const currentIndex = songs.findIndex(song => song.name === currentSong.name)
        setActive(false)
        if (currentIndex === songs.length - 1) {
            setCurrentSong(songs[0])
        } else {
            setCurrentSong(songs[currentIndex + 1])
        }
    }

    console.log(currentSong)

    const PrevSong = () => {
        const currentIndex = songs.findIndex(song => song.name === currentSong.name)
        stopMusic();
        setActive(false)
        if (currentIndex === 0) {
            setCurrentSong(songs[songs.length - 1])
        } else {
            setCurrentSong(songs[currentIndex - 1])
        }
    }

    const playMusic = () => {
        if (audioRef.current) {
            const audioPromise = audioRef.current.play();
            if (audioPromise !== undefined) {
                audioPromise.then(() => {
                }).catch((error) => {
                    console.error('Autoplay prevented:', error);
                });
            }
        
            setTimeout(() => {
                if (audioRef.current && audioRef.current.paused) {
                    audioRef.current.play();
                }
            }, 10);
        }
    }

    const stopMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }

    const handlePlay = () => {
        setActive(!active)
        if (active) {
            stopMusic();
        } else {
            playMusic(); 
        }
    }

    return (
        <div className="w-96 h-full bg-zinc-300 border-2 border-zinc-400 hover:border-orange-600 transition-all duration-300 text-lg rounded-full flex items-center justify-between text-zinc-700 shadow-xl shadow-zinc-500 backdrop-opacity-40">
            <div className="relative w-16 h-16">
                <img src={currentSong.coverImg} alt="mc" className={`w-full h-full circle text-sm rounded-full p-1 shadow-lg ${active ? 'animate-spin-slow' : ''}`} />
                <FaDotCircle className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-200 opacity-50 ${active ? 'animate-pulse' : ''}`} />
                <audio ref={audioRef} src={currentSong.musicUrl}/>
            </div>

            <div className="overflow-hidden w-5/12 h-6 whitespace-nowrap">
                <div className={`inline-block ${active ? 'animate-marquee' : ''}`}>
                    {currentSong.name}
                </div>
            </div>
            <div className="w-5/12 h-6 flex text-2xl items-center justify-center gap-3">
                <IoPlayBack onClick={PrevSong} />
                {active ?
                    <FaStop onClick={handlePlay} className="cursor-pointer text-zinc-700" /> :
                    <FaPlay onClick={handlePlay} className="cursor-pointer text-zinc-700" />
                }
                <IoPlayForward onClick={nextSong} />
            </div>
        </div>
    )
}
