'use client'

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import Meeting from '@/components/Meeting';
import topics from '@/lib/topics';

export default function SchedulePage() {
  const [allExpanded, setAllExpanded] = useState(false);
  const [meetingStates, setMeetingStates] = useState<Record<string, boolean>>({});

  // Load saved states from localStorage on mount
  useEffect(() => {
    const savedStates: Record<string, boolean> = {};
    topics.forEach(topic => {
      topic.meetings.forEach((meeting, index) => {
        const meetingKey = `meeting-${meeting.date}-${meeting.topic.replace(/\s+/g, '-').toLowerCase()}`;
        if (typeof window !== 'undefined') {
          const savedState = localStorage.getItem(meetingKey);
          if (savedState !== null) {
            savedStates[meetingKey] = JSON.parse(savedState);
          }
        }
      });
    });
    setMeetingStates(savedStates);
  }, []);

  const toggleAll = () => {
    const newExpanded = !allExpanded;
    setAllExpanded(newExpanded);
    
    const newStates: Record<string, boolean> = {};
    topics.forEach(topic => {
      topic.meetings.forEach((meeting, index) => {
        const meetingKey = `meeting-${meeting.date}-${meeting.topic.replace(/\s+/g, '-').toLowerCase()}`;
        newStates[meetingKey] = newExpanded;
        localStorage.setItem(meetingKey, JSON.stringify(newExpanded));
      });
    });
    setMeetingStates(newStates);
  };

  const setMeetingState = (meetingKey: string, show: boolean) => {
    setMeetingStates(prev => ({
      ...prev,
      [meetingKey]: show
    }));
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Course Schedule" excerpt="Topic-based schedule with specific meeting dates" />
      
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleAll}
          className="px-4 py-2 border-2 border-black dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
        >
          {allExpanded ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {topics.map((topic) => (
        <div key={topic.id} className="mb-16">
          <h2>Topic {topic.id}: {topic.title}</h2>
          <p className="pb-6 !mb-0 border-b border-black dark:border-gray-700 text-gray-700 dark:text-gray-300">{topic.description}</p>
          
          {topic.meetings.map((meeting, index) => {
            const meetingKey = `meeting-${meeting.date}-${meeting.topic.replace(/\s+/g, '-').toLowerCase()}`;
            return (
              <Meeting 
                meeting={meeting} 
                key={`${topic.id}-${index}`}
                showDetails={meetingStates[meetingKey] || false}
                setShowDetails={(show) => setMeetingState(meetingKey, show)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
} 