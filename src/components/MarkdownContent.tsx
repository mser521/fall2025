'use client';

import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import ImageGrid from './ImageGrid';
import { IMAGE_PATHS } from '@/lib/remark-imagegrid';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Find all ImageGrid placeholders and replace them with the actual component
    const placeholders = contentRef.current.querySelectorAll('[data-imagegrid-placeholder="true"]');
    
    placeholders.forEach((placeholder) => {
      // Create a container for the ImageGrid component
      const container = document.createElement('div');
      container.className = 'mt-8';
      
      // Create a div where we'll mount the React component
      const reactContainer = document.createElement('div');
      container.appendChild(reactContainer);
      
      // Replace the placeholder with our container
      placeholder.parentNode?.replaceChild(container, placeholder);
      
      // Mount the ImageGrid component
    //   const { createRoot } = require('react-dom/client');
      const root = createRoot(reactContainer);
      root.render(
        <ImageGrid 
          images={IMAGE_PATHS} 
          alt="Student hand-drawn chart example"
        />
      );
    });
  }, [content]);

  return (
    <div 
      ref={contentRef}
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
