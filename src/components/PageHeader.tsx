interface PageHeaderProps {
  title: string;
  excerpt?: string;
}

export default function PageHeader({ title, excerpt }: PageHeaderProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
      {excerpt && (
        <p className="text-gray-600 dark:text-gray-400 mt-2">{excerpt}</p>
      )}
    </div>
  );
}