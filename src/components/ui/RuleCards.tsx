'use client';
import React from 'react';
import rulesData from '@/data/rules.json';

const RuleCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-20 gap-x-10 w-max">
        {rulesData.map((rule, index) => (
          <div
            key={index}
            className="flex flex-col hover:bg-light-violet text-center bg-gradient-light-violet transition-all duration-200 items-center rounded-2xl py-5 px-4 shadow-xl w-[473px] h-[225px]"
          >
            <header className="text-white font-inandan text-3xl font-medium">
              {rule.heading}
            </header>
            <div className="flex flex-col justify-center h-full">
              <article className="text-white font-gill_sans font-base font-medium text-lg leading-6 overflow-auto">
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
