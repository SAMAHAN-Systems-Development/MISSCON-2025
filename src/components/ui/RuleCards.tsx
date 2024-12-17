'use client';
import React from 'react';
import rulesData from '@/data/rules.json';


const RuleCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full max-w-6xl">
        {rulesData.map((rule, index) => (
          <div
            key={index}
            className="flex flex-col bg-gradient-light-violet items-center rounded-2xl p-6 shadow-xl max-w-lg h-[250px] mx-4"
          >
            <header className="text-white font-inandan text-3xl font-extrabold mb-4">
              {rule.heading}
            </header>
            <article className="text-white font-gill_sans font-medium text-lg overflow-auto">
              {rule.content}
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RuleCards;
