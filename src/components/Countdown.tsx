'use client';
import React from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import { FaSquareFull } from "react-icons/fa";

const CountdownTimer: React.FC = () => {
  const targetDate = new Date('2025-02-24T17:00:00');

  const Diamond = () => (
    <div className="flex flex-col items-center justify-start mt-3 lg:mt-8 space-y-2 md:space-y-4 lg:space-y-6">
      <FaSquareFull className="rotate-45 text-[8px] sm:text-xs" />
      <FaSquareFull className="rotate-45 text-[8px] sm:text-xs" />
    </div>
  );

  const time = ({ days, hours, minutes, seconds }: CountdownRenderProps) => (
    <div className="flex flex-col items-center justify-center text-white p-4 sm:p-8 max-w-xl sm:max-w-2xl mx-auto">
      <div className="flex flex-wrap justify-center items-start space-x-2 sm:space-x-4 text-5xl md:text-6xl lg:text-[110px] font-pirata_one font-medium">
       
        {/* Days */}
        <div className="text-center">
          <div>{String(days).padStart(2, '0')}</div>
          <div className="text-3xl md:text-5xl lg:text-5xl font-normal">days</div>
        </div>

        <Diamond />

        {/* Hours */}
        <div className="text-center">
          <div>{String(hours).padStart(2, '0')}</div>
          <div className="text-3xl md:text-5xl lg:text-5xl font-normal">hours</div>
        </div>

        <Diamond />

        {/* Minutes */}
        <div className="text-center">
          <div>{String(minutes).padStart(2, '0')}</div>
          <div className="text-3xl md:text-5xl lg:text-5xl font-normal">mins</div>
        </div>

        <Diamond />

        {/* Seconds */}
        <div className="text-center">
          <div>{String(seconds).padStart(2, '0')}</div>
          <div className="text-3xl md:text-5xl lg:text-5xl font-normal">secs</div>
        </div>
      </div>
    </div>
  );

  return <Countdown date={targetDate} renderer={time} />;
};

export default CountdownTimer;