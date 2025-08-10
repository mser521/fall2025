import { getPostData } from '@/lib/markdown';
import PageHeader from '@/components/PageHeader';

export default function SyllabusPage() {
  const postData = getPostData('syllabus');
  const {title, excerpt} = postData;
  
  return (
    <div className="space-y-6">
      <PageHeader title={title} excerpt={excerpt} />
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      />
    </div>
  );
} 