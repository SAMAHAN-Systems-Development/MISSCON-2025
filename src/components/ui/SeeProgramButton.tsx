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
      className="py-2 px-4 flex justify-center w-11/12 sm:w-10/12 2xl:w-[1250px]"
    >
      <Accordion.Item
        value="item-1"
        className={`flex flex-col items-center justify-center w-full lg:w-[868px] 2xl:w-[1250px] bg-violet rounded-[4px] lg:rounded-md ${
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
                {programForDate.day === '1' && (
                  <div className="mb-4 text-center">
                    <p className="font-bold text-white">
                      Day 1 Theme: Reconnecting Mindanao International Studies
                    </p>
                    <p className="text-white">
                      The starting point of the conference is our positionality
                      as students and scholars of International Studies in
                      Mindanao. The morning panel seeks to acquaint participants
                      with the history, present situation, and prospects of
                      Mindanao IS/IR programs. From this positionality we are
                      called to decolonize our view of the world through
                      integration of the diverse and collective Mindanao
                      experience in our study of the international. Decolonizing
                      our positionality ultimately allows us to make a deeper
                      appreciation and more critical self-reflection of pressing
                      issues.
                    </p>
                  </div>
                )}
                {programForDate.day === '2' && (
                  <div className="mb-4 text-center">
                    <p className="font-bold text-white">
                      Day 2 Theme: Reconnecting with the Global Realities,
                      Uncertainties, and Frontiers
                    </p>
                    <p className="text-white">
                      From our Mindanao context, the conference will reconnect
                      us to contemporary global realities and invite us to
                      consider possible futures. The presentations will take us
                      to a deep dive of regional and global security trends and
                      uncertainties. We are called to take a closer look at the
                      consequences of the growing complexity of cyberspace to
                      gender, human rights, security, and politics, among
                      others. Rather than cower in this fast-changing world, we
                      are called to proactively engage with it. One such area of
                      engagement is diplomatic practice - a popular career goal
                      of IS/IR students.
                    </p>
                  </div>
                )}
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
                              <b>{row.event}</b>
                              {row.details && (
                                <div className="ml-4 mt-2">
                                  {Array.isArray(row.details)
                                    ? // Case 1: details is an array of strings
                                      row.details.map((item, index) => (
                                        <div key={index}>{item}</div>
                                      ))
                                    : 'speakers' in row.details
                                      ? // Case 2: details contains multiple speakers
                                        (
                                          row.details as {
                                            speakers: {
                                              name: string;
                                              position?: string;
                                              organization?: string;
                                            }[];
                                          }
                                        ).speakers.map((speaker, index) => (
                                          <div key={index} className="mb-4">
                                            <strong>{speaker.name}</strong>
                                            <br />
                                            {speaker.position && (
                                              <i>{speaker.position}</i>
                                            )}
                                            <br />
                                            {speaker.organization}
                                          </div>
                                        ))
                                      : 'speaker' in row.details
                                        ? // Case 3: details contains a single speaker
                                          (() => {
                                            const speakerDetails =
                                              row.details as {
                                                speaker: string;
                                                position?: string;
                                                organization?: string;
                                                positions?: {
                                                  position: string;
                                                  organization: string;
                                                }[];
                                              };
                                            return (
                                              <>
                                                <strong>
                                                  {speakerDetails.speaker}
                                                </strong>
                                                <br />
                                                {speakerDetails.positions &&
                                                speakerDetails.positions
                                                  .length > 0 ? (
                                                  speakerDetails.positions.map(
                                                    (pos, posIndex) => (
                                                      <div key={posIndex}>
                                                        {pos.position && (
                                                          <i>{pos.position}</i>
                                                        )}
                                                        <br />
                                                        {pos.organization}
                                                      </div>
                                                    )
                                                  )
                                                ) : (
                                                  <>
                                                    {speakerDetails.position && (
                                                      <i>
                                                        {
                                                          speakerDetails.position
                                                        }
                                                      </i>
                                                    )}
                                                    <br />
                                                    {
                                                      speakerDetails.organization
                                                    }
                                                  </>
                                                )}
                                              </>
                                            );
                                          })()
                                        : null}
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
