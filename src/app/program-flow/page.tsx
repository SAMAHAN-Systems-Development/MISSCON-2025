'use client';
import EventDayDetails from '@/components/EventDayDetails';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import lines from '../../../public/images/BG.png';

export default function ProgramFlow() {
  const bg = '/images/pagebg.png';
  // const lines = '/images/BG.png';

  const [speakersDayXOverlay, setSpeakersDayXOverlay] = useState<number>(-1);
  const [isSpeakerOverlayOpen, setSpeakerOverlayOpen] = useState(false);
  const [activeSpeakerId, setActiveSpeakerId] = useState<number | null>(null);

  useEffect(() => {
    if (speakersDayXOverlay !== -1) {
      setSpeakerOverlayOpen(true);
    } else {
      setSpeakerOverlayOpen(false);
    }
  }, [speakersDayXOverlay]);

  useEffect(() => {
    console.log('overlay open?: ', isSpeakerOverlayOpen);
    console.log('speakersDayXOverlay: ', speakersDayXOverlay);
  }, [isSpeakerOverlayOpen, speakersDayXOverlay]);

  return (
    <div className="relative">
      <div
        className={`relative w-full h-full`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: '600%',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Foreground Image Section */}
        <div className="relative w-full h-36 overflow-hidden">
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

        <div className="font-pirata_one text-[42px] md:text-5xl lg:text-6xl text-violet flex justify-center">
          <p className="mt-10 mb-10 md:mb-16">Program Flow</p>
        </div>
        <EventDayDetails
          dayNumber="0"
          setSpeakersDayXOverlay={setSpeakersDayXOverlay}
          activeSpeakerId={activeSpeakerId}
          setActiveSpeakerId={setActiveSpeakerId}
        ></EventDayDetails>
        <div id="speakers">
          <EventDayDetails
            dayNumber="1"
            setSpeakersDayXOverlay={setSpeakersDayXOverlay}
            activeSpeakerId={activeSpeakerId}
            setActiveSpeakerId={setActiveSpeakerId}
          ></EventDayDetails>
        </div>
        <EventDayDetails
          dayNumber="2"
          setSpeakersDayXOverlay={setSpeakersDayXOverlay}
          activeSpeakerId={activeSpeakerId}
          setActiveSpeakerId={setActiveSpeakerId}
        ></EventDayDetails>
        <div className="relative w-full h-36 overflow-hidden">
          <Image
            alt={'foreground'}
            fill
            src={lines}
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
    </div>
  );
}
