'use client';
import AccordionComponent from '@/components/ui/AccordionFAQ';
import Image from 'next/image';
import React from 'react';

const FaqPage = () => {
  const bgPlain = '/images/BG-Plain.png';
  const bg = '/images/BG.png';

  return (
    <div
      className="flex flex-col"
      style={{
        backgroundImage: `url(${bgPlain})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative w-full h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 overflow-hidden">
        <div
          className="absolute inset-0 opacity-75"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 13.47%, #6F61C0 117.47%)`,
            transform: 'rotate(-180deg)',
            zIndex: 1,
          }}
        ></div>
        <Image
          draggable={false}
          fill
          src={bg}
          className="object-cover object-top opacity-40 scale-150 origin-center rotate-180 -translate-y-7"
          alt="/"
        />
      </div>
      <div className="flex flex-col min-h-screen bg-gray-100 text-violet z-50">
        <div className="m-10 sm:mt-20">
          <h1 className="flex justify-center text-center text-5xl md:text-7xl mb-6 font-pirata_one">
            Frequently Asked Questions
          </h1>
          <h2 className="text-3xl md:text-4xl text-center font-pirata_one p-8">
            General FAQs
          </h2>
          <AccordionComponent type="general" />
          <h2 className="text-3xl md:text-4xl text-center font-pirata_one p-8">
            Sponsorship FAQs
          </h2>
          <AccordionComponent type="sponsorship" />
        </div>
      </div>
      <div className="relative w-full h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 overflow-hidden">
        <div
          className="absolute inset-0 opacity-75"
          style={{
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 13.47%, #C6CBD2 98.65%) `,
            zIndex: 1,
          }}
        ></div>
        <Image
          draggable={false}
          fill
          src={bg}
          className=" object-cover object-top opacity-40 scale-150 mt-7"
          alt="/"
        />
      </div>
    </div>
  );
};

export default FaqPage;
