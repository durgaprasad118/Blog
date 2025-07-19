'use client';

import { useEffect, useState } from 'react';

export default function FloatingBuyMeACoffee() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed right-6 bottom-6 z-50 transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href="https://www.buymeacoffee.com/iam_walterwhite"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="w-16 h-16 bg-yellow-50/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 animate-bounce hover:animate-none">
            <img 
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" 
              alt="Buy me a coffee" 
              className="w-8 h-8 group-hover:animate-spin"
            />
          </div>
        </a>
        
        <div className={`absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}>
          <div className="text-sm font-medium whitespace-nowrap">
            <div>Enjoyed this?</div>
            <div>Buy me a coffee ☕</div>
          </div>
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </div>
    </div>
  );
} 