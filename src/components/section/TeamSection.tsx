'use client';
import React from 'react';
import teamData from '@/data/teams.json';
import Card from '@/components/ui/Card';

const Team = () => {
  return (
    <div className="min-h-screen justify-items-center py-6 px-8 md:py-16 md:px-28 lg:py-20 lg:px-56">
      {teamData.category.map((section, index) => (
        <div key={index} className="mb-48 w-11/12">
          {/* Section Title */}
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl text-center mb-2 md:mb-6 font-pirata_one leading-10 lg:leading-snug"
            style={{
              background: 'linear-gradient(to bottom, #DE1063, #5847BA)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {section.title}
          </h2>

          {/* Section Description */}
          <p className="md:text-2xl lg:text-3xl text-xl text-dark-violet font-gill_sans text-center mb-36">
            {section.description}
          </p>
          {/* Members*/}
          <div
            className={`grid ${
              section.members.length % 3 === 0
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-14 md:gap-x-24 lg:gap-y-24 justify-items-center'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-x-8 gap-y-14 md:gap-x-24 lg:gap-y-24'
            }`}
          >
            {section.members.map((member, index) => (
              <div
                key={index}
                className={`${
                  section.members.length % 3 === 0 && index % 3 === 0
                    ? 'md:col-span-2 lg:col-span-2 flex justify-center'
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
