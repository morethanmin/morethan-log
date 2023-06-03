import Link from "next/link"
import CONFIG from "site.config"
import { formatDate } from "@/src/libs/utils"
import Tag from "./Tag"
import { TPost } from "../types"
import Image from "next/image"
import Category from "./Category"

type Props = {
  data: TPost
}

const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined

  return (
    <Link href={`/${data.slug}`}>
      <a>
        <article
          key={data.id}
          className="relative overflow-hidden mb-6 md:mb-8 rounded-2xl bg-white dark:bg-zinc-700 hover:shadow-lg transition-shadow "
        >
          {category && (
            <Category className="absolute top-4 left-4 z-10">
              {category}
            </Category>
          )}
          {data.thumbnail && (
            <div className="relative w-full pb-[66%] lg:pb-[50%] bg-gray-200 dark:bg-zinc-700 ">
              <Image
                src={data.thumbnail}
                className="object-cover"
                layout="fill"
                alt={data.title}
              />
            </div>
          )}
          <div
            className={["p-4", !data.thumbnail && category ? "pt-14" : ""].join(
              " "
            )}
          >
            <header className="flex flex-col justify-between md:flex-row md:items-baseline">
              <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
                {data.title}
              </h2>
            </header>
            <div className="flex items-center gap-2 mb-4">
              {/* {data.author && data.author[0] && (
                <>
                  <div className="flex items-center gap-1">
                    <Image
                      className="rounded-full"
                      src={data.author[0].profile_photo}
                      alt="profile_photo"
                      loader={imageLoader}
                      width={20}
                      height={20}
                    />
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {`${data.author[0].last_name}${data.author[0].first_name}`}
                    </div>
                  </div>
                  <div className="self-stretch w-px my-1 bg-gray-300"></div>
                </>
              )} */}
              <div className="text-sm text-gray-500 dark:text-gray-400 md:ml-0">
                {formatDate(
                  data?.date?.start_date || data.createdTime,
                  CONFIG.lang
                )}
              </div>
            </div>
            <div className="mb-4">
              <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
                {data.summary}
              </p>
            </div>
            <div className="flex gap-2">
              {data.tags &&
                data.tags.map((tag: string, idx: number) => (
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
