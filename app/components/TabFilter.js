'use client';

import { useState } from 'react';

export default function TabFilter({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'tech', label: 'Tags' },
    { id: 'web3', label: 'Web 3' }
  ];

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gray-800 text-white shadow-md transform scale-105'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 