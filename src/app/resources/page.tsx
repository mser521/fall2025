import { getPostData } from '@/lib/markdown';

export default function ResourcesPage() {
  const postData = getPostData('resources');
  
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">{postData.title}</h1>
        <p className="text-gray-600 mt-2">{postData.excerpt}</p>
      </div>
      
      <div 
        className="prose prose-lg max-w-none prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-table:border-collapse prose-table:border prose-table:border-gray-300 prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:p-3 prose-td:border prose-td:border-gray-300 prose-td:p-3"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      />
    </div>
  );
} 