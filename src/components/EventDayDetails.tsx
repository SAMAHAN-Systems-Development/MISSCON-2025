import SpeakerList from '@/components/SpeakerList';

interface EventDayDetailsProps {
  dayNumber: string;
}

export default async function EventDayDetails({
  dayNumber,
}: EventDayDetailsProps) {
  const data = await import(`@/data/speakersDetailsDay${dayNumber}.json`);
  const speakersData = JSON.parse(JSON.stringify(data.default));

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="font-pirata_one text-violet">
          <p className="text-5xl text-center mb-8">day 0{dayNumber}</p>
          <p className="text-3xl text-center">Program Flow</p>
        </div>
        <p className="text-3xl text-center">See Program Button</p>
        <SpeakerList speakersData={speakersData}></SpeakerList>
      </div>
    </>
  );
}
