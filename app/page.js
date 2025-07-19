import { getAllPosts } from '../lib/posts'
import BlogList from './components/BlogList'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  )
}
