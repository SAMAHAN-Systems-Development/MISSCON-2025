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
        <div className="flex justify-center items-center rounded-2xl p-2 w-min h-min bg-gradient-to-b from-red to-violet">
          <div className="relative w-64 h-[306px] rounded-[10px] overflow-hidden">
            <Image
              draggable={false}
              fill
              src={imageUrl}
              className="rounded-card object-cover object-center scale-150"
              alt="/"
            />
          </div>
        </div>

        <div className="font-gill_sans text-dark-violet w-64 mt-2">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-lg mt-[-2px]">{position}</p>
          <p className="text-lg italic mt-[-5px]">{event}</p>
        </div>
      </div>
    </>
  );
}
