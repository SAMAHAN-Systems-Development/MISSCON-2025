'use client';
import EventDayDetails from '@/components/EventDayDetails';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SpeakerDetailsMobile from '@/components/SpeakerDetailsMobile';
import day0Speakers from '@/data/speakersDetailsDay0.json';
import day1Speakers from '@/data/speakersDetailsDay1.json';
import day2Speakers from '@/data/speakersDetailsDay2.json';
import lines from '../../../public/images/BG.png';

export default function ProgramFlow() {
  const bg = '/images/pagebg.png';

  const [speakersDayXOverlay, setSpeakersDayXOverlay] = useState<number>(-1);
  const [isSpeakerOverlayOpen, setSpeakerOverlayOpen] = useState(false);
  const [activeSpeakerId, setActiveSpeakerId] = useState<string | null>(null);

  const [backgroundSize, setBackgroundSize] = useState('100%');

  useEffect(() => {
    if (speakersDayXOverlay !== -1) {
      setSpeakerOverlayOpen(true);
    } else {
      setSpeakerOverlayOpen(false);
    }
  }, [speakersDayXOverlay]);

  useEffect(() => {
    // Toggle scrolling on the body element
    if (isSpeakerOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup to prevent side effects
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSpeakerOverlayOpen]);

  const closeButtonMobile = '/images/X with BG.png';

  useEffect(() => {
    const updateBackgroundSize = () => {
      if (window.innerWidth < 680) {
        setBackgroundSize('2200%');
      } else if (window.innerWidth < 992) {
        setBackgroundSize('1200%');
      } else {
        setBackgroundSize('700%');
      }
    };

    // Set initial background size
    updateBackgroundSize();

    // Add resize event listener
    window.addEventListener('resize', updateBackgroundSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateBackgroundSize);
  }, []);

  return (
    <div className="relative">
      <div
        className={`relative w-full h-full`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: backgroundSize,
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Foreground Image Section */}
        <div className="relative w-full h-36 overflow-hidden">
          <Image
            fill
            src={'images/BG.png'}
            className="absolute object-cover object-top rotate-180 scale-150 opacity-40 mt-[-58px] xl:mt-[-80px] 2xl:mt-[-80px]"
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

        <div className="font-pirata_one text-4xl sm:text-5xl lg:text-7xl text-violet flex justify-center">
          <p className="mt-5 smd:mt-10 leading-10 lg:leading-snug mb-10 md:mb-16">
            Program Flow
          </p>
        </div>

        <div id="speakers">
          <EventDayDetails
            dayNumber="0"
            setSpeakersDayXOverlay={setSpeakersDayXOverlay}
            activeSpeakerId={activeSpeakerId}
            setActiveSpeakerId={setActiveSpeakerId}
          ></EventDayDetails>
          <EventDayDetails
            dayNumber="1"
            setSpeakersDayXOverlay={setSpeakersDayXOverlay}
            activeSpeakerId={activeSpeakerId}
            setActiveSpeakerId={setActiveSpeakerId}
          ></EventDayDetails>
          <EventDayDetails
            dayNumber="2"
            setSpeakersDayXOverlay={setSpeakersDayXOverlay}
            activeSpeakerId={activeSpeakerId}
            setActiveSpeakerId={setActiveSpeakerId}
          ></EventDayDetails>
        </div>

        <div className="relative w-full h-36 overflow-hidden">
          <Image
            alt={'foreground'}
            fill
            src={'images/BG.png'}
            className="absolute object-cover object-top opacity-40 scale-150 mt-20 2xl:mt-7"
          />
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                'linear-gradient(to top, rgb(198,203,210) 10%, transparent)',
            }}
          ></div>
        </div>
      </div>

      {isSpeakerOverlayOpen && (
        <div
          className={`fixed inset-0 z-50 duration-300 bg-local h-full w-full overflow-y-auto block lg:hidden overscroll-none ${
            isSpeakerOverlayOpen
              ? 'animate-slideRight'
              : 'animate-slideLeft hidden'
          }`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: '500%',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Close Button */}
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
                  day0Speakers.find(
                    (speaker) => speaker.id === activeSpeakerId
                  ) ||
                  day1Speakers.find(
                    (speaker) => speaker.id === activeSpeakerId
                  ) ||
                  day2Speakers.find(
                    (speaker) => speaker.id === activeSpeakerId
                  );

                if (!activeSpeaker) {
                  return <div>No speaker found.</div>;
                }

                return (
                  <div>
                    <SpeakerDetailsMobile
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
      )}
    </div>
  );
}
