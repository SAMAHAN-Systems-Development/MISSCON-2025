import SpeakerList from '@/components/SpeakerList';
import SeeProgramButton from '@/components/ui/SeeProgramButton';
import { SpeakerData } from '@/components/SpeakerList';

interface EventDayDetailsProps {
  dayNumber: string;
}

export default async function EventDayDetails({
  dayNumber,
}: EventDayDetailsProps) {
  let speakersData: SpeakerData[] | null = null;

  if (dayNumber !== '0') {
    const data = await import(`@/data/speakersDetailsDay${dayNumber}.json`);
    speakersData = JSON.parse(JSON.stringify(data.default));
  }

  return (
    <div
      className={`relative flex flex-col items-center ${speakersData ? 'pb-96 lg:pb-20' : 'pb-52 lg:pb-[600px]'}  min-h-64 lg:min-h-[600px]`}
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
        <SpeakerList speakersData={speakersData}></SpeakerList>
      ) : (
        <></>
      )}
    </div>
  );
}
