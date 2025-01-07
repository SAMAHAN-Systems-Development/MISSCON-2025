'use client';

import React from 'react';
import Image from 'next/image';
import bg from '../../../public/images/BG.png';
import BackgroundImage from '../../../public/images/the-team-bg.png';
import Card from '@/components/ui/Card';

export default function MeetTheDevelopers() {
  const developers = [
    {
      imageUrl: '/images/devs/1.jpg',
      name: 'Martina Angeles',
      position: 'Project Manager',
      event: 'MISSCON 2025',
    },
    {
      imageUrl: '/images/devs/3.jpg',
      name: 'John Michael Rivera',
      position: 'UI/UX Design Head',
      event: 'MISSCON 2025',
    },
    {
      imageUrl: '/images/devs/2.jpg',
      name: 'John Kyle Lampa',
      position: 'Front End Head',
      event: 'MISSCON 2025',
    },
    {
      imageUrl: '/images/devs/4.jpg',
      name: 'Sarah Haw',
      position: 'UI/UX Designer',
      event: 'MISSCON 2025',
    },
    {
      imageUrl: '/images/devs/5.jpg',
      name: 'Arabella Mejorada',
      position: 'Front End Developer',
      event: 'MISSCON 2025',
    },
    {
      imageUrl: '/images/devs/6.jpg',
      name: 'Niña Paraiso',
      position: 'Front End Developer',
      event: 'MISSCON 2025',
    },
    {
      imageUrl: '/images/devs/7.jpg',
      name: 'Mae Espera',
      position: 'Front End Developer',
      event: 'MISSCON 2025',
    },
    {
      imageUrl: '/images/devs/8.jpg',
      name: 'Jiyo Valmoria',
      position: 'QA & Back End Developer',
      event: 'MISSCON 2025',
    },
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
        className="text-4xl sm:text-5xl lg:text-7xl text-center mt-5 smd:mt-10 mb-6 font-pirata_one leading-10 lg:leading-snug relative z-10"
        style={{
          background: 'linear-gradient(to bottom, #DE1063, #5847BA)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Meet the Developers
      </div>

      {/* Body Text */}
      <div className="text-center text-dark-violet font-gill_sans font-light text-sm sm:text-base lg:text-lg xl:text-xl mx-6 md:mx-12 lg:mx-20 mb-5 relative z-10">
        <p className="font-semibold">
          Made possible by SAMAHAN Systems Development
        </p>
        <p className="mt-2">
          SAMAHAN Systems Development is dedicated to creating innovative
          solutions that empower the Ateneo community.
        </p>
        <p className="inline-block mt-2">
          Follow us on{' '}
          <a
            href="https://www.facebook.com/SAMAHANSysDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet font-medium hover:underline hover:text-dark-violet inline-block"
          >
            Facebook
          </a>{' '}
          for more.
        </p>
      </div>

      {/* Cards Layout */}
      <div className="relative z-10 py-6 px-8 md:py-16 md:px-28 lg:py-20 lg:px-56">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-10 md:gap-x-16 lg:gap-y-16 lg:gap-x-24 justify-items-center">
          {developers.map((dev, index) => (
            <Card
              key={index}
              imageUrl={dev.imageUrl}
              name={dev.name}
              position={dev.position}
              event={dev.event}
              type="developer"
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
              'linear-gradient(to top, rgb(198,203,210) 10%, transparent)',
          }}
        ></div>
      </div>
    </div>
  );
}
