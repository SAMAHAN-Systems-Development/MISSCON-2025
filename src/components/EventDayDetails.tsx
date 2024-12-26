import SpeakerList from '@/components/SpeakerList';
import SeeProgramButton from '@/components/ui/SeeProgramButton';

interface EventDayDetailsProps {
  dayNumber: string;
}

export default async function EventDayDetails({
  dayNumber,
}: EventDayDetailsProps) {
  const data = await import(`@/data/speakersDetailsDay${dayNumber}.json`);
  const speakersData = JSON.parse(JSON.stringify(data.default));

  const bg = '/images/BG.png';

  return (
    <div className="relative flex flex-col justify-center items-center mb-20">
      {/* Background */}
      <div
        className="absolute top-56 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1] opacity-20 rotate-180"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: '175%', // Adjust the scale
        }}
      ></div>

      {/* Content */}
      <div className="font-pirata_one text-violet">
        <p className="text-5xl text-center mb-8">day 0{dayNumber}</p>
        <p className="text-3xl text-center mb-4">Program Flow</p>
      </div>
      <SeeProgramButton
        imageUrl={`/images/ProgramFlowDay${dayNumber}.png`}
      ></SeeProgramButton>
      <div className="h-4"></div>
      <SpeakerList speakersData={speakersData}></SpeakerList>
    </div>
  );
}
