'use client';

import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-markdown';

export default function CodeBlock({ children, className, ...props }) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      // Force re-highlight after a small delay to ensure DOM is ready
      setTimeout(() => {
        Prism.highlightElement(codeRef.current);
      }, 0);
    }
  }, [children]);

  // If this is a code block (not inline code), render as pre
  if (className && className.includes('language-')) {
    return (
      <pre className={className} {...props}>
        <code ref={codeRef} className={className}>
          {children}
        </code>
      </pre>
    );
  }

  // If this is inline code, render as code
  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
} 