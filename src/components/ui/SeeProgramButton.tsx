'use client';

import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ImArrowRight } from 'react-icons/im';
import programFlowData from '@/data/programFlow.json';

type SeeProgramButtonProps = {
  day: string;
};

const SeeProgramButton: React.FC<SeeProgramButtonProps> = ({ day }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const programForDate = programFlowData.find((dayData) => dayData.day === day);

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="py-2 px-4 flex justify-center w-11/12 sm:w-10/12 2xl:w-[900px]"
    >
      <Accordion.Item
        value="item-1"
        className={`flex flex-col items-center justify-center w-full lg:w-[868px] bg-violet rounded-[4px] lg:rounded-md ${
          isAccordionOpen
            ? 'text-white bg-gradient-to-b from-violet to-white'
            : ''
        }`}
      >
        <Accordion.Header className="w-full">
          <Accordion.Trigger
            className="relative flex items-center justify-center w-full h-7 lg:h-14 p-2 py-0 sm:py-4 text-center cursor-pointer text-white transition-colors duration-300 lg:gap-2 gap-1 "
            onClick={handleAccordionClick}
          >
            <div className="font-gill_sans -mb-[4px] lg:-mb-[6px] xl:-mb-[8px] text-sm sm:text-lg lg:text-2xl lg:max-w-2xl">
              SEE PROGRAM
            </div>
            <ImArrowRight
              className={`transform transition-transform duration-300 scale-50 lg:scale-100 ${
                isAccordionOpen ? 'rotate-90' : ''
              }`}
            />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content
          className={`py-2 overflow-hidden duration-300 w-full ${
            isAccordionOpen ? 'animate-slideDown' : 'animate-slideUp'
          }`}
        >
          <div className="px-4 pb-2 sm:px-8 text-xs sm:text-base md:text-lg">
            {programForDate ? (
              <>
                <p className="text-center font-bold text-white mb-2">
                  [{programForDate.date}]
                </p>
                <table className="table-auto w-full border border-[#340198] border-spacing-0 border-collapse">
                  <tbody>
                    {programForDate.sections.map((section, sectionIndex) => (
                      <React.Fragment key={sectionIndex}>
                        {/* Section Title Row */}
                        <tr>
                          <td
                            className="text-center p-2 font-bold bg-[#6F61C0] border border-[#340198]"
                            colSpan={2}
                          >
                            {section.title}
                          </td>
                          <td className="text-center p-2 border bg-[#6F61C0] border-[#340198]">
                            Dress Code
                          </td>
                        </tr>
                        {/* Section Rows */}
                        {section.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="text-[#350099]">
                            <td className="text-center p-2 w-3/12 bg-[#B9AEFA] border border-[#340198]">
                              {row.time}
                            </td>
                            <td className="p-2 border bg-white border-[#340198]">
                              {row.details ? <b>{row.event}</b> : row.event}
                              {row.details && (
                                <div className="ml-4 mt-2">
                                  {/* Check if details is an object */}
                                  {typeof row.details === 'object' &&
                                  !Array.isArray(row.details) ? (
                                    <>
                                      {/* Display Speaker */}
                                      <strong>{row.details.speaker}</strong>
                                      <br />
                                      {/* If multiple positions */}
                                      {row.details.positions &&
                                      Array.isArray(row.details.positions) ? (
                                        row.details.positions.length > 0 ? (
                                          row.details.positions.map(
                                            (position, positionIndex) => (
                                              <div key={positionIndex}>
                                                {position.position ? (
                                                  <i>{position.position}</i>
                                                ) : null}{' '}
                                                <br />
                                                {position.organization
                                                  ? position.organization
                                                  : null}
                                              </div>
                                            )
                                          )
                                        ) : null
                                      ) : row.details.position ||
                                        row.details.organization ? (
                                        <>
                                          {row.details.position ? (
                                            <i>{row.details.position}</i>
                                          ) : null}{' '}
                                          <br />
                                          {row.details.organization
                                            ? row.details.organization
                                            : null}
                                        </>
                                      ) : null}
                                    </>
                                  ) : (
                                    /* Render details as a list if it's an array */
                                    <ul className="list-decimal ml-8">
                                      {Array.isArray(row.details) &&
                                        row.details.map(
                                          (detail, detailIndex) => (
                                            <li key={detailIndex}>{detail}</li>
                                          )
                                        )}
                                    </ul>
                                  )}
                                </div>
                              )}
                            </td>

                            <td className="text-center w-3/12 p-2 bg-[#B9AEFA]">
                              {row.dressCode}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                    <tr>
                      <td
                        className="text-center p-2 font-bold bg-[#6F61C0] border border-[#340198]"
                        colSpan={3}
                      >
                        End of Day {programForDate.day}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <p>No program data available for this date.</p>
            )}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default SeeProgramButton;
