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
  activities?: string[];
  readings?: Reading[];
  holiday?: boolean;
}

export default function Meeting({ meeting }: { meeting: MeetingData }) {
  // Create a unique key for this meeting based on its content
  const meetingKey = `meeting-${meeting.date}-${meeting.topic.replace(/\s+/g, '-').toLowerCase()}`;
  
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
    // Save to localStorage
    localStorage.setItem(meetingKey, JSON.stringify(newState));
  }

  const hasActivities = 'activities' in meeting && meeting.activities && meeting.activities.length > 0;
  const hasReadings = 'readings' in meeting && meeting.readings && meeting.readings.length > 0;
  const hasMoreDetails = hasActivities || hasReadings;
  const isHoliday = 'holiday' in meeting && meeting.holiday;

  return (
    <div className={clsx("flex gap-4 border-t border-black pt-4", {
      'bg-gray-50': isHoliday
    })}>
        <span className={clsx("w-[100px] flex-shrink-0 transition-all duration-300 ease-in-out", {
            'font-bold': showDetails
        })}>{meeting.date}</span>
        <div className="w-full">
            <p><span className={clsx("transition-all duration-300 ease-in-out", {
                'font-bold': showDetails
            })}>{meeting.topic}</span></p>
            <div className={clsx("overflow-hidden transition-all duration-300 ease-in-out", {
                'text-gray-100': isHoliday,
                'max-h-0 opacity-0': !showDetails,
                'max-h-[500px] opacity-100': showDetails
            })}>
                <div>
                {hasActivities ? <strong>Activities</strong> : ``}
                <ul className="space-y-1">
                    {'activities' in meeting && meeting.activities?.map((activity: string, index: number) => (
                    <li key={index}>
                        {activity}
                    </li>
                    ))}
                </ul>
                </div>
                
                <div>
                {hasReadings ? <strong>Readings</strong> : ``}
                <ul className="space-y-1 !pl-8 !list-none">
                    {
                    'readings' in meeting && meeting.readings?.map((reading: Reading, index: number) => {
                        return (
                        <li className="-indent-8 mb-4" key={index}>
                            {reading.citation} {" "}
                            <a href={reading.url} target="_blank" rel="noopener noreferrer">
                                Link
                            </a>
                        </li>
                        )
                    })
                    }
                </ul>
                </div>
            </div>
        </div>  
        <div>
            {hasMoreDetails ?
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
            : ``}
        </div>
    </div>
  )
}