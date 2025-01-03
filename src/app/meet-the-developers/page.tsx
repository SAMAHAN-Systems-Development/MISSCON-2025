'use client';

import React from 'react';
import Image from 'next/image';
import bg from '../../../public/images/BG.png';
import BackgroundImage from '../../../public/images/the-team-bg.png';
import Card from '@/components/ui/Card';

export default function MeetTheDevelopers() {
  const developers = [
    { imageUrl: '/images/devs/1.jpg', name: 'Martina Angeles', position: 'Project Manager', event: 'MISSCON 2025' },
    { imageUrl: '/images/devs/3.jpg', name: 'John Michael Rivera', position: 'UI/UX Design Head', event: 'MISSCON 2025' },
    { imageUrl: '/images/devs/2.jpg', name: 'John Kyle Lampa', position: 'Front End Head', event: 'MISSCON 2025' },
    { imageUrl: '/images/devs/4.jpg', name: 'Sarah Haw', position: 'UI/UX Designer', event: 'MISSCON 2025' },
    { imageUrl: '/images/devs/5.jpg', name: 'Arabella Mejorada', position: 'Front End Developer', event: 'MISSCON 2025' },
    { imageUrl: '/images/devs/6.jpg', name: 'Niña Paraiso', position: 'Front End Developer', event: 'MISSCON 2025' },
    { imageUrl: '/images/devs/7.jpg', name: 'Mae Espera', position: 'Front End Developer', event: 'MISSCON 2025' },
  ];

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      {/* Foreground Image Section */}
      <div className="relative w-full h-36 overflow-hidden">
        <Image
          fill
          src={bg}
          className="absolute object-cover object-top rotate-180 scale-150 opacity-40 mt-[-58px] xl:mt-[-80px] 2xl:mt-[-80px]"
          alt={'foreground'}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'linear-gradient(to bottom, rgb(88,71,186) 1%, transparent)',
          }}
        />
      </div>

      {/* Page Title */}
      <div
        className="text-4xl sm:text-5xl lg:text-7xl text-center mt-10 mb-4 md:mb-6 font-pirata_one leading-10 lg:leading-snug relative z-10"
        style={{
          background: 'linear-gradient(to bottom, #DE1063, #5847BA)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Meet the Developers
      </div>

      {/* Cards Layout */}
      <div className="relative z-10 py-6 px-8 md:py-16 md:px-28 lg:py-20 lg:px-56">
        {/* First Row: Single Card */}
        <div className="flex justify-center mb-14 md:mb-40 lg:mb-40">
            <Card
            imageUrl={developers[0].imageUrl}
            name={developers[0].name}
            position={developers[0].position}
            event={developers[0].event}
            />
        </div>

        {/* Remaining Cards: Grid Layout */}
        <div className="grid grid-cols-2 gap-y-10 md:gap-x-24 lg:gap-y-24 lg:gap-x-60 justify-items-center">
            {developers.slice(1).map((dev, index) => (
            <Card
                key={index}
                imageUrl={dev.imageUrl}
                name={dev.name}
                position={dev.position}
                event={dev.event}
            />
            ))}
        </div>
        </div>

      <div className="relative w-full h-36 overflow-hidden">
        <Image
          draggable={false}
          fill
          src={bg}
          className="absolute object-cover object-top opacity-40 scale-150 mt-20 xl:mt-20 2xl:mt-7"
          alt="/"
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              'linear-gradient(to top, rgb(256,256,256) 10%, transparent)',
          }}
        ></div>
      </div>
    </div>
  );
}