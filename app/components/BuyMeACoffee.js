'use client';

import { useEffect, useState } from 'react';

export default function BuyMeACoffee() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`text-center py-8 transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 animate-pulse">
        Enjoyed this post?
      </h3>
      <a
        href="https://www.buymeacoffee.com/iam_walterwhite"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block group relative"
      >
        <div className="relative">
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
            className="h-12 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ease-out animate-bounce"
            style={{ animationDuration: '3s' }}
          />
          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
              <div className="w-1 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-yellow-400 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10"></div>
      </a>
    </div>
  );
} 