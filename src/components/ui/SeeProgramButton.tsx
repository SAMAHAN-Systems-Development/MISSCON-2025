'use client';
import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ImArrowRight } from 'react-icons/im';
import Image from 'next/image';

type AccordionComponentProps = {
  imageUrl: string;
};

const SeeProgramButton: React.FC<AccordionComponentProps> = ({ imageUrl }) => {
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
        className={`w-full flex flex-col items-center justify-center sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl bg-violet rounded-md
        ${
          isAccordionOpen
            ? 'text-white bg-gradient-to-b from-violet to-white'
            : ''
        }`}
      >
        <Accordion.Header className="w-full">
          <Accordion.Trigger
            className="relative flex items-center justify-center w-full h-10 sm:h-12 md:h-14 lg:h-16 p-2 py-0 sm:py-2 text-left cursor-pointer text-white transition-colors duration-300 gap-2 sm:gap-4"
            onClick={handleAccordionClick}
          >
            <span className="text-base sm:text-lg 2xl:text-2xl 2xl:max-w-2xl">
              SEE PROGRAM
            </span>
            <ImArrowRight
              className={`transform transition-transform duration-300 ${
                isAccordionOpen ? 'rotate-90' : ''
              }`}
            />
          </Accordion.Trigger>
        </Accordion.Header>

        {/* Accordion Content */}
        <Accordion.Content
          className={`py-4 overflow-hidden duration-300 ${
            isAccordionOpen ? 'animate-slideDown' : 'animate-slideUp'
          }`}
        >
          <div>
            <p className="px-8 pb-4 aspect-w-712 aspect-h-850">
              <Image
                src={imageUrl}
                alt="Program Flow"
                width={1000}
                height={1000}
                className="inset-0 w-full h-full  "
                unoptimized
              />
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default SeeProgramButton;
