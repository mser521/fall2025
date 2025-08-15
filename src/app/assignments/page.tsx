import { getAllPostIds, getPostData, PostData } from '@/lib/markdown';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

interface AssignmentData {
  id: string;
  num?: string;
  title: string;
  excerpt?: string;
  date?: string;
  type?: string;
  assigned?: string;
  draft?: number;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${dayOfWeek}, ${month}/${day}`;
}

export default function AssignmentsPage() {
  // Get all assignment files from content/assignments directory
  const assignmentIds = getAllPostIds('assignments');
  const assignments: AssignmentData[] = assignmentIds.map(({ params }) => {
    const postData = getPostData(params.id, 'assignments');
    return {
      id: params.id,
      num: postData.num,
      title: postData.title,
      excerpt: postData.excerpt,
      date: postData.due_date,
      type: postData.type,
      assigned: postData.assigned,
      draft: postData.draft,
    };
  }).sort((a, b) => {
    // If both have dates, sort by date
    if (a.date && b.date) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    // If only one has a date, put the one without date at the end
    if (a.date && !b.date) return -1;
    if (!a.date && b.date) return 1;
    // If neither has a date, sort by assignment number
    const aNum = parseInt(a.num as string) || 0;
    const bNum = parseInt(b.num as string) || 0;
    return aNum - bNum;
  });

  function titleCase(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function getAssignmentLink(assignment: AssignmentData): React.ReactNode {
    if (assignment.draft) {
      return <>{assignment.type ? titleCase(assignment.type) : ''} {assignment.num ? assignment.num : ''}</>;
    }
    return (
      <Link  href={`/assignments/${assignment.id}`}
        >
          {assignment.type ? titleCase(assignment.type) : ''} {assignment.num ? assignment.num : ''}
        </Link>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Course Assignments" 
        excerpt="All course assignments and their requirements"
      />
      
      <table>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Title</th>
            <th>Due Date</th>
          </tr> 
        </thead>
        <tbody>
        {assignments.map((assignment) => (
          <tr key={assignment.id} className="p-6">
            <td>
              {getAssignmentLink(assignment)}
            </td>
            <td>{assignment.title}</td>
            <td>{assignment.date ? formatDate(assignment.date) : 'TBD'}</td>
            
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
} 