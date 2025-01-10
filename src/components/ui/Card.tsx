import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  name: string;
  position: string;
  event: string;
}

export default function Card({ imageUrl, name, position, event }: CardProps) {
  return (
    <>
      <div className="flex flex-col items-center w-min h-min hover:scale-105 transition-all duration-300">
        <div
          className={`flex justify-center items-center rounded-xl lg:rounded-xl  xl:rounded-2xl p-[6px] lg:p-[7px] xl:p-2 w-min h-min bg-gradient-to-b from-red to-violet`}
        >
          <div
            className={`relative w-48 lg:w-48 xl:w-64 h-60 lg:h-60 xl:h-[306px] rounded-[8px] xl:rounded-[10px] overflow-hidden`}
          >
            <Image
              draggable={false}
              fill
              src={imageUrl}
              className="rounded-card object-cover object-center scale-110 -mt-3"
              alt="/"
            />
          </div>
        </div>

        <div className={`font-gill_sans text-dark-violet w-48 xl:w-64 mt-2`}>
          <p
            className={`text-lg lg:text-xl xl:text-2xl font-bold leading-tight xl:leading-8 xl:mt-1`}
          >
            {name}
          </p>
          <p className={`text-sm  xl:text-lg leading-tight mt-1 xl:mt-0`}>
            {position}
          </p>
          <p className={`text-sm xl:text-lg italic`}>{event}</p>
        </div>
      </div>
    </>
  );
}
