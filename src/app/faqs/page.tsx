'use client';
import AccordionComponent from '@/components/ui/AccordionFAQ';
import Image from 'next/image';
import React from 'react';
import BackgroundImage from '../../../public/images/House-Rules-bg-final.png';

const FaqPage = () => {
  return (
    <div className="relative w-full h-full min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          alt="background"
          fill
          className="object-cover sm:object-fill"
          unoptimized
        />
      </div>
      <div className="relative z-10 pt-48 pb-96 px-4 sm:px-8 ">
        <h1 className="flex justify-center text-center text-5xl md:text-7xl mb-6 font-pirata_one text-violet">
          Frequently Asked Questions
        </h1>
        <h2 className="text-3xl md:text-4xl text-center p-8 font-pirata_one text-violet">
          General FAQs
        </h2>
        <AccordionComponent type="general" />
        <h2 className="text-3xl md:text-4xl text-center p-8 font-pirata_one text-violet">
          Sponsorship FAQs
        </h2>
        <AccordionComponent type="sponsorship" />
      </div>
    </div>
  );
};

export default FaqPage;
