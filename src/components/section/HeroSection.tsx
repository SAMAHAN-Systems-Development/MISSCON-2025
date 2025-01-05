'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import bg from '../../../public/images/BG.png';

const HeroSection = () => {
  const images = [
    '/images/header-photos/WB-1.jpg',
    '/images/header-photos/WB-2.jpg',
    '/images/header-photos/WB-3.jpg',
    '/images/header-photos/WB-4.jpg',
    '/images/header-photos/WB-5.jpg',
    '/images/header-photos/WB-6.jpg',
    '/images/header-photos/WB-7.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Photo sliders
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the image every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Background ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="opacity-80"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/90 to-violet/70"></div>

      {/* Foreground */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Image
          src="/images/WB-art-2-down.png"
          alt="Foreground Art"
          width={3000}
          height={300}
          className="object-cover"
        />
      </div>

      <div className="relative w-full h-36 overflow-hidden z-20 -top-14 md:hidden">
        <Image
          fill
          src={bg}
          className="absolute object-cover object-top rotate-180 scale-[1.7] opacity-20 mt-[-70px] xl:mt-[-80px] 2xl:mt-[-28px]"
          alt={'foreground'}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'linear-gradient(to bottom, rgb(88,71,186) 1%, transparent)',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center h-full mt-[-144px] md:mt-0">
        {/* Title */}
        <h1 className="absolute top-24 text-2xl sm:text-3xl md:text-4xl mx-9 font-pirata_one text-red">
          Official Website for Mindanao International Studies Society Convention
          2025
        </h1>

        {/* Logo */}
        <div className="flex items-center justify-center mx-7">
          <Image
            src="/images/MissconLogo.png"
            alt="MISSCON 2025 Logo"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
