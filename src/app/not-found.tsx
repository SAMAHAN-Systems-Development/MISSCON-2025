'use client';

import React from 'react';
import Image from 'next/image';
import MainButton from '@/components/ui/MainButton';

export default function ErrorPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={'images/the-team-bg.png'}
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      {/* Foreground Image Section */}
      <div className="relative w-full h-36 overflow-hidden">
        <Image
          fill
          src={'images/BG.png'}
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

      {/* Error Title */}
      <div
        className="text-7xl lg:text-9xl text-center mt-10 font-pirata_one leading-none relative z-10"
        style={{
          background: 'linear-gradient(to bottom, #DE1063, #5847BA)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        404
      </div>

      {/* Error Message */}
      <div className="text-center text-dark-violet font-gill_sans font-light text-lg sm:text-xl lg:text-2xl mx-6 md:mx-12 lg:mx-20 mt-6 relative z-10">
        <p>Oops... page not found</p>
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-10 lg:mt-14  relative z-10">
        <MainButton
          href="/"
          text="back to home"
          className="sm:text-sm lg:text-base sm:px-6 lg:px-3 sm:py-3 lg:py-2 sm:rounded-lg"
        />
      </div>

      {/* Bottom Foreground */}
      <div className="relative w-full h-36 mt-auto overflow-hidden">
        <Image
          draggable={false}
          fill
          src={'images/BG.png'}
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
