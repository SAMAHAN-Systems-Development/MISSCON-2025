'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type SpeakerProps = {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  state: 'normal' | 'active' | 'inactive';
  onClick: (id: number) => void;
};

const SpeakerCard: React.FC<SpeakerProps> = ({
  id,
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
      onClick={() => onClick(id)}
    >
      <div className="relative flex justify-center items-center w-44 h-44">
        <div
          className={`relative flex justify-center items-center rounded-full p-[5px] w-min h-min bg-gradient-to-b from-red to-violet $ v`}
        >
          <div
            className={`relative w-min h-min rounded-full ${
              isHovered ? 'border-[5px] border-white' : ''
            }`}
          >
            <div className={`relative w-40 h-40 overflow-hidden rounded-full`}>
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
            className={`absolute inset-0 opacity-0 transition-opacity rounded-full flex justify-center items-center text-white font-inandan text-2xl ${
              isHovered ? 'opacity-100' : ''
            } ${state === 'inactive' ? 'hidden' : ''}`}
          >
            See More
          </div>
        </div>
      </div>

      <div className="text-dark-violet mt-6 flex flex-col gap-y-2">
        <p className="text-center font-inandan text-4xl max-w-48">{name}</p>
        <p className="text-xl text-center font-gill_sans">{position}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
