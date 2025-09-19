'use client';

import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import ImageGrid from './ImageGrid';
import { IMAGE_SETS, IMAGE_PATHS } from '@/lib/remark-imagegrid';

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
      // Get the image set and alt text from data attributes
      const imageSet = placeholder.getAttribute('data-imagegrid-set') || 'vis01';
      const customAlt = placeholder.getAttribute('data-imagegrid-alt');
      
      // Get the appropriate image array
      const images = IMAGE_SETS[imageSet as keyof typeof IMAGE_SETS] || IMAGE_PATHS;
      
      // Determine alt text
      const altText = customAlt || `Student work from ${imageSet}`;
      
      // Create a container for the ImageGrid component
      const container = document.createElement('div');
      container.className = 'mt-8';
      
      // Create a div where we'll mount the React component
      const reactContainer = document.createElement('div');
      container.appendChild(reactContainer);
      
      // Replace the placeholder with our container
      placeholder.parentNode?.replaceChild(container, placeholder);
      
      // Mount the ImageGrid component
      const root = createRoot(reactContainer);
      root.render(
        <ImageGrid 
          images={images} 
          alt={altText}
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
