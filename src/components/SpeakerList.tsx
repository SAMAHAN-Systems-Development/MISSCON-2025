'use client';
import React, { useEffect, useState } from 'react';
import SpeakerCard from '@/components/ui/SpeakerCard';
import Image from 'next/image';

export type SpeakerData = {
  day: number;
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  bionote: string;
};

const SpeakerList: React.FC<{
  speakersData: SpeakerData[];
  setSpeakersDayXOverlay: React.Dispatch<React.SetStateAction<number>>;
  activeSpeakerId: number | null;
  setActiveSpeakerId: React.Dispatch<React.SetStateAction<number | null>>;
}> = ({
  speakersData,
  setSpeakersDayXOverlay,
  activeSpeakerId,
  setActiveSpeakerId,
}) => {
  const bg = '/images/pagebg.png';

  // Toggle active speaker
  const handleSpeakerClick = (id: number, day: number) => {
    const isBelowLg = window.innerWidth < 992;

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
      <div className="grid grid-cols-1 xsm:grid-cols-2 smd:grid-cols-3 justify-center gap-6 lg:gap-20">
        {speakersData.map((speaker) => {
          let state: 'normal' | 'active' | 'inactive' = 'normal';
          if (activeSpeakerId) {
            if (
              activeSpeakerId
                .toString()
                .startsWith(speaker.id.toString().slice(0, 1))
            ) {
              if (activeSpeakerId === speaker.id) {
                state = 'active';
              } else if (activeSpeakerId !== null) {
                state = 'inactive';
              }
            }
          }

          return (
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
          );
        })}
      </div>

      <div
        className={`relative z-10 shadow-lg hidden lg:flex items-center lg:w-[700px] xl:w-[900px] h-min bg-white rounded-xl transition-opacity duration-300 ${detailCardVisibility ? 'opacity-100 lg:p-9 xl:p-14' : 'opacity-0'}`}
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
              className="flex flex-col xl:flex-row justify-center items-center xl:gap-x-14"
            >
              <div
                className={`relative flex justify-center items-center rounded-full w-min h-min p-[7px] bg-gradient-to-b from-red to-violet`}
              >
                <div className={`relative w-min h-min rounded-full`}>
                  <div
                    className={`relative w-60 h-60 overflow-hidden rounded-full`}
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

              <div className="flex flex-col text-dark-violet gap-y-3 h-min">
                <p className="font-gill_sans font-medium lg:text-3xl xl:text-4xl text-center xl:text-left">
                  {speaker.name}
                </p>
                <div className="font-medium lg:text-lg xl:text-xl font-gill_sans text-center xl:text-left">
                  {speaker.position.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
                <div className="font-gill_sans lg:text-md xl:text-lg flex flex-col gap-y-4 text-justify">
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
