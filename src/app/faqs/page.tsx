'use client';
import AccordionComponent from '@/components/ui/AccordionFAQ';
import Image from 'next/image';
import React from 'react';

const FaqPage = () => {
  const bg = '/images/pagebg.png';
  return (
    <div
      className="relative w-full h-full min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '500%',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Foreground Image Section (Top) */}
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
        ></div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center mt-5 smd:mt-10 pb-20 lg:pb-32 px-4 sm:px-8">
        <h1 className="flex justify-center text-4xl sm:text-5xl lg:text-7xl leading-10 lg:leading-snug mb-6 font-pirata_one text-violet">
          Frequently Asked Questions
        </h1>
        <h2 className="text-3xl md:text-4xl p-8 font-pirata_one text-violet">
          General FAQs
        </h2>
        <AccordionComponent type="general" />
        <h2 className="text-3xl md:text-4xl pt-24 pb-8 font-pirata_one text-violet">
          Sponsorship FAQs
        </h2>
        <AccordionComponent type="sponsorship" />
      </div>
      {/* Foreground Image Section (Bottom) */}
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
};

export default FaqPage;
