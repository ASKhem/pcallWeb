"use client"
import React from 'react';
import Link from 'next/link';
import Carrousel from '../components/main/home/Carrousel';
import { FaSpaceAwesome } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa6";

export default function Home() {
  const videoRef = React.useRef();

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const images = [
    '/img/carrousel-main/carrousel-img1.png',
    '/img/carrousel-main/carrousel-img3.png',
    '/img/carrousel-main/carrousel-img2.png',
  ];
  const texts = ['Build the funciest PC', 'Get Disccounts', 'Seccond hand components'];
  const className = ['class1', 'class2', 'class3'];
  const alt = ['Alt 1', 'Alt 2', 'Alt 3'];
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-800 flex flex-col items-center justify-center">
        <div className="w-11/12 flex items-start justify-center gap-10">
          <video ref={videoRef} src="/video/video-presentation.mp4" width="520" height="500" loop muted></video>
          <div className="w-2/4 py-5 flex flex-col  text-white">
            <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
              <h1 className="mt-10 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                We built the
                <span className="text-orange-500"> best </span>
                <span className="text-orange-500">PCs</span>
              </h1>
              <div className = "flex flex-col gap-10 items-center justify-start">
              <p className="mt-6 text-lg leading-8 text-gray-300">CHOOSE THE COMPONENTS, WE BUILD IT FOR YOU</p>
                <Link href="/"
                  className="w-fit animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-orange-600 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
                  <span className="ml-2 flex items-center gap-2">Build Now <FaSpaceAwesome /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-min-[85vh] bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500 flex flex-col items-center justify-center gap-10 py-10">
        <div className="w-11/12 text-custom-blue text-5xl font-bold flex items-ceter gap-10 border-b-2 border-b-gray-800 pb-10">
          <FaSquare /><h2>WHAT WE OFFER</h2>
        </div>
        <div className="w-10/12 flex items-center justify-center">
          <Carrousel images={images} texts={texts} className={className} alt={alt}/>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-bl from-black via-zinc-950 to-zinc-800 flex flex-col items-center justify-center  gap-10 py-10">
        <div className="w-11/12 text-orange-700 text-5xl font-bold flex items-ceter gap-10 border-b-2 border-b-white pb-10">
            <h2>How we build PCs</h2><FaSquare />
        </div>
      </div>
      <div className="w-full h-min-screen bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500 flex flex-col items-center justify-center gap-10 py-10">
        <div className="w-11/12 min-h-screen text-orange-700 text-5xl font-bold flex items-ceter gap-10">
          <FaSquare /><h2>Our Sponsors</h2>

        </div>
      </div>

    </>

  );
}