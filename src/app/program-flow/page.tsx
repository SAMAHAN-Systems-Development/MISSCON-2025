'use client';
import EventDayDetails from '@/components/EventDayDetails';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import lines from '../../../public/images/BG.png';

export default function ProgramFlow() {
  const bg = '/images/pagebg.png';

  const [activeSpeakerId, setActiveSpeakerId] = useState<string | null>(null);

  const [backgroundSize, setBackgroundSize] = useState('100%'); // Default size

  useEffect(() => {
    const updateBackgroundSize = () => {
      if (window.innerWidth < 680) {
        setBackgroundSize('2200%');
      } else if (window.innerWidth < 992) {
        setBackgroundSize('1200%');
      } else {
        setBackgroundSize('700%');
      }
    };

    // Set initial background size
    updateBackgroundSize();

    // Add resize event listener
    window.addEventListener('resize', updateBackgroundSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateBackgroundSize);
  }, []);

  return (
    <div className="relative">
      <div
        className={`relative w-full h-full`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: backgroundSize,
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Foreground Image Section */}
        <div className="relative w-full h-36 overflow-hidden">
          <Image
            fill
            src={lines}
            className="absolute object-cover object-top rotate-180 scale-150 opacity-40 mt-[-58px] xl:mt-[-80px] 2xl:mt-[-28px]"
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

        <div className="font-pirata_one text-[42px] md:text-5xl lg:text-6xl text-violet flex justify-center">
          <p className="mt-10 mb-10 md:mb-16">Program Flow</p>
        </div>
        <EventDayDetails
          dayNumber="0"
          activeSpeakerId={activeSpeakerId}
          setActiveSpeakerId={setActiveSpeakerId}
        ></EventDayDetails>
        <div id="speakers">
          <EventDayDetails
            dayNumber="1"
            activeSpeakerId={activeSpeakerId}
            setActiveSpeakerId={setActiveSpeakerId}
          ></EventDayDetails>
        </div>
        <EventDayDetails
          dayNumber="2"
          activeSpeakerId={activeSpeakerId}
          setActiveSpeakerId={setActiveSpeakerId}
        ></EventDayDetails>
        <div className="relative w-full h-36 overflow-hidden">
          <Image
            alt={'foreground'}
            fill
            src={lines}
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
    </div>
  );
}
