'use client';
import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { BiSolidRightArrow } from 'react-icons/bi';
import Image from 'next/image';
import locationData from '@/data/locationsFAQ.json';
import faqData from '@/data/questionFAQ.json';

type FAQType = 'general' | 'sponsorship';

type AccordionComponentProps = {
  type: FAQType;
};

const AccordionComponent: React.FC<AccordionComponentProps> = ({ type }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setIsAccordionOpen(isAccordionOpen === index ? null : index);
  };

  const data =
    type === 'general' ? faqData.generalFAQs : faqData.sponsorshipFAQs;

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="py-2 px-4 flex flex-col items-center"
    >
      {data.map((faq, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={`relative grid items-center grid-cols-[1fr_4fr_1fr] w-full min-h-12 md:min-h-14 lg:min-h-16 px-4 py-3 text-left cursor-pointer text-dark-violet transition-colors duration-300 hover:text-white hover:bg-gradient-to-r hover:from-white/0 hover:via-light-violet hover:to-white/0 ${
                isAccordionOpen === index
                  ? 'bg-gradient-to-r from-white/0 via-light-violet to-white/0 text-white'
                  : ''
              }`}
              onClick={() => handleAccordionClick(index)}
            >
              <span></span>
              <span className="text-base sm:text-lg 2xl:text-2xl text-center whitespace-normal px-2">
                {faq.question}
              </span>
              <span className="flex justify-center">
                <BiSolidRightArrow
                  className={`transform transition-transform duration-300 ${
                    isAccordionOpen === index ? 'rotate-90' : ''
                  }`}
                />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            className={`pt-8 pb-6 overflow-hidden duration-300 ${
              isAccordionOpen === index
                ? 'max-h-screen animate-slideDown'
                : 'max-h-0 animate-slideUp'
            }`}
          >
            {type === 'general' && data.indexOf(faq) === 1 ? (
              <div className="flex flex-col items-center px-4 gap-y-6">
                {/* FAQ Answer */}
                <p className="text-dark-violet text-center text-xs lg:text-base px-4">
                  {faq.answer}
                </p>

                {/* Location Map */}
                <div className="flex flex-row flex-wrap gap-x-10 justify-center items-center">
                  {locationData.map((location, locIndex) => (
                    <div
                      key={locIndex}
                      className="flex flex-col items-center justify-center"
                    >
                      <Image
                        src={location.image}
                        alt={location.title}
                        width={100}
                        height={100}
                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64 object-cover"
                        unoptimized
                      />
                      <p className="py-4 text-dark-violet text-center text-xs lg:text-base font-bold w-24 sm:w-36 md:w-40 lg:w-44 xl:w-64 2xl:w-68 px-4">
                        {location.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="px-4 text-dark-violet text-center text-xs lg:text-base">
                {faq.answer}
              </p>
            )}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionComponent;
