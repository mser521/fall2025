import { visit } from 'unist-util-visit';
import type { Node } from 'unist';
import type { Html } from 'mdast';

// Define the image paths for the vis01 activity
const IMAGE_PATHS = [
  '/fall2025/images/student-work/2025-09-11-0001.jpg',
  '/fall2025/images/student-work/2025-09-11-0002.jpg',
  '/fall2025/images/student-work/2025-09-11-0003.jpg',
  '/fall2025/images/student-work/2025-09-11-0004.jpg',
  '/fall2025/images/student-work/2025-09-11-0005.jpg',
  '/fall2025/images/student-work/2025-09-11-0006.jpg',
  '/fall2025/images/student-work/2025-09-11-0007.jpg',
  '/fall2025/images/student-work/2025-09-11-0008.jpg',
  '/fall2025/images/student-work/2025-09-11-0009.jpg',
  '/fall2025/images/student-work/2025-09-11-0010.jpg',
  '/fall2025/images/student-work/2025-09-11-0011.jpg',
  '/fall2025/images/student-work/2025-09-11-0012.jpg',
  '/fall2025/images/student-work/2025-09-11-0013.jpg',
  '/fall2025/images/student-work/2025-09-11-0014.jpg',
  '/fall2025/images/student-work/2025-09-11-0015.jpg',
];

export function remarkImageGrid() {
  return (tree: Node) => {
    visit(tree, 'html', (node: Html) => {
      if (node.value && node.value.includes('<ImageGrid')) {
        // Replace the ImageGrid tag with a placeholder that we'll handle in the React component
        node.value = node.value.replace(
          /<ImageGrid\s*\/?>/g,
          '<div data-imagegrid-placeholder="true"></div>'
        );
      }
    });
  };
}

// Export the image paths so they can be used in the React component
export { IMAGE_PATHS };
