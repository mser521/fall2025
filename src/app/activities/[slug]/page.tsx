import { getPostData, getAllPostIds } from '@/lib/markdown';
import PageHeader from '@/components/PageHeader';
import MarkdownContent from '@/components/MarkdownContent';
import TableOfContents from '@/components/TableOfContents';
import { notFound } from 'next/navigation';

interface ActivityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  try {
    const { slug } = await params;
    const postData = await getPostData(slug, 'activities');
    
    return (
      <div className="space-y-6">
        <PageHeader 
          title={postData.title} 
          excerpt={postData.excerpt}
          type="activity"
        />
        
        <div className="flex gap-8">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <MarkdownContent content={postData.content} />
          </div>
          
          {/* Table of Contents */}
          <div className="hidden xl:block flex-shrink-0">
            <TableOfContents />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

// Generate static params for all activities
export async function generateStaticParams() {
  const activityIds = getAllPostIds('activities');
  
  return activityIds.map(({ params }) => ({
    slug: params.id,
  }));
} 