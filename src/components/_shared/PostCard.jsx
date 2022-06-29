import Link from 'next/link'
import CONFIG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import Tag from './Tag'

const PostCard = ({ post }) => {
  return (
    <Link href={`/${post.slug}`}>
      <a>
        <article
          key={post.id}
          className="mb-6 md:mb-8 rounded-2xl p-5 bg-white dark:bg-zinc-700 hover:shadow-md transition-shadow "
        >
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
              {post.title}
            </h2>
          </header>
          <div className="mb-4">
            <time className="flex-shrink-0 text-sm text-gray-600 dark:text-gray-400 ">
              {formatDate(
                post?.date?.start_date || post.createdTime,
                CONFIG.lang
              )}
            </time>
          </div>
          <main className="mb-4">
            <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
              {post.summary}
            </p>
          </main>
          <div className="flex gap-2">
            {post.tags &&
              post.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
          </div>
        </article>
      </a>
    </Link>
  )
}

export default PostCard
