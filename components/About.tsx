"use client";
import BgImage from "@/public/img/aboutImage.jpg";
import BgImage2 from "@/public/img/aboutImage2.jpg";
import BgImage3 from "@/public/img/aboutImage3.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [BgImage, BgImage2, BgImage3];

const About = () => {
  const [randomIndex, setRandomIndex] = useState<number>();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const index = Math.floor(Math.random() * 3);
    setRandomIndex(index);
  }, []);

  return (
    <div id="about" className="h-screen">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
      )}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw]" />
      {randomIndex !== undefined ? (
        <Image
          src={images[randomIndex]}
          alt="Hotel Photo"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          sizes="100vw"
          className="object-cover transition-opacity duration-500"
          priority
          onLoad={() => setImageLoaded(true)}
        />
      ) : (
        <></>
      )}
      <div className="absolute inset-0 bg-[#14274A] bg-opacity-50 z-10" />
      <div className="relative z-30 h-full flex flex-col justify-center items-center ">
        <div className="w-full max-w-6xl">
          <div className="md:pl-60">
            <p className="text-xl text-white">WELCOME TO</p>
            <h1 className="text-6xl font-bold text-white">Luxury</h1>
            <h2 className="text-3xl font-bold text-white">Hotels</h2>
            <p className="text-lg text-white">
              Book your Stay and enjoy Luxury
            </p>
            <p className="text-lg text-white">
              redefine at the most affordable rates.
            </p>
          </div>

          <div className="md:pl-60 mt-8">
            <button className="w-[268px] h-[78px] bg-[#E0B973] text-lg font-bold text-white rounded-2xl transition-transform duration-300 hover:scale-110">
              <Link href={"/rooms"}>BOOK NOW</Link>
            </button>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <p className="text-white">Scroll</p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
