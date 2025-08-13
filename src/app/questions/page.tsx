import { getAllPostIds, getPostData } from '@/lib/markdown';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function QuestionsPage() {
  // Get all assignment files from content/assignments directory
  const ids = getAllPostIds('questions');
  const questions = ids.map(({ params }) => {
    const postData = getPostData(params.id, 'questions');
    return {
      id: params.id,
      title: postData.title,
      excerpt: postData.excerpt,
      date: postData.date,
      type: postData.type,
    };
  });

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Discussion Questions" 
        excerpt="In-class discussion questions"
      />
      
      <table>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Type</th>
            <th>Due Date</th>
          </tr> 
        </thead>
        <tbody>
        {questions.map((question) => (
          <tr key={question.id} className="p-6">
            <td>
              <Link 
                href={`/questions/${question.id}`}
              >
                {question.title}
              </Link>
            </td>
            <td>{question.type}</td>
            <td>Due: {question.date}</td>
            
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
} 