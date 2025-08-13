'use client'

import { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';

interface Reading {
  citation: React.ReactElement;
  url: string;
}

interface MeetingData {
  date: string;
  topic: string;
  activities?: (string | React.ReactElement)[];
  readings?: Reading[];
  holiday?: boolean;
  discussionQuestions?: string;
}

export default function Meeting({ meeting }: { meeting: MeetingData }) {
  const meetingKey = `meeting-${meeting.date}-${meeting.topic.replace(/\s+/g, '-').toLowerCase()}`;
  const hasActivities = 'activities' in meeting && meeting.activities && meeting.activities.length > 0;
  const hasReadings = 'readings' in meeting && meeting.readings && meeting.readings.length > 0;
  const hasMoreDetails = hasActivities || hasReadings;
  const hasDiscussionQuestions = 'discussionQuestions' in meeting && meeting.discussionQuestions;
  const isHoliday = 'holiday' in meeting && meeting.holiday;

  // state variables:
  const [showDetails, setShowDetails] = useState(false);

  const getStoredState = useCallback(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem(meetingKey);
      if (savedState !== null) {
        return JSON.parse(savedState);
      }
    }
    return false;
  }, [meetingKey]);

  // Load state from localStorage on component mount
  useEffect(() => {
    setShowDetails(getStoredState());
  }, [getStoredState]);

  function toggleDetails() {
    const newState = !showDetails;
    setShowDetails(newState);
    localStorage.setItem(meetingKey, JSON.stringify(newState));
  }

  function renderActivities() {
    if (hasActivities) {
      return (
        <div className="mb-6">
            {hasActivities ? <strong className="text-gray-700">Slides / Activities</strong> : ``}
            <ul className="space-y-1">
                {'activities' in meeting && meeting.activities?.map((activity: string | React.ReactElement, index: number) => (
                <li key={index} className="mb-2">
                    {activity}
                </li>
                ))}
            </ul>
        </div>
      )
    }
    return ``;
  } 

  function renderReadings() {
    if (hasReadings) {
      return (
        <div className="mb-6">
            {hasReadings ? <strong className="text-gray-700">Required Readings</strong> : ``}
            <ol>
                {
                'readings' in meeting && meeting.readings?.map((reading: Reading, index: number) => {
                    return (
                    <li key={index} className="mb-2">
                        {reading.citation} {" "}
                        <a href={reading.url} target="_blank" rel="noopener noreferrer">
                            Link
                        </a>
                    </li>
                    )
                })
                }
            </ol>
        </div>
      )
    }
    return ``;
  }

  function renderDiscussionQuestions() {
    if (hasDiscussionQuestions) {
      return (
        <a href={meeting.discussionQuestions} target="_blank" rel="noopener noreferrer">Discussion Questions</a>
      )
    }
  } 

  function renderDetailsButton() {
    if (hasMoreDetails) {
      return (
            <button onClick={toggleDetails} className="text-black hover:text-sky-700 hover:bg-gray-100 flex justify-center items-center rounded-full w-[35px] h-[35px]">
                {showDetails ? 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 15l7-7 7 7" />
                    </svg>: 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                    </svg>
                }
            </button>
        )
    }
    return ``
  } 

  return (
    <div className={clsx("flex justify-between gap-4 border-b border-black pt-4 pb-2", {
      'bg-gray-100': isHoliday
    })}>
        <div className={clsx("flex gap-4", {
            'flex-col': showDetails,
            'md:flex-row': showDetails
        })}>
            <span className={clsx("w-[100px] flex-shrink-0 transition-all duration-300 ease-in-out", {
                'font-bold': true
            })}>{meeting.date}</span>
            <div className="w-full">
                <p><span className={clsx("transition-all duration-300 ease-in-out", {
                    'font-bold': showDetails,
                    'text-black': showDetails,
                    'uppercase': showDetails
                })}>{meeting.topic}</span></p>
                <div className={clsx("overflow-hidden transition-all duration-300 ease-in-out", {
                    'text-gray-100': isHoliday,
                    'max-h-0 opacity-0': !showDetails,
                    'max-h-[1000px] opacity-100': showDetails
                })}>
                    
                    {renderActivities()}
                    {renderReadings()}
                    {renderDiscussionQuestions()}
                </div>
            </div> 
        </div> 
        <div>
            {renderDetailsButton()}
        </div>
    </div>
  )
}