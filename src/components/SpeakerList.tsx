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
      <div className="flex flex-wrap justify-center gap-6">
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
        className={`z-10 shadow-md hidden lg:flex items-center w-[900px] px-10 h-[550px] bg-white rounded-xl transition-opacity duration-500 ${detailCardVisibility ? 'opacity-100' : 'opacity-0'}`}
      >
        {speakersData
          .filter((speaker) => speaker.id === activeSpeakerId)
          .map((speaker) => (
            <div
              key={speaker.id}
              className="flex justify-center items-center gap-x-14"
            >
              <div
                className={`relative flex justify-center items-center rounded-full p-[5px] w-min h-min bg-gradient-to-b from-red to-violet`}
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

              <div className="flex flex-col text-dark-violet gap-y-3 h-[450px] overflow-y-scroll">
                <p className="font-inandan text-4xl">{speaker.name}</p>
                <div className="font-medium text-xl font-gill_sans">
                  {speaker.position.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
                <div className="font-gill_sans text-lg flex flex-col gap-y-4 text-justify">
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
