'use client';

import React, { useEffect, useRef } from 'react';

export default function GitHubComments() {
  const giscusRef = useRef(null);

  useEffect(() => {
    // Prevent duplicate script injection
    if (!giscusRef.current || giscusRef.current.hasChildNodes()) return;
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'durgaprasad118/Blog');
    script.setAttribute('data-repo-id', 'R_kgDOPPaNUw');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOPPaNU84CtLzc');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';
    script.async = true;
    giscusRef.current.appendChild(script);
  }, []);

  return (
    <div ref={giscusRef} />
  );
} 