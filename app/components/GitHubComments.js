'use client';

import { useEffect, useRef } from 'react';

export default function GitHubComments({ postId }) {
  const commentsRef = useRef(null);

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="giscus"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    if (commentsRef.current) {
      commentsRef.current.innerHTML = '';
    }

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    
    script.setAttribute('data-repo', 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME');
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID');
    
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
        
        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
            🔧 Setup Required
          </h4>
          <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
            To enable comments, you need to configure your GitHub repository:
          </p>
          <ol className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1 ml-4">
            <li>1. Go to your GitHub repository settings</li>
            <li>2. Enable "Discussions" feature</li>
            <li>3. Get your repository ID from GitHub API</li>
            <li>4. Update the component with your repo details</li>
          </ol>
        </div>
      </div>
    </div>
  );
} 