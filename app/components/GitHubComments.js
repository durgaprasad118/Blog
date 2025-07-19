'use client';

import { useEffect, useRef } from 'react';

export default function GitHubComments({ postId }) {
  const commentsRef = useRef(null);

  useEffect(() => {
    // Remove any existing giscus
    const existingScript = document.querySelector('script[src*="giscus"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    if (commentsRef.current) {
      commentsRef.current.innerHTML = '';
    }

    // Create and configure the giscus script
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME'); // Replace with your repo
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID'); // Replace with your repo ID
    script.setAttribute('data-category', 'General'); // Or your preferred category
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID'); // Replace with category ID
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }

    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [postId]);

  return (
    <div className="mt-12">
      <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Comments
        </h3>
        <div ref={commentsRef} className="giscus-comments" />
      </div>
    </div>
  );
} 