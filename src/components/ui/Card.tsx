import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  name: string;
  position: string;
  event: string;
  type?: string;
}

export default function Card({
  imageUrl,
  name,
  position,
  event,
  type,
}: CardProps) {
  return (
    <>
      <div className="flex flex-col items-center w-min h-min hover:scale-105 transition-all duration-300">
        <div
          className={`flex justify-center items-center ${type === 'developer' ? 'rounded-[10px]' : 'rounded-[7px]'} xsm:rounded-[10px] lg:rounded-xl  xl:rounded-2xl ${type === 'developer' ? 'p-[5px]' : 'p-1'} xsm:p-[5px] smd:p-[6px] lg:p-[7px] xl:p-2 w-min h-min bg-gradient-to-b from-red to-violet`}
        >
          <div
            className={`relative ${type === 'developer' ? 'w-[130px]' : 'w-24'} xsm:w-[130px] smd:w-[160px] lg:w-48 xl:w-64 ${type === 'developer' ? 'h-40' : 'h-[120px]'} xsm:h-40 smd:h-48 lg:h-60 xl:h-[306px] ${type === 'developer' ? 'rounded-[8px]' : 'rounded-[5px]'} xsm:rounded-[8px] xl:rounded-[10px] overflow-hidden`}
          >
            <Image
              draggable={false}
              fill
              src={imageUrl}
              className="rounded-card object-cover object-center"
              alt="/"
            />
          </div>
        </div>

        <div
          className={`font-gill_sans text-dark-violet ${type === 'developer' ? 'w-[130px]' : 'w-24'} xsm:w-[130px] smd:w-[160px] lg:w-48 xl:w-64 mt-2`}
        >
          <p
            className={`${type === 'developer' ? 'text-sm' : 'text-[10px]'} xsm:text-sm smd:text-lg lg:text-xl xl:text-2xl font-bold leading-tight smd:leading-6 xl:leading-8 xl:mt-1`}
          >
            {name}
          </p>
          <p
            className={`${type === 'developer' ? 'text-xs' : 'text-[10px]'}  xsm:text-xs smd:text-base xl:text-lg leading-tight smd:leading-6 mt-1 xl:mt-0`}
          >
            {position}
          </p>
          <p
            className={`${type === 'developer' ? 'text-xs' : 'text-[10px]'} xsm:text-xs smd:text-base xl:text-lg italic`}
          >
            {event}
          </p>
        </div>
      </div>
    </>
  );
}
