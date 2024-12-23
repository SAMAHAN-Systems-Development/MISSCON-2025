'use client';
import React, { useState } from 'react';
import SpeakerCard from '@/components/ui/SpeakerCard';
import Image from 'next/image';

type SpeakerData = {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  credentials: string[];
};

const SpeakerList: React.FC<{ speakersData: SpeakerData[] }> = ({
  speakersData,
}) => {
  const [activeSpeakerId, setActiveSpeakerId] = useState<number | null>(null);

  const handleSpeakerClick = (id: number) => {
    setActiveSpeakerId((prev) => (prev === id ? null : id)); // Toggle active speaker
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-wrap justify-center gap-6">
        {speakersData.map((speaker) => {
          let state: 'normal' | 'active' | 'inactive' = 'normal';
          if (activeSpeakerId === speaker.id) {
            state = 'active';
          } else if (activeSpeakerId !== null) {
            state = 'inactive';
          }

          return (
            <SpeakerCard
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
        className={`w-[900px] p-10 h-min bg-white rounded-xl transition-opacity duration-500 ${activeSpeakerId ? 'opacity 100' : 'opacity-0'}`}
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

              <div className="flex flex-col text-dark-violet gap-y-3">
                <p className="font-inandan text-4xl">{speaker.name}</p>
                <p className="font-medium text-xl font-gill_sans">
                  {speaker.position}
                </p>
                <ul className="font-gill_sans list-disc list-inside text-lg">
                  {speaker.credentials.map((credential, index) => (
                    <li key={index}>{credential}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SpeakerList;
