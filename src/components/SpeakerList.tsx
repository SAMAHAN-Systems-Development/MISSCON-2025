'use client';
import React, { useEffect, useState } from 'react';
import SpeakerCard from '@/components/ui/SpeakerCard';
import SpeakerDetailsCard from '@/components/ui/SpeakerDetailsCard';
import { Speaker } from '@/types/Speaker';
import Link from 'next/link';

const SpeakerList: React.FC<{
  speakersData: Speaker[];
  setSpeakersDayXOverlay: React.Dispatch<React.SetStateAction<number>>;
  activeSpeakerId: string | null;
  setActiveSpeakerId: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({
  speakersData,
  setSpeakersDayXOverlay,
  activeSpeakerId,
  setActiveSpeakerId,
}) => {
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

  const [speakerDetailsCardVisibility, setSpeakerDetailsCardVisibility] =
    useState(false);

  useEffect(() => {
    const activeSpeaker = speakersData.find(
      (speaker) => speaker.id === activeSpeakerId
    );
    if (activeSpeaker) {
      setSpeakerDetailsCardVisibility(true);
    } else {
      setSpeakerDetailsCardVisibility(false);
    }
  }, [activeSpeakerId, speakersData]);

  const evenNumberSpeakers = speakersData.length % 2 === 0;

  return (
    <div className="flex flex-col items-center space-y-8">
      <div
        className={`px-16 xsm:px-10 md:px-16 lg:px-10 justify-center gap-6 lg:gap-8 ${evenNumberSpeakers ? 'flex flex-wrap sm:grid sm:grid-cols-2 2xl:grid-cols-4' : 'flex flex-wrap'}`}
      >
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
              className={`${index === 2 ? 'flex justify-center' : ''}`}
            >
              <Link href="#speakerDetailsCard">
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
              </Link>
            </div>
          );
        })}
      </div>

      <SpeakerDetailsCard
        activeSpeakerId={activeSpeakerId}
        setActiveSpeakerId={setActiveSpeakerId}
        speakerDetailsCardVisibility={speakerDetailsCardVisibility}
        speakersData={speakersData}
      ></SpeakerDetailsCard>
    </div>
  );
};

export default SpeakerList;
