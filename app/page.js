import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import { format } from 'date-fns';

export default function Home() {
  const posts = getAllPosts();
  
  const mainPosts = posts.filter(post => post.displayonmainpage);

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="space-y-4 lg:space-y-6">
        {mainPosts.length > 0 ? (
          mainPosts.map((post) => (
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
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No posts yet
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Create your first blog post by adding a markdown file to the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">posts</code> directory.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 max-w-md mx-auto text-left">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Example post structure:</h3>
              <pre className="text-sm text-gray-600 dark:text-gray-400">
{`---
title: "My First Post"
date: "2024-01-01"
excerpt: "This is my first blog post"
tags: ["introduction", "blog"]
displayonmainpage: "Latest"
---

# Hello World

This is my first blog post!`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
