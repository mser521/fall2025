'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';

// Tailwind classes used in this component for content scanning:
// bg-primary bg-secondary hover:bg-secondary text-white

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px from the top
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        // Base styles
        "fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:shadow-xl hover:-translate-y-0.5 hover:scale-105",
        // Background colors - using arbitrary values for CSS variables
        "bg-[var(--primary)] text-white hover:bg-[var(--secondary)]",
        // Conditional visibility styles
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
