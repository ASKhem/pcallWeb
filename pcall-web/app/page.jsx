"use client"
import React from 'react';
import Button from '../components/main/home/ButtonBuildNow';
import GalleryBoard from '../components/main/home/BoardImage';

export default function Home() {
  const videoRef = React.useRef();

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-800 flex flex-col items-center justify-center">
        <div className="w-10/12 flex items-start justify-center gap-10">
          <video ref={videoRef} src="/video/video-presentation.mp4" width="650" height="650" className="rounded-3xl" loop muted></video>
          <div className="w-2/4 py-5 flex flex-col  text-white">
            <h2 className="text-orange-700 text-6xl py-5 font-bold w-full flex items-center">WE BUILD THE BEST PC</h2>
            <h3 className="text-3xl font-bold py-5" >CHOOSE THE COMPONENTS, WE BUILD IT FOR YOU</h3>
            <p className="text-xl py-5">
              At our company, we are known for our top-notch PC builds. With carefully selected components,
              tailored to your needs, our skilled team crafts personalized computing experiences. Offering
              competitive prices and uncompromising quality, we deliver performance and reliability in every
              build.
            </p>
            <div className="w-full flex items-center justify-center mt-16"><Button /></div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500 flex items-center justify-center">
        <GalleryBoard />
      </div>
      <div className="min-h-screen bg-gradient-to-bl from-black via-zinc-950 to-zinc-800 flex flex-col items-center justify-center">

      </div>

    </>

  );
}