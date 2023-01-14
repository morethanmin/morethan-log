import Link from "next/link"
import CONFIG from "site.config"
import { formatDate } from "@/src/libs/utils"
import Tag from "./Tag"
import { TPost } from "../types"
import Image from "next/image"

type Props = {
  post: TPost
}

const PostCard: React.FC<Props> = ({ post }) => {
  if (post.thumbnail) {
  }
  return (
    <Link href={`/${post.slug}`}>
      <a>
        <article
          key={post.id}
          className="overflow-hidden mb-6 md:mb-8 rounded-2xl bg-white dark:bg-zinc-700 hover:shadow-lg transition-shadow "
        >
          {post.thumbnail && (
            <div className="relative w-full pb-[66%] lg:pb-[50%] bg-gray-200 dark:bg-zinc-700 ">
              <Image
                src={post.thumbnail}
                className="object-cover"
                layout="fill"
                alt={post.title}
              />
            </div>
          )}
          <div className="p-4">
            <header className="flex flex-col justify-between md:flex-row md:items-baseline">
              <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
                {post.title}
              </h2>
            </header>
            <div className="flex items-center gap-2 mb-4">
              {/* {post.author && post.author[0] && (
                <>
                  <div className="flex items-center gap-1">
                    <Image
                      className="rounded-full"
                      src={post.author[0].profile_photo}
                      alt="profile_photo"
                      loader={imageLoader}
                      width={20}
                      height={20}
                    />
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {`${post.author[0].last_name}${post.author[0].first_name}`}
                    </div>
                  </div>
                  <div className="self-stretch w-px my-1 bg-gray-300"></div>
                </>
              )} */}
              <div className="text-sm text-gray-500 dark:text-gray-400 md:ml-0">
                {formatDate(
                  post?.date?.start_date || post.createdTime,
                  CONFIG.lang
                )}
              </div>
            </div>
            <main className="mb-4">
              <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
                {post.summary}
              </p>
            </main>
            <div className="flex gap-2">
              {post.tags &&
                post.tags.map((tag: string, idx: number) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default PostCard
