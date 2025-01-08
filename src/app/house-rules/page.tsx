'use client';
import RuleCards from '@/components/ui/RuleCards';
import Image from 'next/image';

export default function HouseRules() {
  return (
    <div className="relative w-full h-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={'images/house-rules-bg.png'}
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
          className="absolute object-cover object-top rotate-180 scale-150 opacity-40 mt-[-58px] xl:mt-[-80px]"
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
      <div className="relative z-10 flex flex-col text-center gap-y-10 sm:gap-y-14 lg:gap-y-20 justify-items-center mt-5 smd:mt-10 pb-10 2xl:pb-20 px-4 sm:px-8">
        <h1 className="font-pirata_one leading-tight text-4xl sm:text-5xl lg:text-7xl text-violet">
          House <br /> Rules
        </h1>
        <div className="px-4 sm:px-8 lg:px-20">
          <RuleCards />
        </div>
      </div>
      {/* Foreground Image Section */}
      <div className="relative w-full h-36 overflow-hidden">
        <Image
          alt={'foreground'}
          fill
          src={'images/BG.png'}
          className="absolute object-cover object-top opacity-40 scale-150 mt-20 2xl:mt-7"
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
