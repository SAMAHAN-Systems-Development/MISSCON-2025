'use client';
import React from 'react';
import Image from 'next/image';
import day0Speakers from '@/data/speakersDetailsDay0.json';
import day1Speakers from '@/data/speakersDetailsDay1.json';
import day2Speakers from '@/data/speakersDetailsDay2.json';
import lines from '../../../public/images/BG.png';
import SpeakerDetailsCardMobile from '@/components/ui/SpeakerDetailsCardMobile';

const SpeakerDetailsOverlay: React.FC<{
  isSpeakerOverlayOpen: boolean;
  setSpeakerOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
  speakersDayXOverlay: number;
  setSpeakersDayXOverlay: React.Dispatch<React.SetStateAction<number>>;
  activeSpeakerId: string | null;
  setActiveSpeakerId: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({
  isSpeakerOverlayOpen,
  setSpeakerOverlayOpen,
  speakersDayXOverlay,
  setSpeakersDayXOverlay,
  activeSpeakerId,
  setActiveSpeakerId,
}) => {
  const bg = '/images/pagebg.png';
  const closeButtonMobile = '/images/X with BG.png';
  return (
    <div
      className={`fixed inset-0 z-50 duration-300 bg-local h-full w-full overflow-y-auto block lg:hidden overscroll-none ${
        isSpeakerOverlayOpen ? 'animate-slideRight' : 'animate-slideLeft hidden'
      }`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '500%',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="fixed top-8 right-4 w-20 h-20 hover:cursor-pointer z-50"
        onClick={() => {
          setSpeakerOverlayOpen(false);
          setSpeakersDayXOverlay(-1);
          setActiveSpeakerId(null);
        }}
      >
        <Image
          draggable={false}
          fill
          src={closeButtonMobile}
          className="absolute inset-0 object-cover object-center transition-opacity duration-300"
          alt="Close Button Mobile"
        />
      </div>

      <div className="relative w-full h-36 overflow-hidden -mt-8">
        <Image
          fill
          src={lines}
          className="absolute object-cover object-top rotate-180 scale-150 opacity-40 mt-[-58px] xl:mt-[-80px] 2xl:mt-[-28px]"
          alt={'foreground'}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'linear-gradient(to bottom, rgb(88,71,186) 1%, transparent)',
          }}
        ></div>
      </div>
      <div className="h-min w-full p-4 z-50 flex flex-col items-center mb-5">
        {}
        {speakersDayXOverlay !== -1 &&
          (() => {
            const activeSpeaker =
              day0Speakers.find((speaker) => speaker.id === activeSpeakerId) ||
              day1Speakers.find((speaker) => speaker.id === activeSpeakerId) ||
              day2Speakers.find((speaker) => speaker.id === activeSpeakerId);

            if (!activeSpeaker) {
              return <div>No speaker found.</div>;
            }

            return (
              <div>
                <SpeakerDetailsCardMobile
                  id={activeSpeaker.id}
                  name={activeSpeaker.name}
                  imageUrl={activeSpeaker.imageUrl}
                  position={activeSpeaker.position}
                  bionote={activeSpeaker.bionote}
                />
              </div>
            );
          })()}
      </div>
    </div>
  );
};

export default SpeakerDetailsOverlay;
