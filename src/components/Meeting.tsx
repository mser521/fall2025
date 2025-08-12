'use client'

import { useState } from 'react';
import clsx from 'clsx';
export default function Meeting({ meeting }: { meeting: any }) {
  const [showDetails, setShowDetails] = useState(false);
  function toggleDetails() {
    console.log('toggleDetails', showDetails);
    setShowDetails(!showDetails);
  }
  const hasActivities = 'activities' in meeting && meeting.activities && meeting.activities.length > 0;
  const hasReadings = 'readings' in meeting && meeting.readings && meeting.readings.length > 0;
  const hasMoreDetails = hasActivities || hasReadings;
  const isHoliday = 'holiday' in meeting && meeting.holiday;
  return (
    <div className={clsx("grid grid-cols-16 border-t border-black pt-4", {
      'bg-gray-50': isHoliday
    })} onClick={toggleDetails}>
        <strong className="col-span-2 font-bold">{meeting.date}</strong>
        <div className="col-span-13">
            <p><strong>{meeting.topic}</strong></p>
            <div className={clsx("", {
                'text-gray-100': isHoliday,
                'block': showDetails,
                'hidden': !showDetails
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
                    'readings' in meeting && meeting.readings?.map((reading: any, index: number) => {
                        return (
                        <li className="-indent-8 mb-4" key={index}>
                            {reading.citation} {" "}
                            <a href={reading.url} target="_blank" rel="noopener noreferrer">Link</a>
                        </li>
                        )
                    })
                    }
                </ul>
                </div>
            </div>
        </div>  
        <div>{hasMoreDetails && (showDetails ? 
          <button className="text-black hover:text-sky-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 15l7-7 7 7" />
            </svg>
          </button> : 
          <button className="text-black hover:text-sky-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}</div>
    </div>
  )
}