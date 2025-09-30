"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      if (pathname.startsWith('/resources')) {
        mainElement.setAttribute('data-resources-layout', 'true');
        mainElement.removeAttribute('data-assignment-layout');
      } else if (pathname.startsWith('/assignments/') || pathname.startsWith('/activities/')) {
        mainElement.setAttribute('data-assignment-layout', 'true');
        mainElement.removeAttribute('data-resources-layout');
      } else {
        mainElement.removeAttribute('data-resources-layout');
        mainElement.removeAttribute('data-assignment-layout');
      }
    }
  }, [pathname]);

  return <>{children}</>;
}
