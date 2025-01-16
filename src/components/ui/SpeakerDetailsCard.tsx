'use client';
import React from 'react';
import Image from 'next/image';
import { Speaker } from '@/types/Speaker';
import Link from 'next/link';

const SpeakerDetailsCard: React.FC<{
  speakersData: Speaker[];
  activeSpeakerId: string | null;
  setActiveSpeakerId: React.Dispatch<React.SetStateAction<string | null>>;
  speakerDetailsCardVisibility: boolean;
}> = ({
  speakersData,
  activeSpeakerId,
  setActiveSpeakerId,
  speakerDetailsCardVisibility,
}) => {
  const bg = '/images/pagebg.png';
  const closeButtonMobile = '/images/X with BG.png';
  const day = speakersData.find(
    (speaker) => speaker.id === activeSpeakerId
  )?.day;
  return (
    <div
      className={`hidden xsm:block relative shadow-lg items-center w-[300px] sm:w-[500px] lg:w-[700px] xl:w-[900px] h-min bg-white rounded-xl ${speakerDetailsCardVisibility ? 'opacity-100 p-5 sm:p-7 lg:p-9 xl:p-14 transition-opacity duration-300' : 'opacity-0'}`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '500%',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
      id={`speakerDetailsCard${day}`}
    >
      <div
        className="absolute inset-0 opacity-10 rounded-xl "
        style={{
          background:
            'linear-gradient(to right, rgb(88,71,186) 10%, transparent, rgb(88,71,186) 90%)',
        }}
      ></div>
      <div className="relative h-12 sm:h-14 lg:h-16 xl:h-20 w-12 sm:w-14 lg:w-16 xl:w-20 ml-auto xl:mb-7">
        <Link
          className="w-full h-full hover:cursor-pointer z-50"
          onClick={() => {
            setActiveSpeakerId(null);
          }}
          href={`/program-flow/#day${day}`}
        >
          <Image
            draggable={false}
            fill
            src={closeButtonMobile}
            className="absolute inset-0 object-cover object-center transition-opacity duration-300"
            alt="Close Button Mobile"
          />
        </Link>
      </div>
      {speakersData
        .filter((speaker) => speaker.id === activeSpeakerId)
        .map((speaker) => (
          <div
            key={speaker.id}
            className="flex flex-col xl:flex-row justify-center items-center gap-y-3 sm:gap-y-5 lg:gap-y-10 xl:gap-x-14 "
          >
            <div
              className={`relative flex justify-center items-center rounded-full w-min h-min p-[4px] sm:p-[5px] lg:p-[6px] xl:p-[7px] bg-gradient-to-b from-red to-violet`}
            >
              <div className={`relative w-min h-min rounded-full`}>
                <div
                  className={`relative w-24 sm:w-32 lg:w-44 xl:w-60 h-24 sm:h-32 lg:h-44 xl:h-60 overflow-hidden rounded-full`}
                >
                  <Image
                    draggable={false}
                    fill
                    src={speaker.imageUrl}
                    className={`rounded-full object-cover transition-colors`}
                    alt="/"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col text-dark-violet sm:gap-y-0 lg:gap-y-1 xl:gap-y-2 h-min z-40">
              <p className="font-gill_sans font-medium text-lg sm:text-2xl lg:text-3xl xl:text-4xl text-center xl:text-left">
                {speaker.name}
              </p>
              <div className="font-medium text-sm sm:text-md lg:text-lg xl:text-xl font-gill_sans text-center xl:text-left">
                {speaker.position.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
              <div className="font-gill_sans text-sm lg:text-base xl:text-lg flex flex-col gap-y-4 text-justify mt-5">
                {speaker.bionote.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SpeakerDetailsCard;
