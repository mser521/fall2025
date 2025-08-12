import PageHeader from '@/components/PageHeader';
import Meeting from '@/components/Meeting';
import topics from '@/lib/topics';

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Course Schedule" excerpt="Topic-based schedule with specific meeting dates" />
      
      <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
        {/* Main content */}
        <div className="flex-1 space-y-8">
          {topics.map((topic) => (
            <div key={topic.id} className="py-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Topic {topic.id}: {topic.title}
              </h2>
              <p className="!mb-0 pb-4">{topic.description}</p>
              
              {topic.meetings.map((meeting, index) => (
                <Meeting meeting={meeting} key={`${topic.id}-${index}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 