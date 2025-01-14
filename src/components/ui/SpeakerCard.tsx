'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type SpeakerProps = {
  day: number;
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  state: 'normal' | 'active' | 'inactive';
  onClick: (id: string, day: number) => void;
};

const SpeakerCard: React.FC<SpeakerProps> = ({
  id,
  day,
  name,
  position,
  imageUrl,
  state,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={`#speakerDetailsCard${day}`}
      className={`relative w-min flex flex-col items-center p-4 transition-transform duration-200 cursor-pointer `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(id, day)}
    >
      <div className="relative flex justify-center items-center w-36 lg:w-44 h-36 lg:h-44">
        <div
          className={`relative flex justify-center items-center rounded-full p-1 lg:p-[5px] w-min h-min bg-gradient-to-b from-red to-violet`}
        >
          <div
            className={`relative w-min h-min rounded-full ${
              isHovered ? 'border-[4px] lg:border-[5px] border-white' : ''
            }`}
          >
            <div
              className={`relative w-32 lg:w-40 h-32 lg:h-40 overflow-hidden rounded-full`}
            >
              <Image
                draggable={false}
                fill
                src={imageUrl}
                className={`rounded-full object-cover transition-colors`}
                alt="/"
              />
              <div
                className={`absolute inset-0 w-full h-full bg-dark-violet opacity-0 transition-opacity rounded-full ${
                  state === 'inactive' ? 'opacity-50' : ''
                } `}
              ></div>
            </div>
          </div>
          <div
            className={`absolute inset-0 w-full h-full bg-dark-violet opacity-0 transition-opacity rounded-full ${
              isHovered && (state === 'normal' || state === 'active')
                ? 'opacity-50'
                : 'hidden'
            }`}
          ></div>
          <div
            className={`absolute inset-0 opacity-0 transition-opacity rounded-full flex justify-center items-center text-white font-inandan text-xs smd:text-base lg:text-2xl ${
              isHovered ? 'opacity-100' : ''
            } ${state === 'active' ? 'hidden' : ''}`}
          >
            See More
          </div>
        </div>
      </div>

      <div className="text-dark-violet mt-4 lg:mt-6 flex flex-col gap-y-2 items-center">
        <p className="text-center font-gill_sans font-medium text-lg md:text-xl lg:text-2xl w-40 lg:w-64">
          {name}
        </p>
        <div className="text-base lg:text-lg text-center font-gill_sans">
          {position.split('\n').map((line, index) => (
            <div key={index} className="w-40 lg:w-64 italic">
              {line}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default SpeakerCard;
