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
      className="py-2 px-4 flex justify-center 2xl:w-[900px] "
    >
      <Accordion.Item
        value="item-1"
        className={`flex flex-col items-center justify-center w-80  lg:w-[868px] bg-violet rounded-[4px] lg:rounded-md
        ${
          isAccordionOpen
            ? 'text-white bg-gradient-to-b from-violet to-white'
            : ''
        }`}
      >
        <Accordion.Header className="w-full">
          <Accordion.Trigger
            className="relative flex items-center justify-center w-full h-7 lg:h-14 p-2 py-0 sm:py-2 text-left cursor-pointer text-white transition-colors duration-300 lg:gap-2 gap-1"
            onClick={handleAccordionClick}
          >
            <div className="font-gill_sans text-[10px] lg:text-2xl lg:max-w-2xl mb-[-3px] lg:mb-[-7px]">
              SEE PROGRAM
            </div>
            <ImArrowRight
              className={`transform transition-transform duration-300 scale-50 lg:scale-100  ${
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
