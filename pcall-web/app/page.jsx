import React from 'react';
import Link from 'next/link';
import Carrousel from '../components/main/home/Carrousel';
import { FaSpaceAwesome } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa6";
import FancyVideoEffect from '../components/main/FancyVideoEffect';
import ImgBlurEffect from '../components/main/home/ImgBlurEffect';
import SponsorsCarrousel from '../components/main/home/SponsorsCarrousel';

export default function Home() {

  const images = [
    '/img/carrousel-main/carrousel-img1.png',
    '/img/carrousel-main/carrousel-img2.png',
    '/img/carrousel-main/carrousel-img3.png',
    '/img/carrousel-main/carrousel-img4.png',
  ];
  const texts = [
    'Build your custom PC brand-new',
    'Quality second-hand components available',
    'Sell us your old PC for a discount on a new one',
    'Explore our gallery of completed builds'
  ];

  const className = ['class1', 'class2', 'class3', 'class4'];
  const alt = ['Alt 1', 'Alt 2', 'Alt 3', 'Alt 4'];
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-800 flex flex-col items-center justify-center">
        <div className="w-11/12 flex items-start justify-center gap-10">
          <video src="/video/video-presentation.mp4" width="520" height="500" loop muted autoPlay></video>
          <div className="w-2/4 py-5 flex flex-col  text-white">
            <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
              <h1 className="mt-10 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                We built the
                <span className="text-orange-500"> best </span>
                <span className="text-orange-500">PCs</span>
              </h1>
              <div className="flex flex-col gap-10 items-center justify-start">
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

      <div className=" w-full h-min-[85vh] bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500 flex flex-col items-center justify-center gap-10 pt-10">
        <div className="w-11/12 text-custom-blue font-bold flex items-ceter gap-10 border-b-2 border-b-gray-800 pb-10">
          <div className="w-full flex flex-col gap-5">
            <div className="w-full flex items-center text-5xl gap-5">
              <FaSquare /><h2>WHAT WE OFFER</h2>
            </div>
            <p>At PC ALL, we provide different services to meet all your computer needs. Whether you want to build a new PC, sell your old one, or just check out our gallery of completed builds</p>
          </div>
        </div>
        <div className="w-11/12 flex items-center justify-center">
          <Carrousel images={images} texts={texts} className={className} alt={alt} />
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-bl from-black via-zinc-950 to-zinc-800 flex flex-col items-center justify-center  gap-10 py-10 pb-32">
        <div className="w-11/12 text-orange-600 font-bold flex items-ceter gap-10 border-b-2 border-b-gray-500 pb-10">
          <div className="w-full flex flex-col gap-5">
            <div className="w-full flex items-center text-5xl gap-5">
              <FaSquare /><h2>HOW WE WORK</h2>
            </div>
          </div>
        </div>
        <div className="w-10/12 grid grid-rows-4 gap-y-10 text-white">
          <div className="grid grid-cols-12 gap-x-14 items-center justify-end">
            <div className="col-span-7 flex flex-col">
              <p className="text-xl text-right">Fractal North Z790 13700K</p>
              <video src="/video/PCEdited1.mp4" className="w-full h-full object-cover" loop muted autoPlay></video>
            </div>
            <div className="col-span-5 flex flex-col items-center justify-around">
              <p>We carefully curate the finest components for your PC, offering a diverse selection of top-tier brands to cater to your preferences.</p>
              <div>
                <FancyVideoEffect videoSrc="/video/pcComponent.mp4" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-14 items-center">
            <p className="col-span-3">Our team of professionals with years of experience will build your PC, ensuring the best quality</p>
            <div className="col-span-4">
              <FancyVideoEffect videoSrc="/video/pcProfessionals.mp4" />
            </div>
            <div className="col-span-5 flex items-center justify-around">
              <FancyVideoEffect videoSrc="/video/pcProfessionals2.mp4" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-14 items-end justify-end">
            <div className="col-span-5 h-full">
              <p>But we don not stop there. We test your PC to ensure it is working perfectly before we deliver it to you</p>
              <FancyVideoEffect videoSrc="/video/pcTurnOn.mp4" />
            </div>
            <div className="col-span-7 h-full">
              <FancyVideoEffect videoSrc="/video/pcTests.mp4" />
              <p>Sound testing and air flow testing are done to ensure the best audio quality and cooling system</p>
            </div>
          </div>
          <div className="grid grid-col-1 items-end">

            <div className="w-full h-[45vh]">
              <p >We deliver your PC to your door, ready to use</p>
              <FancyVideoEffect videoSrc="/video/pcShow.mp4" />
            </div>
          </div>
        </div>
      </div>


      <div className=" w-full h-min-[85vh] bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500 flex flex-col items-center justify-center gap-10 pt-10 pb-20">
        <div className="w-11/12 text-custom-blue font-bold flex flex-col items-ceter gap-10 border-b-2 border-b-gray-800 pb-10">
          <div className="w-full flex flex-col gap-5">
            <div className="w-full flex items-center text-5xl gap-5">
              <FaSquare /><h2>Our Sponsors</h2>
            </div>
            <p>We are proud to have the support of the best brands in the industry, who provide us with the best components and equipment to build the best PCs</p>
          </div>
        </div>
        <div className="w-10/12 h-full flex items-start gap-10 justify-center">
          <div className="w-8/12 grid grid-rows-3 justify-center items-center gap-10">
            <div className="w-full h-fullrow-span-1 flex items-center justify-center gap-10">
              <ImgBlurEffect
                imgSrc="/img/sponsors/razerLogo.png" altText="razer image"
                companyName="RAZER" mainText="An amazing experience"
                text="Never tried such a nice place to build a pc"
              />
              <ImgBlurEffect
                imgSrc="/img/sponsors/amdLogo.png" altText="razer image"
                companyName="AMD" mainText="An amazing experience"
                text="Never tried such a nice place to build a pc"
              />
              <ImgBlurEffect
                imgSrc="/img/sponsors/corsairLogo.png" altText="razer image"
                companyName="CORSAIR" mainText="An amazing experience"
                text="Never tried such a nice place to build a pc"
              />
            </div>
            <div className="w-full h-full row-span-1 flex items-center justify-center gap-10">
              <ImgBlurEffect
                imgSrc="/img/sponsors/samsungLogo.png" altText="razer image"
                companyName="SAMSUNG" mainText="An amazing experience"
                text="Never tried such a nice place to build a pc"
              />
              <ImgBlurEffect
                imgSrc="/img/sponsors/msiLogo.png" altText="razer image"
                companyName="MSI" mainText="An amazing experience"
                text="Never tried such a nice place to build a pc"
              />
              <ImgBlurEffect
                imgSrc="/img/sponsors/nvidiaLogo.png" altText="razer image"
                companyName="NVIDIA" mainText="An amazing experience"
                text="Never tried such a nice place to build a pc"
              />
            </div>
            <div className="w-full h-full row-span-1 flex items-center justify-center gap-10">
              <ImgBlurEffect
                imgSrc="/img/sponsors/tempestLogo.png" altText="razer image"
                companyName="TEMPEST" mainText="An amazing experience"
                text="Never tried such a nice place to build a pc"
              />
              <ImgBlurEffect
                imgSrc="/img/sponsors/intelLogo.png" altText="razer image"
                companyName="INTEL" mainText="An amazing experience"
                text="Never tried such a nice place to build a pc"
              />
              <ImgBlurEffect
                imgSrc="/img/sponsors/hyperXLogo.png" altText="razer image"
                companyName="HYPER X" mainText="An amazing experience"
                text="Never tried such a nice place to build a pc"
              />
            </div>
          </div>
          <div className="w-4/12 h-full flex center justify-center bg-black">
            <SponsorsCarrousel imagesSrc={["/img/sponsors/add/intelAddBanner.png", "/img/sponsors/add/asusAddBanner.png", "/img/sponsors/add/corsairAddBanner.png"]} />
          </div>
        </div>
      </div>

    </>

  );
}