import { getPostData, getAllPostIds } from '../../../lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import GitHubComments from '../../components/GitHubComments'

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
    <article className="prose prose-lg max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.readTime} min read</span>
          {post.tags && post.tags.length > 0 && (
            <>
              <span>•</span>
              <div className="flex gap-2">
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

      <div className="mt-12 pt-8 border-t border-gray-200">
        <GitHubComments />
      </div>
    </article>
  )
} 