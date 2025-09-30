'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Find all h2 and h3 elements
    const headings = document.querySelectorAll('h2, h3');
    const items: TocItem[] = [];

    headings.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-') || '';
      
      // Set the id if it doesn't exist
      if (!heading.id) {
        heading.id = id;
      }

      items.push({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      });
    });

    setTocItems(items);

    // Set up intersection observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px', // Account for fixed header
        threshold: 0.1
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-20 w-64 flex-shrink-0">
      <div className="bg-gray-50 rounded-lg p-4">
        <ul className="!list-none !p-0 !m-0">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block py-1 px-2 !text-gray-700 text-sm transition-colors whitespace-nowrap overflow-hidden !border-0 text-ellipsis ${
                  activeId === item.id
                    ? 'bg-blue-100 text-blue-700 font-bold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                } ${
                  item.level === 3 ? '!pl-8' : ''
                }`}
                title={item.text}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
