import { getPostData, getAllPostIds } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import SyntaxHighlighter from '../components/SyntaxHighlighter'
// import GitHubComments from '../components/GitHubComments'

export async function generateStaticParams() {
  const posts = getAllPostIds()
  return posts.map((post) => ({
    id: post.params.id,
  }))
}

export default async function BlogPost({ params }) {
  const { id } = await params
  const post = getPostData(id)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="w-full">
      {post.headerImage && (
        <div className="w-full bg-gray-50 mb-8">
          <img
            src={post.headerImage}
            alt={post.title}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover object-center rounded-xl"
            style={{ display: 'block' }}
          />
        </div>
      )}
      <div className="max-w-3xl sm:max-w-4xl mx-auto px-2 sm:px-6 py-8">
        <article className="prose prose-lg max-w-none">
        <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <>
              <span className="hidden sm:inline">•</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} />
      </div>

      <SyntaxHighlighter />

      {post.resources && post.resources.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
          <div className="space-y-2">
            {post.resources.map((resource, index) => (
              <div key={index} className="text-base">
                <span className="font-medium text-gray-900">{resource.title}</span>
                <span className="text-gray-500 mx-2">: </span>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 underline"
                >
                  {resource.url}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <div className="mt-12 pt-8 border-t border-gray-200">
        <GitHubComments />
      </div> */}
        </article>
      </div>
    </div>
  )
} 