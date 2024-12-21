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
        <div className="transition-all duration-300">
          <Accordion.Header>
            <Accordion.Trigger
              className={`flex justify-between items-center w-full h-8 md:h-10 p-2 text-left cursor-pointer text-dark-violet transition-colors duration-300 hover:text-white hover:bg-gradient-to-r hover:from-white hover:via-light-violet hover:to-white ${isAccordionOpen ? 'bg-gradient-to-r from-white via-light-violet to-white text-white' : ''}`}
              onClick={handleAccordionClick}
            >
              <span className="ml-10 pr-2 flex-1 text-center text-base sm:text-lg">
                {question}
              </span>
              <BiSolidRightArrow
                className={`mr-4 transform transition-transform duration-300 ${isAccordionOpen ? 'rotate-90' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            className={`overflow-hidden transition-all duration-300 ${isAccordionOpen ? 'max-h-screen py-4 animate-fadeIn' : 'max-h-0 py-0 opacity-0 animate-fadeOut'}`}
          >
            {answer === 'location' ? (
              <div className="flex flex-col sm:flex-row items-center sm:items-start px-4">
                {locationData.map((location, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Image
                      src={location.image}
                      alt={location.title}
                      width={100}
                      height={100}
                      className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-60 xl:h-60 object-cover"
                      unoptimized
                    />
                    <p className="py-4 text-dark-violet text-center text-xs lg:text-base">
                      {location.title}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p className="px-4 text-dark-violet text-center text-xs lg:text-base">
                  {answer}
                </p>
              </div>
            )}
          </Accordion.Content>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default AccordionComponent;
