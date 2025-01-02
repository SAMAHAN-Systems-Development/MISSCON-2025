'use client';
import React from 'react';
import rulesData from '@/data/rules.json';

const RuleCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-14 gap-x-8 lg:gap-x-16 place-items-center">
        {rulesData.map((rule, index) => (
          <div
            key={index}
            className="flex flex-col hover:bg-light-violet text-center bg-gradient-light-violet transition-all duration-200 items-center rounded-2xl py-5 px-4 shadow-xl max-w-[600px] h-[225px] overflow-hidden"
          >
            <header className="text-white font-inandan text-3xl font-medium truncate w-full">
              {rule.heading}
            </header>
            <div className="flex flex-col justify-center h-full overflow-hidden">
              <article className="text-white font-gill_sans font-base font-medium text-base sm:text-lg leading-5 sm:leading-6 overflow-auto">
                {rule.content}
              </article>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RuleCards;
