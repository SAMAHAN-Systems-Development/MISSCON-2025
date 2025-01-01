'use client';
import SpeakerList from '@/components/SpeakerList';
import SeeProgramButton from '@/components/ui/SeeProgramButton';
import { SpeakerData } from '@/components/SpeakerList';
import { useEffect, useState } from 'react';

interface EventDayDetailsProps {
  dayNumber: string;
  setSpeakersDayXOverlay: React.Dispatch<React.SetStateAction<number>>;
  activeSpeakerId: number | null;
  setActiveSpeakerId: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function EventDayDetails({
  dayNumber,
  setSpeakersDayXOverlay,
  activeSpeakerId,
  setActiveSpeakerId,
}: EventDayDetailsProps) {
  const [speakersData, setSpeakersData] = useState<SpeakerData[] | null>(null);

  useEffect(() => {
    if (dayNumber !== '0') {
      import(`@/data/speakersDetailsDay${dayNumber}.json`).then((data) =>
        setSpeakersData(data.default)
      );
    }
  }, [dayNumber]);

  return (
    <div
      className={`relative flex flex-col items-center ${speakersData ? 'pb-40 md:pb-72 lg:pb-20' : 'pb-36 md:pb-[220px] lg:pb-[400px] xl:pb-[450px]'}  min-h-64 lg:min-h-[600px]`}
    >
      <div className="font-pirata_one text-violet">
        <p className="text-4xl lg:text-5xl text-center mb-4 lg:mb-8">
          day 0{dayNumber}
        </p>
        <p className="text-2xl lg:text-3xl text-center mb-2 lg:mb-4">
          Program Flow
        </p>
      </div>
      <SeeProgramButton
        imageUrl={`/images/ProgramFlowDay0.png`}
        // imageUrl={`/images/ProgramFlowDay${dayNumber}.png`}
      ></SeeProgramButton>
      <div className="h-4"></div>
      {speakersData !== null ? (
        <SpeakerList
          speakersData={speakersData}
          setSpeakersDayXOverlay={setSpeakersDayXOverlay}
          activeSpeakerId={activeSpeakerId}
          setActiveSpeakerId={setActiveSpeakerId}
        ></SpeakerList>
      ) : (
        <></>
      )}
    </div>
  );
}
