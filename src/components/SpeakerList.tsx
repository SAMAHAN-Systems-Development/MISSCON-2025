'use client';
import React, { useEffect, useState } from 'react';
import SpeakerCard from '@/components/ui/SpeakerCard';
import Image from 'next/image';

export type SpeakerData = {
  day: number;
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  bionote: string;
};

const SpeakerList: React.FC<{
  speakersData: SpeakerData[];
  setSpeakersDayXOverlay: React.Dispatch<React.SetStateAction<number>>;
  activeSpeakerId: string | null;
  setActiveSpeakerId: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({
  speakersData,
  setSpeakersDayXOverlay,
  activeSpeakerId,
  setActiveSpeakerId,
}) => {
  const bg = '/images/pagebg.png';

  // Toggle active speaker
  const handleSpeakerClick = (id: string, day: number) => {
    const isBelowLg = window.innerWidth < 529;

    setActiveSpeakerId((prev) => (prev === id ? null : id));
    if (isBelowLg) {
      console.log('speakersData[0].day:', speakersData[0].day);
      setSpeakersDayXOverlay(day);
    } else {
      setSpeakersDayXOverlay(-1);
    }
  };

  const [detailCardVisibility, setDetailCardVisibility] = useState(false);

  useEffect(() => {
    // Dynamically set the class based on activeSpeakerId
    const activeSpeaker = speakersData.find(
      (speaker) => speaker.id === activeSpeakerId
    );
    if (activeSpeaker) {
      setDetailCardVisibility(true);
    } else {
      setDetailCardVisibility(false);
    }
  }, [activeSpeakerId, speakersData]);

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="px-16 xsm:px-10 flex flex-wrap justify-center gap-6 lg:gap-8">
        {speakersData.map((speaker, index) => {
          let state: 'normal' | 'active' | 'inactive' = 'normal';
          if (activeSpeakerId) {
            if (activeSpeakerId.startsWith(speaker.id.slice(0, 1))) {
              if (activeSpeakerId === speaker.id) {
                state = 'active';
              } else if (activeSpeakerId !== null) {
                state = 'inactive';
              }
            }
          }

          return (
            <div
              key={index}
              className={`${index === 2 ? 'col-span-1 xsm:col-span-2 smd:col-span-1 flex justify-center' : ''}`}
            >
              <SpeakerCard
                day={speaker.day}
                key={speaker.id}
                id={speaker.id}
                name={speaker.name}
                position={speaker.position}
                imageUrl={speaker.imageUrl}
                state={state}
                onClick={handleSpeakerClick}
              />
            </div>
          );
        })}
      </div>

      <div
        className={`hidden xsm:flex relative z-10 shadow-lg items-center w-[300px] sm:w-[500px] lg:w-[700px] xl:w-[900px] h-min bg-white rounded-xl transition-opacity duration-300 ${detailCardVisibility ? 'opacity-100 p-5 sm:p-7 lg:p-9 xl:p-14' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: '500%',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0 opacity-10 rounded-xl "
          style={{
            background:
              'linear-gradient(to right, rgb(88,71,186) 10%, transparent, rgb(88,71,186) 90%)',
          }}
        ></div>
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

              <div className="flex flex-col text-dark-violet sm:gap-y-0 lg:gap-y-1 xl:gap-y-2 h-min">
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
    </div>
  );
};

export default SpeakerList;
