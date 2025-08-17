import PageHeader from '@/components/PageHeader';
import Meeting from '@/components/Meeting';
import topics from '@/lib/topics';

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Course Schedule" excerpt="Topic-based schedule with specific meeting dates" />
      {topics.map((topic) => (
        <div key={topic.id}>
          <h2>Topic {topic.id}: {topic.title}</h2>
          <p className="pb-6 !mb-0 border-b border-black dark:border-gray-700 text-gray-700 dark:text-gray-300">{topic.description}</p>
          
          {topic.meetings.map((meeting, index) => (
            <Meeting meeting={meeting} key={`${topic.id}-${index}`} />
          ))}
        </div>
      ))}
    </div>
  );
} 