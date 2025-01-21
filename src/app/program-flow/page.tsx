'use client';
import EventDayDetails from '@/components/EventDayDetails';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SpeakerDetailsOverlay from '@/components/section/SpeakerDetailsOverlay';

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

  // Toggle scrolling on the body element
  useEffect(() => {
    if (isSpeakerOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSpeakerOverlayOpen]);

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
    <>
      <title>Program Flow</title>
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
            <EventDayDetails
              dayNumber="3"
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
          <SpeakerDetailsOverlay
            activeSpeakerId={activeSpeakerId}
            setActiveSpeakerId={setActiveSpeakerId}
            isSpeakerOverlayOpen={isSpeakerOverlayOpen}
            setSpeakerOverlayOpen={setSpeakerOverlayOpen}
            speakersDayXOverlay={speakersDayXOverlay}
            setSpeakersDayXOverlay={setSpeakersDayXOverlay}
          ></SpeakerDetailsOverlay>
        )}
      </div>
    </>
  );
}
