export default function SchedulePage() {
  const schedule = [
    {
      week: 1,
      dates: "Aug 26 - Sep 1",
      topic: "Course Introduction & Environmental Systems",
      activities: ["Course overview", "Environmental systems thinking", "Sustainability principles"],
      readings: "Chapters 1-2, Botkin & Keller"
    },
    {
      week: 2,
      dates: "Sep 2 - Sep 8",
      topic: "Scientific Methodology",
      activities: ["Research methods", "Data collection", "Statistical analysis"],
      readings: "Chapter 3, Theis & Tomkin"
    },
    {
      week: 3,
      dates: "Sep 9 - Sep 15",
      topic: "Environmental Assessment",
      activities: ["Field work preparation", "Assessment frameworks", "Assignment 1 due"],
      readings: "Selected journal articles"
    },
    {
      week: 4,
      dates: "Sep 16 - Sep 22",
      topic: "Climate Science Fundamentals",
      activities: ["Atmospheric composition", "Climate drivers", "Historical climate data"],
      readings: "Chapters 4-5, Pittock"
    },
    {
      week: 5,
      dates: "Sep 23 - Sep 29",
      topic: "Climate Change Mechanisms",
      activities: ["Greenhouse effect", "Feedback loops", "Climate models"],
      readings: "IPCC reports, selected sections"
    },
    {
      week: 6,
      dates: "Sep 30 - Oct 6",
      topic: "Climate Impacts",
      activities: ["Ecosystem responses", "Human impacts", "Adaptation strategies"],
      readings: "Nature Climate Change articles"
    },
    {
      week: 7,
      dates: "Oct 7 - Oct 13",
      topic: "Midterm Review",
      activities: ["Review sessions", "Practice problems", "Study groups"],
      readings: "All previous materials"
    },
    {
      week: 8,
      dates: "Oct 14 - Oct 20",
      topic: "Midterm & Renewable Energy",
      activities: ["Midterm exam", "Energy fundamentals", "Assignment 2 due"],
      readings: "Chapters 6-7, Theis & Tomkin"
    },
    {
      week: 9,
      dates: "Oct 21 - Oct 27",
      topic: "Sustainable Technologies",
      activities: ["Solar energy", "Wind power", "Energy storage"],
      readings: "Technical reports and case studies"
    },
    {
      week: 10,
      dates: "Oct 28 - Nov 3",
      topic: "Urban Sustainability",
      activities: ["Green infrastructure", "Smart cities", "Community planning"],
      readings: "Urban planning literature"
    },
    {
      week: 11,
      dates: "Nov 4 - Nov 10",
      topic: "Circular Economy",
      activities: ["Waste reduction", "Resource efficiency", "Business models"],
      readings: "Circular economy principles"
    },
    {
      week: 12,
      dates: "Nov 11 - Nov 17",
      topic: "Environmental Policy",
      activities: ["Policy frameworks", "International agreements", "Assignment 3 due"],
      readings: "Policy analysis literature"
    },
    {
      week: 13,
      dates: "Nov 18 - Nov 24",
      topic: "Policy Implementation",
      activities: ["Stakeholder engagement", "Implementation strategies", "Case studies"],
      readings: "Implementation research"
    },
    {
      week: 14,
      dates: "Nov 25 - Dec 1",
      topic: "Community Engagement",
      activities: ["Public participation", "Communication strategies", "Project work"],
      readings: "Community engagement literature"
    },
    {
      week: 15,
      dates: "Dec 2 - Dec 8",
      topic: "Final Project Work",
      activities: ["Project development", "Peer review", "Final presentations"],
      readings: "Project-specific materials"
    },
    {
      week: 16,
      dates: "Dec 9 - Dec 15",
      topic: "Course Wrap-up",
      activities: ["Final project due", "Course evaluation", "Future directions"],
      readings: "None"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Course Schedule</h1>
        <p className="text-gray-600 mt-2">Weekly breakdown of topics, activities, and assignments</p>
      </div>
      
      <div className="space-y-4">
        {schedule.map((week) => (
          <div key={week.week} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Week {week.week}: {week.topic}
                </h3>
                <p className="text-gray-600 text-sm">{week.dates}</p>
              </div>
              {week.week === 8 && (
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Midterm
                </span>
              )}
              {week.week === 16 && (
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Final Due
                </span>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Activities</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {week.activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Readings</h4>
                <p className="text-sm text-gray-600">{week.readings}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 