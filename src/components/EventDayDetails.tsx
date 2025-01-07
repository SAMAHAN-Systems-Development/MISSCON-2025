'use client';
import SpeakerList from '@/components/SpeakerList';
import SeeProgramButton from '@/components/ui/SeeProgramButton';
import { SpeakerData } from '@/components/SpeakerList';
import { useEffect, useState } from 'react';

interface EventDayDetailsProps {
  dayNumber: string;
  activeSpeakerId: number | null;
  setActiveSpeakerId: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function EventDayDetails({
  dayNumber,
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
    <div className={`relative flex flex-col items-center h-min mb-28`}>
      <div className="font-pirata_one text-violet">
        <p className="text-3xl md:text-4xl lg:text-5xl text-center mb-4 lg:mb-8">
          day 0{dayNumber}
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl text-center mb-2 md:mb-4">
          Program Flow
        </p>
      </div>
      <SeeProgramButton
        day={dayNumber}
        // date={`${dayNumber}`}
      ></SeeProgramButton>
      <div className="h-4"></div>
      {speakersData !== null ? (
        <SpeakerList
          speakersData={speakersData}
          activeSpeakerId={activeSpeakerId}
          setActiveSpeakerId={setActiveSpeakerId}
        ></SpeakerList>
      ) : (
        <></>
      )}
    </div>
  );
}
