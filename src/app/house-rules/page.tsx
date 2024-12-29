'use client';
import RuleCards from '@/components/ui/RuleCards';
import Image from 'next/image';
import BackgroundImage from '../../../public/images/House-Rules-bg-final.png';

export default function HouseRules() {
  return (
    <div className="relative w-full h-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          alt="background"
          fill
          className="object-cover sm:object-fill"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col text-center gap-y-10 sm:gap-y-14 lg:gap-y-20 justify-items-center pt-48 pb-96 px-4 sm:px-8">
        <h1 className="font-pirata_one leading-tight text-6xl lg:text-8xl text-violet">
          House <br /> Rules
        </h1>
        <div className="px-4 sm:px-8 lg:px-20">
          <RuleCards />
        </div>
      </div>
    </div>
  );
}
