export default function PageHeader({ title, excerpt }: { title: string, excerpt?: string }) {
  return (
    <div className="border-b border-gray-200 pb-4">
        <h1 className="!text-5xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-2">{excerpt}</p>
      </div>
  );
}