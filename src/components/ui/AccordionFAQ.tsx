'use client';
import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { BiSolidRightArrow } from 'react-icons/bi';

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
              className={`flex justify-between items-center w-full p-2 text-left cursor-pointer bg-white text-dark-violet transition-colors duration-300 hover:text-white hover:bg-gradient-to-r hover:from-white hover:via-light-violet hover:to-white ${isAccordionOpen ? 'bg-gradient-to-r from-white via-light-violet to-white text-white' : ''}`}
              onClick={handleAccordionClick}
            >
              <span className="ml-4 pr-2 flex-1 text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ">
                {question}
              </span>
              <BiSolidRightArrow
                className={`mr-4 transform transition-transform duration-300 ${isAccordionOpen ? 'rotate-90' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            className={`overflow-hidden transition-all duration-300
              ${isAccordionOpen ? 'max-h-screen py-4 animate-fadeIn' : 'max-h-0 py-0 opacity-0 animate-fadeOut'}`}
          >
            <div>
              <p className="px-4 text-dark-violet text-center text-xs sm:text-sm md:text-base lg:text-lg">
                {answer}
              </p>
            </div>
          </Accordion.Content>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default AccordionComponent;
