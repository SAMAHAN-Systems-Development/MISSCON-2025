'use client';
import React from 'react';
import teamData from '@/data/teams.json';
import Card from '@/components/ui/Card';

const Team = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen justify-items-center mt-5 smd:mt-10 pb-6 md:pb-16 px-8 md:px-14 lg:pb-20 lg:px-28">
      {teamData.category.map((section, index) => (
        <div
          key={index}
          className="mb-16 lg:mb-28 w-11/12 max-w-[1150px] flex flex-col items-center"
        >
          {/* Section Title */}
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl text-center mb-2 smd:mb-7 font-pirata_one leading-10 lg:leading-snug"
            style={{
              background: 'linear-gradient(to bottom, #DE1063, #5847BA)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {section.title}
          </h2>
          {/* Section Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-dark-violet font-gill_sans text-center mb-5 lg:mb-16">
            {section.description}
          </p>
          {/* Members*/}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-y-8 md:gap-y-10 lg:gap-y-12 xl:gap-y-14 w-[285px] 2xsm:w-[315px] xsm:w-[420px] smd:w-[480px] md:w-[520px] lg:w-[600px] xl:w-[800px]`}
          >
            {section.members.map((member, index) => (
              <div
                key={index}
                className={`${
                  section.members.length % 3 === 0 && index % 3 === 0
                    ? 'col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 flex justify-center'
                    : 'flex justify-center'
                }`}
              >
                <Card
                  imageUrl={`/images/team/${member.imageUrl}`}
                  name={member.name}
                  position={member.position}
                  event={member.event}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
