'use client';
import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { BiSolidRightArrow } from 'react-icons/bi';
import Image from 'next/image';
import locationData from '@/data/locationsFAQ.json';

type AccordionComponentProps = {
  question: string;
  answer: string;
};

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  question,
  answer,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="py-2 px-4 flex justify-center"
    >
      <Accordion.Item
        value="item-1"
        className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl:"
      >
        <Accordion.Header>
          <Accordion.Trigger
            className={`relative flex items-center w-full h-12 md:h-14 lg:h-16 p-2 py-4 text-left cursor-pointer text-dark-violet transition-colors duration-300 hover:text-white hover:bg-gradient-to-r hover:from-white hover:via-light-violet hover:to-white ${
              isAccordionOpen
                ? 'bg-gradient-to-r from-white via-light-violet to-white text-white'
                : ''
            }`}
            onClick={handleAccordionClick}
          >
            {/* Centered span */}
            <span className="absolute left-0 right-0 text-center text-base sm:text-lg 2xl:text-2xl 2xl:max-w-2xl mx-auto">
              {question}
            </span>

            {/* Arrow icon */}
            <BiSolidRightArrow
              className={`absolute right-10 sm:right-20 md:right-36 transform transition-transform duration-300 ${
                isAccordionOpen ? 'rotate-90' : ''
              }`}
            />
          </Accordion.Trigger>
        </Accordion.Header>

        {/* Accordion Content */}
        <Accordion.Content
          className={`pt-8 pb-6 overflow-hidden duration-300 ${
            isAccordionOpen
              ? 'max-h-screen animate-slideDown'
              : 'max-h-0 animate-slideUp'
          }`}
        >
          {answer === 'location' ? (
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-center px-4 gap-x-10">
              {locationData.map((location, index) => (
                <div
                  key={index}
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
              {/* bottom */}
              <p
                className="
              text-dark-violet text-center text-xs lg:text-base"
              >
                {answer}
              </p>
            </div>
          )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default AccordionComponent;
