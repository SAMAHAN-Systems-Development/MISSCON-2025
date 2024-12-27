import EventDayDetails from '@/components/EventDayDetails';

export default function programFlow() {
  const bg = '/images/pagebg.png';
  const lines = '/images/BG.png';
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
        <div
          className={`absolute top-[410px] xl:top-96 left-0 w-full h-full bg-cover bg-bottom bg-no-repeat z-0 opacity-20 rotate-180`}
          style={{
            backgroundImage: `url(${lines})`,
            backgroundSize: '175%',
          }}
        ></div>
        <div
          className={`absolute top-[1150px] xl:top-[1800px] left-0 w-full h-full bg-cover bg-bottom bg-no-repeat z-0 opacity-20 rotate-180`}
          style={{
            backgroundImage: `url(${lines})`,
            backgroundSize: '175%',
          }}
        ></div>
        <div
          className={`absolute top-[2200px] xl:top-[3300px] left-0 w-full h-full bg-cover bg-bottom bg-no-repeat z-0 opacity-20 rotate-180`}
          style={{
            backgroundImage: `url(${lines})`,
            backgroundSize: '175%',
          }}
        ></div>

        <div className="font-pirata_one text-6xl text-violet flex justify-center">
          <p className="mt-44 mb-10">Program Flow</p>
        </div>
        <EventDayDetails dayNumber="0"></EventDayDetails>
        <div id="speakers">
          <EventDayDetails dayNumber="1"></EventDayDetails>
        </div>
        <EventDayDetails dayNumber="2"></EventDayDetails>
      </div>
    </>
  );
}
