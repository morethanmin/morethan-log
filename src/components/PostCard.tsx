import Link from "next/link";
import CONFIG from "notes.config";
import { formatDate } from "@/src/libs/utils";
import Tag from "./Tag";
import { TPost } from "../types";
import Image from "next/image";

type Props = {
  post: TPost;
};

const PostCard: React.FC<Props> = ({ post }) => {
  const hasThumbnail = Boolean(post.thumbnail);
  return (
    <Link href={`/${post.slug}`}>
      <a>
        <article
          key={post.id}
          className="overflow-hidden mb-5 rounded-xl bg-white dark:bg-zinc-700 hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-zinc-600 min-h-[140px]"
        >
          {hasThumbnail ? (
            <div className="flex flex-col md:flex-row gap-0 md:gap-4">
              <div className="relative w-full md:w-44 h-36 md:h-44 flex-shrink-0 bg-gray-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                <Image
                  src={post.thumbnail || ""}
                  className="object-cover rounded-lg"
                  layout="fill"
                  alt={post.title}
                />
              </div>
              <div className="flex-1 pt-4 px-4 md:pt-0 md:py-4 md:pr-4 md:px-0 flex flex-col justify-center">
                <header className="mb-1">
                  <h2 className="text-lg font-medium text-black dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                </header>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <time>
                    {formatDate(
                      post?.date?.start_date || post.createdTime,
                      CONFIG.lang
                    )}
                  </time>
                  {post.tags && post.tags.length > 0 && (
                    <>
                      <span className="text-gray-300 dark:text-gray-600">
                        •
                      </span>
                      <div className="flex gap-1.5 flex-wrap">
                        {post.tags
                          .slice(0, 2)
                          .map((tag: string, idx: number) => (
                            <Tag key={idx}>{tag}</Tag>
                          ))}
                        {post.tags.length > 2 && (
                          <span className="text-gray-500">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <main>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </main>
              </div>
            </div>
          ) : (
            <div className="py-4 px-4 flex flex-col justify-center">
              <header className="mb-1">
                <h2 className="text-lg font-medium text-black dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
              </header>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <time>
                  {formatDate(
                    post?.date?.start_date || post.createdTime,
                    CONFIG.lang
                  )}
                </time>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <div className="flex gap-1.5 flex-wrap">
                      {post.tags.slice(0, 2).map((tag: string, idx: number) => (
                        <Tag key={idx}>{tag}</Tag>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-gray-500">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
              <main>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                  {post.summary}
                </p>
              </main>
            </div>
          )}
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
