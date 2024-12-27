'use client';
import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { BiSolidRightArrow } from 'react-icons/bi';
import Image from 'next/image';
import locationData from '@/data/locationsFAQ.json';
import faqData from '@/data/questionFAQ.json';

const AccordionComponent = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleAccordionClick = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="py-2 px-4 flex flex-col items-center"
    >
      {faqData.generalFAQs.map((faq, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={`relative flex items-center w-full min-h-12 md:min-h-14 lg:min-h-16 px-4 py-3 text-left cursor-pointer text-dark-violet transition-colors duration-300 hover:text-white hover:bg-gradient-to-r hover:from-white hover:via-light-violet hover:to-white ${
                openItem === `item-${index}`
                  ? 'bg-gradient-to-r from-white via-light-violet to-white text-white'
                  : ''
              }`}
              onClick={() => handleAccordionClick(`item-${index}`)}
            >
              {/* Left spacer */}
              <span className="flex-1"></span>

              {/* Centered question */}
              <span className="text-base sm:text-lg 2xl:text-2xl text-center whitespace-normal max-w-[calc(100%-4rem)] sm:max-w-[calc(100%-5rem)] md:max-w-[calc(100%-6rem)] lg:max-w-[calc(100%-8rem)]">
                {faq.question}
              </span>

              {/* Right arrow */}
              <span className="flex-1 flex justify-center pl-2 pr-4">
                <BiSolidRightArrow
                  className={`transform transition-transform duration-300 ${
                    openItem === `item-${index}` ? 'rotate-90' : ''
                  }`}
                />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>

          {/* Accordion Content */}
          <Accordion.Content
            className={`pt-8 pb-6 overflow-hidden duration-300 ${
              openItem === `item-${index}`
                ? 'max-h-screen animate-slideDown'
                : 'max-h-0 animate-slideUp'
            }`}
          >
            {faq.answer === faqData.generalFAQs[1].answer ? (
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center px-4 gap-x-10">
                <p className="text-dark-violet text-center">{faq.answer}</p>
                {locationData.map((location, idx) => (
                  <div
                    key={idx}
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
            ) : (
              <div>
                <p className="text-dark-violet text-center text-xs lg:text-base">
                  {faq.answer}
                </p>
              </div>
            )}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionComponent;
