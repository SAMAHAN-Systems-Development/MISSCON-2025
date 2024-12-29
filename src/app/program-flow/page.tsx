'use client';
import EventDayDetails from '@/components/EventDayDetails';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SpeakerDetailsMobile from '@/components/SpeakerDetailsMobile';
import day1Speakers from '@/data/speakersDetailsDay1.json';
import day2Speakers from '@/data/speakersDetailsDay2.json';

export default function ProgramFlow() {
  const bg = '/images/pagebg.png';
  const lines = '/images/BG.png';

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

  return (
    <div className="relative">
      <div
        className={`relative w-full h-full`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: '500%',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className={`absolute top-[410px] xl:top-[500px] left-0 w-full h-[600px] bg-cover bg-bottom bg-no-repeat z-0 opacity-20 rotate-180`}
          style={{
            backgroundImage: `url(${lines})`,
            backgroundSize: '175%',
          }}
        ></div>
        <div
          className={`absolute top-[1150px] xl:top-[2000px] left-0 w-full h-[600px] bg-cover bg-bottom bg-no-repeat z-0 opacity-20 rotate-180`}
          style={{
            backgroundImage: `url(${lines})`,
            backgroundSize: '175%',
          }}
        ></div>
        <div
          className={`absolute top-[2200px] xl:top-[3500px] left-0 w-full h-[600px] bg-cover bg-bottom bg-no-repeat z-0 opacity-20 rotate-180`}
          style={{
            backgroundImage: `url(${lines})`,
            backgroundSize: '175%',
          }}
        ></div>

        <div className="font-pirata_one text-6xl text-violet flex justify-center">
          <p className="mt-44 mb-10">Program Flow</p>
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
      </div>

      {/* for testing day 1 speakers only. does not pass data yet */}
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

          <div className="h-full w-full p-4 z-50 flex flex-col items-center">
            <p className="text-4xl text-violet font-pirata_one mb-12">
              day 0{speakersDayXOverlay}
            </p>
            {}
            {speakersDayXOverlay === 1 &&
              day1Speakers.map((speaker, index) => (
                <div key={index}>
                  <SpeakerDetailsMobile
                    id={speaker.id}
                    name={speaker.name}
                    imageUrl={speaker.imageUrl}
                    position={speaker.position}
                    bionote={speaker.bionote}
                  />
                  {index < day1Speakers.length - 1 && (
                    <div className="w-[337px] h-[2px] bg-violet my-12 rounded-sm"></div>
                  )}
                </div>
              ))}
            {speakersDayXOverlay === 2 &&
              day2Speakers.map((speaker, index) => (
                <div key={index}>
                  <SpeakerDetailsMobile
                    id={speaker.id}
                    name={speaker.name}
                    imageUrl={speaker.imageUrl}
                    position={speaker.position}
                    bionote={speaker.bionote}
                  />
                  {index < day2Speakers.length - 1 && (
                    <div className="w-[337px] h-[2px] bg-violet my-12 rounded-sm"></div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
