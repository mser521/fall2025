import { getPostData, getAllPostIds } from '@/lib/markdown';
import PageHeader from '@/components/PageHeader';
import { notFound } from 'next/navigation';

interface AssignmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AssignmentPage({ params }: AssignmentPageProps) {
  const { slug } = await params;
  const postData = getPostData(slug, 'assignments');
  
  return (
    <div className="space-y-6">
      <PageHeader 
        title={postData.title} 
        excerpt={postData.excerpt}
      />
      
      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </div>
    </div>
  );
}

// Generate static params for all assignments
export async function generateStaticParams() {
  const assignmentIds = getAllPostIds('assignments');
  
  return assignmentIds.map(({ params }) => ({
    slug: params.id,
  }));
} 