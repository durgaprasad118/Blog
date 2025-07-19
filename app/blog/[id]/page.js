import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostData, getAllPostIds } from '../../../lib/posts';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import GitHubComments from '../../components/GitHubComments';
import BuyMeACoffee from '../../components/BuyMeACoffee';

const components = {
  img: (props) => (
    <img
      {...props}
      className="rounded-lg shadow-lg mx-auto my-8 max-w-full h-auto"
      alt={props.alt || ''}
    />
  ),
  a: (props) => (
    <a
      {...props}
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline decoration-2 underline-offset-2"
    />
  ),
};

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    id: post.params.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = getPostData(id);
  return {
    title: `${post.title} | My Beautiful Blog`,
    description: post.excerpt || `Read ${post.title} on My Beautiful Blog`,
  };
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = getPostData(id);

  return (
    <article className="max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors group"
      >
        <svg
          className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        Back to blogs
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-4">
            {post.date && (
              <time
                dateTime={post.date}
                className="text-gray-500 dark:text-gray-400 font-medium"
              >
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </time>
            )}
            {post.readTime && (
              <span className="text-gray-400 dark:text-gray-500 text-sm">
                {post.readTime} min read
              </span>
            )}
          </div>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {post.excerpt && (
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed border-l-4 border-blue-500 pl-6 italic">
            {post.excerpt}
          </p>
        )}
      </header>

      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>

      <div className="mt-16 pt-8">
        <BuyMeACoffee />
      </div>

      <GitHubComments postId={id} />
    </article>
  );
} 