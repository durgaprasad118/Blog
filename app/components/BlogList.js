'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { useState, useMemo } from 'react';
import TabFilter from './TabFilter';

export default function BlogList({ posts }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPosts = useMemo(() => {
    if (activeTab === 'all') {
      return posts;
    }
    
    return posts.filter(post => {
      if (!post.tags || !Array.isArray(post.tags)) return false;
      
      const postTags = post.tags.map(tag => tag.toLowerCase());
      
      switch (activeTab) {
        case 'tech':
          return postTags.some(tag => tag.includes('tech') || tag.includes('technology') || tag.includes('programming') || tag.includes('development'));
        case 'web3':
          return postTags.some(tag => tag.includes('web3') || tag.includes('blockchain') || tag.includes('crypto') || tag.includes('defi') || tag.includes('nft'));
        case 'web2':
          return postTags.some(tag => tag.includes('web2') || tag.includes('traditional') || tag.includes('legacy') || tag.includes('classic'));
        default:
          return true;
      }
    });
  }, [posts, activeTab]);

  return (
    <>
      <TabFilter activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="space-y-4 lg:space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post.id} className="pb-4 lg:pb-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 lg:gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 lg:gap-3 mb-1 lg:mb-2">
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-base lg:text-lg font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-900 dark:hover:decoration-gray-400 flex-1 min-w-0"
                    >
                      <span className="truncate block">{post.title}</span>
                    </Link>
                    <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
                      {post.displayonmainpage && (
                        <span className="px-2 py-1 lg:px-3 lg:py-1.5 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs lg:text-sm rounded">
                          {post.displayonmainpage}
                        </span>
                      )}
                      {post.date && (
                        <time dateTime={post.date} className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 hidden lg:block">
                          {format(new Date(post.date), 'do MMMM yyyy')}
                        </time>
                      )}
                    </div>
                  </div>
                  
                  {post.excerpt && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base line-clamp-1 sm:line-clamp-2 mb-1 lg:mb-2">
                      {post.excerpt}
                    </p>
                  )}
                  
                  {post.date && (
                    <time dateTime={post.date} className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 lg:hidden">
                      {format(new Date(post.date), 'do MMMM yyyy')}
                    </time>
                  )}
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No posts found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              No blog posts match the selected category. Try selecting a different tab.
            </p>
          </div>
        )}
      </div>
    </>
  );
} 