'use client';
import React from 'react';
import Image from 'next/image';

const SpeakerDetailsMobile: React.FC<{
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  bionote: string;
}> = ({ id, name, position, imageUrl, bionote }) => {
  return (
    <div className={`z-50 shadow-md w-[337px] p-6 h-min bg-white rounded-lg`}>
      <div key={id} className="flex justify-center items-center gap-x-5 mb-5">
        <div
          className={`relative flex justify-center items-center rounded-full p-[2px] w-min h-min bg-gradient-to-b from-red to-violet`}
        >
          <div className={`relative w-min h-min rounded-full`}>
            <div
              className={`relative w-[70px] h-[70px] overflow-hidden rounded-full`}
            >
              <Image
                draggable={false}
                fill
                src={imageUrl}
                className={`rounded-full object-cover transition-colors`}
                alt="/"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col text-violet gap-y-1">
          <p className="font-inandan text-xl h-min">{name}</p>
          <div className="font-medium text-xs font-gill_sans h-min">
            {position.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-dark-violet font-gill_sans text-sm flex flex-col gap-y-4 text-justify">
        {bionote.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerDetailsMobile;
