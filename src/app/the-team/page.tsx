'use client';
import Image from 'next/image';
import bg from '../../../public/images/BG.png';
import BackgroundImage from '../../../public/images/the-team-bg.png';
import Team from '@/components/section/TeamSection';

export default function HouseRules() {
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

      {/* Content */}
      <div className="relative z-10">
        <Team />
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
