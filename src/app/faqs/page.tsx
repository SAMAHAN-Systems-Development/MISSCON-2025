'use client';
import AccordionComponent from '@/components/ui/AccordionFAQ';
import Image from 'next/image';
import React from 'react';
import BackgroundImage from '../../../public/images/BG-Plain.png';
import bg from '../../../public/images/BG.png';

const FaqPage = () => {
  return (
    <div className="relative w-full h-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          alt="background"
          fill
          className=""
        />
      </div>
      {/* Foreground Image Section (Top) */}
      <div className="relative w-full h-36 overflow-hidden">
        <Image
          fill
          src={bg}
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
      {/* Content */}
      <div className="relative z-10 text-center py-20 lg:py-32 px-4 sm:px-8">
        <h1 className="flex justify-center text-5xl md:text-7xl mb-6 font-pirata_one text-violet">
          Frequently Asked Questions
        </h1>
        <h2 className="text-3xl md:text-4xl p-8 font-pirata_one text-violet">
          General FAQs
        </h2>
        <AccordionComponent type="general" />
        <h2 className="text-3xl md:text-4xl p-8 font-pirata_one text-violet">
          Sponsorship FAQs
        </h2>
        <AccordionComponent type="sponsorship" />
      </div>
      {/* Foreground Image Section (Bottom) */}
      <div className="relative w-full h-36 overflow-hidden">
        <Image
          alt={'foreground'}
          fill
          src={bg}
          className="absolute object-cover object-top opacity-40 scale-150 mt-20 2xl:mt-7"
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
};

export default FaqPage;
