'use client';
import EventDayDetails from '@/components/EventDayDetails';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function programFlow() {
  const bg = '/images/pagebg.png';
  const lines = '/images/BG.png';

  const [speakersDayXOverlay, setSpeakersDayXOverlay] = useState<number>(-1);
  const [isSpeakerOverlayOpen, setSpeakerOverlayOpen] = useState(false);

  useEffect(() => {
    if (speakersDayXOverlay !== -1) {
      setSpeakerOverlayOpen(true);
    } else {
      setSpeakerOverlayOpen(false);
    }
  }, [speakersDayXOverlay]);

  const closeButtonMobile = '/images/X with BG.png';

  return (
    <>
      <div
        className="relative h-full w-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: '500%',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {speakersDayXOverlay == 1 && (
          <div
            className={`fixed inset-0 z-50 duration-300 ${
              isSpeakerOverlayOpen
                ? 'animate-slideDown'
                : 'animate-slideUp hidden'
            }`}
            style={{
              backgroundImage: `url(${bg})`, // Keep the background image
              backgroundSize: '500%',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Overlay Background */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => {
                setSpeakerOverlayOpen(false);
                setSpeakersDayXOverlay(-1);
              }}
            ></div>

            {/* Close Button */}
            <div
              className="absolute top-8 right-4 w-20 h-20 hover:cursor-pointer z-50"
              onClick={() => {
                setSpeakerOverlayOpen(false);
                setSpeakersDayXOverlay(-1);
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

            {/* Modal Content */}
            <div className="relative h-full w-full overflow-y-auto mx-auto p-4">
              {/* Example Content */}
              {[...Array(10)].map((_, index) => (
                <div key={index} className="mt-10 h-96">
                  <p className="font-pirata_one text-violet text-4xl text-center mb-4">
                    day 0{index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>clicked speaker day: {speakersDayXOverlay}</div>
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
        ></EventDayDetails>
        <div id="speakers">
          <EventDayDetails
            dayNumber="1"
            setSpeakersDayXOverlay={setSpeakersDayXOverlay}
          ></EventDayDetails>
        </div>
        <EventDayDetails
          dayNumber="2"
          setSpeakersDayXOverlay={setSpeakersDayXOverlay}
        ></EventDayDetails>
      </div>
    </>
  );
}
