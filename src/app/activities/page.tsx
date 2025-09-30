import { getAllPostIds, getPostData } from '@/lib/markdown';
import { getWeek, formatDate } from '@/lib/utils';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';




export default async function ActivitiesPage() {
  // Get all assignment files from content/assignments directory
  const ids = getAllPostIds('activities');
  const activities = await Promise.all(ids.map(async ({ params }) => {
    const postData = await getPostData(params.id, 'activities');
    return {
      id: params.id,
      title: postData.title,
      excerpt: postData.excerpt,
      date: postData.date,
      type: postData.type,
      excluded: postData.excluded,
    };
  }));

  // Filter out excluded activities
  const filteredActivities = activities.filter(activity => !activity.excluded);

  // Sort activities by date
  filteredActivities.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <div className="space-y-6">
      <PageHeader 
        title="In-Class Activities" 
        excerpt="In-class activities and discussion questions"
      />
      
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-[100px]">Week</th>
            <th className="w-[120px]">Date</th>
            <th>Activity</th>
          </tr> 
        </thead>
        <tbody>
        {filteredActivities.map((activity, index) => {
          const currentWeek = activity.date ? getWeek(activity.date) : '';
          const previousWeek = index > 0 && filteredActivities[index - 1].date ? getWeek(filteredActivities[index - 1].date) : '';
          const showWeek = currentWeek !== previousWeek;
          
          return (
            <tr key={activity.id} className="p-6">
              <td className="w-[100px]"><strong>{showWeek ? currentWeek : ''}</strong></td>

              <td>{activity.date ? formatDate(activity.date) : ''}</td>
              <td>
                <Link 
                  href={`/activities/${activity.id}`}
                >
                  {activity.title}
                </Link>
            </td>
            
          </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
} 