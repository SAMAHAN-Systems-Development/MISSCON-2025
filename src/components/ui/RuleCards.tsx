'use client';
import React from 'react';
import rulesData from '@/data/rules.json';

const RuleCards = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-8 lg:gap-x-16 2xl:gap-x-24">
        {rulesData.map((rule, index) => (
          <div
            key={index}
            className="flex flex-col hover:bg-light-violet text-center bg-gradient-light-violet transition-all duration-200 items-center rounded-2xl py-7 sm:py-5 lg:py-8 px-8 shadow-xl max-w-[520px] h-[200px] lg:h-[280px] overflow-hidden"
          >
            <header className="text-white font-inandan text-2xl lg:text-3xl font-medium truncate w-full">
              {rule.heading}
            </header>
            <div className="flex flex-col justify-center h-full overflow-hidden">
              <article className="text-white font-gill_sans font-base font-medium text-sm sm:text-base xl:text-lg leading-5 sm:leading-6 overflow-auto">
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
