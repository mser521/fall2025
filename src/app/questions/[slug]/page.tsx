import { getPostData, getAllPostIds } from '@/lib/markdown';
import PageHeader from '@/components/PageHeader';
import { notFound } from 'next/navigation';

interface QuestionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  try {
    const { slug } = await params;
    const postData = getPostData(slug, 'questions');
    
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
  } catch (error) {
    notFound();
  }
}

// Generate static params for all questions
export async function generateStaticParams() {
  const questionIds = getAllPostIds('questions');
  
  return questionIds.map(({ params }) => ({
    slug: params.id,
  }));
} 