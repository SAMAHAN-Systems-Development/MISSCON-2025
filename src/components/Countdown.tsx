'use client';
import React from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import { FaSquareFull } from "react-icons/fa";

const CountdownTimer: React.FC = () => {
  const targetDate = new Date('2025-02-24T17:00:00');

  const Diamond = () => (
    <div className="flex flex-col items-center justify-start mt-4 space-y-3">
      <FaSquareFull className="rotate-45 text-[8px]" />
      <FaSquareFull className="rotate-45 text-[8px]" />
    </div>
  );

  const time = ({ days, hours, minutes, seconds }: CountdownRenderProps) => (
    //remove gray background
    <div className="flex flex-col items-center justify-center bg-gray text-white p-4 sm:p-8 rounded-md shadow-lg max-w-md mx-auto">
      <div className="flex flex-wrap justify-center items-start space-x-2 sm:space-x-4 text-3xl sm:text-6xl font-pirata_one font-bold">
       
        {/* Days */}
        <div className="text-center">
          <div>{String(days).padStart(2, '0')}</div>
          <div className="text-3xl sm:text-4xl font-normal">days</div>
        </div>

        <Diamond />

        {/* Hours */}
        <div className="text-center">
          <div>{String(hours).padStart(2, '0')}</div>
          <div className="text-3xl sm:text-4xl font-normal">hours</div>
        </div>

        <Diamond />

        {/* Minutes */}
        <div className="text-center">
          <div>{String(minutes).padStart(2, '0')}</div>
          <div className="text-3xl sm:text-4xl font-normal">mins</div>
        </div>

        <Diamond />

        {/* Seconds */}
        <div className="text-center">
          <div>{String(seconds).padStart(2, '0')}</div>
          <div className="text-3xl sm:text-4xl font-normal">secs</div>
        </div>
      </div>
    </div>
  );

  return <Countdown date={targetDate} renderer={time} />;
};

export default CountdownTimer;