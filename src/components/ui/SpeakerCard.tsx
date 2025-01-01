'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type SpeakerProps = {
  day: number;
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  state: 'normal' | 'active' | 'inactive';
  onClick: (id: number, day: number) => void;
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
    <div
      className={`relative w-min flex flex-col items-center p-4 transition-transform duration-200 cursor-pointer `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(id, day)}
    >
      <div className="relative flex justify-center items-center w-20 lg:w-44 h-20 lg:h-44">
        <div
          className={`relative flex justify-center items-center rounded-full p-[3px] lg:p-[5px] w-min h-min bg-gradient-to-b from-red to-violet`}
        >
          <div
            className={`relative w-min h-min rounded-full ${
              isHovered ? 'border-[3px] lg:border-[5px] border-white' : ''
            }`}
          >
            <div
              className={`relative w-20 lg:w-40 h-20 lg:h-40 overflow-hidden rounded-full`}
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
            className={`absolute inset-0 opacity-0 transition-opacity rounded-full flex justify-center items-center text-white font-inandan text-[10px] lg:text-2xl ${
              isHovered ? 'opacity-100' : ''
            } ${state === 'inactive' ? 'hidden' : ''}`}
          >
            See More
          </div>
        </div>
      </div>

      <div className="text-dark-violet mt-3 lg:mt-6 flex flex-col gap-y-2">
        <p className="text-center font-inandan text-xl lg:text-4xl w-32 lg:w-64">
          {name}
        </p>
        <div className="text-xs lg:text-base text-center font-gill_sans">
          {position.split('\n').map((line, index) => (
            <div key={index} className="w-32 lg:w-64 italic">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
