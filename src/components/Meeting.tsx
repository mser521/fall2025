'use client'

import clsx from 'clsx';
import Link from 'next/link';

interface Reading {
  citation: string | React.ReactElement;
  url?: string;
}

interface Activity {
  title: string;
  url?: string;
  draft?: number;
}

interface Assignment {
  titleShort: string;
  title: string;
  url?: string;
  draft?: number;
}

export interface MeetingData {
  date: string;
  topic: string;
  description?: string;
  activities?: Activity[];
  readings?: Reading[];
  optionalReadings?: Reading[];
  holiday?: boolean;
  discussionQuestions?: string;
  assigned?: Assignment | string;
  due?: Assignment | string;
}

export default function Meeting({ 
  meeting, 
  showDetails, 
  setShowDetails 
}: { 
  meeting: MeetingData;
  showDetails: boolean;
  setShowDetails: (show: boolean) => void;
}) {
  const meetingKey = `meeting-${meeting.date}-${meeting.topic.replace(/\s+/g, '-').toLowerCase()}`;
  const hasActivities = 'activities' in meeting && meeting.activities && meeting.activities.length > 0;
  const hasReadings = 'readings' in meeting && meeting.readings && meeting.readings.length > 0;
  const hasOptionalReadings = 'optionalReadings' in meeting && meeting.optionalReadings && meeting.optionalReadings.length > 0;
  const hasMoreDetails = hasActivities || hasReadings;
  const hasDiscussionQuestions = 'discussionQuestions' in meeting && meeting.discussionQuestions;
  const isHoliday = 'holiday' in meeting && meeting.holiday;

  function toggleDetails() {
    const newState = !showDetails;
    setShowDetails(newState);
    localStorage.setItem(meetingKey, JSON.stringify(newState));
  }

  function renderActivity(activity: Activity) {
    if (activity.draft && activity.draft === 1) {
      return activity.title;
    }
    
    const isExternalLink = activity.url?.startsWith('https');
    const url = activity.url || '#';
    
    if (isExternalLink) {
      return (<Link href={url} target="_blank">{activity.title}</Link>);
    }
    return (<Link href={url}>{activity.title}</Link>);
  }

  function renderActivities() {
    if (hasActivities) {
      return (
        <div className="mb-6">
            {hasActivities ? <strong className="text-gray-700 dark:text-gray-300">Slides / Activities</strong> : ``}
            <ul>
                {'activities' in meeting && meeting.activities?.map((activity: Activity, index: number) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                    {renderActivity(activity)}
                </li>
                ))}
            </ul>
        </div>
      )
    }
    return ``;
  } 

  function renderReadings({title, readings}: {title: string, readings:Reading[]}) {
    return (
      <div className="mb-6">
          {<strong className="text-gray-700 dark:text-gray-300">{title}</strong>}
          <ol>
              {
              readings.map((reading: Reading, index: number) => {
                  return (
                  <li key={index} className="mb-2 text-gray-700 dark:text-gray-300">
                      {reading.citation} {" "}
                      {reading.url && (
                        <a href={reading.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                            Link
                        </a>
                      )}
                  </li>
                  )
              })
              }
          </ol>
      </div>
    )
  }

  function renderDiscussionQuestions() {
    if (hasDiscussionQuestions) {
      return (
        <div className="mt-4">
            {hasDiscussionQuestions ? <strong className="text-gray-700 dark:text-gray-300">Discussion Questions</strong> : ``}
            <div className="text-gray-700 dark:text-gray-300">
                {meeting.discussionQuestions}
            </div>
        </div>
      )
    }
  } 

  function renderAssignment(assignment: Assignment | string) {
    if (typeof assignment === 'string') {
      return assignment;
    }
    if (assignment.draft && assignment.draft === 1) {
      return (<>{assignment.titleShort}: {assignment.title}</>);
    }
    return (<><Link href={assignment.url || '#'}>{assignment.titleShort}</Link>: {assignment.title}</>);
  }

  function renderDetailsButton() {
    if (hasMoreDetails) {
      return (
            <button onClick={toggleDetails} className="text-black dark:text-white hover:text-sky-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white flex justify-center items-center rounded-full w-[35px] h-[35px]">
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
    <div className={clsx("flex justify-between gap-4 border-b border-black dark:border-gray-700 pt-4 pb-2", {
      'bg-gray-100 dark:bg-gray-800': isHoliday
    })}>
        <div className={clsx("flex gap-4", {
            'flex-col': showDetails,
            'md:flex-row': showDetails
        })}>
            <span className={clsx("w-[100px] flex-shrink-0 transition-all duration-300 ease-in-out", {
                'font-bold': true
            })}>{meeting.date}</span>
            <div className="w-full">
                <p className={clsx({
                    '!mb-3': !showDetails,
                    '!mb-0': showDetails
                  })}><span className={clsx("transition-all duration-300 ease-in-out", {
                    'font-bold': showDetails,
                    'text-black dark:text-white': showDetails,
                    // 'uppercase': showDetails
                })}>{meeting.topic}</span></p>
                <div className={clsx("overflow-hidden transition-all duration-300 ease-in-out", {
                    'text-gray-100': isHoliday,
                    'max-h-0 opacity-0': !showDetails,
                    'max-h-[1000px] opacity-100': showDetails
                })}>
                    { meeting.description && (
                        <p>{meeting.description}</p>
                    )}
                    {renderActivities()}
                    {hasReadings ? renderReadings({title: 'Required Readings', readings: meeting.readings || []}) : ``}
                    {hasOptionalReadings ? renderReadings({title: 'Optional Readings', readings: meeting.optionalReadings || []}) : ``}
                    {renderDiscussionQuestions()}
                    {
                      meeting.assigned ? ( 
                        <>
                          <strong className="text-gray-700 dark:text-gray-300">Assigned: </strong>
                          {renderAssignment(meeting.assigned)}
                        </>
                        ) : ''
                    }
                    {
                      meeting.due ? ( 
                        <>
                          <strong className="text-gray-700 dark:text-gray-300">Due: </strong>
                          {renderAssignment(meeting.due)}
                        </>
                        ) : ''
                    }
                </div>
            </div> 
        </div> 
        <div>
            {renderDetailsButton()}
        </div>
    </div>
  )
}