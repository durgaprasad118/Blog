'use client';

import { useEffect } from 'react';

export default function SyntaxHighlighter() {
  useEffect(() => {
    const highlightCode = async () => {
      try {
        const Prism = await import('prismjs');
        await import('prismjs/components/prism-bash');
        await import('prismjs/components/prism-javascript');
        await import('prismjs/components/prism-jsx');
        await import('prismjs/components/prism-typescript');
        await import('prismjs/components/prism-rust');
        await import('prismjs/components/prism-python');
        await import('prismjs/components/prism-css');
        await import('prismjs/components/prism-markup');
        await import('prismjs/components/prism-sql');
        await import('prismjs/components/prism-markdown');
        
        // Apply highlighting to all code blocks
        Prism.highlightAll();
      } catch (error) {
        console.error('Failed to load Prism.js:', error);
      }
    };

    // Wait a bit for the page to render
    const timer = setTimeout(highlightCode, 100);
    return () => clearTimeout(timer);
  }, []);

  return null;
} 