"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ResourcePage {
  slug: string;
  title: string;
  group?: string;
}

interface ResourcesNavProps {
  resourcePages: ResourcePage[];
}

export default function ResourcesNav({ resourcePages }: ResourcesNavProps) {
  const pathname = usePathname();
  
  // Group pages by their group field
  const groupedPages = resourcePages.reduce((groups, page) => {
    const group = page.group || 'Other';
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(page);
    return groups;
  }, {} as Record<string, typeof resourcePages>);
  
  return (
    <nav className="w-full lg:w-64 mt-12 flex-shrink-0 border-r md:border-black md:min-h-screen">
      <div className="lg:top-8 p-4">
        {Object.entries(groupedPages).map(([groupName, pages]) => (
          <div key={groupName} className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              {groupName}
            </h4>
            <ol>
              {pages.map((page) => {
                const href = `/resources/${page.slug}`;
                const isActive = pathname === href;
                return (
                  <li key={page.slug} className="px-3 py-0">
                    <Link
                      href={href}
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? 'font-bold !text-black hover:!text-gray-900 !border-0'
                          : 'text-blue-700 border-blue-500 '
                      }`}
                    >
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    </nav>
  );
}
