import { getPostData } from '@/lib/markdown';

export default function AssignmentsPage() {
  const postData = getPostData('assignments');
  
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">{postData.title}</h1>
        <p className="text-gray-600 mt-2">{postData.excerpt}</p>
      </div>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      />
    </div>
  );
} 